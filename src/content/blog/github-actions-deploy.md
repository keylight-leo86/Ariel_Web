---
title: 用 GitHub Actions 自动部署静态站
description: 推送到主分支后，由工作流安装依赖、构建，并把 dist 交到 GitHub Pages。
date: 2026-10-09
tags:
  - GitHub Actions
  - 部署
draft: false
---

自动部署的意思是：代码推到主分支之后，由仓库里的工作流安装依赖、执行构建，再把生成的静态文件交到 GitHub Pages。不需要在自己的电脑上打包，也不用手动上传 `dist`。

## 工作流分成两段

一次典型的 Pages 部署分成构建和发布。构建跑在一台临时的 Linux 机器上：检出仓库，安装 Node.js，根据 Pages 环境算出站点地址和基路径，执行安装与构建，再把 `dist` 打成产物。发布阶段只拿这份产物，把它部署到 `github-pages` 环境。

权限要收窄。读代码用 `contents: read`，发布才需要 `pages: write`，并用 `id-token` 做身份校验。同一组部署可以排队，避免两次推送抢着写同一份站点。下面是触发条件和权限的示意：

```yaml
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write
```

`workflow_dispatch` 让你在 Actions 页面也能手动跑一遍。排查时不用为了试部署而空提交一次。

## 把站点地址传进构建

项目站点不一定挂在域名根目录。`actions/configure-pages` 会给出 origin 和 base_path。构建时把它们传给静态站点生成器，生成的链接和站点地图才会指向最终地址。环境变量可以这样接：

```yaml
env:
  SITE: ${{ steps.pages.outputs.origin }}
  BASE_PATH: ${{ steps.pages.outputs.base_path }}
```

本地没有这两个变量时，用 `http://localhost:4321` 和 `/` 作为默认值，开发不受影响。如果线上的 `SITE` 配错，站点地图里的绝对地址会全部偏掉，页面看起来却还像是正常的，所以构建日志值得看一眼。

安装和构建尽量和本地一致：

```bash
npm ci
npm run build
```

`npm ci` 按锁文件安装，不会擅自改版本。只跑 `npm install` 有时会更新锁文件，结果本地能过、线上对不上。工作流里如果指定了 Node 22，本地也用接近的版本，少一类只有持续集成才出现的差异。

## 失败时先看构建日志

自动部署不会替你改正文或 frontmatter。文章少一个必填字段，或者项目链接不是合法 URL，工作流会在构建失败时停住，Pages 仍停留在上一份成功的产物。坏的构建不会覆盖正在对外的页面。

失败时先看构建作业里的第一条错误，而不是先怀疑 Pages 的开关。常见原因就几类：依赖没装上、内容 schema 不通过、输出目录不是 `dist`、环境变量名和配置里读取的名字不一致。后面的长串日志，多半是第一条错误带出来的。

部署成功之后，用无痕窗口打开站点，点首页、一篇文章和项目列表。缓存有时会让你以为还是旧版。确认导航和返回列表都正常，这次自动部署才算走完。

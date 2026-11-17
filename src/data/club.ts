// 社团固定数据。前八个部门的名称和简介逐字取自招新海报，修改前请对照海报；
// 音游部和 Others 是海报之后补充的，文字取自社团提供的部门卡片图。
export type Department = {
  id: string;
  name: string;
  /** 两行简介 */
  lines: [string, string];
  /** 部门标签的配色：pink / blue 交替 */
  tone: 'pink' | 'blue';
};

export const DEPARTMENTS: Department[] = [
  { id: 'manga', name: '漫画部', lines: ['绘画接龙', '一起分享画笔下的脑洞'], tone: 'pink' },
  { id: 'wota', name: 'wota部', lines: ['一起练习，一起打 wota 艺', '为喜欢的舞台尽情应援'], tone: 'blue' },
  { id: 'dance', name: '宅舞部', lines: ['宅舞、随舞', '把喜欢带到舞台上'], tone: 'pink' },
  { id: 'cos', name: 'COS部', lines: ['cosplay', '把喜欢的角色带到现实'], tone: 'blue' },
  { id: 'music', name: '轻音部', lines: ['操场约歌、活动音频制作', '让我们的热爱被听见'], tone: 'pink' },
  { id: 'writing', name: '文案部', lines: ['茶绘交流、活动文案编写', '同人创作'], tone: 'blue' },
  { id: 'outreach', name: '外联部', lines: ['安排与联络社团联动活动', '与更多同好相遇'], tone: 'pink' },
  { id: 'photo', name: '摄影部', lines: ['负责活动摄影', '记录每一次相聚'], tone: 'blue' },
  { id: 'rhythm', name: '音游部', lines: ['音游出勤、谱面分享', '随节拍跃动，与同好共振'], tone: 'pink' },
];

/** 不属于任何正式部门的兴趣，编号固定为 00，排在部门列表最后，不计入部门数量 */
export const DEPARTMENT_OTHERS: Department = {
  id: 'others',
  name: 'Others',
  lines: ['番剧交流、桌游集结', '只要热爱，随时为你再建新部'],
  tone: 'blue',
};

/** 海报原文 */
export const INTRO = [
  '这里是湖工 ACG 爱好者的聚集地。',
  '按自己的兴趣加入部门，也可以一起入群聊天。',
  '大家都很友善，欢迎带着你的热爱来玩！',
];
export const DEPARTMENTS_HEADING = { title: '找到你的热爱', sub: '九个部门，总有一个让你心动。', en: 'DEPARTMENTS' };
export const ACTIVITIES_HEADING = { title: '一起，让日常闪闪发光', en: 'ACTIVITIES' };
export const ACTIVITY_NOTE = '具体活动可以入群后咨询各部门部长哦。';

/** 海报“一起，让日常闪闪发光”板块 */
export const ACTIVITY_TAGS = ['漫展', '演出', '社团日常'];
export const ACTIVITY_POINTS = ['不定期开展社团活动', '漫展团票，享更多优惠', '漫展摊位，一起出摊玩'];

/** 海报中的活动照片（从海报裁出，分辨率较低；有原图时替换同名文件即可） */
export const ACTIVITY_PHOTOS = [
  { src: '/images/activity-1.webp', alt: '社团在漫展摊位前与同好交流' },
  { src: '/images/activity-2.webp', alt: '社团活动中的手办与周边' },
  { src: '/images/activity-3.webp', alt: '2025 年 Ariel 动漫社夏日舞台合影' },
  { src: '/images/activity-4.webp', alt: 'Ariel 动漫社在校园内摆摊招新' },
];

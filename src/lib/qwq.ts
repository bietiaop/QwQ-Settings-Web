export const convertSettings = <SettingItem>(settings: string) => {
  return JSON.parse(settings) as SettingItem;
};

export const allQwQSettings = [
  'intercept_recall',
  'simplify_bubble_font',
  'simplify_bubble_avatar',
  'allow_group_flash_pic',
  'disable_flash_picture',
  'repeat_message',
  'message_tail',
  'message_encrypt',
  'disable_visit_group_animation',
  'super_group_file',
  'show_ban_operator',
  'optimize_at_sort',
  'simplify_homepage_sidebar',
  'disable_update_check',
  'one_click_like',
  'force_tablet_mode',
  'auto_group_sign',
  'auto_keep_group_fire',
  'auto_keep_c2c_fire',
  'auto_collect_energy',
  'auto_group_lucky_char',
  'auto_c2c_lucky_char',
  'auto_home_page_like',
  'auto_zone_like',
  'auto_zone_message',
  'disable_hot_update_so_by_traffic',
  'disable_qq_crash_report',
  'disable_useless_packet',
  'disable_qrlogin_check',
] as const;

export type SettingsKeys = (typeof allQwQSettings)[number];

export type keys = 'chat' | 'message' | 'group' | 'personal' | 'auto' | 'lab';

export interface PageSetting {
  name: SettingsKeys;
  label: React.ReactNode;
  description?: React.ReactNode;
  type: 'switch' | 'input' | 'textarea';
}

export type PagesSettings = {
  [key in keys]: PageSetting[];
};

export const settings: PagesSettings = {
  chat: [
    {
      name: 'intercept_recall',
      label: '消息反撤回',
      type: 'switch',
    },
    {
      name: 'simplify_bubble_font',
      label: '简化气泡字体',
      description: '让气泡和字体变成默认的，避免阴间气泡和阴间字体叠加使得文字难以看懂。',
      type: 'switch',
    },
    {
      name: 'simplify_bubble_avatar',
      label: '简洁圆头像',
      type: 'switch',
    },
    {
      name: 'disable_flash_picture',
      label: '以图片的方式打开闪照',
      type: 'switch',
    },
    {
      name: 'allow_group_flash_pic',
      label: '允许群聊闪照消息',
      type: 'switch',
    },
    {
      name: 'repeat_message',
      label: '复读机 +1',
      description: '普普通通的加一复读机，是在消息旁边显示一个加一按钮',
      type: 'switch',
    },
  ],
  message: [
    {
      name: 'message_tail',
      label: '小尾巴',
      description: '每条消息后面携带一个小尾巴，<highlight>留空则为关闭小尾巴。</highlight>',
      type: 'textarea',
    },
    {
      name: 'message_encrypt',
      label: '消息加密密钥',
      description: '消息将会通过此密钥加密抄送，保证消息安全性。',
      type: 'textarea',
    },
  ],
  group: [
    {
      name: 'disable_visit_group_animation',
      label: '屏蔽入群动画',
      type: 'switch',
    },
    {
      name: 'super_group_file',
      label: '群文件增强',
      description:
        '允许自定义文件夹或文件名称，挪动文件到指定文件夹，上传应用自动重命名，下载应用去除<highlight>.1</highlight>后缀。',
      type: 'switch',
    },
    {
      name: 'show_ban_operator',
      label: '显示群禁言操作者',
      type: 'switch',
    },
    {
      name: 'optimize_at_sort',
      label: '艾特群成员列表排序优化',
      description: '使得艾特群成员时，群成员列表按照群主/管理员优先的方式排序。',
      type: 'switch',
    },
  ],
  personal: [
    {
      name: 'simplify_homepage_sidebar',
      label: '主页侧边栏简化',
      type: 'switch',
    },
    {
      name: 'disable_update_check',
      label: '禁止自动更新检查',
      description: '禁止QQ获取更新信息，检查当前版本是否为最新版本。',
      type: 'switch',
    },
    {
      name: 'one_click_like',
      label: '一键点赞20次',
      type: 'switch',
    },
    {
      name: 'force_tablet_mode',
      label: '强制平板模式登录',
      description: '实现两台安卓手机设备共存登录，解放生产力。',
      type: 'switch',
    },
  ],
  auto: [
    {
      name: 'auto_group_sign',
      label: '群自动签到',
      type: 'switch',
    },
    {
      name: 'auto_keep_group_fire',
      label: '群自动收续火',
      type: 'switch',
    },
    {
      name: 'auto_keep_c2c_fire',
      label: '私聊自动续火',
      type: 'switch',
    },
    {
      name: 'auto_collect_energy',
      label: '自动收集私聊奇异能量',
      type: 'switch',
    },
    {
      name: 'auto_group_lucky_char',
      label: '自动抽卡群幸运字符',
      type: 'switch',
    },
    {
      name: 'auto_c2c_lucky_char',
      label: '自动抽卡私聊幸运字符',
      type: 'switch',
    },
    {
      name: 'auto_home_page_like',
      label: '自动主页回赞',
      type: 'switch',
    },
    {
      name: 'auto_zone_like',
      label: '自动空间点赞',
      type: 'switch',
    },
    {
      name: 'auto_zone_message',
      label: '自动空间留言',
      type: 'switch',
    },
  ],
  lab: [
    {
      name: 'disable_hot_update_so_by_traffic',
      label: '禁止使用流量热更新SO文件',
      type: 'switch',
    },
    {
      name: 'disable_useless_packet',
      label: '拦截QQ无用发包',
      description: '禁止QQ发送没什么鸟用的网络包占有网络资源，同时该功能的开启会自动开启主题修复。',
      type: 'switch',
    },
    {
      name: 'disable_qq_crash_report',
      label: '禁用QQ崩溃上报',
      description: '禁止QQ崩溃上报日志以及禁用崩溃后自杀（阻止闪退？）。',
      type: 'switch',
    },
    {
      name: 'disable_qrlogin_check',
      label: '禁用扫码授权检查',
      description: '禁用后，使用相册或长按识别二维码时不再阻止扫码授权登录。',
      type: 'switch',
    },
  ],
};

import type { SettingsKeys } from './qwq';
import { getUrlParams } from './utils';
import VConsole from 'vconsole';

new VConsole();
// 如果当前页面 URL 参数_wv不是9983，那么就跳转到9983
const params = getUrlParams();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//// @ts-expect-error
// console.log(window.mqq.ui.openUrl.toString());

if (params.get('_wwv') !== '9983') {
  const url = new URL(window.location.href);
  // 添加之前的参数
  for (const [key, value] of params) {
    url.searchParams.set(key, value);
  }
  url.searchParams.set('_wwv', '9983');
  url.searchParams.set('_wv', '536870913');
  url.searchParams.set('_bid', '2450');
  url.searchParams.set('_nav_alpha', '0');
  url.searchParams.set('_nav_txtclr', 'ffffff');
  url.searchParams.set('_nav_titleclr', 'ffffff');
  url.searchParams.set('_nav_anim', 'true');
  url.searchParams.set('from_web', '3');

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //// @ts-expect-error
  // window?.mqq?.ui?.openUrl({
  //   url: url.toString(),
  //   target: 2,
  // });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //// @ts-expect-error
  // window?.mqq?.ui?.invokeURL(window.location.href);
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
window?.mqq?.ui?.setWebViewBehavior({
  actionButton: 0,
  statusBarColor: 16777215,
  navTextColor: 0,
  navBottomLine: 0,
  titleBarHide: true,
  titleBarHideDuration: 0,
  titleText: '',
});
if (process.env.NODE_ENV === 'development') {
  window.qwq = {
    getQQVersion: () => '11.0.0',
    getStatus: () => 'LSPosed已激活',
    getModuleVersion: () => '1.0.0',
    toast: (msg: string) => alert(msg),
    getSetting: (key: SettingsKeys) => {
      return JSON.stringify({
        failed: false,
        value: ['message_tail', 'message_encrypt'].includes(key) ? 'TEST' : false,
      });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSettingString: (_key: string, _value: string) => {
      // do nothing
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSetting: (_key: string, _value: boolean) => {
      // do nothing
    },
  };
}

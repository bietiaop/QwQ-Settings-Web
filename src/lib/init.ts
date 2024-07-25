import type { SettingsKeys } from './qwq';
import { getUrlParams } from './utils';

// 如果当前页面 URL 参数_wv不是9983，那么就跳转到9983
const params = getUrlParams();
if (params.get('_wv') !== '9983') {
  const url = new URL(window.location.href);
  // 添加之前的参数
  for (const [key, value] of params) {
    url.searchParams.set(key, value);
  }
  url.searchParams.set('_wv', '9983');

  // 重定向
  window.location.href = url.toString();
}

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

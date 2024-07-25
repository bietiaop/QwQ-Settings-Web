import type { SettingsKeys } from './qwq';

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
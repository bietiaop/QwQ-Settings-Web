export {};
// 模拟 qwq 函数
declare global {
  interface Window {
    qwq: {
      getQQVersion: () => string;
      getStatus: () => string;
      getModuleVersion: () => string;
      toast: (msg: string) => void;
      getSetting: (key: Settings.KEYS) => string;
      setSettingString: (key: string, value: string) => void;
      setSetting: (key: string, value: boolean) => void;
    };
  }
}

import type { SettingsKeys } from '@/lib/qwq';

type SettingValue = string | boolean;

declare interface SettingItem {
  failed: boolean;
  value: SettingValue;
}

/** 设置 */
declare namespace Settings {
  export type ALL = {
    [key in SettingsKeys]: SettingItem;
  };
}

import { setSetting } from '@/store/module/qwq';
import { useAppDispatch, useAppSelector } from './store';
import type { SettingsKeys } from '@/lib/qwq';

const useQwQ = () => {
  const dispatch = useAppDispatch();
  const useWatch = () => {
    const state = useAppSelector((state) => state.qwq);
    return state.value;
  };

  const setString = (key: SettingsKeys, value: string) => {
    window.qwq.setSettingString(key, value);
    dispatch(setSetting({ key, value }));
  };

  const setBoolean = (key: SettingsKeys, value: boolean) => {
    window.qwq.setSetting(key, value);
    dispatch(setSetting({ key, value }));
  };

  return {
    useWatch,
    setString,
    setBoolean,
  };
};

export default useQwQ;

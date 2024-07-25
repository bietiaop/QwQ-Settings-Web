import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { allQwQSettings, convertSettings } from '@/lib/qwq';
import type { SettingsKeys } from '@/lib/qwq';
import type { Settings } from '@/types';
import type { RootState } from '@/store';

export interface QwQState {
  value: Settings.ALL;
}

const initialState: QwQState = {
  value: {
    ...allQwQSettings.reduce((acc, key) => {
      acc[key] = convertSettings(window.qwq.getSetting(key));
      return acc;
    }, {} as Settings.ALL),
  },
};

export const qwqSlice = createSlice({
  name: 'qwq',
  initialState,
  reducers: {
    setSetting: <T extends SettingsKeys>(
      state: QwQState,
      action: PayloadAction<{ key: T; value: Settings.ALL[T]['value'] }>,
    ) => {
      state.value[action.payload.key] = {
        failed: state.value[action.payload.key].failed || false,
        value: action.payload.value,
      };
    },
  },
});

export const { setSetting } = qwqSlice.actions;

export const selectCount = (state: RootState) => state.qwq;

export default qwqSlice.reducer;

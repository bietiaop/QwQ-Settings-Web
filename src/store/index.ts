import { configureStore } from '@reduxjs/toolkit';
import qwqReducer from './module/qwq';

const store = configureStore({
  reducer: {
    qwq: qwqReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

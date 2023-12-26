import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData.reducer,
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});

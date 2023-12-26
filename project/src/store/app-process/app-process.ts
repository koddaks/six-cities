import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppProcess } from '../../types/state';
import { NameSpace, SortType } from '../../const';
import { City } from '../../types';

const initialState: AppProcess = {
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  sortType: 'POPULAR',
};


export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    setSortType: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    }
  },
});

export const { changeCity, setSortType } = appProcess.actions;

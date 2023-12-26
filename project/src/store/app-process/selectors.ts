import { NameSpace, SortType } from '../../const';
import { City } from '../../types';
import { State } from '../../types/state';

export const getCurrentCity = (state: State): City => state[NameSpace.App].city;

export const getSortType = (state: State): SortType =>
  state[NameSpace.App].sortType;

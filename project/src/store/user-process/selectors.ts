import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: State): boolean =>
  state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;

export const getUserEmail = (state: State): string =>
  state[NameSpace.User].userData.email;
export const getAvatarUrl = (state: State): string =>
  state[NameSpace.User].userData.avatarUrl;

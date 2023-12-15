import { AuthorizationStatus } from '../const';
import { State } from '../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state.authorizationStatus;

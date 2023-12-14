import { store } from '../store';
import { setError } from '../store/action';
import { clearErrorAction } from '../store/api-actions';

export const processErrorHandle = (message: string | null): void => {
  store.dispatch(setError({ error: message }));
  store.dispatch(clearErrorAction());
};

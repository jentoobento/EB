import TYPES from '../types/articleTypes';

export const getUserDataSuccess = (payload) => ({
  type: TYPES.GET_USER_DATA_SUCCESS,
  payload,
});

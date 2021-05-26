import axios from 'axios';
import { authorize } from 'react-native-app-auth';
import TYPES from '../types/articleTypes';

export const getUserDataSuccess = (payload) => ({
  type: TYPES.GET_USER_DATA_SUCCESS,
  payload,
});

export const getUserDataFailure = (payload) => ({
  type: TYPES.GET_USER_DATA_FAILURE,
  payload,
});

export const getUserData = (token) => async (dispatch) => {
  axios({
    method: 'GET',
    url: 'https://api.github.com/user/repos',
    headers: {
      Authorization: `token ${token}`,
    },
  })
    .then(({ data }) => {
      console.log('response from axios', data);
      dispatch(getUserDataSuccess(data));
    })
    .catch((error) => {
      console.log('axios error', error);
      dispatch(getUserDataFailure('Couldn\'t get data. Please try again.'));
    });
};

export const authorizeThirdPartySuccess = (payload) => ({
  type: TYPES.AUTHORIZE_SUCCESS,
  payload,
});

export const authorizeThirdPartyFailure = (payload) => ({
  type: TYPES.AUTHORIZE_FAILURE,
  payload,
});

export const authorizeThirdParty = (config) => async (dispatch) => {
  authorize(config)
    .then(({ accessToken }) => {
      console.log('response from authorize', accessToken);
      dispatch(authorizeThirdPartySuccess(accessToken));
      dispatch(getUserData(accessToken));
    })
    .catch((error) => {
      console.log('authorize error', error);
      dispatch(authorizeThirdPartyFailure('We could not sign you in. Please try again.'));
    });
};

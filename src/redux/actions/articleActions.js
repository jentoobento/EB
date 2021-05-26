import axios from 'axios';
import { authorize } from 'react-native-app-auth';
import TYPES from '../types/articleTypes';

/**
 * Sets the array of user items as listData in the store
 * @param {Array} listData Array of user items to be displayed in ui
 */
export const getUserDataSuccess = (listData) => ({
  type: TYPES.GET_USER_DATA_SUCCESS,
  payload: listData,
});

/**
 * Sets the errorMessage in the store
 * @param {String} errorMessage
 */
export const getUserDataFailure = (errorMessage) => ({
  type: TYPES.GET_USER_DATA_FAILURE,
  payload: errorMessage,
});

/**
 * Fetches data from axios using the user's access token
 * @param {String} token the accessToken received when user signs in
 */
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

/**
 * Sets the accessToken in the store
 * @param {String} accessToken the access token received when user signs in
 */
export const authorizeThirdPartySuccess = (accessToken) => ({
  type: TYPES.AUTHORIZE_SUCCESS,
  payload: accessToken,
});

/**
 * Sets the errorMessage in the store
 * @param {String} errorMessage
 */
export const authorizeThirdPartyFailure = (errorMessage) => ({
  type: TYPES.AUTHORIZE_FAILURE,
  payload: errorMessage,
});

/**
 * Attempts to sign in to the user's account
 * Returns an accessToken on success
 * @param {Object} config the configuration settings to call authorize on based on source
 */
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

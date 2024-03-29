import axios from 'axios';
import { authorize, revoke } from 'react-native-app-auth';
import TYPES from '../types/articleTypes';

/**
 * Sets the array of user items as listData in the store
 * @param {Array} listData Array of user items to be displayed in ui
 */
const getUserDataSuccess = (listData) => ({
  type: TYPES.GET_USER_DATA_SUCCESS,
  payload: listData,
});

/**
 * Sets the errorMessage in the store
 * @param {String} errorMessage
 */
const getUserDataFailure = (errorMessage) => ({
  type: TYPES.GET_USER_DATA_FAILURE,
  payload: errorMessage,
});

/**
 * Fetches data from axios using the user's access token
 * @param {String} token the accessToken received when user signs in
 * @param {Function} successCallback the function to run if api call was successful
 */
export const getUserData = (token, successCallback = () => {}) => async (dispatch) => {
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
      successCallback();
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
const authorizeThirdPartySuccess = (accessToken) => ({
  type: TYPES.AUTHORIZE_SUCCESS,
  payload: accessToken,
});

/**
 * Sets the errorMessage in the store
 * @param {String} errorMessage
 */
const authorizeThirdPartyFailure = (errorMessage) => ({
  type: TYPES.AUTHORIZE_FAILURE,
  payload: errorMessage,
});

/**
 * Attempts to sign in to the user's account
 * Returns an accessToken on success
 * @param {Object} config the configuration settings to call authorize on based on source
 * @param {Function} successCallback the function to run if getUserData is successful
 */
export const authorizeThirdParty = (config, successCallback = () => {}) => async (dispatch) => {
  authorize(config)
    .then(({ accessToken }) => {
      console.log('response from authorize', accessToken);
      dispatch(authorizeThirdPartySuccess(accessToken));
      dispatch(getUserData(accessToken, successCallback));
    })
    .catch((error) => {
      console.log('authorize error', error);
      dispatch(authorizeThirdPartyFailure('We could not sign you in. Please try again.'));
    });
};

/**
 * Revokes the accessToken
 * @param {Object} config the configuration settings based on source
 */
export const revokeThirdParty = (
  config,
  otherParams,
  successCallback,
  failureCallback,
) => async () => {
  revoke(
    config,
    {
      ...otherParams,
      includeBasicAuth: true,
      sendClientId: true,
    },
  )
    .then((response) => {
      console.log('response from revoke', response);
      if (response.ok) {
        successCallback();
      } else {
        failureCallback(response.status);
      }
    })
    .catch((error) => {
      console.log('revoke error', error);
      failureCallback(error.status);
    });
};

/**
 * For debugging purposes only
 */
const addNoteSuccess = () => ({
  type: TYPES.ADD_NOTE_SUCCESS,
});

/**
 * Sets the errorMessage in the store
 * @param {String} errorMessage
 */
const addNoteFailure = (errorMessage) => ({
  type: TYPES.ADD_NOTE_FAILURE,
  payload: errorMessage,
});

/**
 * Posts data to fake api
 * @param {Object} noteData title and body of note
 * @param {Function} callback function to run on success case (update ui)
 */
export const addNote = (noteData, callback = () => {}) => async (dispatch) => {
  axios({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: { noteData },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(({ data }) => {
      console.log('response from axios', data);
      dispatch(addNoteSuccess());
      callback();
    })
    .catch((error) => {
      console.log('axios error', error);
      dispatch(addNoteFailure('Couldn\'t add note. Please try again.'));
    });
};

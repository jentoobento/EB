import {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
} from '@env';
import ARTICLE_TYPES from '../types/articleTypes';
import constants from '../../constants/config';

const initialState = {
  accounts: [
    {
      name: 'GitHub',
      type: constants.github,
      config: {
        redirectUrl: 'com.reactnativestarterkit://oauthredirect',
        clientId: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        scopes: ['user', 'repo'],
        additionalHeaders: { Accept: 'application/json' },
        serviceConfiguration: {
          authorizationEndpoint: 'https://github.com/login/oauth/authorize',
          tokenEndpoint: 'https://github.com/login/oauth/access_token',
          revocationEndpoint:
            `https://github.com/settings/connections/applications/${GITHUB_CLIENT_ID}`,
        },
      },
    },
    {
      name: 'Spotify',
      type: constants.spotify,
      config: {
        // TODO
        clientId: SPOTIFY_CLIENT_ID,
        clientSecret: SPOTIFY_CLIENT_SECRET,
        redirectUrl: 'com.reactnativestarterkit://oauthredirect',
        scopes: [],
        serviceConfiguration: {
          authorizationEndpoint: '',
          tokenEndpoint: '',
        },
      },
    },
  ],
  listData: [],
  userToken: '',
  errorMessage: '',
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_TYPES.GET_USER_DATA_SUCCESS:
      return {
        ...state,
        listData: action.payload,
      };
    case ARTICLE_TYPES.AUTHORIZE_SUCCESS:
      return {
        ...state,
        userToken: action.payload,
      };
    case ARTICLE_TYPES.GET_USER_DATA_FAILURE:
    case ARTICLE_TYPES.AUTHORIZE_FAILURE:
    case ARTICLE_TYPES.ADD_NOTE_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case ARTICLE_TYPES.ADD_NOTE_SUCCESS:
    default:
      return state;
  }
};

export default articleReducer;

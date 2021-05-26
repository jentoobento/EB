import { CLIENT_ID, CLIENT_SECRET } from '@env';
import ARTICLE_TYPES from '../types/articleTypes';
import constants from '../../constants/config';

const initialState = {
  accounts: [
    {
      name: 'GitHub',
      type: constants.github,
      baseUrl: 'https://github.com',
      config: {
        redirectUrl: 'com.reactnativestarterkit://oauthredirect',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        scopes: ['user', 'repo'],
        additionalHeaders: { Accept: 'application/json' },
        serviceConfiguration: {
          authorizationEndpoint: 'https://github.com/login/oauth/authorize',
          tokenEndpoint: 'https://github.com/login/oauth/access_token',
          revocationEndpoint:
            `https://github.com/settings/connections/applications/${CLIENT_ID}`,
        },
      },
    },
    {
      name: 'Spotify',
      type: constants.spotify,
      config: {},
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

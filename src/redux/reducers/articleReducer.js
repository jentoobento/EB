import ARTICLE_TYPES from '../types/articleTypes';

const initialState = {
  accounts: [
    {
      name: 'GitHub',
      url: 'http://github',
    },
    {
      name: 'Spotify',
      url: 'http://spotify',
    },
  ],
  listData: [],
  userToken: '',
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_TYPES.GET_USER_DATA_SUCCESS:
      return {
        ...state,
        listData: action.payload,
      };
    default:
      return state;
  }
};

export default articleReducer;

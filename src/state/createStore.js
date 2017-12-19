import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as types from '../actions/types';

const initialState = {
  isAchievementsActive: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ACHIEVEMENTS_ACTIVE:
      return { ...state, isAchievementsActive: true };
    case types.SET_ACHIEVEMENTS_INACTIVE:
      return { ...state, isAchievementsActive: false };
    default:
      return state;
  }
};

const persistedState = initialState;

export default () =>
  createStore(rootReducer, persistedState, composeWithDevTools());

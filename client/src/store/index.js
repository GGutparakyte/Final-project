import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import auth from './auth';
import cart from './cartRedux';

const reducer = combineReducers({ auth, cart });

const store = configureStore({ reducer });

export default store;

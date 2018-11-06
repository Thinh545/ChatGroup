import { compose, combineReducers, applyMiddleware, createStore } from 'redux'
import { reactReduxFirebase, getFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import usersReducer from '../reducers/users'
import messagesReducer from '../reducers/messages'

var config = {
  apiKey: "AIzaSyA9bkol6af0Wz-ozhS78n2TOs3LNya8xGg",
  authDomain: "chat-group-18857.firebaseapp.com",
  databaseURL: "https://chat-group-18857.firebaseio.com",
  projectId: "chat-group-18857",
  storageBucket: "chat-group-18857.appspot.com",
  messagingSenderId: "660645655047"
};

const configDB = {
  userProfile: 'users', // firebase root where user profiles are stored
  firebaseStateName: 'firebase' // should match the reducer name ('firebase' is default)
}

export function configureStore(initialState = {}) {
  firebase.initializeApp(config)

  const createStoreWithFirebase =
    compose(reactReduxFirebase(firebase, configDB),
      applyMiddleware(thunk.withExtraArgument(getFirebase))
    )(createStore)

  const store = createStoreWithFirebase(
    combineReducers({
      firebase: firebaseReducer,
      auth: authReducer,
      users: usersReducer,
      messages: messagesReducer,
    })
  )

  return store;
}

export { firebase, configureStore as default };
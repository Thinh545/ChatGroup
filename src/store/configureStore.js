// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import authReducer from '../reducers/auth';
// import usersReducer from '../reducers/users'
// import messagesReducer from '../reducers/messages'
// import firebase from '../firebase/firebase'
// import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default (initialState = {  }) => {
//   const config = {
//     userProfile: 'users', // firebase root where user profiles are stored
//     firebaseStateName: 'firebase' // should match the reducer name ('firebase' is default)
//   }

//   const createStoreWithFirebase =
//     compose(reactReduxFirebase(firebase, config),
//       applyMiddleware(thunk)
//     )(createStore)

//   const store = createStoreWithFirebase(
//     combineReducers({
//       auth: authReducer,
//       users: usersReducer,
//       messages: messagesReducer,
//     })
//   );

//   return store;
// };
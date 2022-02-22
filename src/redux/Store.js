import {configureStore} from '@reduxjs/toolkit';
import HomePosts from './slices/HomePosts';
import User from './slices/User';
import Comments from './slices/Comments';
import Profile from "./slices/Profile"

export default configureStore({
  reducer: {HomePosts, User, Comments , Profile},
});

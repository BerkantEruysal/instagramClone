import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn : false
};

const User = createSlice({
  name: 'User',
  initialState,
  reducers: {
    logIn: state => {
        state.isLoggedIn = true
 
    },
    logOut: state => {
      state.isLoggedIn = false;
 
    },
  },
});

export const {logIn , logOut} = User.actions;

export default User.reducer;

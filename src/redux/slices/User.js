import {createSlice} from '@reduxjs/toolkit';
import {logInApi} from '../../api/AuthenticationApi';

const initialState = {
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
};

const User = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setTokens : (state , {payload}) => {
<<<<<<< Updated upstream
      state.accessToken = payload.accessToken,
      state.refreshToken = payload.refreshToken
      console.log(state)
=======
      state.accessToken = payload.accessToken
      state.refreshToken = payload.refreshToken
      state.isLoggedIn = true
    
>>>>>>> Stashed changes
    }
  },
});

export const {setTokens} = User.actions;

export default User.reducer;

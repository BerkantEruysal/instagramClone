import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  postData: [],
  storyData: [
    {
      id: 0,
      image: require('../../assets/examplePostImage.png'),
      name: 'story name',
    },
    {id: 1, image: require('../../assets/examplePostImage.png'), name: 'tatil'},
    {id: 2, image: require('../../assets/examplePostImage.png'), name: 'okul'},
    {id: 3, image: require('../../assets/examplePostImage.png'), name: 'kedim'},
    {id: 4, image: require('../../assets/examplePostImage.png'), name: 'araba'},
  ],
};

const Profile = createSlice({
  name: "Profile",
  initialState,
  reducers: {
    addToUserPostData : (state , {payload}) => {
      state.postData = [...state.postData , ...payload]
    }
  },
});

export const {addToUserPostData} = Profile.actions;

export default Profile.reducer;

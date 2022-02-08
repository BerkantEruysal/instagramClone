import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
      id : 1,
      userName: 'berkanteruysall',
      isLiked : false,
      profileImage: require('../../assets/tempProfileIcon.png'),
      activeStory : false ,
      postImage: require('../../assets/examplePostImage.png'),
      loggedUserProfileIcon: require("../../assets/tempProfileIcon.png") ,
      numberOfLikes: 142,
      postImageWidth : 375,
      postImageHeight : 375,
      timePassed : "10 minutes",
      postDescription:
        'Explanation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
    },
    {
      id : 2,
      userName: 'sojiner',
      isLiked : true,
      profileImage: require('../../assets/tempProfileIcon.png'),
      activeStory : true ,
      postImage: require('../../assets/examplePostImage2.png'),
      loggedUserProfileIcon: require("../../assets/tempProfileIcon.png") ,
      postImageWidth : 375,
      postImageHeight : 468.75,
      timePassed : "3 hours",
      numberOfLikes: 56,
      postDescription:
        'Explanation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...',
    }
    
  ]

const HomePosts = createSlice({
  name: "homePosts",
  initialState,
  reducers: {
      likePost : (state , post) => {
        const index = state.findIndex(obj => obj.id == post.payload.id)
       if(post.payload.isLiked == true){
         state[index].isLiked = false;
         state[index].numberOfLikes -= 1;
         return
       }
       state[index].isLiked = true;
       state[index].numberOfLikes += 1;
       

          
      }
  },
});

export const {likePost} = HomePosts.actions;

export default HomePosts.reducer;

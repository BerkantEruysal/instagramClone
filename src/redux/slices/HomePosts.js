import {createSlice} from '@reduxjs/toolkit';

const initialState =  {
  posts : [],
  page : 1
}

const HomePosts = createSlice({
  name: 'homePosts',
  initialState,
  reducers: {
    addToPosts: (state , {payload}) => {
      state.posts = [...state.posts , ...payload.results]
      state.page ++;
   
      
    },
    likePost: (state, post) => {
      const index = state.findIndex(obj => obj.id == post.payload.id);
      if (post.payload.isLiked == true) {
        state[index].isLiked = false;
        state[index].numberOfLikes -= 1;
        return;
      }
      state[index].isLiked = true;
      state[index].numberOfLikes += 1;
    },

  },
});

export const {likePost, addToPosts} = HomePosts.actions;

export default HomePosts.reducer;

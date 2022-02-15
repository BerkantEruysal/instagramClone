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
    changeLikeCount : (state, {payload}) => {
      const index = state.posts.findIndex(obj => obj.unique_id == payload);
      if (state.posts[index].isLiked == true) {
        state.posts[index].isLiked = false;
        state.posts[index].likeCount -= 1;
        return;
      }
      state.posts[index].isLiked = true;
      state.posts[index].likeCount += 1;
    },

  },
});

export const {changeLikeCount, addToPosts} = HomePosts.actions;

export default HomePosts.reducer;

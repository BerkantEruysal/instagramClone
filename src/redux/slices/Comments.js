import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  idOfPost: null,
  page: 1,
  commentList: [],
};

const Comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setIdOfPost: (state, {payload}) => {
      state.idOfPost = payload;
    },
    addToComments: (state, {payload}) => {
      state.commentList = [...state.commentList, ...payload.results];
    },
    resetCommentState: state => {
    
      state.idOfPost = null
       state.page = 1 
       state.commentList = []
    },
    changeIsCommentLikedState: (state, {payload}) => {
      const index = state.commentList.findIndex(
        obj => obj.unique_id == payload,
      );
      if (state.commentList[index].isLiked == true) {
        state.commentList[index].isLiked = false;
        state.commentList[index].likeCount -= 1;
        return;
      }
      state.commentList[index].isLiked = true;
      state.commentList[index].likeCount += 1;
    },
    increasePage : (state) => {
      state.page++
    }
  },
});

export const { increasePage , addToComments, setIdOfPost, resetCommentState, changeIsCommentLikedState} =
  Comments.actions;

export default Comments.reducer;

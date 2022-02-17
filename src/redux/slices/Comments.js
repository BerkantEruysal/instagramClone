import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  idOfPost: null,
  idOfReplyedComment : null ,
  page: 1,
  commentList: [],
  replyButtonPressed : true,
  usernameOfReplyedComment : null
};

const Comments = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setUsernameOfReplyedComment : (state , {payload}) => {
      state.usernameOfReplyedComment = payload
    },
    setIdOfPost: (state, {payload}) => {
      state.idOfPost = payload;
    },
    setIdOfReplyedComment : (state , {payload}) => {
      state.idOfReplyedComment = payload
    },
    addToComments: (state, {payload}) => {
      state.commentList = [...state.commentList, ...payload];
    },
    addLoggedInUserComment: (state, {payload}) => {
      if(payload.idOfReplyedComment == null){
        state.commentList = [payload, ...state.commentList];
        return
      }
      const index = state.commentList.findIndex(comment => {
        return comment.unique_id == payload.idOfReplyedComment
      })
      state.commentList[index].replies.push(payload)
      
    },
    resetCommentState: state => {
      state.idOfPost = null;
      state.page = 1;
      state.commentList = [];
      state.idOfReplyedComment = null
      state.usernameOfReplyedComment = null
    },
    changeIsCommentLikedState: (state, {payload}) => {
      console.log(payload)
      let comment;
      if(payload.parent_unique_id == undefined){
       const index = state.commentList.findIndex(
          obj => obj.unique_id == payload.unique_id
      )
      comment = state.commentList[index]
      console.log(index , "a")
    
    }else{
       let index = state.commentList.findIndex(
          obj => obj.unique_id == payload.parent_unique_id
      )
      comment = state.commentList[index]
      index = state.commentList[index].replies.findIndex(
        obj => obj.unique_id == payload.unique_id)
        comment = comment.replies[index]
      }
     


      if (comment.isLiked == true) {
       comment.isLiked = false;
        comment.likeCount -= 1;
        return;
      }
      comment.isLiked = true;
      comment.likeCount += 1;
    },
    increasePage: state => {
      state.page++;
    },
    changeReplyButtonPressed : state => {
      state.replyButtonPressed = !state.replyButtonPressed
    }
  },
});

export const {
  increasePage,
  addToComments,
  setIdOfPost,
  resetCommentState,
  changeIsCommentLikedState,
  addLoggedInUserComment,
  setIdOfReplyedComment,
  changeReplyButtonPressed,
  setUsernameOfReplyedComment
} = Comments.actions;

export default Comments.reducer;

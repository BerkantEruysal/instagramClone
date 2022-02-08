import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
    userName: 'berkant',
    commentText: 'deneme deneme',
    activeStory: true,
    isStoryWatched: false,
    timePassed: '10d',
    numberOfLikes: 12,
  } , {
    userName: 'berkant',
    commentText: 'deneme deneme',
    activeStory: true,
    isStoryWatched: false,
    timePassed: '10d',
    numberOfLikes: 12,
  } , {
    userName: 'berkant',
    commentText: 'deneme deneme',
    activeStory: true,
    isStoryWatched: false,
    timePassed: '10d',
    numberOfLikes: 12,
  } , {
    userName: 'berkant',
    commentText: 'deneme deneme',
    activeStory: true,
    isStoryWatched: false,
    timePassed: '10d',
    numberOfLikes: 12,
  }];

const Comments = createSlice({
  name: "comments",
  initialState,
  reducers: {},
});

export const {} = Comments.actions;

export default Comments.reducer;

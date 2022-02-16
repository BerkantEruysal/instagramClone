import {addToPosts} from '../redux/slices/HomePosts';
import {changeLikeCount} from '../redux/slices/HomePosts';

export const getHomePosts = async (dispatch, getState, accessToken) => {
  let fetchedPosts = await fetch(
    `http://192.168.20.107:8000/api/post/following-posts?page=${getState}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  fetchedPosts = await fetchedPosts.json();
  dispatch(addToPosts(fetchedPosts));
};

export const likePost = async (dispatch, unique_id, accessToken) => {
    dispatch(changeLikeCount(unique_id))
  let response = await fetch(
    `http://192.168.20.107:8000/api/like/post/create/${unique_id}`,
    {method: 'POST', headers: {Authorization: `Bearer ${accessToken}`}},
  );

};


export const fetchComments = async ( unique_id , accessToken , page , callback) => {
    let data = await fetch(`http://192.168.20.107:8000/api/comment/list/${unique_id}?page=${page}` , {headers : {Authorization: `Bearer ${accessToken}`}})
    if(data.ok){
        data = await data.json();
    callback(data)
    }
    
}


export const likeComment = async (unique_id , accessToken , callback) => {
    let response = await fetch(`http://192.168.20.107:8000/api/like/comment/create/${unique_id}` , {method: 'POST', headers: {Authorization: `Bearer ${accessToken}`}})
}

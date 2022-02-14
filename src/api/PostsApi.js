import { addToPosts } from "../redux/slices/HomePosts"

export const getHomePosts = async (dispatch , getState) => {
    let fetchedPosts = await fetch(`http://192.168.20.107:8000/api/post/following-posts?page=${getState}` , {headers : {
        'Content-Type': 'application/json',
    Authorization : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ0OTQyNzY5LCJpYXQiOjE2NDQ4NTYzNjksImp0aSI6IjUzNjE2NmJjMmU4ZjQ1YTM4NTI1OWRhYmEyNDk1YTY1IiwidXNlcl9pZCI6Mn0.ZitlVlnJq3hFek-4vhH9dFlD_X9qhqPoElc-FxDH82E"
      } })
      fetchedPosts = await fetchedPosts.json()
      dispatch(addToPosts(fetchedPosts))
       
  
 
}
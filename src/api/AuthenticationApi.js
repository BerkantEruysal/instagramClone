import { setTokens } from "../redux/slices/User";
/*


  fetch("http://192.168.20.107:8000/api/post/own/" , {headers : {
    Authorization : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ0OTQyNzY5LCJpYXQiOjE2NDQ4NTYzNjksImp0aSI6IjUzNjE2NmJjMmU4ZjQ1YTM4NTI1OWRhYmEyNDk1YTY1IiwidXNlcl9pZCI6Mn0.ZitlVlnJq3hFek-4vhH9dFlD_X9qhqPoElc-FxDH82E"
  } })
  .then(response => response.json())
  .then(data => console.log(data));

*/


export const logIn = async (dispatch , {password, userName}) => {
    
  console.log("asd")
  let tokens = await fetch('http://192.168.20.107:8000/api/token/', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      password,
      username: userName,
    }),
  });
  tokens = await tokens.json();
  dispatch(setTokens({accessToken : tokens.access , refreshToken : tokens.refresh}))
  
  
};

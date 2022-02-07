import {configureStore} from "@reduxjs/toolkit";
import HomePosts from "./slices/HomePosts";
import User from "./slices/User";

export default configureStore({
    reducer : {HomePosts , User}
})
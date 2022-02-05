import {configureStore} from "@reduxjs/toolkit";
import HomePosts from "./slices/HomePosts";

export default configureStore({
    reducer : {HomePosts}
})
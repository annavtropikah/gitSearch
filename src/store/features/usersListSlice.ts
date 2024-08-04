import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GithubUser} from '../../shared/types';

type UsersStateType = {
  currentUser:{
    id: number|null,
    login: string,
    html_url:string,
    repo_counter: number|null,
    avatar_url:string,
  }
}


const initialState: UsersStateType = {
  currentUser:{
    id: null,
    login: '',
    html_url:'',
    repo_counter:null,
    avatar_url:"/image/user.png"
  }
}


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<{currentUser:GithubUser}>) => {
      state.currentUser = action.payload.currentUser
    },
  },

})


export const {setCurrentUser} = userSlice.actions

export const userReducer = userSlice.reducer
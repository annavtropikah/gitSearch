import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GithubUser} from '../../shared/types';

type UsersListStateType = {
  usersList: GithubUser[],
  searchValue:string,
  currentUser:{
    id: number|null,
    login: string,
    html_url:string,
    repo_counter: number,
    avatar_url:string,
  }
}



// первоначальное состояние
const initialState: UsersListStateType = {
  usersList: [],
  searchValue:"",
  currentUser:{
    id: null,
    login: '',
    html_url:'',
    repo_counter: 0,
    avatar_url:"/image/user.png"
  }
}



const usersListSlice = createSlice({
  name: "usersList",
  initialState,
  reducers: {
    setUsersList: (state, action: PayloadAction<{ data: GithubUser[] }>) => {
      state.usersList = action.payload.data
    },
    setSearchValue: (state, action: PayloadAction<{searchValue:string}>) => {
      state.searchValue = action.payload.searchValue
    },
    setCurrentUser: (state, action: PayloadAction<{currentUser:GithubUser}>) => {
      state.currentUser = action.payload.currentUser
    },
  },

})



export const {setUsersList} = usersListSlice.actions
export const {setSearchValue} = usersListSlice.actions
export const {setCurrentUser} = usersListSlice.actions






export const usersListReducer = usersListSlice.reducer
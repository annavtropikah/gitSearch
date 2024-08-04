import * as S from "./User.styled"
import { GithubUser } from "../../shared/types";
import { useAppDispatch } from "../hooks/hooks";
import { setCurrentUser } from "../../store/features/usersListSlice";


export default function User({ user }: { user: GithubUser }) {
    const dispatch = useAppDispatch()
    const handleUserClick = () => {
        dispatch(setCurrentUser({currentUser:user})) 
    }
    
    return (
        
            <S.ItemBox onClick={handleUserClick}>
                <img src={user.avatar_url} alt="" />
                <p>{user.login}</p>
                <p>{user.html_url}</p>
                <S.NumberBox>{user.repo_counter}</S.NumberBox>
            </S.ItemBox>
      
    )
}
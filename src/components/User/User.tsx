import * as S from "./User.styled"
import { GithubUser } from "../../shared/types";
import { useAppDispatch } from "../hooks/hooks";
import { setCurrentUser } from "../../store/features/usersListSlice";


export default function User({ user }: { user: GithubUser }) {
    const dispatch = useAppDispatch()
    const handleUserClick = () => {
        dispatch(setCurrentUser({ currentUser: user }))
    }

    return (

        <S.ItemBox onClick={handleUserClick}>
            <img src={user.avatar_url} alt="" />
            <span>{user.login}</span>
            <span>{user.html_url}</span>
            <span>{user.repo_counter}</span>
        </S.ItemBox>

    )
}
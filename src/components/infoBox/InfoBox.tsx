import { useAppSelector } from "../hooks/hooks"
import * as S from "./InfoBox.styled"


export default function InfoBox() {
const user=useAppSelector((state)=>state.usersList.currentUser)
  
    return (
        <S.InfoBox>
            <img src={user.avatar_url} alt="" />
            <h1>{user.login}</h1>
            <a href={user.html_url} target="_blank">{user.html_url}</a>
            <p>Количество <br /> репозиториев:{user.repo_counter}</p>
        </S.InfoBox>



    )
}
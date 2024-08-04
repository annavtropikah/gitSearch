import { useAppSelector } from "../hooks/hooks"
import * as S from "./InfoBox.styled"


export default function InfoBox() {
    const user = useAppSelector((state) => state.usersList.currentUser)

    return (
        <S.InfoBox>
            <img src={user.avatar_url} alt="" />


            {user.id ? (
                <S.InfoBoxContent>
                    <h1>{user.login}</h1>
                    <a href={user.html_url} target="_blank">{user.html_url}</a>
                    <span>Репозиториев:{user.repo_counter}</span>
                </S.InfoBoxContent>)
                :
                (<span>Выберите пользователя,чтобы увидеть детали</span>)}


        </S.InfoBox>



    )
}
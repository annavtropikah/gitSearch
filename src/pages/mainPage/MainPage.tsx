import Button from "../../components/button/Button"
import Header from "../../components/header/Header"
import InfoBox from "../../components/infoBox/InfoBox"
import Search from "../../components/search/Search"
import * as S from "./MainPage.styled"
import UserssList from "../../components/usersList/UsersList"

export default function MainPage() {
    return (
        <>
            <S.Box>
                <Header />
                <S.Container>
                    <Button />
                    <Search />
                </S.Container>
                <S.Container>
                    <InfoBox />
                    <UserssList />
                </S.Container>
            </S.Box>
        </>
    )
}
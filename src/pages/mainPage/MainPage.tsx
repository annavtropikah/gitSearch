import Button from "../../components/button/Button"
import Header from "../../components/header/Header"
import InfoBox from "../../components/infoBox/InfoBox"
// import Search from "../../components/search/Search"
import * as S from "./MainPage.styled"
import UsersList from "../../components/usersList/UsersList"

export default function MainPage() {
    return (
        <>
            <S.Box>
                <Header />
                <S.Content>
                    <S.Container>
                        <Button />
                        {/* <Search /> */}
                        <InfoBox />
                    </S.Container>
                    <UsersList />
                </S.Content>
            </S.Box>
        </>
    )
}
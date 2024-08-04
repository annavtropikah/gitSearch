import Item from "../User/User"
import * as S from "./UsersList.styled"
export default function UserssList() {
    
    return (
        <>
            <S.ListContent>
                <S.ListHeading>
                    {/* <img src="" alt="" /> */}
                    <p>Логин</p>
                    <p>Имя</p>
                    <S.NumberBox>Количество <br /> репозиториев</S.NumberBox>
                </S.ListHeading>
                <S.UsersList>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </S.UsersList>
            </S.ListContent>
        </>


    )
}
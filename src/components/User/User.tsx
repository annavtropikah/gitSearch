import * as S from "./User.styled"
export default function Item() {
    return (
        <>
         
            <S.ItemBox>
                {/* <img src="/image/user.png" alt="" /> */}
                <p>Логин Логинович Логин</p>
                <p>Иванов Иван Иванович</p>
                <S.NumberBox>3</S.NumberBox>
            </S.ItemBox>

        </>

    )
}
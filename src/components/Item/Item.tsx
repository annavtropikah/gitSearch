import * as S from "./Item.styled"
export default function Item() {
    return (
        <>
         
            <S.ItemBox>
                {/* <img src="/image/user.png" alt="" /> */}
                <h1>Логин Логинович Логин</h1>
                <p>Иванов Иван Иванович</p>
                <S.NumberBox>3</S.NumberBox>
            </S.ItemBox>

        </>

    )
}
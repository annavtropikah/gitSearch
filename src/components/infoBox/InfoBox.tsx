import * as S from "./InfoBox.styled"


export default function InfoBox() {
    return (


        <S.InfoBox>
            <img src="/image/user.png" alt="" />
            <h1>Логин</h1>
            <p>Имя</p>
            <p>Количество <br /> репозиториев:3</p>
        </S.InfoBox>



    )
}
import * as S from "./Header.styled"

export default function Header() {
    return (

        <S.Container>
            <img src="/image/logo5.png" alt="" />
            <div>
                <h1 >GitSearch</h1>
                <p>Поиск и сортировка пользователей Github</p>
            </div>

        </S.Container>

    )
}
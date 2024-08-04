import * as S from "./NotFoundPage.styled"

export default function NotFoundPage() {
    return (

        <S.Container>
            <S.ContainerNotFound>

                <p>Страница не найдена</p>
                <a href="./">На главную</a>
                <img src="/image/logo2.png" alt="error" />




            </S.ContainerNotFound>
        </S.Container>
    )
}
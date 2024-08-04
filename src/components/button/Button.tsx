import * as S from "./Button.styled"

type ButtonProps = {
    order: 'desc' | 'asc',
    handleChangeOrder: () => void;
}

export default function Button({ order, handleChangeOrder }: ButtonProps) {
    return (
        <S.ButtonStyle onClick={handleChangeOrder}>
            <S.Text>Сортировать по количеству репозиториев</S.Text>
            {order === 'desc' ? <S.ArrowDesc src="/image/arrow2.png" alt="" /> : <S.ArrowAsc src="/image/arrow2.png" alt="" />}
        </S.ButtonStyle>
    )
}
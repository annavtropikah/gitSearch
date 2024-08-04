import { ChangeEvent } from "react"
import * as S from "./Search.styled"

type SearchProps = {
    value: string;
    handleChangeSearchValue: (value: string) => void;
}

export default function Search(props: SearchProps) {
    const { value, handleChangeSearchValue } = props;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleChangeSearchValue(e.target.value)
    }

    return (
        <S.BlockSearch>
            <S.SearchText
                type="search"
                placeholder="Поиск пользователя по логину"
                value={value}
                onChange={handleChange}
            />
        </S.BlockSearch>
    )
}
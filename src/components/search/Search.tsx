import { ChangeEvent, useState } from "react"
import * as S from "./Search.styled"

export default function Search() {
    const [searchValue, setSearchValue] = useState("")
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    return (
        <S.BlockSearch>
            <S.SearchText
                type="search"
                placeholder="Поиск пользователя по логину"
                name={searchValue}
                onChange={handleChange}
            />
        </S.BlockSearch>
    )
}
import { ChangeEvent, useEffect, useState } from "react"
import * as S from "./Search.styled"
import { getUsers } from "../../api/api"

export default function Search() {
    const [searchValue, setSearchValue] = useState("")
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    const [usersList, setUsersList]=useState()
    useEffect(()=>{
        getUsers(searchValue).then((data)=>{
            setUsersList(data)
            console.log(data);
        })
    })
    
    // searchUsers()
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
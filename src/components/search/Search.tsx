// import { ChangeEvent, useEffect, useState } from "react"
// import * as S from "./Search.styled"
// import { getUsers } from "../../api/api"
// import { useAppDispatch, useAppSelector } from "../hooks/hooks"
// import { setSearchValue, setUsersList } from "../../store/features/usersListSlice"

// export default function Search() {
//     const dispatch = useAppDispatch()
//     const [searchValue, setSearchValue] = useState("")

//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setSearchValue(e.target.value)
//         // dispatch(setSearchValue({searchValue:value}))
//     }
//     console.log(searchValue);
//     const [usersList, setUsersList] = useState([])

//     const searchValue = useAppSelector((store) => store.usersList.searchValue)
    
//     useEffect(() => {
//         if (!searchValue) {
//             return;
//         }

//         getUsers(searchValue, 1).then((data) => {
//             // TODO: добавить в слайс
//             setUsersList(data)


//             console.log(data);
//         })
//     }, [])
    


//     return (
//         <S.BlockSearch>
//             <S.SearchText
//                 type="search"
//                 placeholder="Поиск пользователя по логину"
//                 name={searchValue}
//                 onChange={handleChange}
//             />
//         </S.BlockSearch>
//     )
// }
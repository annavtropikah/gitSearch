import * as S from "./UsersList.styled"
import Pagination from "../pagination/Pagination";
import { getTotalPageCount } from "../../shared/utils";
import { ChangeEvent, useEffect, useState } from "react";
import { getUserRepos, getUsers } from "../../api/api";
import { GithubUser } from '../../shared/types';
import User from "../User/User";
// import { useAppSelector } from "../hooks/hooks";

export default function UsersList() {
    const [searchValue, setSearchValue] = useState("")


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }


    // const searchValue = 'sss';
    // const searchValue = useAppSelector((store) => store.usersList.searchValue)
    // TODO: брать из слайса
    const [usersList, setUsersList] = useState<GithubUser[]>([]);
    const [totalCounter, setTotalCounter] = useState(0);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    // const data = useAppSelector((state) => state.usersList)


    const fetchData = async () => {
        try {
            setIsLoading(true);
            // запрос за пользователями по странице (меняется page)
            const data = await getUsers(searchValue, page);

            // собираем логины пришедших пользователей
            const usernames = data.items.map((item: GithubUser) => item.login);
            setTotalCounter(data.total_count);

            // идем с логинами за их репозиториями, дожидаемся N запросов
            const usersWithRepos = await Promise.all(usernames.map((username: string, idx: number) => {
                return getUserRepos(username).then(response => {
                    // добавляем каждому пользователю их количетсво репозиториев
                    data.items[idx] = { ...data.items[idx], repo_counter: response }

                    return data.items[idx];
                })
            }))

            // TODO: обновлять слайс
            // добавляем обновленные данные в стейт
            setUsersList(usersWithRepos)
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        if (!searchValue) {
            return;
        }

        fetchData();
    }, [page, searchValue])

    const handleNextPageClick = () => {
        setPage(prevPage => prevPage + 1);
    }


    const handlePrevPageClick = () => {
        setPage(prevPage => prevPage - 1);
    }

    return (

        <S.UsersListContainer>
            <S.BlockSearch>
                <S.SearchText
                    type="search"
                    placeholder="Поиск пользователя по логину"
                    name={searchValue}
                    onChange={handleChange}
                />
            </S.BlockSearch>
            <S.ListContent>
                <S.ListHeading>
                    <div>Аватар</div>
                    <p>Логин</p>
                    <p>URL</p>
                    <S.NumberBox>Количество <br /> репозиториев</S.NumberBox>
                </S.ListHeading>
                {isLoading ? (
                    <span>...Загрузка</span>
                ) : (
                    <S.UsersList>
                        {usersList?.length ? usersList?.map((user: GithubUser) => (
                            <User key={user.id} user={user} />
                        )) : (
                            <span>Ничего не найдено</span>
                        )}
                    </S.UsersList>
                )}
            </S.ListContent>

            {usersList?.length > 0 && (
                <Pagination
                    onNextPageClick={handleNextPageClick}
                    onPrevPageClick={handlePrevPageClick}
                    disable={{
                        left: page === 1,
                        right: page === getTotalPageCount(totalCounter),
                    }}
                    nav={{ current: page, total: getTotalPageCount(totalCounter) }}
                />
            )}
        </S.UsersListContainer>


    )
}
import Button from "../../components/button/Button"
import Header from "../../components/header/Header"
import InfoBox from "../../components/infoBox/InfoBox"
import Search from "../../components/search/Search"
import * as S from "./MainPage.styled"
import UsersList from "../../components/usersList/UsersList"
import {useEffect, useState} from "react";
import {GithubUser} from "../../shared/types";
import {getUserRepos, getUsers} from "../../api/api";
import Pagination from "../../components/pagination/Pagination";
import {getTotalPageCount} from "../../shared/utils";

export default function MainPage() {
    const [searchValue, setSearchValue] = useState("")
    const [usersList, setUsersList] = useState<GithubUser[]>([]);
    const [totalCounter, setTotalCounter] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [order, setOrder] = useState<'desc' | 'asc'>('desc');
    // desc - по возрастанию, asc - по убыванию

    const handleChangeSearchValue = (newValue: string) => {
        setSearchValue(newValue)
    }

    const handleChangeOrder = () => {
        setOrder((prevValue) => prevValue === 'desc' ? 'asc' : 'desc');
    }

    const fetchData = async () => {
        try {
            setIsLoading(true);
            // запрос за пользователями по странице (меняется page)
            const data = await getUsers(searchValue, page, order);

            // собираем логины пришедших пользователей
            const usernames = data.items.map((item: GithubUser) => item.login);
            setTotalCounter(data.total_count);

            // идем с логинами за их репозиториями, дожидаемся N(10) запросов
            const usersWithRepos = await Promise.all(usernames.map((username: string, idx: number) => {
                return getUserRepos(username).then(response => {
                    // добавляем каждому пользователю их количетсво репозиториев
                    data.items[idx] = { ...data.items[idx], repo_counter: response }

                    return data.items[idx];
                })
            }))


            // добавляем обновленные данные в стейт
            setUsersList(usersWithRepos)
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleNextPageClick = () => {
        setPage(prevPage => prevPage + 1);
    }


    const handlePrevPageClick = () => {
        setPage(prevPage => prevPage - 1);
    }

    useEffect(() => {
        if (!searchValue) {
            return;
        }

        fetchData();
    }, [order, page, searchValue])


    return (
            <S.Box>
                <Header />
                <S.Content>
                    <S.Container>
                        <Button order={order} handleChangeOrder={handleChangeOrder} />
                        <InfoBox />
                    </S.Container>
                    <S.Container>
                        <Search value={searchValue} handleChangeSearchValue={handleChangeSearchValue} />
                        {usersList?.length > 0 ? (
                            <Pagination
                                onNextPageClick={handleNextPageClick}
                                onPrevPageClick={handlePrevPageClick}
                                disable={{
                                    left: page === 1,
                                    right: page === getTotalPageCount(totalCounter),
                                }}
                                nav={{ current: page, total: getTotalPageCount(totalCounter) }}
                            />
                        ):(<S.EmptyGap></S.EmptyGap>)}
                        <UsersList usersList={usersList} isLoading={isLoading} />
                    </S.Container>
                </S.Content>
            </S.Box>
    )
}
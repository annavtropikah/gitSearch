import * as S from "./UsersList.styled"
import { GithubUser } from '../../shared/types';
import User from "../User/User";
import {EmptyList} from "./UsersList.styled";

type UsersListProps = {
    usersList: GithubUser[];
    isLoading: boolean;
}

export default function UsersList(props: UsersListProps) {
    const { usersList, isLoading } = props;

    return (
        <S.UsersListContainer>
            <S.ListContent>
                <S.ListHeading>
                    <span>Аватар</span>
                    <span>Логин</span>
                    <span>URL</span>
                    <span>Количество репозиториев</span>
                </S.ListHeading>
                {isLoading ? (
                    <EmptyList>...Загрузка</EmptyList>
                ) : (
                    <S.UsersList>
                        {usersList?.length ? usersList?.map((user: GithubUser) => (
                            <User key={user.id} user={user} />
                        )) : (
                            <EmptyList>Ничего не найдено</EmptyList>
                        )}
                    </S.UsersList>
                )}
            </S.ListContent>
        </S.UsersListContainer>
    )
}
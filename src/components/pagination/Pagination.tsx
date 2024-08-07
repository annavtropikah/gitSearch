import * as S from './Pagination.styled';

type PaginationProps = {
    nav: {
        current: number;
        total: number;
    };
    disable: {
        left: boolean;
        right: boolean;
    };
    onNextPageClick: () => void;
    onPrevPageClick: () => void;
}

export default function Pagination(props: PaginationProps) {
    const { nav = null, disable, onNextPageClick, onPrevPageClick } = props;

    const handleNextPageClick = () => {
        onNextPageClick();
    };
    const handlePrevPageClick = () => {
        onPrevPageClick();
    };

    return (

        <S.Paginator>

            <S.Arrow
                data-testid="prev-pagination-btn"
                type="button"
                onClick={handlePrevPageClick}
                disabled={disable.left}
            >
                {'<'}
            </S.Arrow>
            {nav && (

                <S.Navigation>{nav.current} / {nav.total}</S.Navigation>
            )}

            <S.Arrow
                data-testid="next-pagination-btn"
                type="button"
                onClick={handleNextPageClick}
                disabled={disable.right}
            >
                {'>'}
            </S.Arrow>
        </S.Paginator>
    );
}

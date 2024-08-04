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
        // div
        <S.Paginator>
            {/*button*/}
            <S.Arrow
                type="button"
                onClick={handlePrevPageClick}
                disabled={disable.left}
            >
                {'<'}
            </S.Arrow>
            {nav && (
                // span
                <S.Navigation>{nav.current} / {nav.total}</S.Navigation>
            )}
            {/*button*/}
            <S.Arrow
                type="button"
                onClick={handleNextPageClick}
                disabled={disable.right}
            >
                {'>'}
            </S.Arrow>
        </S.Paginator>
    );
}
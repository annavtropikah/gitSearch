import styled from 'styled-components';

export const Paginator = styled.div`
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;

    gap: 10px;
   
`

export const Arrow = styled.button`
    display: flex;
    background-color: #00BFFF;
    outline: none;
    border: none;
    align-items: center;
    justify-content: center;
    border-radius: 2px;

    &:hover:not(:disabled) {
        background-color: #1d6ce3;
        cursor: pointer;
    }
`

export const Navigation = styled.span`
    display: flex;
`

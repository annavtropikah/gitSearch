import styled from 'styled-components';

export const BlockSearch = styled.div`
    border: 1px solid #fff;
    border-radius: 10px;
    padding:15px;
    text-align:left;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 20px;
  

  
    `
  

  export const SearchText = styled.input`
    flex-grow: 100;
    background-color: transparent;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    outline: none !important;
 

    & ::placeholder {
        background-color: transparent;
        color: #ffffff;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
  `

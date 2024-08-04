import styled from 'styled-components';


export const UsersListContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
    margin-right: 20px;
`



export const ListContent = styled.div`

display:flex;
flex-direction:column;
margin-top: 50px; 
height:650px;

  border-radius: 10px;
  background-color: #00BFFF;
  color: #000;
  border: none;

  line-height: 1;
  font-weight: 500;

  padding:15px;
  text-align:center;

  outline: none;
`

export const ListHeading = styled.div`

box-sizing:border-box;
display:flex;
flex-direction:row;
row-gap:20px;
align-items:center;
justify-content:space-around;

  width: 100%;
  color: #fff;
  border: none;
  line-height: 1;
  font-weight: 500;
  text-align:center;
  outline: none;

  & img {
  margin-top:0px;
  height:30px;
  border-radius:5px;
  background: #fff;
 
}

  & p {
    display:block;
  font-size:15px;

  width:200px;
  overflow:hidden;
}
& div {
    display:block;
  font-size:15px;

  width:70px;
  overflow:hidden;
}

`;
export const UsersList = styled.div`
position: relative;
& span{

  display: flex;
  align-items: center;
  justify-content: center;
  font-size:20px;
  color:#fff;
  line-height: 2;

}


`;

export const NumberBox = styled.span`

font-size:15px;

`








//search

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

  

  
    `
  

  
  export const SearchText = styled.input` 
  
    -webkit-box-flex: 100;
    -ms-flex-positive: 100;
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

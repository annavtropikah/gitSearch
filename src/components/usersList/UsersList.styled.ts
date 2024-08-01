import styled from 'styled-components';




export const ListHeading = styled.div`
margin-left:60px;
margin-right:20px;
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
  margin-left:90px;
}

  & p {
  font-size:20px;
}

`;

export const ListContent = styled.div`
display:flex;
flex-direction:column;
width: 100%;
margin-top: 50px;

  
  width: 100%;
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
export const UsersList = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;


`;

export const NumberBox = styled.span`

font-size:15px;

`
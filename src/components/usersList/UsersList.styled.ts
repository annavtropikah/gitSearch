import styled from 'styled-components';






export const ListContent = styled.div`

display:flex;
flex-direction:column;
width: 100%;
margin-top: 50px; 
margin-right: 20px;

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
align-items:center;
justify-content:space-around;

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
  width:200px;
}

`;
export const UsersList = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;


`;

export const NumberBox = styled.span`

font-size:15px;

`
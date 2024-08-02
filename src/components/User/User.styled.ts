import styled from 'styled-components';


export const ItemBox = styled.div`

box-sizing:border-box;
display:flex;
flex-direction:row;
row-gap:20px;
align-items:center;
justify-content:space-around;
cursor: pointer;

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
  font-size:20px;
  width:200px;
}

`;

export const NumberBox = styled.span`
width:100px;
`
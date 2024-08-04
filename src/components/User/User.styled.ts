import styled from 'styled-components';


export const ItemBox = styled.div`

    display: grid;
    grid-template-columns: 100px 1fr 1fr 200px;
    row-gap: 20px;
    box-sizing:border-box;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    cursor: pointer;
      width: 100%;
      color: #fff;
      border: none;
      line-height: 1;
      font-weight: 500;
      text-align: left;
      outline: none;


  & img {
margin-top:0px;
  height:30px;
  border-radius:5px;
  background: #fff;
}


  & span {
    display:block;
  font-size:20px;

  width:200px;

  overflow-x:hidden;
}
`;

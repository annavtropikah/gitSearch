import styled from 'styled-components';


export const InfoBox = styled.div`
margin-top: 50px;
box-sizing:border-box;
  height: 500px;
  min-width: 250px;
  max-width: 250px;
  border-radius: 10px;
  background-color: #FF69B4;
  color: #000;
  border: none;

  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  margin-left:20px;
  padding:15px;
  text-align:center;

  outline: none;
  & img {
    margin-top:20px;
  height:150px;
  border-radius:10px;
  background: #fff;
  margin-bottom:20px
}

  & h1 {
  font-size:30px;
}
  & p {
  font-size:20px;

}
& a {
 
  font-size:15px;
  color:black;
  line-break: auto;
  line-height: 3;
  cursor: pointer;
  text-decoration: none;
  &:hover{
    text-decoration:underline;
  }

}

`;

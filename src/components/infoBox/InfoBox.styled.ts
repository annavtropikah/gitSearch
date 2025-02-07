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


  font-weight: 500;
  margin-right: 20px;
  margin-left:20px;
  padding:15px;
  text-align:center;

  outline: none;
  & img {
    margin-top:20px;
    margin-bottom:20px;
  height:150px;
  border-radius:10px;
  background: #fff;
  margin-bottom:20px
}



`;

export const InfoBoxContent = styled.div`
display:flex;
align-items:center;
flex-direction:column;


  & h1 {
  font-size:30px;

  width:200px;
  word-break: break-all;
  height:80px;
  overflow-x:hidden;

}
  & span {
  font-size:20px;

  width:200px;


}
& a {
  color:black;
  font-size:20px;
  width:200px;
  word-break: break-all;
  margin-bottom:10px;
  overflow-x:hidden;
  &:hover{
    text-decoration:underline;
  }}
`
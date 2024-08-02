import styled from 'styled-components';


export const ButtonStyle = styled.span`

box-sizing:border-box;
  height: 60px;
  min-width: 250px;
  max-width: 250px;
  border-radius: 10px;
  background-color: #9ACD32;
  color: #000;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  margin-left:20px;
  padding:15px;

  cursor: pointer;
  outline: none;
  display:flex;
  align-items: center;


  &:hover {
    background-color:#FFFF00;
  }


`;
export const Text = styled.p`
height:10px;
text-align:end;
padding-bottom:15px;

`

export const Arrow = styled.img`
height:25px;
padding-top:4px;
`
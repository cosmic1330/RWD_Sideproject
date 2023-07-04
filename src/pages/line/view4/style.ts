import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  background-size: cover;
  background-image: url(https://static.bg3.co/imgs/202107/68fcac002d9178d7678d64f3711cddf0.jpg);
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div`
  height: 100%;
  width: 100%;
  scroll-snap-align: start; /* 物件在捲動時，捲動停止的位置 */
  scroll-snap-stop: always;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  ::after{
    content:'The Avengers:${(props) => props.index}';
    display: flex;
    width: 70%;
    height: 50%;
    background-size: cover;
    position: absolute;
    border: 20px solid #000;
    background-image: url(${(props) => props.url});

    font-size: 60px; 
    color:#fefefe;  
    text-shadow:0px 1px 0px #c0c0c0,    
    0px 2px 0px #b0b0b0,    
    0px 3px 0px #a0a0a0,    
    0px 4px 0px #909090,    
    0px 5px 10px rgba(0, 0, 0, .9);
    align-items: center;
    justify-content: center;
    letter-spacing: 4px;
  }
`;
export { Container, Item };

import styled, { keyframes } from "styled-components";

const rotBGimg = keyframes`
  from{
    transform:rotateZ(0deg) translateX(-50%) translateY(-50%);
  }
  to {
    transform: rotateZ(360deg) translateX(-50%) translateY(-50%);
  }
`;

const Title = styled.h4`
  font-size: 60px;
  padding: 0 16px;
  line-height: 1.334;
  text-align: center;
  margin-bottom: 60px;
`;

const Button = styled.button`
  color: #fff;
  padding: 10px 20px;
  background-color: rgb(7, 181, 59);
  border: none;
  border-radius: 5px;
  :is(:hover, :focus) {
    outline: dashed rgb(7, 181, 59);
    outline-offset: 5px;
    cursor: pointer;
  }

  position: relative;
  overflow: hidden;
  ::after {
    content: "";
    position: absolute;
    width: 80px;
    height: 300%;
    top: -100%;
    left: -130%;
    background-color: #fff;
    opacity: 0.3;
    transform: rotate(-45deg);
    transition: left 0.2s ease-in;
  }

  :hover::after {
    left: 130%;
  }
`;

const Wapper = styled.div`
  display: grid;
  padding: 5%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

const Card = styled.div`
  background-color: #07182e;
  padding-bottom: 133%;
  position: relative;
  overflow: hidden;
  border-radius: 5px;

  ::after {
    content: "";
    position: absolute;
    background-size: cover;
    background-image: url(${(props) => props.url});
    inset: 5px;
    border-radius: 3px;
  }

  :hover {
    cursor: pointer;
    ::before {
      transform-origin: top;
      content: "";
      position: absolute;
      background-image: linear-gradient(
        180deg,
        rgb(0, 183, 255),
        rgb(255, 48, 255)
      );
      width: 30%;
      height: 150%;
      left: 50%;
      top: 50%;
      animation: ${rotBGimg} 3s linear infinite;
      transition: all 0.2s linear;
    }
    ::after{
      filter: brightness(0.5) drop-shadow(3px 3px 10px #aaa) grayscale(0.5);
    }
  }
`;

const Content = styled.p`
  margin-bottom: 12px;
  font-size: 18px;
`;

export { Button, Card, Content, Title, Wapper };

import { styled } from "@mui/material/styles";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import Content from "./Content";
import Navbar from "./Navbar";
import { FaceContextProvider } from "../../context/face";
// 範例網址
// https://www.bing.com/news/search?q=%e5%a8%9b%e6%a8%82&nvaug=%5bNewsVertical+Category%3d%22rt_Entertainment%22%5d&FORM=NWRFSH
const Main = styled("main")`
  padding-top: 96px;
  padding-bottom: 48px;
  display: flex;
`;
export default function Face() {
  return (
    <div id="face">
      <FaceContextProvider>
        <Header />
        <Footer />
        <Main>
          <Navbar />
          <Content />
        </Main>
      </FaceContextProvider>
    </div>
  );
}

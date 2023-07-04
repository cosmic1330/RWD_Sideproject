import { css } from "@emotion/css";
import VanillaTilt from "../../../components/animation/VanillaTilt";
import { Button, Card, Content, Title, Wapper } from "./style";

const images = [
  "https://upload.wikimedia.org/wikipedia/zh/thumb/b/b5/Wonder_Woman_2017_Poster.jpg/220px-Wonder_Woman_2017_Poster.jpg",
  "https://pic.pimg.tw/dos19891120/1366810678-3504669638_wn.jpg",
  "https://upload.wikimedia.org/wikipedia/zh/thumb/1/13/Batman_v_Superman_poster.jpeg/220px-Batman_v_Superman_poster.jpeg",
  "https://file.xdf.cn/uploads/180906/230_1809061153207UjUyqouUC5ikVwe.png",
  "https://upload.wikimedia.org/wikipedia/zh/thumb/2/27/The_SpongeBob_Movie_Sponge_on_the_Run_poster.jpg/220px-The_SpongeBob_Movie_Sponge_on_the_Run_poster.jpg"
]
const cssView3 = css`
text-align: center;
 background-color: rgba(100,100,100,.1);
 min-height: 100vh;
 margin-top: 140px;
 padding-top: 180px;
`;
function View3() {
  return (
    <div className={cssView3}>
      <Title>通訊軟體</Title>
      <Content>一款全新型態的通訊軟體，讓您隨時隨地享受免費傳訊、免費通話等溝通樂趣。</Content>
      <Button>Download</Button>
      <Wapper>
        {images.map((item, index) => <VanillaTilt key={index}>
          <Card url={item}/>
        </VanillaTilt>)}
      </Wapper>
    </div>
  );
}
export default View3;

import { css } from "@emotion/css";
import Mv03 from "../../../images/line/mv03.png";
import Mv04 from "../../../images/line/mv04.png";
import Mv05 from "../../../images/line/mv05.png";
import Image from "./ImageArea";
import { Content, Subtitle, Title } from "./TextArea";
import "./style.css";

const cssSection = css`
  display: flex;
  height: 100vh;
  padding: 50px 0;
  &:nth-of-type(1) img,
  &:nth-of-type(3) img{

    object-position: right;
  }
`;

const cssTextArea = css`
  width: 50%;
  padding: 0 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const cssImageArea = css`
  width: 50%;
`;

function View2() {
  return (
    <div id="view2">
      <section className={cssSection}>
        <div className={cssTextArea}>
          <Title>LINE TODAY</Title>
          <Subtitle>隨點隨看 生活快充</Subtitle>
          <Content>
            最即時的新聞、影音、運動賽事和娛樂內容直播，讓你話題永不斷線，LINE
            TODAY陪伴您的每一天！
          </Content>
        </div>
        <div className={cssImageArea}>
          <Image src={Mv03} />
        </div>
      </section>
      <section className={cssSection}>
        <div className={cssImageArea}>
          <Image src={Mv04}/>
        </div>
        <div className={cssTextArea}>
          <Title>LINE VOOM</Title>
          <Subtitle>樂趣超連結</Subtitle>
          <Content>
            追蹤最愛創作客、精彩影音隨時看 分享生活大小事、熱門話題不錯過！
          </Content>
        </div>
      </section>
      <section className={cssSection}>
        <div className={cssTextArea}>
          <Title>LINE Pay</Title>
          <Subtitle>付款、轉帳、生活繳費，輕鬆簡單又便利！</Subtitle>
          <Content>
            付款簡單又便利，還能輕鬆轉帳給LINE好友，動動手指輕鬆完成日常生活各種帳單繳費， 免出門省時又省力。
          </Content>
        </div>
        <div className={cssImageArea}>
          <Image src={Mv05} />
        </div>
      </section>
    </div>
  );
}
export default View2;

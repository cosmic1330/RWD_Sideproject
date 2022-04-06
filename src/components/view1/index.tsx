import Carousel from "./carousel";
import { css } from "@emotion/css";

function View1() {
  const cssView1 = css`
    position: relative;
    width: 100%;
    height: 100vh;
    border-bottom: 1px solid #000;
  `;
  return (
    <div className={cssView1}>
      <Carousel />
    </div>
  );
}

export default View1;

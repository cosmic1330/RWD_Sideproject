import Carousel from "./carousel";
import { css } from "@emotion/css";
import Scroll from "./scroll";

function View1() {
  const cssView1 = css`
    position: relative;
    width: 100%;
    height: 100vh;
    @media screen and (min-width: 1200px) {
      margin-bottom: 200px;
    }
  `;
  return (
    <div className={cssView1}>
      <Carousel />
      <Scroll />
    </div>
  );
}

export default View1;

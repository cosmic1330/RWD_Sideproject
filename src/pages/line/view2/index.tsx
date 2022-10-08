import { css } from "@emotion/css";

const cssView2 = css`
  section {
    height: 100vh;
    &:nth-of-type(2),
    &:nth-of-type(3) {
      background-color: gray;
    }
  }
`;

function View2() {
  return (
    <div className={cssView2}>
      <section>1</section>
      <section>
        <div className="imbBox">
          <img src="https://picsum.photos/1920/1080?random=1" alt="phone" />
        </div>
      </section>
      <section>
        <div className="imbBox">
          <img src="https://picsum.photos/1920/1080?random=1" alt="phone" />
        </div>
      </section>
    </div>
  );
}
export default View2;

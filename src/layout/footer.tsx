import { styled } from "@mui/material/styles";

const StyledFooter = styled("footer")`
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0px 0px 2px #aaa;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1;
`;
const Privacy = styled("ul")`
  display: flex;
  gap: 24px;
  list-style: none;
  a {
    color: #000;
    text-decoration: none;
  }
`;
const Copyright = styled("div")``;

export default function Footer() {
  return (
    <StyledFooter>
      <Privacy>
        <li>
          <a href="http://go.microsoft.com/fwlink/?LinkId=521839">
            隱私權和 Cookie
          </a>
        </li>
        <li>
          <a href="http://go.microsoft.com/fwlink/?LinkID=246338">法律聲明</a>
        </li>
        <li>
          <a href="https://go.microsoft.com/fwlink/?linkid=868922">廣告</a>
        </li>
        <li>
          <a href="http://go.microsoft.com/fwlink/?LinkID=286759">
            關於我們的廣告
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/topic/82d20721-2d6f-4012-a13d-d1910ccf203f">
            說明
          </a>
        </li>
        <li>
          <a href="#">意見反應</a>
        </li>
      </Privacy>
      <Copyright>
        <span>© 2022 Microsoft</span>
      </Copyright>
    </StyledFooter>
  );
}

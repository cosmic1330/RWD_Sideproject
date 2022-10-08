import { css } from "@emotion/css";
import SearchIcon from "@mui/icons-material/Search";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import { debounce } from "lodash-es";
import { useContext, useRef } from "react";
import Logo from "../Bing-logo.png";
import { FaceContext } from "../context/face";

const cssHeader = css`
  padding: 18px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0px 0px 2px #333;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1;
`;
const cssImg = css`
  width: 116px;
`;
const cssOutline = {
  root: css`
    border-radius: 100px;
    background: #fff;
    box-shadow: 0px 0px 5px #aaa;
  `,
  input: css`
    border-radius: 100px;
    padding: 5px 30px;
    background-color: #fff;
  `,
  inputAdornedEnd: css`
    background-color: #fff;
  `,
};
export default function Header() {
  const { setSearch } = useContext(FaceContext);
  const debouncedSearch = useRef(
    debounce(async (e) => {
      setSearch(e.target.value);
    }, 800)
  ).current;

  return (
    <header className={cssHeader}>
      <img className={cssImg} src={Logo} />
      <div>
        <FilledInput
          classes={cssOutline}
          disableUnderline={true}
          onChange={debouncedSearch}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </div>
    </header>
  );
}

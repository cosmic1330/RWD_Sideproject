import { useState, useEffect, useCallback } from "react";
import "./style.css";
import Header from "../header";
import Download from "../download";

function Carousel() {
  const [scroll, setScroll] = useState(false);
  const [animationDuration] = useState(10);
  const [images] = useState(10);
  const [active, setActive] = useState(0);
  const [next, setNext] = useState(1);

  const handleScroll = useCallback(() => {
    setScroll(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const interval = setInterval(() => {
      setActive((pre) => (pre + 1 > images - 1 ? 0 : pre + 1));
      setNext((pre) => (pre + 1 > images - 1 ? 0 : pre + 1));
    }, (animationDuration / 2) * 1000);
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const img = (i: number) => {
    return {
      backgroundImage: `url(https://picsum.photos/1000/500?random=${i})`,
      animationDuration: `${animationDuration}s`,
      AnimationDelay: next === i ? `${animationDuration / 2}s` : `0s`,
    };
  };

  return (
    <div>
      <ul className={scroll ? "scroll lists" :"lists"}>
        {Array.from(Array(images)).map((value, index) => (
          <li
            style={img(index)}
            className={active === index || next === index ? "animate" : ""}
          />
        ))}
      </ul>

      <div className="noSrollArea">
        <Header {...{ scroll }} />
        {!scroll && <Download />}
      </div>
    </div>
  );
}

export default Carousel;

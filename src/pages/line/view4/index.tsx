import { useRef } from "react";
import { Container, Item } from "./style";
function View4() {
  const containerRef = useRef<HTMLInputElement>(null);


  const handleScroll = (event) => {
    if(containerRef.current!==null){
      const container = containerRef.current;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const contentWidth = container.scrollWidth;
      const reachedEnd = scrollLeft + containerWidth >= contentWidth;
      if(event.deltaY>0 && !reachedEnd){
        containerRef.current.scrollLeft += window.innerWidth;
      }else if(event.deltaY<0 && scrollLeft>0){
        containerRef.current.scrollLeft -= window.innerWidth;
      } else if(event.deltaY<0 && scrollLeft<=0){
        containerRef.current.scrollLeft = 0;
      }
    }
   
  };

  const images = [
    "https://img.toy-people.com/member/161606930670.gif",
    "https://media.giphy.com/media/UJ5I7921pAOEU/giphy.gif",
    "https://img.soogif.com/I3ww3lMBHXCzMng0Ciw0Mih5HmmFHPXE.gif",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tumblr-p06q1lnunh1tctq75o4-540-1556367366.gif",
  ];

  return (
    <Container 
    ref={containerRef}
    onWheel={handleScroll}>
       {images.map((item, index) => 
          <Item url={item} key={index} index={index+1}>Test</Item>
       )}
    </Container>
  );
}
export default View4;

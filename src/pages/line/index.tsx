import { useEffect } from "react";
import useQuery from "./hooks/useQuery";
import View1 from "./view1";
import View2 from "./view2";
import View3 from "./view3";

function Line() {
  const query = useQuery();
  useEffect(() => {
    // if ?search=...
    console.log(query.get("search"));
  }, [query]);
  return (
    <div className="Line">
      <View1 />
      <View2 />
      <View3 />
    </div>
  );
}

export default Line;

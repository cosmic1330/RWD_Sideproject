import { useEffect } from "react";
import useQuery from "./hooks/useQuery";
import Connon from "./cases/connon";
import ThreeExampleComponent from "./cases/example";
import { Canvas } from "./style";
import Earth from "./cases/earth";

function Three() {
  const query = useQuery();
  return (
    <div className="Three">
        Three
        {query.get("search")}
        <Canvas>
            <ThreeExampleComponent/>
        </Canvas>
    </div>
  );
}

export default Three;

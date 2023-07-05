import { useCallback } from "react";
import { Link } from "react-router-dom";
import AirPlaneComponent from "./cases/airplane";
import Connon from "./cases/connon";
import CreeperComponent from "./cases/creeper";
import Earth from "./cases/earth";
import ThreeExampleComponent from "./cases/example";
import Sky from "./cases/sky";
import useQuery from "./hooks/useQuery";
import { Button, Canvas } from "./style";

function Three() {
  const query = useQuery();

  const switchThreeCase = useCallback(() => {
    switch (query.get("case")) {
      case "earth":
        return <Earth />;
      case "connon":
        return <Connon />;
      case "airplane":
        return <AirPlaneComponent />;
      case "sky":
        return <Sky />;
      case "creeper":
        return <CreeperComponent />;
      default:
        return <ThreeExampleComponent />;
    }
  }, [query]);

  return (
    <div className="Three">
      <h1>Three-{query.get("case")}</h1>
      <Link to="/three?case=example">
        <Button>Example</Button>
      </Link>
      <Link to="/three?case=earth">
        <Button>Earth</Button>
      </Link>
      <Link to="/three?case=connon">
        <Button>Connon</Button>
      </Link>
      <Link to="/three?case=airplane">
        <Button>AirPlane</Button>
      </Link>
      <Link to="/three?case=sky">
        <Button>Sky</Button>
      </Link>
      <Link to="/three?case=creeper">
        <Button>Creeper</Button>
      </Link>
      <Canvas>{switchThreeCase()}</Canvas>
    </div>
  );
}

export default Three;

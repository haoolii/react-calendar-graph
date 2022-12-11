import Graph from "./Graph/Graph";
import Palette from "./Graph/Palette";
import "./Playground.css";

function Playground() {
  return (
    <div className="playground-container">
      <div className="playground-title">
        <h1>Calendar Graph</h1>
      </div>
      <div className="playground-palette">
        <Palette />
      </div>

      <div className="playground-block">
        <Graph />
      </div>
      <div className="playground-block">2</div>
      <div className="playground-block">3</div>
    </div>
  );
}

export default Playground;

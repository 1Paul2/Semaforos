import { useState, useEffect } from "react";
import TrafficLight from "./TrafficLight";
import "./App.css";

const DURATIONS = [
  100,
  4000,
  1000,
  100,
  4000,
  1000,
  100,
  4000,
  1000,
  100,
  4000,
  1000,
];

function App() {
  const [phaseIndex, setPhaseIndex] = useState(0);

  const [north, setNorth] = useState("red");
  const [south, setSouth] = useState("red");
  const [east, setEast] = useState("red");
  const [west, setWest] = useState("red");

  const showNorthJuggler = north === "red";
  const showSouthJuggler = south === "red";
  const showEastJuggler = east === "red";
  const showWestJuggler = west === "red";

  // HILO 0 – controlador de tiempo
  useEffect(() => {
    const timer = setTimeout(() => {
      setPhaseIndex((prev) => (prev + 1) % DURATIONS.length);
    }, DURATIONS[phaseIndex]);
    return () => clearTimeout(timer);
  }, [phaseIndex]);

  // HILO 1 – norte
  useEffect(() => {
    switch (phaseIndex) {
      case 4:
        setNorth("green");
        break;
      case 5:
        setNorth("yellow");
        break;
      default:
        setNorth("red");
        break;
    }
  }, [phaseIndex]);

  // HILO 2 – sur
  useEffect(() => {
    switch (phaseIndex) {
      case 1:
        setSouth("green");
        break;
      case 2:
        setSouth("yellow");
        break;
      default:
        setSouth("red");
        break;
    }
  }, [phaseIndex]);

  // HILO 3 – este
  useEffect(() => {
    switch (phaseIndex) {
      case 10:
        setEast("green");
        break;
      case 11:
        setEast("yellow");
        break;
      default:
        setEast("red");
        break;
    }
  }, [phaseIndex]);

  // HILO 4 – oeste
  useEffect(() => {
    switch (phaseIndex) {
      case 7:
        setWest("green");
        break;
      case 8:
        setWest("yellow");
        break;
      default:
        setWest("red");
        break;
    }
  }, [phaseIndex]);

  return (
    <div className="mapa">
      <div className="carretera carretera-vertical">
        <div className="linea-central-vertical" />
      </div>

      <div className="carretera carretera-horizontal">
        <div className="linea-central-horizontal" />
      </div>

      <TrafficLight position="north" color={north} />
      <TrafficLight position="south" color={south} />
      <TrafficLight position="east" color={east} />
      <TrafficLight position="west" color={west} />

      <div className="alto alto-north">ALTO</div>
      <div className="alto alto-south">ALTO</div>
      <div className="alto alto-east">ALTO</div>
      <div className="alto alto-west">ALTO</div>

      <div className="raya-alto raya-north"></div>
      <div className="raya-alto raya-south"></div>
      <div className="raya-alto raya-east"></div>
      <div className="raya-alto raya-west"></div>

      {showNorthJuggler && (
        <img src="/movimiento.gif" className="malabarista zona-north" />
      )}

      {showSouthJuggler && (
        <img src="/movimiento.gif" className="malabarista zona-south" />
      )}

      {showEastJuggler && (
        <img src="/movimiento.gif" className="malabarista zona-east" />
      )}

      {showWestJuggler && (
        <img src="/movimiento.gif" className="malabarista zona-west" />
      )}
    </div>
  );
}

export default App;

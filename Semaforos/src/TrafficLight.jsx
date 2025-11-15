function TrafficLight({ position, color }) {
  return (
    <div className={`semaforo semaforo-${position}`}>
      <div className="poste">
        <div className="poste-vertical" />
        <div className="poste-brazo">
          <div className="caja-semaforo">
            <div
              className={`luz luz-roja ${
                color === "red" ? "luz-activa" : ""
              }`}
            />
            <div
              className={`luz luz-amarilla ${
                color === "yellow" ? "luz-activa" : ""
              }`}
            />
            <div
              className={`luz luz-verde ${
                color === "green" ? "luz-activa" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrafficLight;

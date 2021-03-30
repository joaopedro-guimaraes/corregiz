import { useState } from "react";
import Layout from "../components/Layout";

function PaceCalculator() {
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");
  const [distance, setDistance] = useState("0");

  return (
    <Layout myHeadTitle="Calculadora de pace">
      <form className="form-container">
        <div className="input-block-grid">
          <div className="input-block">
            <label htmlFor="minutes">Minutos</label>
            <input
              id="minutes"
              type="number"
              onChange={(event) => setMinutes(event.target.value)}
            ></input>
          </div>
          <div className="input-block">
            <label htmlFor="seconds">Segundos</label>
            <input
              id="seconds"
              type="number"
              onChange={(event) => setSeconds(event.target.value)}
            ></input>
          </div>
        </div>
        <div className="input-block">
          <label htmlFor="distance">Distância em metros</label>
          <input
            id="distance"
            type="number"
            onChange={(event) => setDistance(event.target.value)}
          ></input>
        </div>
        <div className="input-block">
          <button
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              const result =
                (Number(minutes) * 60 + Number(seconds)) /
                (Number(distance) / 1000);
              alert(
                `Clicou: ${
                  Math.floor(result / 60) < 10
                    ? "0" + Math.floor(result / 60)
                    : Math.floor(result / 60)
                }:${result % 60 < 10 ? "0" + (result % 60) : result % 60}`
              );
            }}
          >
            Calcular
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default PaceCalculator;

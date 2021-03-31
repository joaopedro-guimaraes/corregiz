import { useState } from "react";
import styles from "../styles/Calculadora.module.css";

function Calculadora() {
  const [distancia, setDistancia] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [pace, setPace] = useState("");

  function calculaPace() {
    const totalDeSegundos = minutos * 60 + segundos;
    const paceEmSegundos = totalDeSegundos / distancia;
    const minutosDoPace = Math.floor(paceEmSegundos / 60);
    const segundosDoPace = Math.floor(paceEmSegundos % 60);
    const paceFinal = `${
      minutosDoPace < 10 ? "0" + minutosDoPace : minutosDoPace
    }:${segundosDoPace < 10 ? "0" + segundosDoPace : segundosDoPace}`;
    setPace(paceFinal);
  }

  return (
    <main className="container">
      <form className={styles.form}>
        <h1 className={styles.title}>Calculadora de pace</h1>
        <div className={styles.grid}>
          <div className={styles.inputContainer}>
            <label htmlFor="distancia">Distância (Km)</label>
            <input
              id="distancia"
              onChange={(event) =>
                setDistancia(Number(event.target.value.replace(",", ".")))
              }
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="minutos">Minutos</label>
            <input
              id="minutos"
              onChange={(event) => setMinutos(Number(event.target.value))}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="segundos">Segundos</label>
            <input
              id="segundos"
              onChange={(event) => setSegundos(Number(event.target.value))}
            />
          </div>
        </div>
        <button
          className={styles.button}
          onClick={(event) => {
            event.preventDefault();
            calculaPace();
          }}
        >
          Calcular
        </button>
        {pace === "" ? "" : <h3>{pace}/Km</h3>}
      </form>
    </main>
  );
}

export default Calculadora;

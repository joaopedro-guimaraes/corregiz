import { useState } from 'react';
import Container from '../components/Container';
import Card from '../components/Card';
import InputBlock from '../components/InputBlock';
import styles from '../styles/Calculadora.module.css';

function Calculadora() {
  const [distancia, setDistancia] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [pace, setPace] = useState('');

  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setIMC] = useState('');

  function calculaPace() {
    const totalDeSegundos = minutos * 60 + segundos;
    const paceEmSegundos = totalDeSegundos / distancia;
    const minutosDoPace = Math.floor(paceEmSegundos / 60);
    const segundosDoPace = Math.floor(paceEmSegundos % 60);
    const paceFinal = `${
      minutosDoPace < 10 ? '0' + minutosDoPace : minutosDoPace
    }:${segundosDoPace < 10 ? '0' + segundosDoPace : segundosDoPace}`;
    setPace(paceFinal);
  }

  function calculaIMC() {
    const alturaEmMetros = altura / 100;
    const resultado = peso / alturaEmMetros ** 2;
    // toFixed() para arredondar o resultado para UMA casa decimal
    const imcFinal = `${resultado.toFixed(1).replace('.', ',')}`;
    setIMC(imcFinal);
  }

  return (
    <Container>
      <Card>
        <form className={styles.form}>
          <h1 className={styles.title}>Calculadora de pace</h1>
          <div className={styles.inputContainer}>
            <InputBlock>
              <label htmlFor="distancia">Distância (Km)</label>
              <input
                id="distancia"
                onChange={(event) =>
                  setDistancia(Number(event.target.value.replace(',', '.')))
                }
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="minutos">Minutos</label>
              <input
                id="minutos"
                onChange={(event) => setMinutos(Number(event.target.value))}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="segundos">Segundos</label>
              <input
                id="segundos"
                onChange={(event) => setSegundos(Number(event.target.value))}
              />
            </InputBlock>
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
          {pace === '' ? '' : <h3 className={styles.resultado}>{pace}/Km</h3>}
        </form>
      </Card>

      <Card>
        <form className={styles.form}>
          <h1 className={styles.title}>IMC</h1>
          <div className={styles.inputContainer}>
            <InputBlock>
              <label htmlFor="peso">Peso (Kg)</label>
              <input
                id="peso"
                onChange={(event) =>
                  setPeso(Number(event.target.value.replace(',', '.')))
                }
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="altura">Altura (cm)</label>
              <input
                id="altura"
                onChange={(event) =>
                  setAltura(Number(event.target.value.replace(',', '.')))
                }
              />
            </InputBlock>
          </div>

          <button
            className={styles.button}
            onClick={(event) => {
              event.preventDefault();
              calculaIMC();
            }}
          >
            Calcular
          </button>
          {imc === '' ? '' : <h3 className={styles.resultado}>{imc} Kg/m²</h3>}
        </form>
      </Card>
    </Container>
  );
}

export default Calculadora;

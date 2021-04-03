import styles from '../styles/InputBlock.module.css';

function InputBlock({ children }) {
  return <div className={styles.inputBlock}>{children}</div>;
}

export default InputBlock;

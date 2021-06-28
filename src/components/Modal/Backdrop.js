import styles from "./styles.module.scss";

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onCancel}/>;
}

export default Backdrop;
import styles from './style/styles.module.scss';
import BoardClassComponent from './components/BoardClassComponent/index'

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Let's start creating! 🚀 </h2>
      </header>
      <main className={styles.mainWrapper}>
       <BoardClassComponent />
      </main>
    </div>
  );
}

export default App;

import styles from "./Proyects.module.css";

const Proyects = () => {
  
  return (
    <main className={styles.container}>
      <h2 className={styles.center}>Proyectos</h2>
      <hr />

      <div className={styles.proyects}>
        <div className={styles.cards}>
          <h3 className="title">Web</h3>
          <hr />
          
        </div>
        <div className={styles.cards}>
          <h3 className="title">Movil</h3>
          <hr />
        
        </div>
      </div>
    </main>
  );
};

export default Proyects;

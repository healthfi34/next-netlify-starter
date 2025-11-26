import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/VFC.module.css';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(1);
  const [pacienteData, setPacienteData] = useState(null);
  const [medicionData, setMedicionData] = useState(null);

  // Datos del paciente
  const handlePacienteSubmit = (data) => {
    setPacienteData(data);
    setCurrentSection(2);
  };

  // Datos de medición
  const handleMedicionSubmit = (data) => {
    setMedicionData(data);
    setCurrentSection(3);
  };

  return (
    <>
      <Head>
        <title>REGULACIÓN NEUROCARDIACA | Protocolo HealthFi</title>
        <meta name="description" content="Sistema de monitoreo de variabilidad cardíaca" />
      </Head>

      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.logo}>
            <h1>REGULACIÓN NEUROCARDIACA | Protocolo HealthFi</h1>
          </div>
          <nav className={styles.nav}>
            <button 
              className={`${styles.navBtn} ${currentSection === 1 ? styles.active : ''}`}
              onClick={() => setCurrentSection(1)}
            >
              Paciente
            </button>
            <button 
              className={`${styles.navBtn} ${currentSection === 2 ? styles.active : ''}`}
              onClick={() => setCurrentSection(2)}
            >
              Medición
            </button>
            <button 
              className={`${styles.navBtn} ${currentSection === 3 ? styles.active : ''}`}
              onClick={() => setCurrentSection(3)}
            >
              Resultados
            </button>
          </nav>
        </header>

        {/* Sección 1: Datos del Paciente */}
        {currentSection === 1 && (
          <section className={styles.section}>
            <h2>Datos del Paciente</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handlePacienteSubmit({
                nombre: formData.get('nombre'),
                edad: parseInt(formData.get('edad')),
                habitos: formData.get('habitos'),
                patologia: formData.get('patologia'),
                num_sesion: parseInt(formData.get('num_sesion'))
              });
            }} className={styles.formGrid}>
              
              <div className={styles.formGroup}>
                <label htmlFor="nombre">Nombre completo</label>
                <input type="text" id="nombre" name="nombre" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="edad">Edad</label>
                <input type="number" id="edad" name="edad" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="habitos">Hábitos deportivos</label>
                <select id="habitos" name="habitos" required>
                  <option value="">Seleccionar</option>
                  <option value="amateur">Amateur (30m-1:30hrs/sem)</option>
                  <option value="moderado">Moderado (1:30hrs-7hrs/sem)</option>
                  <option value="alto">Alto rendimiento (+7hrs/sem)</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="patologia">Patología</label>
                <input type="text" id="patologia" name="patologia" placeholder="Ej: Ninguna, Hipertensión, etc." />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="num_sesion">Número de sesión</label>
                <input type="number" id="num_sesion" name="num_sesion" defaultValue="1" required />
              </div>

              <button type="submit" className={styles.btnPrimary}>
                Continuar a Medición
              </button>
            </form>
          </section>
        )}

        {/* Sección 2: Medición - PRÓXIMO ARCHIVO */}
        {currentSection === 2 && (
          <div>
            {/* Aquí irá el formulario de medición */}
            <button onClick={() => setCurrentSection(1)} className={styles.btnSecondary}>
              ← Volver a Paciente
            </button>
          </div>
        )}

        {/* Sección 3: Resultados - PRÓXIMO ARCHIVO */}
        {currentSection === 3 && (
          <div>
            {/* Aquí irán los resultados */}
            <button onClick={() => setCurrentSection(2)} className={styles.btnSecondary}>
              ← Volver a Medición
            </button>
          </div>
        )}
      </div>
    </>
  );
}

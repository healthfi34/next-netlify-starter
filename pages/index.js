javascript
import Head from 'next/head'
import { useState } from 'react';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(1);
  const [pacienteData, setPacienteData] = useState(null);
  const [medicionData, setMedicionData] = useState(null);

  const handlePacienteSubmit = (data) => {
    setPacienteData(data);
    setCurrentSection(2);
  };

  const handleMedicionSubmit = (data) => {
    setMedicionData(data);
    setCurrentSection(3);
  };

  return (
    <>
      <Head>
        <title>REGULACIÓN NEUROCARDIACA | Protocolo HealthFi</title>
        <meta name="description" content="Sistema de monitoreo de variabilidad cardíaca" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="vfcContainer">
        {/* Header */}
        <header className="vfcHeader">
          <div className="vfcLogo">
            <h1>REGULACIÓN NEUROCARDIACA | Protocolo HealthFi</h1>
          </div>
          <nav className="vfcNav">
            <button 
              className={`vfcNavBtn ${currentSection === 1 ? 'active' : ''}`}
              onClick={() => setCurrentSection(1)}
            >
              Paciente
            </button>
            <button 
              className={`vfcNavBtn ${currentSection === 2 ? 'active' : ''}`}
              onClick={() => setCurrentSection(2)}
            >
              Medición
            </button>
            <button 
              className={`vfcNavBtn ${currentSection === 3 ? 'active' : ''}`}
              onClick={() => setCurrentSection(3)}
            >
              Resultados
            </button>
          </nav>
        </header>

        {/* Sección 1: Datos del Paciente */}
        {currentSection === 1 && (
          <section className="vfcSection">
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
            }} className="vfcFormGrid">
              
              <div className="vfcFormGroup">
                <label htmlFor="nombre">Nombre completo</label>
                <input type="text" id="nombre" name="nombre" required />
              </div>

              <div className="vfcFormGroup">
                <label htmlFor="edad">Edad</label>
                <input type="number" id="edad" name="edad" required />
              </div>

              <div className="vfcFormGroup">
                <label htmlFor="habitos">Hábitos deportivos</label>
                <select id="habitos" name="habitos" required>
                  <option value="">Seleccionar</option>
                  <option value="amateur">Amateur (30m-1:30hrs/sem)</option>
                  <option value="moderado">Moderado (1:30hrs-7hrs/sem)</option>
                  <option value="alto">Alto rendimiento (+7hrs/sem)</option>
                </select>
              </div>

              <div className="vfcFormGroup">
                <label htmlFor="patologia">Patología</label>
                <input type="text" id="patologia" name="patologia" placeholder="Ej: Ninguna, Hipertensión, etc." />
              </div>

              <div className="vfcFormGroup">
                <label htmlFor="num_sesion">Número de sesión</label>
                <input type="number" id="num_sesion" name="num_sesion" defaultValue="1" required />
              </div>

              <button type="submit" className="vfcBtnPrimary">
                Continuar a Medición
              </button>
            </form>
          </section>
        )}

        {/* Sección 2: Medición - PRÓXIMO */}
        {currentSection === 2 && (
          <div className="vfcSection">
            <button onClick={() => setCurrentSection(1)} className="vfcBtnSecondary">
              ← Volver a Paciente
            </button>
            <h2>Variables de Medición</h2>
            <p>Formulario de medición en desarrollo...</p>
          </div>
        )}

        {/* Sección 3: Resultados - PRÓXIMO */}
        {currentSection === 3 && (
          <div className="vfcSection">
            <button onClick={() => setCurrentSection(2)} className="vfcBtnSecondary">
              ← Volver a Medición
            </button>
            <h2>Resultados</h2>
            <p>Resultados en desarrollo...</p>
          </div>
        )}
      </div>
    </>
  );
}

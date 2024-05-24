import { useState } from 'react';
import Card from './components/Card.jsx';
import './index.css'

function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: ''
  });
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre.trim().length < 3 || formData.apellido.length < 6){
      setError('Informacion incorrecta, el nombre debe tener al menos 3 letras, y el apellido mas de 6 letras');
      setSubmittedData(null);
    } else {
      setError('');
      setSubmittedData(formData);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input1">Nombre:</label>
          <input
            type="text"
            id="input1"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="input2">Apellido:</label>
          <input
            type="text"
            id="input2"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">{error}</p>}
      {submittedData && <Card data={submittedData} />}
    </div>
  );
}

export default App;

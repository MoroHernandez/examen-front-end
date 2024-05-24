function Card({ data }) {
    return (
      <div className="card">
        <h2>Información del usuario:</h2>
        <p><strong>Nombre:</strong> {data.nombre}</p>
        <p><strong>Apellido:</strong> {data.apellido}</p>
      </div>
    );
  }
  
  export default Card;
import { useParams, Link } from "react-router-dom";
import trips from "../data/trips";

function TripDetails() {
  const { id } = useParams();
  const trip = trips.find((t) => t.id === parseInt(id));

  if (!trip) {
    return (
      <div className="container">
        <h2>Viaggio non trovato 😢</h2>
        <Link to="/" className="btn">Torna alla Home</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{trip.nome}</h1>
      <p>📍 Città: {trip.citta}</p>
      <p>
        📅 Dal <strong>{trip.dataInizio}</strong> al <strong>{trip.dataFine}</strong>
      </p>

      <h3>Partecipanti ({trip.partecipanti.length}):</h3>
      <ul>
        {trip.partecipanti.map((p, index) => (
          <li key={index}>
            {p.nome} {p.cognome} – CF: {p.CF}
          </li>
        ))}
      </ul>

      <Link to="/" className="btn">← Torna alla Home</Link>
    </div>
  );
}

export default TripDetails;

import { Link } from "react-router-dom";

function TripCard({ trip }) {
  return (
    <div className="trip-card">
      <h2>{trip.nome}</h2>
      <p>📍 {trip.citta}</p>
      <p>
        Dal <strong>{trip.dataInizio}</strong> al <strong>{trip.dataFine}</strong>
      </p>
      <Link to={`/trip/${trip.id}`} className="btn">
        Dettagli →
      </Link>
    </div>
  );
}

export default TripCard;

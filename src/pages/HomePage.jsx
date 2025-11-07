import trips from "../data/trips";
import TripCard from "../components/TripCard";

function HomePage() {
  return (
    <div className="container">
      <h1>Lista Viaggi</h1>
      <div className="trip-list">
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;

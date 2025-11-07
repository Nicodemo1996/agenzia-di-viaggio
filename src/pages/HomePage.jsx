import React, { useState } from "react";
import trips from "../data/trips";
import TripCard from "../components/TripCard";

function HomePage() {
  const [tripSearch, setTripSearch] = useState("");
  const [personSearch, setPersonSearch] = useState("");


  const filteredTrips = trips.filter((trip) => {
    const matchTripName = trip.nome
      .toLowerCase()
      .includes(tripSearch.toLowerCase());

    const matchParticipants = trip.partecipanti.some((p) =>
      `${p.nome} ${p.cognome}`.toLowerCase().includes(personSearch.toLowerCase())
    );


    return matchTripName && (personSearch === "" || matchParticipants);
  });

  return (
    <div className="container">
      <h1>Agenzia di Viaggi M</h1>


      <input
        type="text"
        placeholder="Cerca un viaggio..."
        value={tripSearch}
        onChange={(e) => setTripSearch(e.target.value)}
        className="search-bar"
      />


      <input
        type="text"
        placeholder="Cerca un partecipante..."
        value={personSearch}
        onChange={(e) => setPersonSearch(e.target.value)}
        className="search-bar"
      />

      <div className="trip-list">
        {filteredTrips.length > 0 ? (
          filteredTrips.map((trip) => <TripCard key={trip.id} trip={trip} />)
        ) : (
          <p>Nessun viaggio trovato 😢</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;

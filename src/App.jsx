import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddTeamPerformance() {
  const [team, setTeam] = useState("");
  const [matchesPlayed, setMatchesPlayed] = useState("");
  const [matchesWon, setMatchesWon] = useState("");
  const [nrr, setNrr] = useState("");
  const [prediction, setPrediction] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const winRate = (parseInt(matchesWon) / parseInt(matchesPlayed)) * 100;
    let predictedResult = "";

    if (winRate >= 60 && parseFloat(nrr) > 0.2) {
      predictedResult = "High chance of winning";
    } else if (winRate >= 40 && parseFloat(nrr) >= 0) {
      predictedResult = "Moderate chance of winning";
    } else {
      predictedResult = "Low chance of winning";
    }

    await addDoc(collection(db, "ipl_performance"), {
      team,
      matchesPlayed: parseInt(matchesPlayed),
      matchesWon: parseInt(matchesWon),
      netRunRate: parseFloat(nrr),
      prediction: predictedResult,
    });

    setPrediction(predictedResult);
    setTeam("");
    setMatchesPlayed("");
    setMatchesWon("");
    setNrr("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={team} onChange={(e) => setTeam(e.target.value)} placeholder="Team Name" required />
        <input type="number" value={matchesPlayed} onChange={(e) => setMatchesPlayed(e.target.value)} placeholder="Matches Played" required />
        <input type="number" value={matchesWon} onChange={(e) => setMatchesWon(e.target.value)} placeholder="Matches Won" required />
        <input type="number" step="0.01" value={nrr} onChange={(e) => setNrr(e.target.value)} placeholder="Net Run Rate" required />
        <button type="submit">Predict & Save</button>
      </form>

      {prediction && <h3>Prediction: {prediction}</h3>}
    </div>
  );
}

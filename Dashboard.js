import { useEffect, useState } from "react";

export default function Dashboard() {
  const [candidates, setCandidates] = useState([]);
  const [shortlisted, setShortlisted] = useState({});

  // Fetch from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/candidates")
      .then((res) => res.json())
      .then((data) => setCandidates(data))
      .catch((err) => console.error(err));
  }, []);

  if (candidates.length === 0) {
    return <h2>No candidate data found</h2>;
  }

  return (
    <div>
      <h1>Recruiter Dashboard 📊</h1>

      {candidates.map((profile, index) => (
        <div key={index} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          
          <h3>Candidate {index + 1}</h3>

          <p><b>Experience:</b> {profile.input}</p>

          <h4>Skills:</h4>
          {profile.skills.map((s, i) => (
            <p key={i}>{s}</p>
          ))}

          <h4>Score: {profile.score}%</h4>

          <button
            onClick={() =>
              setShortlisted({ ...shortlisted, [index]: true })
            }
          >
            Shortlist
          </button>

          {shortlisted[index] && (
            <p style={{ color: "green" }}>✅ Shortlisted</p>
          )}
        </div>
      ))}
    </div>
  );
}
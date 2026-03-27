import { useState, useEffect } from "react";

export default function Builder() {
  const [input, setInput] = useState("");
  const [skills, setSkills] = useState([]);
  const [score, setScore] = useState(0);

  // AI Logic
  const handleAI = () => {
    let detectedSkills = [];

    if (input.toLowerCase().includes("python")) {
      detectedSkills.push("Python");
    }
    if (input.toLowerCase().includes("react")) {
      detectedSkills.push("React");
    }
    if (input.toLowerCase().includes("java")) {
      detectedSkills.push("Java");
    }

    setSkills(detectedSkills);
    setScore(detectedSkills.length * 30);
  };

  // Auto-save (local)
  useEffect(() => {
    const data = { input, skills, score };
    localStorage.setItem("profile", JSON.stringify(data));
  }, [input, skills, score]);

  // 🔗 Save to Backend
  const saveProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/save-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ input, skills, score })
      });

      const data = await res.json();
      alert(data.message || "Saved successfully!");
    } catch (error) {
      alert("Error saving profile");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>AI Profile Builder 🤖</h1>

      <textarea
        placeholder="Tell about your experience..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br />

      <button onClick={handleAI}>Generate with AI</button>

      <button onClick={saveProfile} style={{ marginLeft: "10px" }}>
        Save Profile
      </button>

      <h3>Detected Skills:</h3>
      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}

      <h3>Profile Score: {score}%</h3>

      <h3>Profile Preview:</h3>
      <p>{input}</p>

      <p style={{ color: "green" }}>Auto-saved ✔</p>
    </div>
  );
}
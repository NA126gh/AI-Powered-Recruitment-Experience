import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      
      <h1>AI-Powered Recruitment 🚀</h1>
      
      <p style={{ fontSize: "18px", margin: "20px" }}>
        No resumes. No PDFs. <br />
        Build your profile using AI-assisted input and get hired smarter.
      </p>

      {/* Candidate Flow */}
      <button
        onClick={() => navigate("/login")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Login to Build Profile
      </button>

      {/* Direct Builder Access (optional) */}
      <button
        onClick={() => navigate("/builder")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Try AI Profile Builder
      </button>

      {/* Recruiter Flow */}
      <button
        onClick={() => navigate("/dashboard")}
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "#6c757d",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Recruiter Dashboard
      </button>

      {/* Footer / Info */}
      <p style={{ marginTop: "40px", color: "gray" }}>
        AI helps convert your experience into structured profiles with skills, scores, and insights.
      </p>

    </div>
  );
}
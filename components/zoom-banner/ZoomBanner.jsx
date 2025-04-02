"use client";
import { useState } from "react";

export default function ZoomBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // Hide if dismissed

  return (
    <div style={overlayStyle}>
      <div style={bannerStyle}>
        <p>
          For the best experience, set your browser zoom to <strong>90%</strong>.
          <span style={shortcutStyle}>
            {" "}
            (Press <kbd>Ctrl</kbd> + <kbd>-</kbd> on windows <br /> or <kbd>Cmd</kbd> + <kbd>-</kbd> on Mac)
          </span>
        </p>
        <button onClick={() => setIsVisible(false)} style={closeButtonStyle}>Got it!</button>
      </div>
    </div>
  );
}

// Styles
const overlayStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "1000",
};

const bannerStyle = {
  backgroundColor: "#fff",
  color: "#333",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  fontSize: "16px",
  fontWeight: "600",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  width: "350px",
};

const shortcutStyle = {
  display: "block",
  fontSize: "14px",
  fontWeight: "500",
  color: "#555",
  marginTop: "8px",
};

const closeButtonStyle = {
  marginTop: "2px",
  padding: "8px 15px",
  fontSize: "14px",
  fontWeight: "600",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

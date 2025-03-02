import { useState } from "react";

const DrugInteractionChecker = () => {
  const [drug1, setDrug1] = useState("");
  const [drug2, setDrug2] = useState("");
  const [result, setResult] = useState("");

  // 🔹 Drug interaction database (Hash Map)
  const drugInteractions = {
    "aspirin-ibuprofen": "Increased risk of bleeding.",
    "warfarin-aspirin": "High risk of internal bleeding.",
    "acetaminophen-alcohol": "Liver damage risk.",
  };

  // 🔹 Function to check interaction
  const checkInteraction = () => {
    if (!drug1 || !drug2) {
      setResult("Please enter two drug names.");
      return;
    }

    // Normalize input (lowercase, remove spaces)
    const key1 = `${drug1.trim().toLowerCase()}-${drug2.trim().toLowerCase()}`;
    const key2 = `${drug2.trim().toLowerCase()}-${drug1.trim().toLowerCase()}`;

    // Check if interaction exists in hash map
    setResult(drugInteractions[key1] || drugInteractions[key2] || "No known interaction. Please consult a healthcare professional for more information.");
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>💊 Drug Interaction Checker</h2>
        <input
          type="text"
          placeholder="Enter first drug"
          value={drug1}
          onChange={(e) => setDrug1(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Enter second drug"
          value={drug2}
          onChange={(e) => setDrug2(e.target.value)}
          style={styles.input}
        />
        <button onClick={checkInteraction} style={styles.button}>Check Interaction</button>
        <p style={styles.result}>{result}</p>
      </div>

      <div style={styles.instructionContainer}>
        <h3 style={styles.instructionsHeading}>How to Use</h3>
        <p style={styles.instructionsText}>
          1. Enter the name of the first drug in the first input field.
        </p>
        <p style={styles.instructionsText}>
          2. Enter the name of the second drug in the second input field.
        </p>
        <p style={styles.instructionsText}>
          3. Click the "Check Interaction" button to see if there are any known drug interactions.
        </p>
        <p style={styles.instructionsText}>
          Note: This tool provides general information; always consult a healthcare provider for advice.
        </p>
      </div>
    </div>
  );
};

// 🔹 CSS-in-JS styling
const styles = {
  container: {
    display: "flex",                // Enable flexbox layout
    flexDirection: "row",           // Align items horizontally (side by side)
    justifyContent: "center",      // Center content horizontally
    alignItems: "flex-start",      // Align items to the top
    height: "100vh",                // Take full height of the viewport
    textAlign: "center",           // Center text inside the container
    padding: "20px",
    background: "linear-gradient(45deg,rgb(149, 138, 160) 0%,rgb(202, 219, 248) 100%)", // Gradient background
    fontFamily: "'Roboto', sans-serif",
  },
  formContainer: {
    display: "flex",                // Align the form elements vertically
    flexDirection: "column",
    alignItems: "center",           // Center form elements horizontally
    width: "40%",                   // Form takes up 40% of the container's width
    padding: "30px",
    backgroundColor: "#ffffff",    // White background for the form
    borderRadius: "10px",           // Rounded corners
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",  // Soft shadow
    margin: "20px",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth transition on hover
  },
  heading: {
    color: "#333",
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  input: {
    padding: "12px",
    margin: "12px",
    width: "85%",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
    transition: "all 0.3s ease",   // Input transition effect
  },
  inputFocus: {
    borderColor: "#2575fc",         // Change border color on focus
    boxShadow: "0 0 8px rgba(122, 127, 137, 0.7)",  // Add shadow on focus
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "15px",
    transition: "all 0.3s ease",   // Button hover effect
  },
  buttonHover: {
    backgroundColor: "#218838",    // Darker green on hover
  },
  result: {
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "18px",
    color: "#444",
    transition: "all 0.3s ease-in-out",
  },
  instructionContainer: {
    width: "40%",                    // Instructions take up 40% of the container's width
    textAlign: "left",               // Align instructions text to the left
    padding: "30px",
    backgroundColor: "#ffffff",     // White background
    borderRadius: "10px",           // Rounded corners
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)", // Soft shadow for instruction section
    margin: "20px",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smooth transition on hover
  },
  instructionsHeading: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
    fontFamily: "'Roboto', sans-serif",
  },
  instructionsText: {
    color: "#555",
    fontSize: "18px",
    marginBottom: "12px",
    lineHeight: "1.5",
  },
  // Adding hover effects to make the containers float
  formContainerHover: {
    transform: "translateY(-10px)", // Slight lift effect on hover
    boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.2)", // More prominent shadow
  },
  instructionContainerHover: {
    transform: "translateY(-10px)", // Slight lift effect on hover
    boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.2)", // More prominent shadow
  },
};

// Use hover effects with the :hover CSS-in-JS pseudo-class
const hoverEffect = {
  formContainer: {
    ":hover": {
      transform: "translateY(-10px)", 
      boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.2)",
    },
  },
  instructionContainer: {
    ":hover": {
      transform: "translateY(-10px)", 
      boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.2)",
    },
  },
};

export default DrugInteractionChecker;

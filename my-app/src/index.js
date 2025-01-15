import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactPractice from "./Views/ReactPractice";
import VideoEmbed from "./Views/VideoEmbed";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
reportWebVitals();

ReactDOM.render(
  <React.StrictMode>
    <App />
    <VideoEmbed /> {/* Render the VideoEmbed component here */}
  </React.StrictMode>,
  document.getElementById('root')
);
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { inject } from '@vercel/analytics';
createRoot(document.getElementById("root")!).render(<App />);

 
inject();
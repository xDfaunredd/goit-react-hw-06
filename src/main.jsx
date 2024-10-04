import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster position="top-right" reverseOrder={false} />
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Signin from "./Signin";
import CreateAccount from "./CreateAccount";
import AccountSettings from "./AccountSettings";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </>
  );
}

export default App;

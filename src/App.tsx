import { Route, Routes } from "react-router-dom";

import "./app.css";
import Contacts from "./views/contacts";
import Customers from "./views/customers";
import Sites from "./views/sites";
import Welcome from "./views/welcome";
import Error from "./views/error";

const App = () => {
  return (
    <Routes>
      <Route path="/customers" element={<Customers />} />
      <Route path="/sites" element={<Sites />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/" element={<Welcome />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;

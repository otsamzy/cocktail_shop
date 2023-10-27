import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Components/Styles.css";
import SharedComponent from "./Components/SharedComponent";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Details from "./Components/Details";
import { useState } from "react";
import Newsletter from "./Components/Newsletter";
import SubcribedPage from "./Components/SubcribedPage";

function App() {
  const [loading, setload] = useState(false);
  if (loading) {
    return <h2> loading</h2>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedComponent />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="/:cocktailId" element={<Details />} />
          <Route path="newsletter" element={<Newsletter />} />
          <Route path="subscribed" element={<SubcribedPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import { Link } from "react-router-dom";
import "./Home.css";
import Nav from "../pages/nav/Nav";

function Home() {
  return (
    <>
      <Nav />
      <div>
        <div className="nomina_home">
          <img src="src/layouts/assets/nomina_home.png" alt="" srcset="" />
        </div>
      </div>
    </>
  );
}

export default Home;

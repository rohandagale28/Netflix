import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  // const [myData, setmyData] = useState([]);
  // const [myError, setmyError] = useState("");
  // useEffect(() => {
  //   axios
  //     .get("https://api.github.com/users")
  //     .then((res) => setmyData(res.data))
  //     .catch((error) => setmyError(error.message));
  // }, []);
  return (
    <>
      <Nav />
      <Banner />
      {/* <div className="scroll" style={{
        backgroundColor: "#ffffff"
      }}>
        <div>axios tutorial</div>
        {myError != "" && <h1>{myError}</h1>}

        {myData.map((post) => {
          const { id, url, type } = post;
          return (
            <div className={id}>
              <h1>{id}</h1>
              <h1>{url}</h1>
              <h1>{type}</h1>
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default App;

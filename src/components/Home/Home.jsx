import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const handleClick = () => {
    alert("Ya clicked me!");
    console.log("History is", history);
    history.push("/animals");
  };
  return (
    <div>
      <h1>HOME</h1>
      <button onClick={handleClick}>Let's Go</button>
      <img src="https://pixy.org/download/4718707/" width={500} />
    </div>
  );
}

export default Home;

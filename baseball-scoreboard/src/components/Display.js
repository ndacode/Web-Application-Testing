//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";






function Display() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  
  return (
    <div className="container">
      <div className="game">

            <section className="buttons">
                <div className="scoreboard">
                    <button className="strike" onClick = {() => (strike < 2) ? setStrike(strike + 1) : setStrike(0)}> Strike</button>

                    <button className="hit" onClick = {() => (setStrike(0), setBall(0))}> Hit</button>

                    <button className="ball" onClick = {() => (ball < 3) ? setBall(ball + 1) : setBall(0)}> Ball </button>

                    <button className="foul" onClick = {() => (strike < 2) ? setStrike(strike + 1) : setStrike(strike)}> Foul </button>
                </div>
            </section>


            <section className="scoreboard">
                    <h2 className="home__name">Balls and Strikes</h2>
                    <div className="balls">Balls: {ball}</div>
                    <div className="strikes">Strikes: {strike}</div>
            </section>
     </div>
 </div>

  )}

 export default Display
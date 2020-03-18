import React from "react";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="Home">
    <div className="lander">
        <h1>GORP</h1>
        {props.isAuthenticated
            ? <p>You are signed in.</p>
            : <>
            <p>Good Old Raisins and Peanuts (GORP) is a simple trail report app.</p>
            </>
        }
    </div>
    </div>  
  );
}
import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css"

export default function Homepage() {
  return (
    <div className="home">
      <h1>Chat Room</h1>

      <div className="message">
        <p>"Tiny chat app just to showcase my full-stack skills"</p>
        <p>"It uses <span className="hl">Node.js</span> in server <span className="hl">MongoDB</span> as DB and <span className="hl">React</span> as client"</p>
      </div>

      <Link to="/chat">lets chat 💬</Link>

    </div>
  )
}

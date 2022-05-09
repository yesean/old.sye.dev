import * as React from "react"
import "./style.css"

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="name-description-container">
        <h1 className="name">Sean Ye</h1>
        <div className="description-container">
          <h2 className="left description">cs @ ucsd</h2>
          <h2 className="spacer description"> | </h2>
          <h2 className="right description">coffee addict</h2>
        </div>
      </div>
    </div>
  )
}

export default Home

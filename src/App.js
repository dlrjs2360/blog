import logo from "./logo.svg"
import "./App.css"

let posts = { color: "red", fontSize: "30px" }

function App() {
  return (
    <div className="App">
      <div className="black-nav">
        <div style={posts}>개발 Blog</div>
      </div>
      <h4>블로그 글</h4>
    </div>
  )
}

export default App

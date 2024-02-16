import "./App.css";
import FavePlayer from "./components/fave-player";
import DynamicContainer from "./components/dynamic-container";

// const liveStreamAddress =
  // "https://fave.api.cnn.io/v1/demo/?mediumId=livec76319f599742ab668c8b3ba6dcfed3ce7e817ad&mediumEnvironment=prod&isLive=true";

const nothing = () => {
  alert('nothing happened!');
}

function App() {
  return (
    <div className="App">
      <div className="AnotherContainerTest">
        <FavePlayer />
        <DynamicContainer />
        <button className="button" onClick={nothing}>This button doesn't do anything</button>
      </div>
    </div>
  );
}

export default App;

import ClassState from "./components/ClassState";
import UseState from "./components/UseState";
import "./App.css";
import UseReducer from "./UseReducer";

function App() {
  return (
    <div className="App">

      <UseReducer name="USeReducer" />
      <ClassState name="ClassState"/>
    </div>
  );
}

export default App;

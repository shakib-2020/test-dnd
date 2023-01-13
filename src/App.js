import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Board from "./Components/Board";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Board />
      </div>
    </DndProvider>
  );
}

export default App;

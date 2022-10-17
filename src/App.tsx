import "./App.css";
import { IItem, ProgressBar } from "./components/ProgressBar";

const mockData = [
  { name: "Sold", color: "#BD1FBE", value: 677 },
  { name: "Got free", color: "#FC64FF", value: 23 },
  { name: "Burned", color: "#00F53D", value: 202 },
  { name: "Free float", color: "#6D6D6D", value: 323 },
] as IItem[];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProgressBar items={mockData} />
      </header>
    </div>
  );
}

export default App;

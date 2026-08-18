import { Tree } from "./components/Tree";
import { treeData } from "./data/treeData";
import "./App.css";

export default function App() {
  return (
    <main className="app">
      <h1>File explorer</h1>

      <Tree data={treeData}></Tree>
    </main>
  );
}

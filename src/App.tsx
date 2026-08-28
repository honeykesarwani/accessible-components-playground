import { Disclosure } from "../playground/Disclosure/Disclosure";
import "./App.css";

function App() {
  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Accessible Components Playground</h1>

      <h2>Disclosure</h2>
      <Disclosure summary="What is an accessible component?">
        <p>
          A component that works correctly with keyboards, screen readers,
          and other assistive technology — not just mouse/visual users.
        </p>
      </Disclosure>
    </div>
  );
}

export default App;
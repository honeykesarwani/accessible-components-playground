import { Disclosure } from "../playground/Disclosure/Disclosure";
import { Tabs } from "../playground/Tabs/Tabs";
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

      <h2 style={{ marginTop: "2rem" }}>Tabs</h2>
      <Tabs
        tabs={[
          { label: "Overview", content: <p>This is the overview panel content.</p> },
          { label: "Details", content: <p>This is the details panel content.</p> },
          { label: "Settings", content: <p>This is the settings panel content.</p> },
        ]}
      />
    </div>
  );
}

export default App;
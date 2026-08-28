import { useState, useRef } from "react";
import { Disclosure } from "../playground/Disclosure/Disclosure";
import { Tabs } from "../playground/Tabs/Tabs";
import { Modal } from "../playground/Modal/Modal";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

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

      <h2 style={{ marginTop: "2rem" }}>Modal</h2>
      <button ref={triggerRef} type="button" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Example Modal"
        triggerRef={triggerRef}
      >
        <p>This is a modal dialog. Try pressing Tab to see focus stay trapped inside.</p>
        <input type="text" placeholder="Sample input" />
      </Modal>
    </div>
  );
}

export default App;
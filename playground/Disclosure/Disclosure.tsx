import { useState, useId } from "react";
import "./Disclosure.css";

interface DisclosureProps {
  summary: string;
  children: React.ReactNode;
}

export function Disclosure({ summary, children }: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="disclosure">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((prev) => !prev)}
        className="disclosure-trigger"
      >
        <span className={`disclosure-icon ${isOpen ? "open" : ""}`}>▶</span>
        {summary}
      </button>
      {isOpen && (
        <div id={contentId} role="region" className="disclosure-content">
          {children}
        </div>
      )}
    </div>
  );
}
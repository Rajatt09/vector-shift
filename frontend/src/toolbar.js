import { DraggableNode } from "./draggableNode";
import { ThemeToggle } from "./themeToggle";
import "./styles/toolbar.css";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div className="toolbar">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="logger" label="Logger" />
        <DraggableNode type="formatter" label="Formatter" />
        <DraggableNode type="merge" label="Merge" />
        <DraggableNode type="delay" label="Delay" />
        <ThemeToggle />
      </div>
    </div>
  );
};

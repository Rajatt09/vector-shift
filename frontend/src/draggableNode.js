import "./styles/toolbar.css";

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      style={{
        padding: "8px 14px",
        borderRadius: "var(--radius-md)",
        background: "var(--bg-panel)",
        border: "1px solid var(--border-subtle)",
      }}
      className={`draggable-node ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span>{label}</span>
    </div>
  );
};

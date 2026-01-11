import { Handle, Position } from "reactflow";
import "../styles/node.css";

export const BaseNode = ({ title, handles = [], children }) => {
  return (
    <div className="node-container">
      <div className="node-header">{title}</div>

      {handles.map((h, i) => (
        <Handle
          key={i}
          type={h.type}
          position={h.position === "left" ? Position.Left : Position.Right}
          id={h.id}
          style={h.style}
        />
      ))}

      <div className="node-content">{children}</div>
    </div>
  );
};

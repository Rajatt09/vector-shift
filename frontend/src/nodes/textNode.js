import { useState, useMemo, useEffect } from "react";
import { useUpdateNodeInternals, useReactFlow } from "reactflow";
import { BaseNode } from "./baseNode";
import { parseText } from "../utils/parseText";
import { useAutoResize } from "../hooks/useAutoResize";

const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "");
  const textareaRef = useAutoResize(text);

  const variables = useMemo(() => parseText(text), [text]);

  const updateNodeInternals = useUpdateNodeInternals();
  const { setEdges } = useReactFlow();

  useEffect(() => {
    updateNodeInternals(id);
  }, [variables, id, updateNodeInternals]);

  useEffect(() => {
    const validHandleIds = new Set(
      variables.map((variable, index) => `${id}-var-${index}-${variable}`)
    );

    setEdges((edges) => {
      const filtered = edges.filter((edge) => {
        if (edge.target !== id) return true;
        return validHandleIds.has(edge.targetHandle);
      });

      return filtered.length === edges.length ? edges : filtered;
    });
  }, [variables, id, setEdges]);

  const handles = useMemo(
    () => [
      ...variables.map((variable, index) => ({
        type: "target",
        position: "left",
        id: `${id}-var-${index}-${variable}`,
        style: { top: 48 + index * 24 },
      })),
      { type: "source", position: "right", id: `${id}-value` },
    ],
    [variables, id]
  );

  return (
    <BaseNode title="Text" handles={handles}>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Use {{variables}} to create inputs"
        style={{
          resize: "none",
          overflow: "hidden",
          minHeight: "40px",
          background: "transparent",
          border: "1px solid var(--border-strong)",
          borderRadius: "8px",
          padding: "8px",
          color: "var(--text-primary)",
        }}
      />
    </BaseNode>
  );
};

export default TextNode;

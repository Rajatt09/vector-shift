import { useState } from "react";
import { useStore } from "./store";
import { PipelineStatus } from "./utils/status";

export const SubmitButton = () => {
  const nodes = useStore((s) => s.nodes);
  const edges = useStore((s) => s.edges);
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:8000/pipelines/parse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nodes: nodes.map((n) => ({ id: n.id })),
        edges: edges.map((e) => ({ source: e.source, target: e.target })),
      }),
    });

    setResult(await res.json());
  };

  return (
    <>
      <div className="submit-container">
        <button className="submit-btn" onClick={handleSubmit}>
          Analyze Pipeline
        </button>
      </div>

      <PipelineStatus result={result} onClose={() => setResult(null)} />
    </>
  );
};

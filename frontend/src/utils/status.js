import { CheckCircle, XCircle, GitBranch } from "lucide-react";

export const PipelineStatus = ({ result, onClose }) => {
  if (!result) return null;

  return (
    <div className="pipeline-status">
      <div className="status-header">
        <GitBranch size={18} />
        <span>Pipeline Analysis</span>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="status-body">
        <div className="status-item">
          <span>Nodes</span>
          <strong>{result.num_nodes}</strong>
        </div>

        <div className="status-item">
          <span>Edges</span>
          <strong>{result.num_edges}</strong>
        </div>

        <div className="status-item">
          <span>DAG</span>
          {result.is_dag ? (
            <CheckCircle className="ok" size={18} />
          ) : (
            <XCircle className="error" size={18} />
          )}
        </div>
      </div>
    </div>
  );
};

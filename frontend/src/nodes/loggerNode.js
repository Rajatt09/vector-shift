import { BaseNode } from "./baseNode";

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode
      title="Logger"
      handles={[{ type: "target", position: "left", id: `${id}-input` }]}
    >
      <span>Logs incoming data</span>
    </BaseNode>
  );
};

import { BaseNode } from "./baseNode";

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      title="Merge"
      handles={[
        {
          type: "target",
          position: "left",
          id: `${id}-a`,
          style: { top: "30%" },
        },
        {
          type: "target",
          position: "left",
          id: `${id}-b`,
          style: { top: "70%" },
        },
        { type: "source", position: "right", id: `${id}-output` },
      ]}
    >
      <span>Merges two inputs</span>
    </BaseNode>
  );
};

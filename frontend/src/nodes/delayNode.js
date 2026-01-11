import { BaseNode } from "./baseNode";

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      title="Delay"
      handles={[
        { type: "target", position: "left", id: `${id}-input` },
        { type: "source", position: "right", id: `${id}-output` },
      ]}
    >
      <label>
        Delay (ms):
        <input type="text" defaultValue={1000} />
      </label>
    </BaseNode>
  );
};

import { BaseNode } from "./baseNode";

export const FormatterNode = ({ id }) => {
  return (
    <BaseNode
      title="Formatter"
      handles={[
        { type: "target", position: "left", id: `${id}-input` },
        { type: "source", position: "right", id: `${id}-output` },
      ]}
    >
      <select>
        <option>JSON</option>
        <option>Plain Text</option>
        <option>Markdown</option>
      </select>
    </BaseNode>
  );
};

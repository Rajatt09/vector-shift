export const parseText = (text) => {
  const regex = /{{\s*([\w.-]+)\s*}}/g;
  const vars = new Set();

  let match;
  while ((match = regex.exec(text)) !== null) {
    vars.add(match[1]);
  }

  return Array.from(vars);
};

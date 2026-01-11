export const ThemeToggle = () => {
  const toggleTheme = () => {
    const current = document.documentElement.dataset.theme;
    document.documentElement.dataset.theme =
      current === "dark" ? "light" : "dark";
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        marginLeft: "auto",
        padding: "6px 10px",
        fontSize: "12px",
        borderRadius: "8px",
        border: "1px solid var(--border-subtle)",
        background: "var(--bg-node)",
        color: "var(--text-primary)",
        cursor: "pointer",
      }}
    >
      Toggle Theme
    </button>
  );
};

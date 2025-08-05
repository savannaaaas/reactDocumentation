export const Image = ({ children, ...props }) => {
  return (
    <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">
      <img
        {...props}
        style={{ transition: "filter 0.3s", cursor: "pointer", width: "60px" }}
        onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(0.7)")}
        onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(1)")}
      />
      {children}
    </a>
  );
};

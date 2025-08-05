export const Image = ({ children, ...props }) => {
  return (
    <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">
      <img
        {...props}
        onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(0.7)")}
      />
      {children}
    </a>
  );
};

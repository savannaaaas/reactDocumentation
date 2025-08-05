export const Image = ({ children, ...props }) => {
  return (
    <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">
      <img {...props} />
      {children}
    </a>
  );
};

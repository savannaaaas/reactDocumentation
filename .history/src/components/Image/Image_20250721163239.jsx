export const Image = ({ children, ...props }) => {
  return (
    <a
      href="https://github.com/savannaaaas"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img {...props} />
      {children}
    </a>
  );
};

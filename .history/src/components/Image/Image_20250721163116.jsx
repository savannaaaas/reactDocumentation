export const Image = ({ children, ...props }) => {
  return (
    <a href="https://github.com/savannaaaas">
      <img {...props}>{children}</img>
    </a>
  );
};

export const Image = ({ children, ...props }) => {
  return (
    <a>
      <img {...props}>{children}</img>
    </a>
  );
};

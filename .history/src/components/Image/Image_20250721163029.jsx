export const Image = ({ children, ...props }) => {
  return (
    <a href="">
      <img {...props}>{children}</img>
    </a>
  );
};

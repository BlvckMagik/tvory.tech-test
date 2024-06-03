import * as Styled from "./index.styled";

const Layout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return <Styled.Main>{children}</Styled.Main>;
};

export default Layout;

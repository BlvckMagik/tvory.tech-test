import * as Styled from "./index.styled";

const Header: React.FC = () => {
  return (
    <Styled.Header>
      <Styled.Logo href="/">Invite Platform</Styled.Logo>
      <Styled.UserInfo>
        <Styled.Avatar alt="default user" />
        <Styled.Mail>defaultUser@gmail.com</Styled.Mail>
      </Styled.UserInfo>
    </Styled.Header>
  );
};

export default Header;

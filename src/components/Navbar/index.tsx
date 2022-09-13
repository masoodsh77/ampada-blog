import { Box, styled, Stack } from "@mui/material";
import Logo from "../../assets/Svgs/Logo.svg";

interface IIconWrapper {
  active?: boolean;
}

const RootStyle = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  height: "6rem",
  borderBottom: "1px solid rgba(0, 0, 0, 0.16)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: 64,
  paddingRight: 64,
}));

const MenuContainer = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "space-around",
}));

const MenuItems = styled(Box, {
  shouldForwardProp: (prop) => prop !== "",
})<IIconWrapper>(({ theme, active }) => ({
  height: "6rem",
  fontFamily: "NewYorkSmall",
  fontSize: 20,
  fontWeight: 500,
  lineHeight: "170%",
  borderBottom: active ? "2px solid #000" : "1px solid rgba(0, 0, 0, 0.0)",
  display: "flex",
  alignItems: "center",
}));

function Navbar() {
  return (
    <RootStyle>
      <img src={Logo} alt="logo" loading="lazy" />
      <MenuContainer spacing={3} direction={"row"}>
        <MenuItems active={window.location.pathname === "/" && true}>
          BLOG
        </MenuItems>
        <MenuItems active={window.location.pathname === "/about" && true}>
          ABOUT
        </MenuItems>
        <MenuItems active={window.location.pathname === "/links" && true}>
          LINKS
        </MenuItems>
        <MenuItems active={window.location.pathname === "/projects" && true}>
          PROJECTS
        </MenuItems>
      </MenuContainer>
    </RootStyle>
  );
}

export default Navbar;

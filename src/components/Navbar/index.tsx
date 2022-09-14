import {
  Box,
  styled,
  Stack,
  TextField,
  InputAdornment,
  Button,
  IconButton,
} from "@mui/material";
import Logo from "../../assets/Svgs/Logo.svg";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import axios from "axios";

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
  cursor: "pointer",
}));
const SearchRes = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "3.7rem",
  left: "0",
  border: "1px solid rgba(0, 0, 0, 0.05)",
  width: "100%",
  borderRadius: 1,
  backgroundColor: "#fff",
  maxHeight: "15rem",
  boxShadow: "0 0 5px gray",
  overflowY: "scroll",
}));

function Navbar() {
  const [searchRes, setSearchRes] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<string>("");
  const [res, setRes] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e: any) => {
    setSearchData(e.target.value);
  };
  const handleSearchBtn = () => {
    const options = {
      method: "GET",
      url: "https://newscatcher.p.rapidapi.com/v1/search_free",
      params: { q: searchData, lang: "en", media: "True", page_size: "13" },
      headers: {
        "X-RapidAPI-Key": "173a79cf98mshfcbb6d296eb09d0p13f1f1jsn7ec78250031d",
        "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
      },
    };
    axios.request(options).then((res) => {
      console.log(res.data.articles);
      setRes(res.data.articles);
    });
    setSearchRes(true);
  };
  return (
    <RootStyle>
      <img src={Logo} alt="logo" loading="lazy" onClick={() => navigate("/")} />
      <MenuContainer spacing={3} direction={"row"}>
        <Box sx={{ position: "relative", fontFamily: "NewYorkSmall" }}>
          <TextField
            placeholder="Search News ..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
            value={searchData}
          />
          <SearchRes sx={{ display: searchRes ? "block" : "none" }}>
            <IconButton
              onClick={() => {
                setSearchRes(false);
                setSearchData("");
              }}
            >
              <CloseIcon />
            </IconButton>
            {res.map((item: any, index: number) => {
              return (
                <Box
                  sx={{
                    p: 1,
                    borderBottom: "1px solid grey",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    "&:hover": { bgcolor: "lightgrey" },
                  }}
                >
                  <img src={item.media} width={50} height={50} alt="new" />
                  <Box sx={{ ml: 2 }}>{item.title}</Box>
                </Box>
              );
            })}
          </SearchRes>
          <Button
            variant="contained"
            sx={{ height: "3.4rem", ml: 1 }}
            color="success"
            onClick={handleSearchBtn}
          >
            search
          </Button>
        </Box>
        <MenuItems
          active={window.location.pathname === "/" && true}
          onClick={() => navigate("/")}
        >
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

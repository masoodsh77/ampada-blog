import { styled, Box } from "@mui/material";
import Logo from "../../assets/Svgs/LogoWhite.svg";

interface IKeyWord {
  title: string;
  bold: boolean;
}
const RootStyle = styled(Box)(({ theme }) => ({
  backgroundColor: "#000",
  color: "#fff",
  width: "100%",
  height: "600px",
  overflow: "hidden",
}));

const KeyWordsContainer = styled(Box)(({ theme }) => ({
  minWidth: "100%",
  width: "1000%",
  display: "flex",
  fontStyle: "normal",
  fontSize: "20px",
  lineHeight: "28px",
  letterSpacing: "0.1em",
  paddingTop: "1rem",
  marginleft: "1rem",
  marginBottom: "10rem",
  fontWeight: 400,
}));

const SocialMediaSection = styled(Box)(({ theme }) => ({
  width: "15rem",
  display: "flex",
  justifyContent: "space-around",
  marginTop: "3rem",
}));

const SocialMediaItem = styled(Box)(({ theme }) => ({
  textDecoration: "underline",
  cursor: "pointer",
  fontFamily: "SFProTextRegular",
  fontSize: 16,
}));

const keyword = [
  { title: "Digital product design", bold: true },
  { title: "Remote work", bold: false },
  { title: "UX design", bold: true },
  { title: "Distributed teams", bold: false },
  { title: "Creativity", bold: true },
  { title: "Strategy", bold: false },
  { title: "Suspense", bold: true },
  { title: "Growth", bold: false },
  { title: "Digital product design", bold: true },
  { title: "Remote work", bold: false },
  { title: "UX design", bold: true },
  { title: "Distributed teams", bold: false },
  { title: "Creativity", bold: true },
  { title: "Strategy", bold: false },
];

function Footer() {
  return (
    <RootStyle>
      <KeyWordsContainer>
        {keyword.map((item: IKeyWord, index: number) => {
          return (
            <Box
              sx={{
                fontFamily: item.bold ? "SFProTextBold" : "SFProTextRegular",
                fontWeight: item.bold ? "bolder" : "lighter",
                mr: 3,
              }}
            >
              {item.title.toUpperCase()}
            </Box>
          );
        })}
      </KeyWordsContainer>
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          sx={{
            width: "30rem",
            textAlign: "center",
            fontFamily: "NewYorkSmall",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "140%",
            "@media (max-width: 720px)": {
              width: "20rem",
            },
          }}
        >
          <img src={Logo} alt="logo" loading="lazy" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus.{" "}
          </p>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <SocialMediaSection>
          <SocialMediaItem>Twitter</SocialMediaItem>
          <SocialMediaItem>Linkedin</SocialMediaItem>
          <SocialMediaItem>RSS</SocialMediaItem>
        </SocialMediaSection>
      </Box>
      <Box
        display={"flex"}
        justifyContent="center"
        flexWrap={"wrap"}
        sx={{
          mt: 15,
          fontFamily: "SFProTextRegular",
          fontSize: 12,
          "@media (max-width: 720px)": {
            mt: 10,
          },
        }}
      >
        <Box sx={{ width: "100%", textAlign: "center" }}>
          © 2012–2020 Nordic Rose Co.
        </Box>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          {" "}
          All rights reserved.
        </Box>
      </Box>
    </RootStyle>
  );
}

export default Footer;

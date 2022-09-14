import { Box, styled } from "@mui/material";
import image1 from "../../assets/Svgs/image 2.png";
const data = [
  {
    id: "0",
    title:
      "A few words about this blog platform, Ghost, and how this site was made",
    content:
      "Why Ghost (& Figma) instead of Medium, WordPress or other options?",
    img: image1,
  },
];

const RootStyle = styled(Box)(({ theme }) => ({
  padding: "77px 27rem",
}));
function Home() {
  return (
    <RootStyle>
      <Box>
        <img src={data[0].img} alt="news" />
        <Box
          sx={{
            fontFamily: "newYorkExtraLarg",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: 54,
            lineHeight: "100%",
            textAlign: "center",
            padding: "40px 3rem",
          }}
        >
          {data[0].title}
        </Box>
        <Box
          sx={{
            fontFamily: "SFMono",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 20,
            lineHeight: "170%",
            textAlign: "center",
            padding: "30px 1rem",
            margin: "0 8rem",
            borderBottom: "2px solid #000",
          }}
        >
          {data[0].content}
        </Box>
      </Box>
    </RootStyle>
  );
}

export default Home;

import { Box, Grid, styled, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../../components/NewsCard";

const RootStyle = styled(Box)(({ theme }) => ({
  maxWidth: "60rem",
  marginTop: "5rem",
  marginBottom: "5rem",
}));

const SlidTitle = styled(Box)(({ theme }) => ({
  fontFamily: "newYorkExtraLarg",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 54,
  lineHeight: "100%",
  textAlign: "center",
  padding: "40px 3rem",
  "@media (max-width: 720px)": {
    padding: "40px 1rem 5px 1rem",
    fontSize: 36,
  },
}));

const SlidSummery = styled(Box)(({ theme }) => ({
  fontFamily: "SFMono",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "170%",
  textAlign: "center",
  padding: "30px 1rem",
  margin: "0 8rem",
  borderBottom: "2px solid #000",
  "@media (max-width: 720px)": {
    margin: "0",
    padding: "5px 1rem 30px 1rem",
    fontSize: 16,
  },
}));

const ArticlesSection = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: 24,
  marginBottom: 24,
}));

const ArticleTitle = styled(Box)(({ theme }) => ({
  fontFamily: "newYorkExtraLarg",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "44px",
  lineHeight: "53px",
  textAlign: "center",
}));

function Home() {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const options = {
    method: "GET",
    url: "https://newscatcher.p.rapidapi.com/v1/latest_headlines",
    params: { lang: "en", media: "True" },
    headers: {
      "X-RapidAPI-Key": "173a79cf98mshfcbb6d296eb09d0p13f1f1jsn7ec78250031d",
      "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios.request(options).then((res) => setData(res.data.articles));
  }, []);

  useEffect(() => {
    if (data.length === 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <Box display={"flex"} justifyContent={"center"}>
      {isLoading ? (
        <Box
          sx={{ height: "calc(100% - 6rem - 641 px)" , pt:5 , pb:5}}
          display={"flex"}
          alignItems={"canter"}
          justifyContent={"center"}
        >
          <CircularProgress color={'success'}/>
        </Box>
      ) : (
        <RootStyle>
          <Box>
            <img src={data[0]?.media} alt="news" width={"100%"} />
            <SlidTitle>{data[0]?.title}</SlidTitle>
            <SlidSummery>{data[0]?.summary.substring(0, 100)}...</SlidSummery>
          </Box>
          <ArticlesSection>
            <ArticleTitle>All articles</ArticleTitle>
            <Grid container xs={12}>
              {data?.slice(1, 13).map((item: any, index: number) => {
                return (
                  <Grid key={index} item xs={12} md={6}>
                    <NewsCard item={item} />
                  </Grid>
                );
              })}
            </Grid>
          </ArticlesSection>
        </RootStyle>
      )}
    </Box>
  );
}

export default Home;

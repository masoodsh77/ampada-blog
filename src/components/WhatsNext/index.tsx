import { Box, styled, Grid } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import NewsCard from "../NewsCard";

const Title = styled(Box)(() => ({
  fontFamily: "newYorkExtraLarg",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "44px",
  lineHeight: "53px",
  padding: "3rem 0",
}));

function WhatNext() {
  const [data, setData] = useState<any>([]);
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
  return (
    <Box sx={{ maxWidth: "70rem" }}>
      <Title>What to read next</Title>
      <Grid container xs={12}>
        {data?.slice(13, 19).map((item: any, index: number) => {
          return (
            <Grid key={index} xs={12} md={4}>
              <NewsCard item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default WhatNext;

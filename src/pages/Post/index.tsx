import { useLocation } from "react-router-dom";
import { Box, Stack, styled, Avatar, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import ShareBtn from "../../components/ShareBtn";
import Eyes from "../../assets/Svgs/Eyes.svg";
import WhatNext from "../../components/WhatsNext";
import Newsletter from "../../components/Newsletter";

const RootStyle = styled(Box)(({ theme }) => ({
  width: "100%",
  marginTop: "5rem",
  marginBottom: "5rem",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
}));

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  "@media (max-width: 720px)": {
    margin: "2rem 1rem",
  },
}));

const PostTitle = styled(Box)(({ theme }) => ({
  maxWidth: "60rem",
  fontFamily: "newYorkExtraLarg",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 54,
  lineHeight: "100%",
  textAlign: "center",
  padding: "20px 3rem",
  "@media (max-width: 720px)": {
    padding: "20px 1rem 5px 1rem",
    fontSize: 36,
  },
}));

const PostSummery = styled(Box)(({ theme }) => ({
  fontFamily: "SFMono",
  maxWidth: "40rem",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 20,
  lineHeight: "170%",
  textAlign: "center",
  padding: "30px 1rem",
  margin: "0 8rem",
  "@media (max-width: 720px)": {
    margin: "0",
    padding: "5px 1rem 30px 1rem",
    fontSize: 16,
  },
}));

const AuthorBox = styled(Box)(({ theme }) => ({
  maxWidth: "40rem",
  width: "40rem",
  borderTop: "2px solid #000",
  marginTop: "2rem",
  padding: "2rem 0",
  display: "flex",
  justifyContent: "space-between",
  fontFamily: "SFProTextRegular",
  "@media (max-width: 720px)": {
    margin: "2rem 1rem",
    flexWrap: "wrap",
  },
}));

const AuthorName = styled("span")(({ theme }) => ({
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "19px",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  fontFamily: "SFProTextRegular",
}));

const PublishedDate = styled(Box)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
}));

const PostContent = styled(Box)(({ theme }) => ({
  maxWidth: "40rem",
  width: "40rem",
  textAlign: "left",
  fontFamily: "newYorkMedium",
  fontSize: 20,
  fontWeight: 400,
  lineHeight: "34px",
  "@media (max-width: 720px)": {
    margin: "0 1rem",
  },
}));

const TagSection = styled(Box)(({ theme }) => ({
  fontFamily: "SFProTextRegular",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "19px",
  textAlign: "left",
  maxWidth: "40rem",
  width: "40rem",
  margin: "2rem 0",
  "@media (max-width: 720px)": {
    margin: "2rem 1rem",
  },
}));

const AuthorBio = styled(Stack)(({ theme }) => ({
  maxWidth: "40rem",
  width: "40rem",
  borderTop: "1px dashed #000",
  fontFamily: "newYorkMedium",
  padding: "3rem 0",
  "@media (max-width: 720px)": {
    margin: "0 1rem",
  },
}));

const TagItem = styled("span")(({ theme }) => ({
  textDecoration: "underline",
}));

function Post() {
  const [postData, setPostData] = useState<any>([]);
  const location: any = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setPostData(location?.state?.data);
  }, [location]);
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <RootStyle>
        <Container>
          <PostTitle>{postData?.title}</PostTitle>
        </Container>
        <Container>
          <PostSummery>{postData?.summary?.substring(0, 100)}</PostSummery>
        </Container>
        <img src={postData?.media} alt="news" width={"100%"} />
        <AuthorBox>
          <Stack
            direction={"row"}
            spacing={2}
            alignItems={"center"}
            sx={{ mb: 2 }}
          >
            <Avatar
              alt={postData?.author}
              sx={{ "@media (max-width: 720px)": { width: 56, height: 56 } }}
            >
              {postData?.author?.substring(0, 1)}
            </Avatar>
            <Box sx={{ textAlign: "left" }}>
              <AuthorName>{postData?.author}</AuthorName>
              <PublishedDate>
                {postData?.published_date?.substring(0, 10)}
              </PublishedDate>
            </Box>
          </Stack>
          <Box>
            <ShareBtn size="small" />
          </Box>
        </AuthorBox>
        <Box
          sx={{ width: "100%", mt: 3 }}
          display={"flex"}
          justifyContent={"center"}
        >
          <PostContent>{postData?.summary}</PostContent>
        </Box>
        <ShareBtn size="large" title />
        <Container>
          <TagSection>
            Tags: <TagItem>{postData?.topic}</TagItem>
          </TagSection>
        </Container>
        <AuthorBio direction={"row"} spacing={2}>
          <Avatar sx={{ width: 56, height: 56 }} alt={postData?.author}>
            {postData?.author?.substring(0, 1)}
          </Avatar>
          <Box>
            <AuthorName>{postData?.author}</AuthorName>{" "}
            {`Mika Matikainen is a Design Founder & Advisor,
          Berlin School of Creative Leadership Executive MBA participant, Zippie
          advisor, Wolt co-founder, and Nordic Rose stakeholder.`}
          </Box>
        </AuthorBio>
        <Box sx={{ width: "100%" }}>
          <Divider>
            <img src={Eyes} alt="eyes" />
          </Divider>
        </Box>
        <Container>
          <WhatNext />
        </Container>
        <Container>
          <Newsletter />
        </Container>
      </RootStyle>
    </Box>
  );
}

export default Post;

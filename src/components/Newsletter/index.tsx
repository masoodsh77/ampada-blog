import { Box, styled } from "@mui/material";

const RootStyle = styled(Box)(() => ({
  border: "1px solid #000",
  maxWidth: "40rem",
  width: "40rem",
  borderTop: "7px solid #000",
  marginTop: "6rem",
  height: "15rem",
  padding: "3rem 0",
}));

const Title = styled(Box)(() => ({
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "36px",
  lineHeight: "28px",
  fontFamily: "newYorkExtraLarg",
  marginBottom: "rem",
  "@media (max-width: 720px)": {
  lineHeight: "35px",
  margin: "0 1rem 1.5rem",
  },
}));

const Content = styled(Box)(() => ({
  padding: "0 3rem",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "28px",
  fontFamily: "SFProTextRegular",
  "@media (max-width: 720px)": {
    lineHeight: "24px",
    padding: "0 1rem",
    },
  
}));

const EmailForm = styled(Box)(() => ({
  marginTop: "3rem",
  fontFamily: "SFProTextRegular",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const EmailFormInput = styled("input")(() => ({
  width: "60%",
  height: "3rem",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "23.87px",
  fontFamily: "SFProTextRegular",
  color:"#000",
  borderRadius:'0px',
  borderRight:'none',
  paddingLeft:'1rem',
  "&::-webkit-input-placeholder":{
  color:"#000"
  },
  "@media (max-width: 720px)": {
    width: "50%",
    },
}));

const EmailFormBTN = styled("button")(() => ({
  width: "20%",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "23.87px",
  fontFamily: "SFProTextRegular",
  height: "3.4rem",
  margin: 0,
  borderRadius:'0px',
  color:'#fff',
  backgroundColor:'#000',
  "@media (max-width: 720px)": {
    fontSize: "16px",
    lineHeight: "19px",
  
    },
}));

function Newsletter() {
  return (
    <RootStyle>
      <Title>Sign up for the newsletter</Title>
      <Content>
        If you want relevant updates occasionally, sign up for the private
        newsletter. Your email is never shared.{" "}
      </Content>
      <EmailForm>
        <EmailFormInput type={"email"} required placeholder="Enter your email ..."/>
        <EmailFormBTN>SIGN UP</EmailFormBTN>
      </EmailForm>
    </RootStyle>
  );
}

export default Newsletter;

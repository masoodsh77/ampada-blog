import { Box, styled } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

type BTNType = "small" | "large";

interface IBtnWrapper {
  width?: string;
  height?: string;
}

interface IShareBtn {
  size: BTNType;
  title?: boolean;
}

const RootStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
}));
const SocialBtn = styled(Box, {
  shouldForwardProp: (prop) => prop !== "",
})<IBtnWrapper>(({ theme, width, height }) => ({
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.08)",
  width: width,
  height: height,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #EAEAEA",
  cursor: "pointer",
  fontFamily: "SFProTextRegular",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: " 160%",
  "@media (max-width: 720px)": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "7.5rem",
  },
}));

const ShateTitle = styled(Box)(({ theme }) => ({
  width: "100%",
  textAlign: "left",
  display: "none",
  fontFamily: "SFProTextRegular",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "16.71px",
  "@media (max-width: 720px)": {
    display: "block",
  },
}));

function ShareBtn(props: IShareBtn) {
  const { size, title } = props;
  return (
    <RootStyle
      sx={
        size === "large"
          ? {
              width: "100%",
              mt: 10,
              "@media (max-width: 720px)": {
                width: "90%",
              },
            }
          : null
      }
    >
      {title ? <ShateTitle>Share:</ShateTitle> : null}
      <SocialBtn
        width={size === "small" ? "3.5rem" : "20rem"}
        height={size === "small" ? "2rem" : "3.5rem"}
        sx={{ borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px" }}
      >
        <FacebookOutlinedIcon fontSize="small" />
        <Box
          sx={{
            ml: 1,
            display: "block",
            "@media (max-width: 720px)": {
              display: "none",
            },
          }}
        >
          {size === "large" && "Share on Facebook"}
        </Box>
      </SocialBtn>
      <SocialBtn
        width={size === "small" ? "3.5rem" : "20rem"}
        height={size === "small" ? "2rem" : "3.5rem"}
        sx={{
          borderTopRightRadius: "4px",
          borderBottomRightRadius: "4px",
          "@media (max-width: 720px)": {
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
          },
        }}
      >
        <TwitterIcon fontSize="small" />
        <Box
          sx={{
            ml: 1,
            display: "block",
            "@media (max-width: 720px)": {
              display: "none",
            },
          }}
        >
          {size === "large" && "Share on Twitter"}
        </Box>
      </SocialBtn>
      <Box
        sx={{
          display: "none",
          "@media (max-width: 720px)": {
            display: "block",
          },
        }}
      >
        <SocialBtn
          width={size === "small" ? "3.5rem" : "7.5rem"}
          height={size === "small" ? "2rem" : "3.5rem"}
          sx={{
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
        >
          <WhatsAppIcon fontSize="small" />
        </SocialBtn>
      </Box>
    </RootStyle>
  );
}

export default ShareBtn;

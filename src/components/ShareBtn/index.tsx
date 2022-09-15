import { Box, styled } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

type BTNType = "small" | "large";

interface IBtnWrapper {
  width?: string;
  height?: string;
}

interface IShareBtn {
  size: BTNType;
  whatsApp?: boolean;
}

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
}));

function ShareBtn(props: IShareBtn) {
  const { size, whatsApp } = props;
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      sx={size === "large" ? { width: "100%", mt: 10 } : null}
    >
      <SocialBtn
        width={size === "small" ? "3.5rem" : "20rem"}
        height={size === "small" ? "2rem" : "3.5rem"}
        sx={{ borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px" }}
      >
        <FacebookOutlinedIcon fontSize="small" />
        <Box sx={{ ml: 1 }}>{size === "large" && "Share on Facebook"}</Box>
      </SocialBtn>
      <SocialBtn
        width={size === "small" ? "3.5rem" : "20rem"}
        height={size === "small" ? "2rem" : "3.5rem"}
        sx={{
          borderTopRightRadius: "4px",
          borderBottomRightRadius: "4px",
        }}
      >
        <TwitterIcon fontSize="small" />
        <Box sx={{ ml: 1 }}>{size === "large" && "Share on Twitter"}</Box>
      </SocialBtn>
    </Box>
  );
}

export default ShareBtn;

import { Box, styled } from "@mui/material";

type ItemType = {
  media: string;
  title: string;
};

interface InewsCard {
  item: ItemType;
}

const CardTitle = styled(Box)(({ theme }) => ({
  fontFamily: "SFProDisplay",
  fontStyle: "normal",
  fontweight: 500,
  fontsize: "22px",
  lineheight: "120%",
  textAlign: "center",
  marginTop: 20,
  padding:"0 5rem"
}));

function NewsCard(props: InewsCard) {
  const { item } = props;
  return (
    <Box sx={{ mt: 5 , textAlign:'center' }}>
      <img
        src={item.media}
        alt="news Media"
        width={"300rem"}
        height={"200rem"}
        style={{ borderRadius: "5px" }}
      />
      <CardTitle>{item.title}</CardTitle>
    </Box>
  );
}

export default NewsCard;

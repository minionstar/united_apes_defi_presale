import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const CollectionsCards = ({ data }) => {
  const { image, title, description } = data;
  return (
    <div>
      <Card sx={{ backgroundColor: "rgba(255, 255, 255, 0)" }}>
        <CardMedia
          component="img"
          height="482"
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{ pt: 1, pl: 0, pr: 0, color:"#ffffff" }}>
          <Button
            variant="text"
            sx={{
              fontFamily: "Bangers",
              color: "#ffffff",
              position: "relative",
              pb: 2,
            }}
            href="https://klaydoe-uad.gitbook.io/united-apes-defi/united-apes-nfts"
            target="_blank"
          >
            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: "30px",
                fontFamily: "Bangers",
                whiteSpace: "nowrap",
                borderBottom: "2px solid #ff0000",
                position: "absolute",
                left: 0,
              }}
            >
              Learn More
            </Typography>
          </Button>
          <ArrowForwardIcon sx={{ marginLeft:"30px;"}} />
        </CardContent>
      </Card>
    </div>
  );
};
export default CollectionsCards;

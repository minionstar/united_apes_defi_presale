import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
const MainQuestion = ({}) => {
  return (
    <div>
      <Accordion
        sx={{ backgroundColor: "#000", borderRadius: "0px!important" }}
      >
        <AccordionSummary
          expandIcon={<ArrowForwardIosIcon sx={{ color: "#f27474" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{ fontFamily: "Bangers", color: "#f27474" }}
              variant="h5"
              gutterBottom
              component="div"
            >
              {"Turpis urna, vivamus adipiscing gravida erat?"}
            </Typography>
            <Typography sx={{ fontFamily: "Poppins", color: "#f27474" }}>
              {
                "Blockchain will reshape Your industry and the whole economy. Be prepared. Here a collection of our FAQs."
              }
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default MainQuestion;

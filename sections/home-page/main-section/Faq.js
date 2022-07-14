import { Container, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Questions from "../../../components/Questions";
import { useState } from "react";
const Faq = () => {
  const theme = createTheme();
  const [questionId, setQuestionId] = useState(0);
  theme.typography.h3 = {
    fontSize: "2rem",
    "@media (min-width:600px)": {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "3rem",
    },
  };
  const questionsData = [
    {
      title: "Turpis urna, vivamus adipiscing gravida erat?",
      answer:
        "Blockchain will reshape Your industry and the whole economy. Be prepared. Here a collection of our FAQs.",
    },
    {
      title: "Semper risus sapien mus adipiscing in?",
      answer:
        "Blockchain will reshape Your industry and the whole economy. Be prepared. Here a collection of our FAQs.",
    },
    {
      title: "Duis duis vitae quam viverra ac?",
      answer:
        "Blockchain will reshape Your industry and the whole economy. Be prepared. Here a collection of our FAQs.",
    },
    {
      title: "Nec penatibus donec molestie?",
      answer:
        "Blockchain will reshape Your industry and the whole economy. Be prepared. Here a collection of our FAQs.",
    },
    {
      title: "Urna aenean ridiculus ut suspendisse?",
      answer:
        "Blockchain will reshape Your industry and the whole economy. Be prepared. Here a collection of our FAQs.",
    },
  ];
  const clickedQuestion = (id) => {
    setQuestionId(id);
  };
  return (
    <div id="FAQ">
      <Box sx={{ mt: 10 }}>
        <Container fixed>
          <Box
            sx={{
              width: "100%",
              display: { xs: "block", md: "flex" },
              justifyContent: "center",
              textAlign: "center",
              gap: 1,
              mb: 2,
            }}
          >
            <ThemeProvider theme={theme}>
              <Typography
                sx={{
                  fontFamily: "Bangers",
                  color: "#f27474",
                  fontSize: "40px",
                  fontWeight: 700,
                }}
              >
                Frequently Asked
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Bangers",
                  color: "#FF0000",
                  fontSize: "40px",
                  fontWeight: 700,
                }}
              >
                Questions
              </Typography>
            </ThemeProvider>
          </Box>
          {questionsData.map((data, i) => (
            <Questions
              key={"question" + i}
              clickedQuestion={clickedQuestion}
              index={i}
              questionId={questionId}
              data={data}
            />
          ))}
        </Container>
      </Box>
    </div>
  );
};
export default Faq;

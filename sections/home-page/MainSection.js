import Box from "@mui/material/Box";
import AutoStaking from "./main-section/AutoStaking";
import Jackpot from "./main-section/Jackpot";
import NoBodyWins from "./main-section/NoBodyWins";
import Busd from "./main-section/Busd";
import Lottery from "./main-section/Lottery";
import Collections from "./main-section/Collections";
import Faq from "./main-section/Faq";
import Footer from "./main-section/Footer";
import BuyToken from "./main-section/BuyToken";
const MainSection = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100%",
          width: "100%",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('images/background.png')",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box sx={{ pt: 10 }}>
          <AutoStaking />
          <Busd />
          <Jackpot />
          <NoBodyWins />
          <Lottery />
          <Collections />
          <BuyToken />
          <Footer />
        </Box>
      </Box>
    </>
  );
};
export default MainSection;

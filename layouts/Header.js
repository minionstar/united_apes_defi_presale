import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
const pages = [
  "HOME",
  "PRODUCTS",
  "NFT COLLECTIONS",
  "WHITE PAPER",
  "BUY TOKEN",
];
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  paper: {
    background: "#000",
    padding: 5,
  },
});
const Header = ({}) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const classes = useStyles();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
        <Image width={150} height={150} src="/images/logo.jpg" />
      </Box>
      <List>
        {pages.map((text, index) => (
          <>
            {text === "WHITE PAPER" ? (
              <a
                href="https://klaydoe-uad.gitbook.io/united-apes-defi/"
                target="_blank"
              >
                <ListItem sx={{ mb: 2, mt: 2 }} button>
                  <Typography
                    sx={{
                      fontFamily: "Bangers",
                      color: "#FF0000",
                      fontSize: "30px",
                    }}
                  >
                    {text}
                  </Typography>
                </ListItem>
              </a>
            ) : (
              <ScrollLink
                activeClass="active"
                to={text}
                spy={true}
                onClick={toggleDrawer(anchor, false)}
                smooth={true}
                duration={500}
              >
                <ListItem sx={{ mb: 2, mt: 2 }} button>
                  <Typography
                    sx={{
                      fontFamily: "Bangers",
                      color: "#FF0000",
                      fontSize: "30px",
                    }}
                  >
                    {text}
                  </Typography>
                </ListItem>
              </ScrollLink>
            )}
          </>
        ))}
      </List>
    </Box>
  );
  return (
    <AppBar color="transparent" position="absolute" sx={{ boxShadow: 0, p: 5 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              position: "absolute",
              left: "-30px",
            }}
          >
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer("right", true)}
              sx={{ color: "#FF0000", width: "100%" }}
            >
              <MenuIcon sx={{ fontSize: 80 }} />
            </IconButton>
            <React.Fragment>
              <Drawer
                classes={{ paper: classes.paper }}
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
              >
                {list("right")}
              </Drawer>
            </React.Fragment>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-start",
              gap: 4,
            }}
          >
            {pages.map((page, i) => (
              <>
                {page === "WHITE PAPER" ? (
                  <a
                    href="https://klaydoe-uad.gitbook.io/united-apes-defi/"
                    target="_blank"
                  >
                    <Button
                      data-aos="fade-down"
                      data-aos-delay={i * 100}
                      sx={
                        i === 0
                          ? {
                              fontFamily: "Bangers",
                              my: 2,
                              color: "#f27474",
                              display: "block",
                              fontSize: { xs: "15px", md: "33px" },
                              padding: "-5px",
                              borderBottom: "4px solid #FF0000",
                            }
                          : {
                              fontFamily: "Bangers",
                              my: 2,
                              color: "#f27474",
                              display: "block",
                              fontSize: { xs: "15px", md: "33px" },
                            }
                      }
                    >
                      {page}
                    </Button>
                  </a>
                ) : (
                  <ScrollLink
                    activeClass="active"
                    to={page}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Button
                      data-aos="fade-down"
                      data-aos-delay={i * 100}
                      sx={
                        i === 0
                          ? {
                              fontFamily: "Bangers",
                              my: 2,
                              color: "#f27474",
                              display: "block",
                              fontSize: { xs: "15px", md: "33px" },
                              padding: "-5px",
                              borderBottom: "4px solid #FF0000",
                            }
                          : {
                              fontFamily: "Bangers",
                              my: 2,
                              color: "#f27474",
                              display: "block",
                              fontSize: { xs: "15px", md: "33px" },
                            }
                      }
                    >
                      {page}
                    </Button>
                  </ScrollLink>
                )}
              </>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default Header;

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  Box,
  InputBase
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Sidebar from './Sidebar';
import { formatString } from '../functions';


const pageName = formatString(document.URL.split("/").at(-1) || "Main page");

// Sidebar
function drawSidebar(sidebarStatus, changeSidebarStatus) {
  return (
    <Drawer open={sidebarStatus["open"]} onClose={changeSidebarStatus(false)}>
      <Box
        onClick={changeSidebarStatus(false)}
        onKeyDown={changeSidebarStatus(false)}
      >
	  <Sidebar />
      </Box>
    </Drawer>
  );
};

// Search
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto"
  }
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

export default function Header() {
  const [sidebarStatus, setSidebarStatus] = useState({ open: false });

  const changeSidebarStatus = (isOpen) => (event) => {
    if (event.type === "keydown") {
      return;
    }

    setSidebarStatus({ open: isOpen });
  };

  return (
    <AppBar sx={{ marginBottom: '20px'}} position="static">
      <Toolbar>
        <IconButton onClick={changeSidebarStatus(true)}>
          <MenuRoundedIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="sidebar"
          />
        </IconButton>
        <Typography
          sx={{
            flexGrow: 1,
            textAlign: "center",
            display: { xs: "none", sm: "block" }
          }}
          variant="h4"
          fontWeight="bold"
        >
          {pageName}
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>

      {drawSidebar(sidebarStatus, changeSidebarStatus)}
    </AppBar>
  );
}

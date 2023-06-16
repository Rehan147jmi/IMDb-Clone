import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import { routePath } from "../constants/route";
import { useNavigate } from "react-router-dom";
import { Menu, BookmarkAdd, ExpandMore, Search } from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";
import { logoUrl } from "../constants/Constant";

const StyledToolbar = styled(Toolbar)`
  background-color: #121212;
  min-height: 56px !important;
  padding-left: 115px !important;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;

    & > p {
      font-size: 14px;
      font-weight: 600;
    }
  }

  & > p {
    font-size: 14px;
    font-weight: 600;
  }
`;

const StyledInputField = styled(InputBase)`
  background-color: white;
  height: 30px;
  width: 55%;
  border: 1px solid #dba506;
  font-size: 13px;

  border-radius: 4px;
  padding: 4px;
`;

function Header() {
  const [open, setOpen] = React.useState();

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const Navigate = useNavigate();

  return (
    <div>
      <AppBar position="static">
        <StyledToolbar>
          <img
            src={logoUrl}
            alt="logo"
            style={{ cursor: "pointer" }}
            width="64px"
            onClick={() => {
              Navigate(routePath.home);
            }}
          />
          <Box
            onClick={handleClick}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Menu />
            <Typography>Menu</Typography>
          </Box>
          <HeaderMenu open={open} handleClose={handleClose} />
          <StyledInputField placeholder="Search IMDb" />
          <Search style={{ cursor: "pointer" }} />
          <Typography>
            IMDb
            <Box component="span" style={{ color: "#1AA7EC" }}>
              Pro
            </Box>
          </Typography>

          <Box>
            <BookmarkAdd />
            <Typography>Watchlist</Typography>
          </Box>

          <Typography> Sign In </Typography>

          <Box>
            <Typography> EN </Typography>
            <ExpandMore />
          </Box>
        </StyledToolbar>
      </AppBar>
    </div>
  );
}

export default Header;

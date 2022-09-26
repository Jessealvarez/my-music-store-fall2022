import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function MenuAppBar({ user }) {
  console.log("user prop in header: ", user);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" bgcolor="red">
        <Toolbar>
          <Link to="/home">
            <Typography
              variant="h6"
              fontWeight="bold"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              MyMusicStore.com
            </Typography>
          </Link>
          <div>
            <Link to="/user">
              {user ? (
                //SET AS USER CIRCLE ICON WHEN LOGGED IN, PLAIN CIRCLE WHEN LOGGED OUT
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              ) : (
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <Brightness1Icon />
                </IconButton>
              )}
            </Link>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <ShoppingCartIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

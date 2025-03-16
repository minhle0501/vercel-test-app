import { AppBar, Toolbar, Button, Menu, MenuItem,Box} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ mt: 10 }}>
        <AppBar position="fixed">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/news">News</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>

        {/* Library Dropdown */}
        <Button color="inherit" onClick={handleMenuOpen}>Library</Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem component={Link} to="/mui-pages" onClick={handleMenuClose}>Mui Pages</MenuItem>
          <MenuItem component={Link} to="/react-video" onClick={handleMenuClose}>React Video</MenuItem>
          <MenuItem component={Link} to="/axios-page" onClick={handleMenuClose}>Axios Pages</MenuItem>
          <MenuItem component={Link} to="/react-lazy-load" onClick={handleMenuClose}>LazyLoad</MenuItem>
          <MenuItem component={Link} to="/zustand-demo" onClick={handleMenuClose}>zustand demo</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
    </Box>
  );
}

export default Navbar;
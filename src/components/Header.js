import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            goola
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Grid
        container
        justifyContent="center"
        style={{ marginTop: 10, fontWeight: "bold" }}
      >
        <Typography
          variant="h2"
          color="navy"
          style={{ fontWeight: "bold", marginBottom: 7, marginTop: 15 }}
        >
          Goola Finance
        </Typography>
      </Grid>
    </Box>
  );
}

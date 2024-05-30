import { Box, Container, Grid } from "@mui/material";
import AboutContactCommon from "../components/commoncomponents/AboutContactCommon";

const Layout = ({ children }) => (
  <Box className="AboutContactContainer">
    <div className="custom-container">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {children}
        </Grid>
        <Grid item xs={12} md={4}>
          <AboutContactCommon />
        </Grid>
      </Grid>
    </div>
  </Box>
);

export default Layout;

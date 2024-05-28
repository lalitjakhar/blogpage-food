import { Box, Container, Grid } from "@mui/material";
import AboutContactCommon from "../components/commoncomponents/AboutContactCommon";

const Layout = ({ children }) => (
  <Box className="AboutContactContainer">
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {children}
        </Grid>
        <Grid item xs={12} md={4}>
          <AboutContactCommon />
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Layout;

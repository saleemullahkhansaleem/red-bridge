import { Box, Container, Link, Stack, Typography } from "@mui/material";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <Box height={"160px"} id="home"></Box>
      <Box position={"fixed"} top={0} left={0} width={"100%"} zIndex={10}>
        <Box bgcolor={"white"}>
          <Container>
            <Box
              display={"flex"}
              sx={{ flexDirection: { xs: "column", sm: "row" } }}
              justifyContent={"space-between"}
              py={2}
            >
              <Link href="#home" sx={{ margin: { xs: "auto", sm: 0 } }}>
                <img src="/logo.png" alt="Red Bridge" width="175px" />
              </Link>
              <Box
                display={"flex"}
                sx={{
                  display: { xs: "none", sm: "flex" },
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 1, sm: 4 },
                }}
              >
                <Stack gap={0}>
                  <Typography variant="h6" color={"primary"}>
                    Any Questions?
                  </Typography>
                  <Typography fontWeight={400} variant="h6" color={"secondary"}>
                    Tel: 0203 4325 621
                  </Typography>
                </Stack>
                <Stack>
                  <Typography variant="h6" color={"primary"}>
                    More Information
                  </Typography>
                  <Typography fontWeight={400} variant="h6" color={"secondary"}>
                    sales@redbridgefire.com
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Container>
        </Box>
        <Navbar />
      </Box>
    </>
  );
};

export default Header;

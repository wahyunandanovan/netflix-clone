import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import BorderedBottomBox from "../components/Wrapper/BorderedBottomBox";
import Footer from "../components/Pages/Home/Footer";

const Profile = () => {
  // const router = useRouter();
  // const [profile, setProfile] = useState({});
  // const { pathname } = router;

  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // useEffect(async () => {
  //   const response = await getProfile();
  //   setProfile(response);
  // }, []);
  // console.log(profile);
  return (
    <Box backgroundColor="#000000" height="1200px" width="100%" padding="10px">
      <Stack backgroundColor="#000000">
        <Toolbar>
          <Grid
            container
            backgroundColor="#000000"
            padding="10px"
            alignItems="center"
            justifyContent="space-between"
          >
            <a href="/">
              <Image
                src="/__images/netflix.svg"
                height="45px"
                width="167px"
                layout="intrinsic"
                alt="Netflix logo"
              />
            </a>
            <Grid item>
              <Typography
                fontWeight="700"
                color="#1D1F2A"
                sx={{ fontSize: { md: "32px" } }}
              ></Typography>
              <Typography
                color="#A7A7A7"
                sx={{ fontSize: { md: "20px", xs: "10px" } }}
              ></Typography>
            </Grid>
            <Grid item display="flex" alignItems={"center"}>
              <Box ml="16px" mr="5px">
                <Avatar alt="" />
              </Box>
              <IconButton onClick={(e) => handleClick(e)}></IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </Stack>

      <BorderedBottomBox />
      <Typography
        variant="h3"
        color="white"
        textAlign="center"
        marginTop="100px"
      >
        Selamat Datang di NETFLIX
      </Typography>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer style={{ position: "absolute", bottom: "10px" }} />
    </Box>
  );
};

export default Profile;

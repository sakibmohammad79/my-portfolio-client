import { Box, Divider, List, Stack, Typography } from "@mui/material";

import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import SidebarItem from "./SidebarItem";
const SideBar = () => {
  return (
    <Box component={Link} href="/">
      <Stack
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        py={2}
      >
        <Typography
          variant="h5"
          component="h1"
          fontWeight={600}
          color="primary.main"
        >
          PORTFOLIO
        </Typography>
      </Stack>
      <Divider />
      <List>
        {drawerItems("admin").map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;

import * as React from "react";
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import styles from "../ui/theme";

export default function PermanentDrawerLeft() {
  const classes = styles();
  return (
    <Box className={classes.drawerBox}>
      <CssBaseline />
      <Drawer className={classes.drawerBox} variant="permanent" anchor="left">
        <Toolbar />
        <Divider />
        <Box className={classes.drawerBox}>
          <Typography variant="h5">Filter</Typography>
        </Box>
        <List>
          {["Location", "Venue Size", "Price Range", "Type of Event"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import Button from "./button";

type Item = {
  id: number;
  name: string;
  price: number;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 1280,
      textAlign: "center",
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  })
);

const ItemList: React.FC = () => {
  const classes = useStyles();
  const [itemsData, setItemsData] = useState<Array<Item>>([]);

  async function fetchItems() {
    const res = await axios.get(
      process.env.REACT_APP_DEV_API_HOST + "api/v1/items"
    );
    setItemsData(res.data.data);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className={classes.root}>
      <List>
        {itemsData.map((item: Item, index: number) => (
          <ListItem key={index}>
            <ListItemText primary={item.name} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ItemList;

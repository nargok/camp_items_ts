import React, { useEffect, useState } from "react";
import axios from "axios";

type Item = {
  id: number;
  name: string;
  price: number;
};

const ItemList: React.FC = () => {
  const [itemsData, setItemsData] = useState<Array<Item>>([]);

  async function fetchItems() {
    const res = await axios.get(
      process.env.REACT_APP_DEV_API_HOST + "api/v1/items"
    );
    console.log(res.data.data);
    setItemsData(res.data.data);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  const select = () => {
    console.log("select pushed");
  };

  return (
    <div>
      <ul>
        {itemsData.map((item: Item, index: number) => (
          <li key={index}>
            {item.name} ({item.price})<button onClick={select}>使う</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

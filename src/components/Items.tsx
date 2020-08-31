import React, { useEffect, useState } from "react";
import axios from "axios";

type Item = {
  name: string;
  category: string;
  weight?: number;
};

const Items: React.FC = () => {
  const [itemsData, setItemsData] = useState<Array<Item>>([]);

  async function fetchItems() {
    const res = await axios.get("http://localhost:4000/api/v1/items");
    console.log(res.data);
    setItemsData(res.data);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <div>Items</div>
      <ul>
        {itemsData.map((item: Item, index: number) => (
          <li key={index}>
            {item.name} [{item.category}] (
            {item.weight !== undefined ? item.weight : "no data"})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;

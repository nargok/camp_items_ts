import React, { useEffect, useState } from "react";
import axios from "axios";

type Employee = {
  id: number;
  employee_name: string;
  employee_salaly: number;
  employee_age: number;
  profile_image: string;
};

type Item = {
  id: number;
  name: string;
  price: number;
};

const Items: React.FC = () => {
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
      <div>Items</div>
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

export default Items;

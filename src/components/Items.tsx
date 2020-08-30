import React, { useEffect, useState } from "react";
import axios from "axios";

type Employee = {
  id: number;
  employee_name: string;
  employee_salaly: number;
  employee_age: number;
  profile_image: string;
};

const Items: React.FC = () => {
  const [itemsData, setItemsData] = useState<Array<Employee>>([]);

  async function fetchItems() {
    const res = await axios.get(
      "http://dummy.restapiexample.com/api/v1/employees"
    );
    console.log(res.data.data);
    setItemsData(res.data.data);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <div>Items</div>
      <ul>
        {itemsData.map((item: Employee, index: number) => (
          <li key={index}>
            {item.employee_name} ({item.employee_age})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;

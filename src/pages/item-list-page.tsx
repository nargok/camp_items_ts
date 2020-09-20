import React from "react";
import ItemList from "../components/Item-list";

// todo ItemListを表示する
const ItemListPage: React.FC = () => {
  return (
    <div>
      <h2>装備リスト</h2>
      <ItemList />
    </div>
  );
};

export default ItemListPage;

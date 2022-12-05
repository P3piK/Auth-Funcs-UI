import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";
import styles from "./AccountList.module.css";
import AccountItem from "./AccountItem";
import useHttp from "../../hooks/use-http";

function AccountList() {
  const {fetchData, isLoading, error} = useHttp();
  const [items, setItems] = useState([]);

  const fetchAccountHandler = (data) => {
    setItems(data);
  }

  useEffect(() => {
    console.log("fetch");
    fetchData({ url: "https://localhost:7094/api/account" }, fetchAccountHandler);
  }, [fetchData]);

  const accountsContent = (
    <ul>
      {items.length === 0 && <p>No accounts.</p>}
      {items.length > 0 &&
        items.map((item) => <AccountItem key={item.id} item={item} />)}
    </ul>
  );

  return (
    <Card className={styles.account}>
      <h2>Accounts</h2>
      {isLoading && <p>Loading...</p>}
      {!isLoading && accountsContent}
    </Card>
  );
}

export default AccountList;

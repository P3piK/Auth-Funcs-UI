import React, { useEffect, useState } from "react";
import AccountItem from "./AccountItem";
import useHttp from "../../hooks/use-http";
import styles from "./AccountList.module.css";

function AccountList(props) {
  const { fetchData, isLoading, error } = useHttp();
  const [items, setItems] = useState([]);

  const fetchAccountHandler = (data) => {
    setItems(data);
  };

  useEffect(() => {
    console.log("fetch");
    fetchData(
      { url: "https://authfuncsapi.azurewebsites.net/api/account" },
      fetchAccountHandler
    );
  }, [fetchData]);

  const accountsContent = (
    <>
      {items.length === 0 && <p>No accounts.</p>}
      {items.length > 0 && (
        <ul className={styles.list}>
          {items.map((item) => (
            <AccountItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </>
  );

  return (
    <div className={styles.content}>
      {isLoading && <p>Loading...</p>}
      {!isLoading && !error && accountsContent}
      {!isLoading && error && <p>Something went wrong. {error}</p>}
    </div>
  );
}

export default AccountList;

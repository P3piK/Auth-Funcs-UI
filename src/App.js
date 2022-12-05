import Header from "./components/Header/Header";
import AccountList from "./components/Account/AccountList";
import styles from "./App.module.css"

function App() {
  return (
    <>
      <Header />
      <main>
        <AccountList />
      </main>
    </>
  );
}

export default App;

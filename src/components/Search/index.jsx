import React, { useContext } from "react";
import AppContext from "src/AppContext";
import styles from "../../styles/intro.module.css";

const Search = ({ onSearch }) => {
  const { username, setUsername } = useContext(AppContext);

  const onUsernameChanged = (event) => {
    setUsername(event.target.value);
  };

  const onReset = () => {
    setUsername("");
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.search}
        value={username}
        onChange={onUsernameChanged}
      />

      <button
        className={`${styles.button} ${styles.searchBtn}`}
        onClick={onSearch}
      >
        Search
      </button>
      <button
        className={`${styles.button} ${styles.resetBtn}`}
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Search;

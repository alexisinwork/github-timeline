import { createContext } from "react";

const initialContext = {
  username: "",
  setUsername: () => {},
  currentRepo: null,
  setCurrentRepo: () => {},
};

const AppContext = createContext(initialContext);

export default AppContext;

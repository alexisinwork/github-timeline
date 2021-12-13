import React, { useState } from "react";

import introStyles from "./styles/intro.module.css";
import timelineStyles from "./styles/timeline.module.css";
import footerStyles from "./styles/footer.module.css";

import AppContext from "./AppContext";

import Repo from "./components/Repo";
import Search from "./components/Search/index";
import { fetchAllReposForUser } from "./api/fetchRepos";

const App = () => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);

  const appContext = {
    username,
    setUsername,
  };

  const onSearch = async () => {
    const repos = await fetchAllReposForUser(username);
    const sortedReposByDate = repos
      .map((repo) => ({
        ...repo,
        created_at: new Date(repo.created_at).getTime(),
      }))
      .sort((a, b) => a.created_at - b.created_at);

    setRepos(sortedReposByDate);
  };

  return (
    <AppContext.Provider value={appContext}>
      <div className="App">
        <section className={introStyles.intro}>
          <div className={introStyles.container}>
            <h1>GitHub Timeline &darr;</h1>
            <Search onSearch={onSearch} />
          </div>
        </section>

        <section className={timelineStyles.timeline}>
          <ul>
            {repos.length > 0 &&
              repos.map((repo, i) => <Repo key={i} {...repo} />)}
          </ul>
        </section>

        <footer className={footerStyles["page-footer"]}>
          <span>made by </span>
          <a
            href="https://github.com/alexisinwork/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              width="24"
              height="24"
              src={process.env.PUBLIC_URL + "/github-icon.png"}
              alt="Github@Alexito"
            />
          </a>
        </footer>

        <div className={footerStyles["made-footer"]}>
          <span>timeline by</span>
          <a
            href="https://georgemartsoukos.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              width="24"
              height="24"
              src="https://assets.codepen.io/162656/george-martsoukos-small-logo.svg"
              alt="George Martsoukos logo"
            />
          </a>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;

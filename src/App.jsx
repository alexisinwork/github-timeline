import React from "react";

import introStyles from "./styles/intro.module.css";
import timelineStyles from "./styles/timeline.module.css";
import footerStyles from "./styles/footer.module.css";
import Repo from "./components/Repo";

const App = () => {
  // const fetchGithubData = async () => {
  //   const users = await fetch("https://api.github.com/users/alexisinwork");
  //   const repos = await fetch(
  //     "https://api.github.com/users/alexisinwork/repos"
  //   );
  //   const basket = await fetch(
  //     "https://api.github.com/repos/alexisinwork/basket"
  //   );
  //   console.log(users, basket, repos);
  // };

  // fetchGithubData();
  const repos = [
    {
      time: "1934",
      text: `At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium`,
    },
    {
      time: "1939",
      text: `At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium`,
    },
    {
      time: "1940",
      text: `At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium`,
    },
    {
      time: "1941",
      text: `At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium`,
    },
    {
      time: "1945",
      text: `At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium`,
    },
    {
      time: "1945",
      text: `At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium`,
    },
    {
      time: "1945",
      text: `At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium At vero eos et
              accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium`,
    },
  ];

  return (
    <div className="App">
      <section className={introStyles.intro}>
        <div className={introStyles.container}>
          <h1>GitHub Timeline &darr;</h1>
        </div>
      </section>

      <section className={timelineStyles.timeline}>
        <ul>
          {repos.map((repo, i) => (
            <Repo key={i} {...repo} />
          ))}
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
    </div>
  );
};

export default App;

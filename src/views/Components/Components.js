import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionPills from "./Sections/SectionPills.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

const URL = "https://api.github.com/users/jlameiro87/repos?per_page=100";

export default function Components(props) {
  const [gitHubInfo, setGitHubInfo] = React.useState(null);
  const [languages, setLanguages] = React.useState(null);

  React.useEffect(() => {
    const fetchGithubUserInfo = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setGitHubInfo(data);
      const newData = data.reduce((total, currentItem) => {
        const { language } = currentItem;
        if (language) {
          total[language] = total[language] ? total[language] + 1 : 1;
        }
        return total;
      }, {});
      setLanguages(newData);
    };
    fetchGithubUserInfo();
  }, []);

  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="My Projects"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionPills gitHubInfo={gitHubInfo} languages={languages} />
      </div>
      <Footer />
    </div>
  );
}

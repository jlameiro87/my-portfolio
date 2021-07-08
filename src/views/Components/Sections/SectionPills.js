import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import NavPills from "components/NavPills/NavPills.js";
import Assignment from "@material-ui/icons/Assignment";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import PropTypes from "prop-types";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills({ gitHubInfo, languages }) {
  const getKeys = () => {
    if (!languages) return [];
    const keys = Object.keys(languages);
    let langs = [];
    for (const key in keys) {
      langs.push({
        key,
        lang: keys[key],
        count: languages[keys[key]],
      });
    }
    return langs;
  };

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>My GitHub Repository</h3>
          </div>
          <GridContainer>
            {gitHubInfo && (
              <GridItem xs={12} sm={12} md={12} lg={6}>
                <NavPills
                  color="rose"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 },
                  }}
                  tabs={[
                    {
                      tabButton: "By Repo",
                      tabIcon: Assignment,
                      tabContent: (
                        <span>
                          {gitHubInfo.map((item) => {
                            return <p key={item.id}>{item.name}</p>;
                          })}
                        </span>
                      ),
                    },
                    {
                      tabButton: "By Language",
                      tabIcon: Assignment,
                      tabContent: (
                        <span>
                          {getKeys().map((item) => {
                            return (
                              <p key={item.key}>
                                {item.lang}: {item.count}
                              </p>
                            );
                          })}
                        </span>
                      ),
                    },
                  ]}
                />
              </GridItem>
            )}
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

SectionPills.propTypes = {
  gitHubInfo: PropTypes.array,
  languages: PropTypes.object,
};

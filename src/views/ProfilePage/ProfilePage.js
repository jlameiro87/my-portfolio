import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import PersonPin from "@material-ui/icons/PersonPin";
import Assignment from "@material-ui/icons/Assignment";
import PermContactCalendar from "@material-ui/icons/PermContactCalendar";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import SupervisedUserCircle from "@material-ui/icons/SupervisedUserCircle";
import Storage from "@material-ui/icons/Storage";
import Language from "@material-ui/icons/Language";
import FilterFrames from "@material-ui/icons/FilterFrames";
import BarChart from "@material-ui/icons/BarChart";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import DoneAll from "@material-ui/icons/DoneAll";
import WorkIcon from "@material-ui/icons/Work";
import Done from "@material-ui/icons/Done";

import profile from "assets/img/faces/man.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div>
      <Header
        color="transparent"
        brand="My Portfolio"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
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
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Jorge Lameiro</h3>
                    <h6>Senior Sofware Developer</h6>
                    <Button justIcon link className={classes.margin5}>
                      <a
                        href="https://www.linkedin.com/in/jorge-luis-lameiro-marin-8912565a"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className={"fab fa-linkedin"} />
                      </a>
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <a
                        href="https://github.com/jlameiro87"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className={"fab fa-github"} />
                      </a>
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Accomplished FullStack Software Developer specialized in
                JavaScript language and full software development life cycle,
                including requirement gathering, coding and testing; with proven
                track record developing business solutions using cutting edge
                technologies. Entrepreneur and engineer with experience
                including co-founding PiBLOC, a Cuban freelancer company.
                Believes in building small, well-tested, functional pieces
                making complex problems simple with expressive, maintainable
                Started his career as a software engineer and Web Master at the
                Eastern University in Cuba. Over the course of his career,
                successfully occupied a variety of roles across product and
                engineering -managing teams of up 12 people. Interested in a
                challenging technical environment where innovation, teamwork and
                curiosity is encouraged to create great products and services.
                Perpetual learner.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Skills",
                      tabIcon: PersonPin,
                      tabContent: (
                        <GridContainer justify="center">
                          <List className={classes.root}>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <Language />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary="LANGUAGES"
                                secondary="JavaScript, PHP, Java, C#, Python"
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <FilterFrames />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary="FRAMEWORKS"
                                secondary="React, NodeJS, SailsJS, Angular, VueJS, Symfony, Spring-Boot"
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <BarChart />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary="TECHNOLOGIES"
                                secondary="HTML, CSS, Boostrap, JQuery"
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <Storage />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary="DATABASES"
                                secondary="MongoDB, MySQL, MariaDB, SQL Server"
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <WorkIcon />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary="SOURCE CONTROL VERSION"
                                secondary="Git, Subversion"
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <BusinessCenter />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary="METHODOLOGIES"
                                secondary="XP, SCRUM, RUP"
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <DoneAll />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary="IDES"
                                secondary="Visual Studio Code, Visual Studio, NetBeans, Eclipse, Idea Family"
                              />
                            </ListItem>
                          </List>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Qualifications",
                      tabIcon: Assignment,
                      tabContent: (
                        <GridContainer justify="center">
                          <List className={classes.root}>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <Done />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary=""
                                secondary="Strong knowledge of JavaScript and JS frameworks especially in Angular, React and NodeJS."
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <Done />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary=""
                                secondary="Extensive background in full development life cycle, including requirement definition, prototyping, design and implementation. Practical experience of using Design Patterns and applying Test Driven Design, Domain Driven Design and UML in agile environment"
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <Done />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary=""
                                secondary="Well versed in database analysis, modeling and design. Enterprise level experience."
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <Done />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary=""
                                secondary="Highly personable demeanor among coworkers and clients and practices exceptional work ethic."
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <Done />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary=""
                                secondary="Teamwork, work in a hard environment organized and help people, friendly communication, outgoing, learned rapidly, good listener and passionate about programming."
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <Done />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary=""
                                secondary="Familiarity with latest trends and technologies, educated, and eager to continue learning"
                              />
                            </ListItem>
                          </List>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Certifications",
                      tabIcon: PermContactCalendar,
                      tabContent: (
                        <GridContainer justify="center">
                          <List className={classes.root}>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <SupervisedUserCircle />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary="B.Sc. Software Engineer"
                                secondary="June, 2011"
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <a
                                    href="https://certificates.cs50.io/1918fa46-f205-4600-973c-0f35d12c9521.png?size=letter"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <WorkIcon />
                                  </a>
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary="CS50's Introduction to Computer Science"
                                secondary="May, 2020"
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar>
                                  <a
                                    href="https://certificates.cs50.io/1918fa46-f205-4600-973c-0f35d12c9521.png?size=letter"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <WorkIcon />
                                  </a>
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary="CS50's Web Programming with Python and JavaScript"
                                secondary="June, 2020"
                              />
                            </ListItem>
                          </List>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

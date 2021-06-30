import React, { Component, Fragment } from 'react';

import About from './About';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';
import Testimonials from './Testimonials';
import Contact from './Contact';

const URL = 'https://api.github.com/users/jlameiro87/repos?per_page=100';

class Dashboard extends Component {
  state = {
    gitHubInfo: null,
    languages: null,
    skills: null
  }

  componentDidMount() {
    const skills = [
      {
        id: 1,
        name: 'JavaScript',
        note: 'Advanced'
      },
      {
        id: 2,
        name: 'Java',
        note: 'Advanced'
      }
    ];
    this.setState({ skills: skills });
    this.fetchGithubUserInfo();
  }

  fetchGithubUserInfo = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    this.setState({ gitHubInfo: data });
    const newData = data.reduce((total, currentItem) => {
      const { language } = currentItem;
      if (language) {
        total[language] = total[language] ? total[language] + 1 : 1;
      }
      return total;
    }, {});
    this.setState({ languages: newData });
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <About />
        {
          this.state.gitHubInfo && this.state.languages &&
          <Projects gitHubInfo={this.state.gitHubInfo} languages={this.state.languages} />
        }
        {
          this.state.skills && <Skills skills={this.state.skills} />
        }
        <Testimonials />
        <Contact />
      </Fragment>
    )
  }
}

export default Dashboard;
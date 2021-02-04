import React, { Component, Fragment } from 'react';

import GitHubRepoInfo from './GitHubRepoInfo';
import MyInfo from './MyInfo';
import GitHubRepoByLang from './GitHubRepoByLang';

const URL = 'https://api.github.com/users/jlameiro87/repos?per_page=100';

class Dashboard extends Component {
  state = {
    gitHubInfo: null,
    languages: null
  }

  componentDidMount() {
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
        <MyInfo></MyInfo>
        {
          this.state.languages &&
          <GitHubRepoByLang languages={this.state.languages}></GitHubRepoByLang>
        }
        {
          this.state.gitHubInfo &&
          <GitHubRepoInfo gitHubInfo={this.state.gitHubInfo}></GitHubRepoInfo>
        }
      </Fragment>
    )
  }
}

export default Dashboard;
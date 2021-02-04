import React, { Fragment } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function GitHubRepoInfo(props) {
  return (
    <Container fixed>
      <Typography component="div" variant="h4" gutterBottom>
        My GitHub Repos:
      </Typography>
      <List component="div" aria-label="main mailbox folders">
        {
          props.gitHubInfo.map(item => (
            <Fragment key={item.id}>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
              <Divider />
            </Fragment>
          ))
        }
      </List>
    </Container>
  );
}

export default GitHubRepoInfo;
import { Fragment } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '20px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Projects = ({ gitHubInfo, languages }) => {
  const classes = useStyles();

  const getKeys = () => {
    const keys = Object.keys(languages);
    let langs = [];
    for (const key in keys) {
      langs.push({
        key,
        lang: keys[key],
        count: languages[keys[key]]
      });
    }
    return langs;
  }

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography component="div" variant="h4" gutterBottom>
                My GitHub Repo:
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <List component="div" aria-label="main mailbox folders">
                {
                  gitHubInfo.map(item => (
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
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={2}>
                    {getKeys().map((value) => (
                      <Grid key={value.key} item>
                        <Paper className={classes.paper}>
                          {value.lang}: {value.count}
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Projects;

import React from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function GitHubRepoByLang(props) {
  const classes = useStyles();

  const getKeys = () => {
    const keys = Object.keys(props.languages);
    let langs = [];
    for (const key in keys) {
      langs.push({
        key,
        lang: keys[key],
        count: props.languages[keys[key]]
      });
    }
    return langs;
  }

  return (
    <Container fixed>
      <Typography component="div" variant="h4" gutterBottom>
        My GitHub Repos by Language:
      </Typography>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {getKeys().map((value) => (
              <Grid key={value.key} item>
                <Paper className={classes.paper}>
                  { value.lang }: { value.count }
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default GitHubRepoByLang;
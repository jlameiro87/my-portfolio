import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const About = () => {
  return (
    <Container fixed>
      <Typography component="div" variant="h4" gutterBottom>
        About Me:
      </Typography>
      <Typography variant="body1" gutterBottom>
        Accomplished FullStack Software Developer specialized in JavaScript language and full software development life cycle,
        including requirement gathering, coding and testing; with proven track record developing business solutions using cutting edge technologies.
        Entrepreneur and engineer with experience including co-founding PiBLOC, a Cuban freelancer company. Believes in building small,
        well-tested, functional pieces making complex problems simple with expressive, maintainable code.
        Started his career as a software engineer and Web Master at the Eastern University in Cuba. Over the course of his career,
        successfully occupied a variety of roles across product and engineering -managing teams of up 12 people.
        Interested in a challenging technical environment where innovation, teamwork and curiosity is encouraged to create great products and services.
        Perpetual learner.
      </Typography>
    </Container>
  )
}

export default About;

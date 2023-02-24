import { createStyles, Container } from '@mantine/core';
import { wrap } from 'module';
import { TeamCard } from './TeamCard';
import { MediaQuery, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  inner: {
    position: 'relative',
    width: 'auto',
    paddingTop: 40,
    paddingBottom: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flex: 'auto',
  },
}));

const teamMembers = [
  {
    avatar:
      './swan.png',
    name: 'Swan Htet',
    git: 'https://github.com/swanhtethtetswan',
    linkedin: 'https://www.linkedin.com/in/swan-htet-htet-swan/',
  },
  {
    avatar: './miranda.png',
    name: 'Miranda Jaramillo',
    git: 'https://github.com/mirandajaramillo',
    linkedin: 'https://www.linkedin.com/in/miranda-jaramillo/',
  },
  {
    avatar:
      './lawrence.png',
    name: 'Lawrence Yeh',
    git: 'https://github.com/lawyeh',
    linkedin: 'https://www.linkedin.com/in/lawyeh/',
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/96557317?v=4',
    name: 'Jin Yoo',
    git: 'https://github.com/iyoojin',
    linkedin: 'https://www.linkedin.com/in/iyoojin/',
  },
];
console.log('HAN SOLO', teamMembers);
export function TeamContainer() {
  const { classes } = useStyles();
  // BUILD A TEAMCARDS that contains <TeamCard prop={}>
  const teamCardArr: any = [];
  for (let i = 0; i < teamMembers.length; i++) {
    teamCardArr.push(<TeamCard key={i} person={teamMembers[i]} />);
  }

  return (
    <div className={classes.wrapper}>
      <MediaQuery
        query='(max-width: 800px) and (min-width: 200px)'
        styles={{
          position: 'relative',
          width: 'auto',
          paddingTop: 40,
          paddingBottom: 10,
          display: 'flex',
          justifyContent: 'space-between',
          flex: 'auto',
          flexWrap: 'wrap',
        }}
      >
        <Container className={classes.inner}>{teamCardArr}</Container>
      </MediaQuery>
    </div>
  );
}

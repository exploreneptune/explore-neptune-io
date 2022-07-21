import { createStyles, Container } from '@mantine/core';
import { TeamCard } from './TeamCard';

const useStyles = createStyles((theme) => ({
  wrapper: {
    // position: 'relative',
    boxSizing: 'border-box',
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  inner: {
    // position: 'relative',
    paddingTop: 40,
    paddingBottom: 10,
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const teamMembers = [
  {
    avatar:
      'https://media-exp2.licdn.com/dms/image/C5603AQExE3499MuoyQ/profile-displayphoto-shrink_200_200/0/1652498346839?e=1663804800&v=beta&t=IUrcL_sh30MQVq80srMHHXSxShH4CgmN7bnS9Nbuh98',
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
      'https://media-exp2.licdn.com/dms/image/C5603AQEqdd8CSDonCg/profile-displayphoto-shrink_200_200/0/1633587402187?e=1663804800&v=beta&t=27nUXVfZ2-Zx6PLr9SYyZHslpif-0LPG7B-Ym_skVdU',
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
      <Container className={classes.inner}>{teamCardArr}</Container>
    </div>
  );
}

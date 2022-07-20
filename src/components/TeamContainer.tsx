import React from 'react';
import { createStyles, Container, Text, Button, Group, useMantineTheme } from '@mantine/core';
import { TeamCard } from './TeamCard'

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
  wrapper: {
    // position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
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
    avatar: '',
    name: 'Swan Htet',
    git: 'https://github.com/swanhtethtetswan',
    linkedin: 'https://www.linkedin.com/in/swan-htet-htet-swan/'
  },
  {
    avatar: '',
    name: 'Miranda Jaramillo',
    git: 'https://github.com/mirandajaramillo',
    linkedin: 'https://www.linkedin.com/in/miranda-jaramillo/'
  },
  {
    avatar: '',
    name: 'Lawrence Yeh',
    git: 'https://github.com/lawyeh',
    linkedin: 'https://www.linkedin.com/in/lawyeh/'
  },
  {
    avatar: 'https://media-exp2.licdn.com/dms/image/C4D03AQHNrZQBgLBAIQ/profile-displayphoto-shrink_200_200/0/1594954254076?e=1663804800&v=beta&t=H3loaQ3vTGsnNaBnPUZ0rPyYcv8O-65r1vd-5kbNdNo',
    name: 'Jin Yoo',
    git: 'https://github.com/iyoojin',
    linkedin: 'https://www.linkedin.com/in/iyoojin/'
  },
]

export function TeamContainer() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  // BUILD A TEAMCARDS that contains <TeamCard prop={}>
  const teamCardArr:any = [];
  for (let i = 0; i < teamMembers.length; i++){
    teamCardArr.push(<TeamCard key={i} person={teamMembers[i]}/>)
  };

  return (
    <div className={classes.wrapper}>
      <Container className={classes.inner} >
          {teamCardArr}
      </Container>
    </div>
  );
}

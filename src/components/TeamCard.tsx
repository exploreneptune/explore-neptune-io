import React from 'react';
import { createStyles, Card, Avatar, Text, Button } from '@mantine/core';
import { BrandGithub, BrandLinkedin } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `2px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
    }`,
  },
}));

// type and state
// interface UserCardImageProps {
//   image: string;
//   avatar: string;
//   name: string;
//   job: string;
//   stats: { label: string; value: string }[];
// }

export function TeamCard(props: any) {
  const { classes, theme } = useStyles();

  // const items = stats.map((stat) => (
  //   <div key={stat.label}>
  //     <Text align='center' size='lg' weight={500}>
  //       {stat.value}
  //     </Text>
  //     <Text align='center' size='sm' color='dimmed'>
  //       {stat.label}
  //     </Text>
  //   </div>
  // ));
  return (
    <Card
      p='xl'
      radius='md'
      className={classes.card}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 350,
        height: 450,
        backgroundColor: '#FFFFFF',
      }}
    >
      <Avatar
        src={props.person.avatar}
        size={100}
        radius={100}
        mx='auto'
        mt={-30}
        // className={classes.avatar}
      />
      <Text align='center' size='lg' weight={500} mt='sm'>
        {props.person.name}
      </Text>
      <Text align='center' size='sm' color='dimmed'>
        Software Engineer
      </Text>
      <Button
        fullWidth
        radius='md'
        mt='xl'
        size='md'
        leftIcon={<BrandGithub size={22} />}
        color={theme.colorScheme === 'dark' ? undefined : 'dark'}
        onClick={(e) => (window.location.href = `${props.person.git}`)}
      >
        Github
      </Button>
      <Button
        fullWidth
        radius='md'
        mt='xl'
        size='md'
        leftIcon={<BrandLinkedin size={22} />}
        color='#0072b1'
        onClick={(e) => (window.location.href = `${props.person.linkedin}`)}
      >
        LinkedIn
      </Button>
    </Card>
  );
}

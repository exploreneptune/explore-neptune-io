import React from 'react';
import { createStyles, Card, Avatar, Text, Group, Button } from '@mantine/core';
import { BrandTwitter } from 'tabler-icons-react';

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
const image =
  'https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png';
export function TeamCard() {
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
      withBorder
      p='xl'
      radius='md'
      className={classes.card}
      sx={{ display: 'flex', flexDirection: 'column', width: 350 }}
    >
      <Avatar
        // src={avatar}
        size={100}
        radius={100}
        mx='auto'
        mt={-30}
        // className={classes.avatar}
      />
      <Text align='center' size='lg' weight={500} mt='sm'>
        Swan Htet
      </Text>
      <Text align='center' size='sm' color='dimmed'>
        Software Engineer
      </Text>
      <Button
        component='a'
        target='_blank'
        rel='noopener noreferrer'
        href='https://twitter.com/mantinedev'
        leftIcon={<BrandTwitter size={18} />}
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 42,
            width: 300,
            paddingLeft: 20,
            paddingRight: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      >
        Follow on Twitter
      </Button>
      <Button
        fullWidth
        radius='md'
        mt='xl'
        size='md'
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 42,
            width: 200,
            paddingLeft: 20,
            paddingRight: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acee', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      >
        Test
      </Button>
      <Button
        fullWidth
        radius='md'
        mt='xl'
        size='md'
        color={theme.colorScheme === 'dark' ? undefined : 'dark'}
      >
        Github
      </Button>
      <Button
        fullWidth
        radius='md'
        mt='xl'
        size='md'
        color={theme.colorScheme === 'dark' ? undefined : 'dark'}
      >
        LinkedIn
      </Button>
    </Card>
  );
}

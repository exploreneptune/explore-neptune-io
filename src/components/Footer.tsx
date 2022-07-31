import React from 'react';
import { createStyles, Container, Group, ActionIcon } from '@mantine/core';
import { BrandGithub, Compass } from 'tabler-icons-react';
import neptune_blue from './neptune_blue_no_name.png';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <img src={neptune_blue} alt='' height='50' />
        <p>© 2022 Neptune | MIT License</p>
        <Group spacing={0} className={classes.links} position='right' noWrap>
          <ActionIcon size='lg'>
            <BrandGithub
              size={18}
              onClick={(e) =>
                (window.location.href =
                  'https://github.com/oslabs-beta/Neptune')
              }
            />
          </ActionIcon>
          <ActionIcon size='lg'>
            <Compass
              size={18}
              onClick={(e) => (window.location.href = 'https://kubernetes.io/')}
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
//https://kubernetes.io/

import React from 'react';
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from '@mantine/core';
import { Check } from 'tabler-icons-react';
import image from '../neptune_kube_ilustration.png';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 1,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export default function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Introducing <span className={classes.highlight}>Neptune</span>
            </Title>
            <Text color='dimmed' mt='md'>
              Lightweight, simple, and powerful visualization dashboard for your
              Kubernetes cluster
            </Text>

            <List
              mt={30}
              spacing='sm'
              size='sm'
              icon={
                <ThemeIcon size={20} radius='xl'>
                  <Check size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Free and open source</b> – Just simply clone our github repo
                to get started
              </List.Item>
              <List.Item>
                <b>Port-forward Prometheus</b> – Run the following in your
                terminal, kubectl port-forward -n {`<`}namespace{`>`} svc
                {`<`}service name{`>`} 9090
              </List.Item>
              <List.Item>
                <b>Run Neptune</b> – With 3 simple commands npm install, build,
                and start
              </List.Item>
            </List>

            <Group mt={30}>
              <Button
                radius='xl'
                size='md'
                className={classes.control}
                onClick={(e) =>
                  (window.location.href =
                    'https://github.com/oslabs-beta/Neptune')
                }
              >
                Get started
              </Button>
              {/* <Button
                variant='default'
                radius='xl'
                size='md'
                className={classes.control}
              >
                Source code
              </Button> */}
            </Group>
          </div>
          <Image src={image} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}

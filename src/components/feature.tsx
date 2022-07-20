import React from 'react';
import {
  createStyles,
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  Col,
} from '@mantine/core';
import { ActivityHeartbeat, AlertOctagon, ChartBar } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 36,
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: ChartBar,
    title: 'Metrics that matter',
    description:
      'Rather than being overloaded with countless metrics, focus on the ones that matter.  We highlighted prominent data points related to CPU, Memory, and Network Usage',
  },
  {
    icon: ActivityHeartbeat,
    title: 'Cluster Health',
    description:
      'Quick and simplified overview of your cluster health and performance',
  },
  {
    icon: AlertOctagon,
    title: 'Alerts and Event Logs',
    description:
      'Sort through your firing alerts by severity to stay on top of your alerts',
  },
];

export function FeaturesTitle() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius='md'
        variant='gradient'
        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
      >
        <feature.icon size={26} />
      </ThemeIcon>
      <Text size='lg' mt='sm' weight={500}>
        {feature.title}
      </Text>
      <Text color='dimmed' size='sm'>
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} md={5}>
          <Title className={classes.title} order={2}>
            Arm your Kubernetes cluster with a sleek monitoring tool
          </Title>
          <Text color='dimmed'>
            Render the metrics of your nodes, pods, and namespaces all in one
            easy to visualize UI. Focus on what matters, with built in alerts
            and health monitoring.
          </Text>

          <Button
            variant='gradient'
            gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            size='lg'
            radius='md'
            mt='xl'
            onClick={(e) =>
              (window.location.href = 'https://github.com/oslabs-beta/Neptune')
            }
          >
            Source Code
          </Button>
        </Col>
        <Col span={12} md={7}>
          <SimpleGrid
            cols={2}
            spacing={30}
            breakpoints={[{ maxWidth: 'md', cols: 1 }]}
          >
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
}

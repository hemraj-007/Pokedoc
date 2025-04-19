import Link from 'next/link';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Container,
  Typography,
  Button,
} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CollectionsIcon from '@mui/icons-material/Collections';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Grid from '@mui/material/Grid';


const sections = [
  {
    title: 'Part 1: Single Pokémon Lookup',
    description:
      'Search for a single Pokémon by name and view its details (id, types, sprite).',
    href: '/part1',
    icon: <AutoStoriesIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Part 2: Batch Pokémon Lookup',
    description:
      'Enter a comma‑separated list of names to fetch multiple Pokémon at once.',
    href: '/part2',
    icon: <CollectionsIcon fontSize="large" color="secondary" />,
  },
  {
    title: 'Part 3: Filter by Type',
    description:
      'Select a Pokémon type to filter the entire Pokedex by that type.',
    href: '/part3',
    icon: <FilterAltIcon fontSize="large" sx={{ color: 'success.main' }} />,
  },
];

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          🐞 Pokedex Project
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Built with TypeScript, Next.js, Prisma, tRPC & Material UI
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {sections.map(({ title, description, href, icon }, idx) => (
          <Grid
            key={href}
            item
            xs={12}
            sm={6}
            md={4}
            // center only the 3rd card
            sx={idx === 2 ? { mx: 'auto' } : undefined}
          >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.03)' },
              }}
              elevation={4}
            >
              <CardActionArea
                component={Link}
                href={href}
                sx={{ flexGrow: 1, p: 3, textAlign: 'center' }}
              >
                <Box sx={{ mb: 2 }}>{icon}</Box>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
                <Button component={Link} href={href} size="small" variant="outlined">
                  Go
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

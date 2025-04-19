// app/page.tsx  (or pages/part1.tsx if using Pages Router)

import Link from 'next/link';
import {
  Container,
  Box,
  IconButton,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { PokemonSearch } from '../components/PokemonSearch';

export default function Part1() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* BACK BUTTON + TITLE */}
      <Box display="flex" alignItems="center" mb={3}>
        <IconButton
          component={Link}
          href="/"
          aria-label="Go back"
          sx={{ mr: 1 }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" component="h1">
          Part 1: Pokémon Search
        </Typography>
      </Box>

      {/* WRAP FORM IN A CARD */}
      <Card elevation={2}>
        <CardContent>
          <PokemonSearch />
        </CardContent>
      </Card>
    </Container>
  );
}

// app/pages/part2.tsx (or app/part2/page.tsx for the App router)

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
import { PokedexSearch } from '../components/PokedexSearch';

export default function Part2() {
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
          Part 2: Batch Pokémon Lookup
        </Typography>
      </Box>

      {/* WRAP BATCH FORM IN A CARD */}
      <Card elevation={2}>
        <CardContent>
          <PokedexSearch />
        </CardContent>
      </Card>
    </Container>
  );
}

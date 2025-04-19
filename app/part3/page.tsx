// app/part3/page.tsx  (or pages/part3.tsx)

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
import { FilterablePokedexTable } from '../components/FilterablePokedexTable';

export default function Part3() {
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
          Part 3: Filterable Pokedex
        </Typography>
      </Box>

      {/* WRAP FILTER TABLE IN A CARD */}
      <Card elevation={2}>
        <CardContent>
          <FilterablePokedexTable />
        </CardContent>
      </Card>
    </Container>
  );
}

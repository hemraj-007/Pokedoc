'use client';

import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { trpc } from '../trpc-provider';
import { PokedexTable } from './PokedexTable';

export const PokedexSearch: React.FC = () => {
  const [input, setInput] = useState('');
  const [names, setNames] = useState<string[]>([]);

  const { data: pokemons, isLoading, error } =
    trpc.pokemon.getByNames.useQuery(names, {
      enabled: names.length > 0,
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const arr = input
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    setNames(arr);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Batch Pokémon Lookup
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
        <TextField
          fullWidth
          label="Pokémon names (comma‑separated)"
          placeholder="e.g. Bulbasaur, Charmander, Squirtle"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Box sx={{ mt: 2, textAlign: 'right' }}>
          <Button type="submit" variant="contained">
            Fetch!
          </Button>
        </Box>
      </Box>

      {isLoading && <Typography>Loading…</Typography>}
      {error && (
        <Typography color="error">Error fetching data</Typography>
      )}

      {pokemons && pokemons.length > 0 && (
        <PokedexTable pokemons={pokemons} />
      )}
    </Box>
  );
};

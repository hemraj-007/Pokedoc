'use client';

import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { trpc } from '../utils/trpc';
import { PokemonRow } from './PokemonRow';


export const PokemonSearch = () => {
  const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data: pokemon, isLoading, error } = trpc.pokemon.getByName.useQuery(searchTerm, {
    enabled: !!searchTerm,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(search);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Pokemon Search</Typography>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            label="Pokemon Name"          
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="outlined"
            style={{color: 'white'}}
          />
          <Button type="submit" variant="contained">Search</Button>
        </Box>
      </Box>

      {isLoading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">Error: Pokemon not found</Typography>}
      {pokemon && <PokemonRow pokemon={pokemon} />}
    </Box>
  );
};
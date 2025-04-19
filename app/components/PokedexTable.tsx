'use client';

import React from 'react';
import { Box } from '@mui/material';
import { PokemonRow, Pokemon } from './PokemonRow';

interface PokedexTableProps {
  pokemons: Pokemon[];
}

export const PokedexTable: React.FC<PokedexTableProps> = ({ pokemons }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    {pokemons.map((p) => (
      <PokemonRow key={p.id} pokemon={p} />
    ))}
  </Box>
);

'use client';

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { trpc } from '../trpc-provider';
import { PokemonTypeSelection } from './PokemonTypeSelection';
import { PokedexTable } from './PokedexTable';

export const FilterablePokedexTable: React.FC = () => {
  const [type, setType] = useState<string | undefined>(undefined);

  // fetch list of all types
  const { data: types = [], isLoading: typesLoading } =
    trpc.pokemon.getTypes.useQuery();

  // fetch pokémons for the selected type (or all if none)
  const {
    data: pokemons = [],
    isLoading: pokesLoading,
    error,
  } = type
    ? trpc.pokemon.getByType.useQuery(type)
    : trpc.pokemon.getAll.useQuery();

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Filterable Pokedex
      </Typography>

      {/* Type dropdown */}
      {!typesLoading && (
        <PokemonTypeSelection
          selectedType={type}
          selectType={setType}
          types={types}
        />
      )}

      {/* Loading / error */}
      {pokesLoading && <Typography>Loading Pokémon…</Typography>}
      {error && (
        <Typography color="error">
          Error fetching Pokémon by type.
        </Typography>
      )}

      {/* Table of cards */}
      {!pokesLoading && pokemons.length > 0 && (
        <PokedexTable pokemons={pokemons} />
      )}
    </Box>
  );
};

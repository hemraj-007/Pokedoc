// app/components/PokemonTypeSelection.tsx
'use client';

import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

export type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
  types: string[]; // pass in the list of all types
};

export const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({
  selectedType,
  selectType,
  types,
}) => {
  const handleChange = (e: SelectChangeEvent<string>) => {
    const t = e.target.value;
    selectType(t === '' ? undefined : t);
  };

  return (
    <FormControl fullWidth sx={{ mb: 3 }}>
      <InputLabel id="type-select-label">Filter by Type</InputLabel>
      <Select
        labelId="type-select-label"
        value={selectedType ?? ''}
        label="Filter by Type"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>All Types</em>
        </MenuItem>
        {types.map((t) => (
          <MenuItem key={t} value={t}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

import { Box, Chip, Typography, Card, CardContent, CardMedia } from '@mui/material';

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

interface PokemonRowProps {
  pokemon: Pokemon;
}

export const PokemonRow = ({ pokemon }: PokemonRowProps) => {
  return (
    <Card sx={{ display: 'flex', mb: 2, alignItems: 'center', p: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 96, height: 96, objectFit: 'contain' }}
        image={pokemon.sprite}
        alt={pokemon.name}
      />
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6">{pokemon.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            #{pokemon.id}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
          {pokemon.types.map((type) => (
            <Chip key={type} label={type} size="small" />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
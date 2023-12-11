import { useTheme } from '@mui/material/styles';

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <img
      src="/assets/logos/logo-vectis.png"
      alt="Logo"
      style={{
        width: 'auto',
        height: 'auto',
        objectFit: 'contain',
      }}
    />
  );
};

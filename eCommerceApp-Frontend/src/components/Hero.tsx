import { Box, Typography } from '@mui/material';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import herobg from '../assets/hero-bg.jpg';
import { titleStyle } from '../styles/Theme';

export default function Hero() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5)), url(${herobg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <style>{titleStyle}</style>
      <Typography
        fontFamily="Bungee Regular"
        fontSize="70px"
        maxWidth="800px"
        color="#fff"
        textAlign="center"
      >
        Find the equipment that performs the best
      </Typography>
      <HeadphonesIcon sx={{ color: 'white', opacity: 0.7, fontSize: 300 }} />
    </Box>
  );
}

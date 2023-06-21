import { createTheme } from '@mui/material';
import bungee from '../fonts/Bungee-Regular.ttf';

const theme = createTheme({
  palette: {
    primary: {
      main: '#670189',
    },
    secondary: {
      main: '#fccef1',
    },
  },
});
export const titleStyle = `
        @font-face {
            font-family: 'Bungee Regular';
            src: url(${bungee}) format('truetype');
            font-weight: normal;
            font-style: normal;
        }
    `;
export default theme;

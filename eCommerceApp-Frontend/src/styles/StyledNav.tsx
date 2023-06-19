import { Toolbar, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: '#fff',
});

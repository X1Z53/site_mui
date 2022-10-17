import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Main from './components/Main';
import Collection from './components/Collection';
import TrumBlacklist from './components/TrumBlacklist';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Header />
    <Container>
      <Router>
	<Routes>
	  <Route path='/' element={<Main />} />
	  <Route path='/collection' element={<Collection />} />
	  <Route path='/trum_blacklist' element={<TrumBlacklist />} />
        </Routes>
      </Router>
    </Container>
  </ThemeProvider>
);

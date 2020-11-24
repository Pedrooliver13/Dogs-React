import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../Styles/GlobalStyle';

import Page404 from './Page404';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Home/Home';
import Colors from '../Styles/Colors';

const Router = () => {
  return (
    <ThemeProvider theme={Colors} >
      <GlobalStyle />
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;

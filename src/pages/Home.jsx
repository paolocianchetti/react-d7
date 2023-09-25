import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MyNav from '../components/navbar/MyNav';
import Welcome from '../components/welcome/Welcome';
import LatestRelease from '../components/latestRelease/LatestRelease';
import MyFooter from '../components/footer/MyFooter';
import { navLinks } from '../data/navLinks';
//import InputContext from '../contexts/InputContext';
//import useFetchBooks from '../hooks/useFetchBooks';

//const API_URL = 'https://epibooks.onrender.com';

const Home = () => {
  //const { books } = useFetchBooks(API_URL);

  return (
    <>
      {/* <InputContext> */}
      <Provider store={store}>
        <MyNav links={navLinks} />
        <Welcome />
        <LatestRelease />
        <MyFooter />
      </Provider>
        {/* <LatestRelease fantasyBooks={books} /> */}
      {/* </InputContext> */}
    </>
  );
}

export default Home;


import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MyNav from '../components/navbar/MyNav';
import Welcome from '../components/welcome/Welcome';
import LatestRelease from '../components/latestRelease/LatestRelease';
import MyFooter from '../components/footer/MyFooter';
import { navLinks } from '../data/navLinks';
import InputContext from '../contexts/InputContext';

const Home = () => {
  return (
    <>
      <Provider store={store}>
        <InputContext>
          <MyNav links={navLinks} />
          <Welcome />
          <LatestRelease />
          <MyFooter />
        </InputContext>
      </Provider>
    </>
  );
}

export default Home;


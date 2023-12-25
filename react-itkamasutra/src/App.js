import './App.css';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import HeaderContainer from './components/Header/HeaderContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import { Settings } from './components/Settings/Settings';
import { PreLoader } from './components/common/PreLoader/PreLoader';
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

function App({ initializeApp, initialized }) {
  initializeApp();
  if (!initialized) { return <PreLoader /> }
  return (
    <div className='app'>
      <HeaderContainer />
      <NavBar />
      <main className='main'>
        <Suspense fallback={<PreLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/messages/*" element={<MessagesContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

function mapStateToProps(state) { return { initialized: state.appReducer.initialized }; }
export default connect(mapStateToProps, { initializeApp })(App);
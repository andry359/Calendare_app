import React, { FC, useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { Layout } from 'antd';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

const App: FC = () => {

  const {setIsAuth, setUser} = useActions();

  useEffect(() => {
    if(localStorage.getItem("auth")) {
      setIsAuth(true);
      setUser({username: localStorage.getItem("username")} as IUser)
    }
  }, [])

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  )
};

export default App;

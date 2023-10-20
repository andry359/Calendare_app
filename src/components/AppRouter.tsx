import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RouteNames, privateRoutes, publicRoutes } from '../router';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';

const AppRouter: FC = () => {

    const {isAuth} = useTypedSelector(state => state.auth);

    return (
        isAuth
            ? 
            <Routes>
                {privateRoutes.map(route => 
                    <Route 
                    element={<route.element />} 
                    path={route.path} 
                    key={route.path}/>
                )}
                <Route path="*" element={<Navigate to={RouteNames.EVENT} />}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => 
                    <Route 
                    element={<route.element />} 
                    path={route.path} 
                    key={route.path}/>
                )}
                <Route path="*" element={<Navigate to={RouteNames.LOGIN} />}/>
            </Routes>
    );
};

export default AppRouter;
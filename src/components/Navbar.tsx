import { Layout, Menu, Row } from 'antd';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const Navbar: FC = () => {

    const navigate = useNavigate();
    const {isAuth, user} = useTypedSelector(state => state.auth);
    const {logout} = useActions();

  return (
    <Layout.Header>
        <Row justify={"end"}>
            {isAuth
                ?
                <>
                    <div style={{color: "white"}}>{user.username}</div>
                    <Menu 
                        theme="dark"
                        mode="horizontal"
                        selectable={false}
                    >
                        <Menu.Item onClick={logout} key={1}>
                            Выйти
                        </Menu.Item>
                    </Menu>
                </>
                :
                <Menu 
                    theme="dark"
                    selectable={false}
                >
                    <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={1}>
                        Login
                    </Menu.Item>
                </Menu>
            }
        </Row>
    </Layout.Header>
  )
};

export default Navbar;
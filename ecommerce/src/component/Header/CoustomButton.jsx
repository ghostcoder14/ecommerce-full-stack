import React, { useState, useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/system';
import Login from '../Login/Login';
import { DataContext } from '../../Context/DataProvider';
import Profile from './Profile';

const Wrapper = styled(Box)`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: auto;
    & > * {
        margin-right: 20px;
        font-size: 14px;
    }
`;

const Container = styled(Box)`
    display: flex;
    align-items: center;
`;

const LoginButton = styled(Button)`
    color: black;
    background-color: #fff;
    text-transform: none;
    padding: 5px 20px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;

    &:hover {
        background-color: #2874f0;
        color: white;
    }
`;

function CoustomButton() {
    const [open, setOpen] = useState(false);
    const { account } = useContext(DataContext);

    const openDialog = () => {
        setOpen(true);
    };

    return (
        <Wrapper>
            {account ? (
                <Profile account = {account}/>
            ) : (
                <LoginButton variant="contained" onClick={openDialog}>
                    Login
                </LoginButton>
            )}
            <Typography
                style={{
                    color: 'black',
                    fontWeight: 700,
                    fontSize: 15,
                    marginTop: '5px',
                }}
            >
                Become a Seller
            </Typography>
            <Typography
                style={{
                    color: 'black',
                    fontWeight: 700,
                    fontSize: 15,
                    marginTop: '5px',
                }}
            >
                More
            </Typography>
            <Container>
                <ShoppingCartIcon style={{ color: 'black', marginBottom: 0 }} />
                <Typography
                    style={{
                        color: 'black',
                        fontWeight: 600,
                    }}
                >
                    Cart
                </Typography>
            </Container>
            <Login open={open} setOpen={setOpen} />
        </Wrapper>
    );
}

export default CoustomButton;

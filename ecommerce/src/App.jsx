
import React from 'react';
import { Box } from '@mui/material';
import DataProvider from './Context/DataProvider';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import './App.css';

function App() {
    return (
        <DataProvider>
            <Header />
            <Box style={{ marginTop: '54px' }}>
                <Home />
            </Box>
        </DataProvider>
    );
}

export default App;

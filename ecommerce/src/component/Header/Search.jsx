import React from 'react';
import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
  background-color: #e8efff;
  width: 38%;
  border-radius: 5px;
  margin-left: 15px;
  display: flex;
  
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
 
  color: grey;
`;

const SearchIcons = styled(Box)`
  color: blue;
  padding: 2px;
  display: flex;
  align-items: center;
`;

function Search() {
  return (
    <SearchContainer>
      <InputSearchBase
        placeholder='Search for products, brands and more'
      />
      <SearchIcons>
        <SearchIcon  />
      </SearchIcons>
    </SearchContainer>
  );
}

export default Search;

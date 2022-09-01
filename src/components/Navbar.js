import { Stack } from "@mui/system";
import React from "react";
import { logo } from "../utils/constants";
import {Link} from 'react-router-dom'
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        top: "0",
        background: "#000",
        justifyContent: "space-between",
      }}
    >
    
    <Link to='/' sx={{display:"flex",alignItems:'center'}}>
      <img src={logo} alt="youtubeLogo" height={45}/>
    </Link>
    <SearchBar/>
    </Stack>
  );
};

export default Navbar;

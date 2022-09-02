import React, { useState } from "react";
import { Paper , IconButton } from "@mui/material";
import { Search} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate()
  const handelSubmit = (e)=>{
    e.preventDefault()

    if(searchTerm){

      navigate(`/search/${searchTerm}`)
      setSearchTerm(" ")
    }
  }
  return (
    <Paper
      component="form"
      onSubmit={handelSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 4,
        mr: { sm: 5 },
        boxShadow: "none",
      }}
    >
      <input
        placeholder="Search...."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
      />
      <IconButton type="submit" sx={{p:{xs:"5px 9px" ,sm:"7px 10px"} ,color:"red"}}>
        <Search/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

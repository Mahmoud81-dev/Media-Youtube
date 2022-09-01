import { Box } from "@mui/system";
import { Route, Routes } from "react-router-dom";

import {Navbar , Feed , VideoDetail , ChannelDetail , SearchFeed} from "./components";
import Footer from "./components/Footer";


function App() {
  return (
    <Box sx={{backgroundColor:"#000"}}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;

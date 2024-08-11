import { Button} from "@mui/material";
import React from "react";
import { useNavigate } from 'react-router-dom';


function Home(){

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear()
        navigate('/');
      };

    return (
        <>
        <h1>Home Page</h1>
        <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </>
    )
}
export default Home;
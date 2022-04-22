import React from 'react';
import './Navbar.scss'
import HomeIcon from "@mui/icons-material/Home";
import GradeIcon from "@mui/icons-material/Grade";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
      <div className="navbar">
        <div className="navbar__content">
          {location.pathname === "/" ? (
            <HomeIcon
              style={{ cursor: "pointer" }}
              fontSize="large"
              color="primary"
            />
          ) : (
            <HomeIcon
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
              fontSize="large"
            />
          )}

          <div className="navbar-content__actions">
            {location.pathname === "/favorites" ? (
              <GradeIcon
                style={{ cursor: "pointer" }}
                fontSize="large"
                color="primary"
              />
            ) : (
              <GradeIcon
                style={{ cursor: "pointer" }}
                fontSize="large"
                onClick={() => navigate("/favorites")}
              />
            )}
            {location.pathname === "/create-book" ? (
              <AddBoxIcon
                style={{ cursor: "pointer" }}
                fontSize="large"
                color="primary"
              />
            ) : (
              <AddBoxIcon
                style={{ cursor: "pointer" }}
                fontSize="large"
                onClick={() => navigate("/create-book")}
              />
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;
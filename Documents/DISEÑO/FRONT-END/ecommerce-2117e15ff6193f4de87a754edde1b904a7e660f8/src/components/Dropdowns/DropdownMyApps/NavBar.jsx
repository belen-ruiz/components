import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { NavLink } from "react-router-dom";
import { ShopOutlined, ShoppingBag } from "@mui/icons-material";

export const NavBar = () => {
    return (
        <NavBarStyled>
            <ul>
                <NavLink
                    to="/mi-cuenta"
                    className={({ isActive }) =>
                        isActive ? "page page-active" : " page"
                    }
                >
                    <li>
                        <AccountCircleIcon /> Mi Cuenta
                    </li>
                </NavLink>
                <NavLink to="/e-commerce">
                    <li>
                        <ShoppingBag /> E-commerce
                    </li>
                </NavLink>

                <NavLink to="/lookbook">
                <li>
                    <StarIcon /> WishList
                </li>
                </NavLink>

                <NavLink to="/fav">
                <li>
                    <FavoriteIcon /> Favoritos
                </li>
                </NavLink>

                <NavLink to="/APIs">
                <li>
                    <FavoriteIcon /> API's
                </li>
                </NavLink>

                <NavLink to="/song-search">
                <li>
                    <FavoriteIcon /> SongSearch
                </li>
                </NavLink>

                <NavLink to="/topics">
                <li>
                    <FavoriteIcon /> Topics
                </li>
                </NavLink>
                
                <li>
                    <ReceiptIcon /> Promociones
                </li>
                <li>
                    <LoyaltyIcon /> Mis Cupones
                </li>
                <li>
                    <LocalMallIcon /> Mis Compras
                </li>
            </ul>
        </NavBarStyled>
    );
};

const NavBarStyled = styled.nav`
    display: flex;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-top: 2px solid whitesmoke;
    border-bottom: 2px solid whitesmoke;

    ul {
        li {
            margin-bottom: 1rem;
            list-style: none;
        }
    }
`;


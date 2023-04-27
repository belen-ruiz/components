import styled from "styled-components/macro";
import { useState } from "react";
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const DestacadosItem = ({ item }) => {
    const [heartIcon, setHeartIcon] = useState(false);

    const handleClick = () => {
        setHeartIcon(!heartIcon);
    };
    return (
        <DestacadosItemContainer>
            <Image src={item.img} alt={item.title} />
            <Icons>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon onClick={handleClick}>
                    {heartIcon ? <FavoriteIcon /> : <FavoriteBorderOutlined />}
                </Icon>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
            </Icons>
        </DestacadosItemContainer>
    );
};

const Icons = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    opacity: 0;
`;

const DestacadosItemContainer = styled.div`
    width: 40%;
    position: relative;

    &:hover ${Icons} {
        opacity: 1;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Icon = styled.div`
    background-color: white;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    cursor: pointer;
`;

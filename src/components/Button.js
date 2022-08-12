import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {AddShoppingCart, CameraAlt, Crop, LightModeOutlined, ModeEditOutline}  from '@mui/icons-material';
import { themes } from "../Themes";

function Button({size, variant, color, disabled, startIcon, endIcon, disableShadow, autoFocus}) {
    const [icon, setIcon] = useState(AddShoppingCart);
    let CustomTag = icon;
    useEffect(() => {
        switch (startIcon || endIcon) {
            case "local_grocery_store":
                setIcon(AddShoppingCart); 
                break;
            case "camera":
                setIcon(CameraAlt);
                break;
            case "crop":
                setIcon(Crop);
                break;
            case "light_mode":
                setIcon(LightModeOutlined);
                break;
            case "edit":
                setIcon(ModeEditOutline);
                break;
            default: 
                return;
        }
    
    }, [startIcon, endIcon]);
  return (
    <ButtonItem size={size} autoFocus variant={variant} color={color} disabled startIcon={startIcon} endIcon={endIcon} disableShadow={disableShadow} >
        <p> Default </p>
        {(startIcon || endIcon) && <CustomTag sx={{height: "14px"}}/>}
    </ButtonItem>
  )
}

export default Button;

const ButtonItem = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    font-size: 14px;
    background-color: ${({variant, color}) => (
    (variant === "outline" && themes.variants.outline.background) ||
    (variant === "text" && themes.variants.text.background) ||
    (color === "primary" && themes.backgrounds.primary) ||
    (color === "secondary" && themes.backgrounds.secondary) ||
    (color === "danger" && themes.backgrounds.danger) ||
    (themes.backgrounds.default)
  )};
  padding: ${({size}) => (
    (size === "sm" && themes.sizes.sm) ||
    (size === "md" && themes.sizes.md) ||
    (size === "lg" && themes.sizes.lg) ||
    (themes.sizes.md)
  )};
  color: ${({variant, color, disabled}) => (
    (disabled && themes.colors.disabled) ||
    (variant && themes.colors.variant) ||
    ((color === "primary" || color === "secondary" || color === "danger") && themes.colors.white) ||
    (themes.colors.default)
  )};
  font-weight: 500;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  box-shadow: ${({disableShadow, variant}) =>  
    disableShadow || variant ? "" : "0px 2px 3px rgba(0, 49, 202, 0.2)"
  };
  border: ${({variant}) =>  variant === "outline" ? themes.variants.outline.border :"none" };
  flex-direction: ${({startIcon}) => startIcon ? "row-reverse" : "row"};

  :hover, :focus{
    background-color: ${({variant, color}) => (
    (variant === "outline" && themes.variants.outline.bgHover) ||
    (variant === "text" && themes.variants.text.bgHover) ||
    (color === "primary" && themes.backgrounds.primaryHover) ||
    (color === "secondary" && themes.backgrounds.secondaryHover) ||
    (color === "danger" && themes.backgrounds.dangerHover) ||
    (themes.backgrounds.defaultHover)
  )};
  }
  p {
    font-size: 14px;
  }


`;

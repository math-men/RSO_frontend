export const darkGray = '#818A91';
export const lightGray = '#DDDDDD';
export const alligatorGreen = '#6A973A';
export const writerBlack = '#373A3C';
export const leadingBlue = '#1C7CD5';
export const whitestWhite = '#FFFFFF';
export const smartestBeige = '#ECEEEF';
export const errorRed = '#f40017';

export const transparentize = (hex, opacity) => {
    hex = hex.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
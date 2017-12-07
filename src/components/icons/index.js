/* eslint-disable max-len */
import React from 'react';

export const Logo = ({ size, disabled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 200"
    width={size}
    height={size / 3}
    opacity={disabled ? '0.5' : '1'}
  >
    >
    <path fill="#09c" d="M0 0h600v200H0z" />
    <path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth="17px"
      d="M56.29 154.18v-52.39M53.32 45.03l65.78 61.44M183.88 46.03l-64.78 60.44M181.9 154.97v-53.18M304.19 49.48A55.11 55.11 0 0 0 288.36 57a53.9 53.9 0 0 0-15.83 16.88 55.72 55.72 0 0 0-7.44 22.26 54 54 0 0 0 2.49 23 54.42 54.42 0 0 0 36.61 35.07M334.29 154.18A54.62 54.62 0 0 0 364 132.87M364 70.8a54.6 54.6 0 0 0-5.94-7.17A54 54 0 0 0 343 52.82a54.62 54.62 0 0 0-8.69-3.34M486.2 154.97V84.16M425.71 47.59h120.97"
    />
  </svg>
);

export default Logo;

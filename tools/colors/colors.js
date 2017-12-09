/* eslint-disable no-mixed-operators, no-console, max-len */
const fs = require('fs');
const path = require('path');
const config = require('../../src/data/config.json');

/**
 * Calculates tints and shades of the color scheme.
 * Outputs three different files:
 *   1. colors.js
 *   2. colors.json
 *   3. colors.vars
 * File 1 exports an object with all the variables.
 * File 2 is in a format ready to be imported into Sketch
 * File 3 will contain CSS vars (to be pasted to the config.css file)
 *
 * @author    Jose Nunes <jnunes@dodoc.com>
 * @copyright 2017 doDOC
 */

console.time('Execution Time');

const { tints, shades, colors } = config.colors;

/**
 * Returns a shade of a color.
 *
 * @param {array} color - An array of RGB values [0 - 255]
 * @param {integer} factor - The shade factor [1 - 99]
 *
 * @return {array} - Array of RGB values
 */
const shade = (color, factor) =>
  color.map(c => Math.round(c * (1 - factor / 100)));

/**
 * Returns a tint of a color.
 *
 * @param {array} color - An array of RGB values [0 - 255]
 * @param {integer} factor - The tint factor [1 - 99]
 *
 * @return {array} - Array of RGB values
 */
const tint = (color, factor) =>
  color.map(c => Math.round(c + (255 - c) * factor / 100));

/**
 * Converts a single Red, Green or Blue value [0 - 255] to a hexadecimal base.
 *
 * @param {integer} val - Red, Green or Blue value [0 - 255]
 *
 * @return {string}
 */
const toHex = val => {
  const hex = val.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

/**
 * Converts an array of RGB values [0 - 255] to an hex string.
 *
 * @param {array} color - An array of RGB values
 *
 * @return {string} - Hexadecimal color code.
 */
const rgbToHex = color =>
  `#${toHex(color[0])}${toHex(color[1])}${toHex(color[2])}`;

/**
 * Converts an hex string (e.g. #34FF21) to an array of RGB values [0 - 255].
 *
 * @param {string} hex - Hexadecimal color code (in the format: #34FF21)
 *
 * @return {array} - Array of RGB values. If the passed hex string is not
 * valid returns null
 */
const hexToRgb = hex => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const newHex = hex.replace(
    shorthandRegex,
    (m, r, g, b) => r + r + g + g + b + b,
  );

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(newHex);

  if (result) {
    return [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16),
    ];
  }
  return null;
};

/**
 * Makes the color object (to import in Sketch). It has the form of:
 *
 * ```JavaScript
 * {
 *   name: <string>,
 *   color: {
 *     r: <integer>,
 *     g: <integer>,
 *     b: <integer>,
 *     r: <integer>,
 *     color-hex: <string>,
 *     argb-hex: <string>,
 *     css-rgba: <string>,
 *     ui-color: <string>,
 *   },
 * }
 *
 * @param {object} col - An object that defines a particular color
 * (from the base config)
 * @param {array} colorRGB - An array with RGB values [0 - 255]
 * @param {string or null} operation - Defines the operation (can be 'tint',
 * 'shade'). If not passed, no operation will be made.
 * @param {integer} factor - An integer [1 - 99] defining the tint or shade
 * percentage (do not pass this argument if there is no operation to be made).
 *
 * @return {object} - The color object, ready to push to the colors array
 * (to import into Sketch).
 */
const makeColorObj = (col, colorRGB, operation = null, factor = null) => {
  let modColor = [];
  const colorObj = {};

  if (operation === 'shade') {
    modColor = shade(colorRGB, factor);
    colorObj.name = `${col.name}Shade${factor}`;
  } else if (operation === 'tint') {
    modColor = tint(colorRGB, factor);
    colorObj.name = `${col.name}${factor}`;
  } else {
    modColor = colorRGB;
    colorObj.name = col.name;
  }

  const hexModColor = rgbToHex(modColor).toUpperCase();

  colorObj.color = {
    r: modColor[0],
    g: modColor[1],
    b: modColor[2],
    a: 1,
    'color-hex': `${hexModColor} 100%`,
    'argb-hex': `#FF${hexModColor.substring(1)}`,
    'css-rgba': `rgba(${modColor[0]},${modColor[1]},${modColor[2]},1)`,
    'ui-color':
      `(r:${Math.round(modColor[0] * (100 / 255)) / 100} ` +
      `g:${Math.round(modColor[1] * (100 / 255)) / 100} ` +
      `b:${Math.round(modColor[2] * (100 / 255)) / 100} ` +
      'a:1.00)',
  };

  return colorObj;
};

const colorsArray = [];
const jsVarsLog = [];
const cssVarsLog = [];
let cssVarsData;
let jsVarsData;

colors.forEach(col => {
  const colorRGB = hexToRgb(col.hex);

  jsVarsLog.push(`  // Color: ${col.name}\n`);

  shades.forEach(value => {
    colorsArray.push(makeColorObj(col, colorRGB, 'shade', value));
    jsVarsData = `  ${col.name}Shade${value}: '${rgbToHex(shade(colorRGB, value))}',\n`;
    cssVarsData = `${col.name}Shade${value}: ${rgbToHex(shade(colorRGB, value))}\n`;
    jsVarsLog.push(jsVarsData);
    cssVarsLog.push(cssVarsData);
  });

  colorsArray.push(makeColorObj(col, colorRGB));
  jsVarsData = `  ${col.name}: '${col.hex}',\n`;
  cssVarsData = `${col.name}: ${col.hex}\n`;
  jsVarsLog.push(jsVarsData);
  cssVarsLog.push(cssVarsData);

  tints.forEach(value => {
    colorsArray.push(makeColorObj(col, colorRGB, 'tint', value));
    jsVarsData = `  ${col.name}${value}: '${rgbToHex(tint(colorRGB, value))}',\n`;
    cssVarsData = `${col.name}${value}: ${rgbToHex(tint(colorRGB, value))}\n`;
    jsVarsLog.push(jsVarsData);
    cssVarsLog.push(cssVarsData);
  });

  cssVarsLog.push('\n');
});

const colorsJS = path.resolve(
  __dirname,
  '..',
  '..',
  'src',
  'assets',
  'colors.js',
);
const colorsJson = path.resolve(__dirname, 'colors.json');
const colorsVars = path.resolve(__dirname, 'colors.vars');

fs.open(colorsJS, 'wx', error => {
  if (error) {
    if (error.code === 'EEXIST') {
      fs.truncate(colorsJS, 0, err => {
        if (err) throw err;
      });
    }
  }

  const file = fs.createWriteStream(colorsJS);
  file.on('error', err => {
    console.error(err);
  });
  file.write(`export default {\n${jsVarsLog.join('')}};\n`);
  file.end();
});

fs.open(colorsJson, 'wx', error => {
  if (error) {
    if (error.code === 'EEXIST') {
      fs.truncate(colorsJson, 0, err => {
        if (err) throw err;
      });
    }
  }

  const file = fs.createWriteStream(colorsJson);
  file.on('error', err => {
    console.error(err);
  });
  file.write(JSON.stringify(colorsArray));
  file.end();
});

fs.open(colorsVars, 'wx', error => {
  if (error) {
    if (error.code === 'EEXIST') {
      fs.truncate(colorsVars, 0, err => {
        if (err) throw err;
      });
    }
  }

  const file = fs.createWriteStream(colorsVars);
  file.on('error', err => {
    console.error(err);
  });
  file.write(cssVarsLog.join(''));
  file.end();
});

console.log('Tints and shades saved to /tools/colors/colors.json');
console.log('CSS variables saved to /tools/colors/colors.vars');
console.log('JS variables saved to /src/assets/colors.js');
console.timeEnd('Execution Time');

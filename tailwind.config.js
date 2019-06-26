const rippleAfter = {
  content: "\'\'",
  display: 'block',
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  pointerEvents: 'none',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%',
  transform: 'scale(10, 10)',
  opacity: 0,
  transition: 'transform .6s, opacity 0.8s',
}

const ripple = {
  position: 'relative',
  overflow: 'hidden',
  transform: 'translate3d(0, 0, 0)',
}

const rippleActiveAfter = {
  transform: 'scale(0, 0)',
  opacity: .3,
  transition: '0s',
};

module.exports = {
  theme: {
    fontSize: {
      '5xl': '6rem',
      '4xl': '3.75rem',
      '3xl': '3rem',
      '2xl': '2.125rem',
      xl: ' 1.5rem',
      lg: ' 1.25rem',
      base: ' 1rem',
      sm: ' 0.875rem',
      xs: ' 0.75rem',
      caption: '0.625rem',
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      normal: 1.45,
      relaxed: 1.75,
      loose: 2,
    },
    colors: {
      white: '#fff',
      black: '#000',
      transparent: 'transparent',
      primary: {
        "50": "#fce4ec",
        "100": "#f8bbd0",
        "200": "#f48fb1",
        "300": "#f06292",
        "400": "#ec407a",
        "500": "#e91e63",
        "600": "#d81b60",
        "700": "#c2185b",
        "800": "#ad1457",
        "900": "#880e4f",
        "a100": "#ff80ab",
        "a200": "#ff4081",
        "a400": "#f50057",
        "a700": "#c51162",
      },
      "red": {
        "50": "#ffebee",
        "100": "#ffcdd2",
        "200": "#ef9a9a",
        "300": "#e57373",
        "400": "#ef5350",
        "500": "#f44336",
        "600": "#e53935",
        "700": "#d32f2f",
        "800": "#c62828",
        "900": "#b71c1c",
        "a100": "#ff8a80",
        "a200": "#ff5252",
        "a400": "#ff1744",
        "a700": "#d50000",
      },

      "pink": {
        "50": "#fce4ec",
        "100": "#f8bbd0",
        "200": "#f48fb1",
        "300": "#f06292",
        "400": "#ec407a",
        "500": "#e91e63",
        "600": "#d81b60",
        "700": "#c2185b",
        "800": "#ad1457",
        "900": "#880e4f",
        "a100": "#ff80ab",
        "a200": "#ff4081",
        "a400": "#f50057",
        "a700": "#c51162",
      },

      "purple": {
        "50": "#f3e5f5",
        "100": "#e1bee7",
        "200": "#ce93d8",
        "300": "#ba68c8",
        "400": "#ab47bc",
        "500": "#9c27b0",
        "600": "#8e24aa",
        "700": "#7b1fa2",
        "800": "#6a1b9a",
        "900": "#4a148c",
        "a100": "#ea80fc",
        "a200": "#e040fb",
        "a400": "#d500f9",
        "a700": "#aa00ff",
      },

      "deep-purple": {
        "50": "#ede7f6",
        "purple-100": "#d1c4e9",
        "purple-200": "#b39ddb",
        "purple-300": "#9575cd",
        "purple-400": "#7e57c2",
        "purple-500": "#673ab7",
        "purple-600": "#5e35b1",
        "purple-700": "#512da8",
        "purple-800": "#4527a0",
        "purple-900": "#311b92",
        "purple-a100": "#b388ff",
        "purple-a200": "#7c4dff",
        "purple-a400": "#651fff",
        "purple-a700": "#6200ea",
      },

      "indigo": {
        "50": "#e8eaf6",
        "100": "#c5cae9",
        "200": "#9fa8da",
        "300": "#7986cb",
        "400": "#5c6bc0",
        "500": "#3f51b5",
        "600": "#3949ab",
        "700": "#303f9f",
        "800": "#283593",
        "900": "#1a237e",
        "a100": "#8c9eff",
        "a200": "#536dfe",
        "a400": "#3d5afe",
        "a700": "#304ffe",
      },

      "blue": {
        "50": "#e3f2fd",
        "100": "#bbdefb",
        "200": "#90caf9",
        "300": "#64b5f6",
        "400": "#42a5f5",
        "500": "#2196f3",
        "600": "#1e88e5",
        "700": "#1976d2",
        "800": "#1565c0",
        "900": "#0d47a1",
        "a100": "#82b1ff",
        "a200": "#448aff",
        "a400": "#2979ff",
        "a700": "#2962ff",
      },

      "light-blue": {
        "50": "#e1f5fe",
        "blue-100": "#b3e5fc",
        "blue-200": "#81d4fa",
        "blue-300": "#4fc3f7",
        "blue-400": "#29b6f6",
        "blue-500": "#03a9f4",
        "blue-600": "#039be5",
        "blue-700": "#0288d1",
        "blue-800": "#0277bd",
        "blue-900": "#01579b",
        "blue-a100": "#80d8ff",
        "blue-a200": "#40c4ff",
        "blue-a400": "#00b0ff",
        "blue-a700": "#0091ea",
      },

      "cyan": {
        "50": "#e0f7fa",
        "100": "#b2ebf2",
        "200": "#80deea",
        "300": "#4dd0e1",
        "400": "#26c6da",
        "500": "#00bcd4",
        "600": "#00acc1",
        "700": "#0097a7",
        "800": "#00838f",
        "900": "#006064",
        "a100": "#84ffff",
        "a200": "#18ffff",
        "a400": "#00e5ff",
        "a700": "#00b8d4",
      },

      "teal": {
        "50": "#e0f2f1",
        "100": "#b2dfdb",
        "200": "#80cbc4",
        "300": "#4db6ac",
        "400": "#26a69a",
        "500": "#009688",
        "600": "#00897b",
        "700": "#00796b",
        "800": "#00695c",
        "900": "#004d40",
        "a100": "#a7ffeb",
        "a200": "#64ffda",
        "a400": "#1de9b6",
        "a700": "#00bfa5",
      },

      "green": {
        "50": "#e8f5e9",
        "100": "#c8e6c9",
        "200": "#a5d6a7",
        "300": "#81c784",
        "400": "#66bb6a",
        "500": "#4caf50",
        "600": "#43a047",
        "700": "#388e3c",
        "800": "#2e7d32",
        "900": "#1b5e20",
        "a100": "#b9f6ca",
        "a200": "#69f0ae",
        "a400": "#00e676",
        "a700": "#00c853",
      },

      "light-green": {
        "50": "#f1f8e9",
        "green-100": "#dcedc8",
        "green-200": "#c5e1a5",
        "green-300": "#aed581",
        "green-400": "#9ccc65",
        "green-500": "#8bc34a",
        "green-600": "#7cb342",
        "green-700": "#689f38",
        "green-800": "#558b2f",
        "green-900": "#33691e",
        "green-a100": "#ccff90",
        "green-a200": "#b2ff59",
        "green-a400": "#76ff03",
        "green-a700": "#64dd17",
      },

      "lime": {
        "50": "#f9fbe7",
        "100": "#f0f4c3",
        "200": "#e6ee9c",
        "300": "#dce775",
        "400": "#d4e157",
        "500": "#cddc39",
        "600": "#c0ca33",
        "700": "#afb42b",
        "800": "#9e9d24",
        "900": "#827717",
        "a100": "#f4ff81",
        "a200": "#eeff41",
        "a400": "#c6ff00",
        "a700": "#aeea00",
      },

      "yellow": {
        "50": "#fffde7",
        "100": "#fff9c4",
        "200": "#fff59d",
        "300": "#fff176",
        "400": "#ffee58",
        "500": "#ffeb3b",
        "600": "#fdd835",
        "700": "#fbc02d",
        "800": "#f9a825",
        "900": "#f57f17",
        "a100": "#ffff8d",
        "a200": "#ffff00",
        "a400": "#ffea00",
        "a700": "#ffd600",
      },

      "amber": {
        "50": "#fff8e1",
        "100": "#ffecb3",
        "200": "#ffe082",
        "300": "#ffd54f",
        "400": "#ffca28",
        "500": "#ffc107",
        "600": "#ffb300",
        "700": "#ffa000",
        "800": "#ff8f00",
        "900": "#ff6f00",
        "a100": "#ffe57f",
        "a200": "#ffd740",
        "a400": "#ffc400",
        "a700": "#ffab00",
      },

      "orange": {
        "50": "#fff3e0",
        "100": "#ffe0b2",
        "200": "#ffcc80",
        "300": "#ffb74d",
        "400": "#ffa726",
        "500": "#ff9800",
        "600": "#fb8c00",
        "700": "#f57c00",
        "800": "#ef6c00",
        "900": "#e65100",
        "a100": "#ffd180",
        "a200": "#ffab40",
        "a400": "#ff9100",
        "a700": "#ff6d00",
      },

      "deep-orange": {
        "50": "#fbe9e7",
        "orange-100": "#ffccbc",
        "orange-200": "#ffab91",
        "orange-300": "#ff8a65",
        "orange-400": "#ff7043",
        "orange-500": "#ff5722",
        "orange-600": "#f4511e",
        "orange-700": "#e64a19",
        "orange-800": "#d84315",
        "orange-900": "#bf360c",
        "orange-a100": "#ff9e80",
        "orange-a200": "#ff6e40",
        "orange-a400": "#ff3d00",
        "orange-a700": "#dd2c00",
      },

      "brown": {
        "50": "#efebe9",
        "100": "#d7ccc8",
        "200": "#bcaaa4",
        "300": "#a1887f",
        "400": "#8d6e63",
        "500": "#795548",
        "600": "#6d4c41",
        "700": "#5d4037",
        "800": "#4e342e",
        "900": "#3e2723",
      },

      "gray": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#eeeeee",
        "300": "#e0e0e0",
        "400": "#bdbdbd",
        "500": "#9e9e9e",
        "600": "#757575",
        "700": "#616161",
        "800": "#424242",
        "900": "#212121",
      },

      "blue-gray": {
        "50": "#eceff1",
        "100": "#cfd8dc",
        "200": "#b0bec5",
        "300": "#90a4ae",
        "400": "#78909c",
        "500": "#607d8b",
        "600": "#546e7a",
        "700": "#455a64",
        "800": "#37474f",
        "900": "#263238",
      }

    }
  },
  extend: {
    fontFamily: {
      sans: 'Roboto',
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-elevation')(['hover']),
    function ({ addUtilities }) {
      return addUtilities({
        ['.label-transition']: {
          transition: 'font-size 0.2s, line-height 0.2s',
        }
      });
    },
    function ({ addUtilities, theme, e }) {
      const colors = theme('colors');

      const ripples = Object.keys(colors)
        .reduce((acc, key) => {
          if (typeof colors[key] === 'string') {
            return {
              ...acc,
              [`.ripple-${e(key)}`]: ripple,
              [`.ripple-${e(key)}:after`]: {
                ...rippleAfter,
                backgroundImage: `radial-gradient(circle, ${colors[key]} 20%, transparent 10.01%)`
              },
              [`.ripple-${e(key)}:active:after`]: rippleActiveAfter,
            };
          }

          return {
            ...acc,
            [`.ripple-${e(key)}`]: ripple,
            [`.ripple-${e(key)}:after`]: {
              ...rippleAfter,
              backgroundImage: `radial-gradient(circle, ${colors[key]['700']} 20%, transparent 10.01%)`
            },
            [`.ripple-${e(key)}:active:after`]: rippleActiveAfter,
          };

        }, {});

      addUtilities(ripples);
    },
    function ({ e, addUtilities, theme }) {
      const colors = theme('colors');

      const caretColors = Object.keys(colors)
        .reduce((acc, key) => {
          if (typeof colors[key] === 'string') {
            return {
              ...acc,
              [`.caret-${e(key)}`]: {
                'caret-color': colors[key]
              }
            }
          }

          const variants = Object.keys(colors[key])

          return {
            ...acc,
            ...variants.reduce((a, variant) => ({
              ...a,
              [`.caret-${e(key)}-${variant}`]: {
                'caret-color': colors[key][variant]
              },
            }), {}),
          };
        }, {});

      addUtilities(caretColors);
    }
  ]
}
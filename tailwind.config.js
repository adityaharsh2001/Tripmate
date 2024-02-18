/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],

    theme: {
        extend: {
            colors: {
                white: "#fff",
                "grey-scale-black-75": "rgba(25, 24, 37, 0.75)",
                "grey-scale-black": "#191825",
                "grey-scale-black-50": "rgba(25, 24, 37, 0.5)",
                "grey-scale-black-5": "rgba(25, 24, 37, 0.05)",
                secondary: "#0077b6",
                primary: "#00B4D8",
                orange: "#ff5722",
                "grey-scale-black-10": "rgba(25, 24, 37, 0.1)",
                royalblue: {
                    "100": "#5c82fa",
                    "200": "#4169e1",
                    "300": "rgba(92, 130, 250, 0.09)",
                },
                black: "#000",
                dimgray: {
                    "100": "#737373",
                    "200": "#5b5b5b",
                    "300": "#525252",
                },
                gray: "#767676",
                darkslategray: {
                    "100": "#3f3f3f",
                    "200": "#343434",
                },
                yellow: "#facd49",
                goldenrod: "rgba(250, 205, 73, 0.5)",
                gainsboro: "#e6e6e6",
                medium: "#393e46",
                light: "#eee",
                lightgray: "#d4d4d4",
                dark: "#222831",
                mediumpurple: "#8575ed",
                orangered: "rgba(255, 87, 34, 0.5)",
                darkslateblue: "#181e4b",
                salmon: "#df6951",
                whitesmoke: "#f8f8f8",
                seashell: "#ffefec",
                firebrick: "#c74f38",
                gray1: {
                    "100": "#7d7d7d",
                    "200": "rgba(0, 0, 0, 0.4)",
                    "300": "rgba(0, 0, 0, 0.3)",
                    "400": "rgba(38, 38, 38, 0.13)",
                },
                "text-clr": "#5e6282",
                "gray-500": "#6b7280",
                "blue-900": "#233876",
                darkgray: {
                    "100": "#aaa",
                    "200": "#aaa8a8",
                },
            },
            spacing: {},
            fontFamily: {
                body: "Inter",
                poppins: "poppins",
                poppins: "Poppins",
                volkhov: "Volkhov",
                yesteryear: "Yesteryear",
                abel: "Abel",
            },
            borderRadius: {
                "81xl": "100px",
                "7xl-4": "26.4px",
                "481xl": "500px",
                "13xl": "32px",
                "xl-9": "20.9px",
                "3xs": "10px",
                "4xs": "9px",
                "20xl": "39px",
                mid: "17px",
                "12xl": "31px",
                "2xs-7": "10.7px",
                "61xl": "80px",
            },
        },
        fontSize: {
            lg: "1.13rem",
            "4xl": "1.44rem",
            "9xl": "1.75rem",
            "25xl": "2.75rem",
            "16xl": "2.19rem",
            "7xl": "1.63rem",
            "lgi-8": "1.24rem",
            "10xl-7": "1.86rem",
            "5xl": "1.5rem",
            "13xl": "2rem",
            "2xl": "1.31rem",
            "4xl-5": "1.47rem",
            lgi: "1.19rem",
            "base-6": "0.98rem",
            "3xl": "1.38rem",
            sm: "0.88rem",
            "50xl": "4.31rem",
            "36xl": "3.44rem",
            "22xl": "2.56rem",
            mid: "1.06rem",
            base: "1rem",
            xl: "1.25rem",
            "12xl-6": "1.98rem",
            "6xl": "1.56rem",
            "138xl-4": "9.84rem",
            "44xl": "3.94rem",
            "20xl": "2.44rem",
            "31xl": "3.13rem",
            "21xl": "2.5rem",
            "11xl": "1.88rem",
            "10xl": "1.81rem",
            "smi-2": "0.76rem",
            "2xl-3": "1.33rem",
            "7xl-7": "1.67rem",
            "29xl": "3rem",
            "19xl": "2.38rem",
            "17xl": "2.25rem",
            "61xl": "5rem",
            "23xl": "2.63rem",
            "15xl": "2.13rem",
            inherit: "inherit",
        },
        screens: {
            'sm': '600px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }

        },
    },
    corePlugins: {
        preflight: false,
    },
};

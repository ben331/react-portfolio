import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500.000000 500.000000"
        preserveAspectRatio="xMidYMid meet"
        className={classes.svgHover}
      >
        <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
        fill="#" stroke="none">
          <path d="M1190 2544 c0 -1413 2 -1725 13 -1721 7 3 59 35 115 72 l102 67 -2
          1616 -3 1617 -105 37 c-58 20 -108 37 -112 37 -5 1 -8 -776 -8 -1725z"/>
          <path d="M2455 4164 c-79 -11 -206 -37 -209 -43 -3 -4 100 -42 227 -85 270
          -91 341 -128 448 -235 199 -198 306 -491 269 -736 -24 -161 -88 -295 -193
          -411 l-58 -63 40 -27 41 -27 55 42 c209 158 339 381 361 616 13 144 -32 425
          -111 699 -38 131 -96 170 -355 238 -104 27 -132 30 -300 33 -102 2 -198 1
          -215 -1z"/>
          <path d="M1909 3969 c-66 -47 -166 -147 -209 -209 -114 -167 -163 -335 -163
          -560 0 -201 43 -325 165 -475 95 -119 218 -218 475 -387 464 -303 518 -339
          589 -398 l72 -60 211 136 c116 75 211 140 211 144 0 4 -42 47 -92 96 -97 93
          -173 149 -423 310 -82 53 -226 147 -320 209 -396 263 -509 430 -477 704 23
          194 90 312 236 417 l28 20 -119 42 c-66 23 -124 42 -130 42 -5 0 -30 -14 -54
          -31z"/>
          <path d="M3320 1842 c-47 -31 -142 -94 -211 -138 l-126 -81 13 -64 c18 -85 17
          -267 -1 -354 -45 -217 -199 -384 -420 -456 -68 -23 -82 -23 -528 -27 l-458 -3
          -105 -68 c-101 -65 -104 -69 -77 -76 40 -10 1056 -22 1128 -13 110 14 259 58
          364 108 293 140 473 370 543 695 20 96 17 364 -6 458 -10 42 -22 77 -25 76 -3
          0 -44 -26 -91 -57z"/>
        </g>
      </svg>
    );
};

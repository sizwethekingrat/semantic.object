"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://stenciljs.com/docs/config
exports.config = {
    outputTargets: [
        {
            type: 'www',
            serviceWorker: {
                swSrc: 'src/sw.js'
            }
        }
    ],
    globalScript: 'src/global/app.ts',
    globalStyle: 'src/global/app.css'
};

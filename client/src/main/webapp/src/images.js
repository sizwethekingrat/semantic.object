const imageContext = require.context(
    "./assets/images/live",
    true,
    /^\.\/.*\.(jpe?g|png|gif)$/i
);
export { imageContext };
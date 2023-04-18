module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          Elements: "./src/Elements",
          Routes: "./src/Routes",
          Constants: "./src/Constants",
          Types: "./src/Types"
        },
      },
    ],
  ],
};

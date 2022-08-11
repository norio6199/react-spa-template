module.exports = {
  babel: {
    presets: [
      [
        "@babel/preset-react",
        { runtime: "automatic", importSource: "@emotion/react" },
      ],
    ],
    plugins: [
      "@emotion/babel-plugin",
      [
        "module-resolver",
        {
          extensions: [".ts", ".tsx"],
          root: "./",
          alias: {
            "@": ["./src"],
          },
        },
      ],
    ],
  },
};

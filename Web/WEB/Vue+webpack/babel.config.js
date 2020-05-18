const presets = [
  ["@Babel/env", {
    targets: {
      edge: "17",
      firfox: "60",
      chrome: "67",
      safari: "11.1"
    }
  }]
];
module.exports = { presets }
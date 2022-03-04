const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@images": "src/assets/images",
    "@styles": "src/assets/styles",
    "@components": "src/components",
    "@common": "src/components/common",
    "@config": "src/config",
    "@constants": "src/constants",
    "@middleware": "src/middleware",
    "@pages": "src/pages",
    "@store": "src/store",
    "@utils": "src/utils",
    "@shared": "src/shared",
  })(config);

  return config;
};

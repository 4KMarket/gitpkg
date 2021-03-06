'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.normalisePackageNameNpm = normalisePackageNameNpm;
exports.normalisePackageNameYarn = normalisePackageNameYarn;

var _getNpmClient = require('./get-npm-client');

var _getNpmClient2 = _interopRequireDefault(_getNpmClient);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = async function normalisePackageName(name) {
  const npmClient = await (0, _getNpmClient2.default)();

  if (npmClient === 'npm') {
    return normalisePackageNameNpm(name);
  }

  return normalisePackageNameYarn(name);
};

function normalisePackageNameNpm(name) {
  return name[0] === '@' ? name.substr(1).replace(/\//g, '-') : name;
}

function normalisePackageNameYarn(name) {
  return name[0] === '@' ? name.substr(1).replace('/', '-') : name;
}
//# sourceMappingURL=normalise-package-name.js.map

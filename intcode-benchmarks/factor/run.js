const { getRunner } = require('../../lib/intcode.js');

module.exports = (inputs) => {
  const run = getRunner(inputs, { quietIO: true });
  return run(19201644899);
};

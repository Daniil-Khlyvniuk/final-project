module.exports = (condition, name) => {
  if (!condition) throw new Error(`${name} not found`);
};

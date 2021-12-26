module.exports = (object, objectName, notExist = false) => {
  const condition = notExist ? notExist : !!object;
  if (condition) {
    throw new Error(
      `The ${objectName} ${notExist ? "is doesn't" : "already"} exist`
    );
  }
};

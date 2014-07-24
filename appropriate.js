module.exports = {
  "new": wrap,
  "array": wrap,
  "object": wrap
};

function wrap(node) {
  // TODO: actually escape the source
  // TODO: aggregate values
  node.update("(function () {"
              + "console.log('appropriate: " + node.source() + "');"
              + "console.trace();"
              + "return " + node.source() + ";"
              + "}())");
}

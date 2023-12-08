function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"test":"_styles-module__test__3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};
var Button = function Button(_ref2) {
  var text = _ref2.text;
  return /*#__PURE__*/React.createElement("button", {
    type: text
  }, "Click");
};

exports.Button = Button;
exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map

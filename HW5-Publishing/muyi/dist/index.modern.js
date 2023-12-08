import React from 'react';

var styles = {"test":"_styles-module__test__3ybTi"};

const ExampleComponent = ({
  text
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};
const Button = ({
  text
}) => {
  return /*#__PURE__*/React.createElement("button", {
    type: text
  }, "Click");
};

export { Button, ExampleComponent };
//# sourceMappingURL=index.modern.js.map

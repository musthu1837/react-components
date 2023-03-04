import React from "react";
import classNames from "classnames";

function Button(props) {
  const { children, primary, secondary } = props;
  const otherProps = { ...props };
  delete otherProps.children;
  delete otherProps.primary;
  delete otherProps.secondary;

  const className = classNames("btn", {
    "btn-primary": primary,
    "btn-secondary": secondary,
  });
  return (
    <button type="button" className={className} {...otherProps}>
      {children}
    </button>
  );
}

export { Button };

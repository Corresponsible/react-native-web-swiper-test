import React from "react";

export const renderNode = (Component, content, defaultProps) => {
  if (content == null || content === false) {
    return null;
  }
  if (React.isValidElement(content)) {
    return content;
  }
  if (typeof content === "function") {
    return content();
  }
  // Just in case
  if (content === true) {
    return <Component accessible={false} {...defaultProps} />;
  }
  if (typeof content === "string" || typeof content === "number") {
    return (
      <Component accessible={false} {...defaultProps}>
        {content}
      </Component>
    );
  }
  return <Component accessible={false} {...defaultProps} {...content} />;
};

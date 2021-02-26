import React from "react";
import { Link } from "react-router-dom";

/**
 * @param to External or internal URL
 * @param children
 * @param type Button type, if URL is not provided
 * @param props
 * @returns {*}
 * @constructor
 */
const ReactSmartLink = ({ to, children, type, ...props }) => {
  // It is a simple element with nothing to link to
  if (!to) {
      if (type) {
          return <button type={type} {...props}>{children}</button>;
      } else {
          return <span {...props}>{children}</span>;
      }
  }

  const isExternalLink = /^https?:\/\//.test(to);

  // It is intended to be an external link
  if (isExternalLink)
    return (
        <a href={to} {...props}>
          {children}
        </a>
    );

  // it is an internal link
  return (
      <Link to={to} {...props}>
        {children}
      </Link>
  );
};

export default ReactSmartLink;

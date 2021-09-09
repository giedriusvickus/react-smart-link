import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

/**
 *
 * @param to External or internal URL
 * @param children
 * @param type Button type, if URL is not provided
 * @param target
 * @param props
 * @returns {*}
 * @constructor
 */
const ReactSmartLink = forwardRef(({ to, children, type, target, ...props }, ref) => {
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
        <a href={to} target={target} rel="nofollow noopener" ref={ref} {...props}>
          {children}
        </a>
    );

  // it is an internal link
  return (
      <Link to={to} ref={ref} {...props}>
        {children}
      </Link>
  );
});

export default ReactSmartLink;

import React from "react";
import { Link } from "react-router-dom";

const GenericLink = ({ to, children, ...props }) => {
  // It is a simple element with nothing to link to
  if (!to) return <button {...props}>{children}</button>;

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

export default GenericLink;

# react-smart-link

`react-router-dom` Link support for external URLs. 

## Install

`$ npm install --save react-smart-link`

## Usage

```// using ES6 modules
import Link from "react-smart-link";

// Will produce <a href="https://....">External link</a>
<Link to="https://....">External link</Link>

// Will produce <Link to="/react/router/route">Internal link</Link>
<Link to="/react/router/route">Internal link</Link>

// Will produce <button type="button">Button name</button>
<Link>Button name</Link>

// Will produce <button type="submit">Submit button</button>
<Link type="submit">Submit button</Link>

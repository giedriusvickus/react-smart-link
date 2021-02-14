# react-smart-link

`react-router-dom` Link support for external URLs. 

## Install

`$ npm install --save react-smart-link`

## Usage

```// using ES6 modules
import ReactSmartLink from "react-smart-link";

// Will produce <a href="https://....">External link</a>
<ReactSmartLink to="https://....">External link</ReactSmartLink>

// Will produce <Link to="/react/router/route">Internal link</Link>
<ReactSmartLink to="/react/router/route">Internal link</ReactSmartLink>

// Will produce <button type="button">Button name</button>
<ReactSmartLink>Button name</ReactSmartLink>

// Will produce <button type="submit">Submit button</button>
<ReactSmartLink type="submit">Submit button</ReactSmartLink>

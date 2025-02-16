# Unhandled Error in Express.js Route Parameter

This repository demonstrates a common error in Express.js applications: the lack of proper error handling for route parameters.

The `bug.js` file shows a vulnerable route handler.  It directly uses the `id` parameter from the URL without validating its format or existence. This makes the application vulnerable to crashes or unexpected behavior if the `id` is not a valid number or is missing. 

The `bugSolution.js` file demonstrates the corrected code with error handling.
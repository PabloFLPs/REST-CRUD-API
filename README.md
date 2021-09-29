# REST API
## CRUD API with NodeJS and Express

This application is a CRUD API, CRUD is assign to "Create, Read, Update and Delete". In this case, we have:
- creating user route;
- get users route;
- update user route;
- delete user route.

This is a simple application without interaction with any databases, so the users in question are added in run-time and remain available while the API is running. For the users ID attibute, was used the uuid - Universal Unic Identifier library to generate IDs.


## Settings to run:
- Adding express dependencies:
`yarn add express`

- Adding "type" attribute to package.json:
```
,
"type": "module"
```

- Adding "uuid" dependencies:
`yarn add uuid`
cd backend
npm init -y    ---------> package.json file form/ initalize project
npm install express mongoose dotenv cors --------------> install dependencies
                express: Web framework for Node.js.
                mongoose: MongoDB object modeling tool.
                dotenv: Loads environment variables from a .env file.

npm install typescript ts-node @types/node @types/express

            typescript: Adds TypeScript support.
            ts-node: Allows running TypeScript files directly.
            @types/node: Type definitions for Node.js.
            @types/express: Type definitions for Express.    

npm install bcrypt jsonwebtoken express-validator
npm install @types/bcryptjs @types/jsonwebtoken

             bcrypt: For password hashing.
             jsonwebtoken: For token-based authentication (JWT).
             express-validator: Middleware for handling validations.


npm install --save-dev nodemon eslint prettier
              nodemon: Automatically restarts the server when file changes are detected.
              eslint: JavaScript/TypeScript linter to maintain code quality.
              prettier: Code formatter.

npx tsc --init

nodemon.json
// watch: Tells nodemon to watch the src directory for changes.
// ext: Specifies that we want to watch .ts (TypeScript) files.
// exec: Runs the ts-node command to execute the src/index.ts file.

node -v
npm -v
npm init
npm install <package name>
npm install -g <package-name>
npm uninstall <package-name>
npm update <package-name>
npm update
npm list
npm list -g --depth=0    <!-- List globally installed packages -->
npm run start    <!-- Run a script: -->
npm audit           <!-- Scan your project for security vulnerabilities -->
npm install






Express.js (web server),
MongoDB (database),
TypeScript (static typing),
Mongoose (ORM for MongoDB).
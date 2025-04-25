const dotenv = require("dotenv");
// When you call the config on dotenv all env variables are loaded inside the process.env.
dotenv.config();
console.log(process.env.PORT);
module.exports = {
    PORT: process.env.PORT,
};

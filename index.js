const validator = require("validator");
const result = validator.isEmail("test@test.com, abcDE123");

console.log(result);

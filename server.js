const next = require("next");

const runApp = require("./app");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  runApp(handle);
});

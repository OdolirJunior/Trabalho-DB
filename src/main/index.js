const app = require("./config/app");
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
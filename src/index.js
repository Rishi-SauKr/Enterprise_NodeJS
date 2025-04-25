const express = require("express");
// index.js is automatically imported no need to mention it here
const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");
const app = express();
app.use("/api", apiRoutes);
app.listen(ServerConfig.PORT, () => {
    console.log(
        `Successfully started the server on PORT : ${ServerConfig.PORT}`
    );
    // Logger.info,Logger.error,Logger.warning
    Logger.info("Sucessfully started server", {});
});

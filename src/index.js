const express = require("express");
// index.js is automatically imported no need to mention it here
const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");
const { StatusCodes } = require("http-status-codes");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// app.post("/api/v1/airplanes",(req,res)=>{
//     console.log(req.body);
//     res.status(StatusCodes.OK).json("body value printed");
// })
app.use("/api", apiRoutes);
app.listen(ServerConfig.PORT, () => {
    console.log(
        `Successfully started the server on PORT : ${ServerConfig.PORT}`
    );
    // Logger.info,Logger.error,Logger.warning
    Logger.info("Sucessfully started server", {});
});

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
app.listen(ServerConfig.PORT, async () => {
    console.log(
        `Successfully started the server on PORT : ${ServerConfig.PORT}`
    );

    // const { City, Airport } = require("./models");
    // const bengaluru = await City.findByPk(2);
    // console.log(bengaluru);
    // const airport = await Airport.create({
    //     name: "Kempegowda Airport", code: 'BLR', cityId: 1
    // });
    // const KMPAirport = await bengaluru.createAirport({ name: 'Kempegowda Airport', code: 'BLR' });
    // console.log(KMPAirport);
    // const HubliAirport = await bengaluru.createAirport({ name: 'Bengaluru International Airport', code: 'HBL' });
    // const airportsInBlr = await bengaluru.getAirports();
    // console.log(airportsInBlr);
    /** This Errors out. */
    // const hblAirport = await Airport.findByPk(3);
    // console.log(hblAirport);
    // await bengaluru.removeAirport(hblAirport);
    /*
        Tries to update cityId to null that gives error on both javascript level and database level.
    */
    // const city = await City.findByPk(5);
    // await city.createAirport({ name: 'Indore Airport', code: 'IND' })
    // await City.destroy({
    //     where: {
    //         id: 4
    //     }
    // })
    // Logger.info,Logger.error,Logger.warning
    Logger.info("Sucessfully started server", {});
});

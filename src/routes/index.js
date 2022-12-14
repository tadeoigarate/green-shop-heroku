const { Router } = require('express');
// import all routers;


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
const authProducts = require("./products");
const authReview = require("./review");
const authFilters = require("./filtrados");
const authUser = require("./user");
const authOrder = require("./order")
const authMercadoPago = require("./mercadoPago")
const authEnvio = require("./envio")


router.use("/products", authProducts);

router.use("/review", authReview);

router.use("/filters", authFilters);

router.use("/user", authUser);

router.use("/tadeo", authOrder)

router.use("/mp", authMercadoPago)

router.use("/envio", authEnvio)

module.exports = router;

const express = require("express");
const morgan = require("morgan");

const app = express();

const productRoutes = require("./api/routes/products");
const ordersRoutes = require("./api/routes/orders");

// app.use() set up middleware
// app.use((req, res, next) => {
//   res.status(200).json({
//     messate: "It works"
//   });
// });

app.use(morgan("dev"));

app.use("/products", productRoutes);
app.use("/orders", ordersRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  //   res.status(error.status).json({
  //     message: "Not Found Page!"
  //   });
  next(error);
});

// If error thrown , this middleware would be triggered
app.use((error, req, res, next) => {
  // i will handle all kind of errors
  // like errors thrown from anywhere else in this application

  // For Example.
  // When we have operaction doing work on the data , there operaction could fail
  // and then i want to reutnr a 500 error
  // Now if there operation fail , they will directly throw an error
  // so i don't make it into 404 error middlweare

  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;

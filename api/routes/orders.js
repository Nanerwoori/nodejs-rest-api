const express = require("express");
const router = express.Router();
/**
 * @method GET:/orders
 * @access Public
 */
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Orders were fetched"
  });
});

/**
 * @method POST:/orders
 * @access Pirvate
 */
router.post("/", (req, res) => {
  res.status(201).json({
    message: "Order was created"
  });
});

/**
 * @method GET:/orders/:ordersId
 * @access Public
 */
router.get("/:orderId", (req, res) => {
  res.status(200).json({
    message: "Order Details",
    orderId: req.params.orderId
  });
});

/**
 * @method DELETE:/orders/:ordersId
 * @access Private
 */
router.delete("/:orderId", (req, res) => {
  res.status(200).json({
    message: "Order deleted",
    orderId: req.params.orderId
  });
});

module.exports = router;

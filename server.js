const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Swagger Setup
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PeerHire API",
      version: "1.0.0",
      description: "API documentation for PeerHire backend",
    },
  },
  apis: ["./server.js"], // You can change this later if you split routes
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.json());

/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome route
 *     responses:
 *       200:
 *         description: Welcome to PeerHire API!
 */
app.get("/", (req, res) => {
  res.send("Welcome to PeerHire API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

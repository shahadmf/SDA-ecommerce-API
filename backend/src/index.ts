import express, { Application} from "express";

import { dev } from "./config/config";
import morgan from "morgan";
import { errorHandler } from "./middlewares/errorHandler";
import router from "./routs/productRoutes";
import { connectDB } from "./config/db";
import createHttpError from "http-errors";

const app: Application = express();
const port = dev.app.port || 8080;

app.use(morgan("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
    connectDB();
});

app.get('/', (req, res) => {
  res.json({ message: "Just wanted to check!" });
});

// Products API
app.use('/products', router)

// Error handler
app.use((req, res, next) => {
    next(createHttpError(404, 'Not Found!'))
});

app.use(errorHandler);
import express from "express";
import morgan from "morgan";
import apiRouter from "./routers/api.routes.js";
import employeeRoutes from "./routers/employees.routes.js";
import authRoutes from "./routers/auth.routes.js";
import cookieParser from "cookie-parser";
import { userToken } from "./middleware/userToken.js";

const app = express();

app.use(morgan("dev")); //para ver las peticiones que llegan al servidor
app.use(express.json()); //para que el servidor entienda los json que llegan al servidor
app.use(cookieParser()); //para que el servidor entienda las cookies que llegan al servidor

app.use(apiRouter);
app.use("/api", userToken, employeeRoutes)
app.use("/api", authRoutes)



app.use((req, res, next) => {
  res.status(404).json({ message: "Endpoint not found" });
}); // para que cuando no encuentre la ruta, devuelva un mensaje de error

export default app;

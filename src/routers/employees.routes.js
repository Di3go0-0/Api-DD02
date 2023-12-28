import { Router } from "express";
import {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employees.controllers.js";

const router = Router();

router.get("/employees", getEmployees);

router.get("/employee/:_id", getEmployee);

router.post("/employee/", createEmployee );

router.patch("/employee/:_id", updateEmployee);

router.delete("/employee/:_id", deleteEmployee);

export default router;

import { Router } from "express";
import {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employees.controllers.js";
import {validateSchema} from "../middleware/validateSchema.js";
import {createEmployeeSchema, updateEmployeeSchema} from "../schema/employee.schema.js";
import { userToken } from "../middleware/userToken.js";
import { checkerToken } from "../middleware/checkerToken.js";


const router = Router();

router.get("/employees",userToken, getEmployees);

router.get("/employee/:_id",userToken, getEmployee);

router.post("/employee/",checkerToken, validateSchema(createEmployeeSchema), createEmployee );

router.patch("/employee/:_id",checkerToken,validateSchema(updateEmployeeSchema), updateEmployee);

router.delete("/employee/:_id",checkerToken, deleteEmployee);

export default router;

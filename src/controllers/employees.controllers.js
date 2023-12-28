import Employee from "../models/employees.models.js";

export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().select("name email phone");
    res.json(employees);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getEmployee = async (req, res) => {
  const { _id } = req.params;
  try {
    const employee = await Employee.findById(_id);
    res.json({
      _id: employee._id,
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
    });
    console.log({
      _id: employee._id,
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const createEmployee = async (req, res) => {
  const { name, email, phone } = req.body;
  const newEmployee = new Employee({ name, email, phone });
  try {
    const employeeSaved = await newEmployee.save();
    res.json({
        _id: employeeSaved._id,
        name: employeeSaved.name,
        email: employeeSaved.email,
        phone: employeeSaved.phone,
    }); // Enviar el empleado guardado como respuesta
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const updateEmployee = async (req, res) => {
  const updates = req.body;
  const { _id } = req.params;
  try {
    const employee = await Employee.findById(_id);
    Object.keys(updates).forEach((key) => (employee[key] = updates[key]));
    await employee.save();
    res.json({ message: "Employee updated" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const deleteEmployee = async (req, res) => {
  const { _id } = req.params;
  try {
    await Employee.deleteOne({ _id });
    res.json({ message: "Employee deleted" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

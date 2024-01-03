import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: passwordHash,
      role,
    });
    const userSaved = await newUser.save();
    // const token = await createAccessToken(
    //   { id: userSaved._id },
    //   { role: userSaved.role }
    // );
    // res.cookie("token", token);

    res.status(201).json({
      _id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      role: userSaved.role,
    });

  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body; //obtenermos los datos del req.body que nos envia el usuario
  try {
    const userFound = await User.findOne({ email }); //buscamos a travez del email
    
    if (!userFound) return res.status(400).json({ message: "User not found" }); //si no se encuentra el usuario retornamos un mensaje de error

    const isMatch = await bcrypt.compare(password, userFound.password); //comparamos la contraseña que nos envia el usuario con la que tenemos en la base de datos

    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" }); //si no coinciden retornamos un mensaje de error

    const token = await createAccessToken(
      { id: userFound._id },
      { role: userFound.role }
    ); //si coinciden generamos un token
    res.cookie("token", token); //guardamos el token en una cookie

    res.status(200).json({ message: "Login success" }); //retornamos un mensaje de exito al usuario
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const logout = async (req, res) => {
res.cookie("token", "", { expires: new Date(0) }) //eliminamos la cookie con el token  
  res.status(200).json({ message: "Logout success" })
}

import mongoos from "mongoose";


//conexion a la base de datos
export const connect = async () => {
  try {
    await mongoos.connect(process.env.DB_MONGOURI);
    console.log(">>>>>>>DB is connected<<<<<<<<<<");
  } catch (e) {
    console.log(e);
  }
};

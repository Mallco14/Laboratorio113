import mongoose from "mongoose";

// creamos la conexion

const connect = () =>{
   mongoose.Promise = global.Promise;
   mongoose.connect("mongodb://localhost:27017/playlist?authSource=admin",
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }
   
   );
   const db = mongoose.connection;
   db.on("error", (error) => console.error(error));
   db.once("open", () => console.log("Connected to Database"));
   

};

export default connect;
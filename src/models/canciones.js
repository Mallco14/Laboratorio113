import mongoose from "mongoose";

const cancionSchema = new mongoose.Schema({
  nombre: String,
  artista: String,
  album: String,
  año: Number,
  genero: String,
  duracion: Number,

  
 
});

const Cancion = mongoose.model("Cancion", cancionSchema);

export default Cancion;

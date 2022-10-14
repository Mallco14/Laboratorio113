import Cancion from "../../models/canciones";

export const findAll = async(req, res) => {
    try{
        const cancion = await Cancion.find();
        res.json({
            ok: true,
            data: cancion,
          });
        } catch (error) {
          res.json({
            ok: false,
            data: error.message,
          });
        }
      };
//CREAR MUSICA
export const create = async (req, res)=>{
    try {
        const { body } = req;
        const user = new Cancion(body);
        user.save();
    
        res.json({
          ok: true,
          data: user,
        });
      } catch (error) {
        res.json({
          ok: false,
          data: error.message,
        });
      }
    };

//
export const update = async (req, res) => {
    try {
      const musicID =req.params.id;
      const musicUpdate = await Cancion.findByIdAndUpdate(musicID,req.body, {
        new: true,
      });
  
      res.json({
        ok: true,
        data: musicUpdate,
      });
    } catch (error) {
      res.json({
        ok: false,
        data: error.message,
      });
    }
  };
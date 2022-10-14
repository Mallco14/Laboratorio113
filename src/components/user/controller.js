import Usuario from "../../models/usuario";

//crear usuario
export const create = async (req, res)=>{
    try {
        const { body } = req;
        const user = new Usuario(body);
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
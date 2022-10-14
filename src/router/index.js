import { TestRouter , userRouter, musicRouter} from "../components";

// cada vez que quiera agregar unaruta nueva,
// creo el path e importo el componente
const listRoutes = [["/test", TestRouter],["/api/v1/users", userRouter],["/api/v1/songs", musicRouter]];


export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};

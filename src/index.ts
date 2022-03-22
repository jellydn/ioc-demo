/* eslint-disable import/no-unassigned-import */
import "reflect-metadata";

import { Container } from "inversify";
import { Greeter, Welcome } from "./interfaces";
import GreeterService from "./services/greeter-service";
import UserService from "./services/user-service";
import { TYPES } from "./types";

const container = new Container();
container.bind<Greeter>(TYPES.Greeter).to(GreeterService);
container.bind<Welcome>(TYPES.Welcome).to(UserService);

export default container;

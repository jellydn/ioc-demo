import { inject, injectable } from "inversify";
import { Greeter, Welcome } from "../interfaces";
import { TYPES } from "../types";

@injectable()
class UserService implements Welcome {
	private readonly _greeterService: Greeter;
	constructor(@inject(TYPES.Greeter) greeter: Greeter) {
		this._greeterService = greeter;
	}

	greet(): string {
		return this._greeterService.hello();
	}
}

export default UserService;

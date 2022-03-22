import { injectable } from "inversify";
import { Greeter } from "../interfaces";

@injectable()
class GreeterService implements Greeter {
	private readonly _name: string;
	constructor(name = "Hello world") {
		this._name = name;
	}

	hello(): string {
		return this._name ? this._name : "Hello world";
	}
}

export default GreeterService;

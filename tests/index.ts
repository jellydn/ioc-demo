import { test } from "uvu";
import * as assert from "uvu/assert";
import container from "../src";
import { Welcome } from "../src/interfaces";
import { TYPES } from "../src/types";

test("it return hello world from user service", () => {
	const userService = container.get<Welcome>(TYPES.Welcome);
	assert.is(userService.greet(), "Hello world");
});

test.run();

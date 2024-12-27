import { Response } from "./Response";

export class CreatedResponse extends Response {
	constructor(body: any) {
		super(201, body);
	}
}

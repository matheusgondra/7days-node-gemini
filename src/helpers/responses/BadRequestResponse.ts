import { Response } from "./Response";

export class BadRequestResponse extends Response {
	constructor(body: any) {
		super(400, body);
	}
}

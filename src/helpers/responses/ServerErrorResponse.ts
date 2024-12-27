import { Response } from "./Response";

export class ServerErrorResponse extends Response {
	constructor(body: any) {
		super(500, body);
	}
}

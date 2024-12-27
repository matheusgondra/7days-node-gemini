import { HttpResponse } from "../../interfaces/http";

export class Response implements HttpResponse {
	constructor(
		readonly statusCode: number,
		readonly body: any
	) {}
}

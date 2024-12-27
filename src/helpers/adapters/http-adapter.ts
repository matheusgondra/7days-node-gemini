import { Controller } from "../../interfaces/controller";
import { Request, Response } from "express";

export const adaptRoute = (controller: Controller) => {
	return async (req: Request, res: Response) => {
		const httpRequest = {
			body: req.body || {}
		};

		const httpResponse = await controller.handle(httpRequest);

		const isSuccessResponse = httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299;
		if (isSuccessResponse) {
			res.status(httpResponse.statusCode).json(httpResponse.body);
		} else {
			res.status(httpResponse.statusCode).json({
				error: httpResponse.body.message
			});
		}
	};
};

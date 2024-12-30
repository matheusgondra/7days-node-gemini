import { Router } from "express";
import { makeAddTemplateController } from "../factories/add-template-controller-factory";
import { adaptRoute } from "../helpers/adapters";

export const templateRoutes = (router: Router): void => {
	router.post("/template", adaptRoute(makeAddTemplateController()));
};

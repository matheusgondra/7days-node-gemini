import { Router } from "express";
import { makeAddTemplateController } from "../factories/add-template-controller-factory";
import { adaptRoute } from "../helpers/adapters";

export default (router: Router): void => {
	router.post("/templates", adaptRoute(makeAddTemplateController()));
};

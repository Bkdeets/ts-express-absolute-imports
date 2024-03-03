import { Express, Request, Response, Router } from "express";
import { add } from "@/services/utilities";

const TestAbsoluteRouter = Router();

TestAbsoluteRouter.get("/:a/:b", (req: Request, res: Response) => {
	res.send(add(parseInt(req.params.a), parseInt(req.params.b)).toString());
});

export default TestAbsoluteRouter;

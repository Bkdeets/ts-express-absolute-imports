"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const utilities_1 = require("../../services/utilities");
const TestAbsoluteRouter = (0, express_1.Router)();
TestAbsoluteRouter.get("/:a/:b", (req, res) => {
    res.send((0, utilities_1.add)(parseInt(req.params.a), parseInt(req.params.b)).toString());
});
exports.default = TestAbsoluteRouter;
//# sourceMappingURL=test-absolute.js.map
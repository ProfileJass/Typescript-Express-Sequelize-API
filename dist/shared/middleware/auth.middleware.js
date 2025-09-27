"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
function authMiddleware(req, res, next) {
    const apiKey = req.header('x-api-key');
    if (!apiKey) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    if (apiKey !== "123") {
        return res.status(403).json({ message: 'Invalid AUTH key' });
    }
    next();
}
;
//# sourceMappingURL=auth.middleware.js.map
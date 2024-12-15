"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./src/app");
test("soma de 2 + 3 deve ser 5", () => {
    expect((0, app_1.soma)(2, 3)).toBe(5);
});

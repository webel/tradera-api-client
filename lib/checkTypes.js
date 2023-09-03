"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.undefinable = exports.nullable = exports.checkTypes = void 0;
const Either_1 = require("fp-ts/Either");
const io_ts_1 = require("io-ts");
const PathReporter_1 = require("io-ts/PathReporter");
function checkTypes(data, codec) {
    const result = codec.decode(data);
    if ((0, Either_1.isRight)(result)) {
        return result.right;
    }
    throw new Error(PathReporter_1.PathReporter.report(result).join("\n"));
}
exports.checkTypes = checkTypes;
function nullable(codec) {
    return (0, io_ts_1.union)([
        codec,
        io_ts_1.nullType,
    ]);
}
exports.nullable = nullable;
function undefinable(codec) {
    return (0, io_ts_1.union)([
        codec,
        io_ts_1.undefined,
    ]);
}
exports.undefinable = undefinable;
//# sourceMappingURL=checkTypes.js.map
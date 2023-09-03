import { isRight } from "fp-ts/Either";
import { nullType, undefined, union } from "io-ts";
import { PathReporter } from "io-ts/PathReporter";
export function checkTypes(data, codec) {
    const result = codec.decode(data);
    if (isRight(result)) {
        return result.right;
    }
    throw new Error(PathReporter.report(result).join("\n"));
}
export function nullable(codec) {
    return union([codec, nullType]);
}
export function undefinable(codec) {
    return union([codec, undefined]);
}
//# sourceMappingURL=checkTypes.js.map
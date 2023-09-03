import { Decoder, Type } from "io-ts";
export declare function checkTypes<A>(data: unknown, codec: Decoder<unknown, A>): A;
export declare function nullable<A>(codec: Type<A>): import("io-ts").UnionC<[Type<A, A, unknown>, import("io-ts").NullC]>;
export declare function undefinable<A>(codec: Type<A>): import("io-ts").UnionC<[Type<A, A, unknown>, import("io-ts").UndefinedC]>;
//# sourceMappingURL=checkTypes.d.ts.map
import { Client } from "soap";
export declare class Service {
    protected soapClient: Client | undefined;
    setSoapClient(soapClient: Client): void;
    protected callApiMethod<T>(method: string, resultName: string, query?: unknown): Promise<T>;
}
//# sourceMappingURL=service.d.ts.map
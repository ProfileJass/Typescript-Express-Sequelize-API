export declare class ApiResponseDTO<T> {
    success: boolean;
    message: string;
    data?: T | undefined;
    constructor(success: boolean, message: string, data?: T | undefined);
    static builder<T>(): ApiResponseBuilder<T>;
}
declare class ApiResponseBuilder<T> {
    private _success;
    private _message;
    private _data?;
    success(success: boolean): this;
    message(message: string): this;
    data(data: T): this;
    build(): ApiResponseDTO<T>;
}
export {};

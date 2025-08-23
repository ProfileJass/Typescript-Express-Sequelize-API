export class ApiResponseDTO<T> {
    constructor(
        public success: boolean,
        public message: string,
        public data?: T
    ) {}

    static builder<T>() {
        return new ApiResponseBuilder<T>();
    }
}

class ApiResponseBuilder<T> {
    private _success!: boolean;
    private _message!: string;
    private _data?: T;

    success(success: boolean): this {
        this._success = success;
        return this;
    }

    message(message: string): this {
        this._message = message;
        return this;
    }

    data(data: T): this {
        this._data = data;
        return this;
    }

    build(): ApiResponseDTO<T> {
        return new ApiResponseDTO<T>(this._success, this._message, this._data);
    }
}
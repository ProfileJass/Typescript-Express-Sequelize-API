"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponseDTO = void 0;
class ApiResponseDTO {
    constructor(success, message, data) {
        this.success = success;
        this.message = message;
        this.data = data;
    }
    static builder() {
        return new ApiResponseBuilder();
    }
}
exports.ApiResponseDTO = ApiResponseDTO;
class ApiResponseBuilder {
    success(success) {
        this._success = success;
        return this;
    }
    message(message) {
        this._message = message;
        return this;
    }
    data(data) {
        this._data = data;
        return this;
    }
    build() {
        return new ApiResponseDTO(this._success, this._message, this._data);
    }
}
//# sourceMappingURL=ApiResponseDTO.js.map
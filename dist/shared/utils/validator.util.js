"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
class Validator {
    static required(value, fieldName) {
        if (value === undefined || value === null || value === '') {
            return {
                field: fieldName,
                message: `${fieldName} es requerido`,
                value
            };
        }
        return null;
    }
    static string(value, fieldName, minLength = 1) {
        if (typeof value !== 'string') {
            return {
                field: fieldName,
                message: `${fieldName} debe ser una cadena de texto`,
                value
            };
        }
        if (value.length < minLength) {
            return {
                field: fieldName,
                message: `${fieldName} debe tener al menos ${minLength} caracteres`,
                value
            };
        }
        return null;
    }
    static positiveNumber(value, fieldName) {
        if (typeof value !== 'number' || isNaN(value)) {
            return {
                field: fieldName,
                message: `${fieldName} debe ser un número válido`,
                value
            };
        }
        if (value < 0) {
            return {
                field: fieldName,
                message: `${fieldName} debe ser un número positivo`,
                value
            };
        }
        return null;
    }
    static positiveInteger(value, fieldName) {
        const numberError = this.positiveNumber(value, fieldName);
        if (numberError)
            return numberError;
        if (!Number.isInteger(value)) {
            return {
                field: fieldName,
                message: `${fieldName} debe ser un número entero`,
                value
            };
        }
        return null;
    }
    static enum(value, fieldName, allowedValues) {
        if (!allowedValues.includes(value)) {
            return {
                field: fieldName,
                message: `${fieldName} debe ser uno de: ${allowedValues.join(', ')}`,
                value
            };
        }
        return null;
    }
    static price(value, fieldName) {
        const numberError = this.positiveNumber(value, fieldName);
        if (numberError)
            return numberError;
        if (value > 999999.99) {
            return {
                field: fieldName,
                message: `${fieldName} no puede ser mayor a 999,999.99`,
                value
            };
        }
        return null;
    }
    static validateFields(validations) {
        const errors = [];
        validations.forEach(validation => {
            const error = validation();
            if (error) {
                errors.push(error);
            }
        });
        return errors;
    }
}
exports.Validator = Validator;
exports.default = Validator;
//# sourceMappingURL=validator.util.js.map
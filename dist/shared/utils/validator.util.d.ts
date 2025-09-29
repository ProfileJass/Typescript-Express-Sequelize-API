import { ValidationError } from '../interfaces/api-response.interface';
export declare class Validator {
    static required(value: any, fieldName: string): ValidationError | null;
    static string(value: any, fieldName: string, minLength?: number): ValidationError | null;
    static positiveNumber(value: any, fieldName: string): ValidationError | null;
    static positiveInteger(value: any, fieldName: string): ValidationError | null;
    static enum(value: any, fieldName: string, allowedValues: string[]): ValidationError | null;
    static price(value: any, fieldName: string): ValidationError | null;
    static validateFields(validations: Array<() => ValidationError | null>): ValidationError[];
}
export default Validator;

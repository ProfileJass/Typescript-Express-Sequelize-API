import { ValidationError } from '../interfaces/api-response.interface';

export class Validator {
  
  static required(value: any, fieldName: string): ValidationError | null {
    if (value === undefined || value === null || value === '') {
      return {
        field: fieldName,
        message: `${fieldName} es requerido`,
        value
      };
    }
    return null;
  }

  static string(value: any, fieldName: string, minLength: number = 1): ValidationError | null {
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

  static positiveNumber(value: any, fieldName: string): ValidationError | null {
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

  static positiveInteger(value: any, fieldName: string): ValidationError | null {
    const numberError = this.positiveNumber(value, fieldName);
    if (numberError) return numberError;

    if (!Number.isInteger(value)) {
      return {
        field: fieldName,
        message: `${fieldName} debe ser un número entero`,
        value
      };
    }
    return null;
  }

  static enum(value: any, fieldName: string, allowedValues: string[]): ValidationError | null {
    if (!allowedValues.includes(value)) {
      return {
        field: fieldName,
        message: `${fieldName} debe ser uno de: ${allowedValues.join(', ')}`,
        value
      };
    }
    return null;
  }

  static price(value: any, fieldName: string): ValidationError | null {
    const numberError = this.positiveNumber(value, fieldName);
    if (numberError) return numberError;

    if (value > 999999.99) {
      return {
        field: fieldName,
        message: `${fieldName} no puede ser mayor a 999,999.99`,
        value
      };
    }
    return null;
  }

  static validateFields(validations: Array<() => ValidationError | null>): ValidationError[] {
    const errors: ValidationError[] = [];
    
    validations.forEach(validation => {
      const error = validation();
      if (error) {
        errors.push(error);
      }
    });

    return errors;
  }
}

export default Validator;
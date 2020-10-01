import hoursToMinutes from './hoursToMinutes';

interface FormData {
  selectedDay: number;
  title: string;
  timeStart: string;
  timeEnd: string;
  description: string;
  tagColor: string;
}

interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

export type ValidationFunctionType = (formData: FormData) => ValidationResult;

export const validateNoEmptyFields: ValidationFunctionType = formData => {
  const isThereEmptyFields = Object.values(formData).some(
    value => value === undefined || value === ''
  );

  return {
    isValid: !isThereEmptyFields,
    errorMessage: 'Preencha todos os campos',
  };
};

export const validateHourFormat: ValidationFunctionType = formData => {
  try {
    const startTime = hoursToMinutes(formData.timeStart);
    const finishTime = hoursToMinutes(formData.timeEnd);

    return { isValid: true, errorMessage: '' };
  } catch (error) {
    return {
      isValid: false,
      errorMessage: 'Formato de hora inválido. O formato correto é hh:mm.',
    };
  }
};

export const validateFinishTimeBiggerThanStartTime: ValidationFunctionType = formData => {
  const startTime = hoursToMinutes(formData.timeStart);
  const finishTime = hoursToMinutes(formData.timeEnd);

  return {
    isValid: finishTime > startTime,
    errorMessage: 'O horário de término deve ser após o horário de início',
  };
};

export function createFormValidator(
  ...validationFunctions: ValidationFunctionType[]
) {
  const validate: ValidationFunctionType = formData => {
    const validationResult = { isValid: true, errorMessage: '' };

    for (const validation of validationFunctions) {
      const result = validation(formData);

      console.log('res', result);

      if (!result.isValid) {
        return result;
      }
    }

    return validationResult;
  };

  return {
    validate,
  };
}

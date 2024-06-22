import { useState } from 'react';

const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value) => {
    let error = '';

    switch (fieldName) {
      case 'fullName':
        if (!value.trim()) {
          error = 'Full Name is required.';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Email address is invalid.';
        }
        break;
      case 'surveyTopic':
        if (!value) {
          error = 'Survey Topic is required.';
        }
        break;
      case 'favoriteLanguage':
        if (!value.trim()) {
          error = 'Favorite Programming Language is required.';
        }
        break;
      case 'yearsOfExperience':
        if (value < 0) {
          error = 'Years of Experience cannot be negative.';
        }
        break;
      case 'exerciseFrequency':
        if (!value.trim()) {
          error = 'Exercise Frequency is required.';
        }
        break;
      case 'dietPreference':
        if (!value.trim()) {
          error = 'Diet Preference is required.';
        }
        break;
      case 'highestQualification':
        if (!value.trim()) {
          error = 'Highest Qualification is required.';
        }
        break;
      case 'fieldOfStudy':
        if (!value.trim()) {
          error = 'Field of Study is required.';
        }
        break;
      case 'feedback':
        if (!value.trim()) {
          error = 'Feedback is required.';
        }
        break;
      default:
        break;
    }

    setErrors(errors => ({ ...errors, [fieldName]: error }));
  };

  const isFormValid = () => {
    return Object.values(errors).every(error => error === '');
  };

  return {
    errors,
    isFormValid,
    validateField
  };
};

export default useFormValidation;

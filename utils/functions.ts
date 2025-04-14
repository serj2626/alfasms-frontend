interface FormField {
  value: string | boolean;
  error: string;
  required: boolean;
}

interface FormData {
  [key: string]: FormField;
}

export const clearFormAuth = (formData: FormData) => {
  for (const key in formData) {
    if (key === 'remember') {
      formData[key].value = false;
      formData[key].error = '';
    } else {
      formData[key].value = '';
      formData[key].error = '';
    }
  }
};

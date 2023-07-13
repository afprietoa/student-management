export function validate(input: any) {
    const inputType = input.dataset.type;
    const parentElement = input?.parentElement;
    const errorElement = parentElement?.querySelector(".input-message-error");
  
    if (input.validity.valid && parentElement && errorElement) {
      parentElement.classList.remove("input-container--invalid");
      errorElement.innerHTML = "";
    } else if (parentElement && errorElement) {
      parentElement.classList.add("input-container--invalid");
      errorElement.innerHTML = showErrorMessage(inputType, input);
    }
  }
  
  const errorTypes: Array<string> = [
    "valueMissing",
    "typeMismatch",
    "tooShort",
    "tooLong",
    "patternMismatch",
    "rangeOverflow",
    "rangeUnderflow",
  ];
  
  const errorMessages: any = {
    tipoIdentificacion: {
      valueMissing: "Este campo no puede estar vacio",
    },
    numeroIdentificacion: {
      valueMissing: "Este campo no puede estar vacio",
      rangeUnderflow: "Debe tener al menos 3 caracteres",
      rangeOverflow: "Debe tener menos de 30 caracteres",
      patternMismatch: "Solo se aceptan números",
    },
    nombres: {
      valueMissing: "Este campo no puede estar vacio",
      tooShort: "Debe tener al menos 3 caracteres",
      tooLong: "Debe tener menos de 30 caracteres",
      patternMismatch: "Solo se aceptan letras",
    },
    apellidos: {
      valueMissing: "Este campo no puede estar vacio",
      tooShort: "Debe tener al menos 3 caracteres",
      tooLong: "Debe tener menos de 30 caracteres",
      patternMismatch: "Solo se aceptan letras",
    },
    correo: {
      valueMissing: "Este campo no puede estar vacio",
      typeMismatch: "El correo no es valido",
    },
    celular: {
      valueMissing: "Este campo no puede estar vacio",
      rangeUnderflow: "Debe tener al menos 10 caracteres",
      rangeOverflow: "Debe tener menos de 13 caracteres",
      patternMismatch: "Solo se aceptan números",
    },
    linkedin: {
      valueMissing: "Este campo no puede estar vacio",
      tooShort: "Debe tener al menos 10 caracteres",
      tooLong: "Debe tener menos de 100 caracteres",
      patternMismatch: "URL no valida",
    },
    github: {
      valueMissing: "Este campo no puede estar vacio",
      tooShort: "Debe tener al menos 10 caracteres",
      tooLong: "Debe tener menos de 100 caracteres",
      patternMismatch: "URL no valida",
    },
  };
  
  function showErrorMessage(inputType:any, input:any): string {
    let message:string = "";
  
    errorTypes.forEach((error) => {
      if (input.validity[error] && inputType !== undefined) {
        message = errorMessages[inputType]?.[error];
      }
    });
  
    return message;
  }
export const inputs = [
    {
      type: "text",
      name: "name",
      placeholder: "Escribe tu nombre",
      //value:`${form.name}`,
      required: true,
      //error: `${errors.name}`,
      error: "name",
    },
    {
      type: "email",
      name: "email",
      placeholder: "Escribe tu email",
      //value:`${form.email}`,
      required: true,
      //error: `${errors.email}`,
      error: "email",
    },
    {
      type: "text",
      name: "subject",
      placeholder: "Asunto",
      //value: `${form.subject}`,
      required: true,
      //error: `${errors.subject}`,
      error: "subject",
    },
  ];
export function extractErrors(obj: any): string[] {
  const er = obj.error.errors;
  let errorMessages: string[] = [];

  for (let key in er) {
    let field = key;
    const messagesWithField = er[key].map(
      (errorMessage: string) => `${field}: ${errorMessage}`
    );
    errorMessages = errorMessages.concat(messagesWithField);
  }

  return errorMessages;
}

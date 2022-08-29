const fieldValidation = (fieldName, fieldValue) => {

    if (fieldValue.trim() === "") {
        return `${fieldName} is required`
    }

    if (fieldValue.trim().length < 3) {
        return `${fieldName} need to be more than 3 characters `
    }
    return null
}

export default fieldValidation
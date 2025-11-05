function bootstrapCheckboxField({id, labelContent}: { id: string, labelContent: string }) {
    return(
        `
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="${id}">
                <label class="form-check-label" for="${id}">${labelContent}</label>
            </div>
        `
    )
}

export default bootstrapCheckboxField;
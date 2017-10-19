const form = FDL.create(schema)
const formData = {}

/* populate data to fields */
form.populate(formData)

/* update field */
form.username = 'Jack Yang'
form.gender = 1
console.log(form.title)   // Mr Jack Yang
console.log(form.prefix)  // Mr

form.prefix.options // [Mr, Ms]

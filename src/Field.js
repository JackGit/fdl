class Field {

  constructor (value) {
    this.value = value

    this.$schema
  }


}

class Form {
  constructor () {
    this.fields = {}
  }
}

const form = new Form()

['username', 'title'].forEach((name, i) => {
  const field = new Field(i)
  form.fields[name] = field
  Object.defineProperty(form, name, {
    get () { field.value },
    set (value) { field.value = value}
  })
})

A Form Definition Language library.

The form should be able to keep internal relationships among defined fields.
For example, a form has three fields: username, gender and title. Title's default value is Mr/Ms + username based on value of gender. Then after these fields been defined, `form.gender = MALE` would trigger change of default value of `form.title`. But once title has some customer input value, then changes of gender should't make it change.

```js
{
  defaultValue ({ username, gender }) {
    const prefix = gender === 1 ? 'MR' : 'MS'
    return prefix + ' ' + username
  }
}
```

## Dependency Collection

It might need a vue-like dependency collect mechanism, cause there would be complex dependencies among fields, once a field updated, other dependency fields need to be updated.


## Field schema

You can define a field like:

```js
{
  name: 'username',
  label: 'User Name',
  key: 'userName',  // dataIndex
  type: '',
  placeholder: '',
  defaultValue: '',
  value: '',
  required: true,
  validation: '',
  errorMessage: '',
  options: [],
  display: true,
  layout: {
    span: 12
  },
  componentProps: {},
  ...
}
```

## factory method

```js
{
  ...
  display (form) {
    // need to contain enough information like:
    //    current field definition, so you are able to access other defined attributes
    //    the whole fields definition of current form, so you are able to access other fields
    //    runtime information of current field, so you can access runtime information like value
    //    runtime information of all fields, so you can access runtime information like value of all the other fields

    // sometime, you need information out of form fields, for example, some fields need to be displayed only when current page is home page
    // ??? how to access currentPage variable here ???

    // sometime, you need to invoke functions as event handler,
    // ??? how to put outside functions here ???

    // for attribute like Field.Schema.options
    // ??? how to handle the dynamic value like fetched from server, or changed by other fields ???


    form.username         // access other field
    form.$fields.username // access other field

    this.name             // current field's name
    this.form === form    // always true

    this.$schema          // static schema of this field
    this.$schema.display  // return the factory function of display attribute of this field
    this.display          // return the runtime value of display attribute of this field
  }
  ...
}
```

## async options

```js
const form = new Form({
  name: 'myForm',

  data () {
    // set form data
  },

  // cvtStore is
  cvtStore: {
    GENDER: [],
    CLASS_ROOMS: Promise.resolve([])
  },

  fields: [{
    name: 'f1',
    options: [{ value: '', label: '' }, ...] // static options
  }, {
    name: 'f2',
    options: 'GENDER' // match name of cvtStore in form
  }, {
    name: 'f3',
    options ({ someOtherField }) {
      const cvtStore = this.form
      const { GENDER } = cvtStore
      return GENDER.filter(/* do some filter with other field */)
    }
  }, {
    name: 'f4',
    onChange (v) {
      fireService().then(/* update this.form.cvtStore.XXX */)
    }
  }]
})

form.populate(data)
form.value // returns all available fields value as an object

form.on('f1change', () => {})
form.on('f2blur', () => {})
```

## access outside variables

## access outside functions

## FLEXIBLE enough to extend

It should flexible to extends more schema attributes under the Field schema. Like if you want to add access control based on user entitlement or user role, you can extends the Field schema:

```js
{
  ...
  access: ''
  ...
}
```

To add customize attribute to Field schema, you may need to do this:

```js
Field.Schema.defineAttribute('access', {
  runtime: false,
  config: {}
})
```


## use in React

## use in Vue

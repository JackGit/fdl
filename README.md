A Form Definition Language library.

## Field schema

You can define a field like:

```js
{
  name: 'username',
  label: 'User Name',
  key: 'userName',
  type: '',
  placeholder: '',
  defaultValue: '',
  value: '',
  required: true,
  validation: '',
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
  display () {
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
  }
  ...
}
```

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

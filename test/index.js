/**
 * Questions
 *
 * 1. form status related to formData and outside conditions, any more?
 * 2. why need to define methods in form?
 * 3. form fields behave differently under different outside condition, which is the better way to define it
 *    3.1 define in each field, to handle all kinds of outside condition cases
 *    这样做的问题在于，对于同一种 case 的情况，每个 field 的状态都很分散的定义在各自的 schema 内。
 *    或者说，form fields 的定义会再每添加一种 case 下都要修改。能不能定义不变，case 变化时，从外部传进来控制变化
 *
 *    3.2 define different field status, and update form by: form.update(fieldStatus)
 * 4. 是否约束 schema 内只能定义 form 内部的状态制约，即 field 的行为只受 form 其他 field 值的影响；外部的影响通过 form 的其他 method 去动态改变？
 *    4.1 不能强制约束，还是需要提供 field 内访问外部的接口。但是为了避免可读性和维护性，应尽量少将所有的 case 全部写在 field 的 schema 内
 *    4.2 如果是在创建 form 时就能确定的，那么肯定是来自外部的影响，可以使用父子级 schema 来完成，通过某个 case 的子 schema，override base schema
 *    4.3 具有通用性的外部影响，可以采用在 base field 中依赖外部环境
 */

const form = FDL.create(schema)
const form2 = FDL.create(baseSchema, customizedSchema)
const formData = {}

/* populate data to fields */
form.populate(formData)

/* update field */
form.username = 'Jack Yang'
form.gender = 1
console.log(form.title)   // Mr Jack Yang
console.log(form.prefix)  // Mr

form.prefix.options // [Mr, Ms]

/* form API */
form.populate(formData)

form.validate() // validate form values
form.validate(values) // validate given values

// runtime update form, like make some fields disabled, update cvt, etc
form.update()

form.$method
form.$schema

form.$fields.fieldName  // access form field instance

/* field API */
field.form   // access form instance
field.validate()
field.$schema // to access static schema
field.value

field.options // calculated options, runtime options. different from field.$schema.options

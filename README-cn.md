# TypeJSON

## 分析

一个值是否存在：

- 一定存在：{ _not: undefined }，'nubmer'，[ 'nubmer', 'string' ]
- 一定不存在：undefined
- 可能存在，也可能不存在：'any'（有可能是 undefined，也有可能是其他不确定的值），或 [ undefined, 'nubmer' ] （有可能是 undefined，也有可能是其他确定类型的值）

一个值的类型：JSON 支持的类型

- 一定是某个类型 'nubmer'
- 一定不是某个类型 { _is: 'nubmer', _not: 'string'}
- 可能是某个类型，也可能是其他的类型

## types

types 的属性值为方法，用于判断属性名对应的值的类型。

types 默认包含基础类型，支持自定义扩展。（类似 fieldType 的 render 方法）

方法判断值类型并根据情况给出提示

## schema

用户定义一个 json 的 schema，key 对应 json 的 key，value 是值的类型

value 可以是字符串，也可以是数组，也可以是另外一个 schema

判断时，使用深度优先遍历

- 字符串：直接用 types[value] 判断
- 数组：分别用 types[value[]] 判断
- schema：

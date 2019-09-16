const userSchema = {
  key: 'number',
  name: 'string',
  age: ['number', 'string'],
  start: 'any',
  options: optionsSchema
};

const optionsSchema = {
  beginTime: 'timestamp',
  endTime: 'timestamp'
};

const printMessage = (msg) => console.log(msg);
const greeting = () => console.log('Hello world');
const greetingWithName = (name = 'world') => console.log(`Hello ${name}`);

export {printMessage, greeting, greetingWithName};
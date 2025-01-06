function counter(a = 0) {
  let count = a;

  return (b) => {
    count += b;
    return count;
  };
}

const counter1 = counter();

// console.log(counter1(3));
// console.log(counter1(3));
// console.log(counter1(3));

const object = {
  name: 'Bob',
  age: 30,
};

const arr = [1, 2, 3];

for (const key in object) {
  const element = object[key];
  console.log(element);
}

for (const [key, value] of Object.entries(object)) {
  console.log(key, value);
}

// log 2 (8) = y
// 2^y =  8

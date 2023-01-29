// For Loop

var json = {
  name: "John",
  age: 30,
  city: "New York",
};

for (var key in json) {
  if (json.hasOwnProperty(key)) {
    console.log(key + ": " + json[key]);
  }
}

// For Each Loop

let json3 = { "name": "John", "age": 30, "city": "New York" };
let jsonArray = Object.entries(json3);

jsonArray.forEach(([key, value]) => {
    console.log(key + ": " + value);
});


// For of Loop

let json2 = { "name": "John", "age": 30, "city": "New York" };
for (var element of json2) {
  console.log(element);
}



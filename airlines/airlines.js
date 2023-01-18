let userName = prompt("Welcome to ISDI Coders Airlines, ¿What is your name?");
function welcomeUser() {
  console.log(
    `Welcome, ${userName}\nBelow you will find the available flights:\n`
  );
}

const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function infoScaleFlights() {
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale === false) {
      console.log(
        `The flight #${flights[i].id} from ${flights[i].from} to ${flights[i].to} has a cost of ${flights[i].cost} € and there's no scale.`
      );
    } else {
      console.log(
        `The flight #${flights[i].id} from ${flights[i].from} to ${flights[i].to} has a cost of ${flights[i].cost} € and there's a scale.`
      );
    }
  }
}

function averageCost() {
  let sum = 0;
  for (let i = 0; i < flights.length; i++) {
    sum += flights[i].cost;
  }
  average = sum / flights.length;
  console.log(`\nThe average price of the flights are ${average}€.`);
}

function flightsWithScale() {
  let scaleFlights = 0;
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale === true) {
      scaleFlights++;
    }
  }
  console.log(
    `\nOf the total of ${flights.length} flights, ${scaleFlights} make scale.`
  );
}

function lastFlights() {
  console.log(
    "\nBelow you will find the destinations of today's last 5 flights:\n"
  );
  for (let i = 5; i < flights.length; i++) {
    console.log(flights[i].to);
  }
}

welcomeUser();
infoScaleFlights();
averageCost();
flightsWithScale();
lastFlights();

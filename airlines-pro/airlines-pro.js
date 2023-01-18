let userName = prompt("Welcome to ISDI Coders Airlines! What is your name?");
function welcomeUser() {
  console.log(
    `Welcome, ${userName}\nBelow you will find the available flights:\n`
  );
}
welcomeUser();

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
        `The flight #${flights[i].id} from ${flights[i].from} to ${flights[i].to} has a cost of ${flights[i].cost} € and there's no stopover.`
      );
    } else {
      console.log(
        `The flight #${flights[i].id} from ${flights[i].from} to ${flights[i].to} has a cost of ${flights[i].cost} € and there's a stopover.`
      );
    }
  }
}
infoScaleFlights();

function averageCost() {
  let sum = 0;
  for (let i = 0; i < flights.length; i++) {
    sum += flights[i].cost;
  }
  average = sum / flights.length;
  console.log(`\nThe average price of the flights is ${average}€.`);
}
averageCost();

function flightsWithScale() {
  let scaleFlights = 0;
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale === true) {
      scaleFlights++;
    }
  }
  console.log(
    `\nOut of the total of ${flights.length} flights, ${scaleFlights} make a stopover.`
  );
}
flightsWithScale();

function lastFlights() {
  console.log(
    "\nBelow you will find the destinations of today's last 5 flights:\n"
  );
  for (let i = 5; i < flights.length; i++) {
    console.log(flights[i].to);
  }
}
lastFlights();

function askUser() {
  let userAdmin = prompt("Are you admin or user?");
  if (userAdmin == "admin") {
    let menuAdmin = Number(
      prompt(
        "What would you like to do?\n\n1. Create a flight\n2. Delete a flight\n3. See flights\n4. Back to main menu\n5. Exit"
      )
    );
    if (menuAdmin == 1) {
      crearVuelos();
      askUser();
    } else if (menuAdmin == 2) {
      deleteFlights();
      askUser();
    } else if (menuAdmin == 3) {
      infoScaleFlights();
      askUser();
    } else if (menuAdmin == 4) {
      askUser();
    } else if (menuAdmin == 5) {
      alert(`Have a nice day admin ${userName}!`);
    } else {
      alert("Error! Please choose a correct option");
      askUser();
    }
  } else if (userAdmin == "user") {
    let menuUser = Number(
      prompt(
        "What would you like to do?\n\n1. Search flight by price\n2. See flights\n3. Back to main menu\n4. Exit"
      )
    );
    if (menuUser == 1) {
      filterFlights();
      askUser();
    } else if (menuUser == 2) {
      infoScaleFlights();
      askUser();
    } else if (menuUser == 3) {
      askUser();
    } else if (menuUser == 4) {
      alert(`Have a nice day user ${userName}!`);
    } else {
      alert("Error! Please, choose a correct option");
      askUser();
    }
  } else if (userAdmin !== "admin" || userAdmin !== "user") {
    alert("Please, choose between admin or user!");
    askUser();
  }
}
askUser();

function crearVuelos() {
  const createFlight = {
    id: flights.length,
    to: "",
    from: "",
    cost: "",
    scale: false,
  };
  lastFlightIndex = flights.length - 1;
  if (flights.length === 15) {
    alert("You've reached the maximum number of flights (15)!");
    askUser();
    return;
  }
  do {
    createFlight.to = prompt("Enter the destination city");
  } while (createFlight.to === "" || createFlight.to === null);
  do {
    createFlight.from = prompt("Enter the city of origin");
  } while (createFlight.from === "" || createFlight.from === null);
  do {
    createFlight.cost = Number(prompt("Enter the price of the flight"));
  } while (createFlight.cost === 0 || isNaN(createFlight.cost));

  createFlight.scale = confirm("Does the flight have stopovers?");
  flights.push(createFlight);
  console.log(flights);
}

function filterFlights() {
  costUser = prompt(
    "Enter an amount and we'll show you flights with the same price or lower."
  );
  for (i = 0; i < flights.length; i++) {
    if (flights[i].cost <= costUser && flights[i].scale === false) {
      console.log(
        `The flight #${flights[i].id} from ${flights[i].from} to ${flights[i].to} has a cost of ${flights[i].cost} € and there's no stopover.`
      );
    } else if (flights[i].cost <= costUser && flights[i].scale === true) {
      console.log(
        `The flight #${flights[i].id} from ${flights[i].from} to ${flights[i].to} has a cost of ${flights[i].cost} € and there's a stopover.`
      );
    }
  }
}

function deleteFlights() {
  idFlightToDelete = Number(
    prompt("Enter the number of the flight you want to delete")
  );
  flights.splice(idFlightToDelete, 1).id;
  console.log(flights);
}

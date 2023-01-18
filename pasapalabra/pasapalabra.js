const welcomeUser = () => {
  const askName = prompt(
    "¡Welcome to Pasapalabra game (Spanish version)!\n\n¿What's your name?"
  );
  userName = askName;
  if (askName !== "" || askName !== null) {
    console.log(
      `GAME RULES\n‾‾‾‾‾‾‾‾‾‾\n\n1. One question for each letter of the alphabet.\n2. You have 120 seconds to get the maximum number of questions right.\n3. If you decide to finalize the game, just write END.\n4. Get as many questions right and as few wrong as possible ¡TO WIN THE GAME!!\n\n¿Ready to play Pasapalabra, ${userName}?\n\nClick \"Accept\" to start the game, ¡and good luck!\n\n`
    );
    alert(
      `¡Welcome, ${askName}!\n\nBefore you start, please read the game rules:`
    );
  } else {
    welcomeUser();
  }
};

const questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

const gameTimer = () => {
  const currentDate = new Date();
  const gameTime = 130;
  currentDate.setSeconds(currentDate.getSeconds() + gameTime);
  return currentDate;
};

const timer = gameTimer();

let points = 0;
let errors = 0;
let answeredQuestions = 0;
let stopGame = false;
let stopTime = false;

const pasapalabraGame = () => {
  do {
    for (let i = 0; i < questions.length; i++) {
      const currentTime = new Date();
      if (questions[i].status == 0) {
        const questionToUser = prompt(questions[i].question).toLowerCase();
        userAnswer = questionToUser;
        switch (questionToUser) {
          case questions[i].answer:
            console.log(`¡CORRECT!\n\nNext question`);
            questions[i].status = 1;
            points++;
            answeredQuestions++;
            break;
          case "pasapalabra":
            console.log(`¡PASAMOS PALABRA!\n\nNext question`);
            questions[i].status = 0;
            break;
          case "end":
            stopGame = true;
            break;
          default:
            console.log(
              `Your answer has been: ${userAnswer.toUpperCase()}\n\nThe correct answer is: ${questions[
                i
              ].answer.toUpperCase()}\n\nNext question`
            );
            alert(`¡WRONG ANSWER!`);
            questions[i].status = 2;
            errors++;
            answeredQuestions++;
            break;
        }

        if (stopGame) {
          return;
        }

        console.log(
          `Answered questions: ${answeredQuestions}\nCorrect questions: ${points}\nWrong questions: ${errors}`
        );

        if (currentTime >= timer) {
          stopTime = true;
          return;
        }
      }
    }
  } while (answeredQuestions < 26 && stopGame == false);
};

const finalGame = () => {
  if (points === 26) {
    console.log(
      `¡Congratulations, ${userName}! See below your results.\n\nRESULTS\n‾‾‾‾‾‾‾\n\nAnswered questions: ${answeredQuestions}\nCorrect questions: ${points}\nWrong questions: ${errors}`
    );
    ranking();
    alert("¡YOU'VE WON THE GAME!");
  } else if (stopGame === true) {
    console.log(
      `${userName}, you decided to end the game.\n\nYou got ${answeredQuestions} questions right.`
    );
    alert("¡STOPPED GAME!");
  } else if (stopTime === true) {
    console.log(
      `¡Times up, ${userName}! See below your results.\n\nRESULTS\n‾‾‾‾‾‾‾\n\nAnswered questions: ${answeredQuestions}\nCorrect questions: ${points}\nWrong questions: ${errors}`
    );
    ranking();
    alert("¡TIMES UP!");
  } else {
    console.log(
      `¡Game over, ${userName}! See below your results.\n\nRESULTS\n‾‾‾‾‾‾‾\n\nAnswered questions: ${answeredQuestions}\nCorrect questions: ${points}\nWrong questions: ${errors}`
    );
    alert("¡GAME OVER!");
  }
};

const turns = 0;
const rankingPlayers = [
  { name: "Beatriz", points: Math.floor(Math.random() * 26) },
  { name: "Aaron", points: Math.floor(Math.random() * 26) },
  { name: "Julia", points: Math.floor(Math.random() * 26) },
  { name: "Lorena", points: Math.floor(Math.random() * 26) },
  { name: "Gerard", points: Math.floor(Math.random() * 26) },
];

const ranking = () => {
  rankingPlayers.push({
    name: userName,
    points: answeredQuestions,
  });
  rankingPlayers.sort((a, b) => (a.points < b.points ? 1 : -1));
  for (let i = 0; i < rankingPlayers.length; i++) {
    console.log(rankingPlayers[i]);
  }
};

const main = () => {
  welcomeUser();
  pasapalabraGame();
  finalGame();
};

main();

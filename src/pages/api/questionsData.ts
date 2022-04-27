import { AnswerModel, QuestionModel } from "src/model";

const questionsData: QuestionModel[] = [
  new QuestionModel(101, "What's the biggest animal in the world?", [
    AnswerModel.wrong("Hippopotamus"),
    AnswerModel.wrong("White Rhinoceros"),
    AnswerModel.wrong("African Elephant"),
    AnswerModel.correct("Blue Whale"),
  ]),
  new QuestionModel(102, "Who painted the Mona Lisa?", [
    AnswerModel.wrong("Vincent Van Gogh"),
    AnswerModel.wrong("Michelangelo"),
    AnswerModel.wrong("Claude Monet"),
    AnswerModel.correct("Leonardo da Vinci"),
  ]),
  new QuestionModel(103, "Which planet is closest to the sun?", [
    AnswerModel.wrong("Mars"),
    AnswerModel.wrong("Earth"),
    AnswerModel.wrong("Saturn"),
    AnswerModel.correct("Mercury"),
  ]),
  new QuestionModel(104, "What is the largest country in the world?", [
    AnswerModel.wrong("Canada"),
    AnswerModel.wrong("United States"),
    AnswerModel.wrong("Australia"),
    AnswerModel.correct("Russia"),
  ]),
  new QuestionModel(
    105,
    "In Harry Potter, what is the name of The Weasley's house?",
    [
      AnswerModel.wrong("Hufflepuff"),
      AnswerModel.wrong("Ravenclaw"),
      AnswerModel.wrong("Slytherin"),
      AnswerModel.correct("Gryffindor"),
    ]
  ),
  new QuestionModel(106, "What relationship were Monica and Ross in Friends?", [
    AnswerModel.wrong("Friends"),
    AnswerModel.wrong("Romantic Couple"),
    AnswerModel.wrong("Cousins"),
    AnswerModel.correct("Siblings"),
  ]),
  new QuestionModel(107, "What grain is the Japanese spirit Sake made from?", [
    AnswerModel.wrong("Corn"),
    AnswerModel.wrong("Barley"),
    AnswerModel.wrong("Bean"),
    AnswerModel.correct("Rice"),
  ]),
  new QuestionModel(108, "What is the smallest country in the world?", [
    AnswerModel.wrong("Croatia"),
    AnswerModel.wrong("Switzerland"),
    AnswerModel.wrong("Belgium"),
    AnswerModel.correct("Vatican City"),
  ]),
  new QuestionModel(109, "What is the smallest planet in our solar system?", [
    AnswerModel.wrong("Earth"),
    AnswerModel.wrong("Saturn"),
    AnswerModel.wrong("Neptune"),
    AnswerModel.correct("Mercury"),
  ]),
  new QuestionModel(
    110,
    "How many times has England won the men's football World Cup?",
    [
      AnswerModel.wrong("1x"),
      AnswerModel.wrong("3x"),
      AnswerModel.wrong("4x"),
      AnswerModel.correct("2x"),
    ]
  ),
  new QuestionModel(111, "Name the Coffee shop in US sitcom Friends", [
    AnswerModel.wrong("Luke's Diner"),
    AnswerModel.wrong("Monk's Cafe"),
    AnswerModel.wrong("Karen's Cafe"),
    AnswerModel.correct("Central Perk"),
  ]),
  new QuestionModel(112, "What does 'www' stand for in a website browser?", [
    AnswerModel.wrong("Wireless Wilde Web"),
    AnswerModel.wrong("Wedding Want Wilde"),
    AnswerModel.wrong("World Wish Wellness"),
    AnswerModel.correct("World Wide Web"),
  ]),
  new QuestionModel(
    113,
    "What is the name of the biggest technology company in South Korea?",
    [
      AnswerModel.wrong("Ferrari"),
      AnswerModel.wrong("Volkswagen"),
      AnswerModel.wrong("Apple"),
      AnswerModel.correct("Samsung"),
    ]
  ),
  new QuestionModel(114, "Which animal can be seen on the Porsche logo?", [
    AnswerModel.wrong("Honeybadger"),
    AnswerModel.wrong("Snake"),
    AnswerModel.wrong("Bull"),
    AnswerModel.correct("Horse"),
  ]),
  new QuestionModel(115, "What is the name of the largest ocean on earth?", [
    AnswerModel.wrong("Arctic Ocean"),
    AnswerModel.wrong("Indian Ocean"),
    AnswerModel.wrong("Atlantic Ocean"),
    AnswerModel.correct("Pacific Ocean"),
  ]),
  new QuestionModel(116, "What is the rarest M&M color?", [
    AnswerModel.wrong("Purple"),
    AnswerModel.wrong("Green"),
    AnswerModel.wrong("Blue"),
    AnswerModel.correct("Brown"),
  ]),
  new QuestionModel(117, "Which is the only edible food that never goes bad?", [
    AnswerModel.wrong("Portobello Mushrooms"),
    AnswerModel.wrong("Asparagus"),
    AnswerModel.wrong("Chia Seeds"),
    AnswerModel.correct("Honey"),
  ]),
  new QuestionModel(118, "Which country invented ice cream?", [
    AnswerModel.wrong("Switzerland"),
    AnswerModel.wrong("Germany"),
    AnswerModel.wrong("United States"),
    AnswerModel.correct("China"),
  ]),
  new QuestionModel(119, "Which member of the Beatles married Yoko Ono?", [
    AnswerModel.wrong("Ringo Starr"),
    AnswerModel.wrong("George Harrison"),
    AnswerModel.wrong("Paul McCartney"),
    AnswerModel.correct("John Lennon"),
  ]),
  new QuestionModel(
    120,
    "What famous US festival hosted over 350,000 fans in 1969?",
    [
      AnswerModel.wrong("Burning Man"),
      AnswerModel.wrong("Lollapalooza"),
      AnswerModel.wrong("Coachella"),
      AnswerModel.correct("Woodstock"),
    ]
  ),
  new QuestionModel(
    121,
    "Which country won the first-ever soccer World Cup in 1930?",
    [
      AnswerModel.wrong("Germany"),
      AnswerModel.wrong("England"),
      AnswerModel.wrong("Brazil"),
      AnswerModel.correct("Uruguay"),
    ]
  ),
  new QuestionModel(
    122,
    "In little red riding hood, who does the wolf dress up as?",
    [
      AnswerModel.wrong("Sister"),
      AnswerModel.wrong("Grandfather"),
      AnswerModel.wrong("Mother"),
      AnswerModel.correct("Grandmother"),
    ]
  ),
  new QuestionModel(123, "Who was the first president of the United States?", [
    AnswerModel.wrong("Richard Nixon"),
    AnswerModel.wrong("Ronald Reagan"),
    AnswerModel.wrong("Abraham Lincoln"),
    AnswerModel.correct("George Washington"),
  ]),
  new QuestionModel(
    124,
    "What country is responsible for creating the Olympic Games?",
    [
      AnswerModel.wrong("Canada"),
      AnswerModel.wrong("United States"),
      AnswerModel.wrong("China"),
      AnswerModel.correct("Greece"),
    ]
  ),
  new QuestionModel(125, "What is Earth's largest continent?", [
    AnswerModel.wrong("South America"),
    AnswerModel.wrong("North America"),
    AnswerModel.wrong("Africa"),
    AnswerModel.correct("Asia"),
  ]),
  new QuestionModel(126, "Area 51 is located in which US state?", [
    AnswerModel.wrong("California"),
    AnswerModel.wrong("Texas"),
    AnswerModel.wrong("Florida"),
    AnswerModel.correct("Nevada"),
  ]),
  new QuestionModel(
    127,
    "The name of which African animal means 'river horse'?",
    [
      AnswerModel.wrong("Turtle"),
      AnswerModel.wrong("Dolphin"),
      AnswerModel.wrong("Alligator"),
      AnswerModel.correct("Hippopotamus"),
    ]
  ),
  new QuestionModel(128, "What is the hottest planet in the solar system?", [
    AnswerModel.wrong("Mars"),
    AnswerModel.wrong("Earth"),
    AnswerModel.wrong("Saturn"),
    AnswerModel.correct("Venus"),
  ]),
  new QuestionModel(129, "What is the opposite of matter?", [
    AnswerModel.wrong("Atom"),
    AnswerModel.wrong("Sound"),
    AnswerModel.wrong("Countermatter"),
    AnswerModel.correct("Antimatter"),
  ]),
  new QuestionModel(130, "How many teeth does an adult human have?", [
    AnswerModel.wrong("38"),
    AnswerModel.wrong("30"),
    AnswerModel.wrong("24"),
    AnswerModel.correct("32"),
  ]),
  new QuestionModel(131, "What tissues connect the muscles to the bones?", [
    AnswerModel.wrong("Skin"),
    AnswerModel.wrong("Vains"),
    AnswerModel.wrong("Organs"),
    AnswerModel.correct("Tendons"),
  ]),
  new QuestionModel(132, "Who invented the word 'vomit'?", [
    AnswerModel.wrong("Charles Dickens"),
    AnswerModel.wrong("Michelangelo"),
    AnswerModel.wrong("Stephen King"),
    AnswerModel.correct("William Shakespeare"),
  ]),
  new QuestionModel(133, "What is measured in 'Mickeys'?", [
    AnswerModel.wrong("Amount of Coolness"),
    AnswerModel.wrong("Amount of Beauty"),
    AnswerModel.wrong("Radiation Exposure"),
    AnswerModel.correct("Computer Mouse Speed"),
  ]),
  new QuestionModel(
    134,
    "'.JPG' extension refers usually to what kind of file?",
    [
      AnswerModel.wrong("System File"),
      AnswerModel.wrong("Animation/Movie File"),
      AnswerModel.wrong("MS Encarta Document"),
      AnswerModel.correct("Image File"),
    ]
  ),
  new QuestionModel(135, "'OS' computer abbreviation usually means?", [
    AnswerModel.wrong("Order of Significance"),
    AnswerModel.wrong("Open Software"),
    AnswerModel.wrong("Optical Sensor"),
    AnswerModel.correct("Operating System"),
  ]),
  new QuestionModel(136, "Who was the Ancient Greek God of the Sun?", [
    AnswerModel.wrong("Dionysus"),
    AnswerModel.wrong("Poseidon"),
    AnswerModel.wrong("Zeus"),
    AnswerModel.correct("Apollo"),
  ]),
  new QuestionModel(
    137,
    "'.TXT' extension refers usually to what kind of file?",
    [
      AnswerModel.wrong("Adobe Acrobat File"),
      AnswerModel.wrong("Audio File"),
      AnswerModel.wrong("Image File"),
      AnswerModel.correct("Text File"),
    ]
  ),
  new QuestionModel(
    138,
    "How many ghosts chase Pac-Man at the start of each game?",
    [
      AnswerModel.wrong("5"),
      AnswerModel.wrong("2"),
      AnswerModel.wrong("3"),
      AnswerModel.correct("4"),
    ]
  ),
  new QuestionModel(139, "What city is known as 'The Eternal City'? ", [
    AnswerModel.wrong("Constantinople"),
    AnswerModel.wrong("New York"),
    AnswerModel.wrong("São Paulo"),
    AnswerModel.correct("Rome"),
  ]),
  new QuestionModel(140, "Which planet has the most moons?", [
    AnswerModel.wrong("Pluto"),
    AnswerModel.wrong("Mars"),
    AnswerModel.wrong("Earth"),
    AnswerModel.correct("Saturn"),
  ]),
  new QuestionModel(141, "What country has won the most World Cups?", [
    AnswerModel.wrong("Uruguay"),
    AnswerModel.wrong("England"),
    AnswerModel.wrong("Germany"),
    AnswerModel.correct("Brazil"),
  ]),
  new QuestionModel(
    142,
    "Kratos is the main character of what video game series?",
    [
      AnswerModel.wrong("FIFA"),
      AnswerModel.wrong("Mafia"),
      AnswerModel.wrong("Gran Theft Auto"),
      AnswerModel.correct("God of War"),
    ]
  ),
  new QuestionModel(
    143,
    "In what country is the Chernobyl nuclear plant located?",
    [
      AnswerModel.wrong("North Korea"),
      AnswerModel.wrong("United States"),
      AnswerModel.wrong("Russia"),
      AnswerModel.correct("Ukraine"),
    ]
  ),
  new QuestionModel(144, "What is the slowest animal in the world?", [
    AnswerModel.wrong("Giant Tortoise"),
    AnswerModel.wrong("Starfish"),
    AnswerModel.wrong("Koala Bear"),
    AnswerModel.correct("Three-toed sloth"),
  ]),
  new QuestionModel(
    145,
    "What's the name of the river that runs through Egypt?",
    [
      AnswerModel.wrong("Thames"),
      AnswerModel.wrong("Amazon"),
      AnswerModel.wrong("Ganges"),
      AnswerModel.correct("Nile"),
    ]
  ),
  new QuestionModel(146, "What's the highest mountain in the world?", [
    AnswerModel.wrong("Matterhorn Mountain"),
    AnswerModel.wrong("Mount Kilimanjaro"),
    AnswerModel.wrong("Mount Fuji"),
    AnswerModel.correct("Mount Everest"),
  ]),
  new QuestionModel(147, "What is the name of the fairy in Peter Pan?", [
    AnswerModel.wrong("Mirabel"),
    AnswerModel.wrong("Maleficent"),
    AnswerModel.wrong("Faline"),
    AnswerModel.correct("Tinkerbell"),
  ]),
  new QuestionModel(148, "What's the capital of Spain?", [
    AnswerModel.wrong("Granada"),
    AnswerModel.wrong("Seville"),
    AnswerModel.wrong("Barcelona"),
    AnswerModel.correct("Madrid"),
  ]),
  new QuestionModel(149, "What is the largest muscle in the body?", [
    AnswerModel.wrong("Biceps"),
    AnswerModel.wrong("Latissimus Dorsi"),
    AnswerModel.wrong("Deltoid"),
    AnswerModel.correct("Gluteus maximus"),
  ]),
  new QuestionModel(150, "Who wrote the horror novel It?", [
    AnswerModel.wrong("Anne Rice"),
    AnswerModel.wrong("J. K. Rowling"),
    AnswerModel.wrong("Stan Lee"),
    AnswerModel.correct("Stephen King"),
  ]),
];

export default questionsData;

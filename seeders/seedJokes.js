const sequelize = require("../config/database");
const Joke = require("../models/jokeModel");

// Fonction pour alimenter la base de données avec des blagues (npm run seed)
// Seule les questions non existantes en base seront ajoutées

const seedData = async () => {
  console.log("Démarrage de la seed des blagues...");

  // Liste de 51 blagues
  const jokes = [
    {
      question: "Quelle est la femelle du hamster ?",
      answer: "L'Amsterdam.",
    },
    { question: "Que dit un oignon quand il se cogne ?", answer: "Aïe." },
    {
      question: "Pourquoi le football c'est rigolo ?",
      answer: "Parce que Thierry en rit.",
    },
    {
      question: "Quel est le sport le plus fruité ?",
      answer:
        "La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.",
    },
    {
      question: "Que se fait un Schtroumpf quand il tombe ?",
      answer: "Un Bleu.",
    },
    {
      question: "Quel est le comble pour un marin ?",
      answer: "Avoir le nez qui coule.",
    },
    {
      question: "Qu'est ce que les enfants usent le plus à l'école ?",
      answer: "Le professeur.",
    },
    {
      question: "Quel est le sport le plus silencieux ?",
      answer: "Le para-chuuuut.",
    },
    {
      question: "Quel est le comble pour un joueur de bowling ?",
      answer: "C’est de perdre la boule.",
    },
    {
      question: "Quel métier les chiens peuvent-ils exercer ?",
      answer: "Electrichien !",
    },
    {
      question: "Quel est le point commun entre un pêcheur et un mannequin ?",
      answer: "Ils surveillent leur ligne !",
    },
    {
      question:
        "Pourquoi ne faut-il jamais raconter d'histoires drôles à un ballon ?",
      answer: "Parce qu’il pourrait éclater de rire !",
    },
    {
      question: "Que chante le plombier ?",
      answer: "Un syphon font font les petites clés à molette !",
    },
    {
      question: "Quel est l'animal le plus à la mode ?",
      answer: "La taupe modèle !",
    },
    {
      question: "Que fait une vache avec une radio ?",
      answer: "De la meuhsique !",
    },
    {
      question: "Quelle est l’étoile la plus sale ?",
      answer: "L’étoile d’araignée !",
    },
    { question: "Quelle est la blague à deux balles ?", answer: "Pan Pan !" },
    {
      question:
        "Un sucre tombe amoureux d’une cuillère. Que propose le sucre à la cuillère ?",
      answer: "Nous pourrions peut-être nous rencontrer dans un café ?",
    },
    {
      question: "A combien rouliez-vous ? demande le gendarme.",
      answer:
        "A deux seulement, mais si vous voulez monter, il reste de la place.",
    },
    {
      question: "Pourquoi faut-il se méfier des sirènes au volant ?",
      answer: "Parce qu’elles font des queues de poisson !",
    },
    {
      question: "Quel est le comble pour un professeur de géographie ?",
      answer: "C’est de perdre le nord.",
    },
    {
      question: "Quel animal est sourd ?",
      answer: "Le crapaud, car il fait « coâ, coâ » !",
    },
    {
      question: "Que disent les plongeurs au nouvel an ?",
      answer: "Bonne Apnée !",
    },
    {
      question: "Ce matin, j’ai voulu faire une blague sur le Super U...",
      answer: "… mais elle n’a pas Supermarché !",
    },
    {
      question: "Pourquoi Michaël ouvre la porte ?",
      answer: "Parce que Jack sonne. (Jackson)",
    },
    {
      question: "Quel est le comble d’un juge ?",
      answer: "Manger des avocats.",
    },
    {
      question: "Où trouve-t-on des chats marrants ?",
      answer: "Dans les livres car il y a des chats pitres !",
    },
    {
      question: "Que dit un vitrier à son fils pour qu’il soit sage ?",
      answer: "Tiens-toi à carreaux si tu veux une glace !",
    },
    {
      question: "Pourquoi les indiens d'Amérique ont-ils froid ?",
      answer: "Parce que Christophe Colomb les a découverts.",
    },
    {
      question: "Qu'est-ce qu'une baguette avec une boussole ?",
      answer: "Un pain perdu.",
    },
    {
      question:
        "Qu’est-ce qu’un homme avec une mitraillette dans un champ de blé ?",
      answer: "Un céréale killer.",
    },
    {
      question: "Pourquoi les souris ne jouent jamais aux devinettes ?",
      answer: "Parce qu'elles ne veulent pas donner leur langue au chat.",
    },
    {
      question: "Qu’est-ce qu’un nem avec des écouteurs ?",
      answer: "Un nem P3.",
    },
    {
      question: "Qu'est-ce qu'un bonbon avec une béquille ?",
      answer: "Une sucette.",
    },
    {
      question: "Quel est le comble pour un rugbyman ?",
      answer: "Se faire plaquer.",
    },
    {
      question: "Quel est le comble pour une abeille ?",
      answer: "Partir en lune de miel.",
    },
    {
      question: "Quelle est la différence entre un crocodile et un alligator ?",
      answer: "C’est Caïman la même chose…",
    },
    {
      question: "Que fait une poule qui a de la température ?",
      answer: "Des oeufs durs.",
    },
    {
      question: "Comment appelle-t-on un chat tout terrain ?",
      answer: "Un cat-cat.",
    },
    {
      question: "Quel est le nombre préféré des moustiques ?",
      answer: "Le 100.",
    },
    {
      question: "Quels sont les animaux les plus intelligents ?",
      answer: "Le cerf et le veau.",
    },
    {
      question: "À quoi reconnait-on une baleine bagarreuse ?",
      answer: "C'est une baleine à bosse.",
    },
    {
      question: "Quelle est la profession du soleil ?",
      answer: "Chef de rayons.",
    },
    {
      question: "Que dit un informaticien quand il s’ennuie ?",
      answer: "Je me fichier.",
    },
    {
      question: "Dans la famille Razzi, qui est photographe ?",
      answer: "Le papa Razzi.",
    },
    {
      question: "Dans quel sport est-on toujours d'accord ?",
      answer: "Le hockey.",
    },
    {
      question: "Quel est le sport préféré des chèvres ?",
      answer: "L’aéro-bique.",
    },
    {
      question: "Qu'est-ce qui se sert mais ne se mange pas ?",
      answer: "Une balle de tennis.",
    },
    {
      question: "Quel est le légume le plus explosif ?",
      answer: "La roquette.",
    },
    {
      question:
        "Deux laitues discutent dans un champ. Que se racontent-elles ?",
      answer: "Des salades.",
    },
    {
      question: "Quel est le comble pour un électricien ?",
      answer: "De ne pas être au courant.",
    },
  ];

  let addedCount = 0;

  for (const joke of jokes) {
    const existingJoke = await Joke.findOne({
      where: { question: joke.question },
    });
    if (!existingJoke) {
      await Joke.create(joke);
      addedCount++;
    }
  }
  console.log(`Total de blagues ajoutées : ${addedCount}`);
};

seedData().catch((err) => {
  console.error("Erreur lors de l'insertion des données :", err.message);
});

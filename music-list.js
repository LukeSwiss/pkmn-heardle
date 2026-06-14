// Copy from pkmn-infinite-heardle. To remove tags from pkmn-INFINITE-heardle list : 
// musicNameList.map(m => { return { id: m.id, en: m.en, fr: m.fr } })
var musicNameList = [
  {
    id: 0,
    en: "Opening Movie - Red/Blue",
    fr: "Séquence d'introduction - Rouge/Bleue"
  },
  {
    id: 1,
    en: "Title Screen - Red/Blue",
    fr: "Écran titre - Rouge/Bleue"
  },
  {
    id: 2,
    en: "Pallet Town Theme - Red/Blue",
    fr: "Bourg Palette - Rouge/Bleue"
  },
  {
    id: 3,
    en: "Professor Oak - Red/Blue",
    fr: "Professeur Chen - Rouge/Bleue"
  },
  {
    id: 4,
    en: "Professor Oak's Laboratory - Red/Blue",
    fr: "Labo Pokémon du Prof. Chen - Rouge/Bleue"
  },
  {
    id: 5,
    en: "Rival Appears/Blue's Theme - Red/Blue",
    fr: "Le rival apparaît/Thème de Blue - Rouge/Bleue"
  },
  {
    id: 6,
    en: "Route 1/2 (Road to Viridian City: Leaving Pallet Town)/Underground Path - Red/Blue",
    fr: "Route 1/2 (De Bourg Palette à Jadielle)/Souterrain - Rouge/Bleue"
  },
  {
    id: 7,
    en: "Battle! (Wild Pokémon) - Red/Blue",
    fr: "Combat! (Pokémon sauvage) - Rouge/Bleue"
  },
  {
    id: 8,
    en: "Victory! (Wild Pokémon) - Red/Blue",
    fr: "Victoire! (Pokémon sauvage) - Rouge/Bleue"
  },
  {
    id: 9,
    en: "Pewter City/Viridian City/Saffron City Theme - Red/Blue",
    fr: "Argenta/Jadielle/Safrania - Rouge/Bleue"
  },
  {
    id: 10,
    en: "Pokémon Center - Red/Blue",
    fr: "Centre Pokémon - Rouge/Bleue"
  },
  {
    id: 11,
    en: "Viridian Forest/Diglett's Cave/Seafoam Islands - Red/Blue",
    fr: "Forêt de Jade/Cave Taupiqueur/Îles Écume - Rouge/Bleue"
  },
  {
    id: 12,
    en: "Guide - Red/Blue",
    fr: "Guide - Rouge/Bleue"
  },
  {
    id: 13,
    en: "Trainers' Eyes Meet (Girl) - Red/Blue",
    fr: "Rencontre avec un Dresseur (Fille) - Rouge/Bleue"
  },
  {
    id: 14,
    en: "Battle! (Trainer Battle) - Red/Blue",
    fr: "Combat! (Combat de Dresseur) - Rouge/Bleue"
  },
  {
    id: 15,
    en: "Victory! (Trainer Battle) - Red/Blue",
    fr: "Victoire! (Combat de Dresseur) - Rouge/Bleue"
  },
  {
    id: 16,
    en: "Caves of Mt. Moon/Rock Tunnel/Victory Road - Red/Blue",
    fr: "Mont Sélénite/Grotte/Route Victoire - Rouge/Bleue"
  },
  {
    id: 17,
    en: "Route 3/4/5/6/7/8/9/10/16/17/18/19/20/21/22 (Road to Cerulean City: Leaving Mt. Moon) - Red/Blue",
    fr: "Route 3/4/5/6/7/8/9/10/16/17/18/19/20/21/22 (Du Mont Sélénite à Azuria) - Rouge/Bleue"
  },
  {
    id: 18,
    en: "Cerulean City/Fuchsia City Theme - Red/Blue",
    fr: "Azuria/Parmanie - Rouge/Bleue"
  },
  {
    id: 19,
    en: "Pokémon Gym - Red/Blue",
    fr: "Arène Pokémon - Rouge/Bleue"
  },
  {
    id: 20,
    en: "Route 24/25 (To Bill: Leaving Cerulean City)/Welcome to the World of Pokémon! - Red/Blue",
    fr: "Route 24/25 (D'Azuria à la maison de Léo)/Bienvenue dans le monde des Pokémon ! - Rouge/Bleue"
  },
  {
    id: 21,
    en: "Vermilion City Theme - Red/Blue",
    fr: "Carmin sur Mer - Rouge/Bleue"
  },
  {
    id: 22,
    en: "The S.S. Anne - Red/Blue",
    fr: "L'Océane - Rouge/Bleue"
  },
  {
    id: 23,
    en: "Route 11/12/13/14/15 (Road to Lavender Town: Leaving Vermilion City) - Red/Blue",
    fr: "Route 11/12/13/14/15 (De Carmin sur Mer à Lavanville) - Rouge/Bleue"
  },
  {
    id: 24,
    en: "Trainers' Eyes Meet (Boy) - Red/Blue",
    fr: "Rencontre avec un Dresseur (Garçon) - Rouge/Bleue"
  },
  {
    id: 25,
    en: "Battle! (Gym Leader Battle) - Red/Blue",
    fr: "Combat! (Champion d'Arène) - Rouge/Bleue"
  },
  {
    id: 26,
    en: "Victory! (Gym Leader Battle) - Red/Blue",
    fr: "Victoire! (Champion d'Arène) - Rouge/Bleue"
  },
  {
    id: 27,
    en: "Bicycle - Red/Blue",
    fr: "Bicyclette - Rouge/Bleue"
  },
  {
    id: 28,
    en: "Lavender Town Theme - Red/Blue",
    fr: "Lavanville - Rouge/Bleue"
  },
  {
    id: 29,
    en: "Pokémon Tower - Red/Blue",
    fr: "Tour Pokémon - Rouge/Bleue"
  },
  {
    id: 30,
    en: "Celadon City Theme - Red/Blue",
    fr: "Céladopole - Rouge/Bleue"
  },
  {
    id: 31,
    en: "Rocket Game Corner - Red/Blue",
    fr: "Casino Rocket - Rouge/Bleue"
  },
  {
    id: 32,
    en: "Trainers' Eyes Meet (Bad Guy (Team Rocket/Gambler/Juggler/Rocker/Scientist)) - Red/Blue",
    fr: "Rencontre avec un Dresseur (Version méchant(Team Rocket/Croupier/Jongleur/Rocker/Scientifique)) - Rouge/Bleue"
  },
  {
    id: 33,
    en: "Team Rocket Hideout/Abandoned Power Plant/Cerulean Cave - Red/Blue",
    fr: "Repaire Rocket/Centrale/Grotte Inconnue (Caverne Azurée) - Rouge/Bleue"
  },
  {
    id: 34,
    en: "Silph Co. - Red/Blue",
    fr: "Sylphe SARL - Rouge/Bleue"
  },
  {
    id: 35,
    en: "Surf - Red/Blue",
    fr: "Surf - Rouge/Bleue"
  },
  {
    id: 36,
    en: "Cinnabar Island Theme - Red/Blue",
    fr: "Cramois'Île - Rouge/Bleue"
  },
  {
    id: 37,
    en: "Pokémon Mansion - Red/Blue",
    fr: "Manoir Pokémon - Rouge/Bleue"
  },
  {
    id: 38,
    en: "Evolution/Safari Zone - Red/Blue",
    fr: "Évolution/Parc Safari - Rouge/Bleue"
  },
  {
    id: 39,
    en: "Route 23/Indigo Plateau - Red/Blue",
    fr: "Route 23/Plateau Indigo - Rouge/Bleue"
  },
  {
    id: 40,
    en: "Final Battle! (Rival Blue/Champion) - Red/Blue",
    fr: "Combat final! (Rival Blue/Maître) - Rouge/Bleue"
  },
  {
    id: 41,
    en: "Hall of Fame - Red/Blue",
    fr: "Panthéon - Rouge/Bleue"
  },
  {
    id: 42,
    en: "Ending Theme - Red/Blue",
    fr: "Générique de fin - Rouge/Bleue"
  },
  {
    id: 43,
    en: "Opening Movie - Yellow",
    fr: "Séquence d'introduction - Jaune"
  },
  {
    id: 44,
    en: "Theme of Jessie and James - Yellow",
    fr: "Thème de Jessie et James - Jaune"
  },
  {
    id: 45,
    en: "Pikachu's Beach - Yellow",
    fr: "Plage de Pikachu - Jaune"
  },
  {
    id: 46,
    en: "Opening Movie - Gold/Silver",
    fr: "Séquence d'introduction - Or/Argent"
  },
  {
    id: 47,
    en: "Title Screen (Pokémon Gold & Pokémon Silver) - Gold/Silver",
    fr: "Écran titre (Pokémon Or & Pokémon Argent) - Or/Argent"
  },
  {
    id: 48,
    en: "An Adventure Begins - Gold/Silver",
    fr: "L'aventure commence - Or/Argent"
  },
  {
    id: 49,
    en: "New Bark Town - Gold/Silver",
    fr: "Bourg Geon - Or/Argent"
  },
  {
    id: 50,
    en: "Hurry Along - Gold/Silver",
    fr: "En route! - Or/Argent"
  },
  {
    id: 51,
    en: "Elm Pokémon Lab - Gold/Silver",
    fr: "Laboratoire du Professeur Orme - Or/Argent"
  },
  {
    id: 52,
    en: "Route 29 - Gold/Silver",
    fr: "Route 29 - Or/Argent"
  },
  {
    id: 53,
    en: "Battle! (Wild Pokémon—Johto Version) (Day) - Gold/Silver",
    fr: "Combat! (Pokémon sauvage—Version Johto) (Jour) - Or/Argent"
  },
  {
    id: 54,
    en: "Victory! (Wild Pokémon) - Gold/Silver",
    fr: "Victoire! (Pokémon sauvage) - Or/Argent"
  },
  {
    id: 55,
    en: "Cherrygrove City/Mahogany Town - Gold/Silver",
    fr: "Ville Griotte/Acajou - Or/Argent"
  },
  {
    id: 56,
    en: "Hurry Along 2 - Gold/Silver",
    fr: "En route! 2 - Or/Argent"
  },
  {
    id: 57,
    en: "Pokémon Center - Gold/Silver",
    fr: "Centre Pokémon - Or/Argent"
  },
  {
    id: 58,
    en: "Trainers' Eyes Meet (Boy 1) - Gold/Silver",
    fr: "Rencontre avec un Dresseur (Garçon 1) - Or/Argent"
  },
  {
    id: 59,
    en: "Battle! (Trainer Battle—Johto Version) - Gold/Silver",
    fr: "Combat! (Combat de Dresseur—Version Johto) - Or/Argent"
  },
  {
    id: 60,
    en: "Victory! (Trainer Battle) - Gold/Silver",
    fr: "Victoire! (Combat de Dresseur) - Or/Argent"
  },
  {
    id: 61,
    en: "Route 30/31/32/33 - Gold/Silver",
    fr: "Route 30/31/32/33 - Or/Argent"
  },
  {
    id: 62,
    en: "Violet City/Olivine City - Gold/Silver",
    fr: "Mauville/Oliville - Or/Argent"
  },
  {
    id: 63,
    en: "Sprout Tower - Gold/Silver",
    fr: "Tour Chétiflor - Or/Argent"
  },
  {
    id: 64,
    en: "Trainers' Eyes Meet (Sage) - Gold/Silver",
    fr: "Rencontre avec un Dresseur (Sage) - Or/Argent"
  },
  {
    id: 65,
    en: "Union Cave/Ilex Forest/Whirl Islands/Mt. Mortar/Tohjo Falls - Gold/Silver",
    fr: "Caves Jumelles/Bois aux Chênes/Tourb'Îles/Mont Creuset/Chutes Tohjo - Or/Argent"
  },
  {
    id: 66,
    en: "Ruins of Alph - Gold/Silver",
    fr: "Ruines d'Alpha - Or/Argent"
  },
  {
    id: 67,
    en: "Azalea Town/Blackthorn City - Gold/Silver",
    fr: "Écorcia/Ébènelle - Or/Argent"
  },
  {
    id: 68,
    en: "Trainers' Eyes Meet (Team Rocket) - Gold/Silver",
    fr: "Rencontre avec un Dresseur (Team Rocket) - Or/Argent"
  },
  {
    id: 69,
    en: "Battle! (Team Rocket) - Gold/Silver",
    fr: "Combat! (Team Rocket) - Or/Argent"
  },
  {
    id: 70,
    en: "Route 34/35/36/37/40/41/45/46 - Gold/Silver",
    fr: "Route 34/35/36/37/40/41/45/46 - Or/Argent"
  },
  {
    id: 71,
    en: "A Rival Appears!/Silver's Theme - Gold/Silver",
    fr: "Le rival apparaît!/Thème de Silver - Or/Argent"
  },
  {
    id: 72,
    en: "Battle! (Rival Silver) - Gold/Silver",
    fr: "Combat! (Rival Silver) - Or/Argent"
  },
  {
    id: 73,
    en: "Evolution - Gold/Silver",
    fr: "Évolution - Or/Argent"
  },
  {
    id: 74,
    en: "Goldenrod City - Gold/Silver",
    fr: "Doublonville - Or/Argent"
  },
  {
    id: 75,
    en: "Pokémon Gym - Gold/Silver",
    fr: "Arène Pokémon - Or/Argent"
  },
  {
    id: 76,
    en: "Battle! (Gym Leader—Johto Version) - Gold/Silver",
    fr: "Combat! (Champion d'Arène—Version Johto) - Or/Argent"
  },
  {
    id: 77,
    en: "Victory! (Gym Leader) - Gold/Silver",
    fr: "Victoire! (Champion d'Arène) - Or/Argent"
  },
  {
    id: 78,
    en: "Goldenrod Game Corner - Gold/Silver",
    fr: "Casino de Doublonville - Or/Argent"
  },
  {
    id: 79,
    en: "Bicycle - Gold/Silver",
    fr: "Bicyclette - Or/Argent"
  },
  {
    id: 80,
    en: "Trainers' Eyes Meet (Girl 1) - Gold/Silver",
    fr: "Rencontre avec un Dresseur (Fille 1) - Or/Argent"
  },
  {
    id: 81,
    en: "National Park - Gold/Silver",
    fr: "Parc Naturel - Or/Argent"
  },
  {
    id: 82,
    en: "The Bug-Catching Contest Begins! - Gold/Silver",
    fr: "Le Concours de Capture d'insecte Commence! - Or/Argent"
  },
  {
    id: 83,
    en: "The Bug-Catching Contest - Gold/Silver",
    fr: "Le Concours de Capture d'insecte - Or/Argent"
  },
  {
    id: 84,
    en: "Ecruteak City/Cianwood City - Gold/Silver",
    fr: "Rosalia/Irisia - Or/Argent"
  },
  {
    id: 85,
    en: "Ecruteak Dance Theater - Gold/Silver",
    fr: "Salle de Danse de Rosalia - Or/Argent"
  },
  {
    id: 86,
    en: "Trainers' Eyes Meet (Kimono Girl) - Gold/Silver",
    fr: "Rencontre avec un Dresseur (Kimono) - Or/Argent"
  },
  {
    id: 87,
    en: "Burned Tower - Gold/Silver",
    fr: "Tour Cendrée - Or/Argent"
  },
  {
    id: 88,
    en: "Route 38/39 - Gold/Silver",
    fr: "Route 38/39 - Or/Argent"
  },
  {
    id: 89,
    en: "Battle! (Wild Pokémon—Johto Version) (Night) - Gold/Silver",
    fr: "Combat! (Pokémon sauvage—Version Johto) (Nuit) - Or/Argent"
  },
  {
    id: 90,
    en: "Olivine Lighthouse/Silver Cave - Gold/Silver",
    fr: "Phare d'Oliville/Mont Argent - Or/Argent"
  },
  {
    id: 91,
    en: "Surf - Gold/Silver",
    fr: "Surf - Or/Argent"
  },
  {
    id: 92,
    en: "Route 42/43/44/Lake of Rage - Gold/Silver",
    fr: "Route 42/43/44/Lac Colère - Or/Argent"
  },
  {
    id: 93,
    en: "Team Rocket HQ - Gold/Silver",
    fr: "Repaire Rocket - Or/Argent"
  },
  {
    id: 94,
    en: "Trainers' Eyes Meet (Suspicious Person 1) - Gold/Silver",
    fr: "Rencontre avec un Dresseur (Personne louche 1) - Or/Argent"
  },
  {
    id: 95,
    en: "A Rival Appears!/Silver's Theme (Version 2) - Gold/Silver",
    fr: "Le rival apparaît!/Thème de Silver (Version 2) - Or/Argent"
  },
  {
    id: 96,
    en: "Radio Tower Occupied! - Gold/Silver",
    fr: "La Tour Radio est occupée! - Or/Argent"
  },
  {
    id: 97,
    en: "Tin Tower - Gold/Silver",
    fr: "Tour Ferraille - Or/Argent"
  },
  {
    id: 98,
    en: "Ice Path/Dark Cave/Slowpoke Well - Gold/Silver",
    fr: "Route de Glace/Antre Noire/Puits Ramoloss - Or/Argent"
  },
  {
    id: 99,
    en: "Dragon's Den - Gold/Silver",
    fr: "Antre du Dragon - Or/Argent"
  },
  {
    id: 100,
    en: "Route 26/27 - Gold/Silver",
    fr: "Route 26/27 - Or/Argent"
  },
  {
    id: 101,
    en: "S.S. Aqua - Gold/Silver",
    fr: "L'Aquaria - Or/Argent"
  },
  {
    id: 102,
    en: "Vermilion City - Gold/Silver",
    fr: "Carmin sur Mer - Or/Argent"
  },
  {
    id: 103,
    en: "Battle! (Gym Leader—Kanto Version) - Gold/Silver",
    fr: "Combat! (Champion d'Arène—Version Kanto) - Or/Argent"
  },
  {
    id: 104,
    en: "Lavender Town - Gold/Silver",
    fr: "Lavanville - Or/Argent"
  },
  {
    id: 105,
    en: "Rock Tunnel/Diglett's Cave/Underground Path/Mt. Moon - Gold/Silver",
    fr: "Grotte/Cave Taupiqueur/Souterrain/Mont Sélénite - Or/Argent"
  },
  {
    id: 106,
    en: "Battle! (Wild Pokémon—Kanto Version) - Gold/Silver",
    fr: "Combat! (Pokémon sauvage—Version Kanto) - Or/Argent"
  },
  {
    id: 107,
    en: "Celadon City/Fuchsia City - Gold/Silver",
    fr: "Céladopole/Parmanie - Or/Argent"
  },
  {
    id: 108,
    en: "Route 11/12/13/14/15 - Gold/Silver",
    fr: "Route 11/12/13/14/15 - Or/Argent"
  },
  {
    id: 109,
    en: "Route 2 (Viridian Forest) - Gold/Silver",
    fr: "Route 2 (Forêt de Jade) - Or/Argent"
  },
  {
    id: 110,
    en: "Trainers' Eyes Meet (Boy 2) - Gold/Silver",
    fr: "Rencontre avec un Dresseur (Garçon 2) - Or/Argent"
  },
  {
    id: 111,
    en: "Pewter City/Viridian City/Saffron City/Cerulean City/Cinnabar Island - Gold/Silver",
    fr: "Argenta/Jadielle/Safrania/Azuria/Cramois'Île - Or/Argent"
  },
  {
    id: 112,
    en: "Route 3/4/5/6/7/8/9/10/16/17/18/19/20/21/22/24/25 - Gold/Silver",
    fr: "Route 3/4/5/6/7/8/9/10/16/17/18/19/20/21/22/24/25 - Or/Argent"
  },
  {
    id: 113,
    en: "Trainers' Eyes Meet (Suspicious Person 2) - Gold/Silver",
    fr: "Rencontre avec un Dresseur (Personne louche 2) - Or/Argent"
  },
  {
    id: 114,
    en: "Mt. Moon Square/Clefairy Dance - Gold/Silver",
    fr: "Square du Mont Sélénite/Danse des Mélofée - Or/Argent"
  },
  {
    id: 115,
    en: "Route 1 - Gold/Silver",
    fr: "Route 1 - Or/Argent"
  },
  {
    id: 116,
    en: "Pallet Town - Gold/Silver",
    fr: "Bourg Palette - Or/Argent"
  },
  {
    id: 117,
    en: "Professor Oak - Gold/Silver",
    fr: "Professeur Chen - Or/Argent"
  },
  {
    id: 118,
    en: "Trainers' Eyes Meet (Girl 2) - Gold/Silver",
    fr: "Rencontre avec un Dresseur (Fille 2) - Or/Argent"
  },
  {
    id: 119,
    en: "Battle! (Trainer Battle—Kanto Version) - Gold/Silver",
    fr: "Combat! (Combat de Dresseur—Version Kanto) - Or/Argent"
  },
  {
    id: 120,
    en: "Pokégear Radio: \"Unown\" - Gold/Silver",
    fr: "Radio Pokématos: \"Zarbi\" - Or/Argent"
  },
  {
    id: 121,
    en: "Pokégear Radio: \"Pokémon March\" - Gold/Silver",
    fr: "Radio Pokématos: \"Fanfare Pokémon\" - Or/Argent"
  },
  {
    id: 122,
    en: "Pokégear Radio: \"Pokémon Lullaby\" - Gold/Silver",
    fr: "Radio Pokématos: \"Berceuse Pokémon\" - Or/Argent"
  },
  {
    id: 123,
    en: "Pokégear Radio: \"Pokémon Flute\" - Gold/Silver",
    fr: "Radio Pokématos: \"Poké Flûte\" - Or/Argent"
  },
  {
    id: 124,
    en: "Pokégear Radio: \"Professor Oak's Pokémon Lecture\"/Professor Oak's Laboratory - Gold/Silver",
    fr: "Radio Pokématos: \"Chronique PKMN Chen\"/Labo Pokémon de Chen - Or/Argent"
  },
  {
    id: 125,
    en: "Game Boy Printer (Printer Error) - Gold/Silver",
    fr: "Game Boy Printer - Or/Argent"
  },
  {
    id: 126,
    en: "Victory Road - Gold/Silver",
    fr: "Route Victoire - Or/Argent"
  },
  {
    id: 127,
    en: "The Pokémon League/Indigo Plateau/Route 23/Route 28/Mt. Silver - Gold/Silver",
    fr: "Ligue Pokémon/Plateau Indigo/Route 23/Route 28/Grotte Argentée - Or/Argent"
  },
  {
    id: 128,
    en: "Battle! (Champion Lance) - Gold/Silver",
    fr: "Combat! (Maître Peter) - Or/Argent"
  },
  {
    id: 129,
    en: "The Hall of Fame - Gold/Silver",
    fr: "Panthéon - Or/Argent"
  },
  {
    id: 130,
    en: "Ending Theme - Gold/Silver",
    fr: "Générique de fin - Or/Argent"
  },
  {
    id: 131,
    en: "The End - Gold/Silver",
    fr: "Fin - Or/Argent"
  },
  {
    id: 132,
    en: "Opening Movie - Crystal",
    fr: "Séquence d'introduction - Cristal"
  },
  {
    id: 133,
    en: "Title Screen - Crystal",
    fr: "Écran titre - Cristal"
  },
  {
    id: 134,
    en: "Pokégear Radio: \"Buena's Password\" - Crystal",
    fr: "Radio Pokématos: \"Le Mot de Passe de Buena\" - Cristal"
  },
  {
    id: 135,
    en: "Eusine - Crystal",
    fr: "Eusine - Cristal"
  },
  {
    id: 136,
    en: "Battle Tower Reception Desk - Crystal",
    fr: "Tour de Combat (Réception) - Cristal"
  },
  {
    id: 137,
    en: "Battle Tower - Crystal",
    fr: "Tour de Combat - Cristal"
  },
  {
    id: 138,
    en: "Battle! (Suicune) - Crystal",
    fr: "Combat! (Suicune) - Cristal"
  },
  {
    id: 139,
    en: "Pokémon Communications Center - Crystal",
    fr: "Pokémon Communications Center - Cristal"
  },
  {
    id: 140,
    en: "Clair - Crystal",
    fr: "Sandra - Cristal"
  },
  {
    id: 141,
    en: "Pokémon Mobile System Menu - Crystal",
    fr: "Pokémon Mobile System Menu - Cristal"
  },
  {
    id: 142,
    en: "Pokémon Mobile System - Crystal",
    fr: "Pokémon Mobile System - Cristal"
  },
  {
    id: 143,
    en: "Opening Movie: Setting out on a Journey in the Hoenn Region - Ruby/Sapphire",
    fr: "Séquence d'introduction: Une aventure commence à Hoenn - Rubis/Saphir"
  },
  {
    id: 144,
    en: "Title Screen: Main Theme - Ruby/Sapphire",
    fr: "Écran titre: Thème principal - Rubis/Saphir"
  },
  {
    id: 145,
    en: "Introductions/Route 122/Route 123 - Ruby/Sapphire",
    fr: "Présentations/Route 122/Route 123 - Rubis/Saphir"
  },
  {
    id: 146,
    en: "Littleroot Town - Ruby/Sapphire",
    fr: "Bourg-en-Vol - Rubis/Saphir"
  },
  {
    id: 147,
    en: "Birch Pokémon Lab - Ruby/Sapphire",
    fr: "Laboratoire du Professeur Seko - Rubis/Saphir"
  },
  {
    id: 148,
    en: "May - Ruby/Sapphire",
    fr: "Flora - Rubis/Saphir"
  },
  {
    id: 149,
    en: "H-Help Me! - Ruby/Sapphire",
    fr: "À l'aide! - Rubis/Saphir"
  },
  {
    id: 150,
    en: "Battle! (Wild Pokémon) - Ruby/Sapphire",
    fr: "Combat! (Pokémon sauvage) - Rubis/Saphir"
  },
  {
    id: 151,
    en: "Victory! (Wild Pokémon) - Ruby/Sapphire",
    fr: "Victoire! (Pokémon sauvage) - Rubis/Saphir"
  },
  {
    id: 152,
    en: "Route 101/102/103 - Ruby/Sapphire",
    fr: "Route 101/102/103 - Rubis/Saphir"
  },
  {
    id: 153,
    en: "Oldale Town/Lavaridge Town - Ruby/Sapphire",
    fr: "Rosyères/Vermilava - Rubis/Saphir"
  },
  {
    id: 154,
    en: "Pokémon Center - Ruby/Sapphire",
    fr: "Centre Pokémon - Rubis/Saphir"
  },
  {
    id: 155,
    en: "Trainers' Eyes Meet (Youngster) - Ruby/Sapphire",
    fr: "Rencontre avec un Dresseur (Gamin) - Rubis/Saphir"
  },
  {
    id: 156,
    en: "Trainers' Eyes Meet (Lass) - Ruby/Sapphire",
    fr: "Rencontre avec un Dresseur (Fillette) - Rubis/Saphir"
  },
  {
    id: 157,
    en: "Battle! (Trainer Battle) - Ruby/Sapphire",
    fr: "Combat! (Combat de Dresseur) - Rubis/Saphir"
  },
  {
    id: 158,
    en: "Victory! (Trainer Battle) - Ruby/Sapphire",
    fr: "Victoire! (Combat de Dresseur) - Rubis/Saphir"
  },
  {
    id: 159,
    en: "Petalburg City - Ruby/Sapphire",
    fr: "Clémenti-Ville - Rubis/Saphir"
  },
  {
    id: 160,
    en: "Hurry Along - Ruby/Sapphire",
    fr: "En route! - Rubis/Saphir"
  },
  {
    id: 161,
    en: "Route 104/105/106/107/108/109/115/116 - Ruby/Sapphire",
    fr: "Route 104/105/106/107/108/109/115/116 - Rubis/Saphir"
  },
  {
    id: 162,
    en: "Petalburg Woods/Rusturf Tunnel/Granite Cave/Fiery Path/Jagged Pass - Ruby/Sapphire",
    fr: "Bois Clémenti/Tunnel Mérazon/Grotte Granite/Chemin Ardent/Sentier Sinuroc - Rubis/Saphir"
  },
  {
    id: 163,
    en: "Team Magma Appears! - Ruby/Sapphire",
    fr: "La Team Magma Apparaît! - Rubis/Saphir"
  },
  {
    id: 164,
    en: "Battle! (Team Aqua/Team Magma) - Ruby/Sapphire",
    fr: "Combat! (Team Aqua/Team Magma) - Rubis/Saphir"
  },
  {
    id: 165,
    en: "Victory! (Team Aqua/Team Magma) - Ruby/Sapphire",
    fr: "Victoire! (Team Aqua/Team Magma) - Rubis/Saphir"
  },
  {
    id: 166,
    en: "Rustboro City/Mauville City/Mossdeep City - Ruby/Sapphire",
    fr: "Mérouville/Lavandia/Algatia - Rubis/Saphir"
  },
  {
    id: 167,
    en: "Trainers' School - Ruby/Sapphire",
    fr: "École de Dresseurs - Rubis/Saphir"
  },
  {
    id: 168,
    en: "Crossing the Sea - Ruby/Sapphire",
    fr: "La mer et au-delà - Rubis/Saphir"
  },
  {
    id: 169,
    en: "Dewford Town - Ruby/Sapphire",
    fr: "Village Myokara - Rubis/Saphir"
  },
  {
    id: 170,
    en: "Trainers' Eyes Meet (Tuber) - Ruby/Sapphire",
    fr: "Rencontre avec un Dresseur (Flotteur) - Rubis/Saphir"
  },
  {
    id: 171,
    en: "Slateport City - Ruby/Sapphire",
    fr: "Poivressel - Rubis/Saphir"
  },
  {
    id: 172,
    en: "Oceanic Museum - Ruby/Sapphire",
    fr: "Musée Océanographique - Rubis/Saphir"
  },
  {
    id: 173,
    en: "Route 110/111/112/114/117/118 (West) - Ruby/Sapphire",
    fr: "Route 110/111/112/114/117/118 (Ouest) - Rubis/Saphir"
  },
  {
    id: 174,
    en: "Bicycle - Ruby/Sapphire",
    fr: "Bicyclette - Rubis/Saphir"
  },
  {
    id: 175,
    en: "Game Corner - Ruby/Sapphire",
    fr: "Casino - Rubis/Saphir"
  },
  {
    id: 176,
    en: "Reel Time - Ruby/Sapphire",
    fr: "Reel Time - Rubis/Saphir"
  },
  {
    id: 177,
    en: "Verdanturf Town - Ruby/Sapphire",
    fr: "Vergazon - Rubis/Saphir"
  },
  {
    id: 178,
    en: "Route 113 - Ruby/Sapphire",
    fr: "Route 113 - Rubis/Saphir"
  },
  {
    id: 179,
    en: "Trainers' Eyes Meet (Twins) - Ruby/Sapphire",
    fr: "Rencontre avec un Dresseur (Jumelles) - Rubis/Saphir"
  },
  {
    id: 180,
    en: "Fallarbor Town - Ruby/Sapphire",
    fr: "Autequia - Rubis/Saphir"
  },
  {
    id: 181,
    en: "Mt. Chimney/Seafloor Cavern/Sky Pillar - Ruby/Sapphire",
    fr: "Mont Chimnée/Caverne Fondmer/Pilier Céleste - Rubis/Saphir"
  },
  {
    id: 182,
    en: "Trainers' Eyes Meet (Hiker) - Ruby/Sapphire",
    fr: "Rencontre avec un Dresseur (Montagnard) - Rubis/Saphir"
  },
  {
    id: 183,
    en: "Route 111 (Desert) - Ruby/Sapphire",
    fr: "Route 111 (Désert) - Rubis/Saphir"
  },
  {
    id: 184,
    en: "Pokémon Gym - Ruby/Sapphire",
    fr: "Arène Pokémon - Rubis/Saphir"
  },
  {
    id: 185,
    en: "Battle! (Gym Leader) - Ruby/Sapphire",
    fr: "Combat! (Champion d'Arène) - Rubis/Saphir"
  },
  {
    id: 186,
    en: "Victory! (Gym Leader) - Ruby/Sapphire",
    fr: "Victoire! (Champion d'Arène) - Rubis/Saphir"
  },
  {
    id: 187,
    en: "Surf - Ruby/Sapphire",
    fr: "Surf - Rubis/Saphir"
  },
  {
    id: 188,
    en: "Route 119/118 (East)/130/131/132/133/134 - Ruby/Sapphire",
    fr: "Route 119/118 (Est)/130/131/132/133/134 - Rubis/Saphir"
  },
  {
    id: 189,
    en: "Fortree City - Ruby/Sapphire",
    fr: "Cimetronelle - Rubis/Saphir"
  },
  {
    id: 190,
    en: "Route 120/121/124/125/126/127/128 - Ruby/Sapphire",
    fr: "Route 120/121/124/125/126/127/128 - Rubis/Saphir"
  },
  {
    id: 191,
    en: "Interviewers - Ruby/Sapphire",
    fr: "Journalistes - Rubis/Saphir"
  },
  {
    id: 192,
    en: "Safari Zone - Ruby/Sapphire",
    fr: "Parc Safari - Rubis/Saphir"
  },
  {
    id: 193,
    en: "Trainers' Eyes Meet (Gentleman) - Ruby/Sapphire",
    fr: "Rencontre avec un Dresseur (Gentleman) - Rubis/Saphir"
  },
  {
    id: 194,
    en: "Lilycove City/Pacifidlog City - Ruby/Sapphire",
    fr: "Nénucrique/Pacifiville - Rubis/Saphir"
  },
  {
    id: 195,
    en: "Lilycove Art Museum - Ruby/Sapphire",
    fr: "Musée Nénucrique - Rubis/Saphir"
  },
  {
    id: 196,
    en: "Brendan - Ruby/Sapphire",
    fr: "Brice - Rubis/Saphir"
  },
  {
    id: 197,
    en: "Battle! (Brendan/May) - Ruby/Sapphire",
    fr: "Combat! (Brice/Flora) - Rubis/Saphir"
  },
  {
    id: 198,
    en: "Evolution - Ruby/Sapphire",
    fr: "Évolution - Rubis/Saphir"
  },
  {
    id: 199,
    en: "Poké Mart - Ruby/Sapphire",
    fr: "Boutique Pokémon - Rubis/Saphir"
  },
  {
    id: 200,
    en: "Mt. Pyre/Shoal Cave/New Mauville - Ruby/Sapphire",
    fr: "Mont Mémoria/Grotte Tréfonds/New Lavandia - Rubis/Saphir"
  },
  {
    id: 201,
    en: "Trainers' Eyes Meet (Psychic) - Ruby/Sapphire",
    fr: "Rencontre avec un Dresseur (Kinésiste) - Rubis/Saphir"
  },
  {
    id: 202,
    en: "Trainers' Eyes Meet (Hex Maniac) - Ruby/Sapphire",
    fr: "Rencontre avec un Dresseur (Mystimaniac) - Rubis/Saphir"
  },
  {
    id: 203,
    en: "Mt. Pyre Exterior - Ruby/Sapphire",
    fr: "Mont Mémoria (extérieur) - Rubis/Saphir"
  },
  {
    id: 204,
    en: "Magma & Aqua Hideout - Ruby/Sapphire",
    fr: "Planque Magma & Aqua - Rubis/Saphir"
  },
  {
    id: 205,
    en: "Team Aqua Appears! - Ruby/Sapphire",
    fr: "La Team Aqua apparaît! - Rubis/Saphir"
  },
  {
    id: 206,
    en: "Battle! (Team Aqua/Team Magma Leaders (Archie/Maxie)) - Ruby/Sapphire",
    fr: "Combat! (Leader Aqua/Magma (Arthur/Max)) - Rubis/Saphir"
  },
  {
    id: 207,
    en: "The Super-Ancient Pokémon Awaken! - Ruby/Sapphire",
    fr: "Un Pokémon ancestral s'éveille! - Rubis/Saphir"
  },
  {
    id: 208,
    en: "Drought - Ruby/Sapphire",
    fr: "Sécheresse - Rubis/Saphir"
  },
  {
    id: 209,
    en: "Heavy Rain - Ruby/Sapphire",
    fr: "Déluge - Rubis/Saphir"
  },
  {
    id: 210,
    en: "Dive - Ruby/Sapphire",
    fr: "Plongée - Rubis/Saphir"
  },
  {
    id: 211,
    en: "Sootopolis City - Ruby/Sapphire",
    fr: "Atalanopolis - Rubis/Saphir"
  },
  {
    id: 212,
    en: "Cave Of Origin/Meteor Falls - Ruby/Sapphire",
    fr: "Grotte Origine/Site Météore - Rubis/Saphir"
  },
  {
    id: 213,
    en: "Battle! (Super-Ancient Pokémon (Kyogre/Groudon/Rayquaza)) - Ruby/Sapphire",
    fr: "Combat! (Pokémon ancestral (Kyogre/Groudon/Rayquaza)) - Rubis/Saphir"
  },
  {
    id: 214,
    en: "Trainers' Eyes Meet (Swimmer) - Ruby/Sapphire",
    fr: "Rencontre avec un Dresseur (Nageuse/Nageur) - Rubis/Saphir"
  },
  {
    id: 215,
    en: "Ever Grande City/The Pokémon League - Ruby/Sapphire",
    fr: "Éternara/Ligue Pokémon - Rubis/Saphir"
  },
  {
    id: 216,
    en: "Contest Lobby - Ruby/Sapphire",
    fr: "Salle de Concours - Rubis/Saphir"
  },
  {
    id: 217,
    en: "Pokémon Contest! - Ruby/Sapphire",
    fr: "Concours Pokémon - Rubis/Saphir"
  },
  {
    id: 218,
    en: "Results Announcement - Ruby/Sapphire",
    fr: "Annonce des résultats - Rubis/Saphir"
  },
  {
    id: 219,
    en: "Contest Winner - Ruby/Sapphire",
    fr: "Vainqueur du Concours - Rubis/Saphir"
  },
  {
    id: 220,
    en: "Sealed Chamber/Desert Ruins/Island Cave/Ancient Tomb - Ruby/Sapphire",
    fr: "Sanctuaire/Ruines Désert/Grotte Island/Tombeau Antique - Rubis/Saphir"
  },
  {
    id: 221,
    en: "Battle! (Regirock/Regice/Registeel) - Ruby/Sapphire",
    fr: "Combat! (Regirock/Regice/Registeel) - Rubis/Saphir"
  },
  {
    id: 222,
    en: "The Trick House - Ruby/Sapphire",
    fr: "Maison des Pièges - Rubis/Saphir"
  },
  {
    id: 223,
    en: "Abandoned Ship/Southern Island/Faraway Island - Ruby/Sapphire",
    fr: "Épave/Île du Sud/Île Lointaine - Rubis/Saphir"
  },
  {
    id: 224,
    en: "Battle Tower - Ruby/Sapphire",
    fr: "Tour de Combat - Rubis/Saphir"
  },
  {
    id: 225,
    en: "Victory Road - Ruby/Sapphire",
    fr: "Route Victoire - Rubis/Saphir"
  },
  {
    id: 226,
    en: "Trainers' Eyes Meet (Cooltrainer/Ace Trainer) - Ruby/Sapphire",
    fr: "Rencontre avec un Dresseur (Topdresseur) - Rubis/Saphir"
  },
  {
    id: 227,
    en: "The Elite Four Appear! - Ruby/Sapphire",
    fr: "Le Conseil 4 apparaît! - Rubis/Saphir"
  },
  {
    id: 228,
    en: "Battle! (Elite Four) - Ruby/Sapphire",
    fr: "Combat! (Conseil 4) - Rubis/Saphir"
  },
  {
    id: 229,
    en: "Champion Steven - Ruby/Sapphire",
    fr: "Maître Pierre - Rubis/Saphir"
  },
  {
    id: 230,
    en: "Battle! (Champion Steven) - Ruby/Sapphire",
    fr: "Combat! (Maître Pierre) - Rubis/Saphir"
  },
  {
    id: 231,
    en: "Victory! (Champion Steven) - Ruby/Sapphire",
    fr: "Victoire! (Maître Pierre) - Rubis/Saphir"
  },
  {
    id: 232,
    en: "Room of Glory - Ruby/Sapphire",
    fr: "Instant de gloire - Rubis/Saphir"
  },
  {
    id: 233,
    en: "The Hall of Fame - Ruby/Sapphire",
    fr: "Panthéon - Rubis/Saphir"
  },
  {
    id: 234,
    en: "Ending Theme - Ruby/Sapphire",
    fr: "Générique de fin - Rubis/Saphir"
  },
  {
    id: 235,
    en: "The End - Ruby/Sapphire",
    fr: "Fin - Rubis/Saphir"
  },
  {
    id: 236,
    en: "Opening Movie - FireRed/LeafGreen",
    fr: "Séquence d'introduction - Rouge Feu/Vert Feuille"
  },
  {
    id: 237,
    en: "Title Screen - FireRed/LeafGreen",
    fr: "Écran titre - Rouge Feu/Vert Feuille"
  },
  {
    id: 238,
    en: "Game Tutorial - FireRed/LeafGreen",
    fr: "Présentation du jeu - Rouge Feu/Vert Feuille"
  },
  {
    id: 239,
    en: "Welcome to the World of Pokémon!/Route 24/Route 25 - FireRed/LeafGreen",
    fr: "Bienvenue dans le monde des Pokémon !/Route 24/Route 25 - Rouge Feu/Vert Feuille"
  },
  {
    id: 240,
    en: "Pallet Town Theme - FireRed/LeafGreen",
    fr: "Bourg Palette - Rouge Feu/Vert Feuille"
  },
  {
    id: 241,
    en: "Professor Oak's Theme - FireRed/LeafGreen",
    fr: "Professeur Chen - Rouge Feu/Vert Feuille"
  },
  {
    id: 242,
    en: "Professor Oak's Laboratory - FireRed/LeafGreen",
    fr: "Labo Pokémon du Prof. Chen - Rouge Feu/Vert Feuille"
  },
  {
    id: 243,
    en: "Rival Appears/Blue's Theme - FireRed/LeafGreen",
    fr: "Le rival apparaît/Thème de Blue - Rouge Feu/Vert Feuille"
  },
  {
    id: 244,
    en: "Battle! (Trainer Battle) - FireRed/LeafGreen",
    fr: "Combat! (Combat de Dresseur) - Rouge Feu/Vert Feuille"
  },
  {
    id: 245,
    en: "Victory! (Trainer Battle) - FireRed/LeafGreen",
    fr: "Victoire! (Combat de Dresseur) - Rouge Feu/Vert Feuille"
  },
  {
    id: 246,
    en: "Route 1/2 (Road to Viridian City: Leaving Pallet Town)/Underground Path - FireRed/LeafGreen",
    fr: "Route 1/2 (De Bourg Palette à Jadielle)/Souterrain - Rouge Feu/Vert Feuille"
  },
  {
    id: 247,
    en: "Pewter City/Viridian City/Saffron City Theme - FireRed/LeafGreen",
    fr: "Argenta/Jadielle/Safrania - Rouge Feu/Vert Feuille"
  },
  {
    id: 248,
    en: "Teachy TV Menu - FireRed/LeafGreen",
    fr: "TV ABC (Menu) - Rouge Feu/Vert Feuille"
  },
  {
    id: 249,
    en: "Viridian Forest/Diglett's Cave/Seafoam Islands - FireRed/LeafGreen",
    fr: "Forêt de Jade/Cave Taupiqueur/Îles Écume - Rouge Feu/Vert Feuille"
  },
  {
    id: 250,
    en: "Battle! (Wild Pokémon) - FireRed/LeafGreen",
    fr: "Combat! (Pokémon sauvage) - Rouge Feu/Vert Feuille"
  },
  {
    id: 251,
    en: "Victory! (Wild Pokémon) - FireRed/LeafGreen",
    fr: "Victoire! (Pokémon sauvage) - Rouge Feu/Vert Feuille"
  },
  {
    id: 252,
    en: "Trainers' Eyes Meet (Boy Version) - FireRed/LeafGreen",
    fr: "Rencontre avec un Dresseur (Version Garçon) - Rouge Feu/Vert Feuille"
  },
  {
    id: 253,
    en: "Pokémon Center - FireRed/LeafGreen",
    fr: "Centre Pokémon - Rouge Feu/Vert Feuille"
  },
  {
    id: 254,
    en: "Guide - FireRed/LeafGreen",
    fr: "Guide - Rouge Feu/Vert Feuille"
  },
  {
    id: 255,
    en: "Pokémon Gym - FireRed/LeafGreen",
    fr: "Arène Pokémon - Rouge Feu/Vert Feuille"
  },
  {
    id: 256,
    en: "Tense Battle! - FireRed/LeafGreen",
    fr: "Combat: la tension monte! - Rouge Feu/Vert Feuille"
  },
  {
    id: 257,
    en: "Battle! (Gym Leader Battle) - FireRed/LeafGreen",
    fr: "Combat! (Champion d'Arène) - Rouge Feu/Vert Feuille"
  },
  {
    id: 258,
    en: "Victory! (Gym Leader Battle) - FireRed/LeafGreen",
    fr: "Victoire! (Champion d'Arène) - Rouge Feu/Vert Feuille"
  },
  {
    id: 259,
    en: "Evolution/Safari Zone - FireRed/LeafGreen",
    fr: "Évolution/Parc Safari - Rouge Feu/Vert Feuille"
  },
  {
    id: 260,
    en: "Route 3/4/5/6/7/8/9/10/16/17/18/19/20/21/22 (Road to Cerulean City: Leaving Mt. Moon) - FireRed/LeafGreen",
    fr: "Route 3/4/5/6/7/8/9/10/16/17/18/19/20/21/22 (Du Mont Sélénite à Azuria) - Rouge Feu/Vert Feuille"
  },
  {
    id: 261,
    en: "Trainers' Eyes Meet (Girl Version) - FireRed/LeafGreen",
    fr: "Rencontre avec un Dresseur (Version Fille) - Rouge Feu/Vert Feuille"
  },
  {
    id: 262,
    en: "Caves of Mt. Moon/Rock Tunnel/Victory Road - FireRed/LeafGreen",
    fr: "Mont Sélénite/Grotte/Route Victoire - Rouge Feu/Vert Feuille"
  },
  {
    id: 263,
    en: "Vermilion City Theme - FireRed/LeafGreen",
    fr: "Carmin sur Mer - Rouge Feu/Vert Feuille"
  },
  {
    id: 264,
    en: "The S.S. Anne - FireRed/LeafGreen",
    fr: "L'Océane - Rouge Feu/Vert Feuille"
  },
  {
    id: 265,
    en: "Bicycle - FireRed/LeafGreen",
    fr: "Bicyclette - Rouge Feu/Vert Feuille"
  },
  {
    id: 266,
    en: "Lavender Town Theme - FireRed/LeafGreen",
    fr: "Lavanville - Rouge Feu/Vert Feuille"
  },
  {
    id: 267,
    en: "Pokémon Tower - FireRed/LeafGreen",
    fr: "Tour Pokémon - Rouge Feu/Vert Feuille"
  },
  {
    id: 268,
    en: "Celadon City Theme - FireRed/LeafGreen",
    fr: "Céladopole - Rouge Feu/Vert Feuille"
  },
  {
    id: 269,
    en: "Rocket Game Corner - FireRed/LeafGreen",
    fr: "Casino Rocket - Rouge Feu/Vert Feuille"
  },
  {
    id: 270,
    en: "Team Rocket Hideout/Cerulean Cave - FireRed/LeafGreen",
    fr: "Repaire Rocket/Caverne Azurée - Rouge Feu/Vert Feuille"
  },
  {
    id: 271,
    en: "Trainers' Eyes Meet (Bad Guy Version (Team Rocket/Burglar/Channeler/PokéManiac/Scientist/Super Nerd)) - FireRed/LeafGreen",
    fr: "Rencontre avec un Dresseur (Version méchant (Team Rocket/Pillard/Exorciste/Pokémaniac/Scientifique/Intello)) - Rouge Feu/Vert Feuille"
  },
  {
    id: 272,
    en: "Silph Co. - FireRed/LeafGreen",
    fr: "Sylphe SARL - Rouge Feu/Vert Feuille"
  },
  {
    id: 273,
    en: "Route 11/12/13/14/15 (Road to Fuchsia City: Leaving Lavender Town) - FireRed/LeafGreen",
    fr: "Route 11/12/13/14/15 (De Lavanville à Parmanie) - Rouge Feu/Vert Feuille"
  },
  {
    id: 274,
    en: "Cerulean City/Fuchsia City Theme - FireRed/LeafGreen",
    fr: "Azuria/Parmanie - Rouge Feu/Vert Feuille"
  },
  {
    id: 275,
    en: "Surf - FireRed/LeafGreen",
    fr: "Surf - Rouge Feu/Vert Feuille"
  },
  {
    id: 276,
    en: "Battle! (Legendary Pokémon) - FireRed/LeafGreen",
    fr: "Combat! (Pokémon légendaire) - Rouge Feu/Vert Feuille"
  },
  {
    id: 277,
    en: "Cinnabar Island Theme - FireRed/LeafGreen",
    fr: "Cramois'Île - Rouge Feu/Vert Feuille"
  },
  {
    id: 278,
    en: "Pokémon Mansion/Abandoned Power Plant - FireRed/LeafGreen",
    fr: "Manoir Pokémon/Centrale - Rouge Feu/Vert Feuille"
  },
  {
    id: 279,
    en: "Pokémon Network Center - FireRed/LeafGreen",
    fr: "Centre Réseau Pokémon - Rouge Feu/Vert Feuille"
  },
  {
    id: 280,
    en: "Sevii Islands: Floe (4) & Chrono (5) Islands - FireRed/LeafGreen",
    fr: "Îles Sevii: Île 4 & Île 5 - Rouge Feu/Vert Feuille"
  },
  {
    id: 281,
    en: "Pokémon Jump - FireRed/LeafGreen",
    fr: "Saut Pokémon - Rouge Feu/Vert Feuille"
  },
  {
    id: 282,
    en: "Dodrio Berry Picking - FireRed/LeafGreen",
    fr: "Attrape-Baies Dodrio - Rouge Feu/Vert Feuille"
  },
  {
    id: 283,
    en: "Sevii Islands: Knot (1) & Boon (2) & Kin (3) Islands - FireRed/LeafGreen",
    fr: "Îles Sevii: Île 1 & Île 2 & Île 3 - Rouge Feu/Vert Feuille"
  },
  {
    id: 284,
    en: "Sevii Islands: Fortune (6) & Quest (7) Islands - FireRed/LeafGreen",
    fr: "Îles Sevii: Île 6 & Île 7 - Rouge Feu/Vert Feuille"
  },
  {
    id: 285,
    en: "Union Room - FireRed/LeafGreen",
    fr: "Salle Union - Rouge Feu/Vert Feuille"
  },
  {
    id: 286,
    en: "Mystery Gift - FireRed/LeafGreen",
    fr: "Cadeau Mystère - Rouge Feu/Vert Feuille"
  },
  {
    id: 287,
    en: "Battle! (Mewtwo) - FireRed/LeafGreen",
    fr: "Combat! (Mewtwo) - Rouge Feu/Vert Feuille"
  },
  {
    id: 288,
    en: "Route 23/Indigo Plateau - FireRed/LeafGreen",
    fr: "Route 23/Plateau Indigo - Rouge Feu/Vert Feuille"
  },
  {
    id: 289,
    en: "Final Battle! (Rival Blue/Champion) - FireRed/LeafGreen",
    fr: "Combat final! (Rival Blue/Maître) - Rouge Feu/Vert Feuille"
  },
  {
    id: 290,
    en: "Epilogue - FireRed/LeafGreen",
    fr: "Épilogue - Rouge Feu/Vert Feuille"
  },
  {
    id: 291,
    en: "Hall of Fame - FireRed/LeafGreen",
    fr: "Panthéon - Rouge Feu/Vert Feuille"
  },
  {
    id: 292,
    en: "Ending Theme - FireRed/LeafGreen",
    fr: "Générique de fin - Rouge Feu/Vert Feuille"
  },
  {
    id: 293,
    en: "Deoxys Appears - FireRed/LeafGreen",
    fr: "Deoxys apparaît - Rouge Feu/Vert Feuille"
  },
  {
    id: 294,
    en: "Battle! (Deoxys) - FireRed/LeafGreen",
    fr: "Combat! (Deoxys) - Rouge Feu/Vert Feuille"
  },
  {
    id: 295,
    en: "Abnormal Weather - Emerald",
    fr: "Météo anormale - Émeraude"
  },
  {
    id: 296,
    en: "Rayquaza Appears! - Emerald",
    fr: "Rayquaza apparaît! - Émeraude"
  },
  {
    id: 297,
    en: "Battle Frontier - Emerald",
    fr: "Zone de Combat - Émeraude"
  },
  {
    id: 298,
    en: "Battle Tower - Emerald",
    fr: "Tour de Combat - Émeraude"
  },
  {
    id: 299,
    en: "Battle Factory - Emerald",
    fr: "Usine de Combat - Émeraude"
  },
  {
    id: 300,
    en: "Battle Arena - Emerald",
    fr: "Dojo de Combat - Émeraude"
  },
  {
    id: 301,
    en: "Battle Dome 1 (Reception Hall) - Emerald",
    fr: "Dôme de Combat 1 (Réception) - Émeraude"
  },
  {
    id: 302,
    en: "Battle Dome 2 - Emerald",
    fr: "Dôme de Combat 2 - Émeraude"
  },
  {
    id: 303,
    en: "Battle Pike - Emerald",
    fr: "Reptile de Combat - Émeraude"
  },
  {
    id: 304,
    en: "Battle Palace - Emerald",
    fr: "Palace de Combat - Émeraude"
  },
  {
    id: 305,
    en: "Battle Pyramid - Emerald",
    fr: "Pyramide de Combat - Émeraude"
  },
  {
    id: 306,
    en: "Battle Pyramid Summit - Emerald",
    fr: "Pyramide de Combat (Sommet) - Émeraude"
  },
  {
    id: 307,
    en: "Battle! (Frontier Brain) - Emerald",
    fr: "Combat! (Meneur de Zone) - Émeraude"
  },
  {
    id: 308,
    en: "Battle! (Mew) - Emerald",
    fr: "Combat! (Mew) - Émeraude"
  },
  {
    id: 309,
    en: "Opening Movie - Diamond/Pearl",
    fr: "Séquence d'introduction - Diamant/Perle"
  },
  {
    id: 310,
    en: "Introduction - Diamond/Pearl",
    fr: "Introduction - Diamant/Perle"
  },
  {
    id: 311,
    en: "Special Report: \"Search for the Red Gyarados!\" - Diamond/Pearl",
    fr: "À la recherche du Léviator Rouge - Diamant/Perle"
  },
  {
    id: 312,
    en: "Twinleaf Town (Day) - Diamond/Pearl",
    fr: "Bonaugure (Jour) - Diamant/Perle"
  },
  {
    id: 313,
    en: "Rival Barry - Diamond/Pearl",
    fr: "Rival René - Diamant/Perle"
  },
  {
    id: 314,
    en: "Route 201/202/219/Verity Lakefront (Day) - Diamond/Pearl",
    fr: "Route 201/202/219/Rive Lac Vérité (Jour) - Diamant/Perle"
  },
  {
    id: 315,
    en: "Lake - Diamond/Pearl",
    fr: "Lac - Diamant/Perle"
  },
  {
    id: 316,
    en: "A Surprise at the Lake! - Diamond/Pearl",
    fr: "Surprise au Lac! - Diamant/Perle"
  },
  {
    id: 317,
    en: "Battle! (Wild Pokémon) - Diamond/Pearl",
    fr: "Combat! (Pokémon sauvage) - Diamant/Perle"
  },
  {
    id: 318,
    en: "Victory! (Wild Pokémon) - Diamond/Pearl",
    fr: "Victoire! (Pokémon sauvage) - Diamant/Perle"
  },
  {
    id: 319,
    en: "Dawn - Diamond/Pearl",
    fr: "Aurore - Diamant/Perle"
  },
  {
    id: 320,
    en: "Sandgem Town (Day) - Diamond/Pearl",
    fr: "Littorella (Jour) - Diamant/Perle"
  },
  {
    id: 321,
    en: "The Pokémon Lab - Diamond/Pearl",
    fr: "Laboratoire Pokémon - Diamant/Perle"
  },
  {
    id: 322,
    en: "Hurry Along - Diamond/Pearl",
    fr: "En route! - Diamant/Perle"
  },
  {
    id: 323,
    en: "Pokémon Center (Day) - Diamond/Pearl",
    fr: "Centre Pokémon (Jour) - Diamant/Perle"
  },
  {
    id: 324,
    en: "Trainers' Eyes Meet (Youngster) - Diamond/Pearl",
    fr: "Rencontre avec un Dresseur (Gamin) - Diamant/Perle"
  },
  {
    id: 325,
    en: "Trainers' Eyes Meet (Lass) - Diamond/Pearl",
    fr: "Rencontre avec un Dresseur (Fillette) - Diamant/Perle"
  },
  {
    id: 326,
    en: "Battle! (Trainer Battle) - Diamond/Pearl",
    fr: "Combat! (Combat de Dresseur) - Diamant/Perle"
  },
  {
    id: 327,
    en: "Victory! (Trainer Battle) - Diamond/Pearl",
    fr: "Victoire! (Combat de Dresseur) - Diamant/Perle"
  },
  {
    id: 328,
    en: "Jubilife City (Day) - Diamond/Pearl",
    fr: "Féli-Cité (Jour) - Diamant/Perle"
  },
  {
    id: 329,
    en: "Poké Mart - Diamond/Pearl",
    fr: "Boutique Pokémon - Diamant/Perle"
  },
  {
    id: 330,
    en: "Route 203/204/218 (Day) - Diamond/Pearl",
    fr: "Route 203/204/218 (Jour) - Diamant/Perle"
  },
  {
    id: 331,
    en: "Battle! (Rival Barry) - Diamond/Pearl",
    fr: "Combat! (Rival René) - Diamant/Perle"
  },
  {
    id: 332,
    en: "Oreburgh Gate/Ravaged Path/Wayward Cave - Diamond/Pearl",
    fr: "Entrée Charbourg/Chemin Rocheux/Grotte Revêche - Diamant/Perle"
  },
  {
    id: 333,
    en: "Oreburgh City (Day) - Diamond/Pearl",
    fr: "Charbourg (Jour) - Diamant/Perle"
  },
  {
    id: 334,
    en: "Oreburgh Mine/Maniac Tunnel/Fuego Ironworks - Diamond/Pearl",
    fr: "Mine Charbourg/Tunnel Ruineman./Forge Fuego - Diamant/Perle"
  },
  {
    id: 335,
    en: "Pokémon Gym - Diamond/Pearl",
    fr: "Arène Pokémon - Diamant/Perle"
  },
  {
    id: 336,
    en: "Battle! (Gym Leader) - Diamond/Pearl",
    fr: "Combat! (Champion d'Arène) - Diamant/Perle"
  },
  {
    id: 337,
    en: "Victory! (Gym Leader) - Diamond/Pearl",
    fr: "Victoire! (Champion d'Arène) - Diamant/Perle"
  },
  {
    id: 338,
    en: "Trainers' Eyes Meet (Twins) - Diamond/Pearl",
    fr: "Rencontre avec un Dresseur (Jumelles) - Diamant/Perle"
  },
  {
    id: 339,
    en: "Floaroma Town/Seabreak Path/Flower Paradise (Day) - Diamond/Pearl",
    fr: "Floraville/Passage Marin/Paradis Fleuri (Jour) - Diamant/Perle"
  },
  {
    id: 340,
    en: "Route 205/211 (West) (Day) - Diamond/Pearl",
    fr: "Route 205/211 (Ouest) (Jour) - Diamant/Perle"
  },
  {
    id: 341,
    en: "Team Galactic Appears! - Diamond/Pearl",
    fr: "La Team Galaxie apparaît! - Diamant/Perle"
  },
  {
    id: 342,
    en: "Battle! (Team Galactic) - Diamond/Pearl",
    fr: "Combat! (Team Galaxie) - Diamant/Perle"
  },
  {
    id: 343,
    en: "Eterna Forest/Lost Tower/Solaceon Ruins/Snowpoint Temple/Fullmoon Island - Diamond/Pearl",
    fr: "Forêt Vestigion/Tour Perdue/Ruines Bonville/Temple Frimapic/Île Pleine Lune - Diamant/Perle"
  },
  {
    id: 344,
    en: "Eterna City/Celestic Town (Day) - Diamond/Pearl",
    fr: "Vestigion/Célestia (Jour) - Diamant/Perle"
  },
  {
    id: 345,
    en: "Galactic Eterna Building - Diamond/Pearl",
    fr: "Bâtiment de Vestigion de la Team Galaxie - Diamant/Perle"
  },
  {
    id: 346,
    en: "Battle! (Team Galactic Commander) - Diamond/Pearl",
    fr: "Combat! (Commandant Team Galaxie) - Diamant/Perle"
  },
  {
    id: 347,
    en: "Victory! (Team Galactic) - Diamond/Pearl",
    fr: "Victoire! (Team Galaxie) - Diamant/Perle"
  },
  {
    id: 348,
    en: "Evolution - Diamond/Pearl",
    fr: "Évolution - Diamant/Perle"
  },
  {
    id: 349,
    en: "Bicycle - Diamond/Pearl",
    fr: "Bicyclette - Diamant/Perle"
  },
  {
    id: 350,
    en: "Trainers' Eyes Meet (Cyclist) - Diamond/Pearl",
    fr: "Rencontre avec un Dresseur (Cycliste) - Diamant/Perle"
  },
  {
    id: 351,
    en: "Route 206/207/208/220/221 (Day) - Diamond/Pearl",
    fr: "Route 206/207/208/220/221 (Jour) - Diamant/Perle"
  },
  {
    id: 352,
    en: "Hearthome City (Day) - Diamond/Pearl",
    fr: "Unionpolis (Jour) - Diamant/Perle"
  },
  {
    id: 353,
    en: "Route 209/212/222 (Day) - Diamond/Pearl",
    fr: "Route 209/212/222 (Jour) - Diamant/Perle"
  },
  {
    id: 354,
    en: "Trainers' Eyes Meet (Hiker) - Diamond/Pearl",
    fr: "Rencontre avec un Dresseur (Montagnard) - Diamant/Perle"
  },
  {
    id: 355,
    en: "Solaceon Town/Pastoria City (Day) - Diamond/Pearl",
    fr: "Bonville/Verchamps (Jour) - Diamant/Perle"
  },
  {
    id: 356,
    en: "Route 210/211 (East)/214/215/223/224 (Day) - Diamond/Pearl",
    fr: "Route 210/211 (Est)/214/215/223/224 (Jour) - Diamant/Perle"
  },
  {
    id: 357,
    en: "Veilstone City (Day) - Diamond/Pearl",
    fr: "Voilaroc (Jour) - Diamant/Perle"
  },
  {
    id: 358,
    en: "Valor Lakefront/Route 213/Resort Area (Day) - Diamond/Pearl",
    fr: "Rive Lac Courage/Route 213/Aire de Détente (Jour) - Diamant/Perle"
  },
  {
    id: 359,
    en: "Canalave City (Day) - Diamond/Pearl",
    fr: "Joliberges (Jour) - Diamant/Perle"
  },
  {
    id: 360,
    en: "Route 216/217/Acuity Lakefront (Day) - Diamond/Pearl",
    fr: "Route 216/217/Rive Lac Savoir (Jour) - Diamant/Perle"
  },
  {
    id: 361,
    en: "Snowpoint City (Day) - Diamond/Pearl",
    fr: "Frimapic (Jour) - Diamant/Perle"
  },
  {
    id: 362,
    en: "Team Galactic HQ - Diamond/Pearl",
    fr: "QG Team Galaxie - Diamant/Perle"
  },
  {
    id: 363,
    en: "Battle! (Team Galactic Boss Cyrus) - Diamond/Pearl",
    fr: "Combat! (Chef Galaxie Hélio) - Diamant/Perle"
  },
  {
    id: 364,
    en: "Deep Within Team Galactic HQ - Diamond/Pearl",
    fr: "Au fond du QG de la Team Galaxie - Diamant/Perle"
  },
  {
    id: 365,
    en: "Mt. Coronet - Diamond/Pearl",
    fr: "Mont Couronné - Diamant/Perle"
  },
  {
    id: 366,
    en: "Spear Pillar - Diamond/Pearl",
    fr: "Colonnes Lances - Diamant/Perle"
  },
  {
    id: 367,
    en: "The Legendary Pokémon Appears! - Diamond/Pearl",
    fr: "Un Pokémon légendaire apparaît! - Diamant/Perle"
  },
  {
    id: 368,
    en: "Catastrophe! - Diamond/Pearl",
    fr: "Catastrophe! - Diamant/Perle"
  },
  {
    id: 369,
    en: "Battle! (Dialga/Palkia) - Diamond/Pearl",
    fr: "Combat! (Dialga/Palkia) - Diamant/Perle"
  },
  {
    id: 370,
    en: "Sunyshore City (Day) - Diamond/Pearl",
    fr: "Rivamar (Jour) - Diamant/Perle"
  },
  {
    id: 371,
    en: "Victory Road - Diamond/Pearl",
    fr: "Route Victoire - Diamant/Perle"
  },
  {
    id: 372,
    en: "Trainers' Eyes Meet (Ace Trainer) - Diamond/Pearl",
    fr: "Rencontre avec un Dresseur (Topdresseur) - Diamant/Perle"
  },
  {
    id: 373,
    en: "Pokémon League (Day) - Diamond/Pearl",
    fr: "Ligue Pokémon (Jour) - Diamant/Perle"
  },
  {
    id: 374,
    en: "Fight Area/Survival Area (Day) - Diamond/Pearl",
    fr: "Aire de Combat/Aire de Survie (Jour) - Diamant/Perle"
  },
  {
    id: 375,
    en: "Route 225/226/227 (Day) - Diamond/Pearl",
    fr: "Route 225/226/227 (Jour) - Diamant/Perle"
  },
  {
    id: 376,
    en: "Route 228/229/230 (Day) - Diamond/Pearl",
    fr: "Route 228/229/230 (Jour) - Diamant/Perle"
  },
  {
    id: 377,
    en: "Twinleaf Town (Night) - Diamond/Pearl",
    fr: "Bonaugure (Nuit) - Diamant/Perle"
  },
  {
    id: 378,
    en: "Route 201/202/219/Verity Lakefront (Night) - Diamond/Pearl",
    fr: "Route 201/202/219/Rive Lac Vérité (Nuit) - Diamant/Perle"
  },
  {
    id: 379,
    en: "Pokémon Center (Night) - Diamond/Pearl",
    fr: "Centre Pokémon (Nuit) - Diamant/Perle"
  },
  {
    id: 380,
    en: "Nintendo Wi-Fi Connection - Diamond/Pearl",
    fr: "Connexion Wi-Fi Nintendo - Diamant/Perle"
  },
  {
    id: 381,
    en: "Sandgem Town (Night) - Diamond/Pearl",
    fr: "Littorella (Nuit) - Diamant/Perle"
  },
  {
    id: 382,
    en: "Lucas - Diamond/Pearl",
    fr: "Louka - Diamant/Perle"
  },
  {
    id: 383,
    en: "Jubilife City (Night) - Diamond/Pearl",
    fr: "Féli-Cité (Nuit) - Diamant/Perle"
  },
  {
    id: 384,
    en: "TV Station - Diamond/Pearl",
    fr: "Féli-Télé - Diamant/Perle"
  },
  {
    id: 385,
    en: "GTS - Diamond/Pearl",
    fr: "GTS - Diamant/Perle"
  },
  {
    id: 386,
    en: "Surf - Diamond/Pearl",
    fr: "Surf - Diamant/Perle"
  },
  {
    id: 387,
    en: "Canalave City (Night) - Diamond/Pearl",
    fr: "Joliberges (Nuit) - Diamant/Perle"
  },
  {
    id: 388,
    en: "Route 203/204/218 (Night) - Diamond/Pearl",
    fr: "Route 203/204/218 (Nuit) - Diamant/Perle"
  },
  {
    id: 389,
    en: "Trainers' Eyes Meet (Black Belt) - Diamond/Pearl",
    fr: "Rencontre avec un Dresseur (Karatéka) - Diamant/Perle"
  },
  {
    id: 390,
    en: "Oreburgh City (Night) - Diamond/Pearl",
    fr: "Charbourg (Nuit) - Diamant/Perle"
  },
  {
    id: 391,
    en: "Route 205/211 (West) (Night) - Diamond/Pearl",
    fr: "Route 205/211 (Ouest) (Nuit) - Diamant/Perle"
  },
  {
    id: 392,
    en: "Trainers' Eyes Meet (Sailor) - Diamond/Pearl",
    fr: "Rencontre avec un Dresseur (Marin) - Diamant/Perle"
  },
  {
    id: 393,
    en: "Eterna City/Celestic Town (Night) - Diamond/Pearl",
    fr: "Vestigion/Célestia (Nuit) - Diamant/Perle"
  },
  {
    id: 394,
    en: "The Underground - Diamond/Pearl",
    fr: "Le Souterrain - Diamant/Perle"
  },
  {
    id: 395,
    en: "Captured a Flag Underground! - Diamond/Pearl",
    fr: "Drapeau capturé! - Diamant/Perle"
  },
  {
    id: 396,
    en: "Trainers' Eyes Meet (Aroma Lady) - Diamond/Pearl",
    fr: "Rencontre avec un Dresseur (Aroma) - Diamant/Perle"
  },
  {
    id: 397,
    en: "Floaroma Town/Seabreak Path/Flower Paradise (Night) - Diamond/Pearl",
    fr: "Floraville/Passage Marin/Paradis Fleuri (Nuit) - Diamant/Perle"
  },
  {
    id: 398,
    en: "Old Chateau/Spring Path/Sendoff Spring/Turnback Cave/Newmoon Island - Diamond/Pearl",
    fr: "Vieux Château/Chemin Source/Source Adieu/Grotte Retour/Île Nouvellune - Diamant/Perle"
  },
  {
    id: 399,
    en: "Solaceon Town/Pastoria City (Night) - Diamond/Pearl",
    fr: "Bonville/Verchamps (Nuit) - Diamant/Perle"
  },
  {
    id: 400,
    en: "Great Marsh/Pal Park - Diamond/Pearl",
    fr: "Grand Marais/Parc des Amis - Diamant/Perle"
  },
  {
    id: 401,
    en: "Route 206/207/208/220/221 (Night) - Diamond/Pearl",
    fr: "Route 206/207/208/220/221 (Nuit) - Diamant/Perle"
  },
  {
    id: 402,
    en: "Trainers' Eyes Meet (Collector) - Diamond/Pearl",
    fr: "Rencontre avec un Dresseur (Collec) - Diamant/Perle"
  },
  {
    id: 403,
    en: "Veilstone City (Night) - Diamond/Pearl",
    fr: "Voilaroc (Nuit) - Diamant/Perle"
  },
  {
    id: 404,
    en: "Game Corner - Diamond/Pearl",
    fr: "Casino - Diamant/Perle"
  },
  {
    id: 405,
    en: "You're a Winner! - Diamond/Pearl",
    fr: "Casino: Gagné! - Diamant/Perle"
  },
  {
    id: 406,
    en: "You're a Jackpot Winner! - Diamond/Pearl",
    fr: "Casino: Jackpot! - Diamant/Perle"
  },
  {
    id: 407,
    en: "Trainers' Eyes Meet (PI) - Diamond/Pearl",
    fr: "Rencontre avec un Dresseur (Croupier) - Diamant/Perle"
  },
  {
    id: 408,
    en: "Route 209/212/222 (Night) - Diamond/Pearl",
    fr: "Route 209/212/222 (Nuit) - Diamant/Perle"
  },
  {
    id: 409,
    en: "Snowpoint City (Night) - Diamond/Pearl",
    fr: "Frimapic (Nuit) - Diamant/Perle"
  },
  {
    id: 410,
    en: "Route 216/217/Acuity Lakefront (Night) - Diamond/Pearl",
    fr: "Route 216/217/Rive Lac Savoir (Nuit) - Diamant/Perle"
  },
  {
    id: 411,
    en: "Lake Caverns - Diamond/Pearl",
    fr: "Cavernes lacustres - Diamant/Perle"
  },
  {
    id: 412,
    en: "Battle! (Azelf/Mesprit/Uxie) - Diamond/Pearl",
    fr: "Combat! (Créfadet/Créfollet/Créhelf) - Diamant/Perle"
  },
  {
    id: 413,
    en: "Route 210/211 (East)/214/215/223/224 (Night) - Diamond/Pearl",
    fr: "Route 210/211 (Est)/214/215/223/224 (Nuit) - Diamant/Perle"
  },
  {
    id: 414,
    en: "A Poké Radar Hit! - Diamond/Pearl",
    fr: "Détection du Poké Radar! - Diamant/Perle"
  },
  {
    id: 415,
    en: "Sunyshore City (Night) - Diamond/Pearl",
    fr: "Rivamar (Nuit) - Diamant/Perle"
  },
  {
    id: 416,
    en: "Trainers' Eyes Meet (Artist) - Diamond/Pearl",
    fr: "Rencontre avec un Dresseur (Peintre) - Diamant/Perle"
  },
  {
    id: 417,
    en: "Amity Square - Diamond/Pearl",
    fr: "Square Paisible - Diamant/Perle"
  },
  {
    id: 418,
    en: "Hearthome City (Night) - Diamond/Pearl",
    fr: "Unionpolis (Nuit) - Diamant/Perle"
  },
  {
    id: 419,
    en: "Contest Hall - Diamond/Pearl",
    fr: "Salle de Concours - Diamant/Perle"
  },
  {
    id: 420,
    en: "Poffins - Diamond/Pearl",
    fr: "Poffins - Diamant/Perle"
  },
  {
    id: 421,
    en: "Super Contest! - Diamond/Pearl",
    fr: "Super Concours Pokémon! - Diamant/Perle"
  },
  {
    id: 422,
    en: "Contest: Dress Up - Diamond/Pearl",
    fr: "Concours: Habillage - Diamant/Perle"
  },
  {
    id: 423,
    en: "Dance: Easy - Diamond/Pearl",
    fr: "Épreuve de Danse: Facile - Diamant/Perle"
  },
  {
    id: 424,
    en: "Dance: Difficult - Diamond/Pearl",
    fr: "Épreuve de Danse: Difficile - Diamant/Perle"
  },
  {
    id: 425,
    en: "Contest: Results Announcement - Diamond/Pearl",
    fr: "Concours: Annonce des résultats - Diamant/Perle"
  },
  {
    id: 426,
    en: "Contest: Winner - Diamond/Pearl",
    fr: "Concours: Vainqueur! - Diamant/Perle"
  },
  {
    id: 427,
    en: "Route 228/229/230 (Night) - Diamond/Pearl",
    fr: "Route 228/229/230 (Nuit) - Diamant/Perle"
  },
  {
    id: 428,
    en: "Valor Lakefront/Route 213/Resort Area (Night) - Diamond/Pearl",
    fr: "Rive Lac Courage/Route 213/Aire de Détente (Nuit) - Diamant/Perle"
  },
  {
    id: 429,
    en: "Fight Area/Survival Area (Night) - Diamond/Pearl",
    fr: "Aire de Combat/Aire de Survie (Nuit) - Diamant/Perle"
  },
  {
    id: 430,
    en: "Battle Tower - Diamond/Pearl",
    fr: "Tour de Combat - Diamant/Perle"
  },
  {
    id: 431,
    en: "Route 225/226/227 (Night) - Diamond/Pearl",
    fr: "Route 225/226/227 (Nuit) - Diamant/Perle"
  },
  {
    id: 432,
    en: "Stark Mountain - Diamond/Pearl",
    fr: "Mont Abrupt - Diamant/Perle"
  },
  {
    id: 433,
    en: "Battle! (Legendary Pokémon) - Diamond/Pearl",
    fr: "Combat! (Pokémon légendaire) - Diamant/Perle"
  },
  {
    id: 434,
    en: "Mystery Gift - Diamond/Pearl",
    fr: "Cadeau Mystère - Diamant/Perle"
  },
  {
    id: 435,
    en: "Pokémon League (Night) - Diamond/Pearl",
    fr: "Ligue Pokémon (Nuit) - Diamant/Perle"
  },
  {
    id: 436,
    en: "Decisive Battle! (Pokémon League) - Diamond/Pearl",
    fr: "Combat décisif! (Ligue Pokémon) - Diamant/Perle"
  },
  {
    id: 437,
    en: "The Elite Four Appear! - Diamond/Pearl",
    fr: "Le Conseil 4 apparaît! - Diamant/Perle"
  },
  {
    id: 438,
    en: "Battle! (Elite Four) - Diamond/Pearl",
    fr: "Combat! (Conseil 4) - Diamant/Perle"
  },
  {
    id: 439,
    en: "Victory! (Elite Four) - Diamond/Pearl",
    fr: "Victoire! (Conseil 4) - Diamant/Perle"
  },
  {
    id: 440,
    en: "Champion Cynthia - Diamond/Pearl",
    fr: "Maître Cynthia - Diamant/Perle"
  },
  {
    id: 441,
    en: "Battle! (Champion Cynthia) - Diamond/Pearl",
    fr: "Combat! (Maître Cynthia) - Diamant/Perle"
  },
  {
    id: 442,
    en: "Victory! (Champion Cynthia) - Diamond/Pearl",
    fr: "Victoire! (Maître Cynthia) - Diamant/Perle"
  },
  {
    id: 443,
    en: "Hall of Fame - Diamond/Pearl",
    fr: "Panthéon - Diamant/Perle"
  },
  {
    id: 444,
    en: "Congratulations on Entering the Hall of Fame! - Diamond/Pearl",
    fr: "Entrée au Panthéon! - Diamant/Perle"
  },
  {
    id: 445,
    en: "Ending Theme - Diamond/Pearl",
    fr: "Générique de fin - Diamant/Perle"
  },
  {
    id: 446,
    en: "Arceus (Hall of Origin) - Diamond/Pearl",
    fr: "Arceus (Salle Originelle) - Diamant/Perle"
  },
  {
    id: 447,
    en: "Title Screen - Platinum",
    fr: "Écran titre - Platine"
  },
  {
    id: 448,
    en: "Press Start - Platinum",
    fr: "Appuyez sur Start - Platine"
  },
  {
    id: 449,
    en: "Special Program: \"Let's Ask Prof. Rowan!\" - Platinum",
    fr: "Programme spécial : Questions au Professeur Sorbier - Platine"
  },
  {
    id: 450,
    en: "Looker's Theme - Platinum",
    fr: "Thème de Beladonis - Platine"
  },
  {
    id: 451,
    en: "Global Terminal - Platinum",
    fr: "Terminal Mondial  - Platine"
  },
  {
    id: 452,
    en: "Wi-Fi Plaza - Platinum",
    fr: "Square Wi-Fi - Platine"
  },
  {
    id: 453,
    en: "Wi-Fi Plaza: Minigames - Platinum",
    fr: "Jeux du Square Wi-Fi - Platine"
  },
  {
    id: 454,
    en: "Wi-Fi Plaza: Parade - Platinum",
    fr: "Square Wi-Fi: Parade - Platine"
  },
  {
    id: 455,
    en: "Giratina Appears! - Platinum",
    fr: "Giratina apparaît! - Platine"
  },
  {
    id: 456,
    en: "Distortion World - Platinum",
    fr: "Monde Distorsion - Platine"
  },
  {
    id: 457,
    en: "Battle! (Giratina) - Platinum",
    fr: "Combat! (Giratina) - Platine"
  },
  {
    id: 458,
    en: "Spin Trade - Platinum",
    fr: "Œuf Surprise - Platine"
  },
  {
    id: 459,
    en: "Mystery Gift - Platinum",
    fr: "Cadeau Mystère - Platine"
  },
  {
    id: 460,
    en: "Super Contest: Cuteness - Platinum",
    fr: "Super Concours Pokémon: Grâce - Platine"
  },
  {
    id: 461,
    en: "Super Contest: Coolness - Platinum",
    fr: "Super Concours Pokémon: Sang-froid - Platine"
  },
  {
    id: 462,
    en: "Super Contest: Toughness - Platinum",
    fr: "Super Concours Pokémon: Robustesse - Platine"
  },
  {
    id: 463,
    en: "Super Contest: Beauty - Platinum",
    fr: "Super Concours Pokémon: Beauté - Platine"
  },
  {
    id: 464,
    en: "Super Contest: Smartness - Platinum",
    fr: "Super Concours Pokémon: Intelligence - Platine"
  },
  {
    id: 465,
    en: "Villa Music Box: Twinleaf Tune - Platinum",
    fr: "Boîte Musicale de la Villa: Bonaugure - Platine"
  },
  {
    id: 466,
    en: "Villa Audio System: Bossa Nova Lilycove - Platinum",
    fr: "Chaîne stéréo de la Villa : La Bossa Nova de Nénucrique - Platine"
  },
  {
    id: 467,
    en: "Fight Area/Battle Frontier - Platinum",
    fr: "Aire de Combat/Zone de Combat - Platine"
  },
  {
    id: 468,
    en: "Battle Arcade - Platinum",
    fr: "Arcade de Combat - Platine"
  },
  {
    id: 469,
    en: "Battle Hall - Platinum",
    fr: "Scène de Combat - Platine"
  },
  {
    id: 470,
    en: "Battle Factory - Platinum",
    fr: "Usine de Combat - Platine"
  },
  {
    id: 471,
    en: "Battle Castle - Platinum",
    fr: "Castel de Combat - Platine"
  },
  {
    id: 472,
    en: "Battle! (Frontier Brain) - Platinum",
    fr: "Combat! (Meneur de Zone) - Platine"
  },
  {
    id: 473,
    en: "Victory! (Frontier Brain) - Platinum",
    fr: "Victoire! (Meneur de Zone) - Platine"
  },
  {
    id: 474,
    en: "Battle! (Regirock/Regice/Registeel) - Platinum",
    fr: "Combat! (Regirock/Regice/Registeel) - Platine"
  },
  {
    id: 475,
    en: "Opening Movie - HeartGold/SoulSilver",
    fr: "Séquence d'introduction - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 476,
    en: "Title Screen - HeartGold/SoulSilver",
    fr: "Écran titre - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 477,
    en: "An Adventure Begins! - HeartGold/SoulSilver",
    fr: "L'aventure commence! - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 478,
    en: "New Bark Town - HeartGold/SoulSilver",
    fr: "Bourg Geon - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 479,
    en: "Hurry Along - HeartGold/SoulSilver",
    fr: "En route! - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 480,
    en: "Lyra - HeartGold/SoulSilver",
    fr: "Célesta - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 481,
    en: "Elm Pokémon Lab - HeartGold/SoulSilver",
    fr: "Laboratoire du Professeur Orme - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 482,
    en: "Route 29 - HeartGold/SoulSilver",
    fr: "Route 29 - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 483,
    en: "Battle! (Wild Pokémon—Johto Version) - HeartGold/SoulSilver",
    fr: "Combat! (Pokémon sauvage—Version Johto) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 484,
    en: "Victory! (Wild Pokémon) - HeartGold/SoulSilver",
    fr: "Victoire! (Pokémon sauvage) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 485,
    en: "Cherrygrove City/Mahogany Town - HeartGold/SoulSilver",
    fr: "Ville Griotte/Acajou - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 486,
    en: "Hurry Along 2 - HeartGold/SoulSilver",
    fr: "En route! 2 - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 487,
    en: "Pokémon Center - HeartGold/SoulSilver",
    fr: "Centre Pokémon - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 488,
    en: "Trainers' Eyes Meet (Boy 1) - HeartGold/SoulSilver",
    fr: "Rencontre avec un Dresseur (Garçon 1) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 489,
    en: "Battle! (Trainer Battle—Johto Version) - HeartGold/SoulSilver",
    fr: "Combat! (Combat de Dresseur—Version Johto) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 490,
    en: "Victory! (Trainer Battle) - HeartGold/SoulSilver",
    fr: "Victoire! (Combat de Dresseur) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 491,
    en: "Route 30/31/32/33 - HeartGold/SoulSilver",
    fr: "Route 30/31/32/33 - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 492,
    en: "Violet City/Olivine City - HeartGold/SoulSilver",
    fr: "Mauville/Oliville - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 493,
    en: "Sprout Tower - HeartGold/SoulSilver",
    fr: "Tour Chétiflor - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 494,
    en: "Trainers' Eyes Meet (Sage) - HeartGold/SoulSilver",
    fr: "Rencontre avec un Dresseur (Sage) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 495,
    en: "Poké Mart - HeartGold/SoulSilver",
    fr: "Boutique Pokémon - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 496,
    en: "Union Cave/Slowpoke Well/Ilex Forest/Whirl Islands/Mt. Mortar/Tohjo Falls/Mt. Moon/Embedded Tower - HeartGold/SoulSilver",
    fr: "Caves Jumelles/Puits Ramoloss/Bois aux Chênes/Tourb'Îles/Mont Creuset/Chutes Tohjo/Mont Sélénite/Tour Enfouie - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 497,
    en: "Ruins of Alph - HeartGold/SoulSilver",
    fr: "Ruines d'Alpha - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 498,
    en: "Pokégear Radio: Unown - HeartGold/SoulSilver",
    fr: "Radio Pokématos: Zarbi - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 499,
    en: "Azalea Town/Blackthorn City - HeartGold/SoulSilver",
    fr: "Écorcia/Ébènelle - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 500,
    en: "Trainers' Eyes Meet (Team Rocket) - HeartGold/SoulSilver",
    fr: "Rencontre avec un Dresseur (Team Rocket) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 501,
    en: "Battle! (Team Rocket) - HeartGold/SoulSilver",
    fr: "Combat! (Team Rocket) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 502,
    en: "Route 34/35/36/37/40/41/45/46/Cliff Edge Gate - HeartGold/SoulSilver",
    fr: "Route 34/35/36/37/40/41/45/46/Portail Falaise - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 503,
    en: "A Rival Appears!/Silver's Theme - HeartGold/SoulSilver",
    fr: "Le rival apparaît!/Thème de Silver - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 504,
    en: "Battle! (Rival Silver) - HeartGold/SoulSilver",
    fr: "Combat! (Rival Silver) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 505,
    en: "Evolution - HeartGold/SoulSilver",
    fr: "Évolution - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 506,
    en: "Goldenrod City - HeartGold/SoulSilver",
    fr: "Doublonville - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 507,
    en: "Pokémon Gym - HeartGold/SoulSilver",
    fr: "Arène Pokémon - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 508,
    en: "Battle! (Gym Leader—Johto Version) - HeartGold/SoulSilver",
    fr: "Combat! (Champion d'Arène—Version Johto) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 509,
    en: "Victory! (Gym Leader) - HeartGold/SoulSilver",
    fr: "Victoire! (Champion d'Arène) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 510,
    en: "Pokégear Radio: Buena's Password - HeartGold/SoulSilver",
    fr: "Radio Pokématos: Le Mot de Passe de Buena - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 511,
    en: "Goldenrod Game Corner - HeartGold/SoulSilver",
    fr: "Casino de Doublonville - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 512,
    en: "You're a Winner! - HeartGold/SoulSilver",
    fr: "Gagné aux jeux! - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 513,
    en: "Global Terminal - HeartGold/SoulSilver",
    fr: "Terminal Mondial  - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 514,
    en: "GTS - HeartGold/SoulSilver",
    fr: "GTS - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 515,
    en: "Bicycle/Route 17 (Cycling Road) - HeartGold/SoulSilver",
    fr: "Bicyclette/Route 17 (Piste cyclable) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 516,
    en: "Trainers' Eyes Meet (Girl 1) - HeartGold/SoulSilver",
    fr: "Rencontre avec un Dresseur (Fille 1) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 517,
    en: "National Park - HeartGold/SoulSilver",
    fr: "Parc Naturel - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 518,
    en: "Ecruteak City - HeartGold/SoulSilver",
    fr: "Rosalia - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 519,
    en: "Ecruteak Dance Theater/Kimono Girl - HeartGold/SoulSilver",
    fr: "Salle de Danse de Rosalia/Kimono - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 520,
    en: "Burned Tower - HeartGold/SoulSilver",
    fr: "Tour Cendrée - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 521,
    en: "Eusine - HeartGold/SoulSilver",
    fr: "Eusine - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 522,
    en: "Pokégear Radio: Professor Oak's Pokémon Talk - HeartGold/SoulSilver",
    fr: "Radio Pokématos: Chronique du Professeur Chen - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 523,
    en: "Route 38/39 - HeartGold/SoulSilver",
    fr: "Route 38/39 - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 524,
    en: "Pokégear Radio: Pokémon March - HeartGold/SoulSilver",
    fr: "Radio Pokématos: Fanfare Pokémon - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 525,
    en: "Battle! (Raikou) - HeartGold/SoulSilver",
    fr: "Combat! (Raikou) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 526,
    en: "Olivine's Lighthouse/Mt. Silver Cave - HeartGold/SoulSilver",
    fr: "Phare d'Oliville/Grotte Argentée - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 527,
    en: "Surf - HeartGold/SoulSilver",
    fr: "Surf - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 528,
    en: "Cianwood City - HeartGold/SoulSilver",
    fr: "Irisia - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 529,
    en: "Route 42/43/44/Lake of Rage - HeartGold/SoulSilver",
    fr: "Route 42/43/44/Lac Colère - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 530,
    en: "Team Rocket HQ - HeartGold/SoulSilver",
    fr: "Repaire Rocket - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 531,
    en: "Trainers' Eyes Meet (Suspicious Person 1) - HeartGold/SoulSilver",
    fr: "Rencontre avec un Dresseur (Personne louche 1) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 532,
    en: "A Rival Appears!/Silver's Theme (Version 2) - HeartGold/SoulSilver",
    fr: "Le rival apparaît!/Thème de Silver (Version 2) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 533,
    en: "Radio Tower Occupied! - HeartGold/SoulSilver",
    fr: "La Tour Radio est occupée! - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 534,
    en: "Ice Path/Dark Cave/Seafoam Islands - HeartGold/SoulSilver",
    fr: "Route de Glace/Antre Noir/Îles Écume - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 535,
    en: "Dragon's Den - HeartGold/SoulSilver",
    fr: "Antre du Dragon - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 536,
    en: "Clair - HeartGold/SoulSilver",
    fr: "Sandra - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 537,
    en: "Battle! (Entei) - HeartGold/SoulSilver",
    fr: "Combat! (Entei) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 538,
    en: "Bell Tower - HeartGold/SoulSilver",
    fr: "Tour Carillon - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 539,
    en: "The Dance of Ecruteak - HeartGold/SoulSilver",
    fr: "La Danse de Rosalia - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 540,
    en: "Ho-Oh Appears! - HeartGold/SoulSilver",
    fr: "Ho-Oh apparaît! - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 541,
    en: "Battle! (Ho-Oh) - HeartGold/SoulSilver",
    fr: "Combat! (Ho-Oh) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 542,
    en: "Route 26/27 - HeartGold/SoulSilver",
    fr: "Route 26/27 - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 543,
    en: "S.S. Aqua - HeartGold/SoulSilver",
    fr: "L'Aquaria - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 544,
    en: "Vermilion City - HeartGold/SoulSilver",
    fr: "Carmin sur Mer - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 545,
    en: "Battle! (Gym Leader—Kanto Version) - HeartGold/SoulSilver",
    fr: "Combat! (Champion d'Arène—Version Kanto) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 546,
    en: "Lavender Town - HeartGold/SoulSilver",
    fr: "Lavanville - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 547,
    en: "Rock Tunnel/Diglett's Cave/Underground Path/Cerulean Cave - HeartGold/SoulSilver",
    fr: "Grotte/Cave Taupiqueur/Souterrain/Caverne Azurée - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 548,
    en: "Battle! (Wild Pokémon—Kanto Version) - HeartGold/SoulSilver",
    fr: "Combat! (Pokémon sauvage—Version Kanto) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 549,
    en: "Cerulean City/Fuchsia City - HeartGold/SoulSilver",
    fr: "Azuria/Parmanie - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 550,
    en: "Route 24/25 - HeartGold/SoulSilver",
    fr: "Route 24/25 - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 551,
    en: "Pokégear Radio: Pokémon Lullaby - HeartGold/SoulSilver",
    fr: "Radio Pokématos: Berceuse Pokémon - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 552,
    en: "Battle! (Suicune) - HeartGold/SoulSilver",
    fr: "Combat! (Suicune) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 553,
    en: "Celadon City - HeartGold/SoulSilver",
    fr: "Céladopole - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 554,
    en: "Ethan - HeartGold/SoulSilver",
    fr: "Luth - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 555,
    en: "Route 11/12/13/14/15 - HeartGold/SoulSilver",
    fr: "Route 11/12/13/14/15 - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 556,
    en: "Pokégear Radio: Poké Flute - HeartGold/SoulSilver",
    fr: "Radio Pokématos: Pokéflûte - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 557,
    en: "Viridian Forest - HeartGold/SoulSilver",
    fr: "Forêt de Jade - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 558,
    en: "Trainers' Eyes Meet (Boy 2) - HeartGold/SoulSilver",
    fr: "Rencontre avec un Dresseur (Garçon 2) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 559,
    en: "Pewter City/Viridian City/Saffron City - HeartGold/SoulSilver",
    fr: "Argenta/Jadielle/Safrania - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 560,
    en: "Route 2/3/4/5/6/7/8/9/10/16/18/19/20/21/22 - HeartGold/SoulSilver",
    fr: "Route 2/3/4/5/6/7/8/9/10/16/18/19/20/21/22 - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 561,
    en: "Trainers' Eyes Meet (Suspicious Person 2) - HeartGold/SoulSilver",
    fr: "Rencontre avec un Dresseur (Personne louche 2) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 562,
    en: "Clefairy Dance in Mt. Moon - HeartGold/SoulSilver",
    fr: "Danse des Mélofée au Mont Sélénite - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 563,
    en: "Route 1 - HeartGold/SoulSilver",
    fr: "Route 1 - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 564,
    en: "Pallet Town - HeartGold/SoulSilver",
    fr: "Bourg Palette - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 565,
    en: "Professor Oak - HeartGold/SoulSilver",
    fr: "Professeur Chen - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 566,
    en: "Trainers' Eyes Meet (Girl 2) - HeartGold/SoulSilver",
    fr: "Rencontre avec un Dresseur (Fille 2) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 567,
    en: "Battle! (Trainer Battle—Kanto Version) - HeartGold/SoulSilver",
    fr: "Combat! (Combat de Dresseur—Version Kanto) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 568,
    en: "Cinnabar Island - HeartGold/SoulSilver",
    fr: "Cramois'Île - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 569,
    en: "Route 47/48/Cliff Cave - HeartGold/SoulSilver",
    fr: "Route 47/48/Grotte Falaise - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 570,
    en: "Safari Zone Gate - HeartGold/SoulSilver",
    fr: "Portail Safari - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 571,
    en: "Safari Zone/Pal Park - HeartGold/SoulSilver",
    fr: "Parc Safari/Parc des Amis - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 572,
    en: "Pokégear Radio: Variety Channel - HeartGold/SoulSilver",
    fr: "Radio Pokématos: Chaîne Variété - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 573,
    en: "The Bug-Catching Contest Begins! - HeartGold/SoulSilver",
    fr: "Le Concours de Capture d'insecte Commence! - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 574,
    en: "The Bug-Catching Contest - HeartGold/SoulSilver",
    fr: "Concours de Capture d'insecte - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 575,
    en: "Pokéathlon: In the Pokéathlon Dome - HeartGold/SoulSilver",
    fr: "Pokéathlon: Dans le Dôme Pokéathlon - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 576,
    en: "Pokéathlon: Opening Ceremony - HeartGold/SoulSilver",
    fr: "Pokéathlon: Cérémonie d'Ouverture - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 577,
    en: "Pokéathlon: An Event Begins! - HeartGold/SoulSilver",
    fr: "Pokéathlon: Ouverture d'une épreuve - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 578,
    en: "Pokéathlon: Event Time! - HeartGold/SoulSilver",
    fr: "Pokéathlon: Épreuve en cours - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 579,
    en: "Pokéathlon: Finals! - HeartGold/SoulSilver",
    fr: "Pokéathlon: Finale - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 580,
    en: "Pokéathlon: Results Announcement - HeartGold/SoulSilver",
    fr: "Pokéathlon: Annonce des résultats - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 581,
    en: "Pokéathlon: Medal Ceremony - HeartGold/SoulSilver",
    fr: "Pokéathlon: Remise des médailles - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 582,
    en: "Pokéathlon Winner! - HeartGold/SoulSilver",
    fr: "Vainqueur au Pokéathlon - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 583,
    en: "Battle Tower Reception Desk - HeartGold/SoulSilver",
    fr: "Tour de Combat (Réception) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 584,
    en: "Battle Tower (Johto)/Frontier Access/Battle Frontier - HeartGold/SoulSilver",
    fr: "Tour de Combat (Johto)/Atrium Combat/Zone de Combat - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 585,
    en: "Battle Factory - HeartGold/SoulSilver",
    fr: "Usine de Combat - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 586,
    en: "Battle Hall - HeartGold/SoulSilver",
    fr: "Scène de Combat - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 587,
    en: "Battle Arcade - HeartGold/SoulSilver",
    fr: "Arcade de Combat - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 588,
    en: "Battle Castle - HeartGold/SoulSilver",
    fr: "Castel de Combat - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 589,
    en: "Battle! (Frontier Brain) - HeartGold/SoulSilver",
    fr: "Combat! (Meneur de Zone) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 590,
    en: "Victory! (Frontier Brain) - HeartGold/SoulSilver",
    fr: "Victoire! (Meneur de Zone) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 591,
    en: "Pokégear Radio: Trainer Channel - HeartGold/SoulSilver",
    fr: "Radio Pokématos: Portrait de Dresseur - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 592,
    en: "Nintendo Wi-Fi Connection - HeartGold/SoulSilver",
    fr: "Connexion Wi-Fi Nintendo - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 593,
    en: "Wi-Fi Plaza - HeartGold/SoulSilver",
    fr: "Square Wi-Fi - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 594,
    en: "Wi-Fi Plaza: Plaza Games - HeartGold/SoulSilver",
    fr: "Jeux du Square Wi-Fi - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 595,
    en: "Wi-Fi Plaza: Parade - HeartGold/SoulSilver",
    fr: "Square Wi-Fi: Parade - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 596,
    en: "Pokégear Radio: Route 101 - HeartGold/SoulSilver",
    fr: "Radio Pokématos: Route 101 - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 597,
    en: "Pokégear Radio: Route 201 - HeartGold/SoulSilver",
    fr: "Radio Pokématos: Route 201 - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 598,
    en: "Pokéwalker - HeartGold/SoulSilver",
    fr: "Pokéwalker - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 599,
    en: "Spiky-Eared Pichu Appears! - HeartGold/SoulSilver",
    fr: "Pichu Troizépi apparaît! - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 600,
    en: "Trainers' Eyes Meet (Kimono Girl) - HeartGold/SoulSilver",
    fr: "Rencontre avec un Dresseur (Kimono) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 601,
    en: "Lugia Appears! - HeartGold/SoulSilver",
    fr: "Lugia apparaît! - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 602,
    en: "Battle! (Lugia) - HeartGold/SoulSilver",
    fr: "Combat! (Lugia) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 603,
    en: "Victory Road - HeartGold/SoulSilver",
    fr: "Route Victoire - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 604,
    en: "The Pokémon League/Indigo Plateau/Route 28/Mt. Silver - HeartGold/SoulSilver",
    fr: "Ligue Pokémon/Plateau Indigo/Route 28/Mont Argenté - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 605,
    en: "Battle! (Champion Lance) - HeartGold/SoulSilver",
    fr: "Combat! (Maître Peter) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 606,
    en: "The Hall of Fame - HeartGold/SoulSilver",
    fr: "Panthéon - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 607,
    en: "Ending Theme - HeartGold/SoulSilver",
    fr: "Générique de fin - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 608,
    en: "The End - HeartGold/SoulSilver",
    fr: "Fin - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 609,
    en: "Battle! (Super-Ancient Pokémon (Kyogre/Groudon/Rayquaza)) - HeartGold/SoulSilver",
    fr: "Combat! (Pokémon ancestral (Kyogre/Groudon/Rayquaza)) - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 610,
    en: "Sinjoh Ruins - HeartGold/SoulSilver",
    fr: "Ruines Sinjoh - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 611,
    en: "Arceus - HeartGold/SoulSilver",
    fr: "Arceus - Or HeartGold/Argent SoulSilver"
  },
  {
    id: 612,
    en: "Coronation Day - Black/White",
    fr: "Couronnement - Noir/Blanc"
  },
  {
    id: 613,
    en: "Title Screen - Black/White",
    fr: "Écran titre - Noir/Blanc"
  },
  {
    id: 614,
    en: "Onward to Adventure! - Black/White",
    fr: "En route pour l'aventure! - Noir/Blanc"
  },
  {
    id: 615,
    en: "A Day of Beginnings - Black/White",
    fr: "Premier jour - Noir/Blanc"
  },
  {
    id: 616,
    en: "Nuvema Town - Black/White",
    fr: "Renouet - Noir/Blanc"
  },
  {
    id: 617,
    en: "Battle! (Cheren/Bianca) - Black/White",
    fr: "Combat! (Tcheren/Bianca) - Noir/Blanc"
  },
  {
    id: 618,
    en: "Hurry Along 1 - Black/White",
    fr: "En route! 1 - Noir/Blanc"
  },
  {
    id: 619,
    en: "Professor Juniper - Black/White",
    fr: "Professeure Keteleeria - Noir/Blanc"
  },
  {
    id: 620,
    en: "Juniper Pokémon Lab - Black/White",
    fr: "Laboratoire du Professeur Keteleeria - Noir/Blanc"
  },
  {
    id: 621,
    en: "Let's Go Together! - Black/White",
    fr: "Ensemble! - Noir/Blanc"
  },
  {
    id: 622,
    en: "Route 1 - Black/White",
    fr: "Route 1 - Noir/Blanc"
  },
  {
    id: 623,
    en: "Battle! (Wild Pokémon) - Black/White",
    fr: "Combat! (Pokémon sauvage) - Noir/Blanc"
  },
  {
    id: 624,
    en: "Victory! (Wild Pokémon) - Black/White",
    fr: "Victoire! (Pokémon sauvage) - Noir/Blanc"
  },
  {
    id: 625,
    en: "Accumula Town - Black/White",
    fr: "Arabelle - Noir/Blanc"
  },
  {
    id: 626,
    en: "Hurry Along 2 - Black/White",
    fr: "En route! 2 - Noir/Blanc"
  },
  {
    id: 627,
    en: "Pokémon Center - Black/White",
    fr: "Centre Pokémon - Noir/Blanc"
  },
  {
    id: 628,
    en: "Team Plasma Plots - Black/White",
    fr: "La Team Plasma complote - Noir/Blanc"
  },
  {
    id: 629,
    en: "Route 2/3 (Summer) - Black/White",
    fr: "Route 2/3 (Été) - Noir/Blanc"
  },
  {
    id: 630,
    en: "Route 2/3 (Spring) - Black/White",
    fr: "Route 2/3 (Printemps) - Noir/Blanc"
  },
  {
    id: 631,
    en: "Trainers' Eyes Meet (Youngster) - Black/White",
    fr: "Rencontre avec un Dresseur (Gamin) - Noir/Blanc"
  },
  {
    id: 632,
    en: "Battle! (Trainer Battle) - Black/White",
    fr: "Combat! (Combat de Dresseur) - Noir/Blanc"
  },
  {
    id: 633,
    en: "Victory! (Trainer Battle) - Black/White",
    fr: "Victoire! (Combat de Dresseur) - Noir/Blanc"
  },
  {
    id: 634,
    en: "Trainers' Eyes Meet (Lass) - Black/White",
    fr: "Rencontre avec un Dresseur (Fillette) - Noir/Blanc"
  },
  {
    id: 635,
    en: "Striaton City - Black/White",
    fr: "Ogoesse - Noir/Blanc"
  },
  {
    id: 636,
    en: "The Dreamyard/Pinwheel Forest/Moor of Icirrus - Black/White",
    fr: "Vestiges du Rêve/Forêt d'Empoigne/Tourbière Flocombe - Noir/Blanc"
  },
  {
    id: 637,
    en: "Team Plasma Appears! - Black/White",
    fr: "La Team Plasma apparaît! - Noir/Blanc"
  },
  {
    id: 638,
    en: "Battle! (Team Plasma) - Black/White",
    fr: "Combat! (Team Plasma) - Noir/Blanc"
  },
  {
    id: 639,
    en: "Victory! (Team Plasma) - Black/White",
    fr: "Victoire! (Team Plasma) - Noir/Blanc"
  },
  {
    id: 640,
    en: "Evolution - Black/White",
    fr: "Évolution - Noir/Blanc"
  },
  {
    id: 641,
    en: "Trainers' Eyes Meet (Twins) - Black/White",
    fr: "Rencontre avec un Dresseur (Jumelles) - Noir/Blanc"
  },
  {
    id: 642,
    en: "Cheren's Theme - Black/White",
    fr: "Thème de Tcheren - Noir/Blanc"
  },
  {
    id: 643,
    en: "There's Trouble! - Black/White",
    fr: "Troubles à Unys! - Noir/Blanc"
  },
  {
    id: 644,
    en: "Nacrene City - Black/White",
    fr: "Maillard - Noir/Blanc"
  },
  {
    id: 645,
    en: "Pokémon Gym - Black/White",
    fr: "Arène Pokémon - Noir/Blanc"
  },
  {
    id: 646,
    en: "Battle! (Gym Leader) - Black/White",
    fr: "Combat! (Champion d'Arène) - Noir/Blanc"
  },
  {
    id: 647,
    en: "Victory Lies Before You! - Black/White",
    fr: "La victoire t'attend! - Noir/Blanc"
  },
  {
    id: 648,
    en: "Victory! (Gym Leader) - Black/White",
    fr: "Victoire! (Champion d'Arène) - Noir/Blanc"
  },
  {
    id: 649,
    en: "Gate - Black/White",
    fr: "Porte - Noir/Blanc"
  },
  {
    id: 650,
    en: "Skyarrow Bridge - Black/White",
    fr: "Pont Sagiciel - Noir/Blanc"
  },
  {
    id: 651,
    en: "Castelia City - Black/White",
    fr: "Volucité - Noir/Blanc"
  },
  {
    id: 652,
    en: "Trainers' Eyes Meet (Clerk Male) - Black/White",
    fr: "Rencontre avec un Dresseur (Employé) - Noir/Blanc"
  },
  {
    id: 653,
    en: "Route 4/5/16 (Spring) - Black/White",
    fr: "Route 4/5/16 (Printemps) - Noir/Blanc"
  },
  {
    id: 654,
    en: "Trainers' Eyes Meet (Backpacker) - Black/White",
    fr: "Rencontre avec un Dresseur (Randonneur/Randonneuse) - Noir/Blanc"
  },
  {
    id: 655,
    en: "Nimbasa City - Black/White",
    fr: "Méanville - Noir/Blanc"
  },
  {
    id: 656,
    en: "Bianca's Theme - Black/White",
    fr: "Thème de Bianca - Noir/Blanc"
  },
  {
    id: 657,
    en: "An Unwavering Heart - Black/White",
    fr: "Constance - Noir/Blanc"
  },
  {
    id: 658,
    en: "Prisoner to a Formula - Black/White",
    fr: "Prisonier de ses équations - Noir/Blanc"
  },
  {
    id: 659,
    en: "Battle! (N) - Black/White",
    fr: "Combat! (N) - Noir/Blanc"
  },
  {
    id: 660,
    en: "A Tight Spot During Battle! - Black/White",
    fr: "Combat: moment critique! - Noir/Blanc"
  },
  {
    id: 661,
    en: "Bicycle - Black/White",
    fr: "Bicyclette - Noir/Blanc"
  },
  {
    id: 662,
    en: "Champion Alder - Black/White",
    fr: "Maître Goyah  - Noir/Blanc"
  },
  {
    id: 663,
    en: "Driftveil Drawbridge - Black/White",
    fr: "Pont Yoneuve - Noir/Blanc"
  },
  {
    id: 664,
    en: "Driftveil City - Black/White",
    fr: "Port Yoneuve - Noir/Blanc"
  },
  {
    id: 665,
    en: "Cold Storage/Twist Mountain/Clay Tunnel - Black/White",
    fr: "Hangar Frigorifique/Mont Foré/Route Bardane - Noir/Blanc"
  },
  {
    id: 666,
    en: "Route 6/7/8/9/17/18 (Spring) - Black/White",
    fr: "Route 6/7/8/9/17/18 (Printemps) - Noir/Blanc"
  },
  {
    id: 667,
    en: "Route 6/7/8/9/17/18 (Summer) - Black/White",
    fr: "Route 6/7/8/9/17/18 (Été) - Noir/Blanc"
  },
  {
    id: 668,
    en: "Trainers' Eyes Meet (Parasol Lady) - Black/White",
    fr: "Rencontre avec un Dresseur (Sœur Parasol) - Noir/Blanc"
  },
  {
    id: 669,
    en: "Trainers' Eyes Meet (Scientist) - Black/White",
    fr: "Rencontre avec un Dresseur (Scientifique) - Noir/Blanc"
  },
  {
    id: 670,
    en: "Chargestone Cave/Wellspring Cave/Mistralton Cave/Challenger's Cave/Relic Passage - Black/White",
    fr: "Grotte Électrolithe/Veine Souterraine/Grotte Parsemille/Antre d'Entraînement/Chemin Enfoui - Noir/Blanc"
  },
  {
    id: 671,
    en: "Mistralton City - Black/White",
    fr: "Parsemille - Noir/Blanc"
  },
  {
    id: 672,
    en: "Cedric Juniper - Black/White",
    fr: "Spruce Keteleeria - Noir/Blanc"
  },
  {
    id: 673,
    en: "Trainers' Eyes Meet (Psychic) - Black/White",
    fr: "Rencontre avec un Dresseur (Kinésiste) - Noir/Blanc"
  },
  {
    id: 674,
    en: "Icirrus City - Black/White",
    fr: "Flocombe - Noir/Blanc"
  },
  {
    id: 675,
    en: "Dragonspiral Tower/Celestial Tower/Giant Chasm - Black/White",
    fr: "Tour Dragospire/Tour des Cieux/Grotte Cyclopéenne - Noir/Blanc"
  },
  {
    id: 676,
    en: "Trainers' Eyes Meet (Team Plasma) - Black/White",
    fr: "Rencontre avec un Dresseur (Team Plasma) - Noir/Blanc"
  },
  {
    id: 677,
    en: "Dragonspiral Tower Top Floor - Black/White",
    fr: "Tour Dragospire: Sommet - Noir/Blanc"
  },
  {
    id: 678,
    en: "Route 4/5/16 (Summer) - Black/White",
    fr: "Route 4/5/16 (Été) - Noir/Blanc"
  },
  {
    id: 679,
    en: "Relic Castle - Black/White",
    fr: "Château Enfoui - Noir/Blanc"
  },
  {
    id: 680,
    en: "Tubeline Bridge - Black/White",
    fr: "Pont Ferroviaire - Noir/Blanc"
  },
  {
    id: 681,
    en: "Shopping Mall Nine - Black/White",
    fr: "Centre Commercial R9 - Noir/Blanc"
  },
  {
    id: 682,
    en: "Trainers' Eyes Meet (Roughneck) - Black/White",
    fr: "Rencontre avec un Dresseur (Loubard) - Noir/Blanc"
  },
  {
    id: 683,
    en: "Opelucid City (Pokémon Black) - Black/White",
    fr: "Janusia (Pokémon Noir) - Noir/Blanc"
  },
  {
    id: 684,
    en: "Opelucid City (Pokémon White) - Black/White",
    fr: "Janusia (Pokémon Blanc) - Noir/Blanc"
  },
  {
    id: 685,
    en: "Route 10 - Black/White",
    fr: "Route 10 - Noir/Blanc"
  },
  {
    id: 686,
    en: "Victory Road - Black/White",
    fr: "Route Victoire - Noir/Blanc"
  },
  {
    id: 687,
    en: "Trainers' Eyes Meet (Ace Trainer) - Black/White",
    fr: "Rencontre avec un Dresseur (Topdresseur) - Noir/Blanc"
  },
  {
    id: 688,
    en: "The Pokémon League - Black/White",
    fr: "Ligue Pokémon - Noir/Blanc"
  },
  {
    id: 689,
    en: "Battle! (Elite Four) - Black/White",
    fr: "Combat! (Conseil 4) - Noir/Blanc"
  },
  {
    id: 690,
    en: "The Pokémon League Besieged! - Black/White",
    fr: "La Ligue Pokémon est assiégée! - Noir/Blanc"
  },
  {
    id: 691,
    en: "Embracing One's Duty - Black/White",
    fr: "Accepter son Destin - Noir/Blanc"
  },
  {
    id: 692,
    en: "N's Castle - Black/White",
    fr: "Palais de N - Noir/Blanc"
  },
  {
    id: 693,
    en: "The Pokémon Child, N - Black/White",
    fr: "N, l'enfant-Pokémon - Noir/Blanc"
  },
  {
    id: 694,
    en: "N's Dragon (Zekrom) - Black/White",
    fr: "Le Dragon de N (Zekrom) - Noir/Blanc"
  },
  {
    id: 695,
    en: "N's Dragon (Reshiram) - Black/White",
    fr: "Le Dragon de N (Reshiram) - Noir/Blanc"
  },
  {
    id: 696,
    en: "The Dragon Awakes (Zekrom) - Black/White",
    fr: "Le Dragon s'éveille (Zekrom) - Noir/Blanc"
  },
  {
    id: 697,
    en: "The Dragon Awakes (Reshiram) - Black/White",
    fr: "Le Dragon s'éveille (Reshiram) - Noir/Blanc"
  },
  {
    id: 698,
    en: "Battle! (Zekrom/Reshiram/Kyurem) - Black/White",
    fr: "Combat! (Zekrom/Reshiram/Kyurem) - Noir/Blanc"
  },
  {
    id: 699,
    en: "Decisive Battle! (N) - Black/White",
    fr: "Combat décisif! (N) - Noir/Blanc"
  },
  {
    id: 700,
    en: "Ghetsis's Ambitions - Black/White",
    fr: "Les ambitions de Ghetis - Noir/Blanc"
  },
  {
    id: 701,
    en: "Battle! (Ghetsis) - Black/White",
    fr: "Combat! (Ghetis) - Noir/Blanc"
  },
  {
    id: 702,
    en: "Farewell - Black/White",
    fr: "Adieu - Noir/Blanc"
  },
  {
    id: 703,
    en: "Ending \"Onward to Our Own Futures\" - Black/White",
    fr: "Générique de Fin: \"Chacun son chemin\" - Noir/Blanc"
  },
  {
    id: 704,
    en: "Looker's Theme - Black/White",
    fr: "Thème de Beladonis - Noir/Blanc"
  },
  {
    id: 705,
    en: "Route 2/3 (Autumn) - Black/White",
    fr: "Route 2/3 (Automne) - Noir/Blanc"
  },
  {
    id: 706,
    en: "Route 2/3 (Winter) - Black/White",
    fr: "Route 2/3 (Hiver) - Noir/Blanc"
  },
  {
    id: 707,
    en: "The Royal Unova - Black/White",
    fr: "L'Étoile d'Unys - Noir/Blanc"
  },
  {
    id: 708,
    en: "Nintendo Wi-Fi Connection - Black/White",
    fr: "Connexion Wi-Fi Nintendo - Noir/Blanc"
  },
  {
    id: 709,
    en: "Global Terminal - Black/White",
    fr: "Terminal Mondial  - Noir/Blanc"
  },
  {
    id: 710,
    en: "GTS - Black/White",
    fr: "GTS - Noir/Blanc"
  },
  {
    id: 711,
    en: "Spin Trade - Black/White",
    fr: "Œuf Surprise - Noir/Blanc"
  },
  {
    id: 712,
    en: "Route 4/5/16 (Autumn) - Black/White",
    fr: "Route 4/5/16 (Automne) - Noir/Blanc"
  },
  {
    id: 713,
    en: "Gear Station - Black/White",
    fr: "Engrenage du Métro - Noir/Blanc"
  },
  {
    id: 714,
    en: "The Battle Subway - Black/White",
    fr: "Métro de Combat - Noir/Blanc"
  },
  {
    id: 715,
    en: "Battle! (Battle Subway Trainer) - Black/White",
    fr: "Combat! (Dresseur du Métro de Combat) - Noir/Blanc"
  },
  {
    id: 716,
    en: "Musical Theater - Black/White",
    fr: "Music-Hall - Noir/Blanc"
  },
  {
    id: 717,
    en: "Dress Up with Props - Black/White",
    fr: "Déguisement - Noir/Blanc"
  },
  {
    id: 718,
    en: "The Curtain for the Musical Rises! - Black/White",
    fr: "Music-Hall: Que le spectacle commence ! - Noir/Blanc"
  },
  {
    id: 719,
    en: "Musical 'Stardom' - Black/White",
    fr: "Music-Hall: Un monde de stars - Noir/Blanc"
  },
  {
    id: 720,
    en: "Musical 'Forest Stroll' - Black/White",
    fr: "Music-Hall: Promenons-nous dans les Bois - Noir/Blanc"
  },
  {
    id: 721,
    en: "Musical 'A Sweet Soirée' - Black/White",
    fr: "Music-Hall: Le Grand Bal - Noir/Blanc"
  },
  {
    id: 722,
    en: "Musical 'Exciting Nimbasa' - Black/White",
    fr: "Music-Hall: Dans la Chaleur de Méanville - Noir/Blanc"
  },
  {
    id: 723,
    en: "A Ferris Wheel Ride Together - Black/White",
    fr: "Sur la grande roue - Noir/Blanc"
  },
  {
    id: 724,
    en: "Route 6/7/8/9/17/18 (Autumn) - Black/White",
    fr: "Route 6/7/8/9/17/18 (Automne) - Noir/Blanc"
  },
  {
    id: 725,
    en: "Route 6/7/8/9/17/18 (Winter) - Black/White",
    fr: "Route 6/7/8/9/17/18 (Hiver) - Noir/Blanc"
  },
  {
    id: 726,
    en: "Battle! (Legendary Pokémon) - Black/White",
    fr: "Combat! (Pokémon légendaire) - Noir/Blanc"
  },
  {
    id: 727,
    en: "Anville Town - Black/White",
    fr: "Rotombourg - Noir/Blanc"
  },
  {
    id: 728,
    en: "Marvelous Bridge - Black/White",
    fr: "Pont de l'Inconnu - Noir/Blanc"
  },
  {
    id: 729,
    en: "Route 11/12/13/14/15/Undella Bay (Spring) - Black/White",
    fr: "Route 11/12/13/14/15/Baie Vaguelone (Printemps) - Noir/Blanc"
  },
  {
    id: 730,
    en: "Route 11/12/13/14/15/Undella Bay (Summer) - Black/White",
    fr: "Route 11/12/13/14/15/Baie Vaguelone (Été) - Noir/Blanc"
  },
  {
    id: 731,
    en: "Trainers' Eyes Meet (Cyclist) - Black/White",
    fr: "Rencontre avec un Dresseur (Cycliste) - Noir/Blanc"
  },
  {
    id: 732,
    en: "Poké Transfer Lab - Black/White",
    fr: "Laboratoire Fret - Noir/Blanc"
  },
  {
    id: 733,
    en: "Poké Transfer: Choose Your Pokémon! - Black/White",
    fr: "Poké Fret: Choisis Un Pokémon! - Noir/Blanc"
  },
  {
    id: 734,
    en: "Poké Transfer: Catch Your Pokémon! - Black/White",
    fr: "Poké Fret: Attrape un Pokémon! - Noir/Blanc"
  },
  {
    id: 735,
    en: "Trainers' Eyes Meet (Pokéfan) - Black/White",
    fr: "Rencontre avec un Dresseur (Pokéfan) - Noir/Blanc"
  },
  {
    id: 736,
    en: "Black City - Black/White",
    fr: "Ville Noire - Noir/Blanc"
  },
  {
    id: 737,
    en: "White Forest - Black/White",
    fr: "Forêt Blanche - Noir/Blanc"
  },
  {
    id: 738,
    en: "Game Sync - Black/White",
    fr: "Synchro-Jeu - Noir/Blanc"
  },
  {
    id: 739,
    en: "Entralink - Black/White",
    fr: "Heylink - Noir/Blanc"
  },
  {
    id: 740,
    en: "Someone's Entralink - Black/White",
    fr: "Un autre Heylink - Noir/Blanc"
  },
  {
    id: 741,
    en: "Trainers' Eyes Meet (Gentleman) - Black/White",
    fr: "Rencontre avec un Dresseur (Gentleman) - Noir/Blanc"
  },
  {
    id: 742,
    en: "Undella Town (Winter) - Black/White",
    fr: "Vaguelone (Hiver) - Noir/Blanc"
  },
  {
    id: 743,
    en: "Undella Town (Spring) - Black/White",
    fr: "Vaguelone (Printemps) - Noir/Blanc"
  },
  {
    id: 744,
    en: "Undella Town (Autumn) - Black/White",
    fr: "Vaguelone (Automne) - Noir/Blanc"
  },
  {
    id: 745,
    en: "Undella Town (Summer) - Black/White",
    fr: "Vaguelone (Été) - Noir/Blanc"
  },
  {
    id: 746,
    en: "Cynthia's Theme - Black/White",
    fr: "Thème de Cynthia - Noir/Blanc"
  },
  {
    id: 747,
    en: "Battle! (Cynthia) - Black/White",
    fr: "Combat! (Cynthia) - Noir/Blanc"
  },
  {
    id: 748,
    en: "Lostlorn Forest/Abundant Shrine - Black/White",
    fr: "Bois des Illusions/Autel Abondance - Noir/Blanc"
  },
  {
    id: 749,
    en: "Battle! (Strong Wild Pokémon) - Black/White",
    fr: "Combat! (Pokémon sauvage puissant) - Noir/Blanc"
  },
  {
    id: 750,
    en: "Surf - Black/White",
    fr: "Surf - Noir/Blanc"
  },
  {
    id: 751,
    en: "Abyssal Ruins - Black/White",
    fr: "Ruines des Abysses - Noir/Blanc"
  },
  {
    id: 752,
    en: "Route 11/12/13/14/15/Undella Bay (Winter) - Black/White",
    fr: "Route 11/12/13/14/15/Baie Vaguelone (Hiver) - Noir/Blanc"
  },
  {
    id: 753,
    en: "Route 11/12/13/14/15/Undella Bay (Autumn) - Black/White",
    fr: "Route 11/12/13/14/15/Baie Vaguelone (Automne) - Noir/Blanc"
  },
  {
    id: 754,
    en: "Lacunosa Town - Black/White",
    fr: "Entrelasque - Noir/Blanc"
  },
  {
    id: 755,
    en: "Village Bridge - Black/White",
    fr: "Pont du Hameau - Noir/Blanc"
  },
  {
    id: 756,
    en: "Mystery Gift - Black/White",
    fr: "Cadeau Mystère - Noir/Blanc"
  },
  {
    id: 757,
    en: "Route 4/5/16 (Winter) - Black/White",
    fr: "Route 4/5/16 (Hiver) - Noir/Blanc"
  },
  {
    id: 758,
    en: "Challenging a Battle Competition - Black/White",
    fr: "Participation à une Compétition - Noir/Blanc"
  },
  {
    id: 759,
    en: "Team Rocket!? - Black/White",
    fr: "La Team Rocket!? - Noir/Blanc"
  },
  {
    id: 760,
    en: "Battle! (Champion Alder) - Black/White",
    fr: "Combat! (Maître Goyah) - Noir/Blanc"
  },
  {
    id: 761,
    en: "Victory! (Champion Alder) - Black/White",
    fr: "Victoire! (Maître Goyah) - Noir/Blanc"
  },
  {
    id: 762,
    en: "Congratulations on Entering the Hall of Fame! - Black/White",
    fr: "Entrée au Panthéon! - Noir/Blanc"
  },
  {
    id: 763,
    en: "Unity Tower - Black/White",
    fr: "Tour Union - Noir/Blanc"
  },
  {
    id: 764,
    en: "Pokémon World Championships Final/Battle! (WCS Champion) - Black/White",
    fr: "Finale du Championnats du monde Pokémon/Combat! (WCS Champion) - Noir/Blanc"
  },
  {
    id: 765,
    en: "Opening - Black 2/White 2",
    fr: "Introduction - Noir 2/Blanc 2"
  },
  {
    id: 766,
    en: "Title Screen - Black 2/White 2",
    fr: "Écran titre - Noir 2/Blanc 2"
  },
  {
    id: 767,
    en: "An Adventure is Beginning - Black 2/White 2",
    fr: "Une aventure commence - Noir 2/Blanc 2"
  },
  {
    id: 768,
    en: "Aspertia City - Black 2/White 2",
    fr: "Pavonnay - Noir 2/Blanc 2"
  },
  {
    id: 769,
    en: "Bianca's Theme - Black 2/White 2",
    fr: "Thème de Bianca - Noir 2/Blanc 2"
  },
  {
    id: 770,
    en: "Route 19/20 (Spring) - Black 2/White 2",
    fr: "Route 19/20 (Printemps) - Noir 2/Blanc 2"
  },
  {
    id: 771,
    en: "Route 19/20 (Summer) - Black 2/White 2",
    fr: "Route 19/20 (Été) - Noir 2/Blanc 2"
  },
  {
    id: 772,
    en: "Battle! (Wild Pokémon) - Black 2/White 2",
    fr: "Combat! (Pokémon sauvage) - Noir 2/Blanc 2"
  },
  {
    id: 773,
    en: "Floccesy Town - Black 2/White 2",
    fr: "Amaillide - Noir 2/Blanc 2"
  },
  {
    id: 774,
    en: "Floccesy Ranch - Black 2/White 2",
    fr: "Ranch d'Amaillide - Noir 2/Blanc 2"
  },
  {
    id: 775,
    en: "Rival Hugh's Theme - Black 2/White 2",
    fr: "Thème du Rival Matis - Noir 2/Blanc 2"
  },
  {
    id: 776,
    en: "Battle! (Rival Hugh) - Black 2/White 2",
    fr: "Combat! (Rival Matis) - Noir 2/Blanc 2"
  },
  {
    id: 777,
    en: "Virbank City - Black 2/White 2",
    fr: "Ondes-sur-Mer - Noir 2/Blanc 2"
  },
  {
    id: 778,
    en: "Virbank City Gym ~ Roxie's Gym (Performed by Koffing and the Toxics) - Black 2/White 2",
    fr: "Arène d'Ondes-sur-Mer ~ Arène de Strykna (Interprété par Smogo et les Toxiques) - Noir 2/Blanc 2"
  },
  {
    id: 779,
    en: "Team Plasma Returns - Black 2/White 2",
    fr: "Le retour de la Team Plasma - Noir 2/Blanc 2"
  },
  {
    id: 780,
    en: "Pokéstar Studios - Black 2/White 2",
    fr: "Pokéwood - Noir 2/Blanc 2"
  },
  {
    id: 781,
    en: "Filming Underway at Pokéstar Studios! - Black 2/White 2",
    fr: "Pokéwood: Tournage en cours - Noir 2/Blanc 2"
  },
  {
    id: 782,
    en: "Pokéstar Studios: Battle - Black 2/White 2",
    fr: "Pokéwood: Combat - Noir 2/Blanc 2"
  },
  {
    id: 783,
    en: "Pokéstar Studios: Glory - Black 2/White 2",
    fr: "Pokéwood: Gloire - Noir 2/Blanc 2"
  },
  {
    id: 784,
    en: "Pokéstar Studios: Defeat - Black 2/White 2",
    fr: "Pokéwood: Défaite - Noir 2/Blanc 2"
  },
  {
    id: 785,
    en: "Pokéstar Studios: Invasion - Black 2/White 2",
    fr: "Pokéwood: Invasion - Noir 2/Blanc 2"
  },
  {
    id: 786,
    en: "Pokéstar Studios: Success - Black 2/White 2",
    fr: "Pokéwood: Réussite - Noir 2/Blanc 2"
  },
  {
    id: 787,
    en: "Pokéstar Studios: Retreat - Black 2/White 2",
    fr: "Pokéwood: Abandon - Noir 2/Blanc 2"
  },
  {
    id: 788,
    en: "Pokéstar Studios: Weird - Black 2/White 2",
    fr: "Pokéwood: Étrange - Noir 2/Blanc 2"
  },
  {
    id: 789,
    en: "Pokéstar Studios: Love - Black 2/White 2",
    fr: "Pokéwood: Amour - Noir 2/Blanc 2"
  },
  {
    id: 790,
    en: "Pokéstar Studios: Sorrow - Black 2/White 2",
    fr: "Pokéwood: Tristesse - Noir 2/Blanc 2"
  },
  {
    id: 791,
    en: "Pokéstar Studios: Horror - Black 2/White 2",
    fr: "Pokéwood: Horreur - Noir 2/Blanc 2"
  },
  {
    id: 792,
    en: "Pokéstar Studios: Purified - Black 2/White 2",
    fr: "Pokéwood: Pureté - Noir 2/Blanc 2"
  },
  {
    id: 793,
    en: "Pokéstar Studios: Fear - Black 2/White 2",
    fr: "Pokéwood: Terreur - Noir 2/Blanc 2"
  },
  {
    id: 794,
    en: "Pokéstar Studios: Humor - Black 2/White 2",
    fr: "Pokéwood: Humour - Noir 2/Blanc 2"
  },
  {
    id: 795,
    en: "Pokéstar Studios: Despair - Black 2/White 2",
    fr: "Pokéwood: Désespoir - Noir 2/Blanc 2"
  },
  {
    id: 796,
    en: "Pokéstar Studios: Shock - Black 2/White 2",
    fr: "Pokéwood: Choc - Noir 2/Blanc 2"
  },
  {
    id: 797,
    en: "Castelia Sewers/Virbank Complex - Black 2/White 2",
    fr: "Égouts de Volucité/Z.I. d'Ondes-sur-Mer - Noir 2/Blanc 2"
  },
  {
    id: 798,
    en: "Castelia City Gym - Black 2/White 2",
    fr: "Arène de Volucité - Noir 2/Blanc 2"
  },
  {
    id: 799,
    en: "Trainers' Eyes Meet (Harlequin) - Black 2/White 2",
    fr: "Rencontre avec un Dresseur (Arlequin) - Noir 2/Blanc 2"
  },
  {
    id: 800,
    en: "Funfest Mission Start! - Black 2/White 2",
    fr: "Mission Fiesta Ouverte! - Noir 2/Blanc 2"
  },
  {
    id: 801,
    en: "Colress's Theme - Black 2/White 2",
    fr: "Thème de Nikolaï - Noir 2/Blanc 2"
  },
  {
    id: 802,
    en: "Battle! (Trainer Battle) - Black 2/White 2",
    fr: "Combat! (Combat de Dresseur) - Noir 2/Blanc 2"
  },
  {
    id: 803,
    en: "Join Avenue - Black 2/White 2",
    fr: "Galerie Concorde - Noir 2/Blanc 2"
  },
  {
    id: 804,
    en: "Join Avenue Meet and Greet! - Black 2/White 2",
    fr: "Galerie Concorde: Félicitations - Noir 2/Blanc 2"
  },
  {
    id: 805,
    en: "Nimbasa City Gym: Runway - Black 2/White 2",
    fr: "Arène de Méanville: Circuit - Noir 2/Blanc 2"
  },
  {
    id: 806,
    en: "Trainers' Eyes Meet (Beauty) - Black 2/White 2",
    fr: "Rencontre avec un Dresseur (Canon) - Noir 2/Blanc 2"
  },
  {
    id: 807,
    en: "Nimbasa City Gym: Stage - Black 2/White 2",
    fr: "Arène de Méanville: Plate-forme - Noir 2/Blanc 2"
  },
  {
    id: 808,
    en: "Battle! (Gym Leader) - Black 2/White 2",
    fr: "Combat! (Champion d'Arène) - Noir 2/Blanc 2"
  },
  {
    id: 809,
    en: "Victory Lies Before You! - Black 2/White 2",
    fr: "La victoire t'attend! - Noir 2/Blanc 2"
  },
  {
    id: 810,
    en: "Driftveil City Gym - Black 2/White 2",
    fr: "Arène de Port Yoneuve - Noir 2/Blanc 2"
  },
  {
    id: 811,
    en: "Pokémon World Tournament (PWT) - Black 2/White 2",
    fr: "Pokémon World Tournament (PWT) - Noir 2/Blanc 2"
  },
  {
    id: 812,
    en: "The PWT - Black 2/White 2",
    fr: "Au PWT - Noir 2/Blanc 2"
  },
  {
    id: 813,
    en: "Battle! (Gym Leader—Kanto Version) - Black 2/White 2",
    fr: "Combat! (Champion d'Arène—Version Kanto) - Noir 2/Blanc 2"
  },
  {
    id: 814,
    en: "Battle! (Champion—Kanto Version) - Black 2/White 2",
    fr: "Combat! (Maître—Version Kanto) - Noir 2/Blanc 2"
  },
  {
    id: 815,
    en: "Battle! (Gym Leader—Johto Version) - Black 2/White 2",
    fr: "Combat! (Champion d'Arène—Version Johto) - Noir 2/Blanc 2"
  },
  {
    id: 816,
    en: "Battle! (Champion—Johto Version) - Black 2/White 2",
    fr: "Combat! (Maître—Version Johto) - Noir 2/Blanc 2"
  },
  {
    id: 817,
    en: "Battle! (Gym Leader—Hoenn Version) - Black 2/White 2",
    fr: "Combat! (Champion d'Arène—Hoenn Version) - Noir 2/Blanc 2"
  },
  {
    id: 818,
    en: "Battle! (Champion—Hoenn Version) - Black 2/White 2",
    fr: "Combat! (Maître—Hoenn Version) - Noir 2/Blanc 2"
  },
  {
    id: 819,
    en: "Battle! (Gym Leader—Sinnoh Version) - Black 2/White 2",
    fr: "Combat! (Champion d'Arène—Sinnoh Version) - Noir 2/Blanc 2"
  },
  {
    id: 820,
    en: "Battle! (Champion—Sinnoh Version) - Black 2/White 2",
    fr: "Combat! (Maître—Sinnoh Version) - Noir 2/Blanc 2"
  },
  {
    id: 821,
    en: "PWT Final Round! - Black 2/White 2",
    fr: "PWT: Finale - Noir 2/Blanc 2"
  },
  {
    id: 822,
    en: "Winning in the PWT! - Black 2/White 2",
    fr: "PWT: Victoire - Noir 2/Blanc 2"
  },
  {
    id: 823,
    en: "PWT Victory! - Black 2/White 2",
    fr: "PWT: Victoire finale - Noir 2/Blanc 2"
  },
  {
    id: 824,
    en: "Underground Ruins - Black 2/White 2",
    fr: "Ruines Enfouies - Noir 2/Blanc 2"
  },
  {
    id: 825,
    en: "Battle! (Regirock/Regice/Registeel) - Black 2/White 2",
    fr: "Combat! (Regirock/Regice/Registeel) - Noir 2/Blanc 2"
  },
  {
    id: 826,
    en: "Aboard the Plasma Frigate - Black 2/White 2",
    fr: "Sur la Frégate Plasma - Noir 2/Blanc 2"
  },
  {
    id: 827,
    en: "Zinzolin's Theme - Black 2/White 2",
    fr: "Thème de Lilien - Noir 2/Blanc 2"
  },
  {
    id: 828,
    en: "Cheren's Theme - Black 2/White 2",
    fr: "Thème de Tcheren - Noir 2/Blanc 2"
  },
  {
    id: 829,
    en: "Mistralton City Gym - Black 2/White 2",
    fr: "Arène de Parsemille - Noir 2/Blanc 2"
  },
  {
    id: 830,
    en: "Lentimas Town - Black 2/White 2",
    fr: "Arpentières - Noir 2/Blanc 2"
  },
  {
    id: 831,
    en: "The Road to Reversal Mountain - Black 2/White 2",
    fr: "La route du Mont Renenvers - Noir 2/Blanc 2"
  },
  {
    id: 832,
    en: "Reversal Mountain (Pokémon Black) - Black 2/White 2",
    fr: "Mont Renenvers (Pokémon Noir) - Noir 2/Blanc 2"
  },
  {
    id: 833,
    en: "Reversal Mountain (Pokémon White) - Black 2/White 2",
    fr: "Mont Renenvers (Pokémon Blanc) - Noir 2/Blanc 2"
  },
  {
    id: 834,
    en: "Strange House - Black 2/White 2",
    fr: "Manoir de l'Étrange - Noir 2/Blanc 2"
  },
  {
    id: 835,
    en: "Opelucid City Gym - Black 2/White 2",
    fr: "Arène de Janusia - Noir 2/Blanc 2"
  },
  {
    id: 836,
    en: "Opelucid City Attacked! - Black 2/White 2",
    fr: "Janusia est attaquée! - Noir 2/Blanc 2"
  },
  {
    id: 837,
    en: "The Frozen City - Black 2/White 2",
    fr: "La Ville au manteau d'argent - Noir 2/Blanc 2"
  },
  {
    id: 838,
    en: "Trainers' Eyes Meet (Team Plasma) - Black 2/White 2",
    fr: "Rencontre avec un Dresseur (Team Plasma) - Noir 2/Blanc 2"
  },
  {
    id: 839,
    en: "Battle! (Team Plasma) - Black 2/White 2",
    fr: "Combat! (Team Plasma) - Noir 2/Blanc 2"
  },
  {
    id: 840,
    en: "Shadow Triad's Theme - Black 2/White 2",
    fr: "Thème du Trio des Ombres - Noir 2/Blanc 2"
  },
  {
    id: 841,
    en: "Marine Tube - Black 2/White 2",
    fr: "Aquatube - Noir 2/Blanc 2"
  },
  {
    id: 842,
    en: "Humilau City - Black 2/White 2",
    fr: "Papeloa - Noir 2/Blanc 2"
  },
  {
    id: 843,
    en: "Humilau City Gym - Black 2/White 2",
    fr: "Arène de Papeloa - Noir 2/Blanc 2"
  },
  {
    id: 844,
    en: "Route 21/22 (Spring) - Black 2/White 2",
    fr: "Route 21/22 (Printemps) - Noir 2/Blanc 2"
  },
  {
    id: 845,
    en: "Route 21/22 (Summer) - Black 2/White 2",
    fr: "Route 21/22 (Été) - Noir 2/Blanc 2"
  },
  {
    id: 846,
    en: "Plasma Frigate Sortie - Black 2/White 2",
    fr: "La Frégate Plasma est lancée! - Noir 2/Blanc 2"
  },
  {
    id: 847,
    en: "Infiltrating the Plasma Frigate! - Black 2/White 2",
    fr: "Infiltration de la Frégate Plasma - Noir 2/Blanc 2"
  },
  {
    id: 848,
    en: "Battle! (Colress) - Black 2/White 2",
    fr: "Combat! (Nikolaï) - Noir 2/Blanc 2"
  },
  {
    id: 849,
    en: "Confrontation - Black 2/White 2",
    fr: "Confrontation - Noir 2/Blanc 2"
  },
  {
    id: 850,
    en: "Absorption - Black 2/White 2",
    fr: "Absorption - Noir 2/Blanc 2"
  },
  {
    id: 851,
    en: "Fusion - Black 2/White 2",
    fr: "Fusion - Noir 2/Blanc 2"
  },
  {
    id: 852,
    en: "Battle! (Black Kyurem/White Kyurem) - Black 2/White 2",
    fr: "Combat! (Kyurem Noir/Kyurem Blanc) - Noir 2/Blanc 2"
  },
  {
    id: 853,
    en: "Battle! (Ghetsis) - Black 2/White 2",
    fr: "Combat! (Ghetis) - Noir 2/Blanc 2"
  },
  {
    id: 854,
    en: "Route 23 - Black 2/White 2",
    fr: "Route 23 - Noir 2/Blanc 2"
  },
  {
    id: 855,
    en: "N's Castle - Black 2/White 2",
    fr: "Palais de N - Noir 2/Blanc 2"
  },
  {
    id: 856,
    en: "N's Room - Black 2/White 2",
    fr: "Chambre de N - Noir 2/Blanc 2"
  },
  {
    id: 857,
    en: "N's Theme - Black 2/White 2",
    fr: "Thème de N - Noir 2/Blanc 2"
  },
  {
    id: 858,
    en: "Battle! (N) - Black 2/White 2",
    fr: "Combat! (N) - Noir 2/Blanc 2"
  },
  {
    id: 859,
    en: "Unova Link - Black 2/White 2",
    fr: "Lien Unys - Noir 2/Blanc 2"
  },
  {
    id: 860,
    en: "Xtransceiver Minigames - Black 2/White 2",
    fr: "Vokit: Mini-jeux - Noir 2/Blanc 2"
  },
  {
    id: 861,
    en: "Route 19/20 (Autumn) - Black 2/White 2",
    fr: "Route 19/20 (Automne) - Noir 2/Blanc 2"
  },
  {
    id: 862,
    en: "Route 19/20 (Winter) - Black 2/White 2",
    fr: "Route 19/20 (Hiver) - Noir 2/Blanc 2"
  },
  {
    id: 863,
    en: "Cave of Being - Black 2/White 2",
    fr: "Caverne des Esprits - Noir 2/Blanc 2"
  },
  {
    id: 864,
    en: "Black Tower: Entrance - Black 2/White 2",
    fr: "Gratte-Ciel Noir: Entrée - Noir 2/Blanc 2"
  },
  {
    id: 865,
    en: "Black Tower - Black 2/White 2",
    fr: "Gratte-Ciel Noir - Noir 2/Blanc 2"
  },
  {
    id: 866,
    en: "White Treehollow: Entrance - Black 2/White 2",
    fr: "Arbre Creux Blanc: Entrée - Noir 2/Blanc 2"
  },
  {
    id: 867,
    en: "White Treehollow - Black 2/White 2",
    fr: "Arbre Creux Blanc - Noir 2/Blanc 2"
  },
  {
    id: 868,
    en: "Route 21/22 (Autumn) - Black 2/White 2",
    fr: "Route 21/22 (Automne) - Noir 2/Blanc 2"
  },
  {
    id: 869,
    en: "Route 21/22 (Winter) - Black 2/White 2",
    fr: "Route 21/22 (Hiver) - Noir 2/Blanc 2"
  },
  {
    id: 870,
    en: "Battle! (Champion Iris) - Black 2/White 2",
    fr: "Combat! (Maître Iris) - Noir 2/Blanc 2"
  },
  {
    id: 871,
    en: "Staff Credits/Ending Theme - Black 2/White 2",
    fr: "Générique de fin - Noir 2/Blanc 2"
  },
  {
    id: 872,
    en: "The End - Black 2/White 2",
    fr: "Fin - Noir 2/Blanc 2"
  },
  {
    id: 873,
    en: "Musical: Charming Munna - Black 2/White 2",
    fr: "Music-Hall: Le Munna Amoureux - Noir 2/Blanc 2"
  },
  {
    id: 874,
    en: "Musical: Pokémon Party! - Black 2/White 2",
    fr: "Music-Hall: Pokémon Party! - Noir 2/Blanc 2"
  },
  {
    id: 875,
    en: "Musical: Carnival Pokémon - Black 2/White 2",
    fr: "Music-Hall: Carnaval Pokémon - Noir 2/Blanc 2"
  },
  {
    id: 876,
    en: "Musical: Meloettaaa!!! - Black 2/White 2",
    fr: "Music-Hall: MELOETTA!!! - Noir 2/Blanc 2"
  },
  {
    id: 877,
    en: "Musical: Carnival Ludicolo - Black 2/White 2",
    fr: "Music-Hall: Carnaval Ludicolo - Noir 2/Blanc 2"
  },
  {
    id: 878,
    en: "Relic Song - Black 2/White 2",
    fr: "Chant Antique - Noir 2/Blanc 2"
  },
  {
    id: 879,
    en: "Hidden Grotto - Black 2/White 2",
    fr: "Trouée Cachée - Noir 2/Blanc 2"
  },
  {
    id: 880,
    en: "Title Screen - X/Y",
    fr: "Écran titre - X/Y"
  },
  {
    id: 881,
    en: "Kalos Region Theme - X/Y",
    fr: "Thème de la région de Kalos - X/Y"
  },
  {
    id: 882,
    en: "An Adventure Is Beginning - X/Y",
    fr: "L'aventure commence - X/Y"
  },
  {
    id: 883,
    en: "Vaniville Town - X/Y",
    fr: "Bourg Croquis - X/Y"
  },
  {
    id: 884,
    en: "Route 1 ~ Vaniville Pathway - X/Y",
    fr: "Route 1 ~ Sentier Croquis - X/Y"
  },
  {
    id: 885,
    en: "Aquacorde Town/Ambrette Town - X/Y",
    fr: "Quarellis/Roche-sur-Gliffe - X/Y"
  },
  {
    id: 886,
    en: "Friends Theme \"A New Meeting\" - X/Y",
    fr: "Musique des amis: Rencontre! - X/Y"
  },
  {
    id: 887,
    en: "It's a Pokémon Battle! - X/Y",
    fr: "Combat de Pokémon! - X/Y"
  },
  {
    id: 888,
    en: "Battle! (Friend) - X/Y",
    fr: "Combat! (Amis) - X/Y"
  },
  {
    id: 889,
    en: "Hurry Along 1 - X/Y",
    fr: "En route! 1 - X/Y"
  },
  {
    id: 890,
    en: "Route 2/3 ~ Avance Trail/Ouvert Way - X/Y",
    fr: "Route 2/3 ~ Chemin Progrès/Chemin Ouvert - X/Y"
  },
  {
    id: 891,
    en: "Santalune Forest/Reflection Cave/Frost Cavern/Route 20 (Winding Woods) - X/Y",
    fr: "Forêt de Neuvartault/Grotte Miroitante/Caverne Gelée/Route 20 (Bois du Dédale) - X/Y"
  },
  {
    id: 892,
    en: "Battle! (Wild Pokémon) - X/Y",
    fr: "Combat! (Pokémon sauvage) - X/Y"
  },
  {
    id: 893,
    en: "Victory! (Wild Pokémon) - X/Y",
    fr: "Victoire! (Pokémon sauvage) - X/Y"
  },
  {
    id: 894,
    en: "Trainers' Eyes Meet (Youngster) - X/Y",
    fr: "Rencontre avec un Dresseur (Gamin) - X/Y"
  },
  {
    id: 895,
    en: "Trainers' Eyes Meet (Lass) - X/Y",
    fr: "Rencontre avec un Dresseur (Fillette) - X/Y"
  },
  {
    id: 896,
    en: "Battle! (Trainer Battle) - X/Y",
    fr: "Combat! (Combat de Dresseur) - X/Y"
  },
  {
    id: 897,
    en: "Victory! (Trainer Battle) - X/Y",
    fr: "Victoire! (Combat de Dresseur) - X/Y"
  },
  {
    id: 898,
    en: "Santalune City - X/Y",
    fr: "Neuvartault - X/Y"
  },
  {
    id: 899,
    en: "Pokémon Center - X/Y",
    fr: "Centre Pokémon - X/Y"
  },
  {
    id: 900,
    en: "Pokémon Gym - X/Y",
    fr: "Arène Pokémon - X/Y"
  },
  {
    id: 901,
    en: "Battle! (Gym Leader) - X/Y",
    fr: "Combat! (Champion d'Arène) - X/Y"
  },
  {
    id: 902,
    en: "Victory! (Gym Leader) - X/Y",
    fr: "Victoire! (Champion d'Arène) - X/Y"
  },
  {
    id: 903,
    en: "Route 4/5/6/7/22 ~ Parterre Way/Versant Road/Palais Lane/Rivière Walk/Détourner Way - X/Y",
    fr: "Route 4/5/6/7/22 ~ Route Fleurie/Chemin du Versant/Allée du Palais/Chemin des Berges/Chemin Détour - X/Y"
  },
  {
    id: 904,
    en: "Trainers' Eyes Meet (Poké Fan) - X/Y",
    fr: "Rencontre avec un Dresseur (Pokéfan) - X/Y"
  },
  {
    id: 905,
    en: "Sina and Dexio - X/Y",
    fr: "Sina et Dexio - X/Y"
  },
  {
    id: 906,
    en: "Gate - X/Y",
    fr: "Porte - X/Y"
  },
  {
    id: 907,
    en: "Lumiose City - X/Y",
    fr: "Illumis - X/Y"
  },
  {
    id: 908,
    en: "The Sycamore Pokémon Lab - X/Y",
    fr: "Laboratoire du Professeur Platane - X/Y"
  },
  {
    id: 909,
    en: "Professor Sycamore's Theme - X/Y",
    fr: "Thème du Professeur Platane - X/Y"
  },
  {
    id: 910,
    en: "Dark Skies - X/Y",
    fr: "Sombre horizon - X/Y"
  },
  {
    id: 911,
    en: "Trainers' Eyes Meet (Twins) - X/Y",
    fr: "Rencontre avec un Dresseur (Jumelles) - X/Y"
  },
  {
    id: 912,
    en: "Camphrier Town/Couriway Town - X/Y",
    fr: "Fort-Vanitas/Mozheim - X/Y"
  },
  {
    id: 913,
    en: "Trainers' Eyes Meet (Tourist) - X/Y",
    fr: "Rencontre avec un Dresseur (Touriste) - X/Y"
  },
  {
    id: 914,
    en: "Parfum Palace - X/Y",
    fr: "Palais Chaydeuvre - X/Y"
  },
  {
    id: 915,
    en: "Together with Shauna - X/Y",
    fr: "Avec Sannah - X/Y"
  },
  {
    id: 916,
    en: "Hurry Along 2 - X/Y",
    fr: "En route! 2 - X/Y"
  },
  {
    id: 917,
    en: "Trainers' Eyes Meet (Butler) - X/Y",
    fr: "Rencontre avec un Dresseur (Majordome) - X/Y"
  },
  {
    id: 918,
    en: "Trainers' Eyes Meet (Maid) - X/Y",
    fr: "Rencontre avec un Dresseur (Gouvernante) - X/Y"
  },
  {
    id: 919,
    en: "Route 8/9/10/11/12/13 ~ Muraille Coast/Spikes Passage/Menhir Trail/Miroir Way/Fourrage Road/Lumiose Badlands - X/Y",
    fr: "Route 8/9/10/11/12/13 ~ Falaise Muraille/Piste Piquante/Route Menhir/Chemin Miroir/Chemin Fourrage/Steppe d'Illumis - X/Y"
  },
  {
    id: 920,
    en: "Glittering Cave/Connecting Cave (Zubat Roost)/Route 14 (Laverre Nature Trail)/Lost Hotel/Terminus Cave - X/Y",
    fr: "Grotte Étincelante/Cave Connecterre (Antre Nosferapti)/Route 14 (Laie Romant-sous-Bois)/Hôtel Désolation/Grotte Coda - X/Y"
  },
  {
    id: 921,
    en: "Team Flare Appears! - X/Y",
    fr: "La Team Flare apparaît! - X/Y"
  },
  {
    id: 922,
    en: "Evolution - X/Y",
    fr: "Évolution - X/Y"
  },
  {
    id: 923,
    en: "Trainers' Eyes Meet (Swimmer Female) - X/Y",
    fr: "Rencontre avec un Dresseur (Nageuse) - X/Y"
  },
  {
    id: 924,
    en: "Cyllage City - X/Y",
    fr: "Relifac-le-Haut - X/Y"
  },
  {
    id: 925,
    en: "Bicycle - X/Y",
    fr: "Bicyclette - X/Y"
  },
  {
    id: 926,
    en: "Trainers' Eyes Meet (Hiker) - X/Y",
    fr: "Rencontre avec un Dresseur (Montagnard) - X/Y"
  },
  {
    id: 927,
    en: "Geosenge Town - X/Y",
    fr: "Cromlac'h - X/Y"
  },
  {
    id: 928,
    en: "Trainers' Eyes Meet (Honeymooners) - X/Y",
    fr: "Rencontre avec un Dresseur (Jeunes Tourtereaux) - X/Y"
  },
  {
    id: 929,
    en: "Trainers' Eyes Meet (Black Belt) - X/Y",
    fr: "Rencontre avec un Dresseur (Karatéka) - X/Y"
  },
  {
    id: 930,
    en: "Shalour City - X/Y",
    fr: "Yantreizh - X/Y"
  },
  {
    id: 931,
    en: "Tower of Mastery - X/Y",
    fr: "Tour Maîtrise - X/Y"
  },
  {
    id: 932,
    en: "Trainers' Eyes Meet (Roller Skater) - X/Y",
    fr: "Rencontre avec un Dresseur (Roller Skateur) - X/Y"
  },
  {
    id: 933,
    en: "Battle! (Successor Korrina) - X/Y",
    fr: "Combat! (Cornélia l'Héritière) - X/Y"
  },
  {
    id: 934,
    en: "Surf - X/Y",
    fr: "Surf - X/Y"
  },
  {
    id: 935,
    en: "Trainers' Eyes Meet (Swimmer Male) - X/Y",
    fr: "Rencontre avec un Dresseur (Nageur) - X/Y"
  },
  {
    id: 936,
    en: "Riding Skiddo - X/Y",
    fr: "À dos de Cabriolaine - X/Y"
  },
  {
    id: 937,
    en: "Coumarine City - X/Y",
    fr: "Port Tempères - X/Y"
  },
  {
    id: 938,
    en: "How About a Song? \"An Unwavering Heart\" - X/Y",
    fr: "Veux-tu écouter \"Constance\" ? - X/Y"
  },
  {
    id: 939,
    en: "The Kalos Power Plant/Poké Ball Factory - X/Y",
    fr: "Centrale de Kalos/Usine de Poké Balls - X/Y"
  },
  {
    id: 940,
    en: "Trainers' Eyes Meet (Team Flare) - X/Y",
    fr: "Rencontre avec un Dresseur (Team Flare) - X/Y"
  },
  {
    id: 941,
    en: "Battle! (Team Flare) - X/Y",
    fr: "Combat! (Team Flare) - X/Y"
  },
  {
    id: 942,
    en: "A Mysterious Figure - X/Y",
    fr: "Individu mystérieux - X/Y"
  },
  {
    id: 943,
    en: "Friends Theme \"Reunited\" - X/Y",
    fr: "Musique des amis: Réunis - X/Y"
  },
  {
    id: 944,
    en: "Scary House - X/Y",
    fr: "Maison Hantée - X/Y"
  },
  {
    id: 945,
    en: "Laverre City - X/Y",
    fr: "Romant-sous-Bois - X/Y"
  },
  {
    id: 946,
    en: "Trainers' Eyes Meet (Furisode Girl) - X/Y",
    fr: "Rencontre avec un Dresseur (Fille en Kimono) - X/Y"
  },
  {
    id: 947,
    en: "Route 15/16/17 ~ Brun Way/Mélancolie Path/Mamoswine Road - X/Y",
    fr: "Route 15/16/17 ~ Chemin Brun/Chemin Tristesse/Route Mammochon - X/Y"
  },
  {
    id: 948,
    en: "Dendemille Town - X/Y",
    fr: "La Frescale - X/Y"
  },
  {
    id: 949,
    en: "Anistar City - X/Y",
    fr: "Flusselles - X/Y"
  },
  {
    id: 950,
    en: "Trainers' Eyes Meet (Psychic) - X/Y",
    fr: "Rencontre avec un Dresseur (Kinésiste) - X/Y"
  },
  {
    id: 951,
    en: "Lysandre Labs - X/Y",
    fr: "Labos Lysandre - X/Y"
  },
  {
    id: 952,
    en: "An Eternal Prison - X/Y",
    fr: "Prison éternelle - X/Y"
  },
  {
    id: 953,
    en: "The Ultimate Weapon Deployed - X/Y",
    fr: "L'arme suprême est déployée - X/Y"
  },
  {
    id: 954,
    en: "Team Flare Secret HQ - X/Y",
    fr: "Repaire de la Team Flare - X/Y"
  },
  {
    id: 955,
    en: "The Legendary Pokémon Awoken - X/Y",
    fr: "Un Pokémon légendaire s'éveille - X/Y"
  },
  {
    id: 956,
    en: "Battle! (Xerneas/Yveltal/Zygarde) - X/Y",
    fr: "Combat! (Xerneas/Yveltal/Zygarde) - X/Y"
  },
  {
    id: 957,
    en: "Battle! (Lysandre) - X/Y",
    fr: "Combat! (Lysandre) - X/Y"
  },
  {
    id: 958,
    en: "Victory! (Team Flare) - X/Y",
    fr: "Victoire! (Team Flare) - X/Y"
  },
  {
    id: 959,
    en: "Firing the Ultimate Weapon (Pokémon X) - X/Y",
    fr: "Activation de l'arme suprême (Pokémon X) - X/Y"
  },
  {
    id: 960,
    en: "Firing the Ultimate Weapon (Pokémon Y) - X/Y",
    fr: "Activation de l'arme suprême (Pokémon Y) - X/Y"
  },
  {
    id: 961,
    en: "AZ - X/Y",
    fr: "A.Z. - X/Y"
  },
  {
    id: 962,
    en: "Route 18/19/21 ~ Vallée Etroite Way/Grande Vallée Way/Dernière Way - X/Y",
    fr: "Route 18/19/21 ~ Chemin des Gorges/Chemin du Val/Chemin Final - X/Y"
  },
  {
    id: 963,
    en: "Friends Theme \"Friends Forever\" - X/Y",
    fr: "Musique des amis: Pour toujours - X/Y"
  },
  {
    id: 964,
    en: "Snowbelle City - X/Y",
    fr: "Auffrac-les-Congères - X/Y"
  },
  {
    id: 965,
    en: "How About a Song? \"Jubilife City\" - X/Y",
    fr: "Veux-tu écouter \"Féli-Cité\" ? - X/Y"
  },
  {
    id: 966,
    en: "Pokémon Village - X/Y",
    fr: "Village Pokémon - X/Y"
  },
  {
    id: 967,
    en: "Victory Road - X/Y",
    fr: "Route Victoire - X/Y"
  },
  {
    id: 968,
    en: "Trainers' Eyes Meet (Ace Trainer) - X/Y",
    fr: "Rencontre avec un Dresseur (Topdresseur) - X/Y"
  },
  {
    id: 969,
    en: "The Pokémon League - X/Y",
    fr: "Ligue Pokémon - X/Y"
  },
  {
    id: 970,
    en: "Battle! (Elite Four) - X/Y",
    fr: "Combat! (Conseil 4) - X/Y"
  },
  {
    id: 971,
    en: "Battle! (Champion Diantha) - X/Y",
    fr: "Combat! (Dianthéa le Maître) - X/Y"
  },
  {
    id: 972,
    en: "Victory! (Champion Diantha) - X/Y",
    fr: "Victoire! (Dianthéa le Maître) - X/Y"
  },
  {
    id: 973,
    en: "Congratulations on Entering the Hall of Fame! - X/Y",
    fr: "Entrée au Panthéon! - X/Y"
  },
  {
    id: 974,
    en: "The Sun Shines Down - X/Y",
    fr: "Sous le soleil - X/Y"
  },
  {
    id: 975,
    en: "I'll Go With You/Ending Theme (Part 1) - X/Y",
    fr: "Nous irons ensemble/Générique de fin (Partie 1) - X/Y"
  },
  {
    id: 976,
    en: "KISEKI/Ending Theme (Part 2) - X/Y",
    fr: "KISEKI/Générique de fin (Partie 2) - X/Y"
  },
  {
    id: 977,
    en: "FIN/The End - X/Y",
    fr: "FIN - X/Y"
  },
  {
    id: 978,
    en: "Kiloude City - X/Y",
    fr: "Batisques - X/Y"
  },
  {
    id: 979,
    en: "Battle Maison/Battle Chateau - X/Y",
    fr: "Maison de Combat/Château de Combat - X/Y"
  },
  {
    id: 980,
    en: "Friend Safari - X/Y",
    fr: "Safari des Amis - X/Y"
  },
  {
    id: 981,
    en: "Gogoat Shuttle - X/Y",
    fr: "Navette Chevroum - X/Y"
  },
  {
    id: 982,
    en: "Shopping - X/Y",
    fr: "Shopping - X/Y"
  },
  {
    id: 983,
    en: "Sushi High Roller - X/Y",
    fr: "Sushi Sans Chichis - X/Y"
  },
  {
    id: 984,
    en: "Boutique - X/Y",
    fr: "Boutique de Vêtements - X/Y"
  },
  {
    id: 985,
    en: "Coiffure Clips - X/Y",
    fr: "Détente et Beauté - X/Y"
  },
  {
    id: 986,
    en: "PR Video Studio - X/Y",
    fr: "Studio de Vidéos Dresseur - X/Y"
  },
  {
    id: 987,
    en: "Looker's Theme - X/Y",
    fr: "Thème de Beladonis - X/Y"
  },
  {
    id: 988,
    en: "Trainers' Eyes Meet (Punk Guy) - X/Y",
    fr: "Rencontre avec un Dresseur (Vaurien) - X/Y"
  },
  {
    id: 989,
    en: "Hotel Richissime - X/Y",
    fr: "Grand Hôtel Le Crésus - X/Y"
  },
  {
    id: 990,
    en: "Looker's in Trouble! - X/Y",
    fr: "Beladonis en Danger! - X/Y"
  },
  {
    id: 991,
    en: "Emma's Theme - X/Y",
    fr: "Thème de Millie - X/Y"
  },
  {
    id: 992,
    en: "Looker's Sorrowful Theme - X/Y",
    fr: "Lamento de Beladonis - X/Y"
  },
  {
    id: 993,
    en: "Berry Picker - X/Y",
    fr: "Cueille-Baies - X/Y"
  },
  {
    id: 994,
    en: "Head It - X/Y",
    fr: "Jongle-Tête - X/Y"
  },
  {
    id: 995,
    en: "Tile Puzzle - X/Y",
    fr: "Puzzle-Blocs - X/Y"
  },
  {
    id: 996,
    en: "Let's Super Train! - X/Y",
    fr: "Utilisons le SPV! - X/Y"
  },
  {
    id: 997,
    en: "Super Training! - X/Y",
    fr: "Système de Perfectionnement Virtuel - X/Y"
  },
  {
    id: 998,
    en: "Super Training: Success! - X/Y",
    fr: "Système de Perfectionnement Virtuel: Challenge réussi! - X/Y"
  },
  {
    id: 999,
    en: "Super Training: Try Again... - X/Y",
    fr: "Système de Perfectionnement Virtuel: Réessayez - X/Y"
  },
  {
    id: 1000,
    en: "Secret Super Training! - X/Y",
    fr: "Système de Perfectionnement Virtuel: SPV Secret - X/Y"
  },
  {
    id: 1001,
    en: "A Poké Radar Hit! - X/Y",
    fr: "Détection du Poké Radar! - X/Y"
  },
  {
    id: 1002,
    en: "Poké Radar Chain! - X/Y",
    fr: "Le Poké Radar s'emballe! - X/Y"
  },
  {
    id: 1003,
    en: "Battle Spot - X/Y",
    fr: "Coin Combats - X/Y"
  },
  {
    id: 1004,
    en: "Wonder Trade - X/Y",
    fr: "Échange miracle - X/Y"
  },
  {
    id: 1005,
    en: "GTS - X/Y",
    fr: "GTS - X/Y"
  },
  {
    id: 1006,
    en: "Game Sync - X/Y",
    fr: "Synchro-Jeu - X/Y"
  },
  {
    id: 1007,
    en: "Mystery Gift - X/Y",
    fr: "Cadeau Mystère - X/Y"
  },
  {
    id: 1008,
    en: "Battle! (Mewtwo) - X/Y",
    fr: "Combat! (Mewtwo) - X/Y"
  },
  {
    id: 1009,
    en: "Happy Birthday from the Pokémon Center! - X/Y",
    fr: "Joyeux anniversaire de la part du Centre Pokémon! - X/Y"
  },
  {
    id: 1010,
    en: "Opening Movie: Setting out on a Journey in the Hoenn Region - Omega Ruby/Alpha Sapphire",
    fr: "Séquence d'introduction: Une aventure commence à Hoenn - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1011,
    en: "Opening Movie 2 - Omega Ruby/Alpha Sapphire",
    fr: "Séquence d'introduction 2 - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1012,
    en: "Title Screen: Main Theme - Omega Ruby/Alpha Sapphire",
    fr: "Écran titre: Thème principal - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1013,
    en: "Introductions/Route 122/Route 123 - Omega Ruby/Alpha Sapphire",
    fr: "Présentations/Route 122/Route 123 - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1014,
    en: "Littleroot Town - Omega Ruby/Alpha Sapphire",
    fr: "Bourg-en-Vol - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1015,
    en: "Birch Pokémon Lab - Omega Ruby/Alpha Sapphire",
    fr: "Laboratoire du Professeur Seko - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1016,
    en: "May - Omega Ruby/Alpha Sapphire",
    fr: "Flora - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1017,
    en: "H-Help Me! - Omega Ruby/Alpha Sapphire",
    fr: "À l'aide! - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1018,
    en: "Battle! (Wild Pokémon) - Omega Ruby/Alpha Sapphire",
    fr: "Combat! (Pokémon sauvage) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1019,
    en: "Victory! (Wild Pokémon) - Omega Ruby/Alpha Sapphire",
    fr: "Victoire! (Pokémon sauvage) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1020,
    en: "Route 101/102/103 - Omega Ruby/Alpha Sapphire",
    fr: "Route 101/102/103 - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1021,
    en: "Oldale Town/Lavaridge Town - Omega Ruby/Alpha Sapphire",
    fr: "Rosyères/Vermilava - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1022,
    en: "Hurry Along - Omega Ruby/Alpha Sapphire",
    fr: "En route! - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1023,
    en: "Pokémon Center - Omega Ruby/Alpha Sapphire",
    fr: "Centre Pokémon - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1024,
    en: "Trainers' Eyes Meet (Youngster) - Omega Ruby/Alpha Sapphire",
    fr: "Rencontre avec un Dresseur (Gamin) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1025,
    en: "Trainers' Eyes Meet (Lass) - Omega Ruby/Alpha Sapphire",
    fr: "Rencontre avec un Dresseur (Fillette) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1026,
    en: "Battle! (Trainer Battle) - Omega Ruby/Alpha Sapphire",
    fr: "Combat! (Combat de Dresseur) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1027,
    en: "Victory! (Trainer Battle) - Omega Ruby/Alpha Sapphire",
    fr: "Victoire! (Combat de Dresseur) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1028,
    en: "Petalburg City - Omega Ruby/Alpha Sapphire",
    fr: "Clémenti-Ville - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1029,
    en: "Wally's Theme - Omega Ruby/Alpha Sapphire",
    fr: "Thème de Timmy - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1030,
    en: "Route 104/105/106/107/108/109/115/116 - Omega Ruby/Alpha Sapphire",
    fr: "Route 104/105/106/107/108/109/115/116 - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1031,
    en: "Petalburg Woods/Rusturf Tunnel/Granite Cave/Fiery Path/Jagged Pass - Omega Ruby/Alpha Sapphire",
    fr: "Bois Clémenti/Tunnel Mérazon/Grotte Granite/Chemin Ardent/Sentier Sinuroc - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1032,
    en: "Team Magma Appears! - Omega Ruby/Alpha Sapphire",
    fr: "La Team Magma Apparaît! - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1033,
    en: "Battle! (Team Aqua/Team Magma) - Omega Ruby/Alpha Sapphire",
    fr: "Combat! (Team Aqua/Team Magma) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1034,
    en: "Victory! (Team Aqua/Team Magma) - Omega Ruby/Alpha Sapphire",
    fr: "Victoire! (Team Aqua/Team Magma) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1035,
    en: "Rustboro City/Mauville City/Mossdeep City - Omega Ruby/Alpha Sapphire",
    fr: "Mérouville/Lavandia/Algatia - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1036,
    en: "Trainers' School - Omega Ruby/Alpha Sapphire",
    fr: "École de Dresseurs - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1037,
    en: "Crossing the Sea - Omega Ruby/Alpha Sapphire",
    fr: "La mer et au-delà - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1038,
    en: "Dewford Town - Omega Ruby/Alpha Sapphire",
    fr: "Myokara - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1039,
    en: "Trainers' Eyes Meet (Tuber) - Omega Ruby/Alpha Sapphire",
    fr: "Rencontre avec un Dresseur (Garçon/Fille à la Bouée) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1040,
    en: "Slateport City - Omega Ruby/Alpha Sapphire",
    fr: "Poivressel - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1041,
    en: "Oceanic Museum - Omega Ruby/Alpha Sapphire",
    fr: "Musée Océanographique - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1042,
    en: "Leader's Theme (Team Aqua/Team Magma) (Archie/Maxie) - Omega Ruby/Alpha Sapphire",
    fr: "Thème des Leaders (Team Aqua/Team Magma) (Arthur/Max) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1043,
    en: "Route 110/111/112/114/117/118 (West) - Omega Ruby/Alpha Sapphire",
    fr: "Route 110/111/112/114/117/118 (Ouest) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1044,
    en: "Bicycle - Omega Ruby/Alpha Sapphire",
    fr: "Bicyclette - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1045,
    en: "Trainers' Eyes Meet (Triathlete) - Omega Ruby/Alpha Sapphire",
    fr: "Rencontre avec un Dresseur (Triathlète) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1046,
    en: "Verdanturf Town - Omega Ruby/Alpha Sapphire",
    fr: "Vergazon - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1047,
    en: "Route 113 - Omega Ruby/Alpha Sapphire",
    fr: "Route 113 - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1048,
    en: "Trainers' Eyes Meet (Twins) - Omega Ruby/Alpha Sapphire",
    fr: "Rencontre avec un Dresseur (Jumelles) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1049,
    en: "Fallarbor Town - Omega Ruby/Alpha Sapphire",
    fr: "Autéquia - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1050,
    en: "Mt. Chimney/Seafloor Cavern/Sky Pillar (Cave) - Omega Ruby/Alpha Sapphire",
    fr: "Mont Chimnée/Caverne Fondmer/Pilier Céleste (Intérieur) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1051,
    en: "Trainers' Eyes Meet (Hiker) - Omega Ruby/Alpha Sapphire",
    fr: "Rencontre avec un Dresseur (Montagnard) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1052,
    en: "Route 111 (Desert) - Omega Ruby/Alpha Sapphire",
    fr: "Route 111 (Désert) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1053,
    en: "Pokémon Gym - Omega Ruby/Alpha Sapphire",
    fr: "Arène Pokémon - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1054,
    en: "Battle! (Gym Leader) - Omega Ruby/Alpha Sapphire",
    fr: "Combat! (Champion d'Arène) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1055,
    en: "Victory! (Gym Leader/Elite Four) - Omega Ruby/Alpha Sapphire",
    fr: "Victoire! (Champion d'Arène/Conseil 4) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1056,
    en: "A Path We All Must Walk - Omega Ruby/Alpha Sapphire",
    fr: "Un chemin que nous devons tous emprunter - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1057,
    en: "Surf - Omega Ruby/Alpha Sapphire",
    fr: "Surf - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1058,
    en: "Southern Island - Omega Ruby/Alpha Sapphire",
    fr: "Île du Sud - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1059,
    en: "Route 119/118 (East)/129/130/131/132/133/134 - Omega Ruby/Alpha Sapphire",
    fr: "Route 119/118 (Est)/129/130/131/132/133/134 - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1060,
    en: "Explosive Encounters! Red and Blue - Omega Ruby/Alpha Sapphire",
    fr: "Rencontres explosives ! Rouge et Bleu (Attaque de la Team Magma/Aqua) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1061,
    en: "Fortree City - Omega Ruby/Alpha Sapphire",
    fr: "Cimetronelle - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1062,
    en: "Route 120/121/124/125/126/127/128 - Omega Ruby/Alpha Sapphire",
    fr: "Route 120/121/124/125/126/127/128 - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1063,
    en: "Interviewers - Omega Ruby/Alpha Sapphire",
    fr: "Journalistes - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1064,
    en: "Safari Zone - Omega Ruby/Alpha Sapphire",
    fr: "Parc Safari - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1065,
    en: "Trainers' Eyes Meet (Gentleman) - Omega Ruby/Alpha Sapphire",
    fr: "Rencontre avec un Dresseur (Gentleman) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1066,
    en: "Lilycove City/Pacifidlog City - Omega Ruby/Alpha Sapphire",
    fr: "Nénucrique/Pacifiville - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1067,
    en: "Lilycove Art Museum - Omega Ruby/Alpha Sapphire",
    fr: "Musée de Nénucrique - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1068,
    en: "Brendan - Omega Ruby/Alpha Sapphire",
    fr: "Brice - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1069,
    en: "Battle! (Brendan/May) - Omega Ruby/Alpha Sapphire",
    fr: "Combat! (Brice/Flora) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1070,
    en: "Evolution - Omega Ruby/Alpha Sapphire",
    fr: "Évolution - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1071,
    en: "Poké Mart - Omega Ruby/Alpha Sapphire",
    fr: "Boutique Pokémon - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1072,
    en: "Mt. Pyre/Shoal Cave/New Mauville - Omega Ruby/Alpha Sapphire",
    fr: "Mont Mémoria/Grotte Tréfonds/New Lavandia - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1073,
    en: "Trainers' Eyes Meet (Psychic) - Omega Ruby/Alpha Sapphire",
    fr: "Rencontre avec un Dresseur (Kinésiste) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1074,
    en: "Trainers' Eyes Meet (Hex Maniac) - Omega Ruby/Alpha Sapphire",
    fr: "Rencontre avec un Dresseur (Mystimaniac) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1075,
    en: "Mt. Pyre Exterior - Omega Ruby/Alpha Sapphire",
    fr: "Extérieur du Mont Mémoria - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1076,
    en: "The Slitherers - Omega Ruby/Alpha Sapphire",
    fr: "Conspiration - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1077,
    en: "Hideout - Omega Ruby/Alpha Sapphire",
    fr: "Planque - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1078,
    en: "Five Furious Strikes! - Omega Ruby/Alpha Sapphire",
    fr: "Les quintuplés Magma/Aqua - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1079,
    en: "Countdown to Destruction - Omega Ruby/Alpha Sapphire",
    fr: "Compte à rebours avant destruction - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1080,
    en: "Dive - Omega Ruby/Alpha Sapphire",
    fr: "Plongée - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1081,
    en: "Trainers' Eyes Meet (Scuba Diver) - Omega Ruby/Alpha Sapphire",
    fr: "Rencontre avec un Dresseur (Plongeur) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1082,
    en: "Team Aqua Appears! - Omega Ruby/Alpha Sapphire",
    fr: "La Team Aqua apparaît! - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1083,
    en: "Battle! (Team Aqua/Team Magma Leaders) - Omega Ruby/Alpha Sapphire",
    fr: "Combat! (Leader Aqua/Magma (Arthur/Max)) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1084,
    en: "Drought - Omega Ruby/Alpha Sapphire",
    fr: "Sécheresse - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1085,
    en: "Heavy Rain - Omega Ruby/Alpha Sapphire",
    fr: "Déluge - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1086,
    en: "Sootopolis City - Omega Ruby/Alpha Sapphire",
    fr: "Atalanopolis - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1087,
    en: "Cave of Origin/Meteor Falls - Omega Ruby/Alpha Sapphire",
    fr: "Grotte Origine/Site Météore - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1088,
    en: "Battle! (Primal Reversion (Primal Kyogre/Primal Groudon)) - Omega Ruby/Alpha Sapphire",
    fr: "Combat! (Primo-Résurgence (Primo-Kyogre/Primo-Groudon)) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1089,
    en: "Coexistence - Omega Ruby/Alpha Sapphire",
    fr: "Coexistence - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1090,
    en: "Soaring Dreams/Soaring in the sky (Day) - Omega Ruby/Alpha Sapphire",
    fr: "Grand Envol (Jour) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1091,
    en: "Soaring Illusions/Soaring in the sky (Night) - Omega Ruby/Alpha Sapphire",
    fr: "Grand Envol (Nuit) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1092,
    en: "Trainers' Eyes Meet (Swimmer) - Omega Ruby/Alpha Sapphire",
    fr: "Rencontre avec un Dresseur (Nageuse/Nageur) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1093,
    en: "Ever Grande City/The Pokémon League - Omega Ruby/Alpha Sapphire",
    fr: "Éternara/Ligue Pokémon - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1094,
    en: "Victory Road - Omega Ruby/Alpha Sapphire",
    fr: "Route Victoire - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1095,
    en: "Trainers' Eyes Meet (Ace Trainer) - Omega Ruby/Alpha Sapphire",
    fr: "Rencontre avec un Dresseur (Topdresseur) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1096,
    en: "Battle! (Wally) - Omega Ruby/Alpha Sapphire",
    fr: "Combat! (Timmy) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1097,
    en: "The Elite Four Appear! - Omega Ruby/Alpha Sapphire",
    fr: "Le Conseil 4 apparaît! - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1098,
    en: "Battle! (Elite Four) - Omega Ruby/Alpha Sapphire",
    fr: "Combat! (Conseil 4) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1099,
    en: "Champion Steven - Omega Ruby/Alpha Sapphire",
    fr: "Maître Pierre - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1100,
    en: "Battle! (Champion Steven) - Omega Ruby/Alpha Sapphire",
    fr: "Combat! (Pierre le Maître) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1101,
    en: "Victory! (Champion Steven) - Omega Ruby/Alpha Sapphire",
    fr: "Victoire! (Pierre le Maître) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1102,
    en: "Room of Glory - Omega Ruby/Alpha Sapphire",
    fr: "Instant de gloire - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1103,
    en: "The Hall of Fame - Omega Ruby/Alpha Sapphire",
    fr: "Panthéon - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1104,
    en: "Let's Go Home - Omega Ruby/Alpha Sapphire",
    fr: "Retour à la maison - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1105,
    en: "Ending Theme - Omega Ruby/Alpha Sapphire",
    fr: "Générique de fin - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1106,
    en: "The End - Omega Ruby/Alpha Sapphire",
    fr: "Fin - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1107,
    en: "The Heirs to Eternity/Zinnia's Theme - Omega Ruby/Alpha Sapphire",
    fr: "Les Héritiers de l'Eternité/Thème de Amaryllis - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1108,
    en: "Azoth - Omega Ruby/Alpha Sapphire",
    fr: "Azoth - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1109,
    en: "Sky Pillar - Omega Ruby/Alpha Sapphire",
    fr: "Pilier Céleste - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1110,
    en: "The Lament of Falling Stars - Omega Ruby/Alpha Sapphire",
    fr: "La lamentation des étoiles filantes - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1111,
    en: "Battle! (Super-Ancient Pokémon (Rayquaza)) - Omega Ruby/Alpha Sapphire",
    fr: "Combat! (Pokémon ancestral (Rayquaza)) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1112,
    en: "Battle! (Lorekeeper Zinnia) - Omega Ruby/Alpha Sapphire",
    fr: "Combat! (Amaryllis la Gardienne du Savoir) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1113,
    en: "Per Aspera Ad Astra - Omega Ruby/Alpha Sapphire",
    fr: "Per Aspera Ad Astra - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1114,
    en: "Battle! (Deoxys) - Omega Ruby/Alpha Sapphire",
    fr: "Combat! (Deoxys) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1115,
    en: "Strains of a New Beginning -Theme of ~Ωrαs~ - Omega Ruby/Alpha Sapphire",
    fr: "Signes d'un nouveau départ -Thème de ~Ωrαs~ - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1116,
    en: "Contest Lobby - Omega Ruby/Alpha Sapphire",
    fr: "Salle de Concours - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1117,
    en: "Lisia's Theme - Omega Ruby/Alpha Sapphire",
    fr: "Thème d'Atalante - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1118,
    en: "Pokémon Contest Spectacular: Introductions! - Omega Ruby/Alpha Sapphire",
    fr: "Concours Pokémon Live: Exhibitions! - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1119,
    en: "Pokémon Contest Spectacular: Appeals! - Omega Ruby/Alpha Sapphire",
    fr: "Concours Pokémon Live: Démonstrations! - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1120,
    en: "Contest Results Announcement - Omega Ruby/Alpha Sapphire",
    fr: "Concours: Annonce des résultats - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1121,
    en: "Contest Winner - Omega Ruby/Alpha Sapphire",
    fr: "Vainqueur du Concours - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1122,
    en: "The Trick House - Omega Ruby/Alpha Sapphire",
    fr: "Maison des Pièges - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1123,
    en: "Super-Secret Bases - Omega Ruby/Alpha Sapphire",
    fr: "Super Base Secrète - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1124,
    en: "Trainers' Eyes Meet (Poké Fan) - Omega Ruby/Alpha Sapphire",
    fr: "Rencontre avec un Dresseur (Pokéfan) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1125,
    en: "Trainers' Eyes Meet (Street Thug) - Omega Ruby/Alpha Sapphire",
    fr: "Rencontre avec un Dresseur (Terreur) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1126,
    en: "Sea Mauville (Abandoned Ship)/Mirage Caves/Mirage Forests/Mirage Islands/Mirage Mountains - Omega Ruby/Alpha Sapphire",
    fr: "Lavandia Sea (Épave)/Grottes Mirage/Forêts Mirage/Ȋles Mirage/Monts Mirage - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1127,
    en: "Sealed Chamber/Desert Ruins/Island Cave/Ancient Tomb - Omega Ruby/Alpha Sapphire",
    fr: "Sanctuaire/Ruines Désert/Grotte de l'Îlot/Tombeau Antique - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1128,
    en: "Battle! (Regirock/Regice/Registeel/Regigigas) - Omega Ruby/Alpha Sapphire",
    fr: "Combat! (Regirock/Regice/Registeel/Regigigas) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1129,
    en: "Pokémon Link - Omega Ruby/Alpha Sapphire",
    fr: "Poké Lien - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1130,
    en: "Battle Resort - Omega Ruby/Alpha Sapphire",
    fr: "Atoll de Combat - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1131,
    en: "Battle Maison - Omega Ruby/Alpha Sapphire",
    fr: "Maison de Combat - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1132,
    en: "Battle! (Battle Chatelaine) - Omega Ruby/Alpha Sapphire",
    fr: "Combat! (Châtelaine Combat) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1133,
    en: "Battle! (World Championships) - Omega Ruby/Alpha Sapphire",
    fr: "Combat! (Championnats du monde) - Rubis Oméga/Saphir Alpha"
  },
  {
    id: 1134,
    en: "Title Screen - Sun/Moon",
    fr: "Écran titre - Soleil/Lune"
  },
  {
    id: 1135,
    en: "An Adventure Is Beginning - Sun/Moon",
    fr: "L'aventure commence - Soleil/Lune"
  },
  {
    id: 1136,
    en: "Alola Region Theme - Sun/Moon",
    fr: "Thème de la région d'Alola - Soleil/Lune"
  },
  {
    id: 1137,
    en: "Escape! - Sun/Moon",
    fr: "Fuite! - Soleil/Lune"
  },
  {
    id: 1138,
    en: "My Home - Sun/Moon",
    fr: "Maison du joueur - Soleil/Lune"
  },
  {
    id: 1139,
    en: "Professor Kukui's Theme - Sun/Moon",
    fr: "Thème de Professeur Euphorbe - Soleil/Lune"
  },
  {
    id: 1140,
    en: "Route 1 on Melemele Island/Hau'oli Cemetery - Sun/Moon",
    fr: "Route 1 de Mele-Mele/Cimetière d'Ekaeka - Soleil/Lune"
  },
  {
    id: 1141,
    en: "Iki Town (Day) - Sun/Moon",
    fr: "Lili'i (Jour) - Soleil/Lune"
  },
  {
    id: 1142,
    en: "Iki Town (Night) - Sun/Moon",
    fr: "Lili'i (Nuit) - Soleil/Lune"
  },
  {
    id: 1143,
    en: "Mahalo Trail/Melemele Meadow/Diglett's Tunnel/Wela Volcano Park - Sun/Moon",
    fr: "Sentier de Mahalo/Jardin de Mele-Mele/Tunnel Taupiqueur/Parc Volcanique - Soleil/Lune"
  },
  {
    id: 1144,
    en: "A Tapu Appears! - Sun/Moon",
    fr: "Un Toko apparaît! - Soleil/Lune"
  },
  {
    id: 1145,
    en: "Lillie's Theme - Sun/Moon",
    fr: "Thème de Lilie - Soleil/Lune"
  },
  {
    id: 1146,
    en: "Hau's Theme - Sun/Moon",
    fr: "Thème de Tili - Soleil/Lune"
  },
  {
    id: 1147,
    en: "Battle! (Hau) - Sun/Moon",
    fr: "Combat! (Tili) - Soleil/Lune"
  },
  {
    id: 1148,
    en: "Battle! (Wild Pokémon) - Sun/Moon",
    fr: "Combat! (Pokémon sauvage) - Soleil/Lune"
  },
  {
    id: 1149,
    en: "Victory! (Wild Pokémon) - Sun/Moon",
    fr: "Victoire! (Pokémon sauvage) - Soleil/Lune"
  },
  {
    id: 1150,
    en: "The Festival in Iki Town - Sun/Moon",
    fr: "Festival de Lili'i - Soleil/Lune"
  },
  {
    id: 1151,
    en: "Trainers' Eyes Meet (Trainer) - Sun/Moon",
    fr: "Rencontre avec un Dresseur (Dresseur) - Soleil/Lune"
  },
  {
    id: 1152,
    en: "Battle! (Trainer) - Sun/Moon",
    fr: "Combat! (Dresseur) - Soleil/Lune"
  },
  {
    id: 1153,
    en: "Victory! (Trainer) - Sun/Moon",
    fr: "Victoire! (Dresseur) - Soleil/Lune"
  },
  {
    id: 1154,
    en: "The Pokémon Research Lab - Sun/Moon",
    fr: "Laboratoire Pokémon - Soleil/Lune"
  },
  {
    id: 1155,
    en: "The Pokémon Center - Sun/Moon",
    fr: "Centre Pokémon - Soleil/Lune"
  },
  {
    id: 1156,
    en: "Have a Break at the Café - Sun/Moon",
    fr: "Café - Soleil/Lune"
  },
  {
    id: 1157,
    en: "Festival Plaza (Day) - Sun/Moon",
    fr: "Place Festival (Jour) - Soleil/Lune"
  },
  {
    id: 1158,
    en: "Festival Plaza (Night) - Sun/Moon",
    fr: "Place Festival (Nuit) - Soleil/Lune"
  },
  {
    id: 1159,
    en: "Trade - Sun/Moon",
    fr: "Échange - Soleil/Lune"
  },
  {
    id: 1160,
    en: "A Mission at Festival Plaza - Sun/Moon",
    fr: "Place Festival: Mini-quête - Soleil/Lune"
  },
  {
    id: 1161,
    en: "Festival Plaza Mission Results - Sun/Moon",
    fr: "Place Festival: Résultats de la Mini-quête - Soleil/Lune"
  },
  {
    id: 1162,
    en: "Trainers' School - Sun/Moon",
    fr: "École de Dresseurs - Soleil/Lune"
  },
  {
    id: 1163,
    en: "Hau'oli City (Day) - Sun/Moon",
    fr: "Ekaeka (Jour) - Soleil/Lune"
  },
  {
    id: 1164,
    en: "Hau'oli City (Night) - Sun/Moon",
    fr: "Ekaeka (Nuit) - Soleil/Lune"
  },
  {
    id: 1165,
    en: "Hurry Along - Sun/Moon",
    fr: "En route! - Soleil/Lune"
  },
  {
    id: 1166,
    en: "Salon - Sun/Moon",
    fr: "Salon Salle à Mèches - Soleil/Lune"
  },
  {
    id: 1167,
    en: "Apparel Shop - Sun/Moon",
    fr: "Boutique de Vêtements Alola Mode - Soleil/Lune"
  },
  {
    id: 1168,
    en: "Malasada Shop - Sun/Moon",
    fr: "Malasa'Délices - Soleil/Lune"
  },
  {
    id: 1169,
    en: "Evolution - Sun/Moon",
    fr: "Évolution - Soleil/Lune"
  },
  {
    id: 1170,
    en: "Evolution (Alola) - Sun/Moon",
    fr: "Évolution (Alola) - Soleil/Lune"
  },
  {
    id: 1171,
    en: "Ferry Terminal - Sun/Moon",
    fr: "Embarcadère - Soleil/Lune"
  },
  {
    id: 1172,
    en: "Route 2/3 on Melemele Island/Kala'e Bay - Sun/Moon",
    fr: "Route 2/3 de Mele-Mele/Baie de Kala'e - Soleil/Lune"
  },
  {
    id: 1173,
    en: "Team Skull Appears! - Sun/Moon",
    fr: "La Team Skull apparaît! - Soleil/Lune"
  },
  {
    id: 1174,
    en: "Trainers' Eyes Meet (Team Skull) - Sun/Moon",
    fr: "Rencontre avec un Dresseur (Team Skull) - Soleil/Lune"
  },
  {
    id: 1175,
    en: "Battle! (Team Skull) - Sun/Moon",
    fr: "Combat! (Team Skull) - Soleil/Lune"
  },
  {
    id: 1176,
    en: "Victory! (Team Skull) - Sun/Moon",
    fr: "Victoire! (Team Skull) - Soleil/Lune"
  },
  {
    id: 1177,
    en: "Verdant Cavern/Lush Jungle ~A Trial Site~ - Sun/Moon",
    fr: "Grotte Verdoyante/Jungle Sombrefeuille ~Une Zone d'Épreuve~ - Soleil/Lune"
  },
  {
    id: 1178,
    en: "A Captain's Trial Begins! - Sun/Moon",
    fr: "L'Épreuve commence! - Soleil/Lune"
  },
  {
    id: 1179,
    en: "A Totem Pokémon Appears! - Sun/Moon",
    fr: "Un Pokémon Dominant apparaît! - Soleil/Lune"
  },
  {
    id: 1180,
    en: "Battle! (Totem Pokémon) - Sun/Moon",
    fr: "Combat! (Pokémon Dominant) - Soleil/Lune"
  },
  {
    id: 1181,
    en: "Victory! (Totem Pokémon) - Sun/Moon",
    fr: "Victoire! (Pokémon Dominant) - Soleil/Lune"
  },
  {
    id: 1182,
    en: "Seaward Cave - Sun/Moon",
    fr: "Grotte Verlamer - Soleil/Lune"
  },
  {
    id: 1183,
    en: "Island Kahuna's Theme - Sun/Moon",
    fr: "Thème des Doyens - Soleil/Lune"
  },
  {
    id: 1184,
    en: "Battle! (Island Kahuna) - Sun/Moon",
    fr: "Combat! (Doyen) - Soleil/Lune"
  },
  {
    id: 1185,
    en: "Victory! (Island Kahuna) - Sun/Moon",
    fr: "Victoire! (Doyen) - Soleil/Lune"
  },
  {
    id: 1186,
    en: "Ride Pokémon (Land) - Sun/Moon",
    fr: "Poké Monture (Terre) - Soleil/Lune"
  },
  {
    id: 1187,
    en: "Ten Carat Hill/Resolution Cave - Sun/Moon",
    fr: "Colline Dicarat/Caverne Coda - Soleil/Lune"
  },
  {
    id: 1188,
    en: "On the Ship - Sun/Moon",
    fr: "A bord du bateau - Soleil/Lune"
  },
  {
    id: 1189,
    en: "Heahea City (Day) - Sun/Moon",
    fr: "Ho'ohale (Jour) - Soleil/Lune"
  },
  {
    id: 1190,
    en: "Heahea City (Night) - Sun/Moon",
    fr: "Ho'ohale (Nuit) - Soleil/Lune"
  },
  {
    id: 1191,
    en: "Route 4/5/6/7/8/9 on Akala Island/Brooklet Hill/Memorial Hill/Akala Outskirts - Sun/Moon",
    fr: "Route 4/5/6/7/8/9 d'Akala/Colline Clapotis/Colline Memento/Côte Reculée d'Akala - Soleil/Lune"
  },
  {
    id: 1192,
    en: "Paniola Town (Day) - Sun/Moon",
    fr: "Ohana (Jour) - Soleil/Lune"
  },
  {
    id: 1193,
    en: "Paniola Town (Night) - Sun/Moon",
    fr: "Ohana (Nuit) - Soleil/Lune"
  },
  {
    id: 1194,
    en: "Paniola Ranch - Sun/Moon",
    fr: "Ranch Ohana - Soleil/Lune"
  },
  {
    id: 1195,
    en: "Gladion's Theme - Sun/Moon",
    fr: "Thème de Gladio - Soleil/Lune"
  },
  {
    id: 1196,
    en: "Battle! (Gladion) - Sun/Moon",
    fr: "Combat! (Gladio) - Soleil/Lune"
  },
  {
    id: 1197,
    en: "Ride Pokémon (Aquatic) - Sun/Moon",
    fr: "Poké Monture (Mer) - Soleil/Lune"
  },
  {
    id: 1198,
    en: "Royal Avenue - Sun/Moon",
    fr: "Rue du Dôme Royal - Soleil/Lune"
  },
  {
    id: 1199,
    en: "Thrifty Megamart - Sun/Moon",
    fr: "Bradley Prix - Soleil/Lune"
  },
  {
    id: 1200,
    en: "Battle Royal Dome - Sun/Moon",
    fr: "Dôme Royal - Soleil/Lune"
  },
  {
    id: 1201,
    en: "Battle! (Battle Royal) - Sun/Moon",
    fr: "Combat! (Bataille Royale) - Soleil/Lune"
  },
  {
    id: 1202,
    en: "Battle Royal Results - Sun/Moon",
    fr: "Bataille Royale: Résultats - Soleil/Lune"
  },
  {
    id: 1203,
    en: "Mallow's Trial - Sun/Moon",
    fr: "Épreuve de Barbara - Soleil/Lune"
  },
  {
    id: 1204,
    en: "Poké Pelago (Day) - Sun/Moon",
    fr: "Poké Loisir (Jour) - Soleil/Lune"
  },
  {
    id: 1205,
    en: "Poké Pelago (Night) - Sun/Moon",
    fr: "Poké Loisir (Nuit) - Soleil/Lune"
  },
  {
    id: 1206,
    en: "Burnet's Lab/Hokulani Observatory - Sun/Moon",
    fr: "Centre de Recherche Interdimensionnelle (Labo de la Professeure Pimprenelle)/Observatoire - Soleil/Lune"
  },
  {
    id: 1207,
    en: "Konikoni City (Day) - Sun/Moon",
    fr: "Konikoni (Jour) - Soleil/Lune"
  },
  {
    id: 1208,
    en: "Konikoni City (Night) - Sun/Moon",
    fr: "Konikoni (Nuit) - Soleil/Lune"
  },
  {
    id: 1209,
    en: "Battle! (Team Skull Admin Plumeria) - Sun/Moon",
    fr: "Combat! (Apocyne l'Admin Team Skull) - Soleil/Lune"
  },
  {
    id: 1210,
    en: "Aether Paradise - Sun/Moon",
    fr: "Paradis Aether - Soleil/Lune"
  },
  {
    id: 1211,
    en: "An Encounter - Sun/Moon",
    fr: "Une rencontre  - Soleil/Lune"
  },
  {
    id: 1212,
    en: "Lusamine's Theme - Sun/Moon",
    fr: "Thème d'Elsa-Mina - Soleil/Lune"
  },
  {
    id: 1213,
    en: "The Entrance to Another World - Sun/Moon",
    fr: "L'accès à un autre monde - Soleil/Lune"
  },
  {
    id: 1214,
    en: "Ultra Beasts...? - Sun/Moon",
    fr: "Ultra-Chimères...? - Soleil/Lune"
  },
  {
    id: 1215,
    en: "Battle! (Ultra Beast) - Sun/Moon",
    fr: "Combat! (Ultra-Chimère) - Soleil/Lune"
  },
  {
    id: 1216,
    en: "Malie City (Day) - Sun/Moon",
    fr: "Malié (Jour) - Soleil/Lune"
  },
  {
    id: 1217,
    en: "Malie City (Night) - Sun/Moon",
    fr: "Malié (Nuit) - Soleil/Lune"
  },
  {
    id: 1218,
    en: "Route 10/11/12/13/14/15/16/17 on Ula'ula Island/Tapu Village/Mount Hokulani/Ula'ula Meadow - Sun/Moon",
    fr: "Route 10/11/12/13/14/15/16/17 de Ula-Ula/Village Toko/Mont Hokulani/Jardin d'Ula-Ula - Soleil/Lune"
  },
  {
    id: 1219,
    en: "Guzma's Theme - Sun/Moon",
    fr: "Thème de Guzma - Soleil/Lune"
  },
  {
    id: 1220,
    en: "Battle! (Team Skull Boss Guzma) - Sun/Moon",
    fr: "Combat! (Guzma le Boss de la Team Skull) - Soleil/Lune"
  },
  {
    id: 1221,
    en: "Aether House - Sun/Moon",
    fr: "Foyer Aether - Soleil/Lune"
  },
  {
    id: 1222,
    en: "Acerola's Trial - Sun/Moon",
    fr: "Épreuve de Margie - Soleil/Lune"
  },
  {
    id: 1223,
    en: "Haina Desert - Sun/Moon",
    fr: "Désert Haina - Soleil/Lune"
  },
  {
    id: 1224,
    en: "Po Town - Sun/Moon",
    fr: "Kokohio - Soleil/Lune"
  },
  {
    id: 1225,
    en: "Nanu's Theme - Sun/Moon",
    fr: "Thème de Danh - Soleil/Lune"
  },
  {
    id: 1226,
    en: "Infiltration - Sun/Moon",
    fr: "Infiltration - Soleil/Lune"
  },
  {
    id: 1227,
    en: "The Secret Side of Aether Paradise (Faba's Theme) - Sun/Moon",
    fr: "La face cachée du Paradis Aether (Thème de Saubohne) - Soleil/Lune"
  },
  {
    id: 1228,
    en: "Trainers' Eyes Meet (Aether Foundation) - Sun/Moon",
    fr: "Rencontre avec un Dresseur (Fondation Aether) - Soleil/Lune"
  },
  {
    id: 1229,
    en: "Battle! (Aether Foundation) - Sun/Moon",
    fr: "Combat! (Fondation Aether) - Soleil/Lune"
  },
  {
    id: 1230,
    en: "Aether Paradise Labs - Sun/Moon",
    fr: "Laboratoires du Paradis Aether - Soleil/Lune"
  },
  {
    id: 1231,
    en: "Unsettling Atmosphere - Sun/Moon",
    fr: "Ambiance inquiétante - Soleil/Lune"
  },
  {
    id: 1232,
    en: "There's Trouble! - Sun/Moon",
    fr: "Il y a des problèmes! - Soleil/Lune"
  },
  {
    id: 1233,
    en: "A Crisis in Alola - Sun/Moon",
    fr: "Une crise à Alola - Soleil/Lune"
  },
  {
    id: 1234,
    en: "Battle! (Lusamine) - Sun/Moon",
    fr: "Combat! (Elsa-Mina) - Soleil/Lune"
  },
  {
    id: 1235,
    en: "Lively Lillie! - Sun/Moon",
    fr: "Lilie Joyeuse! - Soleil/Lune"
  },
  {
    id: 1236,
    en: "Seafolk Village (Day) - Sun/Moon",
    fr: "Village Flottant (Jour) - Soleil/Lune"
  },
  {
    id: 1237,
    en: "Seafolk Village (Night) - Sun/Moon",
    fr: "Village Flottant (Nuit) - Soleil/Lune"
  },
  {
    id: 1238,
    en: "Ancient Poni Path/Poni Wilds/Poni Breaker Coast/Exeggutor Island/Poni Grove/Poni Plains/Poni Meadow/Poni Coast/Poni Gauntlet - Sun/Moon",
    fr: "Vieille Route/Prairie de Poni/Récif de Poni/Île Noadkoko/Forêt de Poni/Plaine de Poni/Jardin de Poni/Côte de Poni/Chemin du Défi - Soleil/Lune"
  },
  {
    id: 1239,
    en: "The Protector of the Island (Tapu Ruins) - Sun/Moon",
    fr: "Divinités gardiennes d'Alola (Ruines Toko) - Soleil/Lune"
  },
  {
    id: 1240,
    en: "Vast Poni Canyon - Sun/Moon",
    fr: "Grand Canyon de Poni - Soleil/Lune"
  },
  {
    id: 1241,
    en: "To the Altar... (Lake/Altar of the Sunne/Moone) - Sun/Moon",
    fr: "Vers l'autel... (Lac du Halo Solaire/Lunaire & Autel du Soleil/de la Lune) - Soleil/Lune"
  },
  {
    id: 1242,
    en: "Solgaleo/Lunala Appears! - Sun/Moon",
    fr: "Solgaleo/Lunala apparaît! - Soleil/Lune"
  },
  {
    id: 1243,
    en: "Ultra Space - Sun/Moon",
    fr: "Ultra-Dimension - Soleil/Lune"
  },
  {
    id: 1244,
    en: "Lusamine's Madness - Sun/Moon",
    fr: "La folie d'Elsa-Mina - Soleil/Lune"
  },
  {
    id: 1245,
    en: "Steely Lillie! - Sun/Moon",
    fr: "Steely Lilie ! - Soleil/Lune"
  },
  {
    id: 1246,
    en: "Showdown! (Lusamine) - Sun/Moon",
    fr: "Combat! (Elsa-Mina fusionnée avec Zéroïd) - Soleil/Lune"
  },
  {
    id: 1247,
    en: "Victory! (Aether Foundation) - Sun/Moon",
    fr: "Victoire! (Fondation Aether) - Soleil/Lune"
  },
  {
    id: 1248,
    en: "A World Falls Apart - Sun/Moon",
    fr: "Un monde s'écroule - Soleil/Lune"
  },
  {
    id: 1249,
    en: "Mother and Daughter - Sun/Moon",
    fr: "Mère et fille - Soleil/Lune"
  },
  {
    id: 1250,
    en: "Battle! (Solgaleo/Lunala) - Sun/Moon",
    fr: "Combat! (Solgaleo/Lunala) - Soleil/Lune"
  },
  {
    id: 1251,
    en: "Lonely Lillie - Sun/Moon",
    fr: "Lilie est seule - Soleil/Lune"
  },
  {
    id: 1252,
    en: "The Battle Tree - Sun/Moon",
    fr: "L'Arbre de Combat - Soleil/Lune"
  },
  {
    id: 1253,
    en: "Blue's Theme - Sun/Moon",
    fr: "Thème de Blue - Soleil/Lune"
  },
  {
    id: 1254,
    en: "Battle! (Battle Tree Boss) - Sun/Moon",
    fr: "Combat! (Dresseurs de Légende) - Soleil/Lune"
  },
  {
    id: 1255,
    en: "The Path to the League/Mount Lanakila - Sun/Moon",
    fr: "Le chemin vers la Ligue/Mont Lanakila - Soleil/Lune"
  },
  {
    id: 1256,
    en: "The Summit of Mount Lanakila - Sun/Moon",
    fr: "Sommet du Mont Lanakila - Soleil/Lune"
  },
  {
    id: 1257,
    en: "The Pokémon League - Sun/Moon",
    fr: "Ligue Pokémon - Soleil/Lune"
  },
  {
    id: 1258,
    en: "Battle! (Elite Four) - Sun/Moon",
    fr: "Combat! (Conseil 4) - Soleil/Lune"
  },
  {
    id: 1259,
    en: "The Battle at the Summit!/Battle! (Champion) - Sun/Moon",
    fr: "La combat au sommet!/Combat! (Maître) - Soleil/Lune"
  },
  {
    id: 1260,
    en: "A Champion Is Born!/Victory! (Champion) - Sun/Moon",
    fr: "Un Maître de la Ligue est né !/Victoire! (Maître) - Soleil/Lune"
  },
  {
    id: 1261,
    en: "Hall of Fame - Sun/Moon",
    fr: "Panthéon - Soleil/Lune"
  },
  {
    id: 1262,
    en: "Battle! (Tapu) - Sun/Moon",
    fr: "Combat! (Toko) - Soleil/Lune"
  },
  {
    id: 1263,
    en: "Someday... - Sun/Moon",
    fr: "Un jour... - Soleil/Lune"
  },
  {
    id: 1264,
    en: "Welcome Back/Ending Theme (Part 1) - Sun/Moon",
    fr: "Bon retour/Générique de fin (Part 1) - Soleil/Lune"
  },
  {
    id: 1265,
    en: "Staff Credits/Ending Theme (Part 2) - Sun/Moon",
    fr: "Générique de fin (Part 2) - Soleil/Lune"
  },
  {
    id: 1266,
    en: "The End - Sun/Moon",
    fr: "Fin - Soleil/Lune"
  },
  {
    id: 1267,
    en: "Alola Region Theme - Ultra Sun/Ultra Moon",
    fr: "Thème de la région d'Alola - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1268,
    en: "Battle! (Wild Pokémon) - Ultra Sun/Ultra Moon",
    fr: "Combat! (Pokémon sauvage) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1269,
    en: "Battle! (Trainer) - Ultra Sun/Ultra Moon",
    fr: "Combat! (Dresseur) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1270,
    en: "Trainers' Eyes Meet! (Ultra Recon Squad) - Ultra Sun/Ultra Moon",
    fr: "Rencontre avec un Dresseur (Ultra-Commando) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1271,
    en: "Beach Spot - Ultra Sun/Ultra Moon",
    fr: "Spot de la plage - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1272,
    en: "Mantine Surf - Ultra Sun/Ultra Moon",
    fr: "Surf Démanta - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1273,
    en: "Alola Photoclub - Ultra Sun/Ultra Moon",
    fr: "Studio Photo d'Alola - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1274,
    en: "Battle! (Ultra Recon Squad) - Ultra Sun/Ultra Moon",
    fr: "Combat! (Ultra-Commando) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1275,
    en: "Battle Agency - Ultra Sun/Ultra Moon",
    fr: "Agence de Combat - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1276,
    en: "Pikachu Valley - Ultra Sun/Ultra Moon",
    fr: "Plaine des Pikachu - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1277,
    en: "Battle! (Dusk Mane/Dawn Wings Necrozma) - Ultra Sun/Ultra Moon",
    fr: "Combat! (Necrozma Crinière du Couchant/Ailes de l'Aurore) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1278,
    en: "Ultra Wormhole - Ultra Sun/Ultra Moon",
    fr: "Ultra-Brèche - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1279,
    en: "Unsettling Ambience - Ultra Sun/Ultra Moon",
    fr: "Les sept mystères de l'École de Dresseurs - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1280,
    en: "Ultra Megalopolis - Ultra Sun/Ultra Moon",
    fr: "Ultra-Mégalopole - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1281,
    en: "Battle! (Ultra Necrozma) - Ultra Sun/Ultra Moon",
    fr: "Combat! (Ultra-Necrozma) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1282,
    en: "Ultra Space Wilds - Ultra Sun/Ultra Moon",
    fr: "Ultra-Dimension Zéro - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1283,
    en: "Ultra Plant Theme (Xurkitree) - Ultra Sun/Ultra Moon",
    fr: "Ultra-Centrale (Câblifère) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1284,
    en: "Ultra Crater Theme (Celesteela) - Ultra Sun/Ultra Moon",
    fr: "Ultra-Vallée (Bamboiselle) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1285,
    en: "Ultra Desert Theme (Pheromosa) - Ultra Sun/Ultra Moon",
    fr: "Ultra-Désert (Cancrelove) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1286,
    en: "Ultra Forest Theme (Kartana) - Ultra Sun/Ultra Moon",
    fr: "Ultra-Forêt (Katagami) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1287,
    en: "Ultra Jungle Theme (Buzzwole) - Ultra Sun/Ultra Moon",
    fr: "Ultra-Jungle (Mouscoto) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1288,
    en: "Ultra Ruin Theme (Guzzlord) - Ultra Sun/Ultra Moon",
    fr: "Ultra-Gratte-Ciel (Engloutyran) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1289,
    en: "Battle! (Champion Hau) - Ultra Sun/Ultra Moon",
    fr: "Combat! (Maître Tili) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1290,
    en: "Kantonian Gym - Ultra Sun/Ultra Moon",
    fr: "Arène de Kanto - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1291,
    en: "Team Rocket's Castle - Ultra Sun/Ultra Moon",
    fr: "Château Rocket - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1292,
    en: "Trainers' Eyes Meet! (Team Rainbow Rocket) - Ultra Sun/Ultra Moon",
    fr: "Rencontre avec un Dresseur (Team Rainbow Rocket) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1293,
    en: "Battle! (Team Rainbow Rocket) - Ultra Sun/Ultra Moon",
    fr: "Combat! (Team Rainbow Rocket) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1294,
    en: "Battle! (Team Magma/Aqua Boss Maxie & Archie) - Ultra Sun/Ultra Moon",
    fr: "Combat! (Max/Arthur de la Team Magma/Aqua) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1295,
    en: "Battle! (Team Galactic Boss Cyrus) - Ultra Sun/Ultra Moon",
    fr: "Combat! (Hélio de la Team Galaxie) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1296,
    en: "Battle! (Team Plasma Boss Ghetsis) - Ultra Sun/Ultra Moon",
    fr: "Combat! (Ghetis de la Team Plasma) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1297,
    en: "Battle! (Team Flare Boss Lysandre) - Ultra Sun/Ultra Moon",
    fr: "Combat! (Lysandre de la Team Flare) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1298,
    en: "Trainers' Eyes Meet! (Giovanni) - Ultra Sun/Ultra Moon",
    fr: "Rencontre avec un Dresseur (Giovanni) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1299,
    en: "Battle! (Team Rocket Boss Giovanni) - Ultra Sun/Ultra Moon",
    fr: "Combat! (Giovanni de la Team Rainbow Rocket) - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1300,
    en: "Ending Theme - Ultra Sun/Ultra Moon",
    fr: "Générique de fin - Ultra-Soleil/Ultra-Lune"
  },
  {
    id: 1301,
    en: "Into The Game - Let's Go, Pikachu/Eevee!",
    fr: "Séquence d'introduction - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1302,
    en: "Choose Your Language - Let's Go, Pikachu/Eevee!",
    fr: "Choisissez la langue de votre jeu - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1303,
    en: "Title Screen - Let's Go, Pikachu/Eevee!",
    fr: "Écran titre - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1304,
    en: "Pallet Town Theme - Let's Go, Pikachu/Eevee!",
    fr: "Bourg Palette - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1305,
    en: "Professor Oak - Let's Go, Pikachu/Eevee!",
    fr: "Professeur Chen - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1306,
    en: "Guide - Let's Go, Pikachu/Eevee!",
    fr: "Guide - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1307,
    en: "Professor Oak's Laboratory - Let's Go, Pikachu/Eevee!",
    fr: "Laboratoire Pokémon du Professeur Chen - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1308,
    en: "Route 1/2 (Road to Viridian City: Leaving Pallet Town)/Underground Path - Let's Go, Pikachu/Eevee!",
    fr: "Route 1/2 (De Bourg Palette à Jadielle)/Souterrain - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1309,
    en: "Pokémon Center - Let's Go, Pikachu/Eevee!",
    fr: "Centre Pokémon - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1310,
    en: "Trainers' Eyes Meet! (Boy) - Let's Go, Pikachu/Eevee!",
    fr: "Rencontre avec un Dresseur (Garçon) - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1311,
    en: "Battle! (Trainer) - Let's Go, Pikachu/Eevee!",
    fr: "Combat! (Dresseur) - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1312,
    en: "Victory! (Trainer) - Let's Go, Pikachu/Eevee!",
    fr: "Victoire! (Dresseur) - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1313,
    en: "Viridian Forest/Diglett's Cave/Seafoam Islands - Let's Go, Pikachu/Eevee!",
    fr: "Forêt de Jade/Grotte Taupiqueur/Îles Écume - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1314,
    en: "Battle/Catch! (Wild Pokémon) - Let's Go, Pikachu/Eevee!",
    fr: "Combat/Capture! (Pokémon sauvage) - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1315,
    en: "Victory/Successful Catch! (Wild Pokémon) - Let's Go, Pikachu/Eevee!",
    fr: "Victoire/Capture réussie! (Pokémon sauvage) - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1316,
    en: "Trainers' Eyes Meet! (Girl) - Let's Go, Pikachu/Eevee!",
    fr: "Rencontre avec un Dresseur (Fille) - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1317,
    en: "Pewter City/Viridian City/Saffron City Theme - Let's Go, Pikachu/Eevee!",
    fr: "Argenta/Jadielle/Safrania - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1318,
    en: "Pokémon Gym - Let's Go, Pikachu/Eevee!",
    fr: "Arène Pokémon - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1319,
    en: "Battle! (Gym Leader) - Let's Go, Pikachu/Eevee!",
    fr: "Combat! (Champion d'Arène) - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1320,
    en: "Victory! (Gym Leader) - Let's Go, Pikachu/Eevee!",
    fr: "Victoire! (Champion d'Arène) - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1321,
    en: "Blue’s Theme - Let's Go, Pikachu/Eevee!",
    fr: "Thème de Blue - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1322,
    en: "Route 3/4/5/6/7/8/9/10/16 (East)/18 (East)/19/20/21/22 (Road to Cerulean City: Leaving Mt. Moon) - Let's Go, Pikachu/Eevee!",
    fr: "Route 3/4/5/6/7/8/9/10/16 (Est)/18 (Est)/19/20/21/22 (Du Mont Sélénite à Azuria) - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1323,
    en: "Caves of Mt. Moon/Rock Tunnel/Cerulean Cave/Victory Road - Let's Go, Pikachu/Eevee!",
    fr: "Mont Sélénite/Grotte Sombre/Caverne Azurée/Route Victoire - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1324,
    en: "Trainers' Eyes Meet! (Team Rocket) - Let's Go, Pikachu/Eevee!",
    fr: "Rencontre avec un Dresseur (Team Rocket) - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1325,
    en: "Jessie & James - Let's Go, Pikachu/Eevee!",
    fr: "Jessie & James - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1326,
    en: "Evolution - Let's Go, Pikachu/Eevee!",
    fr: "Évolution - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1327,
    en: "Cerulean City/Fuchsia City Theme - Let's Go, Pikachu/Eevee!",
    fr: "Azuria/Parmanie - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1328,
    en: "Route 24/25 (To Bill: Leaving Cerulean City) - Let's Go, Pikachu/Eevee!",
    fr: "Route 24/25 (D'Azuria à la maison de Léo) - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1329,
    en: "Vermilion City Theme - Let's Go, Pikachu/Eevee!",
    fr: "Carmin sur Mer - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1330,
    en: "The S.S. Anne - Let's Go, Pikachu/Eevee!",
    fr: "L'Océane - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1331,
    en: "Route 11/12/13/14/15 (Road to Lavender Town: Leaving Vermilion City) - Let's Go, Pikachu/Eevee!",
    fr: "Route 11/12/13/14/15 (De Carmin sur Mer à Lavanville) - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1332,
    en: "Lavender Town Theme - Let's Go, Pikachu/Eevee!",
    fr: "Lavanville - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1333,
    en: "Pokémon Tower - Let's Go, Pikachu/Eevee!",
    fr: "Tour Pokémon - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1334,
    en: "Celadon City Theme - Let's Go, Pikachu/Eevee!",
    fr: "Céladopole - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1335,
    en: "Team Rocket Hideout - Let's Go, Pikachu/Eevee!",
    fr: "Repaire Rocket - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1336,
    en: "Battle! (Legendary) - Let's Go, Pikachu/Eevee!",
    fr: "Combat! (Pokémon légendaire) - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1337,
    en: "Pokémon Road (Route 17/16 (West)/18 (West))/Bicycle Theme - Let's Go, Pikachu/Eevee!",
    fr: "Piste Pokémon (Route 17/16 (Ouest)/18 (Ouest))/Bicyclette - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1338,
    en: "GO Park - Let's Go, Pikachu/Eevee!",
    fr: "GO Park - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1339,
    en: "Catch! (GO Park) - Let's Go, Pikachu/Eevee!",
    fr: "Capture! (GO Park) - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1340,
    en: "Silph Co./Abandoned Power Plant - Let's Go, Pikachu/Eevee!",
    fr: "Sylphe SARL/Centrale abandonnée - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1341,
    en: "Surf - Let's Go, Pikachu/Eevee!",
    fr: "Surf - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1342,
    en: "Cinnabar Island Theme - Let's Go, Pikachu/Eevee!",
    fr: "Cramois'Île - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1343,
    en: "Pokémon Mansion - Let's Go, Pikachu/Eevee!",
    fr: "Manoir Pokémon - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1344,
    en: "Route 23/Indigo Plateau - Let's Go, Pikachu/Eevee!",
    fr: "Route 23/Plateau Indigo - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1345,
    en: "Battle! (Champion/Rival Trace) - Let's Go, Pikachu/Eevee!",
    fr: "Combat! (Maître/Rival Trace) - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1346,
    en: "Hall Of Fame - Let's Go, Pikachu/Eevee!",
    fr: "Panthéon - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1347,
    en: "Congratulations! - Let's Go, Pikachu/Eevee!",
    fr: "Félicitations! - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1348,
    en: "Ending Theme - Let's Go, Pikachu/Eevee!",
    fr: "Générique de fin - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1349,
    en: "We're Back - Let's Go, Pikachu/Eevee!",
    fr: "Nous sommes de retour - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1350,
    en: "Pokéball Plus/Connection - Let's Go, Pikachu/Eevee!",
    fr: "Poké Ball Plus/Connexion - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1351,
    en: "Mystery Gift Theme - Let's Go, Pikachu/Eevee!",
    fr: "Cadeau Mystère - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1352,
    en: "Battle! (Master Trainer) - Let's Go, Pikachu/Eevee!",
    fr: "Combat! (Expert Pokémon) - Let's Go, Pikachu/Évoli"
  },
  {
    id: 1353,
    en: "Title Screen - Sword/Shield",
    fr: "Écran titre - Épée/Bouclier"
  },
  {
    id: 1354,
    en: "Exhibition Match - Sword/Shield",
    fr: "Match de démonstration - Épée/Bouclier"
  },
  {
    id: 1355,
    en: "Postwick - Sword/Shield",
    fr: "Paddoxton - Épée/Bouclier"
  },
  {
    id: 1356,
    en: "Hop's Theme - Sword/Shield",
    fr: "Thème de Nabil - Épée/Bouclier"
  },
  {
    id: 1357,
    en: "Route 1/2 - Sword/Shield",
    fr: "Route 1/2 - Épée/Bouclier"
  },
  {
    id: 1358,
    en: "Wedgehurst - Sword/Shield",
    fr: "Brasswick - Épée/Bouclier"
  },
  {
    id: 1359,
    en: "Let's Have a Champion Time!/Champion Leon's Theme - Sword/Shield",
    fr: "C'est l'heure du Maître !/Thème du Maître Tarak - Épée/Bouclier"
  },
  {
    id: 1360,
    en: "Battle! (Hop) - Sword/Shield",
    fr: "Combat! (Nabil) - Épée/Bouclier"
  },
  {
    id: 1361,
    en: "Slumbering Weald - Sword/Shield",
    fr: "Forêt de Sleepwood - Épée/Bouclier"
  },
  {
    id: 1362,
    en: "In the Fog/Battle! (Zacian/Zamazenta) (First Encounter) - Sword/Shield",
    fr: "Dans le brouillard/Combat! (Zacian/Zamazenta) (Première rencontre) - Épée/Bouclier"
  },
  {
    id: 1363,
    en: "Professor Magnolia's Laboratory - Sword/Shield",
    fr: "Laboratoire du Professeur Magnolia - Épée/Bouclier"
  },
  {
    id: 1364,
    en: "Sonia's Theme - Sword/Shield",
    fr: "Thème de Sonya - Épée/Bouclier"
  },
  {
    id: 1365,
    en: "Pokémon Center - Sword/Shield",
    fr: "Centre Pokémon - Épée/Bouclier"
  },
  {
    id: 1366,
    en: "Battle! (Wild Pokémon) - Sword/Shield",
    fr: "Combat! (Pokémon sauvage) - Épée/Bouclier"
  },
  {
    id: 1367,
    en: "Victory! (Wild Pokémon) - Sword/Shield",
    fr: "Victoire! (Pokémon sauvage) - Épée/Bouclier"
  },
  {
    id: 1368,
    en: "Lead the Way - Sword/Shield",
    fr: "En route! - Épée/Bouclier"
  },
  {
    id: 1369,
    en: "Wild Area Station - Sword/Shield",
    fr: "Gare des Terres Sauvages - Épée/Bouclier"
  },
  {
    id: 1370,
    en: "Wild Area (South) - Sword/Shield",
    fr: "Terres Sauvages (Sud) - Épée/Bouclier"
  },
  {
    id: 1371,
    en: "Battle! (Max Raid) - Sword/Shield",
    fr: "Combat! (Raid Dynamax) - Épée/Bouclier"
  },
  {
    id: 1372,
    en: "Victory! (Max Raid) - Sword/Shield",
    fr: "Victoire! (Raid Dynamax) - Épée/Bouclier"
  },
  {
    id: 1373,
    en: "Let's Make Curry! - Sword/Shield",
    fr: "Préparons du Curry ! - Épée/Bouclier"
  },
  {
    id: 1374,
    en: "Motostoke - Sword/Shield",
    fr: "Motorby - Épée/Bouclier"
  },
  {
    id: 1375,
    en: "Boutique - Sword/Shield",
    fr: "Magasin de vêtements - Épée/Bouclier"
  },
  {
    id: 1376,
    en: "Stadium - Sword/Shield",
    fr: "Stade - Épée/Bouclier"
  },
  {
    id: 1377,
    en: "Budew Drop Inn - Sword/Shield",
    fr: "Hôtel Rozbouton d'Or - Épée/Bouclier"
  },
  {
    id: 1378,
    en: "Legends of History - Sword/Shield",
    fr: "Légendes de l'histoire - Épée/Bouclier"
  },
  {
    id: 1379,
    en: "Team Yell Appears! - Sword/Shield",
    fr: "La Team Yell apparaît! - Épée/Bouclier"
  },
  {
    id: 1380,
    en: "Marnie's Theme - Sword/Shield",
    fr: "Thème de Rosemary - Épée/Bouclier"
  },
  {
    id: 1381,
    en: "Gym Challenge Opening Ceremony - Sword/Shield",
    fr: "Cérémonie d'ouverture du Défi des Arènes - Épée/Bouclier"
  },
  {
    id: 1382,
    en: "Chairman Rose's Theme - Sword/Shield",
    fr: "Thème du Président Shehroz - Épée/Bouclier"
  },
  {
    id: 1383,
    en: "Route 3/4/5/Motostoke Outskirts - Sword/Shield",
    fr: "Route 3/4/5/Abords de Motorby - Épée/Bouclier"
  },
  {
    id: 1384,
    en: "Trainers' Eyes Meet! (Trainer) - Sword/Shield",
    fr: "Rencontre avec un Dresseur (Dresseur) - Épée/Bouclier"
  },
  {
    id: 1385,
    en: "Battle! (Trainer) - Sword/Shield",
    fr: "Combat! (Dresseur) - Épée/Bouclier"
  },
  {
    id: 1386,
    en: "Victory! (Trainer) - Sword/Shield",
    fr: "Victoire! (Dresseur) - Épée/Bouclier"
  },
  {
    id: 1387,
    en: "Trainers' Eyes Meet! (Lass) - Sword/Shield",
    fr: "Rencontre avec un Dresseur (Fillette) - Épée/Bouclier"
  },
  {
    id: 1388,
    en: "Evolution - Sword/Shield",
    fr: "Évolution - Épée/Bouclier"
  },
  {
    id: 1389,
    en: "Evolution (Galar) - Sword/Shield",
    fr: "Évolution (Galar) - Épée/Bouclier"
  },
  {
    id: 1390,
    en: "Galar Mines - Sword/Shield",
    fr: "Mines de Galar - Épée/Bouclier"
  },
  {
    id: 1391,
    en: "Trainers' Eyes Meet! (Worker) - Sword/Shield",
    fr: "Rencontre avec un Dresseur (Ouvrier) - Épée/Bouclier"
  },
  {
    id: 1392,
    en: "Bede's Theme - Sword/Shield",
    fr: "Thème de Travis - Épée/Bouclier"
  },
  {
    id: 1393,
    en: "Battle! (Bede) - Sword/Shield",
    fr: "Combat! (Travis) - Épée/Bouclier"
  },
  {
    id: 1394,
    en: "Trainers' Eyes Meet! (Pokémon Breeder) - Sword/Shield",
    fr: "Rencontre avec un Dresseur (Éleveur/Éleveuse) - Épée/Bouclier"
  },
  {
    id: 1395,
    en: "Turffield - Sword/Shield",
    fr: "Greenbury - Épée/Bouclier"
  },
  {
    id: 1396,
    en: "Gym Mission! - Sword/Shield",
    fr: "Mission d'Arène! - Épée/Bouclier"
  },
  {
    id: 1397,
    en: "Trainers' Eyes Meet! (Gym Trainer) - Sword/Shield",
    fr: "Rencontre avec un Dresseur (Dresseur d'Arène) - Épée/Bouclier"
  },
  {
    id: 1398,
    en: "Victory! (Gym Trainer) - Sword/Shield",
    fr: "Victoire! (Dresseur d'Arène) - Épée/Bouclier"
  },
  {
    id: 1399,
    en: "Battle! (Gym Leader) - Sword/Shield",
    fr: "Combat! (Champion d'Arène) - Épée/Bouclier"
  },
  {
    id: 1400,
    en: "Victory! (Gym Leader) - Sword/Shield",
    fr: "Victoire! (Champion d'Arène) - Épée/Bouclier"
  },
  {
    id: 1401,
    en: "Hulbury - Sword/Shield",
    fr: "Skifford - Épée/Bouclier"
  },
  {
    id: 1402,
    en: "Poké Jobs - Sword/Shield",
    fr: "Poké Service - Épée/Bouclier"
  },
  {
    id: 1403,
    en: "Battle! (Marnie) - Sword/Shield",
    fr: "Combat! (Rosemary) - Épée/Bouclier"
  },
  {
    id: 1404,
    en: "Wild Area (North) - Sword/Shield",
    fr: "Terres Sauvages (Nord) - Épée/Bouclier"
  },
  {
    id: 1405,
    en: "Rotom Rally - Sword/Shield",
    fr: "Moti-Rallye - Épée/Bouclier"
  },
  {
    id: 1406,
    en: "Hammerlocke - Sword/Shield",
    fr: "Kickenham - Épée/Bouclier"
  },
  {
    id: 1407,
    en: "Salon - Sword/Shield",
    fr: "Salon Salle à Mèches - Épée/Bouclier"
  },
  {
    id: 1408,
    en: "Route 6/7/8/9 - Sword/Shield",
    fr: "Route 6/7/8/9 - Épée/Bouclier"
  },
  {
    id: 1409,
    en: "Trainers' Eyes Meet! (Artist) - Sword/Shield",
    fr: "Rencontre avec un Dresseur (Artiste) - Épée/Bouclier"
  },
  {
    id: 1410,
    en: "Stow-On-Side - Sword/Shield",
    fr: "Old Chister - Épée/Bouclier"
  },
  {
    id: 1411,
    en: "Crumbling Ruins - Sword/Shield",
    fr: "Ruines croulantes - Épée/Bouclier"
  },
  {
    id: 1412,
    en: "Truth of the Ruins (Galar Legends) - Sword/Shield",
    fr: "La vérité sur les ruines (Légendes de Galar) - Épée/Bouclier"
  },
  {
    id: 1413,
    en: "Glimwood Tangle - Sword/Shield",
    fr: "Forêt de Lumirinth - Épée/Bouclier"
  },
  {
    id: 1414,
    en: "Ballonlea - Sword/Shield",
    fr: "Corrifey - Épée/Bouclier"
  },
  {
    id: 1415,
    en: "Circhester - Sword/Shield",
    fr: "Ludester - Épée/Bouclier"
  },
  {
    id: 1416,
    en: "Spikemuth - Sword/Shield",
    fr: "Smashings - Épée/Bouclier"
  },
  {
    id: 1417,
    en: "Battle! (Team Yell) - Sword/Shield",
    fr: "Combat! (Team Yell) - Épée/Bouclier"
  },
  {
    id: 1418,
    en: "Battle! (Gym Leader Piers) - Sword/Shield",
    fr: "Combat! (Peterson le Champion d'Arène) - Épée/Bouclier"
  },
  {
    id: 1419,
    en: "Route 10 - Sword/Shield",
    fr: "Route 10 - Épée/Bouclier"
  },
  {
    id: 1420,
    en: "Wyndon - Sword/Shield",
    fr: "Winscor - Épée/Bouclier"
  },
  {
    id: 1421,
    en: "Wyndon Stadium - Sword/Shield",
    fr: "Stade de Winscor (Siège de la Ligue) - Épée/Bouclier"
  },
  {
    id: 1422,
    en: "Decisive Battle! (Marnie) - Sword/Shield",
    fr: "Combat décisif! (Rosemary) - Épée/Bouclier"
  },
  {
    id: 1423,
    en: "Decisive Battle! (Hop) - Sword/Shield",
    fr: "Combat décisif! (Nabil) - Épée/Bouclier"
  },
  {
    id: 1424,
    en: "Rose Tower - Sword/Shield",
    fr: "Shehroz Tower - Épée/Bouclier"
  },
  {
    id: 1425,
    en: "Arrival at the Top - Sword/Shield",
    fr: "Arrivée au sommet de la Shehroz Tower - Épée/Bouclier"
  },
  {
    id: 1426,
    en: "Battle! (Oleana) - Sword/Shield",
    fr: "Combat! (Liv) - Épée/Bouclier"
  },
  {
    id: 1427,
    en: "Final Tournament Begin! - Sword/Shield",
    fr: "Le tournoi final commence ! - Épée/Bouclier"
  },
  {
    id: 1428,
    en: "Battle! (Pokémon League Tournament) - Sword/Shield",
    fr: "Combat! (Poké Masters) - Épée/Bouclier"
  },
  {
    id: 1429,
    en: "Victory! (Pokémon League Tournament) - Sword/Shield",
    fr: "Victoire! (Poké Masters) - Épée/Bouclier"
  },
  {
    id: 1430,
    en: "Darkest Day - Sword/Shield",
    fr: "La Nuit Noire - Épée/Bouclier"
  },
  {
    id: 1431,
    en: "Slumbering Weald Shrine/Deep in the Forest - Sword/Shield",
    fr: "Autel de la Forêt de Sleepwood - Épée/Bouclier"
  },
  {
    id: 1432,
    en: "Abnormal Situation - Sword/Shield",
    fr: "Situation anormale - Épée/Bouclier"
  },
  {
    id: 1433,
    en: "Energy Plant - Sword/Shield",
    fr: "Salle du réacteur - Épée/Bouclier"
  },
  {
    id: 1434,
    en: "Battle! (Chairman Rose) - Sword/Shield",
    fr: "Combat! (Président Shehroz de Macro Cosmos) - Épée/Bouclier"
  },
  {
    id: 1435,
    en: "Leon and Eternatus - Sword/Shield",
    fr: "Tarak et Éthernatos - Épée/Bouclier"
  },
  {
    id: 1436,
    en: "Battle! (Eternatus) - Sword/Shield",
    fr: "Combat! (Éthernatos) - Épée/Bouclier"
  },
  {
    id: 1437,
    en: "Infinite Power (Eternamax Eternatus) - Sword/Shield",
    fr: "Pouvoir infini (Éthernatos Infinimax) - Épée/Bouclier"
  },
  {
    id: 1438,
    en: "Decisive Battle! (Eternatus) - Sword/Shield",
    fr: "Combat décisif! (Éthernatos) - Épée/Bouclier"
  },
  {
    id: 1439,
    en: "Caught an Eternatus - Sword/Shield",
    fr: "Éthernatos attrapé - Épée/Bouclier"
  },
  {
    id: 1440,
    en: "Decisive Battle! (Champion Leon) - Sword/Shield",
    fr: "Combat décisif! (Tarak le Maître) - Épée/Bouclier"
  },
  {
    id: 1441,
    en: "Victory! (Champion Leon) - Sword/Shield",
    fr: "Victoire! (Tarak le Maître) - Épée/Bouclier"
  },
  {
    id: 1442,
    en: "To Create a Bright Future - Sword/Shield",
    fr: "Créer un avenir meilleur - Épée/Bouclier"
  },
  {
    id: 1443,
    en: "Battle Tower - Sword/Shield",
    fr: "Tour de Combat - Épée/Bouclier"
  },
  {
    id: 1444,
    en: "Battle! (Battle Tower) - Sword/Shield",
    fr: "Combat! (Tour de Combat) - Épée/Bouclier"
  },
  {
    id: 1445,
    en: "Battle! (Zacian/Zamazenta) - Sword/Shield",
    fr: "Combat! (Zacian/Zamazenta) - Épée/Bouclier"
  },
  {
    id: 1446,
    en: "Staff Roll - Sword/Shield",
    fr: "Générique de fin - Épée/Bouclier"
  },
  {
    id: 1447,
    en: "The Isle Of Armor - Sword/Shield (The Isle of Armor)",
    fr: "Isolarmure - Épée/Bouclier (L'île solitaire de l'Armure)"
  },
  {
    id: 1448,
    en: "Klara's Theme - Sword/Shield (The Isle of Armor)",
    fr: "Thème de Sophora - Épée/Bouclier (L'île solitaire de l'Armure)"
  },
  {
    id: 1449,
    en: "Battle! (Klara) - Sword/Shield (The Isle of Armor)",
    fr: "Combat! (Sophora) - Épée/Bouclier (L'île solitaire de l'Armure)"
  },
  {
    id: 1450,
    en: "Avery's Theme - Sword/Shield (The Isle of Armor)",
    fr: "Thème de Saturnin - Épée/Bouclier (L'île solitaire de l'Armure)"
  },
  {
    id: 1451,
    en: "Battle! (Avery) - Sword/Shield (The Isle of Armor)",
    fr: "Combat! (Saturnin) - Épée/Bouclier (L'île solitaire de l'Armure)"
  },
  {
    id: 1452,
    en: "Master Dojo - Sword/Shield (The Isle of Armor)",
    fr: "Dojo de la Maîtrise - Épée/Bouclier (L'île solitaire de l'Armure)"
  },
  {
    id: 1453,
    en: "Mustard's Theme - Sword/Shield (The Isle of Armor)",
    fr: "Thème de Mustar - Épée/Bouclier (L'île solitaire de l'Armure)"
  },
  {
    id: 1454,
    en: "Battle! (Mustard) - Sword/Shield (The Isle of Armor)",
    fr: "Combat! (Mustar) - Épée/Bouclier (L'île solitaire de l'Armure)"
  },
  {
    id: 1455,
    en: "Secret Armor/Kubfu's Introduction - Sword/Shield (The Isle of Armor)",
    fr: "Armure Secrète/Présentation de Wushours - Épée/Bouclier (L'île solitaire de l'Armure)"
  },
  {
    id: 1456,
    en: "Tower Of Waters - Sword/Shield (The Isle of Armor)",
    fr: "Tour de l'Eau - Épée/Bouclier (L'île solitaire de l'Armure)"
  },
  {
    id: 1457,
    en: "Tower Of Darkness - Sword/Shield (The Isle of Armor)",
    fr: "Tour des Ténèbres - Épée/Bouclier (L'île solitaire de l'Armure)"
  },
  {
    id: 1458,
    en: "Battle! (Serious Mustard) - Sword/Shield (The Isle of Armor)",
    fr: "Combat! (Mustar serieux) - Épée/Bouclier (L'île solitaire de l'Armure)"
  },
  {
    id: 1459,
    en: "Victory! (Mustard) - Sword/Shield (The Isle of Armor)",
    fr: "Victoire! (Mustar) - Épée/Bouclier (L'île solitaire de l'Armure)"
  },
  {
    id: 1460,
    en: "Kubfu and Victory/Kubfu's Training Complete! - Sword/Shield (The Isle of Armor)",
    fr: "Wushours et la victoire/L'entraînement de Wushours est terminé! - Épée/Bouclier (L'île solitaire de l'Armure)"
  },
  {
    id: 1461,
    en: "The Crown Tundra - Sword/Shield (The Crown Tundra)",
    fr: "Couronneige - Épée/Bouclier (Les terres enneigées de la Couronne)"
  },
  {
    id: 1462,
    en: "Peony's Theme - Sword/Shield (The Crown Tundra)",
    fr: "Thème de Dhilan - Épée/Bouclier (Les terres enneigées de la Couronne)"
  },
  {
    id: 1463,
    en: "Battle! (Peony) - Sword/Shield (The Crown Tundra)",
    fr: "Combat! (Dhilan) - Épée/Bouclier (Les terres enneigées de la Couronne)"
  },
  {
    id: 1464,
    en: "Max Lair - Sword/Shield (The Crown Tundra)",
    fr: "Grand Antre Dynamax - Épée/Bouclier (Les terres enneigées de la Couronne)"
  },
  {
    id: 1465,
    en: "Dynamax Adventure - Sword/Shield (The Crown Tundra)",
    fr: "Expédition Dynamax - Épée/Bouclier (Les terres enneigées de la Couronne)"
  },
  {
    id: 1466,
    en: "Battle! (Legendary Max Raid) - Sword/Shield (The Crown Tundra)",
    fr: "Combat! (Raid Dynamax de Pokémon légendaire) - Épée/Bouclier (Les terres enneigées de la Couronne)"
  },
  {
    id: 1467,
    en: "Freezington - Sword/Shield (The Crown Tundra)",
    fr: "Hameau Gelé - Épée/Bouclier (Les terres enneigées de la Couronne)"
  },
  {
    id: 1468,
    en: "Calyrex's Theme/King of Bountiful Harvests - Sword/Shield (The Crown Tundra)",
    fr: "Thème de Sylveroy/Le Seigneur des récoltes - Épée/Bouclier (Les terres enneigées de la Couronne)"
  },
  {
    id: 1469,
    en: "Battle! (Calyrex) - Sword/Shield (The Crown Tundra)",
    fr: "Combat! (Sylveroy) - Épée/Bouclier (Les terres enneigées de la Couronne)"
  },
  {
    id: 1470,
    en: "Battle! (Glastrier/Spectrier) - Sword/Shield (The Crown Tundra)",
    fr: "Combat! (Blizzeval/Spectreval) - Épée/Bouclier (Les terres enneigées de la Couronne)"
  },
  {
    id: 1471,
    en: "Crown Shrine - Sword/Shield (The Crown Tundra)",
    fr: "Temple Couronne - Épée/Bouclier (Les terres enneigées de la Couronne)"
  },
  {
    id: 1472,
    en: "Battle! (Mounted Calyrex) - Sword/Shield (The Crown Tundra)",
    fr: "Combat! (Sylveroy Cavalier) - Épée/Bouclier (Les terres enneigées de la Couronne)"
  },
  {
    id: 1473,
    en: "Battle! (Regirock/Regice/Registeel/Regieleki/Regidrago) - Sword/Shield (The Crown Tundra)",
    fr: "Combat! (Regirock/Regice/Registeel/Regieleki/Regidrago) - Épée/Bouclier (Les terres enneigées de la Couronne)"
  },
  {
    id: 1474,
    en: "Gather at the Dyna Tree (The Legendary Birds Appear) - Sword/Shield (The Crown Tundra)",
    fr: "Rassemblement au Dynarbre (Les Oiseaux légendaires apparaissent) - Épée/Bouclier (Les terres enneigées de la Couronne)"
  },
  {
    id: 1475,
    en: "Battle! (Galarian Legendary Birds) - Sword/Shield (The Crown Tundra)",
    fr: "Combat! (Oiseaux légendaires de Galar) - Épée/Bouclier (Les terres enneigées de la Couronne)"
  },
  {
    id: 1476,
    en: "Opening Movie - Brilliant Diamond/Shining Pearl",
    fr: "Séquence d'introduction - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1477,
    en: "Introduction - Brilliant Diamond/Shining Pearl",
    fr: "Introduction - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1478,
    en: "Special Report: \"Search For The Red Gyarados!\" - Brilliant Diamond/Shining Pearl",
    fr: "À la recherche du Léviator Rouge - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1479,
    en: "Twinleaf Town (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Bonaugure (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1480,
    en: "Rival Barry - Brilliant Diamond/Shining Pearl",
    fr: "Rival René - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1481,
    en: "Route 201/202/219/Verity Lakefront (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Route 201/202/219/Rive du Lac Vérité (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1482,
    en: "Lake - Brilliant Diamond/Shining Pearl",
    fr: "Lac - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1483,
    en: "A Surprise At The Lake! - Brilliant Diamond/Shining Pearl",
    fr: "Surprise au Lac! - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1484,
    en: "Battle! (Wild Pokémon) - Brilliant Diamond/Shining Pearl",
    fr: "Combat! (Pokémon sauvage) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1485,
    en: "Victory! (Wild Pokémon) - Brilliant Diamond/Shining Pearl",
    fr: "Victoire! (Pokémon sauvage) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1486,
    en: "Dawn - Brilliant Diamond/Shining Pearl",
    fr: "Aurore - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1487,
    en: "Sandgem Town (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Littorella (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1488,
    en: "The Pokémon Lab - Brilliant Diamond/Shining Pearl",
    fr: "Laboratoire Pokémon - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1489,
    en: "Hurry Along - Brilliant Diamond/Shining Pearl",
    fr: "En route! - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1490,
    en: "Pokémon Center (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Centre Pokémon (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1491,
    en: "Trainers' Eyes Meet (Youngster) - Brilliant Diamond/Shining Pearl",
    fr: "Rencontre avec un Dresseur (Gamin) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1492,
    en: "Trainers' Eyes Meet (Lass) - Brilliant Diamond/Shining Pearl",
    fr: "Rencontre avec un Dresseur (Fillette) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1493,
    en: "Battle! (Trainer) - Brilliant Diamond/Shining Pearl",
    fr: "Combat! (Combat de Dresseur) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1494,
    en: "Victory! (Trainer) - Brilliant Diamond/Shining Pearl",
    fr: "Victoire! (Combat de Dresseur) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1495,
    en: "Jubilife City (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Féli-Cité (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1496,
    en: "Poké Mart - Brilliant Diamond/Shining Pearl",
    fr: "Boutique Pokémon - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1497,
    en: "Route 203/204/218 (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Route 203/204/218 (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1498,
    en: "Battle! (Rival Barry) - Brilliant Diamond/Shining Pearl",
    fr: "Combat! (Rival René) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1499,
    en: "Oreburgh Gate/Ravaged Path/Wayward Cave - Brilliant Diamond/Shining Pearl",
    fr: "Entrée de Charbourg/Chemin Rocheux/Grotte des Égarés - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1500,
    en: "Oreburgh City (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Charbourg (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1501,
    en: "Oreburgh Mine/Maniac Tunnel/Fuego Ironworks - Brilliant Diamond/Shining Pearl",
    fr: "Mine de Charbourg/Tunnel Ruineman./Forge Fuego - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1502,
    en: "Pokémon Gym - Brilliant Diamond/Shining Pearl",
    fr: "Arène Pokémon - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1503,
    en: "Battle! (Gym Leader) - Brilliant Diamond/Shining Pearl",
    fr: "Combat! (Champion d'Arène) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1504,
    en: "Victory! (Gym Leader) - Brilliant Diamond/Shining Pearl",
    fr: "Victoire! (Champion d'Arène) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1505,
    en: "Trainers' Eyes Meet (Twins) - Brilliant Diamond/Shining Pearl",
    fr: "Rencontre avec un Dresseur (Jumelles) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1506,
    en: "Floaroma Town/Seabreak Path/Flower Paradise (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Floraville/Passage Marin/Paradis Fleuri (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1507,
    en: "Route 205 (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Route 205 (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1508,
    en: "Team Galactic Appears! - Brilliant Diamond/Shining Pearl",
    fr: "La Team Galaxie apparaît! - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1509,
    en: "Battle! (Team Galactic) - Brilliant Diamond/Shining Pearl",
    fr: "Combat! (Team Galaxie) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1510,
    en: "Eterna Forest/Lost Tower/Solaceon Ruins/Snowpoint Temple/Fullmoon Island - Brilliant Diamond/Shining Pearl",
    fr: "Forêt de Vestigion/Tour Perdue/Ruines de Bonville/Temple de Frimapic/Île Pleine Lune - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1511,
    en: "Eterna City/Celestic Town (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Vestigion/Célestia (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1512,
    en: "Galactic Eterna Building - Brilliant Diamond/Shining Pearl",
    fr: "Centre Galaxie de Vestigion - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1513,
    en: "Battle! (Team Galactic Commander) - Brilliant Diamond/Shining Pearl",
    fr: "Combat! (Admin Team Galaxie) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1514,
    en: "Victory! (Team Galactic) - Brilliant Diamond/Shining Pearl",
    fr: "Victoire! (Team Galaxie) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1515,
    en: "Evolution - Brilliant Diamond/Shining Pearl",
    fr: "Évolution - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1516,
    en: "Bicycle - Brilliant Diamond/Shining Pearl",
    fr: "Bicyclette - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1517,
    en: "Trainers' Eyes Meet (Cyclist) - Brilliant Diamond/Shining Pearl",
    fr: "Rencontre avec un Dresseur (Cycliste) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1518,
    en: "Route 206/207/208/220/221 (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Route 206/207/208/220/221 (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1519,
    en: "Hearthome City (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Unionpolis (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1520,
    en: "Route 209/212/222 (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Route 209/212/222 (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1521,
    en: "Trainers' Eyes Meet (Hiker) - Brilliant Diamond/Shining Pearl",
    fr: "Rencontre avec un Dresseur (Montagnard) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1522,
    en: "Solaceon Town/Pastoria City (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Bonville/Verchamps (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1523,
    en: "Route 210/211/214/215/223/224 (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Route 210/211/214/215/223/224 (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1524,
    en: "Veilstone City (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Voilaroc (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1525,
    en: "Valor Lakefront/Route 213/Resort Area (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Rive du Lac Courage/Route 213/Aire de Détente (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1526,
    en: "Canalave City (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Joliberges (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1527,
    en: "Route 216/217/Acuity Lakefront (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Route 216/217/Rive du Lac Savoir (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1528,
    en: "Snowpoint City (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Frimapic (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1529,
    en: "Team Galactic HQ - Brilliant Diamond/Shining Pearl",
    fr: "QG de la Team Galaxie - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1530,
    en: "Battle! (Team Galactic Boss Cyrus) - Brilliant Diamond/Shining Pearl",
    fr: "Combat! (Hélio le Boss Team Galaxie) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1531,
    en: "Deep Within Team Galactic HQ - Brilliant Diamond/Shining Pearl",
    fr: "Au fond du QG de la Team Galaxie - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1532,
    en: "Mount Coronet - Brilliant Diamond/Shining Pearl",
    fr: "Mont Couronné - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1533,
    en: "Spear Pillar - Brilliant Diamond/Shining Pearl",
    fr: "Colonnes Lances - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1534,
    en: "The Legendary Pokémon Appears! - Brilliant Diamond/Shining Pearl",
    fr: "Un Pokémon légendaire apparaît! - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1535,
    en: "Catastrophe! - Brilliant Diamond/Shining Pearl",
    fr: "Catastrophe! - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1536,
    en: "Battle! (Dialga/Palkia) - Brilliant Diamond/Shining Pearl",
    fr: "Combat! (Dialga/Palkia) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1537,
    en: "Sunyshore City (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Rivamar (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1538,
    en: "Victory Road - Brilliant Diamond/Shining Pearl",
    fr: "Route Victoire - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1539,
    en: "Trainers' Eyes Meet (Ace Trainer) - Brilliant Diamond/Shining Pearl",
    fr: "Rencontre avec un Dresseur (Topdresseur) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1540,
    en: "Pokémon League (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Ligue Pokémon (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1541,
    en: "Fight Area/Survival Area (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Aire de Combat/Aire de Survie (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1542,
    en: "Route 225/226/227 (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Route 225/226/227 (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1543,
    en: "Route 228/229/230 (Day) - Brilliant Diamond/Shining Pearl",
    fr: "Route 228/229/230 (Jour) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1544,
    en: "Twinleaf Town (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Bonaugure (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1545,
    en: "Route 201/202/219/Verity Lakefront (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Route 201/202/219/Rive du Lac Vérité (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1546,
    en: "Pokémon Center (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Centre Pokémon (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1547,
    en: "Sandgem Town (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Littorella (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1548,
    en: "Lucas - Brilliant Diamond/Shining Pearl",
    fr: "Louka - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1549,
    en: "Jubilife City (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Féli-Cité (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1550,
    en: "TV Station - Brilliant Diamond/Shining Pearl",
    fr: "Féli-Télé - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1551,
    en: "GTS - Brilliant Diamond/Shining Pearl",
    fr: "GTS - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1552,
    en: "Surf - Brilliant Diamond/Shining Pearl",
    fr: "Surf - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1553,
    en: "Canalave City (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Joliberges (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1554,
    en: "Route 203/204/218 (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Route 203/204/218 (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1555,
    en: "Trainers' Eyes Meet (Black Belt) - Brilliant Diamond/Shining Pearl",
    fr: "Rencontre avec un Dresseur (Karatéka) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1556,
    en: "Oreburgh City (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Charbourg (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1557,
    en: "Route 205 (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Route 205 (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1558,
    en: "Trainers' Eyes Meet (Sailor) - Brilliant Diamond/Shining Pearl",
    fr: "Rencontre avec un Dresseur (Marin) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1559,
    en: "Eterna City/Celestic Town (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Vestigion/Célestia (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1560,
    en: "The Grand Underground - Brilliant Diamond/Shining Pearl",
    fr: "Les Grands Souterrains - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1561,
    en: "Trainers' Eyes Meet (Aroma Lady) - Brilliant Diamond/Shining Pearl",
    fr: "Rencontre avec un Dresseur (Aromathérapeute) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1562,
    en: "Floaroma Town/Seabreak Path/Flower Paradise (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Floraville/Passage Marin/Paradis Fleuri (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1563,
    en: "Old Chateau/Spring Path/Sendoff Spring/Turnback Cave/Newmoon Island - Brilliant Diamond/Shining Pearl",
    fr: "Vieux Château/Chemin de la Source/Source des Adieux/Grotte du Retour/Île Nouvellune - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1564,
    en: "Solaceon Town/Pastoria City (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Bonville/Verchamps (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1565,
    en: "Great Marsh/Ramanas Park - Brilliant Diamond/Shining Pearl",
    fr: "Grand Marais/Parc Rosa Rugosa - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1566,
    en: "Route 206/207/208/220/221 (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Route 206/207/208/220/221 (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1567,
    en: "Trainers' Eyes Meet (Collector) - Brilliant Diamond/Shining Pearl",
    fr: "Rencontre avec un Dresseur (Collectionneur) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1568,
    en: "Veilstone City (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Voilaroc (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1569,
    en: "Metronome Style Shop (Game Corner) - Brilliant Diamond/Shining Pearl",
    fr: "Coin Mode Métronome (Casino) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1570,
    en: "Trainers' Eyes Meet (PI) - Brilliant Diamond/Shining Pearl",
    fr: "Rencontre avec un Dresseur (Joueur) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1571,
    en: "Route 209/212/222 (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Route 209/212/222 (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1572,
    en: "Snowpoint City (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Frimapic (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1573,
    en: "Route 216/217/Acuity Lakefront (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Route 216/217/Rive du Lac Savoir (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1574,
    en: "Lake Caverns - Brilliant Diamond/Shining Pearl",
    fr: "Cavernes lacustres - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1575,
    en: "Battle! (Azelf/Mesprit/Uxie) - Brilliant Diamond/Shining Pearl",
    fr: "Combat! (Créfadet/Créfollet/Créhelf) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1576,
    en: "Route 210/211/214/215/223/224 (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Route 210/211/214/215/223/224 (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1577,
    en: "A Poké Radar Hit! - Brilliant Diamond/Shining Pearl",
    fr: "Détection du Poké Radar! - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1578,
    en: "Sunyshore City (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Rivamar (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1579,
    en: "Trainers' Eyes Meet (Artist) - Brilliant Diamond/Shining Pearl",
    fr: "Rencontre avec un Dresseur (Artiste) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1580,
    en: "Amity Square - Brilliant Diamond/Shining Pearl",
    fr: "Square Paisible - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1581,
    en: "Hearthome City (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Unionpolis (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1582,
    en: "Contest Hall - Brilliant Diamond/Shining Pearl",
    fr: "Salle de Concours - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1583,
    en: "Poffins - Brilliant Diamond/Shining Pearl",
    fr: "Poffins - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1586,
    en: "Super Contest Show: Beauty - Brilliant Diamond/Shining Pearl",
    fr: "Super Show Concours: Beauté - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1587,
    en: "Super Contest Show: Cleverness - Brilliant Diamond/Shining Pearl",
    fr: "Super Show Concours: Intelligence - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1588,
    en: "Super Contest Show: Coolness - Brilliant Diamond/Shining Pearl",
    fr: "Super Show Concours: Sang-froid - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1589,
    en: "Super Contest Show: Cuteness - Brilliant Diamond/Shining Pearl",
    fr: "Super Show Concours: Grâce - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1590,
    en: "Super Contest Show: Toughness - Brilliant Diamond/Shining Pearl",
    fr: "Super Show Concours: Robustesse - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1584,
    en: "Super Contest Show: Brilliant (Diamond) - Brilliant Diamond/Shining Pearl",
    fr: "Super Show Concours: Étincelant (Diamant) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1585,
    en: "Super Contest Show: Shining (Pearl) - Brilliant Diamond/Shining Pearl",
    fr: "Super Show Concours: Scintillant (Perle) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1591,
    en: "Contest ~ Results Announcement - Brilliant Diamond/Shining Pearl",
    fr: "Concours ~ Annonce des résultats - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1592,
    en: "Contest ~ Winner - Brilliant Diamond/Shining Pearl",
    fr: "Concours ~ Vainqueur! - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1593,
    en: "Route 228/229/230 (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Route 228/229/230 (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1594,
    en: "Valor Lakefront/Route 213/Resort Area (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Rive du Lac Courage/Route 213/Aire de Détente (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1595,
    en: "Fight Area/Survival Area (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Aire de Combat/Aire de Survie (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1596,
    en: "Battle Tower - Brilliant Diamond/Shining Pearl",
    fr: "Tour de Combat - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1597,
    en: "Route 225/226/227 (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Route 225/226/227 (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1598,
    en: "Stark Mountain - Brilliant Diamond/Shining Pearl",
    fr: "Mont Abrupt - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1599,
    en: "Battle! (Legendary Pokémon) - Brilliant Diamond/Shining Pearl",
    fr: "Combat! (Pokémon légendaire) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1600,
    en: "Mystery Gift - Brilliant Diamond/Shining Pearl",
    fr: "Cadeau Mystère - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1601,
    en: "Pokémon League (Night) - Brilliant Diamond/Shining Pearl",
    fr: "Ligue Pokémon (Nuit) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1602,
    en: "Decisive Battle! (Pokémon League) - Brilliant Diamond/Shining Pearl",
    fr: "Combat décisif! (Ligue Pokémon) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1603,
    en: "The Elite Four Appear! - Brilliant Diamond/Shining Pearl",
    fr: "Le Conseil 4 apparaît! - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1604,
    en: "Battle! (Elite Four) - Brilliant Diamond/Shining Pearl",
    fr: "Combat! (Conseil 4) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1605,
    en: "Victory! (Elite Four) - Brilliant Diamond/Shining Pearl",
    fr: "Victoire! (Conseil 4) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1606,
    en: "Champion Cynthia - Brilliant Diamond/Shining Pearl",
    fr: "Cynthia le Maître - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1607,
    en: "Battle! (Champion Cynthia) - Brilliant Diamond/Shining Pearl",
    fr: "Combat! (Cynthia le Maître) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1608,
    en: "Victory! (Champion Cynthia) - Brilliant Diamond/Shining Pearl",
    fr: "Victoire! (Cynthia le Maître) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1609,
    en: "Hall of Fame - Brilliant Diamond/Shining Pearl",
    fr: "Panthéon - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1610,
    en: "Congratulations on Entering the Hall of Fame! - Brilliant Diamond/Shining Pearl",
    fr: "Entrée au Panthéon! - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1611,
    en: "Ending Theme - Brilliant Diamond/Shining Pearl",
    fr: "Générique de fin - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1612,
    en: "Battle! (Giratina) - Brilliant Diamond/Shining Pearl",
    fr: "Combat! (Giratina) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1613,
    en: "Hall of Origin - Brilliant Diamond/Shining Pearl",
    fr: "Salle Originelle - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1614,
    en: "Battle! (Arceus) - Brilliant Diamond/Shining Pearl",
    fr: "Combat! (Arceus) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1615,
    en: "Battle! (Minor Legendary Ramanas Park) - Brilliant Diamond/Shining Pearl",
    fr: "Combat! (Pokémon légendaire mineur du Parc Rosa Rugosa) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1616,
    en: "Battle! (Major Legendary Ramanas Park) - Brilliant Diamond/Shining Pearl",
    fr: "Combat! (Pokémon légendaire majeur du Parc Rosa Rugosa) - Diamant Étincelant/Perle Scintillante"
  },
  {
    id: 1617,
    en: "Transition - Legends: Arceus",
    fr: "Transition - Légendes: Arceus"
  },
  {
    id: 1618,
    en: "Professor Laventon - Legends: Arceus",
    fr: "Professeur Lavande - Légendes: Arceus"
  },
  {
    id: 1619,
    en: "Encounter in Hisui - Legends: Arceus",
    fr: "Rencontre à Hisui - Légendes: Arceus"
  },
  {
    id: 1620,
    en: "Jubilife Village - Legends: Arceus",
    fr: "Rusti-Cité - Légendes: Arceus"
  },
  {
    id: 1621,
    en: "Galaxy Hall - Legends: Arceus",
    fr: "Siège Groupe Galaxie - Légendes: Arceus"
  },
  {
    id: 1622,
    en: "Battle! (Person of Hisui) - Legends: Arceus",
    fr: "Combat! (Personne de Hisui) - Légendes: Arceus"
  },
  {
    id: 1623,
    en: "Obsidian Fieldlands (1) - Legends: Arceus",
    fr: "Plaines Obsidiennes (1) - Légendes: Arceus"
  },
  {
    id: 1624,
    en: "Omen of a Battle/Spotted: 1 - Legends: Arceus",
    fr: "Menace d'un combat/Repéré: 1 - Légendes: Arceus"
  },
  {
    id: 1625,
    en: "Omen of a Battle/Spotted: 2 - Legends: Arceus",
    fr: "Menace d'un combat/Repéré: 2 - Légendes: Arceus"
  },
  {
    id: 1626,
    en: "Omen of a Battle/Spotted: 3 - Legends: Arceus",
    fr: "Menace d'un combat/Repéré: 3 - Légendes: Arceus"
  },
  {
    id: 1627,
    en: "Battle! (Wild Pokémon) - Legends: Arceus",
    fr: "Combat! (Pokémon sauvage) - Légendes: Arceus"
  },
  {
    id: 1628,
    en: "Survey Report (Day) - Legends: Arceus",
    fr: "Rapport de recherches (Jour) - Légendes: Arceus"
  },
  {
    id: 1629,
    en: "Obsidian Fieldlands (2) - Legends: Arceus",
    fr: "Plaines Obsidiennes (2) - Légendes: Arceus"
  },
  {
    id: 1630,
    en: "Omen of a Battle/Spotted: Alpha Pokémon - Legends: Arceus",
    fr: "Menace d'un combat/Repéré: Pokémon Baron - Légendes: Arceus"
  },
  {
    id: 1631,
    en: "Battle! (Alpha Pokémon) - Legends: Arceus",
    fr: "Combat! (Pokémon Baron) - Légendes: Arceus"
  },
  {
    id: 1632,
    en: "Discussion - Legends: Arceus",
    fr: "Discussion - Légendes: Arceus"
  },
  {
    id: 1633,
    en: "A Dangerous Situation! (Miss Fortunes) - Legends: Arceus",
    fr: "Les Détroussœurs - Légendes: Arceus"
  },
  {
    id: 1634,
    en: "The Heartwood (Eterna Forest) - Legends: Arceus",
    fr: "La Forêt Lointaine (Forêt de Vestigion) - Légendes: Arceus"
  },
  {
    id: 1635,
    en: "Evolution - Legends: Arceus",
    fr: "Évolution - Légendes: Arceus"
  },
  {
    id: 1636,
    en: "Noble Pokémon's Arena - Legends: Arceus",
    fr: "Arène d'un Pokémon Monarque - Légendes: Arceus"
  },
  {
    id: 1637,
    en: "Battle! (Noble Pokémon) - Legends: Arceus",
    fr: "Combat! (Pokémon monarque) - Légendes: Arceus"
  },
  {
    id: 1638,
    en: "The Matter Is Settled - Legends: Arceus",
    fr: "L'affaire est résolue - Légendes: Arceus"
  },
  {
    id: 1639,
    en: "Target Practice - Legends: Arceus",
    fr: "Vise-et-Tire - Légendes: Arceus"
  },
  {
    id: 1640,
    en: "Crimson Mirelands (1) - Legends: Arceus",
    fr: "Marais Carmin (1) - Légendes: Arceus"
  },
  {
    id: 1641,
    en: "Space-Time Distortion - Legends: Arceus",
    fr: "Distorsion Spatio-Temporelle - Légendes: Arceus"
  },
  {
    id: 1642,
    en: "Diamond and Pearl Clan Settlement - Legends: Arceus",
    fr: "Hameau Diamant et Hameau Perle - Légendes: Arceus"
  },
  {
    id: 1643,
    en: "Crimson Mirelands (2) - Legends: Arceus",
    fr: "Marais Carmin (2) - Légendes: Arceus"
  },
  {
    id: 1644,
    en: "Cobalt Coastlands (1) - Legends: Arceus",
    fr: "Côte Lazuli (1) - Légendes: Arceus"
  },
  {
    id: 1645,
    en: "The Sound of the Irida's Flute - Legends: Arceus",
    fr: "Le son de la flûte de Nacchara - Légendes: Arceus"
  },
  {
    id: 1646,
    en: "Thought/Irida's Theme - Legends: Arceus",
    fr: "Réflexion/Thème de Nacchara - Légendes: Arceus"
  },
  {
    id: 1647,
    en: "Nighttime - Legends: Arceus",
    fr: "Nuit - Légendes: Arceus"
  },
  {
    id: 1648,
    en: "Survey Results (Night) - Legends: Arceus",
    fr: "Rapport de recherches (Nuit) - Légendes: Arceus"
  },
  {
    id: 1649,
    en: "Cobalt Coastlands (2) - Legends: Arceus",
    fr: "Côte Lazuli (2) - Légendes: Arceus"
  },
  {
    id: 1650,
    en: "Firespit Island - Legends: Arceus",
    fr: "Île Crache-Feu - Légendes: Arceus"
  },
  {
    id: 1651,
    en: "Courage/Palina's Theme - Legends: Arceus",
    fr: "Courage/Thème de Garana - Légendes: Arceus"
  },
  {
    id: 1652,
    en: "Strength - Legends: Arceus",
    fr: "Force - Légendes: Arceus"
  },
  {
    id: 1653,
    en: "Coronet Highlands - Legends: Arceus",
    fr: "Contrefort Couronné - Légendes: Arceus"
  },
  {
    id: 1654,
    en: "Wayward Cave - Legends: Arceus",
    fr: "Grotte des Égarés - Légendes: Arceus"
  },
  {
    id: 1655,
    en: "Battle! (Clan Warden) - Legends: Arceus",
    fr: "Combat! (Gardien) - Légendes: Arceus"
  },
  {
    id: 1656,
    en: "Alabaster Icelands (1) - Legends: Arceus",
    fr: "Terres Immaculées (1) - Légendes: Arceus"
  },
  {
    id: 1657,
    en: "Late Night - Legends: Arceus",
    fr: "Minuit - Légendes: Arceus"
  },
  {
    id: 1658,
    en: "Dawn - Legends: Arceus",
    fr: "Aube - Légendes: Arceus"
  },
  {
    id: 1659,
    en: "Alabaster Icelands (2) - Legends: Arceus",
    fr: "Terres Immaculées (2) - Légendes: Arceus"
  },
  {
    id: 1660,
    en: "Snowpoint Temple - Legends: Arceus",
    fr: "Temple de Frimapic - Légendes: Arceus"
  },
  {
    id: 1661,
    en: "Suspicion - Legends: Arceus",
    fr: "Soupçon - Légendes: Arceus"
  },
  {
    id: 1662,
    en: "Expulsion of Jubilife Village - Legends: Arceus",
    fr: "Expulsion de Rusti-Cité - Légendes: Arceus"
  },
  {
    id: 1663,
    en: "Anomaly - Legends: Arceus",
    fr: "Anomalie - Légendes: Arceus"
  },
  {
    id: 1664,
    en: "Anomaly: Omen/Spotted - Legends: Arceus",
    fr: "Anomalie: Menace/Repéré - Légendes: Arceus"
  },
  {
    id: 1665,
    en: "Anomaly: Omen/Spotted (Alpha) - Legends: Arceus",
    fr: "Anomalie: Menace/Repéré (Baron) - Légendes: Arceus"
  },
  {
    id: 1666,
    en: "Anomaly: Battle! - Legends: Arceus",
    fr: "Anomalie: Combat! - Légendes: Arceus"
  },
  {
    id: 1667,
    en: "Ancient Retreat (Cogita's Retreat) - Legends: Arceus",
    fr: "Hameau Oublié (Hameau de Penséa) - Légendes: Arceus"
  },
  {
    id: 1668,
    en: "Lake Cavern - Legends: Arceus",
    fr: "Caverne lacustre - Légendes: Arceus"
  },
  {
    id: 1669,
    en: "Stone Portal - Legends: Arceus",
    fr: "Porte de Pierre - Légendes: Arceus"
  },
  {
    id: 1670,
    en: "Temple of Sinnoh (Spear Pillar) - Legends: Arceus",
    fr: "Temple de Sinnoh (Colonnes Lances) - Légendes: Arceus"
  },
  {
    id: 1671,
    en: "Dialga/Palkia Appears - Legends: Arceus",
    fr: "Dialga/Palkia apparaît - Légendes: Arceus"
  },
  {
    id: 1672,
    en: "Battle! (Dialga/Palkia) - Legends: Arceus",
    fr: "Combat! (Dialga/Palkia) - Légendes: Arceus"
  },
  {
    id: 1673,
    en: "Another Lord Sinnoh - Legends: Arceus",
    fr: "L'autre Grand Sinnoh - Légendes: Arceus"
  },
  {
    id: 1674,
    en: "Temporary Retreat - Legends: Arceus",
    fr: "Retraite temporaire - Légendes: Arceus"
  },
  {
    id: 1675,
    en: "Origin - Legends: Arceus",
    fr: "Origine - Légendes: Arceus"
  },
  {
    id: 1676,
    en: "Battle! (Dialga/Palkia Origin Forme) - Legends: Arceus",
    fr: "Combat! (Dialga/Palkia Forme Originelle) - Légendes: Arceus"
  },
  {
    id: 1677,
    en: "Ending Theme - Legends: Arceus",
    fr: "Générique de fin - Légendes: Arceus"
  },
  {
    id: 1678,
    en: "Mystery Gift - Legends: Arceus",
    fr: "Cadeau Mystère - Légendes: Arceus"
  },
  {
    id: 1679,
    en: "Clefairy's Dance at the Fabled Spring (Mt. Moon Dance) - Legends: Arceus",
    fr: "Danse des Mélofée à la Source Féérique (Danse au Mont Sélénite) - Légendes: Arceus"
  },
  {
    id: 1680,
    en: "Lake - Legends: Arceus",
    fr: "Lac - Légendes: Arceus"
  },
  {
    id: 1681,
    en: "Battle! (Lake Guardians ~ Uxie, Mesprit & Azelf) - Legends: Arceus",
    fr: "Combat! (Gardiens des Lacs ~ Créhelf, Créfollet & Créfadet) - Légendes: Arceus"
  },
  {
    id: 1682,
    en: "Omen of a Battle/Spotted: Legendary Pokémon - Legends: Arceus",
    fr: "Menace d'un combat/Repéré: Pokémon légendaire - Légendes: Arceus"
  },
  {
    id: 1683,
    en: "Battle! (Legendary Pokémon) - Legends: Arceus",
    fr: "Combat! (Pokémon légendaire) - Légendes: Arceus"
  },
  {
    id: 1684,
    en: "Volo's Purpose - Legends: Arceus",
    fr: "L'objectif de Percupio - Légendes: Arceus"
  },
  {
    id: 1685,
    en: "Battle! (Pokémon Wielder Volo) - Legends: Arceus",
    fr: "Combat! (Percupio l'Expert en Pokémon) - Légendes: Arceus"
  },
  {
    id: 1686,
    en: "Giratina Appears - Legends: Arceus",
    fr: "Giratina apparaît - Légendes: Arceus"
  },
  {
    id: 1687,
    en: "Battle! (Volo & Giratina) - Legends: Arceus",
    fr: "Combat! (Percupio & Giratina) - Légendes: Arceus"
  },
  {
    id: 1688,
    en: "The Azure Flute - Legends: Arceus",
    fr: "La Flûte Azur - Légendes: Arceus"
  },
  {
    id: 1689,
    en: "Hall of Origin - Legends: Arceus",
    fr: "Salle Originelle - Légendes: Arceus"
  },
  {
    id: 1690,
    en: "Battle! (Arceus) - Legends: Arceus",
    fr: "Combat! (Arceus) - Légendes: Arceus"
  },
  {
    id: 1691,
    en: "Title Screen - Legends: Arceus",
    fr: "Écran titre - Légendes: Arceus"
  },
  {
    id: 1692,
    en: "Welcome to the World of Pokémon - Scarlet/Violet",
    fr: "Bienvenue dans le monde des Pokémon ! - Écarlate/Violet"
  },
  {
    id: 1693,
    en: "Soar Through the Paldea Skies - Scarlet/Violet",
    fr: "Envolée dans le ciel de Paldea - Écarlate/Violet"
  },
  {
    id: 1694,
    en: "Home - Scarlet/Violet",
    fr: "Maison - Écarlate/Violet"
  },
  {
    id: 1695,
    en: "Cabo Poco - Scarlet/Violet",
    fr: "Cuchalaga - Écarlate/Violet"
  },
  {
    id: 1696,
    en: "Meetings Starter Pokémon - Scarlet/Violet",
    fr: "Rencontres avec les Pokémons de départ - Écarlate/Violet"
  },
  {
    id: 1697,
    en: "Nemona's Theme/Let's Try to Get Stronger! - Scarlet/Violet",
    fr: "Thème de Menzi/Essayons d'être plus forts ! - Écarlate/Violet"
  },
  {
    id: 1698,
    en: "Battle! (Nemona) - Scarlet/Violet",
    fr: "Combat! (Menzi) - Écarlate/Violet"
  },
  {
    id: 1699,
    en: "Poco Path - Scarlet/Violet",
    fr: "Route de Cuchalaga  - Écarlate/Violet"
  },
  {
    id: 1700,
    en: "Battle! (Wild Pokémon ~ Poco Path) - Scarlet/Violet",
    fr: "Combat! (Pokémon sauvage ~ Route de Cuchalaga) - Écarlate/Violet"
  },
  {
    id: 1701,
    en: "On the Beach - Scarlet/Violet",
    fr: "Sur la plage - Écarlate/Violet"
  },
  {
    id: 1702,
    en: "Inlet Grotto - Scarlet/Violet",
    fr: "Caverne de la Crique - Écarlate/Violet"
  },
  {
    id: 1703,
    en: "Battle! (Wild Pokémon ~ Inlet Grotto) - Scarlet/Violet",
    fr: "Combat! (Pokémon sauvage ~ Caverne de la Crique) - Écarlate/Violet"
  },
  {
    id: 1704,
    en: "Escape from the Cave!/Houndoom Attacks! - Scarlet/Violet",
    fr: "Échapper de la Caverne !/Attaque du Démolosse - Écarlate/Violet"
  },
  {
    id: 1705,
    en: "Arven's Theme/It's a Test of Strength! - Scarlet/Violet",
    fr: "Thème de Pepper/C'est un test de force ! - Écarlate/Violet"
  },
  {
    id: 1706,
    en: "Battle! (Arven) - Scarlet/Violet",
    fr: "Combat! (Pepper) - Écarlate/Violet"
  },
  {
    id: 1707,
    en: "South Province (Riding) - Scarlet/Violet",
    fr: "Zone Sud (Monture) - Écarlate/Violet"
  },
  {
    id: 1708,
    en: "Battle! (Southern Pokémon) - Scarlet/Violet",
    fr: "Combat! (Pokémon sauvage des régions du Sud) - Écarlate/Violet"
  },
  {
    id: 1709,
    en: "Pokémon Center - Scarlet/Violet",
    fr: "Centre Pokémon - Écarlate/Violet"
  },
  {
    id: 1710,
    en: "Los Platos/Cortondo - Scarlet/Violet",
    fr: "Plato Real/Sevaro - Écarlate/Violet"
  },
  {
    id: 1711,
    en: "South Province (Walking) - Scarlet/Violet",
    fr: "Zone Sud (À pied) - Écarlate/Violet"
  },
  {
    id: 1712,
    en: "Mesagoza (Walking) - Scarlet/Violet",
    fr: "Mesaledo (À pied) - Écarlate/Violet"
  },
  {
    id: 1713,
    en: "Mesagoza (Guitarist)/One Song in Mesagoza, If You Please - Scarlet/Violet",
    fr: "Mesaledo (Guitariste) - Écarlate/Violet"
  },
  {
    id: 1714,
    en: "Team Star Appears - Scarlet/Violet",
    fr: "La Team Star apparaît! - Écarlate/Violet"
  },
  {
    id: 1715,
    en: "Battle! (Team Star) - Scarlet/Violet",
    fr: "Combat! (Team Star) - Écarlate/Violet"
  },
  {
    id: 1716,
    en: "Naranja/Uva Academy & Mesagoza (Riding) - Scarlet/Violet",
    fr: "Académie Orange/Raisin & Mesaledo (Monture) - Écarlate/Violet"
  },
  {
    id: 1717,
    en: "Cassiopeia's Theme - Scarlet/Violet",
    fr: "Thème de Cassiopée - Écarlate/Violet"
  },
  {
    id: 1718,
    en: "Professor Sada/Professor Turo - Scarlet/Violet",
    fr: "Professeure Olim/Professeur Turum - Écarlate/Violet"
  },
  {
    id: 1719,
    en: "Naranja/Uva Academy ~ Dorm Room/Director's Office/Staff Room/Nurse's Office - Scarlet/Violet",
    fr: "Académie Orange/Raisin ~ Chambres/Bureau du proviseur/Salle des professeurs/Infirmerie - Écarlate/Violet"
  },
  {
    id: 1720,
    en: "Trainers' Eyes Meet - Scarlet/Violet",
    fr: "Rencontre avec un Dresseur - Écarlate/Violet"
  },
  {
    id: 1721,
    en: "Battle! (Trainer) - Scarlet/Violet",
    fr: "Combat! (Dresseurs et Dresseuses) - Écarlate/Violet"
  },
  {
    id: 1722,
    en: "Victory! (Trainer) - Scarlet/Violet",
    fr: "Victoire! (Dresseurs et Dresseuses) - Écarlate/Violet"
  },
  {
    id: 1723,
    en: "Let's Make a Sandwich - Scarlet/Violet",
    fr: "Préparation d'un Sandwich - Écarlate/Violet"
  },
  {
    id: 1724,
    en: "Let's Eat! - Scarlet/Violet",
    fr: "Dégustation d'un plat - Écarlate/Violet"
  },
  {
    id: 1725,
    en: "Evolution - Scarlet/Violet",
    fr: "Évolution - Écarlate/Violet"
  },
  {
    id: 1726,
    en: "Gym Lobby - Scarlet/Violet",
    fr: "Arène Pokémon - Écarlate/Violet"
  },
  {
    id: 1727,
    en: "Gym Test - Scarlet/Violet",
    fr: "Examen d'Arène - Écarlate/Violet"
  },
  {
    id: 1728,
    en: "A Gym Leader Appears! - Scarlet/Violet",
    fr: "Un·e Champion·ne d'Arène apparaît! - Écarlate/Violet"
  },
  {
    id: 1729,
    en: "Battle! (Gym Leader) - Scarlet/Violet",
    fr: "Combat! (Champions et Championnes d'Arène) - Écarlate/Violet"
  },
  {
    id: 1730,
    en: "Victory! (Gym Leader) - Scarlet/Violet",
    fr: "Victoire! (Champions et Championnes d'Arène) - Écarlate/Violet"
  },
  {
    id: 1731,
    en: "West Province (Riding) - Scarlet/Violet",
    fr: "Zone Ouest (Monture) - Écarlate/Violet"
  },
  {
    id: 1732,
    en: "Battle! (Western Pokémon) - Scarlet/Violet",
    fr: "Combat! (Pokémon sauvage des régions de l'Ouest) - Écarlate/Violet"
  },
  {
    id: 1733,
    en: "Asado Desert (Riding) - Scarlet/Violet",
    fr: "Désert Rôtissable (Monture) - Écarlate/Violet"
  },
  {
    id: 1734,
    en: "Battle! (Tera Raid) - Scarlet/Violet",
    fr: "Combat! (Raid Téracristal) - Écarlate/Violet"
  },
  {
    id: 1735,
    en: "Victory! (Tera Raid) - Scarlet/Violet",
    fr: "Victoire! (Raid Téracristal) - Écarlate/Violet"
  },
  {
    id: 1736,
    en: "Asado Desert (Walking) - Scarlet/Violet",
    fr: "Désert Rôtissable (À pied) - Écarlate/Violet"
  },
  {
    id: 1737,
    en: "Cascarrafa - Scarlet/Violet",
    fr: "Jarramanca - Écarlate/Violet"
  },
  {
    id: 1738,
    en: "The Gym Test's Not Over!/Porto Marinada Auctions - Scarlet/Violet",
    fr: "Enchères de Porto Marinada - Écarlate/Violet"
  },
  {
    id: 1739,
    en: "Battle! (Titan Pokémon) - Scarlet/Violet",
    fr: "Combat! (Pokémon Dominant) - Écarlate/Violet"
  },
  {
    id: 1740,
    en: "Confront the Titan Pokémon Again - Scarlet/Violet",
    fr: "Affronter à nouveau le Pokémon Dominant - Écarlate/Violet"
  },
  {
    id: 1741,
    en: "Just a Moment/In the Cave with Arven - Scarlet/Violet",
    fr: "Un instant/Dans la cave avec Pepper - Écarlate/Violet"
  },
  {
    id: 1742,
    en: "West Province (Walking) - Scarlet/Violet",
    fr: "Zone Ouest (À pied) - Écarlate/Violet"
  },
  {
    id: 1743,
    en: "Medali/Porto Marinada - Scarlet/Violet",
    fr: "Mezclamora/Porto Marinada - Écarlate/Violet"
  },
  {
    id: 1744,
    en: "Heartwarming Time - Scarlet/Violet",
    fr: "Rencontre amicale - Écarlate/Violet"
  },
  {
    id: 1745,
    en: "East Province (Riding) - Scarlet/Violet",
    fr: "Zone Est (Monture) - Écarlate/Violet"
  },
  {
    id: 1746,
    en: "Battle! (Eastern Pokémon) - Scarlet/Violet",
    fr: "Combat! (Pokémon sauvage des régions de l'Est) - Écarlate/Violet"
  },
  {
    id: 1747,
    en: "Artazon/Zapapico - Scarlet/Violet",
    fr: "Cuencia/Pinchoria - Écarlate/Violet"
  },
  {
    id: 1748,
    en: "Levincia - Scarlet/Violet",
    fr: "Levalendura - Écarlate/Violet"
  },
  {
    id: 1749,
    en: "'Ello, 'ello, hola! Ciao and bonjour!/Iono Zone - Scarlet/Violet",
    fr: "Hello, Buenos, Salut!/Les Machins de Mashynn - Écarlate/Violet"
  },
  {
    id: 1750,
    en: "East Province (Area Three Riding) - Scarlet/Violet",
    fr: "Zone Est nº 3 (Monture) - Écarlate/Violet"
  },
  {
    id: 1751,
    en: "East Province (Walking) - Scarlet/Violet",
    fr: "Zone Est (À pied) - Écarlate/Violet"
  },
  {
    id: 1752,
    en: "Tagtree Thicket - Scarlet/Violet",
    fr: "Bosquet Tagué - Écarlate/Violet"
  },
  {
    id: 1753,
    en: "Clive's Theme - Scarlet/Violet",
    fr: "Thème de Clove - Écarlate/Violet"
  },
  {
    id: 1754,
    en: "C'mon, Let's Raid the Place!/Preparing for the Star Barrage - Scarlet/Violet",
    fr: "Repaire de la Team Star - Écarlate/Violet"
  },
  {
    id: 1755,
    en: "Star Barrage! - Scarlet/Violet",
    fr: "Star-Assaut! - Écarlate/Violet"
  },
  {
    id: 1756,
    en: "A Team Star Boss Appears! - Scarlet/Violet",
    fr: "Un Boss de la Team Star apparaît! - Écarlate/Violet"
  },
  {
    id: 1757,
    en: "Battle! (Team Star Boss) - Scarlet/Violet",
    fr: "Combat! (Boss de la Team Star) - Écarlate/Violet"
  },
  {
    id: 1758,
    en: "Victory! (Team Star Boss) - Scarlet/Violet",
    fr: "Victoire! (Boss de la Team Star) - Écarlate/Violet"
  },
  {
    id: 1759,
    en: "Treasure of the Stars (Team Star Flashback) - Scarlet/Violet",
    fr: "Trésor de la team Star (Flashback de la Team Star) - Écarlate/Violet"
  },
  {
    id: 1760,
    en: "North Province (Riding) - Scarlet/Violet",
    fr: "Zone Nord (Monture) - Écarlate/Violet"
  },
  {
    id: 1761,
    en: "Battle! (Northern Pokémon) - Scarlet/Violet",
    fr: "Combat! (Pokémon sauvage des régions du Nord) - Écarlate/Violet"
  },
  {
    id: 1762,
    en: "Montenevera - Scarlet/Violet",
    fr: "Frigao - Écarlate/Violet"
  },
  {
    id: 1763,
    en: "Opening Act! - Scarlet/Violet",
    fr: "Première partie ! (Examen d'Arène de Frigao) - Écarlate/Violet"
  },
  {
    id: 1764,
    en: "Soulful Beat!/Rap Battle - Scarlet/Violet",
    fr: "Rap Battle - Écarlate/Violet"
  },
  {
    id: 1765,
    en: "North Province (Walking) - Scarlet/Violet",
    fr: "Zone Nord (À pied) - Écarlate/Violet"
  },
  {
    id: 1766,
    en: "Casseroya Lake - Scarlet/Violet",
    fr: "Lac Asrol - Écarlate/Violet"
  },
  {
    id: 1767,
    en: "Snow Slope Run (Glaseado Gym Test) - Scarlet/Violet",
    fr: "La course de glisse (Examen d'Arène du Mont Nappé) - Écarlate/Violet"
  },
  {
    id: 1768,
    en: "North Province (Area Two Riding) - Scarlet/Violet",
    fr: "Zone Nord nº 2 (Monture) - Écarlate/Violet"
  },
  {
    id: 1769,
    en: "Alfornada - Scarlet/Violet",
    fr: "Alforneira - Écarlate/Violet"
  },
  {
    id: 1770,
    en: "Emotional Spectrum Practice (Alfornada Gym Test) - Scarlet/Violet",
    fr: "Fitness Émotion (Examen d'Arène d'Alforneira) - Écarlate/Violet"
  },
  {
    id: 1771,
    en: "Pokémon League ~ Interview Phase - Scarlet/Violet",
    fr: "Ligue Pokémon ~ Examen de maîtrise - Écarlate/Violet"
  },
  {
    id: 1772,
    en: "Pokémon League - Scarlet/Violet",
    fr: "Ligue Pokémon - Écarlate/Violet"
  },
  {
    id: 1773,
    en: "Battle! (Elite Four) - Scarlet/Violet",
    fr: "Combat! (Conseil 4) - Écarlate/Violet"
  },
  {
    id: 1774,
    en: "Battle! (Top Champion Geeta) - Scarlet/Violet",
    fr: "Combat! (Alisma la Maîtresse en Chef) - Écarlate/Violet"
  },
  {
    id: 1775,
    en: "Victory! (Top Champion Geeta) - Scarlet/Violet",
    fr: "Victoire! (Alisma la Maîtresse en Chef) - Écarlate/Violet"
  },
  {
    id: 1776,
    en: "With Nemona - Scarlet/Violet",
    fr: "Avec Menzi - Écarlate/Violet"
  },
  {
    id: 1777,
    en: "Final Battle! (Champion Nemona) - Scarlet/Violet",
    fr: "Combat Final! (Menzi la Maîtresse) - Écarlate/Violet"
  },
  {
    id: 1778,
    en: "Victory! (Champion Nemona)/The Only Rival - Scarlet/Violet",
    fr: "Victoire! (Menzi la Maîtresse)/Le seul rival - Écarlate/Violet"
  },
  {
    id: 1779,
    en: "Battle! (Director Clavell) - Scarlet/Violet",
    fr: "Combat! (Clavel le Proviseur) - Écarlate/Violet"
  },
  {
    id: 1780,
    en: "Clive's True Identity - Scarlet/Violet",
    fr: "La véritable identité de Clove - Écarlate/Violet"
  },
  {
    id: 1781,
    en: "Battle! (Cassiopeia) - Scarlet/Violet",
    fr: "Combat! (Cassiopée) - Écarlate/Violet"
  },
  {
    id: 1782,
    en: "Hasta la vistar - Scarlet/Violet",
    fr: "Hasta la vistar - Écarlate/Violet"
  },
  {
    id: 1783,
    en: "Heart - Scarlet/Violet",
    fr: "Cœur - Écarlate/Violet"
  },
  {
    id: 1784,
    en: "Arven's Treasure/Mabosstiff is recovered - Scarlet/Violet",
    fr: "Le trésor de Pepper/Le Dogrino de Pepper est guéri - Écarlate/Violet"
  },
  {
    id: 1785,
    en: "To the Great Crater of Paldea! - Scarlet/Violet",
    fr: "Envol dans la Zone Zéro - Écarlate/Violet"
  },
  {
    id: 1786,
    en: "Area Zero - Scarlet/Violet",
    fr: "Zone Zéro - Écarlate/Violet"
  },
  {
    id: 1787,
    en: "Battle! (Area Zero Pokémon) - Scarlet/Violet",
    fr: "Combat! (Pokémon de la Zone Zéro) - Écarlate/Violet"
  },
  {
    id: 1788,
    en: "The Gate is Open (Reunion of the two Koraidons/Miraidons) - Scarlet/Violet",
    fr: "La porte du laboratoire est ouverte (Réunion des deux Koraidons/Miraidons) - Écarlate/Violet"
  },
  {
    id: 1789,
    en: "Battle! (Area Zero Pokémon 2) - Scarlet/Violet",
    fr: "Combat! (Pokémon de la Zone Zéro 2) - Écarlate/Violet"
  },
  {
    id: 1790,
    en: "Activating Offensive Protocols - Scarlet/Violet",
    fr: "Lancement du programme de combat - Écarlate/Violet"
  },
  {
    id: 1791,
    en: "Battle! (AI Professor) - Scarlet/Violet",
    fr: "Combat! (Intelligence Artificielle) - Écarlate/Violet"
  },
  {
    id: 1792,
    en: "Victory! (AI Professor) - Scarlet/Violet",
    fr: "Victoire! (Intelligence Artificielle) - Écarlate/Violet"
  },
  {
    id: 1793,
    en: "Reunion of Arven and Sada/Turo - Scarlet/Violet",
    fr: "Retrouvailles de Pepper et Olim/Turum - Écarlate/Violet"
  },
  {
    id: 1794,
    en: "Paradise Protection Protocol - Scarlet/Violet",
    fr: "Programme \"Défense Paradis\" - Écarlate/Violet"
  },
  {
    id: 1795,
    en: "Koraidon/Miraidon Battle Form - Scarlet/Violet",
    fr: "Forme Combat de Koraidon/Miraidon - Écarlate/Violet"
  },
  {
    id: 1796,
    en: "Battle! (Paradise Protection Protocol) - Scarlet/Violet",
    fr: "Combat! (Programme \"Défense Paradis\") - Écarlate/Violet"
  },
  {
    id: 1797,
    en: "Earnest Feelings - Scarlet/Violet",
    fr: "Des sentiments sincères - Écarlate/Violet"
  },
  {
    id: 1798,
    en: "I bid you Adieu! - Scarlet/Violet",
    fr: "... Adieu ! - Écarlate/Violet"
  },
  {
    id: 1799,
    en: "The Way Home - Scarlet/Violet",
    fr: "Retour aux sources - Écarlate/Violet"
  },
  {
    id: 1800,
    en: "Let's Take the Long Route Home - Scarlet/Violet",
    fr: "Fin de l'aventure - Écarlate/Violet"
  },
  {
    id: 1801,
    en: "Celestial (Ed Sheeran)/Ending Theme - Scarlet/Violet",
    fr: "Celestial (Ed Sheeran)/Générique de fin - Écarlate/Violet"
  },
  {
    id: 1802,
    en: "Battle! (Academy Ace Tournament) - Scarlet/Violet",
    fr: "Combat! (Grand Tournoi de l'Académie) - Écarlate/Violet"
  },
  {
    id: 1803,
    en: "Mystery Gift - Scarlet/Violet",
    fr: "Cadeau Mystère - Écarlate/Violet"
  },
  {
    id: 1804,
    en: "Battle Stadium - Scarlet/Violet",
    fr: "Stade de Combat - Écarlate/Violet"
  },
  {
    id: 1805,
    en: "Battle! (Legendary Pokémon: Treasures of ruin) - Scarlet/Violet",
    fr: "Combat! (Pokémon légendaire: Trésors du fléau) - Écarlate/Violet"
  },
  {
    id: 1806,
    en: "Title Screen: Main Theme - Scarlet/Violet",
    fr: "Écran titre: Thème principal - Écarlate/Violet"
  },
  {
    id: 1807,
    en: "Carmine's Theme/Ex-c-c-change - Scarlet/Violet (The Teal Mask)",
    fr: "Thème de Roseille/E-c-c-change - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1808,
    en: "Battle! (Carmine) - Scarlet/Violet (The Teal Mask)",
    fr: "Combat! (Roseille) - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1809,
    en: "Mossui Town - Scarlet/Violet (The Teal Mask)",
    fr: "Jaderaude - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1810,
    en: "Battle! (Kieran) - Scarlet/Violet (The Teal Mask)",
    fr: "Combat! (Kassis) - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1811,
    en: "Kitakami - Scarlet/Violet (The Teal Mask)",
    fr: "Septentria - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1812,
    en: "Battle! (Kitakami Pokémon) - Scarlet/Violet (The Teal Mask)",
    fr: "Combat! (Pokémon de Septentria) - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1813,
    en: "Photography (Pokémon March) - Scarlet/Violet (The Teal Mask)",
    fr: "Appareil photo (Fanfare Pokémon) - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1814,
    en: "Photography (Wild Pokémon—Johto) - Scarlet/Violet (The Teal Mask)",
    fr: "Appareil photo (Pokémon sauvage—Johto) - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1815,
    en: "Photography (Pokémon Lullaby) - Scarlet/Violet (The Teal Mask)",
    fr: "Appareil photo (Berceuse Pokémon) - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1816,
    en: "Perrin's Theme - Scarlet/Violet (The Teal Mask)",
    fr: "Thème de Lithia - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1817,
    en: "History of the Signboard - Scarlet/Violet (The Teal Mask)",
    fr: "L'histoire du Monstre - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1818,
    en: "Kieran's Theme - Scarlet/Violet (The Teal Mask)",
    fr: "Thème de Kassis - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1819,
    en: "Festival of Masks/Kitakami Hall - Scarlet/Violet (The Teal Mask)",
    fr: "Fête des Visages/Septemplion - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1820,
    en: "Ogre Oustin' - Scarlet/Violet (The Teal Mask)",
    fr: "Chasse aux monstres - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1821,
    en: "You Completed the Ogre Oustin'! - Scarlet/Violet (The Teal Mask)",
    fr: "Vous avez terminé la Chasse aux monstres - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1822,
    en: "The Real History - Scarlet/Violet (The Teal Mask)",
    fr: "La véritable histoire du Monstre - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1823,
    en: "Crystal Pool - Scarlet/Violet (The Teal Mask)",
    fr: "Lac Cristallin - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1824,
    en: "Distortion/Kieran's Anger - Scarlet/Violet (The Teal Mask)",
    fr: "Distortion/La colère de Kassis - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1825,
    en: "The Loyal Three Come Back to Life - Scarlet/Violet (The Teal Mask)",
    fr: "Les Adoramis reviennent à la vie - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1826,
    en: "The Loyal Three's Theme - Scarlet/Violet (The Teal Mask)",
    fr: "Thème des Adoramis - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1827,
    en: "Battle! (The Loyal Three) - Scarlet/Violet (The Teal Mask)",
    fr: "Combat! (Adoramis) - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1828,
    en: "Decisive Battle! (Kieran) - Scarlet/Violet (The Teal Mask)",
    fr: "Combat décisif! (Kassis) - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1829,
    en: "Battle! (Ogerpon) - Scarlet/Violet (The Teal Mask)",
    fr: "Combat! (Ogerpon) - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1830,
    en: "Caught an Ogerpon - Scarlet/Violet (The Teal Mask)",
    fr: "Ogerpon attrapée - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1831,
    en: "They're Relaxed Now - Scarlet/Violet (The Teal Mask)",
    fr: "Ils sont détendus maintenant - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1832,
    en: "I Have to Become Stronger - Scarlet/Violet (The Teal Mask)",
    fr: "Je dois devenir plus fort... - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1833,
    en: "Briar's Theme - Scarlet/Violet (The Teal Mask)",
    fr: "Thème de Bria - Écarlate/Violet (Le Masque Turquoise)"
  },
  {
    id: 1834,
    en: "Blueberry Academy - Scarlet/Violet (The Indigo Disk)",
    fr: "Institut Myrtille - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1835,
    en: "To the Dome - Scarlet/Violet (The Indigo Disk)",
    fr: "Vers le Terra-Dôme - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1836,
    en: "This Is the Terarium Dome! - Scarlet/Violet (The Indigo Disk)",
    fr: "Voici le Terra-Dôme - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1837,
    en: "Terarium (Savanna Biome) - Scarlet/Violet (The Indigo Disk)",
    fr: "Terra-Dôme (Zone Savane) - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1838,
    en: "Battle! (Pokémon in the Terarium) - Scarlet/Violet (The Indigo Disk)",
    fr: "Combat! (Pokémon du dôme) - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1839,
    en: "Terarium (Coastal Biome) - Scarlet/Violet (The Indigo Disk)",
    fr: "Terra-Dôme (Zone Côtière) - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1840,
    en: "Battle! (Academy Trainer) - Scarlet/Violet (The Indigo Disk)",
    fr: "Combat! (Dresseur de l'Institut Myrtille) - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1841,
    en: "Terarium (Central Plaza) - Scarlet/Violet (The Indigo Disk)",
    fr: "Terra-Dôme (Poste Central) - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1842,
    en: "Unsettling Atmosphere - Scarlet/Violet (The Indigo Disk)",
    fr: "Ambiance inquiétante - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1843,
    en: "Daily Life at the Academy - Scarlet/Violet (The Indigo Disk)",
    fr: "Vie quotidienne à l'Institut - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1844,
    en: "Blueberry Academy ~ Your Room - Scarlet/Violet (The Indigo Disk)",
    fr: "Institut Myrtille ~ Chambres - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1845,
    en: "Terarium (Canyon Biome) - Scarlet/Violet (The Indigo Disk)",
    fr: "Terra-Dôme (Zone Canyon) - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1846,
    en: "Battle! (Tera Pokémon in the Terarium) - Scarlet/Violet (The Indigo Disk)",
    fr: "Combat! (Pokémon téracristallisé du dôme) - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1847,
    en: "Flying Time Trial! - Scarlet/Violet (The Indigo Disk)",
    fr: "Course aerienne conre la montre - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1848,
    en: "You Completed the Elite Trial! - Scarlet/Violet (The Indigo Disk)",
    fr: "Vous avez terminé le Defi du Conseil 4 - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1849,
    en: "Terarium (Polar Biome) - Scarlet/Violet (The Indigo Disk)",
    fr: "Terra-Dôme (Zone Polaire) - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1850,
    en: "Battle! (BB League Elite Four) - Scarlet/Violet (The Indigo Disk)",
    fr: "Combat! (Conseil 4 de la Ligue Myrtille) - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1851,
    en: "Victory! (BB League Elite Four) - Scarlet/Violet (The Indigo Disk)",
    fr: "Victoire! (Conseil 4 de la Ligue Myrtille) - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1852,
    en: "True Intentions - Scarlet/Violet (The Indigo Disk)",
    fr: "Vraies intentions - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1853,
    en: "The Battle Begins - Scarlet/Violet (The Indigo Disk)",
    fr: "Le combat contre Kassis commence - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1854,
    en: "Battle! (Champion Kieran) - Scarlet/Violet (The Indigo Disk)",
    fr: "Combat! (Kassis le Maître) - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1855,
    en: "The Defeated Kieran - Scarlet/Violet (The Indigo Disk)",
    fr: "Defaite de Kassis - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1856,
    en: "Area Zero Underdepths - Scarlet/Violet (The Indigo Disk)",
    fr: "Abîme Zéro - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1857,
    en: "Terapagos Comes Back to Life - Scarlet/Violet (The Indigo Disk)",
    fr: "Terapagos s'éveille - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1858,
    en: "Battle! (Terapagos & Kieran) - Scarlet/Violet (The Indigo Disk)",
    fr: "Combat! (Terapagos & Kassis) - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1859,
    en: "Conditions of the Hidden Treasure - Scarlet/Violet (The Indigo Disk)",
    fr: "Les conditions du trésor enfoui - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1860,
    en: "Terapagos Goes Rampage - Scarlet/Violet (The Indigo Disk)",
    fr: "Terapagos se déchaîne - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1861,
    en: "Battle! (Terapagos ~ The Hidden Treasure of Area Zero (Stellar Form)) - Scarlet/Violet (The Indigo Disk)",
    fr: "Combat! (Terapagos ~ le trésor enfoui de la Zone Zéro (Forme Stellaire)) - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1862,
    en: "Caught Terapagos! - Scarlet/Violet (The Indigo Disk)",
    fr: "Terapagos attrapé! - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1863,
    en: "Once Again, Starting from Zero - Scarlet/Violet (The Indigo Disk)",
    fr: "Une fois de plus, on repart de zéro - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1864,
    en: "Celestial (remix by Toby Fox)/Ending Theme 2 - Scarlet/Violet (The Indigo Disk)",
    fr: "Celestial (remix par Toby Fox)/Générique de fin 2 - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1865,
    en: "Star Training Centers! Team Star - Scarlet/Violet (The Indigo Disk)",
    fr: "Centres d'Entraînement Star! Team Star - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1866,
    en: "Relic Song - Scarlet/Violet (The Indigo Disk)",
    fr: "Chant Antique - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1867,
    en: "A Village Curse...? - Scarlet/Violet (The Indigo Disk)",
    fr: "La malédiction du village...? - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1868,
    en: "Mochi Mayhem - Scarlet/Violet (The Indigo Disk)",
    fr: "La Nuit des Kibi - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1869,
    en: "A Drone? A Pokémon? It's a Binding Mochi! - Scarlet/Violet (The Indigo Disk)",
    fr: "Pêchaminus apparaît - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1870,
    en: "Battle! (Pecharunt) - Scarlet/Violet (The Indigo Disk)",
    fr: "Combat! (Pêchaminus) - Écarlate/Violet (Le Disque Indigo)"
  },
  {
    id: 1871,
    en: "Title Screen 2 - Scarlet/Violet (The Indigo Disk)",
    fr: "Écran titre 2 - Écarlate/Violet (Le Disque Indigo)"
  }
];

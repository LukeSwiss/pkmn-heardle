const languages = ["en", "fr"];

const artist = {
    fr: "Pokémon",
    en: "Pokémon",
};
// Name of the file used for the flag
const flags = {
    fr: "./flags/fr.png",
    en: "./flags/en.png",
};
// Alt text for accessibility
const flagsAlt = {
  fr: {
    en: "French Flag",
    fr: "Drapeau français",
  },
  en: {
    en: "US Flag",
    fr: "Drapeau État-Unis",
  },
};
const aboutT = { fr: "A propos", en: "about" };
const supportT = { fr: "support", en: "support" };
const statsT = { fr: "stats", en: "stats" };
const howToPlayT = { fr: "Comment jouer", en: "how to play" };
const musicListT = { fr: "Liste des musiques", en: "music list" };
const langListT = { fr: "Langues", en: "Languages" };
const volumeT = {
    fr: "<p>Augmentez le volume et appuyez pour lancer la musique !",
    en: "<p>Turn up the volume and tap to start the track!",
};
const submitT = { fr: "Soumettre", en: "Submit" };
const placeholderT = {
    fr: "Recherchez le titre / le jeu",
    en: "Know it? Search for the artist / title",
};
const goodAnswerT = {
    fr: "Vous avez trouvé la musique " + artist["fr"] + " d'aujourd'hui en ",
    en: "You got today's " + artist["en"] + " music within ",
};
const secondT = { fr: "seconde", en: "second" };
const badAnswerT = {
    fr: "Vous n'avez pas trouvé la musique " + artist["fr"] + " d'aujourd'hui",
    en: "You didn't get today's " + artist["en"] + " music.",
};
const tryAgainT = {
    fr: "Réessayez demain...",
    en: "Better luck Tomorrow...",
};
const nextSongTimerT = {
    fr: "Prochaine Musique de " + artist["fr"] + " dans :",
    en: "Next " + artist["en"] + " song in:",
};
const shareT = {
    fr:
        "Trouve la musique de " +
        artist["fr"] +
        " avec l'introduction en le moins d'essai possible",
    en:
        "Guess the " +
        artist["en"] +
        " song from the intro in as few tries as possible",
};
const supportPopupT = {
    fr: 'Vous avez des questions ou trouvez des bugs ? Contactez Beignet0 sur Reddit, beignetSan sur Twitch, <a href="https://bsky.app/profile/beignet0.bsky.social">@beignet0.bsky.social</a> sur Bluesky, beignet1139 sur Discord ou créez un ticket sur <a href="https://github.com/nterrien/pkmn-heardle/issues" target="_blank">Github</a>! <br><br>Vous ne voulez pas attendre jusqu\'à demain ? Vous pouvez aussi jouer à l\'infini à <a href="https://nterrien.github.io/pkmn-infinite-heardle/" title="Pokémon Infinite Heardle">Pokémon Infinite Heardle</a>. Remerciez les créateurs orignal du Pokémon Heardle, <a href="https://bsky.app/profile/sgtangel777.bsky.social" target="_blank">@SgtAngel777</a> and <a href="https://bsky.app/profile/nickwrightdata.ntw.app" target="_blank">@NickWrightData</a> !<br><br>Il existe également une version pour <a href="https://prateau.github.io/pmd-heardle/">Pokémon Donjon Mystère</a>, grâce à Ipfil.',
    en: 'Have questions/run into bugs? DM Beignet0 on Reddit, beignetSan on Twitch, <a href="https://bsky.app/profile/beignet0.bsky.social">@beignet0.bsky.social</a> on Bluesky, beignet1139 on Discord or create an issue in <a href="https://github.com/nterrien/pkmn-heardle/issues" target="_blank">Github</a>!<br><br>Don\'t want to wait until tomorrow? You can also play infinitely to <a href="https://nterrien.github.io/pkmn-infinite-heardle/" title="Pokémon Infinite Heardle">Pokémon Infinite Heardle</a>. Thank the original Pokémon Heardle creators <a href="https://bsky.app/profile/sgtangel777.bsky.social" target="_blank">@SgtAngel777</a> and <a href="https://bsky.app/profile/nickwrightdata.ntw.app" target="_blank">@NickWrightData</a>!<br><br>There\'s also a version for <a href="https://prateau.github.io/pmd-heardle/">Pokémon Mystery Dungeon</a>, thanks to Ipfil.',
};
const howToPlayPopup1T = {
    fr:
        "Écoutez l'intro, puis trouvez la bonne musique " +
        artist["fr"] +
        " dans la liste.",
    en:
        "Listen to the intro, then find the correct " +
        artist["en"] +
        " song in the list.",
};
const howToPlayPopup2T = {
    fr: "Les tentatives passées ou incorrectes débloquent une plus grande partie de l'intro.",
    en: "Skipped or incorrect attempts unlock more of the intro.",
};
const howToPlayPopup3T = {
    fr: "Répondez en aussi peu d'essais que possible et partagez votre score !",
    en: "Answer in as few tries as possible and share your score!",
};
const howToPlayPopup4T = {
    fr: "Vous pouvez voir la liste des musiques en cliquant sur le bouton en haut à droite.",
    en: "You can use the top right button to see the list of tracks.",
};
const aboutPopupT = {
    fr:
        '<p class="mb-3">Un clone de <a href="https://pkmn-heardle.glitch.me/" title="Pokémon Heardle">Pokémon Heardle</a> (le site ne fonctionne plus) qui ajoute des fonctionnalité, ajoute des musiques et corrige des bugs, lui même basé sur <a href="https://www.heardle.app/" title="Heardle">Heardle</a>, sur <a href="https://heardle-kpop.glitch.me/" title="K-Pop Heardle">K-Pop Heardle</a> et <a href="https://joywave-heardle.glitch.me/" title="Joywave Heardle">Joywave Heardle</a> avec les musiques de Pokémon.</p> \n\n<p class="mb-3">Chaque musique est choisie au hasard dans la bande originale du jeu Pokémon.</p><p class="mb-3">Les musiques sont répertoriées avec le nom des jeux dans lesquels elles figurent. Vous pouvez effectuer une recherche par noms de versions appariées, comme "Rouge/Bleu" ou "Rubis/Saphir". Les musiques des remakes sont incluses, comme Rouge Feu et Vert Feuille ou Diamant Étincelant et Perle Scintillante.</p><p class="mb-3">La liste des musiques provient de vgmdb (qui utilise les albums officiels) quand c\'est possible, sinon de datamining (Concerne Ultra Soleil/Ultra Lune et Diamant Étincelant/Perle Scintillante). Les noms français des musiques proviennent des listes officiels sur iTunes pour les jeux GBA et DS et pour Pokémon X/Y. Pour les autres jeux, les traductions sont déduites à partir des jeux déjà traduits ou sont traduites à la main à partir des noms anglais. N\'hésitez pas à me proposer de meilleures traductions pour Pokémon Soleil/Lune, Épée/Bouclier, Légende: Arceus, ou Écarlate/Violet !</p> \n\n\n\n <p class="mb-3">Vous voulez créer votre propre Heardle ? Consultez le fichier <a href="https://github.com/nterrien/pkmn-heardle">README</a>.</p>',
    en:
        '<p class="mb-3">A clone of <a href="https://pkmn-heardle.glitch.me/" title="Pokémon Heardle">Pokémon Heardle</a> (the site doesn\'t work anymore) that adds features, adds music and fixes bugs, itself based on <a href="https://www.heardle.app/" title="Heardle">Heardle</a>, <a href="https://heardle-kpop.glitch.me/" title="K-Pop Heardle">K-Pop Heardle</a> and <a href="https://joywave-heardle.glitch.me/" title="Joywave Heardle">Joywave Heardle</a> code with Pokémon music.</p> \n\n<p class="mb-3">Each music is randomly chosen from mainline Pokémon\'s game soundtrack.</p><p class="mb-3">Songs are listed along with the name of the games they are featured in. You can search by paired version names such as "Red/Blue" or "Ruby/Sapphire". Songs from remakes are included, such as FireRed and LeafGreen, and Brilliant Diamond and Shining Pearl. </p><p class="mb-3">The list of music comes from vgmdb (which uses official albums), when possible, otherwise from datamining (Only for Ultra Sun/Ultra Moon and Brilliant Diamond/Shining Pearl)</p> \n\n\n\n <p class="mb-3">Want to make your own Heardle? Check out the <a href="https://github.com/nterrien/pkmn-heardle">README</a>. </p>'
};
const playT = { fr: "Jouer", en: "Play" };
const playDailyT = {
    fr: "Jouez tous les jours pour voir vos stats",
    en: "Play daily to see your stats",
};
const playedT = { fr: "Jouée", en: "Played" };
const wonT = { fr: "Trouvée", en: "Won" };
const winRateT = { fr: "Taux de réussite", en: "Win rate" };
const currentStreakT = { fr: "Série actuelle", en: "Current Streak" };
const maxStreakT = { fr: "Série maximum", en: "Max Streak" };
const skipT = { fr: "Passer", en: "Skip" };
const skippedT = { fr: "PASSÉE", en: "SKIPPED" };
const errorT = {
    fr: "Une erreur s'est produite lors du chargement de la musique. Veuillez recharger et réessayer.\n Vous pouvez contactez l'administrateur de ce site si le problème persiste.",
    en: "There was an error loading the player. Please reload and try again.\n You can contact the site administrator if the problem persists.",
};
const loadingT = {
    fr: "Chargement ...",
    en: "Loading player",
};
const unavailableT = {
    fr: "Il semble que la musique d'aujourd'hui n'est pas disponibles sur SoundCloud à votre position...",
    en: "Oh no! Seems like today's track is unavailable on\nSoundCloud in your location",
};
const shareButtonT = {
    fr: "Partager",
    en: "Share",
};
const copiedClipboardT = {
    fr: "Copié dans le presse papier !",
    en: "Copied to Clipboard!",
};
const errorClipboardT = {
    fr: "Erreur lors de la copie de votre résultat",
    en: "There was a problem copying your result to the clipboard",
};
const listenTooltipT = {
    fr: "Écoutez ",
    en: "Listen to ",
};
const onSoundcloudTooltipT = {
    fr: " sur SoundCloud",
    en: " on SoundCloud",
};
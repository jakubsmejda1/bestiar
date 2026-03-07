const databazeTvoru = [
    {
        jmeno: "Lev pustinný",
        druh: "savci",
        popis: "Majestátní šelma a obávaný predátor afrických savan.",
        foto: "https://i.redd.it/5rx28e7o82rf1.jpeg"
    },
    {
        jmeno: "Orel skalní",
        druh: "ptáci",
        popis: "Dravec s rozpětím křídel přes dva metry, symbol síly.",
        foto: "https://i.kym-cdn.com/entries/icons/original/000/042/184/handsomestaringeagle.jpg"
    },
    {
        jmeno: "Krokodýl nilský",
        druh: "plazi",
        popis: "Velký plaz s ostrými zuby, žijící v řekách a mokřadích.",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbNYKuCxLFNuiBRwXjuWzPnF6n7-PpCYQ6UQ&s"
    },
    {
        jmeno: "Slon africký",
        druh: "savci",
        popis: "Největší suchozemský savec s charakteristickými klichy a chobotem.",
        foto: "https://makerworld.bblmw.com/makerworld/model/US5b0093e1fc7046/design/2025-10-30_77c45df75bf328.jpeg?x-oss-process=image/resize,w_1000/format,webp"
    },
    {
        jmeno: "Tygr ussurijský",
        druh: "savci",
        popis: "Impozantní kočkovitá šelma s pruhovaným kožichem.",
        foto: "https://media.tenor.com/Nr43LEFJdNMAAAAe/tiger-sitting-tiger.png"
    },
    {
        jmeno: "Gepard",
        druh: "savci",
        popis: "Nejrychlejší suchozemské zvíře, vyznačuje se štíhlou postavou.",
        foto: "https://i.redd.it/cheetah-mom-with-scared-cub-thank-you-i-will-never-forget-v0-n1d48ov7wwg81.jpg?width=4000&format=pjpg&auto=webp&s=e012ee7cfd7c95df72879c41e69a9de4c15de955"
    },
    {
        jmeno: "Žirafa",
        druh: "savci",
        popis: "Vysoký přežvýkavec s dlouhým krkem a skvrnitým kožichem.",
        foto: "https://i.makeagif.com/media/1-18-2016/aY8Roi.gif"
    },
    {
        jmeno: "Nosorožec tuponosý",
        druh: "savci",
        popis: "Silné zvíře s mohutným tělem a jedním nebo dvěma rohy na čenichu.",
        foto: "https://pbs.twimg.com/media/D8G21RtWkAAaeZ-.jpg"
    },
    {
        jmeno: "Panda velká",
        druh: "savci",
        popis: "Charismatický savec žijící v bambusových lesích, známý černobílým zbarvením.",
        foto: "https://i.redd.it/81d5ogamdnj61.jpg"
    },
    {
        jmeno: "Delfín obecný",
        druh: "savci",
        popis: "Inteligentní mořský savec s družným chováním a sofistikovanou komunikací.",
        foto: "https://tse4.mm.bing.net/th/id/OIP.KPbDf4fsC9QCTqcYkj4gCQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        jmeno: "Tučňák císařský",
        druh: "ptáci",
        popis: "Velký nelétavý pták, který žije v extrémních podmínkách Antarktidy.",
        foto: "https://media.cna.al/cna.al/media3/-640-0-1769532343xpinguiniajpg-249.jpg"
    },
    {
        jmeno: "Sokol stěhovavý",
        druh: "ptáci",
        popis: "Rychlý dravec, často používaný při loveckém sokolnictví.",
        foto: "https://ih1.redbubble.net/image.722270102.8719/raf,360x360,075,t,fafafa:ca443f4786.u1.jpg"
    },
    {
        jmeno: "Husa divoká",
        druh: "ptáci",
        popis: "Tažný pták známý svým hlasitým houkáním a formacemi při letu.",
        foto: "https://preview.redd.it/goose-with-arms-companion-50-intimidation-50-meme-power-v0-c2l1zf9tmnp81.jpg?auto=webp&s=c1f2a44cd1bd3df96604f5687c327551ba7439fb"
    },
    {
        jmeno: "Kachna divoká",
        druh: "ptáci",
        popis: "Běžný vodní pták s charakteristickým kvákáním a zeleným zbarvením hlavy u samců.",
        foto: "https://media.printler.com/media/photo/116861-1.jpg?rmode=crop&width=638&height=900"
    },
    {
        jmeno: "Želva zelenavá",
        druh: "plazi",
        popis: "Vodní želva s měkkou skořápkou, často se vyskytuje v řekách a jezerech.",
        foto: "https://media.tenor.com/UWHgJ8QRcZsAAAAm/turtle-huh-meme.webp"
    },
    {
        jmeno: "Ještěrka obecná",
        druh: "plazi",
        popis: "Malý plaz běžný v Evropě, rychle se pohybuje a loví hmyz.",
        foto: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2025-08/250810-lizard-pixar-se-310p-cf932d.jpg"
    },
    {
        jmeno: "Ropucha obecná",
        druh: "obojživelníci",
        popis: "Robustní obojživelník s drsnou kůží, často se objevuje v zahradách.",
        foto: "https://ipwatchdog.com/wp-content/uploads/2018/03/pepe-the-frog-1272162_640.jpg"
    },
    {
        jmeno: "Kůň domácí",
        druh: "savci",
        popis: "Domestikovaný kopytník užívaný k jízdě, práci i sportu.",
        foto: "https://i.pinimg.com/564x/f0/ef/4b/f0ef4b934320f2f0201532dd6b73493f.jpg"
    },
    {
        jmeno: "Veverka obecná",
        druh: "savci",
        popis: "Čilý stromový savec známý sběrem oříšků a obratností v korunách stromů.",
        foto: "https://us1.discourse-cdn.com/palmettostatearmory/original/3X/3/d/3da5a7644230250282dd4609e68b6cddfaf75fcc.jpeg"
    },
    {
        jmeno: "Chameleon jemenský",
        druh: "plazi",
        popis: "Plaz známý schopností měnit barvu a nezávislým pohybem očí.",
        foto: "https://external-preview.redd.it/rL4pM-Wg3UNihBfHTuZPlesT9vAyLF7jO_5sWQn_MQI.jpg?width=640&crop=smart&auto=webp&s=d00bd7441b6b1ae1170106a710818d27f10bd59e"
    },
    {
        jmeno: "Varan komodský",
        druh: "plazi",
        popis: "Největší žijící ještěr, predátor z indonéských ostrovů.",
        foto: "https://monstersconquertheworld.com/wp-content/uploads/2019/02/giphy2543567211705921681.gif"
    },
    {
        jmeno: "Užovka obojková",
        druh: "plazi",
        popis: "Nejedovatý had běžný v Evropě, často u vody.",
        foto: "https://www.rybarskyrozcestnik.cz/wp-content/uploads/2016/02/uzovka-obojkova.jpg"
    },
    {
        jmeno: "Salamandr skvrnitý",
        druh: "obojživelníci",
        popis: "Nápadný černý obojživelník se žlutými skvrnami, žije v lesích.",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnypzFjlCt2FiqqlppuWnekX7de_OBjl7CA&s"
    },
    {
        jmeno: "Čolek velký",
        druh: "obojživelníci",
        popis: "Obojživelník s výrazným hřbetním hřebenem, vyskytuje se v rybnících.",
        foto: "https://rybicky.net/obr/plzi/max/917.webp"
    },
    {
        jmeno: "Rosnička zelená",
        druh: "obojživelníci",
        popis: "Malá žába s jasně zelenou barvou, často na stromech.",
        foto: "https://dikobraz.cz/sites/default/files/styles/large/public/cartoons/adam_lesikar/adam_lesikar_19832.jpg?itok=yUPU__Em"
    },
    {
        jmeno: "Meowl",
        druh: "ptáci",
        popis: ",,I´m a new soul, I came to this tsrange world, hopin´ I could learn a bit about how to give and take.,,",
        foto: "https://media.tenor.com/hyPTwhOcEDMAAAAe/meowl.png"
    },
    {
        jmeno: "Ledňáček říční",
        druh: "ptáci",
        popis: "Malý pták s modrým peřím, rychlý lovec ryb u vody.",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlw76R_CnRBo3TlXt9JOlUcRxaHmyinS3wbA&s"
    },
    {
        jmeno: "Papoušek ara",
        druh: "ptáci",
        popis: "Velký barevný papoušek z tropických oblastí, vyniká inteligencí.",
        foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKoaCnhyJwvqyAuAz37AxDco5w-CJHr1saFw&s"
    },
    {
        jmeno: "Krajta tmavá",
        druh: "plazi",
        popis: "Velký nejedovatý had, obývá tropické oblasti jihovýchodní Asie.",
        foto: "https://i.ytimg.com/vi/JkprwCul-dw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAKVYBou7MnvbKcKNGKCK8bIP1HQw"
    }
];
const druhy = ["savci", "ptáci", "plazi", "obojživelníci"];
const barvy = ["#ff9982ff", "#83ff9aff", "#8da1ffff", "#f67affff"];
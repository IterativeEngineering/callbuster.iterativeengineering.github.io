const { writeFileSync, mkdirSync, existsSync } = require('fs');
const path = require('path');

const lists = [
    {
        name: 'Canvassing numbers in Metropolitan France',
        desc: 'Block list for phone numbers assigned by the French government for canvassing purposes',
        patterns: [
           '\\+33377\\d{6}',
           '\\+33378\\d{6}',
           '\\+33270\\d{6}',
           '\\+33271\\d{6}',
           '\\+33162\\d{6}',
           '\\+33163\\d{6}',
           '\\+33424\\d{6}',
           '\\+33425\\d{6}',
           '\\+33568\\d{6}',
           '\\+33569\\d{6}',
           '\\+33948\\d{6}',
           '\\+33949\\d{6}',
           '\\+33937\\d{6}',
           '\\+33938\\d{6}',
           '\\+33939\\d{6}'
        ],
        filename: 'metropolitan-france.json'
    },
    {
        name: 'Canvassing numbers in Guadeloupe, Saint-Martin and Saint-Barthélémy',
        desc: 'Block list for phone numbers assigned by the French government for canvassing purposes',
        patterns: [
           '\\+5905909475\\d{2}',
        ],
        filename: 'guadeloupe.json'
    },
    {
        name: 'Canvassing numbers in French Guiana',
        desc: 'Block list for phone numbers assigned by the French government for canvassing purposes',
        patterns: [
           '\\+5945949476\\d{2}',
        ],
        filename: 'french-guiana.json'
    },
    {
        name: 'Canvassing numbers in Martinique',
        desc: 'Block list for phone numbers assigned by the French government for canvassing purposes',
        patterns: [
           '\\+5965969477\\d{2}',
        ],
        filename: 'martinique.json'
    },
    {
        name: 'Canvassing numbers in Réunion and Mayotte',
        desc: 'Block list for phone numbers assigned by the French government for canvassing purposes',
        patterns: [
           '\\+2622629478\\d{2}',
           '\\+2622629479\\d{2}',
        ],
        filename: 'reunion.json'
    }
];

lists.forEach(l => {
    let numbersToBlock = [];
    l.patterns.forEach(n => {
        numbersToBlock = numbersToBlock.concat([n]);
    });
    const listToSave = [];
    numbersToBlock.forEach(n => {
        listToSave.push({
            pattern: n
        })
    });
    saveListToAFile(listToSave, l.filename);
});


function saveListToAFile(numbers, filename) {
    if (!existsSync('lists')) {
        mkdirSync('lists');
    }
    writeFileSync('lists' + path.sep + filename, JSON.stringify(numbers), 'utf8');
}

// function getNumbersFromTemplate(template) {
//     const min = template.replaceAll('#', '0');
//     const max = template.replaceAll('#', '9');
//     let current = +min;

//     const numbers = [];
//     while (current <= max) {
//         numbers.push(`+${current}`);
//         current++;
//     }
//     return numbers;
// }
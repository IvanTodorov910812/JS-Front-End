let commands = [
    'add 5',
    'add 3',
    'add 7',
    'remove 2',
    'remove 9'
];

let emptyArray = [];
for(let command of commands) {
    let splittedCommand = command.split(' ');

    let commandName = splittedCommand[0];
    let commandArgument = splittedCommand[1];

    if (commandName === 'add') {
        emptyArray.push(commandArgument);
    }
    else if (commandName === 'remove') {
        if(emptyArray[commandArgument]){
            emptyArray.splice(commandArgument);
        }
    }
}

console.log(emptyArray);
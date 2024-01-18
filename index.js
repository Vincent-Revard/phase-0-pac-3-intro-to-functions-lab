function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}
/*
function sayHiToHeadphonedRoommate(string) {
    
    if
    return(string === string.toLowerCase())
    return(string === string.toUpperCase())  
}
*/

/*
const sayHiToHeadphonedRoommate = (string); {
    let (response);

switch (sayHiToHeadphonedRoommate) {
    case string === string.toUpperCase():
        (response) = 'YES INDEED!';
        break;
    case string === string.toLowerCase():
        (response) = "I can\'t hear you!";
        break;
    case string === "Let's have dinner together!":
        (response) = "I would love to!";
        break;
}
}

*/

/*
function sayHiToHeadphonedRoommate(string) {
    let response;

switch (string.toLowerCase) {
    case string === (string.toUpperCase()):
        response = 'YES INDEED!';
        break;
    case string === (string.toLowerCase()):
        response = "I can\'t hear you!";
        break;
    case string === "Let's have dinner together!":
        response = "I would love to!";
        break;
}
console.log(response);
return response;

}
*/

function sayHiToHeadphonedRoommate(string) {
    let response;

switch (string) {
    case string.toUpperCase():
        response = 'YES INDEED!';
        break;
    case string.toLowerCase():
        response = "I can\'t hear you!";
        break;
    case "Let's have dinner together!":
        response = "I would love to!";
        break;
}
return response;

}


/*
//////////////////////////////////////////////////
function sayHiToHeadphonedRoommate(string) {
    let response;

    switch (string.toLowerCase()) {
        case string:
            response = "I can't hear you!";
            break;
        case string.toUpperCase():
            response = "YES INDEED!";
            break;
        case "Let's have dinner together!":
            response = "I would love to!";
            break;
    }

    return response;
}

*/

/*
function sayHiToHeadphonedRoommate(string) {
    let response;

    let lowerCaseString = string.toLowerCase();
    let upperCaseString = string.toUpperCase();

    switch (lowercaseString) {
        case lowercaseString:
            response = "I can't hear you!";
            break;
        case string.toUpperCase():
            response = "YES INDEED!";
            break;
        case "Let's have dinner together!":
            response = "I would love to!";
            break;
        default:
            response = "I'm not sure what you're saying.";
    }

    return response;
}
*/
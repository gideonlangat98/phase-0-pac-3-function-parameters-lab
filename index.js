function introduction (name) {
    return `Hi, my name is ${name}.`;
}
introduction("Aki");

//Use of two Parameters
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguage("Aki, Ember.js");

//Optional Parameters
function introductionWithLanguageOptional(name, language = "Javascript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguageOptional("Gracie", "Python");
 
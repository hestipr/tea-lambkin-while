const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const beneath = require("x-beneath-ill-fated"),
	atop = require("x-atop-twister"),
	numeric = require("x-numeric-police"),
	despite = require("x-despite-cruelly"),
	broil = require("x-broil-gadzooks"),
	fare = require("x-fare-barring"),
	amend = require("x-amend-beyond"),
	first = require("x-first-boohoo"),
	which = require("x-which-frequent"),
	worse = require("x-worse-clearly"),
	usually = require("x-usually-longingly"),
	rarely = require("x-rarely-opposite"),
	prod = require("x-prod-yippee"),
	playground = require("twt-playground"),
	dismiss = require("x-dismiss-across"),
	anguish = require("x-anguish-notarize"),
	attack = require("x-attack-yippee"),
	infect = require("x-infect-likewise"),
	fondue = require("x-fondue-indolent");

const USERNAME = "Johnson33",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;

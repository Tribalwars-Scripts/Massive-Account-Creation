// ==UserScript==
// @name         Mass Account Creation
// @namespace    @brunommpreto[bonobobo]
// @version      0.3
// @description  Creates a River of Barbarian Villages
// @author       Bruno Preto
// @copyright    2022, brunommpreto (https://openuserjs.org/users/brunommpreto)
// @license      AGPL-3.0-or-later
// @supportURL   https://github.com/Tribalwars-Scripts/Massive-Account-Creation/wiki
// @updateURL    https://raw.githubusercontent.com/Tribalwars-Scripts/Massive-Account-Creation/main/MassAccountCreation.js
// @include https://www.tribalwars.com.pt/page/new
// @include **welcome=1*
// @include **screen=overview&intro*
// @include **settings&mode=account*
// @include **settings&mode=move*
// @include **screen=place&target=*
// @include **screen=map*
// @include https://newassets.hcaptcha.com
// @require https://code.jquery.com/jquery-2.2.4.min.js
// @run-at document-end
// @disclaimer  This is made for testing purposes.
// ==/UserScript==

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://AsylumOffense:Key@cluster0.iwhyy.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });
let accessibilitytoken = '9XglVxSXZ4+Ltc6K+FpAyjkPHFxFhyMJsOZETUFhIX9Qa0l3NA7JJWeTPVbNlU2CgKJsWSoNUwQbK1TdvF+wbJBJ3iSEESj8Bo0z8YV28LUJeRcjzNjzD9fwG5DohGBHLsJpG0gvUbV+XeiDwTtq3kZMruRFqzU7tRqEYDyIFfPuE4JWc5m2fnMHT3EKLmZTmAx96v3K0fW+TL01fEub9RvbO5WlElAVYv8kkGZ4rlb++bZMaATQ+lTEsENRqdCiN/pJHoiUYpYaPbibkHxOqut6ZJf3RpSYw1vO5DDJTjLWceSiDXO+W0OLC+ywevfmJgcbeCCBgyCUkiPx56Z7aPkgJd1otxf4XgDm2jfcON4TurCmaI5/OS4wl9CguUedOPKDrtaunIcKEv6X3QJ7upDx7+i007EJwednf3CohlVnHjE8w638GpPpSbpAXTgiNDT22wrBr1o44KAJL8cWLKn6W9W5c8nP8QJCU2o/7V6s3PKtRoHaCeMtHWypi48apVjf/j8aPFy6ES2WCDcEqSJHmvmmlALFRw3lP9CUp6a6jruP0dqeOFr+10oL6TcZEbjeDeVA4AScX3lBzwS81OY6GZUH7Dt2YDomH2DThOJ19w7nJ1odE99s+RcB0pkq6vMZoM2QbILHzO98FvTC2ORU3iQOaH0Ul+LlS5WBNkGIYstzn50LwxpTBoxavMAFn7hr6NxrTg8tyGSLOovCoGQHAUh2APrQlg3LNuyEmf2pn0xfFwpgxIYx9b8Dd6G07u1CAdOoJ9qY+uzw1RagLVHqofzTEIYISJKRmiMIZbLPdBjly1TMNCWI7SeC2ogMw5D4RqKok0mvaUK9cf8KuoI/Nz/JkOjM5+tvHkn6dnXnHGOonyWz/sLpzcE98S0F0pejmkh02UYec/6lHD8UoNtbS7Aj/WpSKq7rRyrL5+2kqamo/cV4dzyXQmhO9m/Ln8G0A9BWbFnnKtwukH3VHefYaNIS3/SXD76DT8cXewHIdjkuf9Exrj0Q2KsyjnF+=';
let captcha = 'P0_eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXNza2V5IjoiQWJzb3ZrbDlVNmJONDRwNkFOU0d5d3B0bHNmSGpJbG0waHJ4VUdONXViY1BWU29wY3lRN2tKK3NjWDRGUFpuL2orYkZyNXYzaUhJQUNkMUNKRlVubC8raDlTcUU4dnl0OWFJTGd1WTI4eW9kQlJDRDRhNDRSbG5IbE1uRHcrQUJTZithanhqbWNrSkxNY090elNjZ21jT0tYd2ZyNXNxbzg1cjFSaXFxdXZ2RGV4ZVBNeVpRNDNZQjlaRHBMaDNNS25BSUJNc2Qra3FZVnpOblVBb0x1K2xwRFlTNW1LYUdrYWJtK0JHTmJpbDZlaFQ3bFpiMXdtT0VSWTRFNHdCUzh1ek1EWFVxeDVNbzJ2d3dYRHI1dlNNMEtxWWpKN3FwcEhBNUZZVEd3WHBkblMzVCtNVlJUU0ZaUUM2S2hmRXl2VHdEeDN2Q1I2TWp2dXJsRzkzU0UxWlg4UnUrTjlPNkZIOWJwTmYvNzZtVEN6REM2cWVleVdHYnU1WHdralBTQmcxZjN0M050TzRudmNUWmtYY2ovOTgyTDY4ZTEwbG8vL1hickRWdzlkTjFsaGdVMW01WEF2UnBrdHgwZmZtWHlQZGlrWUprcXA2WVQ2ZzRPSjZ5NmEzUjZnS3pKU1ZEd0lsUGYxM2pUWG9ucXlWNkN0SVd3cTlUSjRaOG96NnRGd0d0aDkybjhCNW1sdE9iMXBzUGpEVXZweEJTb1pHbmNMbjdtN3pzZDZFSmhJSitBRUVta1BBSkRWaUwyQm4zeXdIRTFkbWJQTlQzYUljWkhKTlBSNDc0UjZuQ0V4V2thRVIrWDJwSFBUejF0SkRBN0l3ZHVPRUwyRzhWTjlraGtROTFXemZ3REJtZkEycEViWDlMWVRxRU1SV3g5bVd3Um94QTV0WEdpdWV1dXNuSTVMaE8vV0lLa1Z6WWVBK0dJYXMzeTFIYkdFci9Ca3VvaW80M3FtbER5SmMzMlByUkZaL2dCM3l3S2JqdFlmY2x6Q25jemt0dE5QVXQ0UlpVNUgwTmdRUitjZlMzVjZ1SFFsWThteWR2bU15U3BLVEJvSzZqWE85MjhzV1ViYkFQclNhV1dUNlM0R3pabkpQbU8wQ0ZiR25lOXJ6RElpVUFYcmRsTEUyNndvMGVNMUJYMXA5cHl6cytmOXQySThGVHZEelBHTUZtK1YyR1lIL2MyUWxDQ3o2aXF3NFNsZkNocWlCRHZVOUdqUjZRdUVMbWZsQmdKNTBEWVFZaWY3V1YvWGVUTEtpOVJzY2VDalVHVmVNb3BHUFl5OGI4UG1ZeGpQb3hXL2wwZDhQbXg0TjVKR29oQ08rZVJOS3kwTVJZM0UyeDBhOWZGdkN6enlwMjM3V1VFQ3hMc0JIYzgzeWpVbVEzTXc5MkJVZ2hwL2w0RlMyWDFOV1MyQVZRTmR5RjU0NVdpK1ptb3FMTDNUdlFwbHgvYTJIN0xHc1l0NkMwUmJjSjVHM1dzRlZQbVJIV3pqUzV4SU8vTGcyWWJuQ2FqWHpqNnVIWVljWkpSOCtzYUhrUWlmditjVXRLSUpLK2xjVG5PSndLOWRwaUhUeWNsRVAzejl3dFY2Nk1odVBDZUhSbDA4dzJiQ1hiODVYMkQwcFBwcUpzUTZBeVBiUmh6dGNBbnBNK1NybkczTEpQdzlKTHl3ZXpiK3JJK2ZHUTg5dEVjZVNjUEV4cEQ0QnMrRUF2akNNQ3ZpR1p0RTBRdUpMZWp4Y3JRNXVRWkNzUUNwaFA0SnZCazFVK1JWY2RXdGFIcFNacHZ1dnpxSzJYblFzNGlwdzBuZEF3dEo3ZEg1QzRlMWtzU21FM3ZTTWRiVERrZzRLWlBoUjI2NDlhR1c1OWN5UmRScFNVVFAxdFlNWnE3UmRpb2NqemlxbStzYkVlWnkwL2k4MlVUdTJOQ3c9PUdWK2lCRWs4aWxHNHYzRzIiLCJleHAiOjE2NTU2NjQyOTYsInNoYXJkX2lkIjo4MjA3ODYwODYsInBkIjowfQ.ia0yEHlx6pgPQYMWObBwUdBL8lQv2QntCV6r9sNKys8'
const TargetPlayer = [];
var url = "https://www.tribalwars.com.pt/page/new";
var world = "85";
const newbie = 0;
const createAccount = "https://www.tribalwars.com.pt/page/new";
const chooseWorld = "?welcome=1";
const logged = "?screen=overview&intro";
const restart = "settings&mode=move";
const changemail = "settings&mode=account"
const mapview = "&screen=map";
const sendATK = "screen=place&target=";
const confirm = "screen=place&try=confirm";
const mainBuilding = "&screen=main";
const cookieset = "https://newassets.hcaptcha.com";
const buddies = "screen=buddies";
const inventory = "&screen=inventory";
const InitialProtection = ""
const target = [] ;
//var new_username = rug.generate();
//Restart = window.location.href = game_data.link_base_pure + "settings&mode=move"
//Change Email = settings&mode=account
$(window).load(function () {
    var urlNow = window.location.href;

    if (urlNow.indexOf(cookieset) !== -1) {
        console.log("Creating Account");
        //set cookie for the captcha
        setCookie(accessibilitytoken);
    }

    if (urlNow.indexOf(createAccount) !== -1) {
        console.log("Creating Account");
        //set cookie for the captcha
        setCookie(accessibilitytoken);
        CreateAccount();

    }
    if (urlNow.indexOf(buddies) !== -1) {
        console.log("Accepting Friends");
        //set cookie for the captcha
        acceptbuddie();

    }
    if (urlNow.indexOf(chooseWorld) !== -1) {
        console.log("Choosing the world");
        AccessWorld();
    }

    if (urlNow.indexOf(logged) !== -1) {
        console.log("Upgrading Village");
        startUp();
    }

    if (urlNow.indexOf(restart) !== -1){
        console.log("Restarting");
        RestartAccount();
    }

    if (urlNow.indexOf(inventory) !== -1){
        console.log("Inventory");

    }

    if (urlNow.indexOf(changemail) !== -1){
        console.log("Change Email");
        ChangeEmail();
    }

    if (urlNow.includes(mapview)){
        console.log("Map View");
        if (game_data.player.email_valid != 0){
            // PLayer Valid
            //removePI();
            if (document.getElementsByClassName("info_box").length){

            }else{
                isCentered();
            }
            if (TWMap.players[game_data.player.id].newbie === '0'){
                //
            }
            // sends friend request
        }else{
            //Player not Valid
            window.location.href = game_data.link_base_pure + changemail;
        }
    }

    if (urlNow.includes(sendATK)){
        console.log("Sending Attack");
        sendAttack();
    }

    if (urlNow.includes(confirm)){
        console.log("Confirm Attack");
        confirmAttack();
    }

    if (urlNow.indexOf(mainBuilding) !== -1){
        if (game_data.player.points > 111){
            document.querySelector("#main_buildrow_barracks > td:nth-child(1) > span")
        }
    }
});

// Set a Cookie
function setCookie( cValue) {
    StartPage.register.captchaResponse = cValue;
    console.log("captha cookie set");
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = " hc_accessibility=" + cValue + "; path=/";
}
function setCookie(){
    document.cookie = "username=Max Brown; expires=Wed, 05 Aug 2020 23:00:00 UTC";
}

function startUp(){
    window.location.href = game_data.link_base_pure + "main";
}

//primeiro passo, preencher o form para criar a conta
function CreateAccount() {
    var name = generate();
    var emails_domain = [];
    emails_domain.push("gmail.com");
    emails_domain.push("hotmail.com");
    emails_domain.push("yahoo.com");
    emails_domain.push("gmx.com");
    emails_domain.push("msn.com");
    emails_domain.push("outlook.com");
    emails_domain.push("aol.com");
    emails_domain.push("hotmail.co.uk");
    let emailDomain = Math.floor(Math.random() * emails_domain.length);
    let email = name  + "@" + emails_domain[emailDomain];
    $("#register_username").val(name);
    $("#register_password").val("tribos15");
    $("#register_email").val(email);
    $("#terms").prop("checked", true);

    // $(".btn-register").on("click", function (e) {
    //      e.preventDefault();
    //    $(":submit").click();
    // });
    // $(".btn-register").trigger("click");
}

// Chooses the world
function AccessWorld() {
    $("a").each(function () {
        if (this.href.endsWith(world)) {
            window.location.href = this.href;
        }
    });
}

function ChangeEmail(){
    document.querySelector("#content_value > table > tbody > tr > td:nth-child(2) > form:nth-child(4) > table > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=password]").value = "tribos15";
    if (document.querySelector("#content_value > table > tbody > tr > td:nth-child(2) > form:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=email]").value != ""){
        document.querySelector("#content_value > table > tbody > tr > td:nth-child(2) > form:nth-child(4) > table > tbody > tr:nth-child(4) > td:nth-child(2) > input").click();
    }
}


function isEmailValid(){
    let flag = game_data.player.email_valid;
    if (flag){
        //email valid
        window.location.href = game_data.link_base_pure + restart;
    }else{
        window.location.href = game_data.link_base_pure + changemail;
    }
}


// function isNewbie(villageEntry){
//     return TWMap.players[TWMap.villages[villageEntry]].newbie;
// }

function canAttack(villageEntry){
    return (TWMap.villages[villageEntry].points < 500) ? TWMap.villages[villageEntry].id : 0;
}


function acceptbuddie(){
    for (let i = 0; i <= game_data.player.new_buddy_request;i++){
        document.getElementsByClassName("btn btn-confirm-yes")[0].click();
    }
}

function handleFriendRequest(){
    if (game_data.player.new_buddy_request){
        window.location.href = game_data.link_base_pure + "buddies";

    }
}

function removePI(){
    for (const key in TWMap.villages) {
        if (key.owner != 0 ){
            const coord = canAttack(key);
            const inPI = 0;
            if (coord != 0){
                target.push(coord);
            }
        }
    }
    if (target.length){
        for (const i in target){
            window.location.href = game_data.link_base_pure + "place&target=" + i;
        }
    }
}

function sendAttack(){
    $("#unit_input_spear").val(10);
    $("#unit_input_sword").val(10);
    $("#target_attack").click();
}

function confirmAttack(){
    $("#troop_confirm_submit").click();
}


function isCentered(){
    //removePI();
    for (let i = 0; i < TargetPlayer.length;i++){
        if (TWMap.players[TargetPlayer[i]]){
            // Player is in map
           isEmailValid();
        }else{
            window.location.href = game_data.link_base_pure + "inventory";
        }
    }

    // for (let i = 0; i < TargetPlayer.length;i++){
    //     if (TWMap.players[TargetPlayer[i]]){
    //         // Player is in map
    //     }
    // }

}


const data = {
    names: "https://raw.githubusercontent.com/MaPhil/username-generator/master/names.json",
    adjectives: "https://raw.githubusercontent.com/MaPhil/username-generator/master/adjectives.json"
}
let seperator = '-'

function setNames(names) {
    data.names = names;
};

function setAdjectives(adjectives) {
    data.adjectives = adjectives;
};

function setSeperator(new_seperator) {
    seperator = new_seperator;
};

function generate() {
    const ran_a = Math.floor(Math.random() * data.names.length)
    const ran_b = Math.floor(Math.random() * data.adjectives.length)
    const ran_suffix = Math.floor(Math.random() * 10000)
    const string = `${data.adjectives[ran_b]}${seperator}${data.names[ran_a]}${ran_suffix}`
    if (string.includes("/")){
        return generate();
    }else{
        return `${data.adjectives[ran_b]}${seperator}${data.names[ran_a]}${ran_suffix}${seperator}${data.names[ran_a]}`
    }
};

function RestartAccount(){
    let CodeSent = document.getElementById("code");
    if (JSON.stringify(CodeSent) != "null") {

    } else {
        document.getElementsByClassName("btn")[0].click();
    }
}

const playerID = [];
const coordX = [];
const coordY = [];
const playerName = [];

function MoveVillage(){
    playerName.push("wpbbxqpz");
    playerID.push(848933047);
    coordX.push(524);
    coordY.push(365);

}

function handleInventory(){

}



// module.exports = {
//     setNames: setNames,
//     setAdjectives: setAdjectives,
//     setSeperator: setSeperator,
//     generate: generate
// }
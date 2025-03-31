"use strict"

/*
 Énoncé global
Tu vas créer un profil utilisateur en JavaScript. Ce profil devra contenir des informations de base (nom, âge, ville), une liste d'amis, et tu vas le faire évoluer étape par étape à travers différentes manipulations.

✅ Étapes à suivre
🔹 1. Déclaration de variables
Crée une variable pour le nom de l'utilisateur

Crée une variable pour son âge

Crée une variable pour sa ville

🔹 2. Réaffectation de valeur
Change la valeur de la variable "ville" pour une autre ville

🔹 3. Création d’un objet
Crée un objet utilisateur qui regroupe les informations : nom, âge, ville

🔹 4. Modification de propriété
Change la ville dans l’objet utilisateur

🔹 5. Ajout de propriété
Ajoute une propriété email à l’objet utilisateur

🔹 6. Création d’un tableau
Ajoute une propriété amis à l’objet utilisateur, qui contient une liste de prénoms

🔹 7. Manipulation du tableau
Supprime un ami de la liste

Ajoute un nouvel ami à la fin de la liste

Remplace un ami par un autre

🔹 8. Parcours du tableau
Utilise une boucle pour afficher chaque ami dans la console

🔹 9. Conditions
Si l’utilisateur a moins de 18 ans, affiche “Mineur”

S’il a entre 18 et 25 ans, affiche “Jeune adulte”

Sinon, affiche “Adulte”

🔹 10. Fonctions (nouvelle section)
a) Fonction simple
Crée une fonction saluerUtilisateur qui prend un prénom et affiche un message de bienvenue

b) Fonction avec retour
Crée une fonction calculerAnneeNaissance qui prend l’âge en paramètre et retourne l’année de naissance (en supposant qu’on est en 2025)

c) Fonction avec condition
Crée une fonction verifierMajorite qui prend un âge en paramètre et retourne true si l’utilisateur est majeur, sinon false

d) Fonction qui manipule un objet
Crée une fonction afficherProfil qui prend l’objet utilisateur et affiche toutes ses infos dans un message formaté

e) Bonus :
Crée une fonction ajouterAmi qui ajoute un prénom dans le tableau amis de l’objet utilisateur

Crée une fonction supprimerAmi qui supprime un prénom s’il existe

*/

let userName = "Martine";
console.log("name", userName);

let userAge = 35;
console.log("age", userAge);
let userCity = "Meylan";

userCity = "Grenoble";
console.log("city", userCity);

const user = {
    name: userName,
    age: userAge,
    city: userCity,
};
console.log("user", user);

user.city = "Voreppe";
console.log("modified user city", user);

user.email= "martine.rgpd@gmail.com";
console.log("added email property to user", user);

user.amis = ["Leon", "Mas", "Henry"];
console.log("added amis property to user", user.amis);

const removeFriendFromUser = (userToEdit, friendNameToRemove) => {
    if(!userToEdit){
        console.log("No user was given for replace friend");
        return false;
    }
    if(!userToEdit.amis){
        console.log("given user doesn't have a friend property");
        return false;
    }
    if(!friendNameToRemove){
        console.log("name of friend to remove is missing");
        return false;
    }
    if(!userToEdit.amis.includes(friendNameToRemove)){
        console.log("name of friend doesn't belong to friendlist");
        return false;
    }
    userToEdit.amis.splice(userToEdit.amis.indexOf(friendNameToRemove), 1);
    return true;
}

const addFriendToUser = (userToEdit, friendNameToAdd) => {
    if(!userToEdit){
        console.log("No user was given for replace friend");
        return false;
    }
    if(!friendNameToAdd){
        console.log("name of friend to add is missing");
        return false;
    }
    if(!userToEdit.amis){
        user.amis = [friendNameToAdd];
        return false;
    }
    userToEdit.amis.push(friendNameToAdd)
    return true;
}

const replaceFriendOfUser = (userToEdit, friendNameToRemove, friendNameToAdd) => {
    if(!userToEdit){
        console.log("No user was given for replace friend");
        return false;
    }
    if(!userToEdit.amis){
        console.log("given user doesn't have a friend property");
        return false;
    }
    if(!friendNameToRemove){
        console.log("name of friend to remove is missing");
        return false;
    }
    if(!userToEdit.amis.includes(friendNameToRemove)){
        console.log("name of friend doesn't belong to friendlist");
        return false;
    }
    if(!friendNameToAdd){
        console.log("name of friend to add is missing");
        return true;
    }
    const indexOfFriend = userToEdit.amis.indexOf(friendNameToRemove);
    userToEdit.amis[indexOfFriend] = friendNameToAdd;
    return true;
}

const friendToRemove = "Henry"
const resultRemove = removeFriendFromUser(user, friendToRemove)
if(resultRemove) {console.log(`removed '${friendToRemove}' from user friends`, user.amis);}

const friendToAdd = "Jean"
const resultAdd = addFriendToUser(user, friendToAdd);
if(resultAdd) {console.log(`added '${friendToAdd}' to user friends`, user.amis);}

const replacement = {toRemove: "Mas", toAdd: "Michel"}
const resultReplace = replaceFriendOfUser(user, replacement.toRemove, replacement.toAdd);
if(resultReplace) {
    console.log(`replaced '${replacement.toRemove}' by '${replacement.toAdd}' in user friends`, user.amis);
}

const loopThroughFriendListOfUser = (selectedUser) => {
    console.log(">>looping through friendlist");
    if(!selectedUser.amis || selectedUser.amis.length === 0){
        console.log("user as no friend to loop through");
        return;
    }
    selectedUser.amis.forEach(friend => {
        console.log(friend)
    });
    console.log(">>end of friendlist");
}

loopThroughFriendListOfUser(user);

if(user.age && userAge.age < 18){
    console.log("Mineur");
}else if(userAge.age < 25){
    console.log("Jeune adulte");
}else{
    console.log("Adulte");
}

const saluerUtilisateur = (name) => {
    console.log(`Greetings ${name}!`);
}
saluerUtilisateur(user.name);

const calculerAnneeNaissance = (age) => {
    if(!typeof age == "number" || !Number.isInteger(age) || age < 0){
        console.log("invalid age was given to calculate year of birth");
        return
    }
    return new Date().getFullYear() - age;
}
const ageToEvaluateForBirth = 24
const yearOfBirth = calculerAnneeNaissance(ageToEvaluateForBirth);
console.log(`Born in ${yearOfBirth} for age ${ageToEvaluateForBirth}`);

const verifierMajorite = (age) => {
    return age >= 18;
}
const ageToEvaluateAdulthood = 28;
console.log(`is ${ageToEvaluateAdulthood} an adult: ${verifierMajorite(ageToEvaluateAdulthood)}`);

const afficherProfil = (userToDisplay) => {
    const messageParts = [
        `User named ${userToDisplay.name}`,
        `of age ${userToDisplay.age}`,
        `lives in ${userToDisplay.city}`,
        `${userToDisplay.email
            ? `user can be contacted at ${userToDisplay.email}`
            : "user has not given an email"}`,
        `${user.amis && user.amis.length > 0 
            ? `user has for friends ${userToDisplay.amis.join(", ")}`
            : "user has no registered friends"}`
    ];
    console.log(`${messageParts[0]} ${messageParts[1]} ${messageParts[2]}; ${messageParts[3]} and ${messageParts[4]}`);
}

afficherProfil(user);
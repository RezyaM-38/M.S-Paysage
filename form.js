

// cookies

let popUp = document.getElementById("cookiePopup");

// When user clicks the accept button
document.getElementById("accepteCookie").addEventListener("click", () => {
  // Create date object
  let d = new Date();
  // Increment the current time by 1 minute (cookie will expire after 1 minute)
  d.setMinutes(1 + d.getMinutes());
  // Create Cookie with name = myCookieName, value = thisIsMyCookie and expiry time = 1 minute
  document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
  // Hide the popup
  popUp.classList.add("hide");
  popUp.classList.remove("show");
});

// When user clicks the refuse button
document.getElementById("refuseCookie").addEventListener("click", () => {
  // Hide the popup
  popUp.classList.add("hide");
  popUp.classList.remove("show");
});

// Check if cookie is already present
const checkCookie = () => {
  // Read the cookie and split on "="
  let input = document.cookie.split("=");
  // Check for our cookie
  if (input[0] == "myCookieName") {
    // Hide the popup
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  } else {
    // Show the popup
    popUp.classList.add("show");
    popUp.classList.remove("hide");
  }
};

// Check if cookie exists when page loads
window.onload = () => {
  setTimeout(() => {
    checkCookie();
  }, 2000);
};

// formulaire

// document.getElementById("envoie").addEventListener('submit', function (e) {
//   e.preventDefault();
//
//   const erreurs = document.querySelectorAll(".erreur");
//
//   // Masquer toutes les erreurs
//   for (let i = 0; i < erreurs.length; i++) {
//     erreurs[i].style.display = 'none';
//   }
//
//   const nom = document.getElementById('nom').value.trim();
//   const prenom = document.getElementById("prenom").value.trim();
//   const numero = document.getElementById("numero").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const demande = document.getElementById("demande").value.trim();
//
//   let nomOk = true;
//   let prenomOk = true;
//   let emailOk = true;
//   let numeroOk = true;
//   let demandeOk = true;
//
//   // Validation du NOM
//   const regexNom = /^[a-zA-ZéèêîïÊÉÈÎÏ][a-zéèêàçïî]{2,30}([-'\s][a-zA-ZéèêîïÊÉÈÎÏ][a-zéèêàçïî]{2,30})?$/;
//   const nomErreur = document.getElementById("nomerreur");
//
//   if (nom === "") {
//     nomOk = false;
//     nomErreur.innerText = "Veuillez entrer un nom.";
//     nomErreur.style.display = "block";
//   } else if (!regexNom.test(nom)) {
//     nomOk = false;
//     nomErreur.innerText = "Veuillez entrer un nom valide.";
//     nomErreur.style.display = "block";
//   }
//
//   // Validation du Prénom
//   const regexPrenom = /^[a-zA-ZéèêîïÊÉÈÎÏ][a-zéèêàçïî]{3,20}([-'\s][a-zA-ZéèêîïÊÉÈÎÏ][a-zéèêàçïî]{3,20})?$/;
//   const prenomErreur = document.getElementById("prenomerreur");
//
//   if (prenom === "") {
//     prenomOk = false;
//     prenomErreur.innerText = "Veuillez entrer un prénom.";
//     prenomErreur.style.display = "block";
//   } else if (!regexPrenom.test(prenom)) {
//     prenomOk = false;
//     prenomErreur.innerText = "Veuillez entrer un prénom valide.";
//     prenomErreur.style.display = "block";
//   }
//
//   // Validation du Numéro de téléphone
//   const regexNumero = /^(\+?\d{1,4}[-.\s]?)?(\d{10})$/;
//   const numeroErreur = document.getElementById("numeroerreur");
//
//   if (numero === "") {
//     numeroOk = false;
//     numeroErreur.innerText = "Veuillez entrer un numéro de téléphone.";
//     numeroErreur.style.display = "block";
//   } else if (!regexNumero.test(numero)) {
//     numeroOk = false;
//     numeroErreur.innerText = "Veuillez entrer un numéro de téléphone valide.";
//     numeroErreur.style.display = "block";
//   }
//
//   // Validation de l'Email
//   const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
//   const emailErreur = document.getElementById("emailerreur");
//
//   if (email === "") {
//     emailOk = false;
//     emailErreur.innerText = "Veuillez entrer une adresse email.";
//     emailErreur.style.display = "block";
//   } else if (!regexEmail.test(email)) {
//     emailOk = false;
//     emailErreur.innerText = "Veuillez entrer une adresse email valide.";
//     emailErreur.style.display = "block";
//   }
//
//   // Validation de la Demande
//   const demandeErreur = document.getElementById("demandeerreur");
//
//   if (demande === "") {
//     demandeOk = false;
//     demandeErreur.innerText = "Veuillez décrire votre demande.";
//     demandeErreur.style.display = "block";
//   } else if (demande.length < 3) {
//     demandeOk = false;
//     demandeErreur.innerText = "Votre demande doit contenir au moins 3 caractères.";
//     demandeErreur.style.display = "block";
//   }
//
//   // Si tous les champs sont valides, envoyer le formulaire et réinitialiser tous les champs
//   if (nomOk && prenomOk && numeroOk && emailOk && demandeOk) {window.location.href = "Demande_envoyer.php";
//
//     // Réinitialiser tous les champs
//     const fields = document.querySelectorAll('.field');
//     for (let i = 0; i < fields.length; i++) {
//       fields[i].value = '';  // Vider tous les champs après soumission réussie
//     }
//
//     // window.location.href = "Demande_envoyer.php"; // Remplacez par le lien vers votre page
//   }
// });

// formulaire chatgpt

document.getElementById("envoie").addEventListener('submit', function (e) {
  e.preventDefault();

  const erreurs = document.querySelectorAll(".erreur");
  erreurs.forEach(erreur => erreur.style.display = 'none'); // Masquer toutes les erreurs

  const nom = document.getElementById('nom').value.trim();
  const prenom = document.getElementById("prenom").value.trim();
  const numero = document.getElementById("numero").value.trim();
  const email = document.getElementById("email").value.trim();
  const demande = document.getElementById("demande").value.trim();

  let isValid = true;

  // Fonction générique pour afficher les erreurs
  const afficherErreur = (element, message) => {
    element.innerText = message;
    element.style.display = 'block';
    isValid = false;
  };

  // Validation du NOM
  const regexNom = /^[a-zA-ZéèêîïÊÉÈÎÏ][a-zéèêàçïî]{2,30}([-'\s][a-zA-ZéèêîïÊÉÈÎÏ][a-zéèêàçïî]{2,30})?$/;
  const nomErreur = document.getElementById("nomerreur");
  if (!nom) afficherErreur(nomErreur, "Veuillez entrer un nom.");
  else if (!regexNom.test(nom)) afficherErreur(nomErreur, "Veuillez entrer un nom valide.");

  // Validation du Prénom
  const regexPrenom = /^[a-zA-ZéèêîïÊÉÈÎÏ][a-zéèêàçïî]{3,20}([-'\s][a-zA-ZéèêîïÊÉÈÎÏ][a-zéèêàçïî]{3,20})?$/;
  const prenomErreur = document.getElementById("prenomerreur");
  if (!prenom) afficherErreur(prenomErreur, "Veuillez entrer un prénom.");
  else if (!regexPrenom.test(prenom)) afficherErreur(prenomErreur, "Veuillez entrer un prénom valide.");

  // Validation du Numéro
  const regexNumero = /^(\+?\d{1,4}[-.\s]?)?(\d{10})$/;
  const numeroErreur = document.getElementById("numeroerreur");
  if (!numero) afficherErreur(numeroErreur, "Veuillez entrer un numéro de téléphone.");
  else if (!regexNumero.test(numero)) afficherErreur(numeroErreur, "Veuillez entrer un numéro de téléphone valide.");

  // Validation de l'Email
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
  const emailErreur = document.getElementById("emailerreur");
  if (!email) afficherErreur(emailErreur, "Veuillez entrer une adresse email.");
  else if (!regexEmail.test(email)) afficherErreur(emailErreur, "Veuillez entrer une adresse email valide.");

  // Validation de la Demande
  const demandeErreur = document.getElementById("demandeerreur");
  if (!demande) afficherErreur(demandeErreur, "Veuillez décrire votre demande.");
  else if (demande.length < 3) afficherErreur(demandeErreur, "Votre demande doit contenir au moins 3 caractères.");

  // Envoi des données si tout est valide
  if (isValid) {
    this.submit();
  }
});









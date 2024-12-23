<?php
//if ($_SERVER["REQUEST_METHOD"] == "POST") {
//
//  // Récupération des données du formulaire
//  $nom = htmlspecialchars(trim($_POST["nom"]));
//  $prenom = htmlspecialchars(trim($_POST["prenom"]));
//  $numero = htmlspecialchars(trim($_POST["numero"]));
//  $email = htmlspecialchars(trim($_POST["email"]));
//  $demande = htmlspecialchars(trim($_POST["demande"]));
//
//  // Valider les données
//if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
//  die("Adresse email invalide.");
//}
//
//// Adresse email du destinataire
//$receiver = "qadoumimayzer@gmail.com";
//
//// Sujet de l'email
//$subject = "Formulaire de demande: $nom <$email>";
//
//// Corps du message
//$body = "Nom: $nom\n";
//$body .= "Prénom: $prenom\n";
//$body .= "Numéro: $numero\n";
//$body .= "Email: $email\n";
//$body .= "Demande:\n$demande\n";
//
//// Entêtes de l'email
//$headers = "From: $email\r\n";
//$headers .= "Reply-To: $email\r\n";
//$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
//
//// Envoi de l'email
//if (mail($receiver, $subject, $body, $headers)) {
//  echo "Votre demande a été envoyée avec succès.";
//} else {
//  echo "Une erreur s'est produite. Veuillez réessayer plus tard.";
//}
//?>



<?php
//// Inclure les fichiers nécessaires de PHPMailer
//require 'C:\wamp64\www\bootstrap-5.3.3-examples\bootstrap-5.3.3-examples\M.S Paysage\phpmailer\src\Exception.php';
//require 'C:\wamp64\www\bootstrap-5.3.3-examples\bootstrap-5.3.3-examples\M.S Paysage\phpmailer\src\PHPMailer.php';
//require 'C:\wamp64\www\bootstrap-5.3.3-examples\bootstrap-5.3.3-examples\M.S Paysage\phpmailer\src\SMTP.php';
//
//use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\PHPMailer\Exception;
//
//if ($_SERVER["REQUEST_METHOD"] === "POST") {
//  // Récupération des données
//  $nom = htmlspecialchars(trim($_POST['nom']));
//  $prenom = htmlspecialchars(trim($_POST['prénom']));
//  $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
//  $numero = filter_var(trim($_POST['numero']),FILTER_VALIDATE_NUMERO);
//  $demande = htmlspecialchars(trim($_POST['demande']));
//
//  // Vérification des champs obligatoires
//  if (!$nom || !$prenom|| !$email || !$numero || !$demande) {
//    echo "Tous les champs sont obligatoires.";
//    exit;
//  }
//
//  // Configuration PHPMailer
//  $mail = new PHPMailer(true);
//
//  try {
//    // Configuration SMTP
//    $mail->isSMTP();
//    $mail->Host = 'smtp.gmail.com'; // Serveur SMTP de Google
//    $mail->SMTPAuth = true;
//    $mail->Username = 'qadoumimayzer@gmail.com'; // Votre adresse Gmail
//    $mail->Password = 'cetj ziff zfjo hxrw'; // Votre mot de passe Gmail ou mot de passe d'application
//    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
//    $mail->Port = 587;
//
//    // Configuration de l'expéditeur et du destinataire
//    $mail->setFrom('qadoumimayzer@gmail.com', 'Ms Paysage'); // Adresse et nom de l'expéditeur
//    $mail->addAddress('mayzer38@yahoo.com', 'Destinataire'); // Adresse du destinataire
//
//    // Contenu de l'email
//    $mail->isHTML(true); // Permet l'envoi d'emails au format HTML
//    $mail->Subject = "Nouveau message de contact : $nom";
//    $mail->Body = "
//            <h1>Nouveau message de contact</h1>
//            <p><strong>Nom :</strong> $nom</p>
//            <p><strong>Prénom :</strong> $prenom</p>
//            <p><strong>Telephone :</strong> $numero</p>
//            <p><strong>Email :</strong> $email</p>
//            <p><strong>Demande :</strong></p>
//            <p>$demande</p>
//        ";
//    $mail->AltBody = "Nom : $nom\nPrénom : $prenom\nTéléphone : $numero\nEmail : $email\nDemande : $demande"; // Version texte brut
//
//    // Envoi de l'email
//    $mail->send();
//    echo "Merci, votre message a bien été envoyé.";
//  } catch (Exception $e) {
//    echo "Une erreur est survenue lors de l'envoi de l'email : {$mail->ErrorInfo}";
//  }
//} else {
//  echo "Méthode non autorisée.";
//}
//?>


<!-- php chatgpt-->

<?php
require_once __DIR__ . '/phpmailer/src/Exception.php';
require_once __DIR__ . '/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $nom = htmlspecialchars(trim($_POST['nom'] ?? ''));
  $prenom = htmlspecialchars(trim($_POST['prenom'] ?? ''));
  $email = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
  $numero = preg_match('/^(\+?\d{1,4}[-.\s]?)?\d{10}$/', $_POST['numero'] ?? '') ? htmlspecialchars($_POST['numero']) : null;
  $demande = htmlspecialchars(trim($_POST['demande'] ?? ''));

  if (!$nom || !$prenom || !$email || !$numero || !$demande) {
    echo "Tous les champs sont obligatoires.";
    exit;
  }

  $mail = new PHPMailer(true);

  try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = getenv('qadoumimayzer@gmail.com'); // Variable d'environnement
    $mail->Password = getenv('cetj ziff zfjo hxrw'); // Variable d'environnement
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom(getenv('qadoumimayzer@gmail.com'), 'Ms Paysage');
    $mail->addAddress('mayzer38@yahoo.com', 'Destinataire');

    $mail->isHTML(true);
    $mail->Subject = "Nouveau message de contact : $nom";
    $mail->Body = "
            <h1>Nouveau message de contact</h1>
            <p><strong>Nom :</strong> $nom</p>
            <p><strong>Prénom :</strong> $prenom</p>
            <p><strong>Téléphone :</strong> $numero</p>
            <p><strong>Email :</strong> $email</p>
            <p><strong>Demande :</strong></p>
            <p>$demande</p>";
    $mail->AltBody = "Nom : $nom\nPrénom : $prenom\nTéléphone : $numero\nEmail : $email\nDemande : $demande";

    $mail->send();
    echo "Merci, votre message a bien été envoyé.";
  } catch (Exception $e) {
    echo "Erreur lors de l'envoi du message : {$mail->ErrorInfo}";
  }
} else {
  echo "Méthode non autorisée.";
}
?>


<html>
<body>
<?php

echo "Bedankt voor het invullen " . $_POST['name'] . "!<br>";
echo "We zullen u binnenkort via " . $_POST['email'] . " contacteren. <br><br>";
echo "Met vriendelijke groet,";
echo "<br><br>Team voor de punten";

// use wordwrap() because lines are longer than 70 characters
$msg = wordwrap("Bedankt voor het invullen ". $_POST['name'].",\n\nWe zullen u binnenkort via ". $_POST['email']." contacteren.\n\nMet vriendelijke groet,\nTeam voor de punten");
$headers = "From: l.blom1@students.uu.nl";
// send email
mail($_POST["email"],$_POST["subject"],$msg,$headers);

fopen($_POST['name'] . ".txt","w");
$txt = "Neem contact op met: ". $_POST['name'] . "op het mailadres: " . $_POST['mail'] . " \nHier volgt het ingestuurde bericht\n\n". $_POST['Message'];
fwrite($_POST['name'] . ".txt", $txt);
fclose($_POST['name'] . ".txt");
?>
</body>
</html>
<html>
<body>
<?php

echo "Bedankt voor het invullen " . $_POST['name'] . "!<br>";
echo "We zullen u binnenkort via " . $_POST['email'] . " contacteren. <br><br>";
echo "Met vriendelijke groet,";
echo "<br><br>Team voor de punten";

// use wordwrap() because lines are longer than 70 characters
$msg = wordwrap("Bedankt voor het invullen ". $_POST['name']."\nWe zullen u binnenkort via". $_POST['email']."contacteren.\n\n Met vriendelijke groet,\nTeam voor de punten");

// send email
mail($_POST["email"],"Forms",$msg);
?>
</body>
</html>
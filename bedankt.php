<html>
<body>
<?php
wordwrap("Bedankt voor het invullen ".$_POST['name']."\nWe zullen u binnenkort via".$_POST['email']."contacteren.\n\n Met vriendelijke groet,\nTeam voor de punten");

// use wordwrap() because lines are longer than 70 characters
$msg = wordwrap("Bedankt voor het invullen ".$_POST['name']."\nWe zullen u binnenkort via".$_POST['email']."contacteren.\n\n Met vriendelijke groet,\nTeam voor de punten");

// send email
mail($_POST["email"],"Forms",$msg);
?>
</body>
</html>
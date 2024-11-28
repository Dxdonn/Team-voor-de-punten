<html>
<body>

Bedankt voor het invullen  <?php echo $_POST["name"]; ?>
We zullen u binnenkort via <?php echo $_POST["email"]; ?> contacteren .

Met vriendelijke groet,
Team voor de punten

<?php

// use wordwrap() because lines are longer than 70 characters
$msg = "Bedankt voor het invullen ".echo $_POST['name']."\nWe zullen u binnenkort via $_POST['email']contacteren.\n\n Met vriendelijke groet,\nTeam voor de punten";

// send email
mail($_POST["email"],"Forms",$msg);
?>
</body>
</html>
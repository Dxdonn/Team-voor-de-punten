<html lang="nl">

<head>
  <meta charset="UTF-8">
  <title>Contact Pagina</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/677b73c60f.js" crossorigin="anonymous"></script>
</head>

<body>
  <main id="content">
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

    $myfile = fopen($_POST['name'] . ".txt","w");
    $txt = "Neem contact op met: ". $_POST['name'] . "op het mailadres: " . $_POST['mail'] . " \nHier volgt het ingestuurde bericht\n\n". $_POST['Message'];
    fwrite($myfile, $txt);
    fclose($myfile);
    ?>
  </main>
  <nav id="navigation-footer">
    <a href="contact.html">Vind hier onze contactinformate</a> <br>
    <i class="fa-solid fa-video"></i>
    <a href="video-pagina.html">Dit is demo pagina 1</a> <br>
    <a href="demo-page-2.html">Dit is demo pagina 2</a> <br>
  </nav>
</body>

</html>
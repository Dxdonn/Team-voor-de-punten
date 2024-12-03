<!DOCTYPE html>
<html lang="nl">

<head>
  <title>Contact Pagina</title>
  <?php require 'head.html'; ?>
</head>

<body>
  <main id="content">
    <h1>Neem Contact Op!</h1>
    <form action="bedankt.php" method="post">
      <label for="name">Naam:</label><br>
      <input type="text" id="name" name="name" value=" "><br>
      <label for="email">Email:</label><br>
      <input type="text" id="email" name="email" value=" "><br>
      <label for="subject">Onderwerp:</label><br>
      <input type="text" id="subject" name="subject" value=" "><br>
      <label for="Message" id="message-label">Bericht:</label>
      <br>
      <textarea id="Message"></textarea>
      <br>
      <input type="submit" value="verstuur">
    </form>
  </main>
  <?php require 'footer.html'; ?>
</body>

</html>
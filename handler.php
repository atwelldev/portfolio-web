<?php

mail("gm.dat.well@gmail.com", "Контакты", $_POST["message"]);

header("Location: /");
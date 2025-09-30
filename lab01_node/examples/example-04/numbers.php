<!DOCTYPE html>
<html>
    <head>
        <title>Hello World</title>
    </head>
    <body>
        <ul>
            <?php
            $n = isset($_GET['n'])
                ? intval($_GET['n']) : 5;
            $numeri = range(1, $n);
            foreach ($numeri as $val) {
                echo "<li>$val</li>";
            }
            ?>
        </ul>
    </body>
</html>

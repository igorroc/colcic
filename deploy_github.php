<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="utf-8"/>
<title>Usando GIT para atualizar arquivos</title>
</head>
<body>
	<pre>
	<?php
		$exec = shell_exec("git pull");
		echo $exec;
	?>
	</pre>
</body>
</html>
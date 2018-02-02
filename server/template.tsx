const html=(react_string)=>{
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="manifest.json">
    <link rel="shortcut icon" href="favicon.ico">
    <title>React</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <div id="root">${react_string}</div>
    <script src="vendor.bundle.js"></script>
    <script src="main.bundle.js"></script>
</body>
</html>`
}

export default html;
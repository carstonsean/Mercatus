$env:PORT = if ($env:PORT) { $env:PORT } else { "8001" }
& "C:\Program Files\nodejs\node.exe" "server.js"

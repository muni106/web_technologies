const requestHandler = (req, res) => {
    if (req.url === '/') {
        res.send("<html>");
        res.write("<head> ");
        res.write("<head> ");
        res.write("</head> ");
        res.send("</html>");
        res.end();
    }

    if (req.url === '/message' && req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk
        })
        req.on("end", () => {
            const message = body.split("ciao")
        })

    }
}

exports.handler = requestHandler;

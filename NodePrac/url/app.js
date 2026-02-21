import { readFile, writeFile, mkdir } from "fs/promises";
import { createServer } from "http";
import crypto from "crypto";
import path from "path";

const PORT = 9000;
const dataDir = path.join("data");
const Data_file = path.join(dataDir, "links.json");

// ================= Load Links =================
const loadLinks = async () => {
    try {
        const data = await readFile(Data_file, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        if (error.code === "ENOENT") {
            // Create data folder if missing
            await mkdir(dataDir, { recursive: true });
            await writeFile(Data_file, JSON.stringify({}));
            return {};
        }
        throw error;
    }
};

// ================= Create Server =================
const server = createServer((req, res) => {

    (async () => {

        console.log(req.method, req.url);

        // ================= GET REQUEST =================
        if (req.method === "GET") {

            // Handle favicon (prevents console error)
            if (req.url === "/favicon.ico") {
                res.writeHead(204);
                return res.end();
            }

            // Homepage
            if (req.url === "/") {
                const data = await readFile("./public/index.html");
                res.writeHead(200, { "Content-Type": "text/html" });
                return res.end(data);
            }

            // CSS
            if (req.url === "/style.css") {
                const data = await readFile("./public/style.css");
                res.writeHead(200, { "Content-Type": "text/css" });
                return res.end(data);
            }
          if (req.url === "/links") {
    const links = await loadLinks();
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(links));
}
            // Redirect Short URL
            const links = await loadLinks();
            const shortCode = req.url.slice(1);

            if (links[shortCode]) {
                res.writeHead(302, { Location: links[shortCode] });
                return res.end();
            }

            res.writeHead(404, { "Content-Type": "text/plain" });
            return res.end("Short URL not found");
        }

        // ================= POST REQUEST =================
        if (req.method === "POST" && req.url === "/shorten") {

            const links = await loadLinks();
            let body = "";

            req.on("data", chunk => {
                body += chunk;
            });

            req.on("end", async () => {
                try {
                    const { url, shortCode } = JSON.parse(body);

                    if (!url) {
                        res.writeHead(400, { "Content-Type": "text/plain" });
                        return res.end("URL is required");
                    }

                    const finalShortCode =
                        shortCode || crypto.randomBytes(4).toString("hex");

                    if (links[finalShortCode]) {
                        res.writeHead(400, { "Content-Type": "text/plain" });
                        return res.end("Short code already exists");
                    }

                    // Save new short link
                    links[finalShortCode] = url;

                    await writeFile(
                        Data_file,
                        JSON.stringify(links, null, 2)
                    );

                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({
                        shortUrl: `http://localhost:${PORT}/${finalShortCode}`
                    }));

                } catch (err) {
                    res.writeHead(400, { "Content-Type": "text/plain" });
                    res.end("Invalid JSON data");
                }
            });

            return;
        }

    })().catch(err => {
        console.error("Server Error:", err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
    });

});

// ================= Start Server =================
server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
// Application
import { app, bootstrap } from "./app";

const start = async () => {
    await bootstrap();

    await app
        .listen({ port: 3333, host: "0.0.0.0" })
        .then(() => console.log("🚀 HTTP Server Runing!"));
};

start();

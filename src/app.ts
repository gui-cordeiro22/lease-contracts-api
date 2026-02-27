// Dependencies
import fastify from "fastify";
import cors from "@fastify/cors";

// Routes
import { routes } from "./routes";

export const app = fastify();

export const bootstrap = async () => {
    await app.register(cors, {
        origin: ["http://localhost:5173"],
    });

    await app.register(routes);
};

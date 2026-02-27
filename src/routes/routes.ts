// Dependencies
import { FastifyInstance } from "fastify";

// Utils
import { buildHtml } from "../utils/build-html";

// Schema
import { buildHtmlSchema } from "../utils/build-html/build-html.schema";

// Services
import { pdfGenerator } from "../services/pdf-generator";

export const routes = async (app: FastifyInstance) => {
    app.post("/criar-contrato", async (request, response) => {
        const { tenantName, tenantCpf, rentalPrice, expirationDate } =
            buildHtmlSchema.parse(request.body);

        const generatedContractHtml = buildHtml({
            tenantName,
            tenantCpf,
            rentalPrice,
            expirationDate,
        });

        const pdfBuffer = await pdfGenerator(generatedContractHtml);

        response
            .header("Content-Type", "application/pdf")
            .header(
                "content-disposition",
                'attachment; filename="contrato-de-locacao.pdf"',
            )
            .status(201)
            .send(pdfBuffer);
    });
};

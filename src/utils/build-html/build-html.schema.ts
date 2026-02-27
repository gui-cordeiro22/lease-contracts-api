// Dependencies
import z from "zod";

export const buildHtmlSchema = z.object({
    tenantName: z.string().min(1),
    tenantCpf: z.string().min(11),
    rentalPrice: z.string().min(1),
    expirationDate: z.string().min(1).max(31),
});

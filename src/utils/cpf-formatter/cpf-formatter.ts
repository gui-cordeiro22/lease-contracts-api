// Types
import { CpfFormatterProps } from "./cpf-formatter.types";

export const cpfFormatter = (cpf: CpfFormatterProps) => {
    return cpf
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

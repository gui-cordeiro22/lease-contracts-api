// Types
import { CurrencyFormatterProps } from "./currency-formatter.types";

export const currencyFormatter = (
    leaseContractValue: CurrencyFormatterProps,
) => {
    const formattedLeaseContractValue = Number(
        leaseContractValue.replace(/\./g, "").replace(",", "."),
    );

    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(formattedLeaseContractValue);
};

// Dependencies
import extenso from "extenso";

// Types
import { NumberInWordsProps } from "./number-in-words.types";

export const numberInWords = (number: NumberInWordsProps) => {
    if (!number) return;

    return extenso(number);
};

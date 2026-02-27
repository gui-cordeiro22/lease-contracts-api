// Dependencies
import "dotenv/config";

const locatorData = {
    name: process.env["LOCATOR_NAME"],
    cpf: process.env["LOCATOR_CPF"],
};

const propertyData = {
    address: process.env["PROPERTY_ADDRESS"],
    type: "Casa",
};

export const data = {
    locator: locatorData,
    property: propertyData,
};

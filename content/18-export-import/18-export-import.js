/*
    &  Export  &
    Para usar export deve ser colocado no elemento que quer exportar
*/
// Example
export const capitalizeString = str => str.toUpperCase();

/*
    &  Import  &
    Usado para importar codigos
*/
import {capitalizeString} from "./string_function";

const cap = capitalizeString("Hello world!!!!!!");

console.log(cap);
// # Importanto tudo #
import * as CapitalizeString from "capitalizeStrings";

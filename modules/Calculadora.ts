import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export async function soma (request: ZuploRequest, context: ZuploContext) {
    return parseFloat(request.query.num1) + parseFloat(request.query.num2); //Query String
};

export async function subtracao (request: ZuploRequest, context: ZuploContext) {
    return parseFloat(request.query.num1) - parseFloat(request.query.num2); //Query String
};

export async function multiplicacao (request: ZuploRequest, context: ZuploContext) {
    return parseFloat(request.query.num1) * parseFloat(request.query.num2); //Query String
};

export async function divisao (request: ZuploRequest, context: ZuploContext) {
    return parseFloat(request.query.num1) / parseFloat(request.query.num2); //Query String
};
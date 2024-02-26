import type { Usuario } from "@prisma/client";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import "dotenv/config";

const JWT_SECRET = process.env.JWT_SECRET ?? "batata";

export async function hashSenha(senha: string){
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(senha, salt);
}

export async function comparaSenha(senha: string, hash: string){
    return bcrypt.compare(senha, hash);
}

export async function geraToken(usuario: Usuario){
    return jwt.sign(usuario, JWT_SECRET);
}

export async function decodificaToken(token: string){
    return jwt.decode(token) as Usuario;
}

export async function verificaToken(token: string){
    return jwt.verify(token, JWT_SECRET);
}
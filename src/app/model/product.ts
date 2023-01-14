export interface Product {
    codigo: string | number,
    nome: string,
    categoria: string,
    atributos: Atributes[]
}


export interface Atributes{
    desc: string | null | undefined
}

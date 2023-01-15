export interface Product {
    codigo: string | number,
    nome: string,
    preco: number,
    quantidade: number,
    categoria: string,
    atributos: Atributes[]
}


export interface Atributes{
    desc: string | null | undefined
}

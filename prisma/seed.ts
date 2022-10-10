import { categorias } from "./data/categorias";
import { productos } from "./data/productos";
// Para hacer una operación en la base de datos
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const main = async (): Promise<void> => {
    try {
        // Insertamos los datos. dentro del modelo .categoria
        // va a agregar todas las categorias que están en data
        await prisma.categoria.createMany({
            data: categorias
        })
        await prisma.producto.createMany({
            data: productos
        })
    } catch (error) {
        console.log(error);

    }
}
main()


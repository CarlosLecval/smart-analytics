const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const semesters = prisma.semester.createMany({
    data: [
      { number: "Primero" },
      { number: "Segundo" },
      { number: "Tercero" },
      { number: "Cuarto" },
      { number: "Quinto" },
      { number: "Sexto" },
      { number: "Septimo" },
      { number: "Octavo" },
      { number: "Noveno" },
      { number: "Décimo" },
      { number: "Otro" },
    ]
  })
  const degrees = prisma.degree.createMany({
    data: [
      { name: "Administración y Dirección / Business & Management (B&M)" },
      { name: "Administración y Finanzas" },
      { name: "Mercadotecnia y Estrategia de Datos" },
      { name: "Administración y Negocios Internacionales" },
      { name: "Talent Management" },
      { name: "Contaduría" },
      { name: "Comunicación" },
      { name: "Derecho Mixcoac" },
      { name: "Derecho Ciudad UP" },
      { name: "Economía" },
      { name: "Enfermería" },
      { name: "Hospitality Management" },
      { name: "Filosofía" },
      { name: "Gobierno" },
      { name: "Ing. en Animación y Videojuegos" },
      { name: "Ing. Industrial e Innovación Basada en Datos" },
      { name: "Ing. en Innovación y Diseño" },
      { name: "Ing. en Mecánica" },
      { name: "Ing. en Mecatrónica" },
      { name: "Ing. en Inteligencia de Datos y Ciberseguridad" },
      { name: "Matemáticas aplicadas" },
      { name: "Medicina" },
      { name: "Música e Innovación" },
      { name: "Pedadogía" },
      { name: "Psicología" },
      { name: "Business Intelligence" },
      { name: "Finanzas Cuantitativas" },
      { name: "Dirección de Negocios Gastronómicos" },
    ]
  })
  await Promise.all([semesters, degrees]);
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

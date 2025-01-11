const { PrismaClient } = require('@prisma/client')
const { dpiSections } = require('./seedData/sections')
const { dpiLectureQuestions } = require('./seedData/lectureQuestions')
const { dpiLearningQuestions } = require('./seedData/learningQuestions')
const { dpiPersonalityQuestions } = require('./seedData/personalityQuestions')
const { dpiAutoevalQuestions } = require('./seedData/autoevalQuestions')
const { dpiValuesQuestions } = require('./seedData/valuesQuestions')

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
  const questionPromises = []
  const dpiTest = await prisma.test.create({
    data: {
      name: "DPI",
      TestSection: {
        create: dpiSections
      }
    }
  })
  let section = await prisma.testSection.findFirst({
    where: {
      testId: dpiTest.id,
      title: "Comprensión en la lectura",
    }
  })
  dpiLectureQuestions.forEach((question) => {
    questionPromises.push(
      prisma.question.create({
        data: {
          text: question.question,
          type: "OPTION",
          testSectionId: section.id,
          Option: {
            createMany: {
              data: question.options.map(option => ({ text: option }))
            }
          }
        }
      })
    )
  })
  section = await prisma.testSection.findFirst({
    where: {
      testId: dpiTest.id,
      title: "Estilos de aprendizaje",
    }
  })
  dpiLearningQuestions.forEach((question) => {
    questionPromises.push(
      prisma.question.create({
        data: {
          text: question.question,
          type: "OPTION",
          testSectionId: section.id,
          Option: {
            createMany: {
              data: ['De acuerdo', 'En desacuerdo'].map(option => ({ text: option }))
            }
          }
        }
      })
    )
  })
  section = await prisma.testSection.findFirst({
    where: {
      testId: dpiTest.id,
      title: "Personalidad caracterológico"
    }
  })
  dpiPersonalityQuestions.forEach((question) => {
    questionPromises.push(
      prisma.question.create({
        data: {
          text: question.question,
          type: "OPTION",
          testSectionId: section.id,
          Option: {
            createMany: {
              data: question.options.map(option => ({ text: option }))
            }
          }
        }
      })
    )
  })
  section = await prisma.testSection.findFirst({
    where: {
      testId: dpiTest.id,
      title: "Autoevaluación"
    }
  })
  dpiAutoevalQuestions.forEach((question) => {
    if (question.type != "TEXT")
      questionPromises.push(
        prisma.question.create({
          data: {
            text: question.question,
            type: question.type,
            testSectionId: section.id,
            Option: {
              createMany: {
                data: question.options.map(option => ({ text: option }))
              }
            }
          }
        })
      )
    questionPromises.push(
      prisma.question.create({
        data: {
          text: question.question,
          type: question.type,
          testSectionId: section.id,
        }
      })
    )
  })
  section = await prisma.testSection.findFirst({
    where: {
      testId: dpiTest.id,
      title: "Prueba de valores personales"
    }
  })
  dpiValuesQuestions.forEach((question) => {
    questionPromises.push(
      prisma.question.create({
        data: {
          text: question.question,
          type: "SCALE",
          testSectionId: section.id,
          Option: {
            create: question.options.map(option => ({ text: option }))
          }
        }
      })
    )
  })
  await Promise.all([
    semesters,
    degrees,
  ].concat(questionPromises))
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

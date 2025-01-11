const dpiAutoevalQuestions = [
  {
    question:
      "De los siguientes aspectos indica cuál es tu método personal de estudio. Selecciona una o más de una.",
    options: [
      "Explorar el contenido general de la lectura o material.",
      "Leer con detenimiento el tema.",
      "Subrayar los puntos importantes.",
      "Detectar las ideas principales.",
      "Sintetizar y organizar la información.",
      "Memorizar el contenido.",
      "Repetir  de manera oral o escrita lo estudiado.",
      "Ninguna de las anteriores.",
    ],
    type: 'SELECTION',
  },
  {
    question:
      "Selecciona las áreas en las que requieres ayuda (SELECCIONA MÁXIMO 5)",
    options: [
      "Administración del tiempo y orden.",
      "Motivación y autonomía para aprender.",
      "Constancia en el estudio.",
      "Lagunas en conocimientos previos.",
      "Método de estudio para materias numéricas.",
      "Método de estudio para materias teóricas.",
      "Trabajos de investigación (expresión escrita).",
      "Expresión oral.",
      "Estrategias para resolución de exámenes.",
      "Manejo del estrés.",
      "Trabajo en equipo y habilidad para relaciones sociales.",
      "Concentración en el estudio.",
      "Otro",
    ],
    type: 'SELECTION',
  },
  {
    question:
      "Si quisieras que tu asesor(a) te ayude en algo específico respecto a una materia (método de estudio) o bien con alguna situación personal, redactalo. De lo contrario, deja el espacio en blanco.",
    type: 'TEXT',
  },
];

exports.dpiAutoevalQuestions = dpiAutoevalQuestions;

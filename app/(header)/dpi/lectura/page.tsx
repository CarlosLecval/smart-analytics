import MainButton from "@/app/ui/components/mainButton";

export default function Reading() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="max-w-6xl flex flex-col items-center">
        <div className="px-8 pt-8">
          <h1 className="text-2xl font-bold pb-4 text-center">
            Lectura - La dirección global
          </h1>
          <hr className="border-light-green" />
          <p className="text-md pb-4 text-justify pt-3">
            <span className="font-semibold">INSTRUCCIONES:</span> A continuación se te presenta una lectura, por favor
            léela con detenimiento. El propósito de ésta es medir la velocidad y
            el nivel de comprensión con la que lees. EN LA PRIMER PARTE, tendrás
            que analizarla para lo cual dispones de 60 minutos. Recuerda que al
            finalizar ésta se te harán preguntas. Si terminas antes del tiempo
            establecido, se te pide pasar a la parte de comprensión de lectura.
          </p>
          <hr className="border-light-green" />
          <p className="pb-4 pt-3">
            cfr. KONZ Harold y WEIRCH Heinz; Administración: una perspectiva
            global; México, Mac Graw Hill, 11ª. Edición, 796 p.
          </p>
          <h2 className="text-xl font-bold pb-2">Dirrección global</h2>
          <section className="columns-sm">
            <p className="pb-3 text-justify">
              Las conclusiones de esta parte tratan de la dirección global.
              Primeramente, la dirección se practica de diferente manera en cada
              país. Aquí haremos una comparación entre Japón, Estados Unidos, la
              República Popular China, México y Colombia. Luego, apuntaremos el
              enfoque internacional a aspectos globales selectos de la
              dirección; especialmente, a la influencia de diferentes culturas.
              Finalmente, presentamos un caso de la industria automotriz global
              sobre dos compañías estadunidenses para ilustrar la dirección
              administrativa en el contexto internacional.
            </p>
            <h3 className="font-bold pb-2 text-justify">
              PRÁCTICAS DE DIRECCIÓN EN JAPÓN, ESTADOS UNIDOS, LA REPÚBLICA
              POPULAR CHINA, MÉXICO Y COLOMBIA:
            </h3>
            <p className="text-justify">
              La dirección es el proceso por medio del cual se influye en las
              personas para que contribuyan en favor de los propósitos
              organizacionales; está relacionada con la motivación, el liderazgo
              y la comunicación. Las prácticas administrativas de dirección
              correspondientes a Japón, Estados Unidos, China, México y Colombia
              se resumen en la tabla que acompaña a este aparato.
            </p>
          </section>
          <h2 className="text-xl font-bold pt-4 pb-2">Dirrección en Japón</h2>
          <section className="columns-sm">
            <p className="pb-3 text-justify">
              Los administradores japoneses son concebidos como integradores
              sociales que forman parte de un equipo de trabajo. Por medio de la
              adopción de un estilo paternalista de liderazgo, los
              administradores muestran gran preocupación por el bienestar de sus
              subordinados. La comunidad de valores y el espíritu de equipo
              facilitan la cooperación. El papel de los administradores es crear
              las condiciones necesarias para el esprit de corps, de modo que
              están dispuestos a colaborar realizando las mismas actividades que
              sus subordinados.
            </p>
            <p className="pb-3 text-justify">
              En un intento por mantener la armonía a casi cualquier costo, los
              administradores evitan la confrontación directa. Esto significa
              que, quizá en forma deliberada, se procura la ambigüedad. Los
              líderes necesitan seguidores, y a los administradores les ayuda el
              hecho de que se espere de los individuos que subordinen sus
              intereses personales a los del grupo y la organización.
            </p>
            <p className="pb-3 text-justify">
              Aunque por lo general los administradores no den muchas órdenes
              directas, se ejerce influencia a través de la presión de los
              iguales. En realidad, prosperan las estrechas relaciones
              personales no sólo porque los empleados trabajen juntos en tareas
              comunes, sino también porque se reúnen y asocian fuera del ámbito
              estrictamente laboral. El resultado de ello es la confluencia de
              la vida organizacional y la privada.
            </p>
            <p className="pb-3 text-justify">
              Los patrones de comunicación siguen en forma paralela a los
              propios de la toma de decisiones. La comunicación más importante
              es descendente y ascendente, mientas que la comunicación menos
              importante suele ser ascendente. Este patrón de comunicación es
              promovido por los administradores japoneses, quienes dedican mucho
              tiempo a comunicarse con sus subordinados, para lo cual prefieren
              el contacto personal a los memorándum.
            </p>
          </section>
          <h2 className="text-xl font-bold pt-4 pb-2 text-center">
            Comparación de la dirección en Japón, Estados Unidos, China, México
            y Colombia*.
          </h2>
        </div>
        <div className="overflow-x-auto rounded-lg border border-light-green">
          <table>
            <thead className="bg-light-green">
              <tr>
                <th className="p-2">Administración japonesa</th>
                <th className="p-2">Administración estadounidense</th>
                <th className="p-2">Administración china</th>
                <th className="p-2">Administración mexicana</th>
                <th className="p-2">Administración colombiana</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-r p-2 border-light-green">
                  El líder funge como facilitador social y miembro del grupo.
                </td>
                <td className="border-r p-2 border-light-green">
                  El líder funge como responsable de la toma de decisiones y
                  dirigente del grupo.
                </td>
                <td className="border-r p-2 border-light-green">
                  El líder funge como dirigente del grupo (comité).
                </td>
                <td className="border-r p-2 border-ligth-green">
                  El dirigente actúa como la persona encargada de tomar
                  decisiones y coordinar al grupo directivo.
                </td>
                <td className="p-2">
                  El dirigente actúa como la cabeza del grupo.
                </td>
              </tr>
              <tr>
                <td className="border-r p-2 border-light-green">Estilo paternalista.</td>
                <td className="border-r p-2 border-light-green">
                  Estilo directivo (enérgico, firme, resuelto).
                </td>
                <td className="border-r p-2 border-light-green">
                  Estilo directivo (relaciones padre-hijo, en términos del
                  análisis transaccional).
                </td>
                <td className="border-r p-2 border-light-green">
                  Estilo directivo enérgico, conciliador en el proceso de toma
                  de decisiones
                </td>
                <td className="p-2">Estilo directivo autocrático.</td>
              </tr>
              <tr>
                <td className="border-r p-2 border-light-green">
                  La comunidad de valores facilita la cooperación.
                </td>
                <td className="border-r p-2 border-light-green">
                  Es frecuente la divergencia de valores; el individualismo
                  tiende a obstaculizar la cooperación.
                </td>
                <td className="border-r p-2 border-light-green">Valores comunes; énfasis en la armonía.</td>
                <td className="border-r p-2 border-light-green">
                  Existen valores comunes pero también una gran dosis de
                  individualismo por lo que en ocasiones la cooperación
                  requiere de un mayor esfuerzo.
                </td>
                <td className="p-2">Ausencia de valores comunes.</td>
              </tr>
              <tr>
                <td className="border-r p-2 border-light-green">
                  Evite las confrontaciones, lo que a veces genera
                  ambigüedades; énfasis en la armonía.
                </td>
                <td className="border-r p-2 border-light-green">
                  Es común la confrontación directa; énfasis en la claridad.
                </td>
                <td className="border-r p-2 border-light-green">Evita la confrontación.</td>
                <td className="border-r p-2 border-light-green">
                  Evita la confrontación; insiste en la claridad para evitar
                  ambigüedades y promover el trabajo en equipo.
                </td>
                <td className="p-2">Evita las confrontaciones.</td>
              </tr>
              <tr>
                <td className="border-r p-2 border-light-green">
                  Comunicación importante, descendente y ascendente;
                  comunicación importante, por lo general ascendente
                </td>
                <td className="border-r p-2 border-light-green">
                  Comunicación principalmente descendente.
                </td>
                <td className="border-r p-2 border-light-green">Comunicación descendente.</td>
                <td className="border-r p-2 borderlight-green">La comunicación es multidireccional.</td>
                <td className="p-2">
                  La comunicación es fundamentalmente de arriba hacia abajo.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pb-8 px-8 pt-6">
          <h2 className="text-xl font-bold pb-2">
            Dirección en Estados Unidos
          </h2>
          <section className="columns-sm">
            <p className="pb-3 text-justify">
              En las compañías estadunidenses la función administrativa de
              dirección se ejerce en forma muy diferente. Los líderes son vistos
              como responsables de la toma de decisiones y encabezadores del
              grupo; se espera de ellos que den órdenes, que sean fuertes,
              firmes y resueltos. Su tarea es integrar los diversos valores,
              pero es probable que el énfasis en el individualismo tanto en la
              sociedad en general como en las organizaciones en particular
              obstaculice la cooperación.
            </p>
            <p className="pb-3 text-justify">
              De los administradores se espera que emprendan acciones decisivas
              y aclaren la dirección del grupo o la compañía, aun si esto
              implica confrontación directa con quienes estén en desacuerdo.
              Aunque los administradores trabajan intensamente, valoran su vida
              privada, que distancian de su vida laboral.
            </p>
            <p className="pb-3 text-justify">
              El patrón de comunicación dentro de las organizaciones es en gran
              medida descendente a lo largo de la jerarquía, con especial acento
              en la comunicación escrita.
            </p>
          </section>
          <h2 className="text-xl font-bold pt-4 pb-2">Dirección en China</h2>
          <section className="columns-sm">
            <p className="pb-3 text-justify">
              La función administrativa de dirección en China posee
              características tanto de la práctica japonesa como de la
              estadounidense. El líder es el jefe del grupo (en los comités, por
              ejemplo), y por lo general el estilo de liderazgo es muy
              directivo. Una de las personas a las que entrevistamos al respecto
              describió la relación entre líderes y seguidores como una relación
              padre-hijo, en términos del análisis transaccional.
            </p>
            <p className="pb-3 text-justify">
              En otras palabras, se espera que las órdenes de los líderes sean
              obedecidas. Éstos a su vez son responsables ante las autoridades
              del desempeño y las metas, pero no de la satisfacción de las
              necesidades y demandas de los clientes (lo que, sin embargo, ya ha
              comenzado a cambiar lentamente).
            </p>
            <p className="pb-3 text-justify">
              A semejanza de la dirección en Japón, la dirección en China se ve
              favorecida por la comunidad de valores y el énfasis en la armonía
              más que en la confrontación. Por otra parte, la comunicación es
              fundamentalmente descendente, como en muchas compañías
              estadunidenses.
            </p>
          </section>
          <h2 className="text-xl font-bold pt-4 pb-2">Dirección en México</h2>
          <section className="columns-sm">
            <p className="pb-3 text-justify">
              La dirección en México se ejerce de manera abierta y firme, ya que
              esta función es la depositaria de la máxima autoridad formal de la
              organización y de ella parten los principios rectores a los que
              deben apegarse todos los niveles que componen la estructura
              orgánica.
            </p>
            <p className="pb-3 text-justify">
              El directivo como responsable de dictar las estrategias y
              establecer los marcos de actuación es quien encabeza el proceso de
              toma de decisiones y coordina los esfuerzos para imprimir cohesión
              al logro de resultados, promoviendo la interacción franca de los
              grupos de trabajo en términos cuantitativos y cualitativos.
            </p>
            <p className="pb-3 text-justify">
              La práctica de esta función está cimentada en la delegación de
              autoridad a las instancias que participan en los procesos
              centrales de la organización, la cual se complementa a través de
              una red de comunicaciones vía computadora, documentos y en forma
              oral.
            </p>
            <p className="pb-3 text-justify">
              La atención a clientes representa una de las prioridades más
              importantes, por lo que la supervisión de las acciones en todas
              sus fases encaminada a garantizar la preservación y
              fortalecimiento de la imagen de la empresa. En la dirección recae
              la responsabilidad de fomentar no sólo la calidad de los productos
              y/o servicios de la organización, sino la de acrecentar una
              cultura administrativa positiva.
            </p>
          </section>
          <h2 className="text-xl font-bold pt-4 pb-2">Dirección en Colombia</h2>
          <section className="columns-sm">
            <p className="pb-3 text-justify">
              Entre las condiciones administrativas dentro de las cuales se
              realiza la dirección, y que determinan en alguna medida el estilo
              de liderazgo, merecen mencionarse:
            </p>
            <p className="pb-3 text-justify">
              La estrategia para influir sobre el comportamiento del trabajador,
              que se basa en el premio y la sanción, pero que en muchos casos
              carece de un sistema de calificación de méritos suficientemente
              objetivo, y donde son más frecuentes las sanciones que los
              premios; las relaciones entre la empresa y el trabajador, que
              muestran la tendencia a ser cada vez más transitorias.
            </p>
            <p className="pb-3 text-justify">
              La estrategia para influir sobre el comportamiento del trabajador,
              que se basa en el premio y la sanción, pero que en muchos casos
              carece de un sistema de calificación de méritos suficientemente
              objetivo, y donde son más frecuentes las sanciones que los
              premios; las relaciones entre la empresa y el trabajador, que
              muestran la tendencia a ser cada vez más transitorias.
            </p>
            <p className="pb-3 text-justify">
              Por su parte, los empleados se adaptan consultando a su jefe las
              decisiones propias de la función que ejecutan, no porque impere un
              clima de participación sino por temor a ser desautorizados o
              castigados si las cosas salen mal. Ese cuadro refleja con
              suficiente fidelidad el estilo de dirección típico de las
              organizaciones colombianas, estilo que se mantiene a pesar de las
              frecuentes manifestaciones de la gerencia acerca de las bondades
              del liderazgo participativo y la autonomía del trabajador.
            </p>
            <p className="pb-3 text-justify">
              Mientras la intensificación de la competencia que resulta de la
              globalización de la economía no se manifiesta de manera
              amenazante, los jefes prefieren continuar disfrutando de las
              ventajas del poder, evitando adentrarse en el territorio todavía
              desconocido de la participación indiscutiblemente más complejo que
              la cómoda autocracia.
            </p>
          </section>
          <h2 className="text-xl font-bold pt-3 pb-2">
            La dirección en diferentes culturas
          </h2>
          <p className="pb-3 text-justify">
            La función administrativa de dirección se centra en las
            interacciones humanas entre las personas. Los administradores que
            operan en el ámbito internacional deben conocer al menos algunos de
            los aspectos culturales del país en el que planean trabajar. Es
            posible que la influencia de la cultura nacional sobre la cultura
            organizacional no sea inmediatamente advertible, aunque se refleja
            en la conducta organizacional y en las prácticas administrativas.
          </p>
          <h2 className="text-xl font-bold pt-3 pb-2">
            Cultura y conducta administrativa
          </h2>
          <section className="columns-sm">
            <p className="pb-3 text-justify">
              La cultura no es fácil de definir. Como ya se señalo, la cultura
              puede describirse como un patrón de comportamiento en relación con
              valores y convicciones desarrollados en el transcurso del tiempo.
              Los símbolos, por ejemplo, pueden indicar qué valoran los miembros
              de una sociedad u organización, lo cierto es que puede
              distinguirse entre la cultura de una nación y la cultura de una
              organización.
            </p>
            <p className="pb-3 text-justify">
              El ambiente externo influye en el modo en que las personas
              interactúan dentro de una organización. Pero también debe
              reconocerse que en un país la cultura puede variar enormemente, y
              no sólo en países tan grandes y diversos como Estados Unidos, sino
              también en naciones geográficamente pequeñas y relativamente
              homogéneas como Alemania. Los alemanes del norte se comportan de
              diferente manera que la población del sur del país. La cultura y
              su impacto en las organizaciones deben considerarse a la luz de
              esta advertencia.
            </p>
            <p className="pb-3 text-justify">
              Los administradores de hoy deben desarrollar una perspectiva
              global; una visión localista resulta ya inadmisible. Antes, muchas
              compañías estadunidenses (excepto las trasnacionales) no veían
              razón de desarrollar una perspectiva global. El inmenso mercado
              estadounidense resultó suficiente a menudo para las pequeñas y
              medianas empresas.
            </p>
            <p className="pb-3 text-justify">
              Estas compañías no veían la necesidad de crecer más allá de las
              fronteras nacionales y aventurarse en países extranjeros, con
              diferentes culturas e idiomas y mayores riesgos. Pero en la
              actualidad difícilmente cualquier compañía puede ignorar el ámbito
              global, aun si no planea operar en el exterior. Un número cada vez
              mayor de empresas extranjeras se incorpora al mercado
              estadounidense. Además, muchas empresas de Estados Unidos emplean
              a personas de diferentes naciones con diferentes culturas.
            </p>
            <p className="pb-3 text-justify">
              Las diferencias culturales afectan a conductas y prácticas
              administrativas como planeación (orientación a corto plazo contra
              largo plazo, por ejemplo), organización (tipo de estructura
              organizacional o de actitud hacia la delegación de autoridad, por
              ejemplo), integración del personal (selección basada en relaciones
              familiares más que en aptitudes profesionales, por ejemplo),
              dirección (adopción de un estilo de liderazgo participativo, no
              directivo, por ejemplo) y control (aplicación de un control
              riguroso en vez de controles, por ejemplo).
            </p>
            <p className="pb-3 text-justify">
              La cultura también afecta a las relaciones interpersonales, como
              las que ocurren en negociaciones. En Rusia, por ejemplo, las
              personas de negocios no suelen cultivar relaciones de largo plazo
              con sus socios de negociaciones. Del mismo modo, no debería
              sorprender el hecho de que pocos rusos sonrían en público. Por lo
              demás, acostumbran realizar brindis al término de sus reuniones de
              negocios, así que los occidentales deben abstenerse de pretender
              seguirles el paso en su manera de beber.
            </p>
            <p className="pb-3 text-justify">
              A los estadunidenses les resultará relativamente fácil hacer
              negocios con los ingleses. Unos y otros no sólo comparten muchos
              aspectos culturales, sino que además se comunican en el mismo
              idioma, lo que facilita las relaciones interpersonales. Sin
              embargo, a los ingleses no les gusta hablar de negocios en la
              mesa.
            </p>
            <p className="pb-3 text-justify">
              En Francia, el conflicto es parte común de la vida cotidiana.
              Parecería que los franceses desearan investigar la veracidad misma
              de las leyes universales. Basan su confianza personal en el
              carácter del individuo, más que en sus logros profesionales.
              Además, el impulso competitivo no es tan pronunciado en Francia
              como en Estados Unidos. La estructura de las clases sociales y la
              categoría asociada con ella son muy importantes en las
              interacciones sociales dentro y fuera de las organizaciones.
            </p>
            <p className="pb-3 text-justify">
              Dado que las relaciones comerciales con los japoneses son cada vez
              más frecuentes y puesto que los occidentales desconocemos por lo
              general los aspectos culturales de las interacciones sociales en
              Japón, ofreceremos aquí información general al respecto.
            </p>
          </section>
          <h2 className="text-xl font-bold pt-4 pb-2">
            Importancia del conocimiento de la cultura en la realización de
            negocios en Japón
          </h2>
          <p className="pb-3 text-justify">
            Los individuos originarios de los países occidentales pueden
            sentirse incómodos al hacer negocios en Japón. Aunque puede llegar a
            ser extremadamente difícil comprender las sutilezas de la cultura
            japonesa, una buena preparación es de vital importancia para
            conseguir armónicas relaciones de negocios en ese país.
          </p>
          <h2 className="text-xl font-bold pt-4 pb-2">
            Establecimiento de relaciones de negocios
          </h2>
          <section className="columns-sm">
            <p className="pb-3 text-justify">
              Es prácticamente imposible conocer a socios comerciales japoneses
              sin establecer contacto con ellos mucho antes de realizar un viaje
              a Japón. Las citas deben ir precedidas por contactos y cartas para
              la planeación de las reuniones. Aunque es difícil aprender
              japonés, se deben aprender al menos fórmulas de cortesía y ciertas
              frases comunes.
            </p>
            <p className="pb-3 text-justify">
              En una sociedad dominada por los hombres como la japonesa, las
              mujeres occidentales pueden sentirse incómodas al principio. Pero
              el hecho de que los japoneses sean muy corteses con los
              extranjeros en general obrará en su favor. Además, incluso las
              mujeres japonesas han conseguido algunos avances profesionales en
              las empresas del país en los últimos años.
            </p>
            <p className="pb-3 text-justify">
              Para los japoneses la comunicación frente a frente es muy
              importante. Antes de establecer tratos de negocios con socios
              extranjeros se interesan por conocerlos lo mejor posible.
              Adicionalmente, no se debe olvidar que los administradores
              japoneses buscan siempre obtener consenso entre ellos antes de
              responder preguntas o hacer declaraciones.
            </p>
            <p className="pb-3 text-justify">
              Uno de los autores de este libro tuvo la oportunidad de visitar
              una importante compañía automotriz japonesa. Las preguntas
              dirigidas al anfitrión japonés eran discutidas primero por los
              administradores (en japonés) antes de que uno de ellos diera una
              respuesta.
            </p>
          </section>
          <h2 className="text-xl font-bold pt-3 pb-2">
            Reconocimiento de las opiniones de los japoneses sobre los
            occidentales
          </h2>
          <section className="columns-sm">
            <p className="pb-3 text-justify">
              Los japoneses admiran la capacidad de innovación de los
              occidentales, así como su energía para la acción. Sin embargo, por
              lo general piensan que los extranjeros son impacientes y que son
              muy dados a establecer rápida familiaridad con los demás sin que
              ello signifique amistad de alguna especie.
            </p>
            <p className="pb-3 text-justify">
              Además, suelen estar convencidos de que las privaciones, como las
              que experimentaron al término de la Segunda Guerra Mundial, los
              han convertido en esforzados trabajadores. Algunos líderes
              políticos y empresariales japoneses piensan que su país debería
              asumir en la actualidad el liderazgo económico mundial.
            </p>
            <p className="pb-3 text-justify">
              Están conscientes de que la prosperidad económica de sus más de
              120 millones de connacionales depende de las exportaciones y de
              las operaciones en el exterior de las empresas trasnacionales
              japonesas. Los recursos naturales del país son limitados y todo el
              petróleo se importa del exterior.
            </p>
          </section>
          <h2 className="text-xl font-bold pt-3 pb-2">
            El arte de ofrecer obsequios
          </h2>
          <section className="columns-sm">
            <p className="pb-3 text-justify">
              Se puede distinguir entre dos tipos de regalos: personales y
              empresariales. Los regalos personales pueden incluir libros
              ilustrados u objetos típicos del lugar. Otros serían pelotas de
              golf, gorras, pisacorbatas o joyería estadounidense autóctona. Si
              el socio japonés tiene hijos, cosas como camisetas, libros para
              niños o plumas y lápices pueden ser regalos adecuados.
            </p>
            <p className="pb-3 text-justify">
              Entre los regalos empresariales pueden estar plumas, camisetas,
              separadores de libros o cualquier otro objeto con el logotipo de
              la compañía. Todos estos artículos deben ser del país de
              procedencia, no japoneses.
            </p>
            <p className="pb-3 text-justify">
              La presentación de los regalos también es importante. Los
              obsequios deben envolverse con colores apropiados para la ocasión,
              como azul, café, gris o verde.
            </p>
            <p className="pb-3 text-justify">
              Los colores llamativos, como rosa o rojo, y el papel floreado no
              son adecuados. También deben evitarse el blanco y el negro,
              colores fúnebres. La entrega y recepción de regalos se hace con
              ambas manos.
            </p>
            <p className="pb-3 text-justify">
              Por lo general las cajas con regalos no se abren frente a quien
              hizo el regalo, para no incomodarlo. Si un obsequio consiste en
              varios objetos similares, se debe evitar regalar cuatro del mismo
              tipo (lo que podría interpretarse como “muerte”) o nueve, dado que
              el término “nueve” significa “asfixia”.
            </p>
          </section>
          <h2 className="text-xl font-bold pt-3 pb-2">
            Reuniones con japoneses
          </h2>
          <section className="columns-sm">
            <p className="pb-3 text-justify">
              En Japón las reuniones de negocios son generalmente más formales
              que en Estados Unidos. Los aspectos preliminares se prolongan
              mucho tiempo, pero son especiales para una reunión exitosa. A
              menos que lo haga otra persona, uno mismo debe presentarse,
              primeramente con el individuo más importante. En ese momento se
              intercambian tarjetas de presentación.
            </p>
            <p className="pb-3 text-justify">
              En caso de que no se sepa de antemano quién es el individuo de
              mayor rango, usualmente es fácil advertirlo por el comportamiento
              de los subordinados, quienes se muestran sumamente respetuoso
              hacia esa persona. Además es común que el ejecutivo de más alto
              nivel sea el primero en entrar a la sala.
            </p>
            <p className="pb-3 text-justify">
              En la reunión, este individuo se sentará habitualmente en el punto
              intermedio de la mesa o entre sus asesores. (Difícilmente se
              encontrará a una mujer en un puesto de alta dirección, aunque debe
              decirse que las mujeres han alcanzado ciertos progresos
              profesionales en años recientes).
            </p>
            <p className="pb-3 text-justify">
              El intercambio de tarjetas de presentación es un ritual básico.
              Por ningún motivo salga usted de casa sin sus tarjetas de
              presentación si va a Japón. Lo ideal es que el contenido de la
              tarjeta aparezca en inglés y japonés. Los individuos más jóvenes o
              de menor rango son los primeros en ofrecer su tarjeta al socio
              comercial japonés.
            </p>
            <p className="pb-3 text-justify">
              Por el contrario, los administradores extranjeros de nivel
              inferior sólo ofrecerán sus tarjetas una vez que el director
              japonés haya hecho lo propio. La tarjeta debe entregarse con ambas
              manos, amenos que se les intercambie junto con un apretón de
              manos.
            </p>
            <p className="pb-3 text-justify">
              La cara impresa (la que está en inglés en caso de que la cara
              contraria se encuentre en japonés) debe aparecer hacia arriba,
              para que el ejecutivo japonés pueda leerla sin necesidad de darle
              vuelta. Aunque los japoneses acostumbran hacer reverencia, bastará
              con que el extranjero proceda a una amistosa inclinación de
              cabeza.
            </p>
            <p className="pb-3 text-justify">
              Las reuniones no sólo sirven para “hacer negocios”, sino también
              para establecer relaciones. Los japoneses querrían saber si habrá
              de sentirse suficientemente a gusto en su trato con la
              contraparte.
            </p>
            <p className="pb-3 text-justify">
              Esto significa que les interesa saber si una persona es de
              confiar, posee un conocimiento detallado del producto o servicio
              ofrecido y escucha y se muestra receptivo a sus necesidades. Por
              lo general se cree que los estadunidenses son muy parlanchines o
              que ejercen excesivas presiones para obtener una decisión.
            </p>
            <p className="pb-3 text-justify">
              Los administradores modernos deben desarrollar una perspectiva con
              una orientación geográfica y multicultural global. Conocer las
              diferencias culturales es un prerrequisito para el éxito personal
              y organizacional.
            </p>
          </section>
          <div className="w-full flex justify-center">
            <button className="pt-5 pb-4">
              <MainButton text="Terminar lectura" />
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}

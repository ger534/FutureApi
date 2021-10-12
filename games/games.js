const games = [
    {
        id: "employee",
        data: [
            {
                id: "start",
                text: "Empresa A concluye el contrato con tu Empleador B.",
                options: [
                    { id: "no_contrato_b_contrato_a_1", option: "> Empleador B te despide." },
                    { id: "contrato_b_1", option: "> Empleador B te asigna otro contrato.", }]
            },
            {
                id: "no_contrato_b_contrato_a_1",
                text: "¿Empresa A te contrata?.",
                options: [
                    { id: "contrato_a", option: "> Sí." },
                    { id: "no_contrato", option: "> No." }]
            },
            {
                id: "contrato_a",
                text: "Empleado mejor empleado. Felicidades.",
                options: [
                    { id: "game", option: "REINICIAR" }
                ]
            },
            {
                id: "contrato_b",
                text: "Empleado. Nada cambió.",
                options: [
                    { id: "game", option: "REINICIAR" }
                ]
            },
            {
                id: "no_contrato",
                text: "Empleado desempleado. Mala suerte.",
                options: [
                    { id: "game", option: "REINICIAR" }
                ]
            },
            {
                id: "contrato_b_1",
                text: "¿Empresa A te contrata?.",
                options: [
                    { id: "contrato_a_or_contrato_b", option: "> Sí." },
                    { id: "contrato_b", option: "> No." }]
            }, {
                id: "contrato_a_or_contrato_b",
                text: "¿Empresa A o Empleador B?.",
                options: [
                    { id: "contrato_a", option: "> Empresa A." },
                    { id: "contrato_b", option: "> Empleador B.", }]
            }
        ]
    },
    {
        id: "spaceship",
        title: "Navecita",
        html: true,
        data: [
            {
                id: "start",
                text: "<p>La tecnología le ha permitido a la humanidad visualizar el alba de la colonización interplanetaria. Ahora el humano está en un segundo plano, \
                disfrutando del piloto automático que controla su destino. Sin embargo, es importante que siempre haya alguien quién vigile el sistema.\
                En el viejo mundo, por ejemplo, la mayoría de la población vive en un paraíso virtual, dentro de la comodidad de sus casas-puerto y\
                sin preocuparse de su entorno físico. Pero detrás de esa calma impoluta, existe una red de mantenimiento que se encarga salvaguardar \
                la arquitectura que hace posible los metaversos de la ciudadanía. Mientras cierta persona sueña que gana la lotería todas las mañanas o \
                que es famosa y amada por toda la humanidad, un grupo de especialistas velan que no sucedan eventos extraordinarios que obstruyan \
                con el funcionamiento habitual de la utopía tecnológica. \
                </p>\
                \
              <p>Las tareas de soporte son de vital importancia y por lo tanto, las estaciones de trabajo están distribuídas a lo\
                largo del globo terrícola. La comunicación entre estos clústers está reservada para incidentes de máximo nivel,\
                donde es necesaria la cooperación de multiples nodos de mantenimiento o incluso, en ocasiones especiales, para notificar a toda la red. \
                Existe un robusto y detallado protocolo que todos los monitores tienen grabados en su memoria y que les permite ejecutar sus tareas y saber que\
                procedimientos seguir según cada situación. Sin embargo, los monitores, después de todo, siguen siendo humanos y aún si \
                conocen a la perfección que deben hacer, puede suceder en raras ocasiones que los hechos les parezcan insólitos.</p>\
                \
              <p class=\"dialog\">—Red alarm, level 5, alien attack.</p>\
                \
                <p>Hasta este momento, ni Dios ni los alienígenas se habían vuelto visibles en la inmensidad del universo, pero esto\
                parecía haber cambiado en un santiamén. Fue imperativo desplegar la aeronave más rápida. No tenía mucho armamento\
                ni espacio. Espacio único para un tripulante, el piloto 305. La curiosidad lo lanzó tan rápido al volante que no\
                se cuestionó lo irracional de su misión. Si luego de tantos años de avances tecnológicos, un objeto volador no\
                identificado había sido capaz de penetrar, no solo el sistema solar, sino la atmósfera de la Tierra y además, sin\
                ser detectado hasta el momento de tocar la integridad de los metaversos, definitivamente un piloto de\
                mantenimiento no lo iba a neutralizar con un par de cañones de plasma.</p>\
                <p>El GPS dicta: <i>Turn right.</i> ▶️</p>",
                options: [
                    { id: "izquierda", option: "🚀 Girar a la izquierda ◀️.", noShow: true },
                    { id: "derecha", option: "🚀 Girar a la derecha ▶️.", noShow: true },
                ]
            },
            {
                id: "izquierda",
                text: "<p>305, sin prestar mucha atención a las instrucciones y tal vez aún aturdido por la noticia, decide no tomar en consideración la ruta sugerida por\
                el Sistema de Posicionamiento Global y en cambio, se dirige en dirección contraria al sitio del incidente. Siguiendo este rumbo, 305 tiene la oportunidad de \
                visualizar desde las alturas, las grandes aglomeraciones de casas-puerto, que se propagan por toda la árida superficie terrestre.\
                </p> \
                <p>El GPS dicta: <i>Please, turn to your right.</i> ▶️</p>",
                options: [
                    { id: "derecha", option: "🚀 Girar a la derecha ▶️.", noShow: true },
                    { id: "mantener", option: "🚀 Mantener rumbo 🔼.", noShow: true },
                ]
            },
            {
                id: "mantener",
                text: "<p>Aún sin entrar en personaje, 305 decide mantener el rumbo equivocado. Siguiendo esta dirección, la aeronave tendría que orbitar gran parte del planeta\
                antes de acercarse al punto de interés, lo que comprometería el interés público de mitigar cualquier inconveniente en la infraestructura de los metaversos lo antes posible. \
                Desde la base, otros monitores comenzaron a quejarse de sus decisiones erráticas y le advirtieron tomar con seriedad su rol \
                en la sociedad. Mientras esto sucedía, el vehículo comenzó a estremecerse. Entre la súbita turbulencia, por un instante le pareció escuchar un ruido\
                inusual, una especie de graznido.\
                </p> \
                <p>El GPS dicta: <span style=\"background-color:red\"><strong>TURN TO YOUR RIGHT.</strong> ▶️</span></p>",
                options: [
                    { id: "derecha", option: "🚀 Girar a la derecha .", noShow: true },
                    { id: "explosion_nave_tierra", option: "No." },
                ]
            },
            {
                id: "explosion_nave_tierra",
                text: "<p>De imprevisto, la máquina que tripulaba 305 se quedó inmóvil y luego comenzó a descender, cada vez más rápido, en dirección a la Tierra.\
                El monitor, que hasta el momento había tomado decisiones poco sabías, activó el mecánismo de eyección y salió disparado de la nave. Lo que segundos antes era\
                su medio de transporte, quedó desintegrado por el sistema de defensa de las casas-puerto. Gracias a su traje de seguridad, 305 no sufrió ningún daño.\
                El atuendo que portan los monitores es el instrumento de defensa y control más poderoso que posee el gremio. Entre sus cuales, posee la virtud de ser una\
                armadura virtualmente indestructible.\
                <p>—305, we have already deploy another monitor, 301, to take care of the alarm. We will discuss your behavior later, in the base, for now, just stay still 🕒, \
                we are sending 304 in another ship to take you home.</p>\
                </p>",
                options: [
                    { id: "esperar", option: "Esperar 🕒.", noShow: true },
                    { id: "alrededores", option: "Mirar los alrededores.", noShow: true },
                ]
            },
            {
                id: "esperar",
                text: "<p>305 decidió tomar asiento y esperar a que su colega viniera a su recuperación. El monitor no estaba demasiado preocupado por la señal de \
                amenaza alienígena, en el fondo, sabía que luego de tanta exploración planetaria sin un solo encuentro interespacial, \
                era poco probable que seres de otro planeta aparecieran súbitamente en la Tierra. Incluso si los sensores de un centinela de la infraestructura \
                metavérsica decía que era así. Primero había que cerciorarse que la máquina en cuestión estuviera en correcto funcionamiento. Aúnque había aludido la labor,\
                305 sabía que alguien debía ir a revisar el estado físico de la máquina, apersonarse en el lugar, verificar la situación. Algún problemas solo se pueden resolver así.\
                Mientras seguía meditando, le llamó la atención ver una pequeña mancha blanca en el horizonte. Era minúscula, pero negaba a estar estática, al contrario, oscilaba sin armonía. \
                </p> ",
                options: [
                    { id: "esperar_2", option: "Seguir esperando.", noShow: true },
                    { id: "alrededores", option: "Investigar el avistamiento.", noShow: true },
                ]
            },
            {
                id: "alrededores",
                text: "<p>La eyección               había lanzado al monitor a la cima de una torre de casas-puerto. Estas colosales pilas de hogares tomaban la forma de \
                enormes rascacielos, que no son solo grandes en la superficie sino, simulando a los extintos árboles, también se extienden debajo de la tierra. Prácticamente todo el espacio\
                habitable está cubierto por estas viviendas especialmente diseñadas como puertos de conexión a la tecnología que le permite a los ciudadanos del viejo mundo \
                utilizar los metaversos, ya sea de manera individual o colectiva. Ahora 305 se encontraba recorriendo los techos de estas edificaciones. Afuera de las casas por supuesto que no \
                había ningún otro humano, después de todo, el territorio es hostil y la indumentaria para estar en el exterior no es necesariamente cómoda.</p>\
                \
                <p>Acercándose a lo que antes fue su horizonte, el monitor se topó con un hallazgo particular: plumas.</p>",
                options: [
                    { id: "a", option: "a.", noShow: true },
                    { id: "b", option: "b.", noShow: true },
                ]
            },
            {
                id: "derecha",
                text: "<p>Siguiendo las indicaciones del Sistema de Posicionamiento Global, 305 toma la ruta más pronta al sitio del incidente. La región por la cual sobrevuela\
                la aeronave es una de las pocas zonas en el planeta que no está saturada por casas-puerto. El monitor inclina su cabeza por el parabrisas del vehículo y logra ver \
                la circuitería que conecta la red mundial de información. Ahora el cableado se encuentra al descubierto, pero mucho tiempo atrás, solía estar en el fondo del océano, \
                cuando aún había agua en él.</p> \
                <p>El GPS dicta: <i>Lower your altitude.</i> 🔽</p>",
                options: [
                    { id: "descender", option: "Descender al fondo del vacío océano 🔽.", noShow: true },
                    { id: "ascender", option: "Ascender hacia la atmósfera 	🔼.", noShow: true },
                ]
            },
            {
                id: "descender",
                text: "<p>Haciendo caso al GPS, 305 descendió ocho mil metros bajo el nivel del inexistente mar. De entre la maraña de enormes cables industriales, se hizo visible el centinela cuyo sistema de monitoreo había disparado la \
                alarma extraterrestre.</p> \
                <p>El GPS dicta: <i>You have reach your destination.</i> 🎯</p>",
                options: [
                    { id: "llegada", option: "Aterrizar 🎯.", noShow: true },
                    { id: "meditar", option: "b. Meditar por un momento." },
                ]
            },
            {
                id: "meditar",
                text: "<p>305 decidió meditar por un momento sobre la situación en la que se hallaba. En el momento que decidiera salir de su vehículo e \
                investigar la amenazaba de seres inteligentes sin descendencia humana, su vida estaría en peligro. La sección del protocolo donde se estipula \
                como se debe actuar en caso de \"<code>Red alarm, level 5, alien attack.</code>\" dice lo siguiente:</p>\
                <ul>\
                <li>Diríjase a la zona del presunto impacto e inspeccione el lugar.</li>\
                <li>Verifique que los sensores del centinela estén en correcto funcionamiento. Eventos cuánticos pueden descalibrar estos instrumentos.\
                también observe con detenimiento sus alrededores y active el mecánismo más agresivo de defensa que tenga a disposición.\
                </li>\
                <li>En caso de falsa alarma, desactive la alarma. Si la alarma no es desactivada en menos de <code>3600 ms</code> desde su disparo, ya sea por \
                muerte del monitor o por negligencia, El Muro de Fuego lanzará un ataque fulminante contra el planeta Tierra.</li>\
                \
                <li>Antes que la amenaza alienígena exprese un comportamiento hostil y tirano, la humanidad terrícola está dispuesta a la inmolar su especie \
                en nombre de la Libertad. No seremos subyugados por seres que se autoproclaman superiores a nosotros, en hechos o en palabras. \
                </ul>\
                <!--<li>Si la amenaza alien expresa un comportamiento hostil, la humanidad terrícola está dispuesta a la inmolarse de su especie, \
                en nombre de la Libertad. No seremos subyugados por seres que se autoproclaman superiores a nosotros, en hechos o en palabras. \
                </ul>-->\
                <p><i>Muerte del monitor</i>... El protocolo de los monitores tiene 18.500 palabras, la única vez que se utiliza la palabra \"muerte\". \
                La vida en la tierra está asegurada para la humanidad en la Tierra. Incluso sí ya sabía que un incidente así podría pasar... Nunca evalué la posibilidad\
                de que de verdad pasara. La premisa en general no tiene sentido ¿cómo van a llegar los aliens al punto más profundo de la superficie terrestre? Tendría más\
                más sentido que los colonizadores interespaciales se toparan con vida inteligente en sus exploraciones y conquistas. Y no me parece posible que nada ni nadie \
                pueda burlar la seguridad de El Muro de Fuego, nuestro protector espacial.\
                </p>",
                options: [
                    { id: "llegada", option: "Bajar del vehículo.", noShow: true },
                    { id: "ascender", option: "Ascender hacia la atmósfera 	🔼.", noShow: true },
                ]
            },
            {
                id: "ascender",
                text: "<p>En un acto contrario al indicado, 305 decidió aumentar la latitud de su posición, acercándose la atmósfera. \
                Al superar las grises y artificiales nubes que cubren el cielo de día y de noche; el monitor fue encandilado por el exceso de luz que emitían los edificios espaciales.\
                El ecosistema atmosférico de la Tierra está plagado de hogares burocráticos, donde las industrias de cada tecnología vital para la humanidad habitan y organizan sus actividades.\
                 </p> \
                <p>El GPS dicta: <i>Please, lower your altitude.</i> 🔽</p>",
                options: [
                    { id: "ascender_2", option: "Seguir ascendiendo 🔼.", noShow: true },
                    { id: "descender", option: "Descender 🔽.", noShow: true },
                ]
            },
            {
                id: "ascender_2",
                text: "<p>Subiendo aún más, y acercándose peligrosamente a zonas restringidas y sin directa relevancia para alguien de mantenimiento, 305 mantuvo su rumbo de forma ascendente.\
                Su comportamiento errático e insubordinado hizo que su transmisor comenzaba a chorrear toda clase de advertencias y represalias. No solo sus compañeros en el nodo de monitores estaban\
                confundidos y molestos con él, también era posible percibir un comunicado por parte de El Muro de Fuego. Describir el uso de la luna.</p> \
                <p>El GPS dicta: <span style=\"background-color:red\"><strong>LOWER YOUR ALTITUDE.</strong> 🔽</span></p>",
                options: [
                    { id: "explosion_nave_luna", option: "No." },
                    { id: "descender", option: "descender 🔽." },
                ]
            },
            {
                id: "explosion_nave_luna",
                text: "<p>De imprevisto, la máquina que tripulaba 305 se quedó inmóvil y luego comenzó a descender, cada vez más rápido, en dirección a la Tierra.\
                El monitor, que hasta el momento había tomado decisiones poco sabías, activó el mecánismo de eyección y salió disparado de la nave. Lo que segundos antes era\
                su medio de transporte, quedó desintegrado por El Muro de Fuego. Gracias a su traje de seguridad, 305 no sufrió ningún daño.\
                </p>",
                options: [
                    { id: "a", option: "a." },
                    { id: "b", option: "b." },
                ]
            },
            {
                id: "llegada",
                text: "<p>Al inspeccionar el lugar, a 305 no le pareció extraño que no hubiera una ofensiva extraterrestre.\
                Incluso si era su trabajo hacerlo, en el fondo nunca creyó que la notificación fuera un reflejo de la realidad.\
                Pero la alarma disparada, roja y de nivel 5, indicaba que por fuerza algo debió\
                invadir algún sector de la infraestructura que forma las <strong><u>metá</u></strong>foras \
                del uni<strong><u>verso</u></strong> que tantos utilizan con inmensa felicidad; y por ende, su labor consistía en inspeccionar el lugar.</p>\
                \
                <p>La vida de los monitores de los metaversos no es muy distinta a la de las máquinas. Consiste en seguir\
                protocolos, cumplir con las rutinas de mantenimiento, hacer exámenes al sistema… Durante décadas, el gremio fue\
                optimizando su trabajo y perdiendo su humanidad. Tampoco es tan necesaria para cumplir su labor. La mayoría de\
                entornos que un monitor habita son controlados, predecibles. El honor de la tarea no está en el\
                riesgo o la complejidad, sino en mantener el orden, en ser los mediadores de la falsa naturaleza impuesta para\
                cumplir las fantasías de los habitantes que viven en la virtualidad.</p>\
                \
                <p>Tal vez por esto, antes de que 305 se diera cuenta, se encontraba caminando la superficie terrestre, a la\
                intemperie. Por primera vez (y probablemente siendo pionero en esto), se enfrentaba a una situación que no estaba\
                controlada. En el peor de los casos, El Muro de Fuego lanzaría un ataque desde la Luna, sin importar\
                cuánta infraestructura tuviera que destruir. 305 sabía que la única forma de evitar que la situación escalara era\
                suprimir la señal inicial antes de que pasaran <code>3600 de milisegundos</code>, como lo estipula el\
                protocolo.</p>\
                \
                <p>Sus colegas le llamaban. Respondió la radio y les dijo</p>",
                options: [
                    { id: "no_aliens", option: "Nada que reportar.", noShow: true },
                    { id: "b", option: "b (Tengo miedo??)." },
                ]
            },
            {
                id: "no_aliens",
                text: "<p class=\"dialog\">—Nothing to report. I will turn off the alarm and then I will check the area. Over and out.</p>\
                \
                <p>Su tono era estoico y seco, característico del gremio. Sin embargo, por dentro una amalgama de sensaciones\
                extrañas le invadía, se podría decir que incluso sentía decepción de no haber encontrado nada. Realizó la labor\
                indicada, tal y como lo dijo, no encontró nada extraño en los sensores que dispararon la alarma, pero sí encontró\
                un material peculiar posando sobre ellos.</p>\
                \
                <p class=\"dialog\">—feathers!? dijo para sí mismo. Sabía que eran plumas, pero encontrárselas le parecía increíble.\
                </p>\
                \
                <p>Todo infante considerado parte de la sociedad debe pasar sus primeros 5 años de vida en un almacén educativo. En\
                estos lugares, los retoños reciben una instalación de enciclopedias por medio de ondas cerebrales. Nunca verán en\
                el mundo real la gran mayoría de conceptos que aprenden durante su vida lectiva, pero es conocimiento que nunca se\
                borrará siempre y cuando se le dé el mantenimiento adecuado al órgano cerebral.</p>\
                \
                <p>De esta manera, 305 sabía qué eran las plumas, sabía de dónde venían y el uso que tuvieron en sociedades\
                rudimentarias de unos antiguos ancestros, conocidos como <em>homo sapiens sapiens</em>. Pero jamás en su vida\
                pensó que se las encontraría sobre parte del equipo del <code>sector A45</code>. Ni siquiera había pensado que\
                pensaría en ello algún día. Nunca había pensado que nunca vería una mariposa, o un conejo o un dragón. De haber\
                sentido la necesidad de dar un paseo por la historia animal, habría entrado al metaverso e imaginado lo\
                que quería ver. O incluso, si le daba pereza, podía simplemente implementar el diseño de algún museo público del\
                almacén educativo. Pero nunca hubo un deseo en hacerlo.Y ahora, en la más extraña de las situaciones, plumas.</p>",
                options: [
                    { id: "plumas", option: "Tomar las plumas.", noShow: true },
                    { id: "no_plumas", option: "No tomar las plumas.", noShow: true },
                ]
            },
            {
                id: "plumas",
                text: "<p> \"Evidence 🔎\", pensó. Hizo un escaneo completo del material\
                y luego las guardó en una bolsa hermética de su traje. De pronto tenía muchas preguntas. Nunca había tocado una\
                pluma, en su memoria estaba quemado los orígenes, sus usos, las miles de formas y colores que podían tener, pero\
                nunca había tocado una, no en el mundo real. Tímido, extrajo el guante una de sus manos y sacó de nuevo una de las\
                plumas utilizando su mano desnuda.</p>\
                \
                <p class=\"dialog\">—It's the same...—dijo, un poco decepcionado mientras examinaba con sus dedos las fibras del\
                objeto.</p>\
                \
                <p>En su mente, por una pequeña fracción de tiempo, consideró que tal vez habría una diferencia entre las\
                sensaciones simuladas y las reales, pero claro, esa idea es un sinsentido, pues las simulaciones actuales calcan la\
                realidad a la perfección. Y aún más, si la tecnología fuera una religión, tales cuestionamientos y dudas serían\
                blasfemia. Religiones y dragones, \"🙄\", pensó. De manera automática, caminó hasta la\
                nave y retornó a su posición de piloto. Cerró la cabina y se preparó para despejar cuando, un graznido que le\
                pareció rebotar por todo el interior de su cráneo, lo interrumpió. Se dio la vuelta en su asiento y revisó el\
                interior de la pequeña nave, mas no encontró ningún intruso. Al volver su vista al frente se encontró con un gran\
                ganso desplegando sus alas a lo ancho. Apenas si podía creerlo. Le fue necesario limpiar rápidamente el visor de\
                su traje para cerciorarse de que no estaba alucinando.</p>\
                \
                <p class=\"dialog\">—A goose…? But how?—se dijo a sí mismo, intentando procesar la información.</p>\
                \
                <p>Y ahí estaba, delante de él, la prueba fehaciente del correcto funcionamiento de los sensores aéreos del\
                centinela. Y lo inaudito, el objeto volador no identificado resulta ser un enorme y blanco ganso. Mentalmente\
                recorrió todos los protocolos de seguridad pero no pudo rescatar nada que explicara cómo proceder en caso de\
                anátida. Analizó si debía contarle a sus colegas sobre el hallazgo, pero la situación le pareció tan estrafalaria\
                que no sabía siquiera cómo podría explicarla.</p>",
                //solo la idea de explicarla le generó un repulsión enorme y el deseo de postergar lo inevitable
                options: [
                    { id: "notificar_luego", option: "Notificarlo luego.", noShow: true },
                    { id: "notificar", option: "b." },
                ]
            },
            {
                id: "notificar_luego",
                text: "<p>Solo el hecho de imaginarse explicando la situación por la radio le generó un desánimo enorme y el deseo de postergar lo inevitable. \
                Decidió que lo mejor sería avanzar y preocuparse del asunto luego. La cabina era impenetrable mientras la nave estuviera cerrada y solamente 305 tenía \
                la llave. Si podía aguantar el viaje de regreso con el ganso, podría desplazar el problema hasta llegar a la base. Remover el ave del panel de control provocó una \
                lluvia de picotazos sobre el monitor, sin embargo, su traje de seguridad es virtualmente indestructible y lo protegió con vehemencia del ataque. Con dificultad, colocó el ganso \
                detrás de su asiento y emprendió su viaje de retorno a la estación.</p>\
                \
                <p>Apenas entrando al hangar, uno de sus colegas le dijo que se apresurara a la sala de conferencias, pues El Muro de Fuego\
                debía hacer la respectiva evaluación de la situación y su testimonio era clave. Tratando de\
                quitarse con rapidez el cinturón de seguridad, se notaba disperso e intentando recolectar y ensamblar la\
                información de manera clara y concisa.</p>",
                //Delante de sus colegas y de los representantes de El Muro, explicó la
                //situación lo mejor que pudo. Incluso mostró las plumas como evidencia, sin embargo, la perplejidad y la
                //incredulidad de los oyentes era palpable y tan sólida como el metal que constituía la base de mantenimiento.</p>
                options: [
                    { id: "mostrar_ganso", option: "Enseñarles el ganso." },
                    { id: "b", option: "b." },
                ]
            },
            {
                id: "mostrar_ganso",
                text: "<p>Como su as bajo la manga, 305 decidió mostrarles el ganso en cuestión. Pero, para su sorpresa; y la tranquilidad\
                de sus colegas, en la nave utilizada para la inspección, no había rastro de ningún animal. Se le aconsejó a 305\
                tomarse un descanso y retomar el asunto luego.</p>",
                options: [
                    { id: "hola_mundo_1_completado", option: "Ir a descansar." },
                ]
            },
            {
                id: "no_plumas",
                text: "<p> \"Evidence 🔎\", pensó. Hizo un escaneo completo del material, sin embargo, se abstuvo de tocar el material con sus manos.\
                Tenía mucha curiosidad. Nunca había tocado una pluma, conocía sus usos y las miles de formas y colores que podían tener, pero\
                nunca había tocado una, no en el mundo real. A pesar de esto, la situación actual del planeta no permitía ningún tipo de vida\
                salvaje. Incluso si parecía solo un inofensivo puñado de vestimenta ovípara, el mero hecho de que estuviera al aire libre en una atmósfera \
                hostil era suficiente para sospechar que la situación tal vez era más compleja de lo que aparentaba a simple vista. Quizá la alarma \
                que comenzó todo esto había captado una amenaza real. \
                .</p>",
                options: [
                    { id: "a", option: "a." },
                    { id: "b", option: "b." },
                ]
            },
        ]
    },
    {
        id: "terms_and_conditions",
        title: "Términos y condiciones",
        html: true,
        data: [
            {
                id: "start",
                text: "<p>Bienvenido. Le tengo buenas noticias. Usted está vivo y está aquí, ahora mismo. El análisis fisiológico indica\
                que\
                su recipiente actual es fuerte y está sano; y los resultados de su informe de bienestar\
                indican que es un miembro apto para realizar tareas productivas y con un impacto positivo en nuestra\
                sociedad.\
                <!--<p>Descartar?(Antes\
                de continuar, por favor\
                seleccione alguna de las actividades físicas en el menú de entrenamiento. O, si desea postergar su cuota de\
                movimiento, por favor,\
                piénselo en voz alta —de acuerdo,\
                <span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Actividad física Reagendada</code></span>.\
                )</p>-->Antes de continuar, por favor\
                complete\
                las frases a continuación.</p>\
                <p>—El color rojo...</p>",
                options: [
                    { id: "triangulo_no", option: "El color rojo es bonito." },
                    { id: "triangulo_yes", option: "El color rojo no es azul." }]
            },
            {
                id: "triangulo_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Incorrecto.</code></span>\
                <p>—Un triángulo...</p>",
                options: [
                    { id: "suma_no_discardable", option: "Un triángulo puede ser el techo de una casa." },
                    { id: "suma_yes_discardable", option: "Un triángulo no puede contener más de un ángulo obtuso." }
                ]
            },
            {
                id: "triangulo_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—Un triángulo...</p>",
                options: [
                    { id: "suma_no_discardable", option: "Un triángulo puede ser el techo de una casa." },
                    { id: "suma_yes_discardable", option: "Un triángulo no puede contener más de un ángulo obtuso." }
                ]
            },
            {
                id: "suma_no_discardable",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Incorrecto.</code></span>\
                <p>—2+2...</p>",
                options: [
                    { id: "triangulo_no_suma_no", option: "3.", noShow: true },
                    { id: "lenguaje_yes", option: "4." }
                ]
            },
            {
                id: "suma_yes_discardable",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—2+2...</p>",
                options: [
                    { id: "triangulo_yes_suma_no", option: "3.", noShow: true },
                    { id: "lenguaje_yes", option: "4." }
                ]
            },
            {
                id: "triangulo_no_suma_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Incorrecto.</code></span>\
                <p>—<span class=\"info-action-box\"><code class=\"info-action\"><span style=\"font-size: 16px;\">(❕) </span>No siempre tienes derecho a equivocarte.</code></span> 2+2...</p>",
                options: [
                    { id: "lenguaje_yes", option: "4." }
                ]
            },
            {
                id: "triangulo_yes_suma_no",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—<span class=\"info-action-box\"><code class=\"info-action\"><span style=\"font-size: 16px;\">(❕) </span>No siempre tienes derecho a equivocarte.</code></span> 2+2...</p>",
                options: [
                    { id: "lenguaje_yes", option: "4." }
                ]
            },
            {
                id: "lenguaje_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—El lenguaje natural...</p>",
                options: [
                    { id: "humano_no", option: "El lenguaje natural es de la naturaleza." },
                    { id: "humano_yes", option: "El lenguaje natural es solo uno. Todas las voces se unifican en él." }
                ]
            },
            {
                id: "humano_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Incorrecto.</code></span>\
                <p>—El ser humano...</p>",
                options: [
                    { id: "humanidad_no", option: "Todos somos humanos." },
                    { id: "humanidad_yes", option: "El ser humano controla su propia evolución. Puede ser tan fuerte, e inteligente como lo desee." }
                ]
            },
            {
                id: "humano_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—El ser humano...</p>",
                options: [
                    { id: "humanidad_no", option: "Todos somos humanos." },
                    { id: "humanidad_yes", option: "El ser humano controla su propia evolución. Puede ser tan fuerte, e inteligente como lo desee." }
                ]
            },
            {
                id: "humanidad_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Incorrecto.</code></span>\
                <p>—La humanidad...</p>",
                options: [
                    { id: "sustento_yes", option: "La humanidad se expande, conquistando otros planetas y aumentando las posibilidades de supervivencia." },
                    { id: "sustento_no", option: "La humanidad está hecha de humanos." }]
            },
            {
                id: "humanidad_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—La humanidad...</p>",
                options: [
                    { id: "sustento_yes", option: "La humanidad se expande, conquistando otros planetas y aumentando las posibilidades de supervivencia." },
                    { id: "sustento_no", option: "La humanidad está hecha de humanos." }]
            },
            {
                id: "sustento_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Incorrecto.</code></span>\
                <p>—El sustento...</p>",
                options: [
                    {
                        id: "mandibula_yes", option: "El sustento llega a mí, no es necesario que vaya a buscarlo, solo debo seguir aportando a \
                    la sociedad con mi existencia para recibirlo." },
                    { id: "mandibula_no", option: "El sustento es comida.", }]
            },
            {
                id: "sustento_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—El sustento...</p>",
                options: [
                    {
                        id: "mandibula_yes", option: "El sustento llega a mí, no es necesario que vaya a buscarlo, solo debo seguir aportando a \
                    la sociedad con mi existencia para recibirlo." },
                    { id: "mandibula_no", option: "El sustento es comida.", }]
            },
            {
                id: "mandibula_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Incorrecto.</code></span>\
                <p>—La mandíbula...</p>",
                options: [
                    { id: "cubiculo_yes", option: "La mandíbula de un tiburón blanco puede albergar cerca de 3 mil dientes distribuidos en 5 hileras." },
                    { id: "cubiculo_no", option: "La mandíbula está en la boca." }]
            },
            {
                id: "mandibula_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—La mandíbula...</p>",
                options: [
                    { id: "cubiculo_yes", option: "La mandíbula de un tiburón blanco puede albergar cerca de 3 mil dientes distribuidos en 5 hileras." },
                    { id: "cubiculo_no", option: "La mandíbula está en la boca." }]
            },
            {
                id: "cubiculo_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Incorrecto.</code></span>\
                <p>—El cubículo...</p>",
                options: [
                    { id: "mundo_yes", option: "El cubículo me protege." },
                    { id: "mundo_no", option: "Un cubículo es un cuadra\'o." }
                ]
            },
            {
                id: "cubiculo_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—El cubículo...</p>",
                options: [
                    { id: "mundo_yes", option: "El cubículo me protege." },
                    { id: "mundo_no", option: "Un cubículo es un cuadra\'o." }
                ]
            },
            {
                id: "mundo_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Incorrecto.</code></span>\
                <p>—El mundo...</p>",
                options: [
                    { id: "paz_yes", option: "El mundo es mío, puedo crear en él lo que sea. Siempre y cuando lo haga en el espacio designado para mí." },
                    { id: "paz_yes1", option: "El mundo es mi hogar." }
                ]
            },
            {
                id: "mundo_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—El mundo...</p>",
                options: [
                    { id: "paz_yes", option: "El mundo es mío, puedo crear en él lo que sea. Siempre y cuando lo haga en el espacio designado para mí." },
                    { id: "paz_yes1", option: "El mundo es mi hogar." }
                ]
            },
            {
                id: "paz_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—La paz...</p>",
                options: [
                    { id: "mitocondrias_yes", option: "La paz reina, el conflicto es innecesario." },
                    { id: "mitocondrias_no", option: "La paz nunca existirá." }
                ]
            },
            {
                id: "paz_yes1",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—La paz...</p>",
                options: [
                    { id: "mitocondrias_yes", option: "La paz reina, el conflicto es innecesario." },
                    { id: "mitocondrias_no", option: "La paz nunca existirá." }
                ]
            },
            {
                id: "mitocondrias_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Incorrecto.</code></span>\
                <p>—Las mitocondrias...</p>",
                options: [
                    { id: "muerte_yes", option: "Las mitocondrias de una célula eucariota se encuentran en el citoplasma." },
                    { id: "muerte_no", option: "Las mitocondrias... Algo de biología." }]
            },
            {
                id: "mitocondrias_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—Las mitocondrias...</p>",
                options: [
                    { id: "muerte_yes", option: "Las mitocondrias de una célula eucariota se encuentran en el citoplasma." },
                    { id: "muerte_no", option: "Las mitocondrias... Algo de biología." }]
            },
            {
                id: "muerte_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Incorrecto.</code></span>\
                <p>—La muerte...</p>",
                options: [
                    { id: "mentira", option: "La muerte es opcional." },
                    { id: "mentira1", option: "La muerte es opcional.", }]
            },
            {
                id: "muerte_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—La muerte...</p>",
                options: [
                    { id: "mentira", option: "La muerte es opcional." },
                    { id: "mentira1", option: "La muerte es opcional.", }]
            },
            {
                id: "mentira",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—La mentira...</p>",
                options: [
                    { id: "pobreza", option: "La mentira no puede existir cuando la lógica es el camino." },
                    { id: "pobreza1", option: "La mentira nos protege del dolor." }
                ]
            },
            {
                id: "mentira1",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—La mentira...</p>",
                options: [
                    { id: "pobreza", option: "La mentira no puede existir cuando la lógica es el camino." },
                    { id: "pobreza1", option: "La mentira nos protege del dolor." }
                ]
            },
            {
                id: "pobreza",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—La pobreza...</p>",
                options: [
                    { id: "gobierno_yes", option: "La pobreza no existe, en el sistema todos somos ricos." },
                    { id: "gobierno_no", option: "Es que es pobre es porque quiere." }]
            },
            {
                id: "pobreza1",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—La pobreza...</p>",
                options: [
                    { id: "gobierno_yes", option: "La pobreza no existe, en el sistema todos somos ricos." },
                    { id: "gobierno_no", option: "Es que es pobre es porque quiere." }]
            },
            {
                id: "gobierno_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Incorrecto.</code></span>\
                <p>—El gobierno...</p>",
                options: [
                    { id: "completado", option: "El gobierno no existe. Esto es Tecno<sub style=\"font-size:60%\">TOPIA</sub>.", }]
            },
            {
                id: "gobierno_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—El gobierno...</p>",
                options: [
                    { id: "completado", option: "El gobierno no existe. Esto es Tecno<sub style=\"font-size:60%\">TOPIA</sub>.", }]
            },
            {
                id: "completado",
                text: "<p>—De acuerdo, <span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Análisis psicológico y social completado</code></span>.</p>",
                options: []
            },
        ]
    }
]

const screenMapper = (game, screens) => {
    let currentGame = [...game.data.filter(screen => screens.includes(screen.id))].sort(function (a, b) {
        return screens.indexOf(a.id) - screens.indexOf(b.id);
    });
    return { id: game.id, title: game.title, htmlFlag: game.html, data: currentGame }
}

module.exports = {
    getGame: function (id) {
        for (const game of games) {
            if (game.id === id) {
                return game;
            }
        }
        return null;
    },
    getGameByScreens: function (id, screens) {
        for (const game of games) {
            if (game.id === id) {
                return screenMapper(game, screens);
            }
        }
        return null;
    }
};

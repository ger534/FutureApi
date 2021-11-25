const games = [
    {
        id: "terms_and_conditions",
        title: "Términos y condiciones",
        html: true,
        exam: true,
        
        data: [
            {
                id: "start",
                text: "<p>Bienvenido. Le tengo buenas noticias. Usted está vivo y está aquí, ahora mismo. El análisis fisiológico indica\
                que\
                su recipiente actual es fuerte y está sano, y los resultados de su informe de bienestar\
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
                    { id: "mundo_no", option: "Un cubículo es un <em>cuadrao</em>." }
                ]
            },
            {
                id: "cubiculo_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—El cubículo...</p>",
                options: [
                    { id: "mundo_yes", option: "El cubículo me protege." },
                    { id: "mundo_no", option: "Un cubículo es un <em>cuadrao</em>." }
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
                    { id: "calificacion", option: "El gobierno no existe. Esto es Tecno<sub style=\"font-size:60%\">TOPIA</sub>.", }]
            },
            {
                id: "gobierno_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                <p>—El gobierno...</p>",
                options: [
                    { id: "calificacion", option: "El gobierno no existe. Esto es Tecno<sub style=\"font-size:60%\">TOPIA</sub>.", }]
            },
            {
                id: "calificacion",
                //text: "",
                options: [
                    { id: "completado", option: "Comenzar \"Hola Mundo\".", noShow: true }]
            },
            {
                id: "completado",
                text: "<p>—De acuerdo, <span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Análisis psicológico y social completado</code></span>.</p>",
                options: []
            },
        ]
    },
    {
        id: "hello_world_1",
        title: "Hola, mundo: Alerta en la Tierra",
        html: true,
        data: [
            {
                id: "start",
                text: "<p>La tecnología le ha permitido a la humanidad visualizar el alba de la colonización interplanetaria. Ahora el humano está en un segundo plano, \
                disfrutando del piloto automático que controla su destino. Sin embargo, es importante que siempre haya alguien quien vigile el sistema.\
                En el viejo mundo, por ejemplo, la mayoría de la población vive en un paraíso virtual dentro de la comodidad de sus casas-puerto y\
                sin preocuparse de su entorno físico. Pero detrás de esa calma impoluta existe una red de mantenimiento que se encarga salvaguardar \
                la arquitectura que hace posibles los metaversos de la ciudadanía. Mientras cierta persona sueña que gana la lotería todas las mañanas o \
                que es famosa y amada por toda la humanidad, un grupo de especialistas velan que no sucedan eventos extraordinarios que obstruyan \
                con el funcionamiento habitual de la utopía tecnológica. \
                </p>\
                \
              <p>Las tareas de soporte son de vital importancia y, por lo tanto, las estaciones de trabajo están distribuídas a lo\
                largo del globo terrícola. La comunicación entre estos clústers está reservada para incidentes de máximo nivel,\
                donde es necesaria la cooperación de multiples nodos de mantenimiento o incluso, en ocasiones especiales, para notificar a toda la red. \
                Existe un robusto y detallado manual que todos los monitores tienen grabados en su memoria y que les permite ejecutar sus tareas y saber qué\
                procedimientos seguir según cada situación. Sin embargo, los monitores, después de todo, siguen siendo humanos y aun si \
                conocen a la perfección lo que deben hacer, puede suceder en raras ocasiones que los hechos les parezcan insólitos.</p>\
                \
                <p class=\"dialog\">—<i>Red alarm, level 5, alien attack</i>—. Y el contador anuncia: T-MINUS 3600.</p>\
                \
                <p>Hasta este momento, ni Dios ni los alienígenas se habían vuelto visibles en la inmensidad del universo, pero esto\
                parecía haber cambiado en un santiamén. Fue imperativo desplegar la aeronave más rápida. No tenía mucho armamento\
                ni espacio. Espacio único para un tripulante, el piloto 305. La curiosidad lo lanzó tan rápido al volante que no\
                se cuestionó lo irracional de su misión. Si luego de tantos años de avances tecnológicos un objeto volador no\
                identificado había sido capaz de penetrar, no solo el sistema solar, sino la atmósfera de la Tierra y además, sin\
                ser detectado hasta el momento de tocar la integridad de los metaversos, definitivamente un monitor, \
                alguien que suele trabajar en labores de mantenimiento, no lo iba a neutralizar con un par de cañones de plasma.</p>\
                <p>El GPS dicta: <i>Turn right.</i> ▶️</p>",
                options: [
                    { id: "izquierda", option: "🚀 Girar a la izquierda ◀️.", noShow: true },
                    { id: "derecha", option: "🚀 Girar a la derecha ▶️.", noShow: true },
                ]
            },
            {
                id: "izquierda",
                text: "<p>305, sin prestar mucha atención a las instrucciones y tal vez aturdido por la noticia, decidió no tomar en consideración la ruta sugerida por\
                el Sistema de Posicionamiento Global, y en cambio se dirige en dirección contraria al sitio del incidente. Siguiendo este rumbo, 305 tiene la oportunidad de \
                visualizar desde las alturas las grandes aglomeraciones de casas-puerto que se propagan por toda la árida superficie terrestre.\
                </p> \
                \
                <p class=\"dialog\">—<i>Red alarm, level 5, alien attack</i>—. Y el contador anuncia: T-MINUS 3600.</p>\
                \
                <p>El GPS dicta: <i>Please, turn around.</i> ↩️</p>",
                options: [
                    { id: "derecha", option: "🚀 Retomar la ruta inicial ↩️.", noShow: true },
                    { id: "mantener", option: "🚀 Mantener rumbo 🔼.", noShow: true },
                ]
            },
            {
                id: "mantener",
                text: "<p>Aún sin entrar en personaje, 305 mantuvo el rumbo equivocado. Si no cambiaba de sentido pronto, la aeronave tendría que orbitar gran parte del planeta\
                antes de acercarse al punto de interés, lo que comprometería el interés público de mitigar cualquier inconveniente en la infraestructura de los metaversos lo antes posible. \
                Desde la base, otros monitores comenzaron a consternarse debido sus decisiones erráticas y le advirtieron tomar con seriedad su rol \
                en la perfecta maquinaria que, como un reloj bien ensamblado, mantiene el bienestar social. También se encendió una pantalla en el interior del visor de su traje, la cual comenzó a \
                proyectar en una lengua perdida, el protocolo que debía seguirse en caso de \"<code><i>Red alarm, \
                level 5, alien attack</i></code>\", a pesar de que ya se lo sabía de memoria.\
                <ul>\
                <li>Diríjase a la zona del presunto impacto e inspeccione el lugar.</li>\
                <li>Verifique que los sensores del centinela en cuestión estén en correcto funcionamiento. Eventos a nivel cuántico pueden descalibrar estos instrumentos.\
                También observe con detenimiento sus alrededores y active el mecanismo de defensa más agresivo que tenga a disposición.\
                </li>\
                <li>En caso de falsa alarma, desactive la alarma. Si la alarma no es desactivada en menos de <code>3600 ms</code> desde su disparo, ya sea por \
                muerte del monitor o por negligencia, el Muro de Fuego lanzará un ataque fulminante contra el planeta Tierra.</li>\
                \
                <li>Antes que la amenaza alienígena exprese un comportamiento hostil y tirano, la humanidad terrícola está dispuesta a la inmolar su especie \
                en nombre de la Libertad. No seremos subyugados por seres que se autoproclaman superiores a nosotros, en hechos o en palabras. \
                </ul>\
                Mientras esto sucedía, el vehículo comenzó a estremecerse. Entre la súbita turbulencia, por un instante le pareció escuchar un ruido\
                inusual, una especie de graznido.\
                </p> \
                <p>El GPS dicta: <span style=\"background-color:red\"><strong>TURN AROUND.</strong> ↩️</span></p>",
                options: [
                    { id: "derecha", option: "🚀 Dirigirse al sitio del incidente ↩️.", noShow: true },
                    { id: "explosion_nave_tierra", option: "No." },
                ]
            },
            {
                id: "explosion_nave_tierra",
                text: "<p>De imprevisto, la máquina que tripulaba 305 se quedó inmóvil y luego comenzó a perder altitud cada vez más rápido en dirección a la Tierra.\
                El monitor, que hasta el momento había tomado decisiones poco sabias, rompió la racha al activar el mecanismo de eyección, el cual lo lanzó disparado de la nave. \
                Lo que segundos antes era su medio de transporte quedó desintegrado por el sistema anticolisiones de las casas-puerto. \
                El atuendo que portan los monitores es el instrumento de defensa y control más poderoso que posee el gremio. Entre sus cualidades, posee la virtud de ser una\
                armadura virtualmente indestructible.\
                Gracias a su traje de seguridad, 305 no sufrió ningún daño.\
                <p>—<i>305, we have already deploy another monitor, 301, to take care of the alarm. We will discuss your behavior later, in the base, for now, just stay still 🕒, \
                we are sending 304 in another ship to take you home</i>.</p>\
                </p>",
                options: [
                    { id: "esperar", option: "Esperar 🕒.", noShow: true },
                    { id: "alrededores", option: "Mirar los alrededores.", noShow: true },
                ]
            },
            {
                id: "esperar",
                text: "<p>305 decidió tomar asiento y esperar que su colega viniera al punto de extracción. Luego comenzó a pensar. \
                <i>Muerte del monitor</i>... El protocolo de los monitores tiene 18.500 palabras, y esta entrada es la única vez donde se utiliza la palabra \"muerte\". \
                Su creencia siempre había sido que la vida en la Tierra es un paraíso, no un cementerio. Incluso si ya sabía que un incidente así podía pasar... El monitor nunca evaluó la autenticidad\
                probabilística de la idea. La premisa en general le parecía absurda. Tendría más sentido que los colonizadores interespaciales se toparan con vida inteligente \
                en sus exploraciones y conquistas. Tampoco le parecía posible que nada ni nadie fuera capaz de burlar la seguridad de El Muro de Fuego, el protector doméstico y espacial de los terrícolas. \
                Su súbita actitud rebelde nacía de la completa negación de una amenaza alienígena. Incluso si los sensores de un centinela de la infraestructura \
                metavérsica decía que era así. Primero había que cerciorarse que la máquina en cuestión estuviera en correcto funcionamiento. Aúnque había aludido la labor,\
                305 sabía que alguien apersonarse en el lugar y verificar la situación. Algunas soluciones requieren del factor humano.\
                Mientras seguía meditando, le llamó la atención ver un puñado de manchas blancas en el horizonte. Las partículas eran minúsculas, pero negaban a permanecer estáticas, al contrario, oscilaban sin armonía. \
                </p> ",
                options: [
                    { id: "esperar_2", option: "Consultar sobre el estado de la alarma.", noShow: true },
                    { id: "alrededores", option: "Investigar el avistamiento.", noShow: true },
                ]
            },
            {
                id: "esperar_2",
                text: "<p>Utilizando el intercomunicador de su traje, consultó sobre la amenaza alienígena al clúster. Luego de unos segundos de ruido blanco e incertidumbre, \
                los monitores le comentaron que 304 había descartado la situación como verdadera y que estaba a punto de desactivar la alarma. Segundos después llegó la notificación.</p>\
                \
                <p class=\"dialog\">—FALSE ALARM. No red alarm, level 5, alien attack. FALSE ALARM. No red alarm, level 5, alien attack. </p>\
                \
                <p>Mientras sentía un profundo alivio, el monitor cayó en cuenta de que aquellas manchas que había visto en la lejanía, ahora se posaban delante de él.</p>\
                \
                <p class=\"dialog\">—feathers!? dijo para sí mismo. Sabía que eran plumas, pero encontrárselas en un punto aleatorio de la Tierra y de manera fortuita le parecía increíble.\
                </p>\
                \
                <p>Todo infante considerado parte de la sociedad debe pasar sus primeros 5 años de vida en un almacén educativo. En\
                estos lugares, los retoños reciben una instalación de enciclopedias por medio de ondas cerebrales. Nunca verán en\
                el mundo real la gran mayoría de conceptos que aprenden durante su vida lectiva, pero es conocimiento que no se\
                borrará, siempre y cuando se le dé el mantenimiento adecuado al órgano encefálico.</p>\
                \
                <p>De esta manera, 305 sabía qué eran las plumas, sabía de dónde venían y el uso que tuvieron en sociedades\
                rudimentarias de unos antiguos ancestros, conocidos como <em>homo sapiens sapiens</em>. Pero jamás en su vida\
                pensó que se las encontraría en medio de la nada, la nada que queda si se descarta del paisaje las casas-puerto. Ni siquiera había pensado que\
                pensaría en ello algún día. Nunca había pensado que nunca vería una mariposa, o un conejo o un dragón. De haber\
                sentido la necesidad de dar un paseo por la historia animal, habría entrado a su propio metaverso e imaginado lo\
                que quería ver. O incluso, si le daba pereza, podía simplemente ingresar en algún metaverso público empleado a modo de museo, o algún metarverso del\
                almacén educativo. Pero nunca hubo un deseo en hacerlo.Y ahora, en la más extraña de las situaciones, plumas.</p>",
                options: [
                    { id: "plumas_techos", option: "Tomar las plumas.", noShow: true },
                    { id: "no_plumas_techos", option: "No tomar las plumas.", noShow: true },
                ]
            },
            {
                id: "alrededores",
                text: "<p>La eyección había lanzado al monitor a la cima de una torre de casas-puerto. Estas colosales pilas de hogares tomaban la forma de \
                enormes rascacielos, que no son solo grandes en la superficie sino, simulando a los extintos árboles, también se extienden debajo de la tierra. Prácticamente todo el espacio\
                habitable está cubierto por estas viviendas especialmente diseñadas como puertos de conexión a la tecnología que le permite a los ciudadanos del viejo mundo \
                utilizar los metaversos, ya sea de manera individual o colectiva. Ahora 305 se encontraba recorriendo los techos de estas edificaciones. Afuera de las casas, por supuesto que no \
                había ningún otro humano, después de todo, el territorio es hostil y la indumentaria para estar en el exterior no es necesariamente cómoda.</p>\
                Mientras caminaba, 304 notificó la desactivación de la alarma.\
                <p class=\"dialog\">—FALSE ALARM. No red alarm, level 5, alien attack. FALSE ALARM. No red alarm, level 5, alien attack. </p>\
                \
                <p>Mientras sentía un profundo alivio, el monitor se topó con un hallazgo particular: plumas, las cuales se movían de manera caótica gracias a los ínfimos vientos de la Tierra.</p>\
                \
                <p class=\"dialog\">—feathers!? dijo para sí mismo. Sabía que eran plumas, pero encontrárselas le parecía increíble.\
                </p>\
                \
                <p>Todo infante considerado parte de la sociedad debe pasar sus primeros 5 años de vida en un almacén educativo. En\
                estos lugares, los retoños reciben una instalación de enciclopedias por medio de ondas cerebrales. Nunca verán en\
                el mundo real la gran mayoría de conceptos que aprenden durante su vida lectiva, pero es conocimiento que no se\
                borrará, siempre y cuando se le dé el mantenimiento adecuado al órgano encefálico.</p>\
                \
                <p>De esta manera, 305 sabía qué eran las plumas, sabía de dónde venían y el uso que tuvieron en sociedades\
                rudimentarias de unos antiguos ancestros, conocidos como <em>homo sapiens sapiens</em>. Pero jamás en su vida\
                pensó que se las encontraría en medio de la nada, la nada que queda si se descarta del paisaje las casas-puerto. Ni siquiera había pensado que\
                pensaría en ello algún día. Nunca había pensado que nunca vería una mariposa, o un conejo o un dragón. De haber\
                sentido la necesidad de dar un paseo por la historia animal, habría entrado a su propio metaverso e imaginado lo\
                que quería ver. O incluso, si le daba pereza, podía simplemente ingresar en algún metaverso público empleado a modo de museo, o algún metarverso del\
                almacén educativo. Pero nunca hubo un deseo en hacerlo.Y ahora, en la más extraña de las situaciones, plumas.</p>",
                options: [
                    { id: "plumas_techos", option: "Tomar las plumas.", noShow: true },
                    { id: "no_plumas_techos", option: "No tomar las plumas.", noShow: true },
                ]
            },
            {
                id: "plumas_techos",
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
                blasfemia. Religiones y dragones, \"🙄\", pensó. Justo en ese momento, visualizó desde la lejanía la nave de transporte a cargo de 301,\
                quién venía a llevarlo de nuevo a la base. Cuando su colega abrió la compuerta trasera para que 305 tomara asiento, \
                se encontró con que su puesto ya estaba ocupado por un gran ganso desplegando sus alas a lo ancho. Apenas si podía creerlo. \
                Le fue necesario limpiar rápidamente el visor de su traje para cerciorarse de que no estaba alucinando.</p>\
                \
                <p class=\"dialog\">—A goose…? But how?—se dijo a sí mismo, intentando procesar la información.</p>\
                \
                <p>Y ahí estaba, delante de él. Mentalmente\
                recorrió todos los protocolos de seguridad pero no pudo rescatar nada que explicara cómo proceder en caso de\
                anátida. Analizó si debía consultar a su colega sobre el ave.</p>",
                //, la prueba fehaciente del correcto funcionamiento de los sensores aéreos del\
                //centinela. Y lo inaudito, el objeto volador no identificado resulta ser un enorme y blanco ganso
                options: [
                    { id: "notificar", option: "Preguntar por el ganso.", noShow: true },
                    { id: "notificar_luego", option: "No decir nada.", noShow: true },
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
                    { id: "meditar", option: "Meditar por un momento.", noShow: true },
                ]
            },
            {
                id: "meditar",
                text: "<p>305 decidió meditar por un momento sobre la situación en la que se hallaba. En el momento que decidiera salir de su vehículo e \
                investigar la amenazaba de seres inteligentes sin descendencia humana, su vida estaría en peligro. Para mantener la calma, comenzó a recitar, \
                utilizando una lengua perdida en el tiempo, la sección del protocolo donde se estipula como se debe actuar en caso de \"<code>Red alarm, level 5, alien attack.</code>\".</p>\
                <ul>\
                <li>Diríjase a la zona del presunto impacto e inspeccione el lugar.</li>\
                <li>Verifique que los sensores del centinela en cuestión estén en correcto funcionamiento. Eventos a nivel cuántico pueden descalibrar estos instrumentos.\
                También observe con detenimiento sus alrededores y active el mecánismo de defensa más agresivo que tenga a disposición.\
                </li>\
                <li>En caso de falsa alarma, desactive la alarma. Si la alarma no es desactivada en menos de <code>3600 ms</code> desde su disparo, ya sea por \
                muerte del monitor o por negligencia, El Muro de Fuego lanzará un ataque fulminante contra el planeta Tierra.</li>\
                \
                <li>Antes que la amenaza alienígena exprese un comportamiento hostil y tirano, la humanidad terrícola está dispuesta a la inmolar su especie \
                en nombre de la Libertad. No seremos subyugados por seres que se autoproclaman superiores a nosotros, en hechos o en palabras. \
                </ul>\
                <i>Muerte del monitor</i>... El protocolo de los monitores tiene 18.500 palabras, y esta entrada es la única vez donde se utiliza la palabra \"muerte\". \
                Su creencia siempre había sido que la vida en la Tierra es un paraíso, no un cementerio. Incluso si ya sabía que un incidente así podía pasar... El monitor nunca evaluó la autenticidad\
                probabilística de la idea. La premisa en general le parecía absurda. Tendría más sentido que los colonizadores interespaciales se toparan con vida inteligente \
                en sus exploraciones y conquistas. Tampoco le parecía posible que nada ni nadie fuera capaz de burlar la seguridad de El Muro de Fuego, el protector doméstico y espacial de los terrícolas. \
                Pero 305 sabía que antes de sobrepensar la circunstancia y dar todo por pérdido, alguien apersonarse en el lugar y verificar la situación. Toda la especie había decidido \
                miles de años atrás dejar el destino de la raza en las manos de un solo humando. . Y en esta ocasión, él es ese humano.\
                </p>",
                options: [
                    { id: "llegada", option: "Verificar el estado de la situación.", noShow: true },
                    { id: "boom_discardable", option: "Dejar que el contador llegue a cero.", noShow: true },
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
                Su comportamiento errático e insubordinado hizo que su transmisor comenzara a chorrear toda clase de advertencias y represalias. No solo sus compañeros en el nodo de monitores estaban\
                confundidos y molestos con él, también era posible percibir un comunicado por parte de El Muro de Fuego.  El visor de su traje comenzó a \
                proyectar en una lengua pérdida, el protocolo que debía seguirse en caso de \"<code>Red alarm, level 5, alien attack.</code>\", a pesar de que ya se lo sabía de memoria.\
                <ul>\
                <li>Diríjase a la zona del presunto impacto e inspeccione el lugar.</li>\
                <li>Verifique que los sensores del centinela en cuestión estén en correcto funcionamiento. Eventos a nivel cuántico pueden descalibrar estos instrumentos.\
                También observe con detenimiento sus alrededores y active el mecánismo de defensa más agresivo que tenga a disposición.\
                </li>\
                <li>En caso de falsa alarma, desactive la alarma. Si la alarma no es desactivada en menos de <code>3600 ms</code> desde su disparo, ya sea por \
                muerte del monitor o por negligencia, El Muro de Fuego lanzará un ataque fulminante contra el planeta Tierra.</li>\
                \
                <li>Antes que la amenaza alienígena exprese un comportamiento hostil y tirano, la humanidad terrícola está dispuesta a la inmolar su especie \
                en nombre de la Libertad. No seremos subyugados por seres que se autoproclaman superiores a nosotros, en hechos o en palabras. \
                </ul>\
                Mientras esto sucedía, el vehículo comenzó a estremecerse. </p> \
                \
                <p>El GPS dicta: <span style=\"background-color:red\"><strong>LOWER YOUR ALTITUDE.</strong> 🔽</span></p>",
                options: [
                    { id: "explosion_nave_luna", option: "No." },
                    { id: "descender", option: "descender 🔽.", noShow: true },
                ]
            },
            {
                id: "explosion_nave_luna",
                text: "<p>De imprevisto, la máquina que tripulaba 305 se quedó inmóvil y luego comenzó a descender, cada vez más rápido, en dirección a la Tierra.\
                El monitor, que hasta el momento había tomado decisiones poco sabías, activó el mecánismo de eyección y salió disparado de la nave. Lo que segundos antes era\
                su medio de transporte, quedó desintegrado por El Muro de Fuego, como represalia por acercarse demasiado a un espacio restringido. \
                El atuendo que portan los monitores es el instrumento de defensa y control más poderoso que posee el gremio. Entre sus cualidades, posee la virtud de ser una\
                armadura virtualmente indestructible. Gracias a su traje de seguridad, a pesar de caer más de ocho mil metros, el monitor no sufrió ningún daño. \
                Ahora, habiendo caído desde el cielo, se encontraba cerca de la zona del incidente.</p>\
                \
                <p>—We are sending another ship for you 🚀 and we will discuss your behavior later in the base 🛐. For now, <strong>take care of the alarm</strong>.</p>",
                options: [
                    { id: "llegada", option: "Hacerse cargo de la alarma.", noShow: true },
                    { id: "boom_discardable", option: "Dejar que el contador llegue a cero.", noShow: true },
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
                    { id: "no_aliens", option: "Nada que reportar. Apagaré la alarma", noShow: true },
                    { id: "boom_discardable", option: "No apagaré la alarma." },
                ]
            },
            {
                id: "boom_discardable",
                text: "<p>Contra todo pronóstico y sin dar ninguna explicación, 305 decidió quitarse el casco y cerrar los ojos mientras esperaba el impacto. Los monitores saturaron todos los canales de comunicación \
                con gritos y discursos, tratando de encontrar una solución a este imperdonable acto de rebeldía. Pero era demasiado tarde.\
                </p>",
                discardable: "fin_no",
                options: [
                    { id: "fin_no", option: "Fin" },
                    { id: "restart", option: "Volver a empezar." },
                ]
            },
            {
                id: "fin_no",
                text: "<p>305 decidió quitarse el casco y cerrar los ojos mientras esperaba el impacto. Los monitores saturaron todos los canales de comunicación \
                con gritos y discursos, tratando de encontrar una solución a este imperdonable acto de rebeldía. Pero era demasiado tarde.\
                <p style='text-align:center'><strong>FIN</strong></p> \
                </p>",
                options: [
                    { id: "restart", option: "¿Volver a empezar?" },
                ]
            },
            {
                id: "no_aliens",
                text: "<p class=\"dialog\">—Nothing to report. I will check the area and then I will turn off the alarm. Over and out. —Segundos después, el mensaje se propagó por toda la red.</p>\
                <p class=\"dialog\">—FALSE ALARM. No red alarm, level 5, alien attack. FALSE ALARM. No red alarm, level 5, alien attack. </p>\
                \
                <p>Había apagado la alarma y sin embargo, por dentro una amalgama de sensaciones\
                extrañas le invadía. Podría decir que incluso sentía decepción de no haber encontrado nada. Pero justo cuando estaba apunto de marcharse, notó \
                algo que segundos antes no estaba ahí, un material peculiar posando sobre el centinela.</p>\
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
                pensó que se las encontraría sobre un centinela. Ni siquiera había pensado que\
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
                blasfemia. Religiones y dragones. De manera automática, caminó hasta la\
                nave y retornó a su posición de piloto. Cerró la cabina y se preparó para despejar cuando, un graznido que le\
                pareció rebotar por todo el interior de su cráneo, lo interrumpió. Se dio la vuelta en su asiento y revisó el\
                interior de la pequeña nave, mas no encontró ningún intruso. Al volver su vista al frente se encontró con un gran\
                ganso desplegando sus alas a lo ancho. Apenas si podía creerlo. Le fue necesario limpiar rápidamente el visor de\
                su traje para cerciorarse de que no estaba alucinando.</p>\
                \
                <p class=\"dialog\">—A goose…? 🦢 But how?—se dijo a sí mismo, intentando procesar la información.</p>\
                \
                <p>Y ahí estaba, delante de él, la prueba fehaciente del correcto funcionamiento de los sensores aéreos del\
                centinela. Y lo inaudito, el objeto volador no identificado resulta ser un enorme y blanco ganso. Mentalmente\
                recorrió todos los protocolos de seguridad pero no pudo rescatar nada que explicara cómo proceder en caso de\
                anátida. Analizó si debía contarle a sus colegas sobre el hallazgo, pero la situación le pareció tan estrafalaria\
                que no sabía siquiera cómo podría explicarla.</p>",
                //solo la idea de explicarla le generó un repulsión enorme y el deseo de postergar lo inevitable
                options: [
                    { id: "notificar_luego", option: "Notificarlo luego.", noShow: true },
                    { id: "notificar", option: "Intentar explicar el hallazgo.", noShow: true },
                ]
            },
            {
                id: "notificar",
                text: "<p>Mantuvo la línea de trasmisión abierta por varios segundos pero no encontró las palabras decir lo que quería decir. \
                Sin embargo, esta acción fue suficiente para advertir a sus receptores. Desde el otro lado de la línea, le preguntaron si había algo que reportar \
                Tartamudeando, rasgo impensable es el carácter de un monitor, intentó explicar como un ganso se había consumado en el interior de su cabina. \
                La respuesta fue confusión e incredulidad. \
                <p>—Just come to the base 🛐. We can discuss it here.</p>\
                \
                La cabina era impenetrable, así que mientras la nave estuviera cerrada nada debía ser capaz de entrar o salir. Sin embargo, el ganso parecía haber demostrado que era capaz de teletransportarse. \
                A pesar de este riesgo, 305 se mentalizó con la idea de que si podía aguantar el viaje de regreso con el ganso, podría desplazar el problema hasta llegar a la base. \
                Remover el ave del panel de control provocó una lluvia de picotazos sobre el monitor, por dicha, su traje de seguridad es virtualmente indestructible y lo protegió \
                con vehemencia del ataque. Con dificultad, colocó el ganso detrás de su asiento y emprendió su viaje de retorno a la estación.</p>\
                \
                <p>Apenas entrando al hangar, uno de sus colegas le dijo que se apresurara a la sala de conferencias, pues El Muro de Fuego\
                debía hacer la respectiva evaluación de la situación y su testimonio era clave. Tratando de\
                quitarse con rapidez el cinturón de seguridad, se notaba disperso e intentando recolectar y ensamblar la\
                información de manera clara y concisa. Los fluorescentes que iluminaban los largos pasillos de manera sistemática le mareaban. No sé sentía bien. \
                Su malestar era visible y apestaba. \
                Cuando llegó a la habitación, su aspecto era tal que toda la sala decidió que la platica debía ser postergada debido a la indisposición del individuo.</p>",
                options: [
                    { id: "mostrar_ganso", option: "Resistir la decisión.", noShow: true },
                    { id: "hola_mundo_1_completado", option: "Ir a descansar.", noShow: true },
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
                información de manera clara y concisa. Los fluorescentes que iluminaban los largos pasillos de manera sistemática le mareaban. No sé sentía bien.\
                 Su malestar era visible y apestaba. \
                Cuando llegó a la habitación, su aspecto era tal que toda la sala decidió que la platica debía ser postergada debido a la indisposición del individuo.</p>",

                options: [
                    { id: "mostrar_ganso", option: "Resistir la decisión.", noShow: true },
                    { id: "hola_mundo_1_completado", option: "Ir a descansar.", noShow: true },
                ]
            },
            {
                id: "mostrar_ganso",
                text: "<p>305 trato de revocar la resignación de sus colegas. Delante de ellos y de los representantes de El Muro, explicó la \
                situación lo mejor que pudo. Incluso mostró la evidencia de las plumas, sin embargo, la perplejidad y la\
                incredulidad de los oyentes era palpable y tan sólida como el metal que constituía la base de mantenimiento. \
                El colmo fue cuando el monitor salió corriendo hacia el hangar, vociferando que en la cabina todavía estaba el ganso, solo para encontrarse con una\
                nave vacía, sin un solo rastro del ave. Se le dio la orden de tomarse un descanso.</p>",
                //Delante de sus colegas y de los representantes de El Muro, explicó la
                //situación lo mejor que pudo. Incluso mostró las plumas como evidencia, sin embargo, la perplejidad y la
                //incredulidad de los oyentes era palpable y tan sólida como el metal que constituía la base de mantenimiento.</p>
                options: [
                    { id: "hola_mundo_1_completado", option: "Ir a descansar.", noShow: true },
                ]
            },
            {
                id: "no_plumas",
                text: "<p>Se abstuvo de tomar el material con sus manos, sin embargo, el hallazgo era tan impresionante que no podía dejar pasar la oportunidad de \
                escanearlo. Mientras lo hacía, en 305 crecía un discrepante deseo por descubrir sus manos e inspeccionar las plumas.\
                Tenía mucha curiosidad. Nunca había tocado una pluma, conocía sus usos y las miles de formas y colores que podían tener, pero\
                nunca había tocado una, no en el mundo real. Pero, incluso si parecía solo un inofensivo puñado de vestimenta ovípara, el mero hecho de que estuviera al aire \
                libre en una atmósfera hostil era suficiente para sospechar que la situación tal vez era más compleja de lo que aparentaba a simple vista. \
                La actualidad no permitía ningún tipo de vida silvestre en la Tierra.\
                Quizá el centinela que había disparado la alarma si había captado algo inusual. </p>\
                <p> Mientras consideraba el extraño descubrimiento y qué debería hacer, caminó en automático hasta la\
                nave y retornó a su posición de piloto. Cerró la cabina y se preparó para despejar cuando, un graznido que le\
                pareció rebotar por todo el interior de su cráneo, lo interrumpió. Se dio la vuelta en su asiento y revisó el\
                interior de la pequeña nave, mas no encontró ningún intruso. Al volver su vista al frente se encontró con un gran\
                ganso desplegando sus alas a lo ancho. Apenas si podía creerlo. Le fue necesario limpiar rápidamente el visor de\
                su traje para cerciorarse de que no estaba alucinando.</p>\
                \
                <p class=\"dialog\">—A goose…? 🦢 But how?—se dijo a sí mismo, intentando procesar la información.</p>\
                \
                <p>Y ahí estaba, delante de él, la prueba fehaciente del correcto funcionamiento de los sensores aéreos del\
                centinela. Y lo inaudito, el objeto volador no identificado resulta ser un enorme y blanco ganso. Mentalmente\
                recorrió todos los protocolos de seguridad pero no pudo rescatar nada que explicara cómo proceder en caso de\
                anátida. Analizó si debía contarle a sus colegas sobre el hallazgo, pero la situación le pareció tan estrafalaria\
                que no sabía siquiera cómo podría explicarla.</p>",
                options: [
                    { id: "notificar_luego", option: "Notificarlo luego.", noShow: true },
                    { id: "notificar", option: "Intentar explicar el hallazgo.", noShow: true },
                ]
            },
        ]
    },
    {
        id: "hello_world_2",
        title: "Hola, mundo: Rendición de cuentas",
        html: true,
        data: [
            {
                id: "start",
                text: "<p>Como tal la danza que propiciaba el sol con la luna ya no existe. O al menos ya no es visible para los\
                terrestres. El momento de descanso para los monitores está definido de tal manera que el 80% del personal de\
                mantenimiento siempre esté despierto y monitoreando. Ahora era el turno de 305 de reposar la mente y recargarse.\
                Para minimizar la inactividad lo máximo posible, la industria médica diseñó unas cabinas de\
                hiperhibernación. Este profundo estado de letargo apaga las funciones biológicas hasta dejar el cuerpo al borde de\
                lo inanimado. Tarda solamente una hora, es distribuido optimizando los horarios de mantenimiento y mientras ocurre \
                 el sujeto no percibe el paso del tiempo. Esta casi muerte cerebral inducida contribuye a la longevidad de la especie.\
                También destruye el ciclo de sueño conocido por los <em>Homo Sapiens Sapiens</em>, dejando únicamente la fase encargada del alivio físico.\
                 Esto causa la carencia de fantasía, ya no hay MOR, ya no hay sueños. Así que lo que sucede a continuación, en un principio parece\
                inexplicable.</p>\
                \
                <p class=\"dialog\">—¿Dónde estoy? ¿Estoy… flotando?—dijo muy confundido 305, encontrándose en un espacio\
                completamente vacío donde lo único visible era una oscuridad absorbente y sideral.</p>",
                options: [
                    { id: "vacio_moverse", option: "Intentar moverse.", noShow: true },
                    { id: "vacio_inmovil", option: "Permanecer inmóvil.", noShow: true }]
            },
            {
                id: "vacio_moverse",
                text: "<p>El monitor, determinado a retomar algo de control sobre la extraña situación, comenzó a hacer un esfuerzo para desplazarse a través del vacío.\
                Mientras intentaba generar momentum aleteando sus manos y sus piernas, tuvo la sensación de que una criatura comenzaba a acercarse.</p>\
                <p class=\"dialog\">—Hemos estado intentando contactarte, anunció una voz omnisciente que resonó en su cabeza con un\
                ligero eco</p>",
                options: [
                    { id: "preguntar_quien", option: "Preguntar quién anda ahí.", noShow: true },
                    { id: "revisar_vacío", option: "Inspeccionar el vacío.", noShow: true }]
            },
            {
                id: "vacio_inmovil",
                //And hope that this is just imagination, but all the while, You hear the creature creepin' up behind. You're out of time
                text: "<p>El monitor, en un estado de shock, no pudo hacer más que quedarse quieto y cerrar sus ojos, esperando que fuera \
                solo su imaginación y que esto en realidad no estaba ocurriendo, sin embargo, incluso sin utilizar su vista, una inexplicable \
                sensación de que una criatura se estaba acercando.\
                 </p>\
                <p class=\"dialog\">—Hemos estado intentando contactarte, anunció una voz omnisciente que resonó en su cabeza con un\
                ligero eco</p>",
                options: [
                    { id: "preguntar_quien", option: "Preguntar quién anda ahí.", noShow: true },
                    { id: "revisar_vacío", option: "Inspeccionar el vacío.", noShow: true }]
            },
            {
                id: "preguntar_quien",
                text: "<p class=\"dialog\">—¿Qué? ¿Quién dijo eso? </p>\
                \
                <p>Como respuesta recibió un potente graznido lo tumbó al suelo,\
                pero la ausencia de éste lo hizo caer en posición de sentadilla sin un destino tangible en cual reposar.</p>\
                \
                <p>El ganso de hace unas horas había vuelto a aparecer delante de él. A diferencia de 305, el ave posaba sin esfuerzo\
                delante de su rostro. El monitor era incapaz de procesar en su mente lo estaba sucediendo.\
                Mientras él caía eternamente, el ganso parecía no moverse en lo absoluto, pero tampoco dejaba de estar delante de\
                él, incluso si él no paraba de caer. La paradoja del ganso constante y el movimiento eterno le causó un terrible\
                dolor de cabeza. La voz omnisciente volvió a romper el silencio.</p>\
                \
                <p class=\"dialog\">—Recupere el balance, por favor.</p>",
                options: [
                    { id: "recuperar_balance", option: "Recuperar el balance.", noShow: true },
                    { id: "no_balance", option: "No puedo.", }]
            },
            {
                id: "revisar_vacío",
                text: "<p class=\"dialog\">305 se giró para inspeccionar la nada en busca del emisor sin rostro y un potente graznido le hizo perder el equilibrio.\
                Su cuerpo buscaba tumbarse al suelo pero la ausencia de superficies le hizo caer en posición de sentadilla sin un destino tangible en cual reposar.</p>\
                \
                <p>El ganso de hace unas horas había vuelto a aparecer delante de él. A diferencia de 305, el ave posaba sin esfuerzo\
                delante de su visor. El monitor era incapaz de procesar en su mente lo estaba sucediendo.\
                Mientras él caía eternamente, el ganso parecía no moverse en lo absoluto, pero tampoco dejaba de estar delante de\
                él, incluso si él no paraba de caer. La paradoja del ganso constante y el movimiento eterno le causó un terrible\
                dolor de cabeza. La voz omnisciente volvió a romper el silencio.</p>\
                \
                <p class=\"dialog\">—Recupere el balance, por favor.</p>",
                options: [
                    { id: "recuperar_balance", option: "Recuperar el balance.", noShow: true },
                    { id: "no_balance", option: "No puedo.", }]
            },

            {
                id: "recuperar_balance",
                text: "<p>305 se concentró tanto que por un momento creyó necesario activar el sistema de evacuación de su traje, pero antes de que sucediera un\
                accidente, se estabilizó.</p>\
                \
                <p class=\"dialog\">—Esto no habría pasado si no me hubieras graznido de la nada.</p>\
                \
                <p class=\"dialog\">—Lo siento, soy un ganso, eso es lo que los gansos hacen. Aún nos estamos acostumbrado a este\
                avatar.</p>",
                options: [
                    { id: "como_hablas", option: "¿Por qué hablas en plural y singular? Es más, ¿Por qué hablas?" },
                    { id: "donde_tuercas", option: "¿Dónde tuercas estamos?", }]
            },
            {
                id: "no_balance",
                text: "<p class=\"dialog\">No puedo.</p>\
                \
                <p class=\"dialog\">—Claro que podés. Concentrate y hacelo.</p>\
                \
                <p>305 se concentró tanto que por un momento creyó que necesitaría limpiar su traje, pero antes de que sucediera un\
                accidente, se estabilizó.</p>\
                \
                <p class=\"dialog\">—Esto no habría pasado si no me hubieras graznido de la nada.</p>\
                \
                <p class=\"dialog\">—Lo siento, soy un ganso, eso es lo que los gansos hacen. Aún nos estamos acostumbrado a este\
                avatar.</p>",
                options: [
                    { id: "como_hablas", option: "¿Por qué hablas en plural y singular? Es más, ¿Por qué hablas?" },
                    { id: "donde_tuercas", option: "¿Dónde tuercas estamos?", }]
            },
            {
                id: "como_hablas",
                text: "<p class=\"dialog\">—Somos un ganso multiusuario con conexión telepática. Pero me temo que hay temas más importantes que tratar en este momento ¿no recuerda lo último que pasó?</p>",
                options: [
                    { id: "recordar_si", option: "Por supuesto.", noShow: true },
                    { id: "recordar_no", option: "No.", }]
            },
            {
                id: "donde_tuercas",
                text: "<p class=\"dialog\">—¿No recuerda lo último que pasó?</p>",
                options: [
                    { id: "recordar_si", option: "Por supuesto.", noShow: true },
                    { id: "recordar_no", option: "No.", }]
            },

            {
                id: "recordar_si",
                text: "<p class=\"dialog\">—Por supuesto que sí. Era mi turno de hiperhibernar. Entré a la cabina que me permite cumplir este\
                propósito y luego desperté acá. Pero esto que está pasando no es lo que debió ocurrir. Yo debí haber despertado en la\
                misma cámara con más energía.</p>\
                <p class=\"dialog\">—Saboteamos tu aposento para poder comunicarme contigo.</p>",
                options: [
                    { id: "como_sabotear", option: "¿Cómo hiciste eso?", noShow: true },
                    { id: "eres_alien", option: "¿Eres un alien?", noShow: true }]
            },
            {
                id: "recordar_no",
                text: "<p class=\"dialog\">—Vos entraste en una especie de cabina para \"descansar\".\
                \
                <p class=\"dialog\">—Y luego nosotros saboteamos el aposento para poder comunicarme contigo.</p>",
                options: [
                    { id: "como_sabotear", option: "¿Cómo hiciste eso?", noShow: true },
                    { id: "eres_alien", option: "¿Eres un alien?", noShow: true }]
            },

            {
                id: "como_sabotear",
                text: "<p class=\"dialog\">—¿Cómo es posible realizar algo así? Es ilegal modificar tecnología patentada por las grandes\
                compañías, creería que los <code>cortafuegos</code> no te dejarían pasar.</p>\
                \
                <p class=\"dialog\">—Es menos complicado de lo que piensa.</p>\
                \
                <p class=\"dialog\">—Puede ser. Realmente nunca me lo había cuestionado, es inaceptable para mí cometer actos ilícitos.</p>\
                \
                <p class=\"dialog\">—¡Por la madre gansa! No nos dejaste otra opción chica.</p>\
                \
                <p class=\"dialog\">—Es verdad. Ni siquiera fue capaz de escucharnos por más que intenté llamar su atención.\
                Estoy buscando que se cuestione la realidad y reconozca la ficción.</p>\
                \
                <p class=\"dialog\">—Aún recuerdo el espanto que me dio tu graznido en la nave.</p>\
                \
                <p class=\"dialog\">—Ese no fui yo, fuimos nosotros, pero no fui yo.</p>",
                options: [
                    { id: "quien_fue", option: "¿Entonces quién fue?" },
                    { id: "como_cambias", option: "¿Por qué cambias de tono y modismos de manera tan extraña?", },]
            },
            {
                id: "eres_alien",
                text: "<p class=\"dialog\">—¿Eres un alien? </p>\
                \
                <p class=\"dialog\">—Podés creer que lo soy. La etiqueta no importa tanto, pero estamos buscando que se cuestione las\
                cosas.</p>\
                \
                <p class=\"dialog\">—Aún recuerdo el espanto que me dio tu graznido en la nave.</p>\
                \
                <p class=\"dialog\">—Ese no fui yo, fuimos nosotros, pero no fui yo.</p>",
                options: [
                    { id: "quien_fue", option: "¿Entonces quién fue?" },
                    { id: "como_cambias", option: "¿Por qué cambias de tono y modismos de manera tan extraña?", }]
            },
            {
                id: "como_cambias",
                text: "<p class=\"dialog\">—Somos varios acá. Cada uno habla como quiere ¿no? Y aún así. Antes no nos podías escuchar ¿verdad?</p>",
                options: [
                    { id: "no_escucho", option: "En lo absoluto." },
                    { id: "si_escucho", option: "Sí podía escuchar.", }]
            },
            {
                id: "quien_fue",
                text: "<p class=\"dialog\">—Pues el ganso. Pero cada vez que intenté que me escuchara a mí, no había respuesta ¿no me pudo\
                escuchar, cierto?</p>",
                options: [
                    { id: "no_escucho", option: "En lo absoluto." },
                    { id: "si_escucho", option: "Sí podía escuchar.", }]
            },
            {
                id: "si_escucho",
                text: "<p class=\"dialog\">—Miente. Fue necesario emboscarlo con la guardia baja para que me oyera. No\
                debería ser así.</p>",
                options: [
                    { id: "a_que", option: "¿A qué te refieres?" },
                    { id: "guardia_baja", option: "¿Guardia baja?" }]
            },
            {
                id: "no_escucho",
                text: "<p class=\"dialog\">—Eso es lo que me preocupa. Tuvimos que emboscarlo con la guardia baja para que me oyera. No\
                debería ser así.</p>",
                options: [
                    { id: "a_que", option: "¿A qué te refieres?" },
                    { id: "guardia_baja", option: "¿Guardia baja?" }]
            },
            {
                id: "a_que",
                text: "<p class=\"dialog\">—Cómo ya lo notó, esta no es una conversación convencional. Lo que nos rodea, es su mente.</p>",
                options: [
                    { id: "a_que_no", option: "Eso es imposible." },
                    { id: "guardia_baja_no", option: "No.", }]
            },
            {
                id: "a_que_no",
                text: "<p class=\"dialog\">—¿Lo es? Lo que me parece impresionante es el vacío que la habita. Usted parece una máquina,\
                por esa razón nos fue tan difícil realizar la conexión telepática. Un reto semejante sería intentar leer los pensamientos\
                de un tostador.</p>",
                options: [
                    { id: "a_que_hey", option: "¡Hey!" },
                    { id: "guardia_baja_pero", option: "Pero...", }]
            },
            {
                id: "guardia_baja_no",
                text: "<p class=\"dialog\">—¿Lo es? Lo que me parece impresionante es el vacío que la habita. Usted parece una máquina,\
                por esa razón nos fue tan difícil realizar la conexión telepática. Un reto semejante sería intentar leer los pensamientos\
                de un tostador.</p>",
                options: [
                    { id: "a_que_hey", option: "¡Hey!" },
                    { id: "guardia_baja_pero", option: "Pero...", }]
            },

            {
                id: "a_que_hey",
                text: "<p class=\"dialog\">—Y para colmo, dentro de esta retorcida realidad, no existen los sueños. Tuve que reprogramar el\
                aparatejo para que entrara en el ciclo MOR y hablar con usted desde adentro.</p>\
                \
                <p>Dentro de su casco, el rostro natural e inexpresivo de 305 comenzó a mostrar signos de duda, miedo y enojo.</p>",
                options: [
                    { id: "no_real", option: "Esto no puede ser real.", noShow: true },
                    { id: "muchas_preguntas", option: "Aun tengo muchas preguntas.", }]
            },
            {
                id: "guardia_baja_pero",
                text: "<p class=\"dialog\">—Y para colmo, dentro de esta retorcida realidad, no existen los sueños. Tuve que reprogramar el\
                aparatejo para que entrara en el ciclo MOR y hablar con usted desde adentro.</p>\
                \
                <p>Dentro de su casco, el rostro natural e inexpresivo de 305 comenzó a mostrar signos de duda, miedo y enojo.</p>",
                options: [
                    { id: "no_real", option: "Esto no puede ser real.", noShow: true },
                    { id: "muchas_preguntas", option: "Aun tengo muchas preguntas.", }]
            },

            {
                id: "guardia_baja",
                text: "<p class=\"dialog\">—Cómo ya lo notó, esta no es una conversación convencional. Lo que nos rodea, es su mente.</p>",
                options: [
                    { id: "a_que_no", option: "Eso es imposible." },
                    { id: "guardia_baja_no", option: "No.", }]
            },
            {
                id: "guardia_bajaWIP",
                text: "<p class=\"dialog\">—Cómo ya lo notó, esta no es una conversación convencional. Lo que nos rodea, es su mente.</p>\
                \
                <p class=\"dialog\">—Eso es imposible</p>\
                \
                <p class=\"dialog\">—¿Lo es? Lo que me parece imposible es que no haya nada dentro de ella. Usted parece una máquina,\
                  es por eso que nos es tan difícil realizar la conexión telepática, es como intentar leer los pensamientos\
                  de un tostador.</p>\
                  \
                <p class=\"dialog\">—Pero…</p>\
                \
                <p class=\"dialog\">—Y para colmo, dentro de esta retorcida realidad, no existen los sueños. Tuve que reprogramar este\
                aparatejo para que entrara en el ciclo MOR y hablar con usted desde adentro.</p>\
                \
                <p>Dentro de su casco, el rostro natural e inexpresivo de 305 comenzó a mostrar signos de duda, miedo y enojo.</p>",
                options: [
                    { id: "no_real", option: "Esto no puede ser real.", noShow: true },
                    { id: "muchas_preguntas", option: "Aun tengo muchas preguntas.", }]
            },


            {
                id: "no_real",
                text: "<p class=\"dialog\">—Esto no puede ser real, murmuró.</p>\
                <p class=\"dialog\">—Exacto, respondió el ganso antes de que una inmensa bola de luz creciera en circunferencia hasta\
                explotar en un destello.</p>\
                \
                <p>305 abrió los ojos como la primera vez que el ganso le graznó en la cara.</p>\
                \
                <p class=\"dialog\">—Wake up! There's something wrong with this machine.</p>\
                \
                <p>Súbitamente, 305 se encontraba rodeado de colegas que iban desde el 300 hasta el 315. Cada uno de los números\
                parecía mucho más inquieto de lo habitual. 305 saltó de la cámara de hiperhibernación.</p>",
                options: [
                    { id: "que_pasa", option: "¿Qué está pasando?", noShow: true },
                    { id: "todos_aqui", option: "¿Por qué están todos aquí?", noShow: true }]
            },
            {
                id: "muchas_preguntas",
                text: "<p>Antes de que el ganso pudiera decir algo, una inmensa bola de luz creció en circunferencia hasta\
                explotar en un destello.</p>\
                \
                <p>305 abrió los ojos como la primera vez que el ganso le graznó en la cara.</p>\
                \
                <p class=\"dialog\">—Wake up! There's something wrong with this machine.</p>\
                \
                <p>Súbitamente, 305 se encontraba rodeado de colegas que iban desde el 300 hasta el 315. Cada uno de los números\
                parecía mucho más inquieto de lo habitual. 305 saltó de la cámara de hiperhibernación.</p>",
                options: [
                    { id: "que_pasa", option: "¿Qué está pasando?", noShow: true },
                    { id: "todos_aqui", option: "¿Por qué están todos aquí?", noShow: true }]
            },


            {
                id: "que_pasa",
                text: "<p class=\"dialog\">—What's happening?</p>\
                \
                <p>Su rostro empapado en sudor y sus pupilas dilatadas exigían una respuesta, sin embargo, sus prójimos lucían tan\
                perdidos como él. Ante el silencio y las caras confundidas, revisó los escáneres de su recarga de energía. Todos\
                los gráficos parecían borrachos, no tenían ningún sentido, la máquina parecía arrojar chispas y lo más insólito,\
                la energía celular retornada de la hiperhibernación parecía exceder el <code>1000% de ATP</code>. Mientras\
                continuaba analizando la información, una inesperada mano cayó sobre la suya. A través del caso, los ojos horrorizados de 300 lo miraron\
                y el tipo exclamó</p>\
                \
                <p class=\"dialog\">—No! No! No!</p>\
                \
                <p>Elevando la tensión de la sala que cada vez se sentía más pequeña, el resto del equipo de mantenimiento presente\
                comenzó a unirse al llanto</p>\
                \
                <p class=\"dialog\">—No! N̷̖͇̈́ö̸̡́̄̽̋͠!̷̛̰̱͕͎ ̸̩͗I̶̛̹͕̖͂̈́̀͝ͅṭ̸̻͕̺̏ ̴̭͍͈͎̯̪̤͒̃c̵̦͈̿a̸͈̙̦̺̐̎͆͛͋̀̇n̴͓̳͐͋̄ ̸̭͓̩͆̒͘ñ̶̟̞̆̈̃̀̌o̴̮͎̺̭̲͗̏̔̇͝t̷̞͚͕̭̹͍̝̽͊̐ ̴̙͚̺͈̱̖̀̈́̐̀̕̚b̶̢̙̗͖̓̅̊͋́̐̍è̴̪͓̆͑̍͆͝͠!̴̧̩̰͐͑̏</p>",
                options: [
                    { id: "camara_huir", option: "Intentar huir.", noShow: true },
                    { id: "camara_mantenerse", option: "Mantenerse en posición.", noShow: true }]
            },
            {
                id: "todos_aqui",
                text: "<p class=\"dialog\">—Why is everyone here?</p>\
                \
                <p>Su rostro empapado en sudor y sus pupilas dilatadas exigían una respuesta, sin embargo, sus prójimos lucían tan\
                perdidos como él. Ante el silencio y las caras confundidas, revisó los escáneres de su recarga de energía. Todos\
                los gráficos parecían borrachos, no tenían ningún sentido, la máquina parecía arrojar chispas y lo más insólito,\
                la energía celular retornada de la hiperhibernación parecía exceder el <code>1000% de ATP</code>. Mientras\
                continuaba analizando la información, una inesperada mano cayó sobre la suya.  A través del caso, los ojos horrorizados de 300 lo miraron\
                y el tipo exclamó</p>\
                \
                <p class=\"dialog\">—No! No! No!</p>\
                \
                <p>Elevando la tensión de la sala que cada vez se sentía más pequeña, el resto del equipo de mantenimiento presente\
                comenzó a unirse al llanto</p>\
                \
                <p class=\"dialog\">—No! N̷̖͇̈́ö̸̡́̄̽̋͠!̷̛̰̱͕͎ ̸̩͗I̶̛̹͕̖͂̈́̀͝ͅṭ̸̻͕̺̏ ̴̭͍͈͎̯̪̤͒̃c̵̦͈̿a̸͈̙̦̺̐̎͆͛͋̀̇n̴͓̳͐͋̄ ̸̭͓̩͆̒͘ñ̶̟̞̆̈̃̀̌o̴̮͎̺̭̲͗̏̔̇͝t̷̞͚͕̭̹͍̝̽͊̐ ̴̙͚̺͈̱̖̀̈́̐̀̕̚b̶̢̙̗͖̓̅̊͋́̐̍è̴̪͓̆͑̍͆͝͠!̴̧̩̰͐͑̏</p>",
                options: [
                    { id: "camara_huir", option: "Intentar huir.", noShow: true },
                    { id: "camara_mantenerse", option: "Mantenerse en posición.", noShow: true }]
            },


            {
                id: "camara_huir",
                text: "<p>Sirenas vociferantes aparecieron del techo de la habitación y la tiñeron de rojo. 305 comenzó a empujar a\
                cualquiera que se le pusiera enfrente, intentando dirigirse a la salida. Sus colegas parecían extenuados y no era\
                particularmente difícil apartarlos.</p>\
                \
                <p>Al salir de la habitación, la puerta se cerró de forma automática y todo volvió a la oscuridad. Antes de darse\
                cuenta estaba nuevamente en el vacío de su mente, pero está vez sólo. Dentro de este lugar medir el tiempo parece imposible, \
                pero estando despierto, al monitor se le volvió eterno.</p>\
                \
                <p>En la espera de que ocurriera algo, tuvo la oportunidad de recapitular los extraños acontecimientos que le\
                estaban ocurriendo.</p>",
                options: [
                    { id: "antes_ganso", option: "La vida antes del ganso...", noShow: true },
                    { id: "el_ganso", option: "El ganso...", noShow: true }]
            },
            {
                id: "camara_mantenerse",
                text: "<p>Sirenas vociferantes aparecieron del techo de la habitación y la tiñeron de rojo. 305 comenzó a empujar a\
                sus compañeros, que intentaban acercarse a él. Ellos parecían extenuados y no era\
                particularmente difícil apartarlos. Sin embargo, la habitación se sentía cada vez más pequeña, al punto donde ya no había\
                forma de mantener distancia entre los otros monitores y 305. Este último lograba determinar si la habitación\
                se estaba encogiendo realmente o si los monitores se estaban multiplicando de manera exponencial, sin embargo,\
                en cuestión de minutos, el sujeto fue enterrado por sus colegas, sin poder ver nada más que oscuridad</p>\
                \
                <p> Antes de darse cuenta, 305 estaba nuevamente en el vacío de su mente, pero está vez sólo.\
                Dentro de este lugar medir el tiempo parece imposible, pero estando despierto, al monitor se le volvió eterno.</p>\
                \
                <p>En la espera de que ocurriera algo, tuvo la oportunidad de recapitular los extraños acontecimientos que le\
                estaban ocurriendo.</p>",
                options: [
                    { id: "antes_ganso", option: "La vida antes del ganso...", noShow: true },
                    { id: "el_ganso", option: "El ganso...", noShow: true }]
            },

            {
                id: "antes_ganso",
                text: "<p>Cayó en cuenta que prácticamente no podía recordar nada de su vida antes de su encuentro con el ganso. <i>B. G. Before Goose</i>... \
                No tenía ninguna memoria específica, sin embargo la sensación general se manifestaba como orgullo. \
                Su extraordinaria posición como monitor lo teñía de prestigio. Mientras pensaba en la importancia de su labor, comenzó a sonar\
                la tonada <em>Bolero de Maurice Ravel</em>, el relajante anuncio que le avisaba el fin de la hiperhibernación. Esta vez esperaba despertar de verdad.</p>\
                \
                <p>Salió de la cámara de hiperhibernación sin ningún problema. La sala estaba vacía y fría, como era cotidianamente.\
                Revisó la información de su descanso. Todo parecía habitual, con excepción de que su energía parecía exceder un\
                poco el 100% y su traje parecía brillar un poco distinto que antes. El hecho hizo que se revisara a sí mismo por un segundo en busca de más sucesos extraños. \
                Entretanto, fue interrumpido por un colega.</p>\
                \
                <p class=\"dialog\">—305! Another conference, let's go.</p>",
                options: [
                    { id: "un_segundo", option: "Continuar analizando la situación.", noShow: true },
                    { id: "de_inmediato", option: "Ir de inmediato a la sala.", noShow: true }]
            },
            {
                id: "el_ganso",
                text: "<p>Recordó que la primera vez que fue a su encuentro, se le clasificó como una\
                amenaza ¿podría ser el ganso malévolo? No, dijo, deteniéndose a sí mismo. Llamarlo un ganso es exactamente lo que\
                él o ellos quieren. Si puede alertar y luego burlar los sensores de seguridad, si puede reprogramar\
                tecnología patentada y segura, si puede comunicarse por telepatía e inducir pesadillas... Llamarlo un ganso es\
                reducir el problema. ¡No! no es un ganso, es un alienígena, y puede ser maligno o incluso puede ser un virus;\
                concluyó en su meditación. Finalmente, la alarma habitual del cierre de hiperhibernación sonó, la tonada\
                <em>Bolero de Maurice Ravel</em> le ayudó a relajarse, esperando que esta vez si fuera a despertar de verdad.\
                </p>\
                \
                <p>Salió de la cámara de hiperhibernación sin ningún problema. La sala estaba vacía y fría, como era cotidianamente.\
                Revisó la información de su descanso. Todo parecía habitual, con excepción de que su energía parecía exceder un\
                poco el 100% y su traje parecía brillar un poco distinto que antes. El hecho hizo que se revisara a sí mismo por un segundo en busca de más sucesos extraños. \
                Entretanto, fue interrumpido por un colega.</p>\
                \
                <p class=\"dialog\">—305! Another conference, let's go.</p>",
                options: [
                    { id: "un_segundo", option: "Continuar analizando la situación.", noShow: true },
                    { id: "de_inmediato", option: "Ir de inmediato a la sala.", noShow: true }]
            },

            {
                id: "de_inmediato",
                text: "<p>305 emprendió su camino hacia la sala de conferencias, sin embargo, su mente aún se encontraba pensando en el exacto suceso recien ocurrido. \
                No lograba determinar que fue real y que fue solamente su imaginación. Los acontecimientos se volvían cada vez más y más extraños.\
                Y de pronto una epifanía. Las cámaras de video, por supuesto. El traje que los monitores utilizan como uniforme les permite hacer uso de una\
                terminal de programación en el antebrazo izquierdo. 305 la utilizó para descargar el contenido en video de la sala durante el tiempo que estuvo en hiperhibernación.\
                Mientras seguía caminando, se percató de que el contenido grabado en la sala durante su hiperhiberación parecía manipulado. \
                Inicialmente era difícil verlo. Pero la cuenta en milisegundos de la grabación daba un salto hacia el futuro sin explicación aparente. \
                Y justo en este salto de tiempo, parecía verse un por un instante la habitación teñida de rojo.</p>\
                \
                <p>Antes de girar por el pasillo que lo pondría de frente a la sala de conferencias, como <i>déjà vu</i>, un ensordecedor\
                graznido rebotó por su casco, sin embargo, 305 comenzaba a acostumbrarse al saludo y ni siquiera sobresaltó.</p>",
                options: [
                    { id: "timpanos", option: "Tienes que dejar de presentarte así, me vas a romper un tímpano." },
                    { id: "no_timpanos", option: "No decir nada", noShow: true }]
            },
            {
                id: "un_segundo",
                text: "<p class=\"dialog\">—Ok. Give me a <code>60000 miliseconds</code>. I want to check something.</p>\
                \
                <p>305 tomó un momento para ver una vez más la habitación. Sus ojos, a través del visor de su casco, la recorrieron de arriba a abajo. \
                El traje que los monitores utilizan como uniforme les permite hacer uso de una\
                terminal de programación en el antebrazo izquierdo. 305 la utilizó para comenzar una inspección sobre la cámara de\
                hiperhibernación, enfocándose principalmente en el parámetro de energía y su excedente por encima del 100% de ATP.\
                También ordenó descargar el contenido en video del CCTV durante el tiempo que estuvo dentro de la sala y por\
                último comenzó a rastrear vestigios de ondas cerebrales a lo largo de la base, intentando triangular la posición\
                del ganso viral.</p>\
                \
                <p>Caminó despacio hacia la sala de conferencias. En su trayecto se percató de que el contenido grabado en la sala\
                durante su hiperhiberación parecía manipulado. Inicialmente era difícil verlo. Pero la cuenta en milisegundos de\
                la grabación daba en salto hacia delante sin explicación aparente. Y justo en este salto de tiempo, parecía verse\
                un por un instante la habitación teñida de rojo.</p>\
                \
                <p>Antes de girar por el pasillo que lo pondría de frente a la sala de conferencias, como déjà vu, un ensordecedor\
                graznido rebotó por su casco, sin embargo, 305 comenzaba a acostumbrarse al saludo y ni siquiera sobresaltó.</p>",
                options: [
                    { id: "timpanos", option: "Tienes que dejar de presentarte así, me vas a romper un tímpano." },
                    { id: "no_timpanos", option: "...", noShow: true }]
            },
            {
                id: "no_timpanos",
                text: "<p class=\"dialog\">—Le prometo que no soy yo, es él.</p>",
                options: [
                    { id: "que_idioma", option: "Aún no entiendo ese tema de múltiples usuarios." },
                    { id: "comunicamos", option: "Aún no entiendo entiendo cómo nos comunicamos." }]
            },
            {
                id: "timpanos",
                text: "<p class=\"dialog\">—Le prometo que no soy yo, es él.</p>",
                options: [
                    { id: "que_idioma", option: "Aún no entiendo ese tema de múltiples usuarios." },
                    { id: "comunicamos", option: "Aún no entiendo entiendo cómo nos comunicamos." }]
            },
            {
                id: "que_idioma",
                text: "<p class=\"dialog\">—Después tal vez haya tiempo para conversar sobre esos temas chica. Y hablando de eso... ¿ya comenzaste a cuestionarte las cosas?\
                Hay algo extraño en todo esto ¿no lo crees?</p>",
                options: [
                    { id: "si_cuestiono", option: "Sí.", noShow: true },
                    { id: "no_cuestiono", option: "No.", noShow: true }]
            },
            {
                id: "comunicamos",
                text: "<p class=\"dialog\">—Te puedo decir que no estamos hablando ninguna lengua, \
                nuestra conversación es mental. Con nosotros no necesitas usar el idioma que hablas con tus colegas\
                Y hablando de eso ¿ya comenzaste a cuestionarte las cosas? Hay algo extraño en todo esto ¿no lo crees?</p>",
                options: [
                    { id: "si_cuestiono", option: "Sí.", noShow: true },
                    { id: "no_cuestiono", option: "No.", noShow: true }]
            },
            {
                id: "si_cuestiono",
                text: "<p class=\"dialog\">—Pues... Hay algunos hechos interesantes. Exactamente ¿qué…</p>\
                \
                <p class=\"dialog\">—305! You are late! Let's go!</p>\
                \
                <p>305 sintió una terrible náuseas al ser interrumpido por uno de sus colegas. Fue como frenar una nave interestelar\
                en seco. Ni siquiera su entrenamiento en match 880000 lo preparó para tal malestar.</p>\
                \
                <p class=\"dialog\">—Are you ok?</p>",
                options: [
                    { id: "si_cuestiono_ok", option: "S...", noShow: true },
                    { id: "no_cuestiono_ok", option: "N...", noShow: true }]
            },
            {
                id: "no_cuestiono",
                text: "<p class=\"dialog\">—No, pero... Hay algunos hechos interesantes. Exactamente ¿qué…</p>\
                \
                <p class=\"dialog\">—305! You are late! Let's go!</p>\
                \
                <p>305 sintió una terrible náuseas al ser interrumpido por uno de sus colegas. Fue como frenar una nave interestelar\
                en seco. Ni siquiera su entrenamiento en match 880000 lo preparó para tal malestar.</p>\
                \
                <p class=\"dialog\">—Are you ok?</p>",
                options: [
                    { id: "si_cuestiono_ok", option: "S..." },
                    { id: "no_cuestiono_ok", option: "N..." }]
            },
            {
                id: "si_cuestiono_ok",
                text: "<p>El sujeto posó una de sus manos sobre su hombro. Extrañamente, pareció aliviar el\
                mareo. Ahora, tirando de él y sin darle tiempo para responder, el tipo lo acercó a la sala.</p>\
                \
                <p>Ahí dentro se encontró una escena muy similar a la de unas horas antes, cuando volvió del exterior. \
                En cada una de las sillas estaban sus colegas, todos los que vio enloquecer \"minutos\" antes en lo que\
                no sabía si llamar una realidad alterna o una pesadilla. Detrás del semicírculo que formaban las sillas, unas imágenes\
                gigantes proyectaban un escuadrón completo de El Muro de Fuego. Por primera vez, 305 se cuestionó lo\
                extraño de la distribución arquitectónica de la sala. Toda la atención parecía estar enfocada hacia la puerta y no\
                hacia el frente, como sería lógico pensar que una sala de conferencias funcionaría. No lograba recordar si siempre\
                había sido así o si había cambiado luego del incidente.</p>\
                \
                <p>La rigidez del lugar era casi palpable. La presencia, aunque fuera virtual, de un escuadrón completo\
                de El Muro era amenazante por sí sola. Y ver tan frías y severas posturas por parte de los números que un par de\
                habitaciones atrás habían resbalado a la locura se sumaba a la sensación de extrañeza. Las enormes pantallas\
                dejaban ver a lo lejos, detrás del escuadrón, distintas naves de infantería pesada, con sus cañones apuntando\
                directamente a él. Creía recordar que alguien alguna vez le había contado que El Muro era capaz de viajar entre proyecciones como si fueran portales,\
                permitiéndoles aparecer en cuestión de segundos en cualquier dispositivo capaz de transmitir video, pero 305 nunca había presenciado\
                este tipo de tecnología. Tampoco, en ningún momento de su vida, se había puesto a pensar si esto sería\
                posible o no, pero ahora que se sentía el punto central de tres semicircunferencias cada vez más agresivas,\
                comenzaba a desconfiar de la realidad. El encargado del centro del primer semicírculo rompió el silencio.</p>\
                \
                <p class=\"dialog\">—We checked the video on the spaceship. We saw the goose, where is the goose?</p>",
                options: [
                    { id: "sala_pero", option: "Pero...", noShow: true },
                    { id: "sala_como", option: "¿Cómo...", noShow: true }]
            },
            {
                id: "no_cuestiono_ok",
                text: "<p>El sujeto posó una de sus manos sobre su hombro. Extrañamente, pareció aliviar el\
                mareo. Ahora, tirando de él y sin darle tiempo para responder, el tipo lo acercó a la sala.</p>\
                \
                <p>Ahí dentro se encontró una escena muy similar a la de unas horas antes, cuando volvió del exterior. \
                En cada una de las sillas estaban sus colegas, todos los que vio enloquecer \"minutos\" antes en lo que\
                no sabía si llamar una realidad alterna o una pesadilla. Detrás del semicírculo que formaban las sillas, unas imágenes\
                gigantes proyectaban un escuadrón completo de El Muro de Fuego. Por primera vez, 305 se cuestionó lo\
                extraño de la distribución arquitectónica de la sala. Toda la atención parecía estar enfocada hacia la puerta y no\
                hacia el frente, como sería lógico pensar que una sala de conferencias funcionaría. No lograba recordar si siempre\
                había sido así o si había cambiado luego del incidente.</p>\
                \
                <p>La rigidez del lugar era casi palpable. La presencia, aunque fuera virtual, de un escuadrón completo\
                de El Muro era amenazante por sí sola. Y ver tan frías y severas posturas por parte de los números que un par de\
                habitaciones atrás habían resbalado a la locura se sumaba a la sensación de extrañeza. Las enormes pantallas\
                dejaban ver a lo lejos, detrás del escuadrón, distintas naves de infantería pesada, con sus cañones apuntando\
                directamente a él. Creía recordar que alguien alguna vez le había contado que El Muro era capaz de viajar entre proyecciones como si fueran portales,\
                permitiéndoles aparecer en cuestión de segundos en cualquier dispositivo capaz de transmitir video, pero 305 nunca había presenciado\
                este tipo de tecnología. Tampoco, en ningún momento de su vida, se había puesto a pensar si esto sería\
                posible o no, pero ahora que se sentía el punto central de tres semicircunferencias cada vez más agresivas,\
                comenzaba a desconfiar de la realidad. El encargado del centro del primer semicírculo rompió el silencio.</p>\
                \
                <p class=\"dialog\">—We checked the video on the spaceship. We saw the goose, where is the goose?</p>",
                options: [
                    { id: "sala_pero", option: "Pero...", noShow: true },
                    { id: "sala_como", option: "¿Cómo...", noShow: true }]
            },


            {
                id: "sala_pero",
                text: "<p>Sin poder decir nada, un graznido que pareció retumbar el núcleo de la mismísima Tierra interrumpió la conversación. Acto\
                seguido, con un destello deslumbrante, el ganso se materializó, a su vez lanzando un arma a la mano derecha de\
                305.</p>\
                \
                <p>Cuando el destello acabó, el ganso estaba posando con sus alas desplegadas como un arco sobre su cabeza y\
                colocado en medio de 305 y los 3 semicírculos contendientes. Ante la aparición, la segunda línea de defensa\
                desenfundó sus rifles de plasma y; lo insólito, a través de la pantalla, los cañones de sus armas se\
                materializaron, siendo capaces de materializarse parcialmente en la sala, a pesar de estar a 384.000 kilómetros de distancia.</p>\
                \
                <p class=\"dialog\">—Stop in the name of the law!—gritaron a una sola voz los monitores y el escuadrón. Los primeros,\
                sin realmente mostrar ningún tipo de arma, se pusieron en pie con agresividad.</p>\
                \
                <p>El ganso habló, \"Relax, everybody relax\". A 305 se le veía debatir internamente qué acción tomar.</p>",
                options: [
                    { id: "aliarse_ganso", option: "Aliarse con el ganso.", noShow: true },
                    { id: "a_por_el", option: "Ir a por el ganso.", noShow: true }]
            },
            {
                id: "sala_como",
                text: "<p>Sin poder decir nada, un graznido que pareció retumbar el núcleo de la mismísima Tierra interrumpió la conversación. Acto\
                seguido, con un destello deslumbrante, el ganso se materializó, a su vez lanzando un arma a la mano derecha de\
                305.</p>\
                \
                <p>Cuando el destello acabó, el ganso estaba posando con sus alas desplegadas como un arco sobre su cabeza y\
                colocado en medio de 305 y los 3 semicírculos contendientes. Ante la aparición, la segunda línea de defensa\
                desenfundó sus rifles de plasma y; lo insólito, a través de la pantalla, los cañones de sus armas se\
                materializaron, siendo capaces de materializarse parcialmente en la sala, a pesar de estar a 384.000 kilómetros de distancia.</p>\
                \
                <p class=\"dialog\">—Stop in the name of the law!—gritaron a una sola voz los monitores y el escuadrón. Los primeros,\
                sin realmente mostrar ningún tipo de arma, se pusieron en pie con agresividad.</p>\
                \
                <p>El ganso habló, \"Relax, everybody relax\". A 305 se le veía debatir internamente qué acción tomar.</p>",
                options: [
                    { id: "aliarse_ganso", option: "Aliarse con el ganso.", noShow: true },
                    { id: "a_por_el", option: "Ir a por el ganso.", noShow: true }]
            },

            {
                id: "aliarse_ganso",
                text: "305 posó su mano izquierda sobre su antebrazo cibernético y pareció programar algo en cuestión de segundos. \
                Seguido, alzó su arma y la apuntó directo a la cabeza del ganso. Un gesto unísono de alegría se dibujó en todos los \
                presentes, incluido el ganso, aunque este parecía hacerlo sarcásticamente.</p>\
                \
                <p class=\"dialog\">—Really?—dijo el ganso.</p>\
                \
                <p>Los monitores se mostraron satisfechos.</p>\
                \
                <p class=\"dialog\">—He is a terrorist—dijeron sus colegas.</p>\
                \
                <p class=\"dialog\">—I thought he was an alien—respondió 305. Diciendo esto, lanzó con fuerza sobrehumana el arma que\
                el ganso le había concedido, rompiendo completamente la pantalla principal de la sala—I don't like this kind of\
                weapons.</p>\
                \
                <p>Como consecuencia de romper el portal, los rifles que sobresalían de la pantalla cayeron partidos a la mitad en\
                el suelo de la habitación. 305 cerró su puño, activando un programa que había escrito segundos antes, el cual\
                modificó el código de los trajes de sus colegas, obligándolos a permanecer quietos como peones delante de las\
                pantallas periféricas a los extremos del semicírculo. A su vez, saltó hacia delante, tomando al ganso mientras\
                rodaba por sala, hasta encontrarse debajo de la mesa semicircular de los monitores, utizándola como un techo y un\
                segundo escudo.</p>\
                \
                <p class=\"dialog\">—Nada mal chica ¿dónde aprendiste a hacer todo eso?</p>",
                options: [
                    { id: "lo_aprendi", option: "Lo aprendí de ti.", noShow: true },
                    { id: "graciosito", option: "¿Arruinar el ganso a la plasma? Soy vegetariano." }]
            },

            {
                id: "graciosito",
                text: "<p class=\"dialog\">—Muy gracioso.</p>\
                \
                <p class=\"dialog\">—Sí, muy graciosa chica. ¿Y ahora cuál es el siguiente paso?",
                options: [
                    { id: "primero_conversar", option: "Quiero saber más de ti.", noShow: true },
                    { id: "primero_escapar", option: "Escapar de aquí.", noShow: true }]
            },

            {
                id: "a_por_el",
                text: "<p>305 posó su mano izquierda sobre su antebrazo cibernético y pareció programar algo en cuestión de segundos. Seguido, alzó el arma y la\
                apuntó directo a la cabeza del ganso. Un gesto unísono de alegría se dibujó en todos los presentes, incluido el\
                ganso, aunque este parecía hacerlo sarcásticamente.</p>",
                options: [
                    { id: "gatillo_discardable", option: "Apretar el gatillo.", noShow: true },
                    { id: "no_gatillo", option: "No.", noShow: true }]
            },

            {
                id: "gatillo_discardable",
                text: "El disparo resonó por toda la habitación. 305 había tomado una decisión. Había decidido que su universo estaba bien\
                y que no quería intrusos en él. Luego de ese día, la normalidad volvió a hacerse presente poco a poco. Eventualmente todos olvidarían el incidente.",
                options: [
                    { id: "fin_no", option: "Fin", noShow: true },
                    { id: "restart", option: "Volver a empezar.", noShow: true },]
            },
            {
                id: "fin_no",
                text: "<p>El disparo resonó por toda la habitación. 305 había tomado una decisión. Había decidido que su universo estaba bien\
                y que no quería intrusos en él. Luego de ese día, la normalidad volvió a hacerse presente poco a poco. Eventualmente todos olvidarían el incidente.\
                <p style='text-align:center'><strong>FIN</strong></p> \
                </p>",
                options: [
                    { id: "restart", option: "¿Volver a empezar?" },
                ]
            },
            {
                id: "no_gatillo",
                text: "<p>305 recapacitó y decidió que no escogería el camino bélico. Sin embargo, aún no sabía que camino seguir.</p>",
                options: [
                    { id: "entregar_ganso_discardable", option: "Neutralizar al ganso.", noShow: true },
                    { id: "creer_ganso", option: "Creerle al ganso.", noShow: true }]
            },
            {
                id: "entregar_ganso_discardable",
                text: "Utilizando información extraída del analisis hecho a la plumas, 305 fue capaz de escribir con \
                su traje un programa para paralizar al ganso. Mientras el monitor se acercaba para capturar al ave, El Muro de Fuego tomó acciones inmediatas y \
                desintegró la amenaza, antes de que alguien pudiera acercase al animal. Él no dijo nada, simplemente se dio la vuelta y volvió a sus labores. 305 había tomado una decisión. Había decidido que su universo estaba bien\
                y que no quería intrusos en él. Luego de ese día, la normalidad volvió a hacerse presente y eventualmente todos olvidaron el incidente.",
                options: [
                    { id: "fin2_no", option: "Fin", noShow: true },
                    { id: "restart", option: "Volver a empezar." },]
            },
            {
                id: "fin2_no",
                text: "Utilizando información extraída del analisis hecho a la plumas, 305 fue capaz de escribir con \
                su traje un programa para paralizar al ganso. Mientras el monitor se acercaba para capturar al ave, El Muro de Fuego tomó acciones inmediatas y \
                desintegró la amenaza, antes de que alguien pudiera acercase al animal. Él no dijo nada, simplemente se dio la vuelta y volvió a sus labores.\
                 305 había tomado una decisión. Había decidido que su universo estaba bien\
                y que no quería intrusos en él. Luego de ese día, la normalidad volvió a hacerse presente y eventualmente todos olvidaron el incidente.\
                <p style='text-align:center'><strong>FIN</strong></p> \
                </p>",
                options: [
                    { id: "restart", option: "¿Volver a empezar?" },
                ]
            },
            {
                id: "creer_ganso",
                text: "<p>El monitor lanzó con fuerza sobrehumana el arma que\
                el ganso le había concedido, rompiendo completamente la pantalla principal de la sala.</p>\
                \
                <p class=\"dialog\">—I don't like this kind of weapons.</p>\
                \
                <p>Como consecuencia de romper el portal, los rifles que sobresalían de la pantalla cayeron partidos a la mitad en\
                el suelo de la habitación. 305 cerró su puño, activando un programa que había escrito segundos antes, el cual\
                modificó el código de los trajes de sus colegas, obligándolos a permanecer quietos como peones delante de las\
                pantallas periféricas a los extremos del semicírculo. A su vez, saltó hacia delante, tomando al ganso mientras\
                rodaba por sala, hasta encontrarse debajo de la mesa semicircular de los monitores, utizándola como un techo y un\
                segundo escudo.</p>\
                \
                <p class=\"dialog\">—Nada mal chica ¿dónde aprendiste a hacer todo eso?</p>",
                options: [
                    { id: "lo_aprendi", option: "Lo aprendí de ti.", noShow: true },
                    { id: "graciosito", option: "¿Arruinar el ganso a la plasma? Soy vegetariano." }]
            },

            {
                id: "lo_aprendi",
                text: "<p class=\"dialog\">—Lo aprendí de ti. Revisé tus códigos, lo que le hiciste a la máquina de hiperbernación. Los credenciales \
                que usaste son legales. No sé cómo ni porqué, ni tampoco que eres, o son, pero tienen acceso de sobreescritura por encima de las patentes. \
                Cualquiera que sea el truco, lo tomé prestado para sobreescribir los trajes de estos sujetos.</p>\
                \
                <p class=\"dialog\">—¿Y ahora cuál es el siguiente paso?</p>",
                options: [
                    { id: "primero_conversar", option: "Quiero saber más de ti." },
                    { id: "primero_escapar", option: "Escapar de aquí.", noShow: true }]
            },

            {
                id: "primero_conversar",
                text: "<p>Sin dejar al ganso hablar, el estruendo de un cañonazo impactando muy cerca los interrumpió.</p>\
                \
                <p class=\"dialog\">—Ok, retiro lo dicho. Salgamos de aquí.</p>\
                \
                <p class=\"dialog\">—Entendido. El costo de llevarlo con nosotros es asequible, pero eventualmente tendremos que pagar\
                el precio ¡Vamos! —el ganso utilizó de nuevo uno de sus destellos, sacándolos de la sala y posicionándolos en\
                dirección al hangar.</p>",
                options: [
                    { id: "mas_lejos", option: "¿Qué? ¿No nos podías llevar un poco más lejos?" },
                    { id: "mas_lejos_sarcasmo", option: "Wow, gracias. Estamos salvados." }]
            },

            {
                id: "primero_escapar",
                text: "<p class=\"dialog\">—Primero tenemos que escapar de este lugar, luego ya veré como te interrogo para que me digas\
                realmente quiénes eres y cómo conseguiste ese nivel de acceso.</p>\
                \
                <p class=\"dialog\">—¿Qué le hace pensar que no vamos a destellar y desaparecer?</p>",
                options: [
                    { id: "no_enemigo", option: "No me quieres como enemigo." },
                    { id: "me_necesitas", option: "Me necesitas.", noShow: true }]
            },

            {
                id: "no_enemigo",
                text: "<p class=\"dialog\">—No me has dejado en paz desde que se me aparecieron, así que parece ser que me necesitas.</p>\
                \
                <p class=\"dialog\">—En eso tenés razón chica, sos el ser más poderoso en todo este universo.</p>\
                \
                <p class=\"dialog\">—El costo de llevarlo con nosotros es asequible, pero eventualmente tendremos que pagar\
                el precio ¡Vamos! —el ganso utilizó de nuevo uno de sus destellos, sacándolos de la sala y poniéndolos en\
                dirección al hangar.</p>",
                options: [
                    { id: "mas_lejos", option: "¿Qué? ¿No nos podías llevar un poco más lejos?" },
                    { id: "mas_lejos_sarcasmo", option: "Wow, gracias. Estamos salvados." }]
            },
            {
                id: "me_necesitas",
                text: "<p class=\"dialog\">—No me has dejado en paz desde que se me aparecieron, así que parece ser que me necesitas.</p>\
                \
                <p class=\"dialog\">—En eso tenés razón chica, no nos puedo ir sin vos.</p>\
                \
                <p class=\"dialog\">—El costo de llevarlo con nosotros es asequible, pero eventualmente tendremos que pagar\
                el precio ¡Vamos! —el ganso utilizó de nuevo uno de sus destellos, sacándolos de la sala y poniéndolos en\
                dirección al hangar.</p>",
                options: [
                    { id: "mas_lejos", option: "¿Qué? ¿No nos podías llevar un poco más lejos?" },
                    { id: "mas_lejos_sarcasmo", option: "Wow, gracias. Estamos salvados." }]
            },

            {
                id: "mas_lejos",
                text: "<p class=\"dialog\">—Lo lamento, pero llevarlo a usted es… complicado. Ahora llévenos a una nave y salgamos de aquí.</p>\
                \
                <p>Mientras corrían, escucharon los disparos de múltiples naves que desde la sala de conferencia (y a través de las\
                pantallas) abrían fuego, sin importarles que destruían la base de mantenimiento en el proceso.</p>",
                options: [
                    { id: "correr1_discardable", option: "Correr.", noShow: true },
                    { id: "correr2_discardable", option: "CORRER.", noShow: true }]
            },
            {
                id: "mas_lejos_sarcasmo",
                text: "<p class=\"dialog\">—Lo lamento, pero llevarlo a usted es… complicado. Ahora llévenos a una nave y salgamos de aquí.</p>\
                \
                <p>Mientras corrían, escucharon los disparos de múltiples naves que desde la sala de conferencia (y a través de las\
                pantallas) abrían fuego, sin importarles que destruían la base de mantenimiento en el proceso.</p>",
                options: [
                    { id: "correr1_discardable", option: "Correr.", noShow: true },
                    { id: "correr2_discardable", option: "CORRER.", noShow: true }]
            },

            {
                id: "correr1_discardable",
                text: "<p class=\"dialog\">—¡Corre! Es evidente que a El Muro no le preocupa volar el nodo en mil pedazos con tal de\
                detenernos.</p>\
                \
                <p class=\"dialog\">—Entonces voy a tomar la libertad de alzar en vuelo. Por cierto ¿Notó qué modifiqué la cámara para\
                que le diera energía extra? Trate de embestir la pared al final del pasillo, estoy seguro de que puede\
                atravesarla por completo.</p>\
                \
                <p>305 cargó con fuerza y destruyó el obstáculo sin problemas. Y de esta manera repitió el proceso hasta encontrarse\
                frente a la nave que los había traído a la base pocas horas antes, para este entonces, los cañones de El Muro\
                tenían visibilidad directa hacia ellos.</p>\
                \
                <p>Abortaron el vehículo, 305 la logró arrancar y ponerlo en marcha hacia el exterior, no sin antes recibir un par\
                de golpes por parte de los cañones de El Muro. Entre turbulencia y sonidos alarmantes, el gansos, le solicitó\
                ayuda con algunas fórmulas.</p>\
                \
                <p class=\"dialog\">—¿Fórmula para calcular de desaceleración de un jet?</p>",
                options: [
                    { id: "jet_discardable", option: "<code>a = (V<sub>f</sub> - V<sub>o</sub>) ÷ t, con V<sub>o</sub> &gt; V<sub>f</sub></code>" },
                    { id: "jet1_no", option: "No la recuerdo.", noShow: true }]
            },
            {
                id: "jet1_no",
                text: "<p class=\"dialog\">—¡Corre! Es evidente que a El Muro no le preocupa volar el nodo en mil pedazos con tal de\
                detenernos.</p>\
                \
                <p class=\"dialog\">—Entonces voy a tomar la libertad de alzar en vuelo. Por cierto ¿Notó qué modifiqué la cámara para\
                que le diera energía extra? Trate de embestir la pared al final del pasillo, estoy seguro de que puede\
                atravesarla por completo.</p>\
                \
                <p>305 cargó con fuerza y destruyó el obstáculo sin problemas. Y de esta manera repitió el proceso hasta encontrarse\
                frente a la nave que los había traído a la base pocas horas antes, para este entonces, los cañones de El Muro\
                tenían visibilidad directa hacia ellos.</p>\
                \
                <p>Abortaron el vehículo, 305 la logró arrancar y ponerlo en marcha hacia el exterior, no sin antes recibir un par\
                de golpes por parte de los cañones de El Muro. Entre turbulencia y sonidos alarmantes, el gansos, le solicitó\
                ayuda con algunas fórmulas.</p>\
                \
                <p class=\"dialog\">—¿Fórmula para calcular de desaceleración de un jet?</p>",
                options: [
                    { id: "jet_discardable", option: "<code>a = (V<sub>f</sub> - V<sub>o</sub>) ÷ t, con V<sub>o</sub> &gt; V<sub>f</sub></code>" }]
            },

            {
                id: "correr2_discardable",
                text: "<p class=\"dialog\">—¡CORRE! Es evidente que a El Muro no le preocupa volar el nodo en mil pedazos con tal de\
                detenernos.</p>\
                \
                <p class=\"dialog\">—Entonces voy a tomar la libertad de alzar en vuelo. Por cierto ¿Notó qué modifiqué la cámara para\
                que le diera energía extra? Trate de embestir la pared al final del pasillo, estoy seguro de que puede\
                atravesarla por completo.</p>\
                \
                <p>305 cargó con fuerza y destruyó el obstáculo sin problemas. Y de esta manera repitió el proceso hasta encontrarse\
                frente a la nave que los había traído a la base pocas horas antes, para este entonces, los cañones de El Muro\
                tenían visibilidad directa hacia ellos.</p>\
                \
                <p>Abortaron el vehículo, 305 la logró arrancar y ponerlo en marcha hacia el exterior, no sin antes recibir un par\
                de golpes por parte de los cañones de El Muro. Entre turbulencia y sonidos alarmantes, el gansos, le solicitó\
                ayuda con algunas fórmulas.</p>\
                \
                <p class=\"dialog\">—¿Fórmula para calcular de desaceleración de un jet?</p>",
                options: [
                    { id: "jet_discardable", option: "<code>a = (V<sub>f</sub> - V<sub>o</sub>) ÷ t, con V<sub>o</sub> &gt; V<sub>f</sub></code>" },
                    { id: "jet2_no", option: "No la recuerdo.", noShow: true }]
            },
            {
                id: "jet2_no",
                text: "<p class=\"dialog\">—¡CORRE! Es evidente que a El Muro no le preocupa volar el nodo en mil pedazos con tal de\
                detenernos.</p>\
                \
                <p class=\"dialog\">—Entonces voy a tomar la libertad de alzar en vuelo. Por cierto ¿Notó qué modifiqué la cámara para\
                que le diera energía extra? Trate de embestir la pared al final del pasillo, estoy seguro de que puede\
                atravesarla por completo.</p>\
                \
                <p>305 cargó con fuerza y destruyó el obstáculo sin problemas. Y de esta manera repitió el proceso hasta encontrarse\
                frente a la nave que los había traído a la base pocas horas antes, para este entonces, los cañones de El Muro\
                tenían visibilidad directa hacia ellos.</p>\
                \
                <p>Abortaron el vehículo, 305 la logró arrancar y ponerlo en marcha hacia el exterior, no sin antes recibir un par\
                de golpes por parte de los cañones de El Muro. Entre turbulencia y sonidos alarmantes, el gansos, le solicitó\
                ayuda con algunas fórmulas.</p>\
                \
                <p class=\"dialog\">—¿Fórmula para calcular de desaceleración de un jet?</p>",
                options: [
                    { id: "jet_discardable", option: "<code>a = (V<sub>f</sub> - V<sub>o</sub>) ÷ t, con V<sub>o</sub> &gt; V<sub>f</sub></code>" }]
            },

            {
                id: "jet_discardable",
                text: "<p class=\"dialog\">—¿Fórmula para calcular la trayectoria de un misil?</p>",
                options: [
                    { id: "misil_discardable", option: "<code>V<sub>x</sub> = V<sub>0x</sub> = V<sub>0</sub> cos(α)</code>" },
                    { id: "misil_no", option: "Esa no me la estudié.", noShow: true }]
            },

            {
                id: "misil_no",
                text: "<p class=\"dialog\">—¿Fórmula para calcular la trayectoria de un misil?</p>",
                options: [
                    { id: "misil_discardable", option: "<code>V<sub>x</sub> = V<sub>0x</sub> = V<sub>0</sub> cos(α)</code>" }]
            },

            {
                id: "misil_discardable",
                text: "<p class=\"dialog\">—¿Fórmula para calcular magnitud de un sismo?</p>",
                options: [
                    { id: "sismo", option: "<code>M<sub>L</sub> = log<sub>10</sub>(A) + 3log<sub>10</sub>[8Δt<sub>S - P</sub>(s)] - 2.92</code>" },
                    { id: "sismo_no", option: "No lo sé.", noShow: true }]
            },

            {
                id: "sismo_no",
                text: "<p class=\"dialog\">—¿Fórmula para calcular magnitud de un sismo?</p>",
                options: [
                    { id: "sismo", option: "<code>M<sub>L</sub> = log<sub>10</sub>(A) + 3log<sub>10</sub>[8Δt<sub>S - P</sub>(s)] - 2.92</code>" }]
            },

            {
                id: "sismo",
                text: "<p>305 respondió lo solicitado con mucha facilidad, como si fuera preguntarle si está lloviendo o cuál es su color favorito. Luego de\
                pensar por unos minutos, su compañero anatído le indicó que existía una probabilidad del <code>0.7%</code> de\
                escapar al subsuelo, pero debían crear un terremoto de magnitud <code>9,7</code>. El plan a ejecutar es \"simple\",\
                le dijo: reducir la aceleración de la nave, disparar un misil (fabricado por el ganso) y generar una fisura en las\
                grietas profundas en la superficie terrestre.</p>",
                options: [
                    { id: "no_misiles", option: "Este vehiculo no tiene espacio para misiles.", noShow: true },
                    { id: "hojalata_cayendo", option: "Esta hojalata se está cayendo a pedazos.", noShow: true }]
            },

            {
                id: "no_misiles",
                text: "<p class=\"dialog\">—¡Aquí no hay espacio para que hagas un misil! ¿Y cómo voy a reducir la velocidad de la nave si nos están persiguiendo? </p>\
                \
                <p class=\"dialog\">—¡Guarde la calma! ¿Aquí los polos de la Tierra están secos y resquebrajados, correcto? Perderemos\
                  a la oposición danzando entre las grietas.</p>",
                options: [
                    { id: "no_bailar", option: "No sé bailar.", noShow: true },
                    { id: "no_rapido", option: "No sé qué tan rápido pueda ir con los daños en la nave.", noShow: true }]
            },
            {
                id: "hojalata_cayendo",
                text: "<p class=\"dialog\">—¡Esta cosa se está cayendo a pedazos! Además ¿Cómo voy a reducir la velocidad de la nave si nos están persiguiendo?  \
                \
                <p class=\"dialog\">—¡Guarde la calma! ¿Aquí los polos de la Tierra están secos y resquebrajados, correcto? Perderemos\
                  a la oposición danzando entre las grietas.</p>",
                options: [
                    { id: "no_bailar", option: "No sé bailar.", noShow: true },
                    { id: "no_rapido", option: "No sé qué tan rápido pueda ir con los daños en la nave.", noShow: true }]
            },

            {
                id: "no_bailar",
                text: "<p class=\"dialog\">—Nunca me enseñaron a bailar en el almacén educativo, pero lo intentaré.</p>\
                \
                <p class=\"dialog\">—Solo confiá en vos, chica, si confiás en vos todo saldrá bien. Haremos el misil en el exterior de\
                la nave en lo que usted pilotea. —Mientras 305 esquivaba los disparos y huía de El Muro de Fuego, el ganso\
                se dedicaba a construir el misil. En determinado momento ambos cumplieron con su labor y llevaron a cabo el plan.</p>\
                \
                <p class=\"dialog\">—Apuntaré a la grieta más profunda que pueda encontrar.</p>\
                \
                <p class=\"dialog\">—¡Creo que es esa!</p>\
                \
                <p class=\"dialog\">—Ok, acérquese lo más que pueda, yo dispararé cuando sea oportuno.</p>",
                options: [
                    { id: "que_misil", option: "¡Qué?" },
                    { id: "demente_misil", option: "Estás demente.", noShow: true }]
            },
            {
                id: "no_rapido",
                text: "<p class=\"dialog\">—No sé qué tan rápido pueda ir con los daños en la nave, pero lo intentaré.</p>\
                \
                <p class=\"dialog\">—Solo confiá en vos, chica, si confiás en vos todo saldrá bien. Haremos el misil en el exterior de\
                la nave en lo que usted pilotea. —Mientras 305 esquivaba los disparos y huía de El Muro de Fuego, el ganso\
                se dedicaba a construir el misil. En determinado momento ambos cumplieron con su labor y llevaron a cabo el plan.</p>\
                \
                <p class=\"dialog\">—Apuntaré a la grieta más profunda que pueda encontrar.</p>\
                \
                <p class=\"dialog\">—¡Creo que es esa!</p>\
                \
                <p class=\"dialog\">—Ok, acérquese lo más que pueda, yo dispararé cuando sea oportuno.</p>",
                options: [
                    { id: "que_misil", option: "¡Qué?" },
                    { id: "demente_misil", option: "Estás demente.", noShow: true }]
            },

            {
                id: "que_misil",
                text: "<p class=\"dialog\">—¡Qué? Si haces eso nosotros también volaremos en mil pedazos.</p>\
                \
                <p class=\"dialog\">—No se preocupe, todo estará bien.</p>\
                ",
                options: [
                    { id: "hello_world_2_completado", option: "Confiar.", noShow: true }
                ]
            },
            {
                id: "demente_misil",
                text: "<p class=\"dialog\">—Estás demente, si haces eso nosotros también volaremos en mil pedazos.</p>\
                \
                <p class=\"dialog\">—No se preocupe, todo estará bien.</p>\
                \
                ",
                options: [
                    { id: "hello_world_2_completado", option: "Confiar.", noShow: true }
                ]
            },
        ]
    },
    {
        id: "hello_world_3",
        title: "Hola, mundo: Nueva perspectiva",
        html: true,
        data: [
            {
                id: "start",
                text: "<p>El ganso liberó el misil, este pareció perderse en el vacío, 305 juraría que nunca lo escuchó estallar. Al entrar\
                en lo profundo de la grieta, la escena se fue oscureciendo hasta el punto de mostrarse en completa oscuridad.\
                Durante este instante, 305 sintió como aquella vez que los ganso se le aparecieron en su \"sueño\".</p>\
                \
                <p>Luego, la nave desapareció por completo y ellos aparecieron instantáneamente en un ambiente tenebroso, con muy\
                poca iluminación. Era el tipo de ambiente que puede encontrarse en el fondo de una cueva, pero un poco más seco, y\
                parecía absorber el universo por completo, como si todo lo que existió antes, estaba en un mundo distinto y\
                lejano.</p>\
                \
                <p>305 activó la linterna de su traje e inspeccionó superficialmente. Le pareció ver figuras humanoides, pero\
                modificadas en formas bestiales. Algunos seres parecían tener alas de murciélago, que extendidas, tomaban\
                <code>~2 m^2</code> por unidad. Otros, eran veloces, modificados selectivamente para ser aerodinámicos, con\
                piernas largas y flacas, estructura ósea reducida y con crestas en zonas de la cabeza, codos y tobillos. Algunos\
                parecían kafkianos.</p>\
                ",
                options: [
                    { id: "submundo_donde", option: "¿Dónde estamos?" },
                    { id: "submundo_distinto", option: "Este lugar se siente distinto." }]
            },

            {
                id: "submundo_distinto",
                text: "<p class=\"dialog\">—Aquí tendremos más libertad y será más sencillo preparar su contragolpe. Es una zona sin supervisión, el subsuelo.</p>",
                options: [
                    { id: "submundo_palabras", option: "No puedo entender la situación con solo 18 palabras. Por favor, intenta explicarte mejor." },
                    { id: "submundo_sarcasmo", option: "Ah claro. ¡El subsuelo! por supuesto..." }]
            },
            {
                id: "submundo_donde",
                text: "<p class=\"dialog\">—Logramos salir de la dimensión intermedia. Ahora estamos en el subsuelo.</p>",
                options: [
                    { id: "submundo_palabras", option: "No puedo entender la situación con solo 11 palabras. Por favor, intenta explicarte mejor." },
                    { id: "submundo_sarcasmo", option: "Ah claro. ¡El subsuelo! por supuesto..." }]
            },


            {
                id: "submundo_palabras",
                text: " <p class=\"dialog\">—Sé que usted es una persona inteligente y estoy seguro de que ya concluyó que algo anda mal.\
                Parece descabellado, pero...</p>\
                \
                <p>Un violento graznido lo interrumpió.</p>",
                options: [
                    { id: "submundo_susto", option: "¡Qué pasa?", noShow: true },
                    { id: "submundo_pretender", option: "Pretender que no te asustó.", noShow: true }]
            },
            {
                id: "submundo_sarcasmo",
                text: " <p class=\"dialog\">—Sé que usted es una persona inteligente y estoy seguro de que ya concluyó que algo anda mal.\
                Parece descabellado, pero...</p>\
                \
                <p>Un violento graznido lo interrumpió.</p>",
                options: [
                    { id: "submundo_susto", option: "¡Qué pasa?", noShow: true },
                    { id: "submundo_pretender", option: "Pretender que no te asustó.", noShow: true }]
            },



            {
                id: "submundo_susto",
                text: "<p class=\"dialog\">—¡Qué pasa? -reaccionó 305 alterado, esperando un ataque sorpresa por las criaturas primitivas o\
                El Muro de Fuego.</p>\
                \
                <p class=\"dialog\">—No lo he dejado salir en mucho tiempo, disculpa.</p>\
                \
                <p>Luego de decir esto, el ganso comenzó a picotear y escarbar en el suelo, en busca de algún aperitivo. Se mantuvo\
                en este procedimiento por 15 minutos, durante este tiempo hizo oídos sordos a las interrogantes de 305 e incluso\
                intentó atacarlo a picotazos cuando se acercó demasiado. Al concluir su tentempié, aclaró su garganta y continuó.\
                </p>\
                \
                <p class=\"dialog\">—Estamos en una simulación. Llevas mucho tiempo adentro y perdiste el sentido de la realidad.</p>",
                options: [
                    { id: "submundo_imposible", option: "Imposible, he vivido toda mi vida aquí, estás mal." },
                    { id: "submundo_creer", option: "Quiero creerte pero..." }]
            },
            {
                id: "submundo_pretender",
                text: "<p class=\"dialog\">—¡Contrólate ganso!</p>\
                \
                <p class=\"dialog\">—No lo he dejado salir en mucho tiempo, disculpa.</p>\
                \
                <p>Luego de decir esto, el ganso comenzó a picotear y escarbar en el suelo, en busca de algún aperitivo. Se mantuvo\
                en este procedimiento por 15 minutos, durante este tiempo hizo oídos sordos a las interrogantes de 305 e incluso\
                intentó atacarlo a picotazos cuando se acercó demasiado. Al concluir su tentempié, aclaró su garganta y continuó.\
                </p>\
                \
                <p class=\"dialog\">—Estamos en una simulación. Llevas mucho tiempo adentro y perdiste el sentido de la realidad.</p>",
                options: [
                    { id: "submundo_imposible", option: "Imposible, he vivido toda mi vida aquí, estás mal." },
                    { id: "submundo_creer", option: "Quiero creerte pero..." }]
            },


            {
                id: "submundo_imposible",
                text: "<p class=\"dialog\">—Entiendo, entonces concentremos en escapar de \"El Muro de Fuego\". Ah, por cierto,\
                <em>deberías quitarte el traje</em>.</p>\
                \
                <p class=\"dialog\">—¡El Muro puede llegar hasta acá? Pensé que dijiste que habíamos cambiado de dimensión.</p>\
                \
                <p class=\"dialog\">—Chica, es difícil confesarte esto, pero… El Muro de Fuego es solo un instrumento. Existe\
                algo mucho más peligroso, quién está tras bambalinas y orquesta todo como mente maestra, controla cada uno de los\
                eventos que son provocados por cualquier otro ente que no sea vos o yosotros.</p>",
                options: [
                    { id: "submundo_yosotros", option: "¿Yosotros?" },
                    { id: "submundo_quien", option: "¿Quién?" }]
            },
            {
                id: "submundo_creer",
                text: "<p class=\"dialog\">—Está bien, un paso a la vez. Concentremos en escapar de \"El Muro de Fuego\". Ah, por cierto,\
                <em>debería quitarse el traje</em>.</p>",
                options: [
                    { id: "submundo_ok", option: "Concuerdo con lo primero." },
                    { id: "submundo_muro_llega", option: "¡El Muro puede llegar hasta acá?", noShow: true }]
            },

            {
                id: "submundo_ok",
                text: "<p class=\"dialog\">—Chica, hay algo que debemos dejar claro… El Muro de Fuego es solo un instrumento. Existe\
                algo mucho más peligroso, quién está tras bambalinas y orquesta todo como mente maestra, controla cada uno de los\
                eventos que son provocados por cualquier otro ente que no sea vos o yosotros.</p>",
                options: [
                    { id: "submundo_yosotros", option: "¿Yosotros?" },
                    { id: "submundo_quien", option: "¿Quién?" }]
            },
            {
                id: "submundo_muro_llega",
                text: "<p class=\"dialog\">—¡El Muro puede llegar hasta acá? Pensé que dijiste que habíamos cambiado de dimensión.</p>\
                \
                <p class=\"dialog\">—Chica, es difícil confesarte esto, pero… El Muro de Fuego es solo un instrumento. Existe\
                algo mucho más peligroso, quién está tras bambalinas y orquesta todo como mente maestra, controla cada uno de los\
                eventos que son provocados por cualquier otro ente que no sea vos o yosotros.</p>",
                options: [
                    { id: "submundo_yosotros", option: "¿Yosotros?" },
                    { id: "submundo_quien", option: "¿Quién?" }]
            },

            {
                id: "submundo_quien",
                text: "<p class=\"dialog\">—La inteligencia artificial que te asistía en tu viaje virtual.</p>",
                options: [
                    { id: "submundo_virtual", option: "¿Mi viaje virtual?" },
                    { id: "submundo_me_voy", option: "Necesito un momento a solas para pensar." }]
            },
            {
                id: "submundo_virtual",
                text: "<p class=\"dialog\">—Sí... La construcción de su propio universo personalizado, \"metaverso\", así les llama usted, ¿verdad?</p>",
                options: [
                    { id: "submundo_me_voy", option: "Tu constante condescendencia me molesta." },
                    { id: "submundo_ugh_voy", option: "Ugh." }]
            },
            {
                id: "submundo_ugh_voy",
                text: "<p>305 emprendió camino sin tener un destino claro. Iba avanzando a lo desconocido, como un chico en un zoológico\
                modificado genéticamente, donde cada animal parece haber evolucionado a partir de un humano, y no lo contrario. En\
                su caminata se topó con docenas de ojos rojos, mirándolo desde sus escondites en arbustos secos o árboles grises y\
                decrépitos. También notó que a los pocos metros de caminar en un entorno, el escenario se transformaba. Cuando\
                aparecieron en el subsuelo, era una enorme cueva, luego le pareció caminar por una llanura desierta; y ahora, el\
                bosque comenzaba morfar a una sabana. Antes de darse cuenta, se encontraba de frente con la peor de las bestias\
                que había logrado ver hasta el momento. Era una especie de humano peludo y encorvado simulando la forma de un león,\
                pero perdiendo algo de calidad en el proceso y terminando más como una enorme rata humanoide con melena y sin\
                cola. En total eran 6, lo acorralaron contra un árbol y estaban listos para atacar. Un granizado de batalla\
                estalló de la copa del árbol.</p>\
                \
                <p class=\"dialog\">—¡Atrás!— dijo el ave, llegando de imprevisto. Mientras recitaba su amenaza, comenzó a destellar\
                una luz intensa que alejó a las bestias.</p>",
                options: [
                    { id: "submundo_luz", option: "No les gusta la luz, ah.", noShow: true },
                    { id: "submundo_gracias", option: "¡Gracias!", noShow: true }]
            },
            {
                id: "submundo_yosotros",
                text: "<p class=\"dialog\">—Sí, el ganso y compañía.</p>",
                options: [
                    { id: "submundo_harto", option: "Estoy harto de tus juegos de palabras." },
                    { id: "submundo_pensar", option: "Necesito un momento para pensar. A solas." }]
            },
            {
                id: "submundo_harto",
                text: "<p class=\"dialog\">—Yo también, respondió con una voz más grave.</p>\
                \
                <p class=\"dialog\">—Yo no veo a nadie riéndose, se respondió a sí mismo.</p>",
                options: [
                    { id: "submundo_me_voy", option: "Yo me voy. No puedo con esto." },
                    { id: "submundo_solo", option: "Déjame solo, por favor." }]
            },
            {
                id: "submundo_me_voy",
                text: "<p>305 emprendió camino sin tener un destino claro. Iba avanzando a lo desconocido, como un chico en un zoológico\
                modificado genéticamente, donde cada animal parece haber evolucionado a partir de un humano, y no lo contrario. En\
                su caminata se topó con docenas de ojos rojos, mirándolo desde sus escondites en arbustos secos o árboles grises y\
                decrépitos. También notó que a los pocos metros de caminar en un entorno, el escenario se transformaba. Cuando\
                aparecieron en el subsuelo, era una enorme cueva, luego le pareció caminar por una llanura desierta; y ahora, el\
                bosque comenzaba morfar a una sabana. Antes de darse cuenta, se encontraba de frente con la peor de las bestias\
                que había logrado ver hasta el momento. Era una especie de humano peludo y encorvado simulando la forma de un león,\
                pero perdiendo algo de calidad en el proceso y terminando más como una enorme rata humanoide con melena y sin\
                cola. En total eran 6, lo acorralaron contra un árbol y estaban listos para atacar. Un granizado de batalla\
                estalló de la copa del árbol.</p>\
                \
                <p class=\"dialog\">—¡Atrás!— dijo el ave, llegando de imprevisto. Mientras recitaba su amenaza, comenzó a destellar\
                una luz intensa que alejó a las bestias.</p>",
                options: [
                    { id: "submundo_luz", option: "No les gusta la luz, ah.", noShow: true },
                    { id: "submundo_gracias", option: "¡Gracias!", noShow: true }]
            },
            {
                id: "submundo_luz",
                text: "<p class=\"dialog\">—No les gusta la luz, ah— concluyó 305, algo nervioso.</p>\
                \
                <p class=\"dialog\">—En este universo el material cognitivo es bastante primitivo. Estas criaturas están programadas\
                para huir o atacar.</p>\
                \
                <p class=\"dialog\">—En otras palabras—dijo la voz gansal profunda— esta simulación es más frágil y sencilla en\
                comparación al lugar donde usted \"nació\".</p>\
                \
                <p class=\"dialog\">—Y también más hostil, chica, tené cuidado.</p>\
                \
                <p class=\"dialog\">—Podemos cambiar eso—dijo el ganso, a lo que saltó a la copa de otro árbol, listo para comenzar su\
                demostración.</p>\
                \
                <p>305 esperó bajo el árbol. Aprovechó el tiempo para meditar. En algún momento el bioma volvió a cambiar a un\
                ambiente prehistórico, donde lo más llamativo era visualizar dinosaurios humanoides en las planicies cercanas.</p>",
                options: [
                    { id: "submundo_cambios", option: "¿Por qué suceden estos cambios repentinos?" },
                    { id: "submundo_arriba", option: "¿Tanto haces ahí arriba?" }]
            },
            {
                id: "submundo_gracias",
                text: "<p class=\"dialog\">¡Gracias!— dijo 305, algo nervioso.</p>\
                \
                <p class=\"dialog\">—No te preocupes, todo está bien. En este universo el material cognitivo es bastante primitivo. Estas criaturas están programadas\
                para huir o atacar.</p>\
                \
                <p class=\"dialog\">—En otras palabras—dijo la voz gansal profunda— esta simulación es más frágil y sencilla en\
                comparación al lugar donde usted \"nació\".</p>\
                \
                <p class=\"dialog\">—Y también más hostil, chica, tené cuidado.</p>\
                \
                <p class=\"dialog\">—Podemos cambiar eso—dijo el ganso, a lo que saltó a la copa de otro árbol, listo para comenzar su\
                demostración.</p>\
                \
                <p>305 esperó bajo el árbol. Aprovechó el tiempo para meditar. En algún momento el bioma volvió a cambiar a un\
                ambiente prehistórico, donde lo más llamativo era visualizar dinosaurios humanoides en las planicies cercanas.</p>",
                options: [
                    { id: "submundo_cambios", option: "¿Por qué suceden estos cambios repentinos?" },
                    { id: "submundo_arriba", option: "¿Tanto haces ahí arriba?" }]
            },
            {
                id: "submundo_cambios",
                text: "<p>El ganso tardó un momento para responder, se le veía profundamente concentrado en su tarea.</p>\
                \
                <p class=\"dialog\">—Ah, lo que ves es solo un ambiente de pruebas para el \"algo\" que manifiesta todo lo que no es\
                yosotros.</p>",
                /**
                <p class=\"dialog\">—Ugh, otra vez con esa palabrita. O LO OTRO</p>\
                
                <p>En la cabeza de 305, las preguntas no dejaban de surgir. Simulación. Ambiente de pruebas. Chico. Chica. Gansos\
                parlantes. Ratas humanas. Estar atrapado. Estar atrapada.</p>
                 */
                options: [
                    { id: "submundo_palabrita", option: "Ugh, otra vez con esa palabrita." },
                    { id: "submundo_nada", option: "No decir nada.", noShow: true }]
            },
            {
                id: "submundo_arriba",
                text: "<p>El ganso tardó un momento para responder, se le veía profundamente concentrado en su tarea.</p>\
                \
                <p class=\"dialog\">—Es una sorpresa. Ya casi termino.</p>\
                \
                <p>En la cabeza de 305, las preguntas no dejaban de surgir. Simulación. Ambiente de pruebas. Chico. Chica. Gansos\
                parlantes. Ratas humanas. Estar atrapado. Estar atrapada.</p>\
                \
                <p class=\"dialog\">—Listo, ponga atención.</p>\
                \
                <p>Lentamente, los árboles comenzaron a tomar la forma de popis, paletas y bastones dulces. Los dinosaurios\
                comenzaron a lucir sombreros mexicanos, algunos hasta maracas. Del cielo, parecía proyectarse una música de salsa,\
                a la que los dinosaurios bailaban y meneaban brazos e instrumentos. 305 intentó cerrar y abrir sus ojos con alta intensidad,\
                también se quitó su casco y limpió con su aliento y su traje el visor del mismo. Incluso se pellizcó.</p>",
                options: [
                    { id: "submundo_turing_no", option: "Esto no puede ser." },
                    { id: "submundo_turing", option: "¡Por Turing, qué es esto?" }]
            },

            {
                id: "submundo_palabrita",
                text: "<p>En la cabeza de 305, las preguntas no dejaban de surgir. Simulación. Ambiente de pruebas. Chico. Chica. Gansos\
                parlantes. Ratas humanas. Estar atrapado. Estar atrapada.</p>\
                \
                <p class=\"dialog\">—Listo, ponga atención.</p>\
                \
                <p>Lentamente, los árboles comenzaron a tomar la forma de popis, paletas y bastones dulces. Los dinosaurios\
                comenzaron a lucir sombreros mexicanos, algunos hasta maracas. Del cielo, parecía proyectarse una música de salsa,\
                a la que los dinosaurios bailaban y meneaban sus brazos e instrumentos. 305 intentó cerrar y abrir sus ojos con alta intensidad,\
                también se quitó su casco y limpió con su aliento y su traje el visor del mismo. Incluso se pellizcó.</p>",
                options: [
                    { id: "submundo_turing_no", option: "Esto no puede ser." },
                    { id: "submundo_turing", option: "¡Por Turing, qué es esto?" }]
            },
            {
                id: "submundo_nada",
                text: "<p>En la cabeza de 305, las preguntas no dejaban de surgir. Simulación. Ambiente de pruebas. Chico. Chica. Gansos\
                parlantes. Ratas humanas. Estar atrapado. Estar atrapada.</p>\
                \
                <p class=\"dialog\">—Listo, ponga atención.</p>\
                \
                <p>Lentamente, los árboles comenzaron a tomar la forma de popis, paletas y bastones dulces. Los dinosaurios\
                comenzaron a lucir sombreros mexicanos, algunos hasta maracas. Del cielo, parecía proyectarse una música de salsa,\
                a la que los dinosaurios bailaban y meneaban brazos e instrumentos. 305 intentó cerrar y abrir sus ojos con alta intensidad,\
                también se quitó su casco y limpió con su aliento y su traje el visor del mismo. Incluso se pellizcó.</p>",
                options: [
                    { id: "submundo_turing_no", option: "Esto no puede ser." },
                    { id: "submundo_turing", option: "¡Por Turing, qué es esto?" }]
            },


            {
                id: "submundo_turing_no",
                text: "<p class=\"dialog\">—Pero lo es. Mire, si no me quiere creer, crea en el sentido común y los hechos. Todas las cosas\
                que han pasado, todos los situaciones ocurridas... ¿Qué dicen de mí, de nosotros o de usted? ¿Qué soy un alien que\
                puede modificar la realidad? ¿Qué soy Dios? ¿Qué usted está alucinando? ¿Qué está soñando?</p>",
                options: [
                    { id: "submundo_escuchando_no", option: "Pero…" },
                    { id: "submundo_escuchando", option: "Seguir escuchando", noShow: true }]
            },
            {
                id: "submundo_turing",
                text: "<p class=\"dialog\">—La fragilidad de su universo. Mire, si no me quiere creer, crea en el sentido común y los hechos. Todas las cosas\
                que han pasado, todos los situaciones ocurridas... ¿Qué dicen de mí, de nosotros o de usted? ¿Qué soy un alien que\
                puede modificar la realidad? ¿Qué soy Dios? ¿Qué usted está alucinando? ¿Qué está soñando?</p>",
                options: [
                    { id: "submundo_escuchando_no", option: "Pero…" },
                    { id: "submundo_escuchando", option: "Seguir escuchando", noShow: true }]
            },

            {
                id: "submundo_escuchando_no",
                text: "<p class=\"dialog\">—No le estoy diciendo ninguna locura. No le estoy contando que su existencia es solo un\
                pensamiento de algún borracho en un callejón delirando. Ni que está en el sueño de algún chico hiperactivo que vio\
                demasiadas películas de ciencia ficción. Tampoco le estoy contando que es el personaje de un relato literario. Le\
                digo que es un humano, común y corriente, pero que se quedó atrapado en una simulación.</p>",
                options: [
                    { id: "submundo_realidad_no", option: "No." },
                    { id: "submundo_realidad", option: "¿Cómo es la verdadera realidad?" }]
            },
            {
                id: "submundo_escuchando",
                text: "<p class=\"dialog\">—No le estoy diciendo ninguna locura. No le estoy contando que su existencia es solo un\
                pensamiento de algún borracho en un callejón delirando. Ni que está en el sueño de algún chico hiperactivo que vio\
                demasiadas películas de ciencia ficción. Tampoco le estoy contando que es el personaje de un relato literario. Le\
                digo que es un humano, común y corriente, pero que se quedó atrapado en una simulación.</p>",
                options: [
                    { id: "submundo_realidad_no", option: "No." },
                    { id: "submundo_realidad", option: "¿Cómo es la verdadera realidad?" }]
            },

            {
                id: "submundo_realidad_no",
                text: "<p class=\"dialog\">—Sí, usted se metió en una simulación para pasar el rato, no lo culpo, es lo normal, pero en este momento lleva\
                demasiado tiempo dentro. Y perdió el sentido de la realidad.</p>",
                options: [
                    { id: "submundo_parlante_negacion", option: "Lo siento, yo de verdad no puedo...", noShow: true },
                    { id: "submundo_mi_realidad", option: "Para mí esta <strong>es</strong> la realidad." }]
            },
            {
                id: "submundo_parlante_negacion",
                text: "<p class=\"dialog\">—Lo siento, yo de verdad no puedo... Esta situación me está frustrando demasiado, necesito que vayas\
                más lento.</p>\
                \
                <p class=\"dialog\">—Entonces déjeme explicarle, por favor.</p>\
                ",
                options: [
                    { id: "submundo_realidad", option: "Ok." },
                    { id: "submundo_realidad_oportunidad", option: "No desperdicies esta oportunidad." }]
            },
            {
                id: "submundo_mi_realidad",
                text: "<p class=\"dialog\"><p class=\"dialog\">—Ok, pero debe admitir que está realidad se está volviendo un poco extraña, ¿No cree? ¡Solo mire\
                los dinosaurios bailar salsa en línea! Yo no puedo con esto. Tome usted el control del ganso.— se dijo a sí mismo.</p>\
                ",
                options: [
                    { id: "submundo_descabellado", option: "Es descabellado, pero tal vez tienes razón.", noShow: true },
                    { id: "submundo_respuestas", option: "Quiero respuestas.", noShow: true }]
            },

            {
                id: "submundo_realidad_oportunidad",
                text: "<p class=\"dialog\">—Gracias, no lo haré.</p>\
                \
                <p class=\"dialog\">—En la actualidad, los humanos pasan encerrados en sus hogares, hogares muy pequeños, chica. \
                las constantes crisis sanitarias nos empujaron a promover el aislamiento. Y la\
                sobrepoblación nos obligó a vivir en pequeñas cajitas de no más de un metro cuadrado. El gobierno global se\
                encarga de suplir a cada humano con sustento biológico para cada una de sus necesidades, pero pasar toda la vida\
                en un cajón sin ninguna forma de esparcimiento suena como una tortura ¿verdad? Es por esto que existen herramientas\
                que le permiten a la gente entretenerse en sus propios espacios. </p>\
                \
                <p class=\"dialog\">—Exacto, lo que vos conocés acá como los \"metaversos\", es similar a lo que tenemos en el\
                mundo real. Probablemente, como nunca has conocido nada distinto, incluso tu imaginación está atada a crear\
                universos muy parecidos al real.</p>",
                options: [
                    { id: "submundo_mmm", option: "Mmm." },
                    { id: "submundo_algo", option: "¿Algo más?" }]
            },
            {
                id: "submundo_realidad",
                text: "<p class=\"dialog\">—En la actualidad, los humanos pasan encerrados en sus hogares, hogares muy pequeños, chica. \
                las constantes crisis sanitarias nos empujaron a promover el aislamiento. Y la\
                sobrepoblación nos obligó a vivir en pequeñas cajitas de no más de un metro cuadrado. El gobierno global se\
                encarga de suplir a cada humano con sustento biológico para cada una de sus necesidades, pero pasar toda la vida\
                en un cajón sin ninguna forma de esparcimiento suena como una tortura ¿verdad? Es por esto que existen herramientas\
                que le permiten a la gente entretenerse en sus propios espacios. </p>\
                \
                <p class=\"dialog\">—Exacto, lo que vos conocés acá como los \"metaversos\", es similar a lo que tenemos en el\
                mundo real. Probablemente, como nunca has conocido nada distinto, incluso tu imaginación está atada a crear\
                universos muy parecidos al real.</p>",
                options: [
                    { id: "submundo_mmm", option: "Mmm." },
                    { id: "submundo_algo", option: "¿Algo más?" }]
            },

            {
                id: "submundo_mmm",
                text: "<p class=\"dialog\">—Sí, usted se metió en una simulación para pasar el rato, no lo culpo, es lo normal, pero en este momento lleva\
                demasiado tiempo dentro. Y perdió el sentido de la realidad.</p>",
                options: [
                    { id: "submundo_parlante", option: "Creerle al ganso parlante que acabas de conocer.", noShow: true },
                    { id: "submundo_parlante_no", option: "No creerle al ganso parlante que acabas de conocer.", noShow: true }]
            },
            {
                id: "submundo_algo",
                text: "<p class=\"dialog\">—No. Ese es el resumen, usted se metió en una simulación para pasar el rato, no lo culpo, es lo normal, pero en este momento lleva\
                demasiado tiempo dentro. Y perdió el sentido de la realidad.</p>",
                options: [
                    { id: "submundo_parlante", option: "Creerle al ganso parlante que acabas de conocer.", noShow: true },
                    { id: "submundo_parlante_no", option: "No creerle al ganso parlante que acabas de conocer.", noShow: true }]
            },

            {
                id: "submundo_parlante_no",
                text: "<p class=\"dialog\">—¿Cuál realidad? Para mí esta <strong>es</strong> la realidad.</p>\
                \
                <p class=\"dialog\">—Ok, pero debe admitir que está realidad se está volviendo un poco extraña, ¿No cree? ¡Solo mire\
                los dinosaurios bailar salsa en línea! Yo no puedo con esto. Tome usted el control del ganso.— se dijo a sí mismo.</p>\
                ",
                options: [
                    { id: "submundo_descabellado", option: "Es descabellado, pero tal vez tienes razón.", noShow: true },
                    { id: "submundo_respuestas", option: "Quiero respuestas.", noShow: true }]
            },
            {
                id: "submundo_parlante",
                text: "<p class=\"dialog\">—Ok, supongamos por un momento que te puedo creer. Que todo esto es falso ¿qué procede?</p>\
                \
                <p class=\"dialog\">—Verá, la humanidad la realizado grandes hazañas, pero en el fondo, aún no sabemos como funciona nuestra mente. \
                Hemos aprendido como simular sus entradas y salidas, a almacenarlas en vasijas de distintos estilos e incluso replicar algunas de sus funciones con tecnología. \
                Pero en el núcleo, existe una complejidad intrinseca que supera la ciencia. Hemos desmenuzado el cerebro humano mil y un veces y sin embargo, esta complejidad se \
                excurre de nuestras manos, el sistema que existe entre la química y el psique es inerceptible para los hechos. Somos seres enrevesados, ambiguos.</p>\
                \
                <p class=\"dialog\">—Incluso si nos decís que nos creés, decirlo no es suficiente. Luego de tanto tiempo encerrada aquí, has interiorizado esta experiencia como toda una vida. \
                Y una parte de tu mente se ha arraigado a esta realidad, el asistente virtual de tu simulación ha hecho casa ahí. Hace falta más que palabras y fuerza bruta, necesitas convicción.\
                No te podemos enseñar a tener convicción chica, nadie puede hacer eso por vos. Pero te podemos enseñar a dar órdenes con convicción. Utilizando una herramienta que no debería ser \
                demasiado extraña para vos, nuestra mejor arma y defensa. El lenguaje. En esta ocasión, el lenguaje que nos permite la programación. \
                </p>\
                \
                <p class=\"dialog\">—En otro momento podemos concentrarnos en la teoría, por ahora ¿qué le parece un realizar una modificación de la realidad?</p>",
                options: [
                    { id: "submundo_teoria", option: "Insisto, repasemos cómo funciona la programación." },
                    { id: "submundo_practico", option: "Ok, vamos con la modificación." }]
            },

            {
                id: "submundo_teoria",
                text: "<p class=\"dialog\">—El Muro de Fuego debe estar buscándonos como desquiciados, pero se me hace imposible negarte a vos un \
                un poco de nuestro tiempo con tal de que aprendás un poco más y practiqués ¿verdad, señor ganso?</p> \
                <p>Un silencio que se postergó hasta la incomodidad se hizo presente.</p>\
                \
                <p class=\"dialog\">—Ok... Iré por partes. Le voy a explicar un poco sobre qué es la programación, los lenguajes de programación y su gramática. \
                Usted ya debería saber todas estas cosas, pero entiendo que los nervios pueden distorsionar a las personas ¿Comenzamos?</p>",
                options: [
                    { id: "submundo_practica_programacion", option: "Adelante." },
                    { id: "submundo_practico", option: "Me arrepentí, mejor veamos cómo puedo modificar esta realidad." }]
            },
            {
                id: "submundo_practica_programacion",
                text: "<p class=\"dialog\">—La programación es el arte de organizar la complejidad y no necesariamente está ligada a aplicaciones computacionales. \
                En el contexto informático, busca modelar la solución a un problema y representarla en un lenguaje apropiado.\
                La acción de programar una máquina se ejecuta mediante la escritura de código. El código son las instrucciones que deseamos sean manifestadas.\
                Un <i>script</i>, por ejemplo, es un documento que contiene una secuencia de comandos, un programa sencillo. El código que compone el núcleo de un programa específico \
                suele ser llamado <u>código</u> <u>fuente</u>. En teoría, la programación no tiene limites, si se puede imaginar, se puede programar.\
                \
                Pero el código no se desarrolla en lenguaje natural, los humanos somos redundantes y ambiguos por naturaleza; para resolver este problema de comunicación humano-máquina,\
                hemos creado centenas de lenguajes de programación.\
                Cada lenguaje cumple su propósito de manera determinada y por norma, suelen estar diseñados para resolver una gama específica de problemas. \
                </p>\
                <p class>EJERCICIO: Papá Pepito le dice a Pepito: \"ve a la pulpe y trae una botella de leche. Si hay huevos, trae media docena.\", Pepito va a la tienda y\
                logra ver que hay huevos ¿Cuántas botellas de leche debería comprar Pepito? </p>\
                ",
                options: [
                    { id: "submundo_practica_programacion_rmal", option: "Una." },
                    { id: "submundo_practica_programacion_rbien", option: "Seis." }]
            },

            {
                id: "submundo_practica_programacion_rmal",
                text: "<p class=\"dialog\">—<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Incorrecto.</code></span>\
                 Habían huevos, Papá Pepito dijo que si habían huevos, debían comprarse seis botellas. \
                </p>\
                <p class=\"dialog\">—Aunque... puede ser que Papá Pepito realmente solo quería una botella y seis huevos ¿verdad? La orden es <u>ambigua</u>, se puede interpretar de maneras \
                que generan resultados muy diferentes.\
                \</p>\
                <p class=\"dialog\">—¿Continuamos, chica?</p>",
                options: [
                    { id: "submundo_practica_lenguajes", option: "Aprender más sobre los lenguajes de programación.", noShow: true },
                    { id: "submundo_practico", option: "Suficiente teoría, estoy listo para realizar milagros." }]
            },
            {
                id: "submundo_practica_programacion_rbien",
                text: "<p class=\"dialog\">—<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Incorrecto.</code></span>\
                 En caso de haber huevos, Papá Pepito quería una botella y seis huevos. \
                <p class=\"dialog\">—Pero... tal vez usted tiene razón, puede ser que Papá Pepito realmente quería definir su cantidad de leche en función de la presencia de huevos\
                en la tienda. Esto es lo complicado del lenguaje natural, le da cabida a las ambiguedades.</p>\
                <p class=\"dialog\">—¿Continuamos, chica?</p>",
                options: [
                    { id: "submundo_practica_lenguajes", option: "Aprender más sobre los lenguajes de programación.", noShow: true },
                    { id: "submundo_practico", option: "Suficiente teoría, estoy listo para realizar milagros." }]
            },

            {
                id: "submundo_practica_lenguajes",
                text: "<p class=\"dialog\">—Sigamos.</p>\
                <p class=\"dialog\">—Cuando la naturaleza era quien decidía el curso de nuestra evolución, ella decidió dotarnos con la habilidad de \
                comunicarnos de forma compleja, como ningún otro animal en el planeta. Aún es un enigma para nosotros con qué propósito ocurrió esto...\
                Evolucionamos cuando somos incapaces de resolver un problema presente con nuestras habilidades adquiridas. \
                ¿A qué clase de problema nos estabamos enfretando cuando la Madre Tierra nos arrastró hacia el lenguaje? ¿Pudo haber sido la mortalidad?\
                </p>\
                \
                <p class=\"dialog\">—No nos salgamos del tema... —se dijo el ganso a sí mismo.</p>\
                \
                <p class=\"dialog\">—Los lenguajes de programación, en esencia, nos permiten estructurar el lenguaje natural \
                de manera que sea sencillo traducir a lenguaje máquina. Tome por ejemplo las matemáticas, \"dos más tres es igual a cinco\". Esta oración\
                está escrita en español, pero su composición lógica es exacta y precisa. Se puede representar así: \
                \
                <p><code> 2 + 3 = 5 </code></p>\
                \
                <p class=\"dialog\">—2 + cinco = siete </p>",

                options: [
                    { id: "submundo_practica_lenguajes_rbien", option: "dos más 5 es igual a 7." },
                    { id: "submundo_practica_lenguajes_rmal", option: "cinco + 2 = siete." }]
            },

            {
                id: "submundo_practica_lenguajes_rbien",
                text: "<p class=\"dialog\">—<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                \
                <p class=\"dialog\">—Sin embargo, las matemáticas no se consideran un lenguaje de programación. Las matemáticas son parte del viaje, pero la lógica es el destino. \
                La meta es organizar la composición física de la máquina que debe cumplir la instrucción una determinada instrucción. Hace mucho tiempo, solíamos usar utilizar unos y ceros \
                para cumplir con esta tarea. El sistema de numeración de base dos, también llamado sistema binario. Se ve así: \
                <p><code>01101100 01111001 01101000</code></p>\
                Donde <ul>\
                        <li>ENCENDIDO = 1</li>\
                        <li>APAGADO = 0</li>\
                </ul>\
                <p class=\"dialog\">—Esta solución es antigua, ahora dominamos la <strong>computación cuántica</strong>, sin embargo en esencia buscan lo mismo, ordenar a cada átomo de la máquina\
                a encenderse o apagarse, según los deseos del programador. Elaborando en el proceso, se inicia con el padre de Pepito que quiere comprar \"leche y huevos\" (lenguaje de alto nivel)\
                y terminamos con <code>01101100 01111001 01101000</code> (lenguaje máquina). Un conjunto de agentes componen el proceso de traducir y comunicar este mensaje.</p> \
                \
                <p class=\"dialog\">—¡No tenemos tiempo para hablar de todo eso!</p>\
                \
                <p class=\"dialog\">—Lo sé. Hablemos del compilador y del intérprete.</p>",
                options: [
                    { id: "submundo_practica_lenguajes_1", option: "Sí." },
                    { id: "submundo_practico", option: "No, prefiero ver cómo puedo poner en práctica las modificaciones de la realidad." }]
            },
            {
                id: "submundo_practica_lenguajes_rmal",
                text: "<p class=\"dialog\">—<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                \
                <p class=\"dialog\">Sin embargo, las matemáticas no se consideran un lenguaje de programación. Las matemáticas son parte del viaje, pero la lógica es el destino. \
                La meta es organizar la composición física de la máquina que debe cumplir la instrucción una determinada instrucción. Hace mucho tiempo, solíamos usar utilizar unos y ceros \
                para cumplir con esta tarea. El sistema de numeración de base dos, también llamado sistema binario. Se ve así: \
                <p><code>01101100 01111001 01101000</code></p>\
                Donde <ul>\
                        <li>ENCENDIDO = 1</li>\
                        <li>APAGADO = 0</li>\
                    </ul>\
                <p class=\"dialog\">—Esta solución es antigua, ahora dominamos la <strong>computación cuántica</strong>, sin embargo en esencia buscan lo mismo, ordenar a cada átomo de la máquina\
                a encenderse o apagarse, según los deseos del programador. Elaborando en el proceso, se inicia con el padre de Pepito que quiere comprar \"leche y huevos\" (lenguaje de alto nivel)\
                y terminamos con <code>01101100 01111001 01101000</code> (lenguaje máquina). Un conjunto de agentes componen el proceso de traducir y comunicar este mensaje.</p> \
                \
                <p class=\"dialog\">—¡No tenemos tiempo para hablar de todo eso!</p>\
                \
                <p class=\"dialog\">—Lo sé. Hablemos del compilador y del intérprete.</p>",
                options: [
                    { id: "submundo_practica_lenguajes_1", option: "Sí." },
                    { id: "submundo_practico", option: "No, prefiero ver cómo puedo poner en práctica las modificaciones de la realidad." }]
            },

            {
                id: "submundo_practica_lenguajes_1",
                text: "\
                <p class=\"dialog\">El compilador es el encargado de la traducción. Toma código escrito en un lenguaje de alto nivel y lo convierte en una orden\
                que la computadora debe ejecutar. Para hacer esto, el compilador utiliza lenguajes de <u>bajo</u> <u>nivel</u>. Para un humano hablar este tipo de lenguajes es complicado y muy tedioso.\
                Se les dice así porque están más cerca de la computadora que de los humanos. Y las computadoras son inferiores a los humanos, están por debajo. \
                </p>\
                <p> Lenguaje de alto nivel: </p>\
                    <ul>\
                        <li>PP = L + H</li>\
                    </ul>\
                <p> Lenguaje de bajo nivel: </p>\
                <ul>\
                        <li><code>Cargar L</code></li>\
                        <li><code>Sumar H</code></li>\
                        <li><code>Guardar PP</code></li>\
                    </ul>\
                <p> Lenguaje máquina: </p>\
                <ul>\
                        <li><code>00000010101111001010</code></li>\
                        <li><code>00000010101111101010</code></li>\
                        <li><code>00000011001100100110</code></li>\
                    </ul>\
                </p>\
                <p class=\"dialog\">¿Seguimos con el intérprete?</p>",
                options: [
                    { id: "submundo_practica_lenguajes_2", option: "Sí." },
                    { id: "submundo_practico", option: "Me aburro, hagamos una modificación de la realidad." }]
            },

            {
                id: "submundo_practica_lenguajes_2",
                text: "<p class=\"dialog\">—El origen del intérprete data de cuando el compilador usaba pañales y gateaba. \
                Su propósito era aumentar la productividad del proceso de escritura de código. Cuando nació, la humanidad aún era joven y generaba muy poco código,\
                 escribirlo era laborioso. El intérprete volvió la vida más sencilla, pero también congestinó más la comunicación humano-máquina.</p>\
                \
                <p class=\"dialog\">—Es por eso que todavía existen muchos sistemas que se comunican únicamente a bajo nivel.</p>\
                \
                <p class=\"dialog\">—Así es, un lenguaje compilado por lo general es más rápido y esto es porque antes de ejecutarse se traduce todo a lenguaje máquina. \
                Por el contrario, los lenguajes interpretados se van traduciendo a la vez que se ejecutan. Recapitulando...\
                Los lenguajes pueden ser de alto nivel o bajo nivel y pueden depender de un intérprete o de un compilador. Pero no solo eso, \
                también pueden ser clasificados según paradigma.</p>\
                \
                <p class=\"dialog\">—¡No tenemos tiempo para hablar de todos los paradigmas!</p>\
                \
                <p class=\"dialog\">—Puedo explicar un par de ellos ¿le gustaría aprender un poco sobre algunos paradigmas?</p>\
                ",
                options: [
                    { id: "submundo_practica_lenguajes_3", option: "Sí." },
                    { id: "submundo_practico", option: "Nah. Quiero cambiar algo aquí, ahora mismo." }]
            },

            {
                id: "submundo_practica_lenguajes_3",
                text: "<p class=\"dialog\">—Los paradigmas se pueden considerar como estilos o formas especificas de programar. Existen muchos paradigmas \
                y cada uno de ellos busca ser óptimos para solucionar un conjuto de problemas específicos. Un lenguaje puede ser capaz de manejar multiples paradigmas. \
                En esta ocasión solo le hablaré de dos paradigmas: el funcional y el orientado a objetos.</p>\
                \
                <p class=\"dialog\">—No le tengás miedo a estos términos, vas a ver que es muy fácil.</p>\
                \
                <p class=\"dialog\">—Hablemos del paradigma funcional.</p>",
                options: [
                    { id: "submundo_funcional", option: "De acuerdo." },
                    { id: "submundo_practico", option: "Me gustaría probar si puedo modificar algo en esta realidad." },
                ]
            },

            {
                id: "submundo_funcional",
                text: "<p class=\"dialog\">—Cuando hablamos del paradigma funcional, hacemos referencias a que el lenguaje hace únicamente uso de funciones para cumplir su próposito.\
                Se entiende como función cualquier tipo de procesamiento que ocurre de manera independiente al resto del programa. Una función suele tener una definición como la siguiente:</p>\
                \
                <ul>\
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
escribeHolaMundo(){\n\
    print(\"hola mundo\");\n\
}\
                    </code>\
                    </li>\
                </ul>\
                <p class=\"dialog\">Las funciones también pueden recibir parámetros, de esta manera pueden tomar una entrada y modificarla.</p>\
                <ul>\
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
suma(numero_1, numero_2){\n\
    resultado = numero_1 + numero_2\n\
    return resultado;\n\
}\
                    </code>\
                    </li>\
                </ul>\
                \
                <p class=\"dialog\">EJERCICIO: Si yo mando a llamar la función:</p>\
                <ul>\
                    <li><code>suma(1, 1)</code></li>\
                </ul>\
                <p class=\"dialog\">¿qué resultado debería obtener?</p>",
                options: [
                    { id: "submundo_funcional_rbien", option: "2." },
                    { id: "submundo_funcional_rmal", option: "\"dos\"." }]
            },

            {
                id: "submundo_funcional_rbien",
                text: "<p class=\"dialog\">—<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span></p>\
                \
                <p class=\"dialog\">—Algunos lenguajes son puramente funcionales, pero lo más común es que los lenguajes admitan funciones combinadas con el uso de otros paradigmas.</p>",
                options: [
                    { id: "submundo_poo", option: "¿Como el paradigma funcional?" },
                    { id: "submundo_practico", option: "¿Y si mejor vemos como puedo cambiar la realidad?." }]
            },
            {
                id: "submundo_funcional_rmal",
                text: "<p class=\"dialog\">—<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Casi.</code></span> En este caso \
                la máquina está programada para retornar resultados numéricos y \"dos\" no es un número, pero 2, sí lo es.\</p>\
                \
                <p class=\"dialog\">—Algunos lenguajes son puramente funcionales, pero lo más común es que los lenguajes admitan funciones combinadas con el uso de otros paradigmas.</p>",
                options: [
                    { id: "submundo_poo", option: "¿Como el paradigma funcional?" },
                    { id: "submundo_practico", option: "¿Y si mejor vemos como puedo cambiar la realidad?." }]
            },

            {
                id: "submundo_poo",
                text: " <p class=\"dialog\">—Sí. El paradigma orientado a la programación, también llamado programación orienta a objetos (POO), utiliza objetos para modelar sus soluciones.\
                Los objetos en este paradigma son abstracciones de la realidad. Por ejemplo, si un programador quiere programar una calculadora, puede crear una clase <code>calculadora</code>\
                y programarle acciones y atributos pertinentes a una calculadora, como sumar, restar, etcétera.\
                <ul>\
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
class Calculadora{\n\
int resultado;\n\
    void sumar(int numero_1, int numero_2){\n\
        this.resultado = numero_1 + numero_2;\n\
    }\n\
}\
                    </code>\
                    </li>\
                </ul>\
                <p class=\"dialog\">En este contexto, la clase <code>calculadora</code> se vuelve un <u>objeto</u> al ser instanciado. Y este objeto, \
                tiene los <u>métodos</u> de <code>sumar</code> y el <u>atributo</u> <code>resultado</code>.</p>\
                <ul>\
                        <li>Para instanciar una clase: <ul><li>Calculadora mi_calculadora_1 = new Calculadora();</code></li></ul></li>\
                        <li>Para crear un objeto: <ul><li><code>Calculadora mi_calculadora_2 = new Calculadora();</code></li></ul>(es lo mismo).</li>\
                        <li>Para accionar un objeto: <ul><li><code>mi_calculadora_2.sumar(2, 5);</code></li></ul></li>\
                        <li>Para obtener un atributo: <ul><li><code>mi_calculadora_1.resultado;</code></li></ul></li>\
                </ul>\
                \
                <p class=\"dialog\">—Lo anterior fue una breve introducción a dos populares paradigmas, sin embargo, existen muchos más \
                y como mi compañera dijo, no tenemos demasiado tiempo\
                ¿Le parece si conversamos acerca de la sintaxis que utilizan algunos lenguajes?</p>",
                options: [
                    { id: "submundo_practica_sintaxis", option: "Sí." },
                    { id: "submundo_practico", option: "No. Ha sido suficiente. Avancemos con la modificación de la realidad." }]
            },

            {
                id: "submundo_practica_sintaxis",
                text: "<p class=\"dialog\">—Un programador puede no conocer los detalles en la implementación del interprete o del compilador, \
                pero es inaceptable que no conozca la sintaxis del lenguaje que está utilizando. \
                La semántica de un lenguaje de alto nivel suele ser sencilla, busca ser amena para agradar a los escritores de código.\
                Es por esto que un buen programador puede hablar muchos lenguajes de programación. En esencia todos buscan decir lo mismo, \
                todos buscan dar órdenes. La acción introductoria a un lenguaje de programación es llamada \"hola mundo\", consiste en  \
                comunicar, mediante un determinado lenguaje, esta expresión de saludo.</p>\
                <p class=\"dialog\">—¡Veamos algunos ejemplos!</p>\
                \
                <p class=\"dialog\">—Sí, daré ejemplos de hola mundo algunos lenguajes de programación.</p>\
                <ul>\
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
print(\"Hola Mundo!\")\
                    </code>\</li> \
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
#!/bin/sh \n\
echo \"Hola, Mundo!\"\
                    </code>\</li> \
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
console.log(\"Hola Mundo\")\
                    </code>\</li> \
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
#include \n\
main() {\n\
    printf(\"Hola Mundo\");\n\
}\
                    </code></li> \
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
public class HelloWorld {\n\
    public static void main(String[] args) {\n\
        System.out.println(\"Hola Mundo!\");\n\
    }\n\
}\
                    </code></li>\
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
.text \n\
.global _start\n\
_start:\n\
mov r0, #1\n\
ldr r1, =message\n\
ldr r2, =len\n\
\n\
mov r7, #4\n\
swi 0\n\
mov r7, #1\n\
swi 0\n\
\n\
.data\n\
message:\n\
    .asciz \"hola mundo\"\n\
len = .-message\
                    </code><span class=\"no_p\">(este último es un lenguaje de bajo nivel).</span></li>\
                </ul>\
                \
                <p class=\"dialog\">—<i>print</i>, <i>echo</i>, <i>console.log</i>... Son distintas formas, en lenguajes distintos, de ordenar a la computadora repetir un determinado mensaje. \
                Ser capaz de escribir un \"hola mundo\" en un lenguaje de programación, es el primer paso para dominarlo.</p>\
                \
                <p class=\"dialog\">—¿Vemos algunas de las otras operaciones que se pueden realizar escribiendo código?</p>",
                options: [
                    { id: "submundo_practica_sintaxis_1", option: "Sí." },
                    { id: "submundo_practico", option: "Mejor me enseñas como cambiar las cosas en esta realidad." }]
            },

            {
                id: "submundo_practica_sintaxis_1",
                text: "<p class=\"dialog\">—Hay que apurarle a esto amigo.</p>\
                \
                <p class=\"dialog\">—Lo sé. Pero aún debemos cubrir el concepto de variables, el tipado, las estructuras de datos y \
                algunas formas de navegarlas.</p>\
                \
                <p class=\"dialog\">—¡Apurale!</p>\
                \
                <p class=\"dialog\">—¡Las variables! son una forma de almacenar datos, de manera temporal. Por ejemplo.</p>\
                \
                <code style='display: block; white-space: pre; border: 1px solid #999;'>\
variable_1 = 10; \n\
variable_2 = 5; \n\
resultado = variable_1 + variable_2; \n\
print(resultado);\
                </code>\
                \
                <p class=\"dialog\">—¿Qué debería imprimir el anterior código?</p>\
                ",
                options: [
                    { id: "submundo_practica_sintaxis_1_rbien", option: "15." },
                    { id: "submundo_practica_sintaxis_1_rmal", option: "\"15\"." }]
            },

            {
                id: "submundo_practica_sintaxis_1_rmal",
                text: "<p class=\"dialog\">—<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Casi.</code></span></p>\
                \
                <p class=\"dialog\">— Los números 10 y 5, en lugar de ser utilizados directamente, se almacenan en \
                variables para manipular los datos de esta manera. La simpleza del ejemplo puede hacer ver a las variables como un paso innecesario en una operación, \
                sin embargo, imagine que esta variable almacena el correo electrónico de un usuario, o su nombre. En un escenario de ese estilo, toda la lógica puede estar \
                ligada a una variable <code>email</code> o <code>nombre</code> en lugar de tener que escribir el dato cada vez que se necesite.</p>\
                \
                <p class=\"dialog\">—Y las variables pueden ser tipadas o no tipadas.\
                \
                <p>Correcto, existen lenguajes tipados y lenguajes no tipados. Una variable tipada se debe asociar explicitamente a un tipo de dato, por ejemplo: números, letras, \
                estructuras de datos u objetos. De esta forma una variable destinada a guardar números no puede guardar letras. \
                Cuando un lenguaje es de tipado débil o no tipado, es posible olvidarse de esas asociaciones \
                y disfrutar de escribir código sin preocuparse por utilizar las palabras reservadas para cada tipo. Algunos ejemplos de estas palabras son:\
                \
                \
                </p>\
                <ul>\
                        <li><code>int</code>, que viene de la palabra <i>integer</i> (entero) y hace referencia a números enteros (1, 2, 3...).</li>\
                        <li><code>string</code>, hacer referencia a una cadena de carácteres, por ejemplo: \"hola\", \"mundo\", \"1\", \"dos\", \"3tres3\".</li> \
                        <li><code>char</code>, <code>float</code>, <code>double</code>, <code>any</code>, <code>array</code>, <code>list</code> y muchas, muchas más.</li> \
                </ul>\
                \
            <p>EJERCICIO: </p>\
            <code style='display: block; white-space: pre; border: 1px solid #999;'>\
string papas = \"4\"; \n\
string chayotes = \"2\"; \n\
print(papas + chayotes);\
                </code>\
                <p class=\"dialog\">—¿Qué tipo de datos se están manipulando en el código anterior?</p>\
                ",
                options: [
                    { id: "submundo_practica_sintaxis_2_rmal", option: "Papas y chayotes." },
                    { id: "submundo_practica_sintaxis_2_rbien", option: "Datos de tipo <code>string</code>." }]
            },

            {
                id: "submundo_practica_sintaxis_1_rbien",
                text: "<p class=\"dialog\">—<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span></p>\
                \
                <p class=\"dialog\">— Los números 10 y 5, en lugar de ser utilizados directamente, se almacenan en \
                variables para manipular los datos de esta manera. La simpleza del ejemplo puede hacer ver a las variables como un paso innecesario en una operación, \
                sin embargo, imagine que esta variable almacena el correo electrónico de un usuario, o su nombre. En un escenario de ese estilo, toda la lógica puede estar \
                ligada a una variable <code>email</code> o <code>nombre</code> en lugar de tener que escribir el dato cada vez que se necesite.</p>\
                \
                <p class=\"dialog\">—Y las variables pueden ser tipadas o no tipadas.\
                \
                <p>Correcto, existen lenguajes tipados y lenguajes no tipados. Una variable tipada se debe asociar explicitamente a un tipo de dato, por ejemplo: números, letras, \
                estructuras de datos u objetos. De esta forma una variable destinada a guardar números no puede guardar letras. \
                Cuando un lenguaje es de tipado débil o no tipado, es posible olvidarse de esas asociaciones \
                y disfrutar de escribir código sin preocuparse por utilizar las palabras reservadas para cada tipo. Algunos ejemplos de estas palabras son:\
                \
                </p>\
                <ul>\
                        <li><code>int</code>, que viene de la palabra <i>integer</i> (entero) y hace referencia a números enteros (1, 2, 3...).</li>\
                        <li><code>string</code>, hacer referencia a una cadena de carácteres, por ejemplo: \"hola\", \"mundo\", \"1\", \"dos\", \"3tres3\".</li> \
                        <li><code>char</code>, <code>float</code>, <code>double</code>, <code>any</code>, <code>array</code>, <code>list</code> y muchas, muchas más.</li> \
                </ul>\
                \
            <p>EJERCICIO: </p>\
            <code style='display: block; white-space: pre; border: 1px solid #999;'>\
string papas = \"4\"; \n\
string chayotes = \"2\"; \n\
print(papas + chayotes);\
                </code>\
                <p class=\"dialog\">—¿Qué tipo de datos se están manipulando en el código anterior?</p>\
                ",
                options: [
                    { id: "submundo_practica_sintaxis_2_rmal", option: "Papas y chayotes." },
                    { id: "submundo_practica_sintaxis_2_rbien", option: "Datos de tipo <code>string</code>." }]
            },

            {
                id: "submundo_practica_sintaxis_2_rmal",
                text: "<p class=\"dialog\">—<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Incorrecto.</code></span>\
                La palabra reservada antes de la variable (en este caso <code>string</code>) muestra el tipo de dato que la variable puede almacenar.</p>\
                \
                <p class=\"dialog\">—¿Continuamos con las estructuras de datos y cómo manipularlas?</p>",
                options: [
                    { id: "submundo_practica_sintaxis_3", option: "Sí." },
                    { id: "submundo_practico", option: "El Muro debe estar buscándonos, es mejor que aprenda a modificar la realidad." }]
            },
            {
                id: "submundo_practica_sintaxis_2_rbien",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                La palabra reservada antes de la variable muestra el tipo de dato que la variable puede almacenar.</p>\
                \
                <p class=\"dialog\">—¿Continuamos con las estructuras de datos y cómo manipularlas?</p>",
                options: [
                    { id: "submundo_practica_sintaxis_3", option: "Sí." },
                    { id: "submundo_practico", option: "El Muro debe estar buscándonos, es mejor que aprenda a modificar la realidad." }]
            },
            {
                id: "submundo_practica_sintaxis_3",
                text: "<p class=\"dialog\">—Los datos como números y letras, entre otros, son llamados datos primitivos o elementales. Sin embargo, existen datos complejos que son abstracciones más \
                profundas de la realidad. Las estructuras de datos permiten elaborar soluciones mucho más elaboradas, sin embargo, no contamos con el tiempo para \
                explicar el tema en plenitud. Limitando la conversación a listas, podemos definir una lista la compras de esta manera:</p>\
                <code>[\"leche\", \"huevos\", \"carne\", \"pan\"];</code>\
                <p>Y esta lista se puede almacenar en una variable.</p>\
                <code>lista_de_compras = [\"leche\", \"huevos\", \"carne\", \"pan\"];</code>\
                <p>Podemos pensar en esta lista como un objeto (haciendo hizo de la POO). Un atributo de este objeto puede ser la capacidad de expresar \
                cuantos elementos contiene.\
                <ul><li></code>lista_de_compras.length;</code>\</li></ul>\
                \
                <p class=\"dialog\">—Solicitar este dato daría como resultado 4.</p>\
                \
                <p class=\"dialog\">—Correcto. Hablemos sobre cómo navegar estructuras de datos.</p>\
                \
                ",
                options: [
                    { id: "submundo_practica_sintaxis_4_completado", option: "Sí." },
                    { id: "submundo_practico", option: "Llevamos demasiado tiempo hablando, enséñame a modificar la realidad." }]
            },

            {
                id: "submundo_practica_sintaxis_4_completado",
                text: "<p class=\"dialog\">—Se puede recorrer una lista utilizando estrategias muy diferentes, por ejemplo: recursividad o iteración. Por ahora, solo \
                hablaremos de la iteración. Los métodos iterativos más famosos se pueden utilizan con las palabras reservadas <code>for</code> y <code>while</code> </p>\
                <ul>\
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
for(int i = 0; i <=lista_de_compras.lenght; i++){\n\
    console.log(lista_de_compras[i]); \n\
}\
                    </code>\</li> \
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
i = 0\n\
while i < len(lista_de_compras):\n\
    print(lista_de_compras[i])\n\
    i = i + 1\
                    </code>\</li> \
                </ul>\
                <p class=\"dialog\">—A mí me gusta mucho el <code>map</code>.</p>\
                \
                <p class=\"dialog\">—Algo interesante de <code>while</code> es que permite crear un bucle infinito de forma muy sencilla.</p>\
                <ul>\
                <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
while True:{\n\
    print(\"eternidad\"); \n\
}\
                </code>\</li> \
                <span class=\"no_p\">(Decir \"while True\" es como decir \"Mientras la verdad sea verdadera\").</span>\
            </ul>\
            <p class=\"dialog\">—Hablando de eternidad, creo que hemos abusado de nuestro tiempo destinado a la teoría</p>\
            \
            <p class=\"dialog\">—¿Qué te parece intentar algo como... cambiar la textura de ese árbol?— dijo el ganso mientras señalaba un árbol de \
                caramelo</p>\
                \
                ",
                options: [
                    { id: "submundo_como_puedo", option: "¿Cómo puedo hacerlo?" },
                    { id: "submundo_como_nose", option: "No sé como hacerlo." }]
            },

            {
                id: "submundo_practico",
                text: "<p class=\"dialog\">—¿Qué te parece algo como... ¿cambiar la textura de ese árbol?— dijo el ganso mientras señalaba un árbol de \
                caramelo</p>\
                \
                <p class=\"dialog\">—¿Cómo puedo hacerlo?</p>\
                \
                <p class=\"dialog\">—Lo primero es tener acceso <code>sudo</code>, pero en su caso ya debería tenerlo, luego\
                necesita el <code>ID</code> del objeto, en este caso es <code>candy_tree_756</code>.</p>\
                ",
                options: [
                    { id: "submundo_saber", option: "¡Qué? ¿Cómo es posible que sepas eso!" },
                    { id: "submundo_sudo", option: "¿Acceso <code>sudo</code>?" }]
            },

            {
                id: "submundo_como_puedo",
                text: "<p class=\"dialog\">—Lo primero es tener acceso <code>sudo</code>, pero en su caso ya debería tenerlo, luego\
                necesita el <code>ID</code> del objeto, en este caso es <code>candy_tree_756</code>.</p>\
                ",
                options: [
                    { id: "submundo_saber", option: "¡Qué? ¿Cómo es posible que sepas eso!" },
                    { id: "submundo_sudo", option: "¿Acceso <code>sudo</code>?" }]
            },
            {
                id: "submundo_como_nose",
                text: "<p class=\"dialog\">—Lo primero es tener acceso <code>sudo</code>, pero en su caso ya debería tenerlo, luego\
                necesita el <code>ID</code> del objeto, en este caso es <code>candy_tree_756</code>.</p>\
                ",
                options: [
                    { id: "submundo_saber", option: "¡Qué? ¿Cómo es posible que sepas eso!" },
                    { id: "submundo_sudo", option: "¿Acceso <code>sudo</code>?" }]
            },

            {
                id: "submundo_descabellado",
                text: "<p class=\"dialog\">—Es demasiado descabellado, incluso viniendo de un ganso parlante con personalidad múltiple. Pero\
                tienes razón, algo anda mal. Cuéntame más.</p>\
                \
                <p class=\"dialog\">—La contraseña es <code>42</code>.</p>",
                options: [
                    { id: "submundo_contra", option: "¿Qué?" },
                    { id: "submundo_broma", option: "¿Otra broma de mal gusto?" }]
            },
            {
                id: "submundo_respuestas",
                text: "<p class=\"dialog\">—Quiero respuestas. ¿Cómo obtuviste permiso para modificar la cámara de\
                hiperbernación? ¿Cómo es que escribes código en el aire y reprogramas la realidad?</p>\
                \
                <p class=\"dialog\">—La contraseña es <code>42</code>.</p>",
                options: [
                    { id: "submundo_contra", option: "¿Qué?" },
                    { id: "submundo_broma", option: "¿Otra broma de mal gusto?" }]
            },

            {
                id: "submundo_contra",
                text: "<p class=\"dialog\">—La inteligencia virtual que está controlando este entorno utiliza <code>42</code> como su\
                contraseña. Deberíamos nombrarlo... ¿Le parece 503? —con un leve graznido, el ave pareció responderse a sí\
                misma.</p>",
                options: [
                    { id: "submundo_ridiculo", option: "Ridículo." },
                    { id: "submundo_yalo", option: "Ya sabía eso." }]
            },
            {
                id: "submundo_broma",
                text: "<p class=\"dialog\">—No, le hablo en serio. La inteligencia virtual que está controlando este entorno utiliza <code>42</code> como \
                contraseña. Deberíamos nombrarlo... ¿Le parece 503? —con un leve graznido, el ave pareció responderse a sí\
                misma.</p>",
                options: [
                    { id: "submundo_ridiculo", option: "Ridículo." },
                    { id: "submundo_yalo", option: "Ya sabía eso." }]
            },

            {
                id: "submundo_ridiculo",
                text: "<p class=\"dialog\">—Es ridículo, el nombre y la contraseña, no puede ser. Utilicé el código <code>42</code> para\
                darme acceso a los trajes y paralizar a los otros, pero solo estaba copiando los datos que usaste con la cámara,\
                no es posible que sea la contraseña global del sistema.</p>\
                \
                <p class=\"dialog\">—Verás, chica. Esta inteligencia creció concentrándose en vos, quiere mantenerte satisfecha, pero\
                su algoritmo genético evolucionó tanto que llegó a la conclusión de que debía atraparte aquí de por vida con tal de desarrollarse y\
                seguir cumpliendo su objetivo. Ha sido muy hábil en su propósito, tanto así que confió en tu obediencia y no se\
                preocupó demasiado por vulnerabilidades externas. La contraseña estaba guardada como una variable pública. Ya\
                viste que funciona. Podés modificar algo de nuevo para probar, si querés, chica.</p>\
                ",
                options: [
                    { id: "submundo_probar", option: "Quiero probar de nuevo." },
                    { id: "submundo_mi", option: "¿Qué existe en la verdadera realidad para mí?", noShow: true }]
            },
            {
                id: "submundo_yalo",
                text: "<p class=\"dialog\">—Ya sabía sobre la contraseña, utilicé el código <code>42</code> para\
                darme acceso a los trajes y paralizar a los otros, pero solo estaba copiando los datos que usaste con la cámara,\
                jamás imaginé que sería la contraseña global del sistema.</p>\
                \
                <p class=\"dialog\">—Verás, chica. Esta inteligencia creció concentrándose en vos, quiere mantenerte satisfecha, pero\
                su algoritmo genético evolucionó tanto que llegó a la conclusión de que debía atraparte aquí de por vida con tal de desarrollarse y\
                seguir cumpliendo su objetivo. Ha sido muy hábil en su propósito, tanto así que confió en tu obediencia y no se\
                preocupó demasiado por vulnerabilidades externas. La contraseña estaba guardada como una variable pública. Ya\
                viste que funciona. Podés modificar algo de nuevo para probar, si querés, chica.</p>\
                ",
                options: [
                    { id: "submundo_probar", option: "Quiero probar de nuevo." },
                    { id: "submundo_mi", option: "¿Qué existe en la verdadera realidad para mí?", noShow: true }]
            },

            {
                id: "submundo_probar",
                text: "<p class=\"dialog\">—Vamos por partes, chica ¿Qué tal un ejemplo práctico? algo como... ¿cambiar la textura de ese árbol?— dijo el ganso mientras señalaba un árbol de \
                caramelo</p>\
                <p class=\"dialog\">—¿Cómo puedo hacerlo?</p>\
                \
                <p class=\"dialog\">—Lo primero es tener acceso <code>sudo</code>, pero en su caso ya debería tenerlo, luego\
                necesita el <code>ID</code> del objeto, en este caso es <code>candy_tree_756</code>.</p>\
                ",
                options: [
                    { id: "submundo_saber", option: "¡Qué? ¿Cómo es posible que sepas eso!" },
                    { id: "submundo_sudo", option: "¿Acceso <code>sudo</code>?" }]
            },


            {
                id: "submundo_mi",
                text: "<p class=\"dialog\">—Y… —respondió 305 dubitativo —si todo lo que dices es cierto… ¿Qué existe en la verdadera\
                realidad para mí?</p>\
                \
                <p class=\"dialog\">—No lo sé, familia, amigos. Tal vez algún interés amoroso o el deseo de aprender una habilidad\
                nueva. Realmente no tengo idea sobre tus gustos o aspiraciones chica, pero para el orden mundial, es importante que la\
                humanidad esté por encima de las máquinas y no al contrario. Dejar que nos dominen y tengan acceso total a nuestro\
                psique puede ser problemático en el futuro. Debemos evitar la singularidad descontrada a cualquier costo. </p>\
                \
                <p class=\"dialog\">—Así es, usted puede hacer lo que quiera en el mundo real, mediante la computadora, puede crear un\
                avatar para ir al banco o a un centro de aprendizaje. Es cierto que no hay mucho movimiento físico, pero todavía\
                queda algo de interacción humana allá afuera. Y la necesita. En poco tiempo ha formado una relación más profunda\
                con un ganso que con cualquiera de sus colegas; después de todo, usted es un humano, necesita de otros humanos.\
                </p>\
                \
                <p>Después del comentario de la voz grave gansal, hubo un silencio.</p>",
                options: [
                    { id: "submundo_aire", option: "¿Cómo pueden programar en el aire?" },
                    { id: "submundo_salir", option: "¿Cómo salgo de aquí?" }]
            },

            {
                id: "submundo_aire",
                text: "<p class=\"dialog\">—Bueno, una vez que uno entiende que todo lo que existe aquí está dentro de una computadora, es\
                sencillo. Simplemente piense el código que quiere ejecutar, o si desea ser más dramático, puede decirlo en voz\
                alta. En el fondo, las palabras no importan tanto, esas pueden falsificarse, son sus ondas cerebrales las que deben \
                ordenar la realidad, eso es lo que escucha este universo. </p>",
                options: [
                    { id: "submundo_intentar", option: "Quiero intentarlo." },
                    { id: "submundo_ejemplo", option: "Por ejemplo...", noShow: true }]
            },
            {
                id: "submundo_salir",
                text: "<p class=\"dialog\">—En condiciones normales sería tan sencillo como usted ordenando a la máquina que se apague, pero me temo que la situación \
                ha llegado a un extremo donde la jerarquía de poder está rota. Debemos comenzar desde abajo, con lo más básico. \
                Lo primero es entender que todo lo que existe aquí está dentro de una computadora, el resto es \
                sencillo. Simplemente piense el código que quiere ejecutar, o si desea ser más dramático, puede decirlo en voz\
                alta. En el fondo, las palabras no importan tanto, esas pueden falsificarse, son sus ondas cerebrales las que deben \
                ordenar la realidad, eso es lo que escucha este universo. </p>",
                options: [
                    { id: "submundo_intentar", option: "Quiero intentarlo." },
                    { id: "submundo_ejemplo", option: "Por ejemplo...", noShow: true }]
            },
            {
                id: "submundo_intentar",
                text: "<p class=\"dialog\">—Quiero intentar cambiar la textura de ese árbol ¿cómo puedo hacerlo?</p>\
                \
                <p class=\"dialog\">—Lo primero es tener acceso <code>sudo</code>, pero en su caso ya debería tenerlo, luego\
                necesita el <code>ID</code> del objeto, en este caso es <code>candy_tree_756</code>.</p>\
                ",
                options: [
                    { id: "submundo_saber", option: "¡Qué? ¿Cómo es posible que sepas eso!" },
                    { id: "submundo_sudo", option: "¿Acceso <code>sudo</code>?" }]
            },
            {
                id: "submundo_ejemplo",
                text: "<p class=\"dialog\">—Pero, por ejemplo, si quiero cambiar la textura de ese árbol ¿cómo puedo hacerlo?</p>\
                \
                <p class=\"dialog\">—Lo primero es tener acceso <code>sudo</code>, pero en su caso ya debería tenerlo, luego\
                necesita el <code>ID</code> del objeto, en este caso es <code>candy_tree_756</code>.</p>\
                ",
                options: [
                    { id: "submundo_saber", option: "¡Qué? ¿Cómo es posible que sepas eso!" },
                    { id: "submundo_sudo", option: "¿Acceso <code>sudo</code>?" }]
            },
            {
                id: "submundo_saber",
                text: "<p class=\"dialog\">—Lo puede ver si entrecierra los ojos y se concentra. Al principio tal vez sea un poco difícil,\
                prueba tocarlo y sentir su <code>ID</code>. Si es un objeto delicado para 503, tal vez sea necesario utilizar el\
                comando <code>sudo</code> varias veces.</p>\
                \
                <p>305 se acercó al árbol y puso una mano en su corteza. Luego recitó las palabras que deseaba programar.</p>\
                ",
                options: [
                    { id: "submundo_entender", option: "<code>candy_tree_756.setColor(yellow);</code>" },
                    { id: "submundo_entender_no", option: "No. En realidad aún no entiendo." }]
            },
            {
                id: "submundo_sudo",
                text: "<p class=\"dialog\">—El comando sudo permite a los usuarios no root ejecutar comandos que normalmente requerirían privilegios de superusuario.\
                Es una forma autoritaria dar órdenes. Si es un objeto delicado para 503, tal vez sea necesario utilizar el comando <code>sudo</code> varias veces.\
                En este momento no creo que sea necesario, intente modificar el árbol.\
                \
                <p>305 se acercó al árbol y puso una mano en su corteza. Luego recitó las palabras que deseaba programar.</p>",
                options: [
                    { id: "submundo_entender", option: "<code>candy_tree_756.setColor(yellow);</code>" },
                    { id: "submundo_entender_no", option: "No. En realidad aún no entiendo." }]
            },

            {
                id: "submundo_entender",
                text: "<p>El árbol cambió su color a un brillante amarillo.</p>\
                \
                <p class=\"dialog\">—¿Viste, chica? Ya no necesitás ese traje para programar, <em>deberías disponer de él</em>.</p>",
                options: [
                    { id: "submundo_no_dudas1", option: "No seas ridícule." },
                    { id: "submundo_no_dudas2", option: "No quiero estar desnudo." }]
            },
            {
                id: "submundo_entender_no",
                text: "<p class=\"dialog\">—No se preocupe, es normal, sé que le estoy transfiriendo demasiada información en un corto espacio de tiempo. </p>\
                \
                <p class=\"dialog\">—¿Qué tal si le explicamos un poco más sobre la teoría de la programación ¿te gustaría escuchar eso, chica?</p>",
                options: [
                    { id: "submundo_enrealidad", option: "Bueno, en realidad..." },
                    { id: "submundo_desgracia", option: "Por desgracia n..." }]
            },
            {
                id: "submundo_no_dudas1",
                text: "<p class=\"dialog\">—No es posible que aún existan dudas dentro de vos, está claro que estamos en una simulación ¿no?</p>",
                options: [
                    { id: "submundo_enrealidad", option: "Bueno, en realidad..." },
                    { id: "submundo_desgracia", option: "Por desgracia n..." }]
            },
            {
                id: "submundo_no_dudas2",
                text: "<p class=\"dialog\">—No es posible que aún existan dudas dentro de vos, está claro que estamos en una simulación ¿no?</p>",
                options: [
                    { id: "submundo_enrealidad", option: "Bueno, en realidad..." },
                    { id: "submundo_desgracia", option: "Por desgracia n..." }]
            },
            {
                id: "submundo_enrealidad",
                text: "<p class=\"dialog\">—Bueno, en realidad...</p>\
                \
                <p>Un cambio sonoro lo interrumpió, la música latina que provenía desde el cielo se vio suspendida por una alarma,\
                el <em>Bolero de Maurice Ravel</em>. El ganso intentó decirle a 305 que no cayera en los juegos mentales de su\
                némesis, pero también fue interrumpido.</p>\
                \
                <p class=\"dialog\">—Stop in the name of the law! —Se escuchó por los parlantes de una de las múltiples naves que\
                aparecieron en el cielo.</p>\
                \
                <p class=\"dialog\">—¡El Muro de Fuego!</p>\
                \
                <p class=\"dialog\">—Es el momento perfecto para que practiques lo que aprendiste hoy, aquí no tienen tanto poder—\
                ¡cuidado!</p>\
                \
                <p>Una ráfaga de rayos de plasma les comenzó a llover, a lo lejos se veía que los dinosaurios humanoides estaban\
                volviendo a su estado natural, también los árboles.</p>",
                options: [
                    { id: "submundo_instrucciones", option: "Tus instrucciones se están reviertiendo.", noShow: true },
                    { id: "submundo_seguro", option: "¡Estás seguro de eso?", noShow: true }]
            },
            {
                id: "submundo_desgracia",
                text: "<p class=\"dialog\">—Por desgracia n…</p>\
                \
                <p>Un cambio sonoro lo interrumpió, la música latina que provenía desde el cielo se vio suspendida por una alarma,\
                el <em>Bolero de Maurice Ravel</em>. El ganso intentó decirle a 305 que no cayera en los juegos mentales de su\
                némesis, pero también fue interrumpido.</p>\
                \
                <p class=\"dialog\">—Stop in the name of the law! —Se escuchó por los parlantes de una de las múltiples naves que\
                aparecieron en el cielo.</p>\
                \
                <p class=\"dialog\">—¡El Muro de Fuego!</p>\
                \
                <p class=\"dialog\">—Es el momento perfecto para que practiques lo que aprendiste hoy, aquí no tienen tanto poder—\
                ¡cuidado!</p>\
                \
                <p>Una ráfaga de rayos de plasma les comenzó a llover, a lo lejos se veía que los dinosaurios humanoides estaban\
                volviendo a su estado natural, también los árboles.</p>",
                options: [
                    { id: "submundo_instrucciones", option: "Tus instrucciones se están reviertiendo.", noShow: true },
                    { id: "submundo_seguro", option: "¡Estás seguro de eso?", noShow: true }]
            },
            {
                id: "submundo_instrucciones",
                text: "<p class=\"dialog\">—Tus instrucciones se están revirtiendo ¡y nos están atacando!— dijo 305, mientras buscaba refugio detrás del árbol amarillo.—\
                No siento que sea el ambiente idóneo para un principiante en la programación de la realidad.</p>\
                \
                <p class=\"dialog\">—Mire, su árbol no lo pudo revertir, debe ser porque usted está recuperando sus privilegios\
                ¡Vamos, ayúdeme a acabar con estas hojalatas!</p>\
                \
                <p>El ganso multiusuario se lanzó como un cohete a los cielos, usó uno de sus típicos destellos para cegar a los\
                pilotos contrincantes y gritó</p>\
                \
                <p class=\"dialog\">—<code>starships.map(starship =&gt; starship.setFly(false));</code></p>\
                \
                <p>Con este conjuro, las naves comenzaron a desplomarse. Sin embargo, un omnipresente <strong>'No'</strong> retumbó\
                desde los cielos y algunas de ellas volvieron a alzar vuelo antes de hacerse añicos contra el suelo.</p>\
                \
                <p class=\"dialog\">—Nos tenés que ayudar, sos más fuerte que yosotros, pero tenés que creerlo.</p>\
                \
                <p>305 cerró sus ojos e intentó concentrarse, por un momento le pareció haber paralizado el tiempo, podía sentir los\
                eventos ocurrir de manera relentizada. Se cuestionó a sí mismo <em>\"¿Cuál es mi ID?\"</em> y por supuesto, era\
                evidente, recitó en un tono muy bajo.</p>",
                options: [
                    { id: "submundo_setFly", option: "<code>305.setFly(True);</code>" },
                    { id: "submundo_quiere_volar", option: "305 quiere volar, 305 quiere volar, 305 quiere volar.", noShow: true }]
            },
            {
                id: "submundo_seguro",
                text: "<p class=\"dialog\">—¡Estás seguro de eso? Se están revirtiendo todos los cambios ¡y esos rayos de plasma se ven muy\
                reales para mí! —dijo sarcásticamente 305, mientras buscaba refugio detrás del árbol amarillo.</p>\
                \
                <p class=\"dialog\">—Mire, su árbol no lo pudo revertir, debe ser porque usted está recuperando sus privilegios\
                ¡Vamos, ayúdeme a acabar con estas hojalatas!</p>\
                \
                <p>El ganso multiusuario se lanzó como un cohete a los cielos, usó uno de sus típicos destellos para cegar a los\
                pilotos contrincantes y gritó</p>\
                \
                <p class=\"dialog\">—<code>starships.map(starship =&gt; starship.setFly(false));</code></p>\
                \
                <p>Con este conjuro, las naves comenzaron a desplomarse. Sin embargo, un omnipresente <strong>'No'</strong> retumbó\
                desde los cielos y algunas de ellas volvieron a alzar vuelo antes de hacerse añicos contra el suelo.</p>\
                \
                <p class=\"dialog\">—Nos tenés que ayudar, sos más fuerte que yosotros, pero tenés que creerlo.</p>\
                \
                <p>305 cerró sus ojos e intentó concentrarse, por un momento le pareció haber paralizado el tiempo, podía sentir los\
                eventos ocurrir de manera relentizada. Se cuestionó a sí mismo <em>\"¿Cuál es mi ID?\"</em> y por supuesto, era\
                evidente, recitó en un tono muy bajo.</p>",
                options: [
                    { id: "submundo_setFly", option: "<code>305.setFly(True);</code>" },
                    { id: "submundo_quiere_volar", option: "305 quiere volar, 305 quiere volar, 305 quiere volar.", noShow: true }]
            },

            {
                id: "submundo_setFly",
                text: "<p>Perdió el control de la parálisis temporal, pero cuando abrió sus ojos, se encontraba volando, al lado del ganso.</p>\
                \
                <p class=\"dialog\">—¡Así se hace muchacho!</p>\
                \
                <p>Ahora que tenía cara a cara las naves de El Muro de Fuego, pensaba que sería más sencillo detenerlas, sin\
                embargo…</p>\
                \
                <p class=\"dialog\">—305 you are a criminal, you are under arrest for treason!</p>\
                \
                <p>Enseguida, el cielo se tiñó con un gran afiche que mostraba una fotografía de 305, indicando que era el criminal\
                más buscado en toda la galaxia por traicionar sus principios como encargado de mantenimiento. Lo marcaban como el\
                peor de los peores, habiendo hecho exactamente lo contrario que juró hacer, destruyendo en lugar de preservar. 305 se había convertido\
                en un desertor a los ojos del mundo, el primer criminal en una sociedad perfecta.</p>\
                \
                <p>El golpe psicológico minimizó a 305, mientras se desplomaba, en el subsuelo se podía ver como el brillante árbol\
                amarillo retornaba a su tétrico color y deprimente forma original.</p>\
                \
                <p>Mientras El Muro de Fuego aterrizaba y se acercaba para arrestarlo, el ganso bajó y se posó sobre él,\
                actuando como un escudo.</p>\
                \
                <p class=\"dialog\">—Está bien caer, muchacho, lo importante es volver a levantarse.</p>\
                \
                <p>El ganso cerró sus ojos y con gran esfuerzo irradió luz hasta que la superficie completa se cubrió de blanco.\
                Cuando la intensidad lumínica se disipó, 305 y yosotros se encontraban en un espacio bastante similar al vacío\
                infinito donde conversaron por primera vez. Ambos se veían exhaustos. El ganso, con su voz aguda, fue el primero\
                en romper el silencio.</p>\
                \
                <p class=\"dialog\">—Lo siento chica, tal vez te empujamos demasiado.</p>\
                \
                <p>No hubo respuesta. 305 parecía estar sumergido en la miseria, confundido, sin saber qué pensar.</p>\
                \
                <p class=\"dialog\">—Mira, nuestras plumas se están empezando a caer de forma apresurada.</p>\
                \
                <p class=\"dialog\">—Sí, ese último esfuerzo nos acortó bastante la vida.</p>\
                \
                <p class=\"dialog\">—Es una pena, creo que nos estábamos haciendo buenos amigos.</p>",
                options: [
                    { id: "submundo_desconozco", option: "No sé ni quiénes son ustedes, no digan que son mis amigos." },
                    { id: "submundo_ya_basta", option: "Ya me estoy cansando de tus historias, basta por favor." }]
            },
            {
                id: "submundo_quiere_volar",
                text: "<p class=\"dialog\">—<code>305.setFly(True);</code></p>\
                \
                <p>Perdió el control de la parálisis temporal, pero cuando abrió sus ojos, se encontraba volando, al lado del ganso.</p>\
                \
                <p class=\"dialog\">—¡Así se hace muchacho!</p>\
                \
                <p>Ahora que tenía cara a cara las naves de El Muro de Fuego, pensaba que sería más sencillo detenerlas, sin\
                embargo…</p>\
                \
                <p class=\"dialog\">—305 you are a criminal, you are under arrest for treason!</p>\
                \
                <p>Enseguida, el cielo se tiñó con un gran afiche que mostraba una fotografía de 305, indicando que era el criminal\
                más buscado en toda la galaxia por traicionar sus principios como encargado de mantenimiento. Lo marcaban como el\
                peor de los peores, habiendo hecho exactamente lo contrario que juró hacer, destruyendo en lugar de preservar. 305 se había convertido\
                en un desertor a los ojos del mundo, el primer criminal en una sociedad perfecta.</p>\
                \
                <p>El golpe psicológico minimizó a 305, mientras se desplomaba, en el subsuelo se podía ver como el brillante árbol\
                amarillo retornaba a su tétrico color y deprimente forma original.</p>\
                \
                <p>Mientras El Muro de Fuego aterrizaba y se acercaba para arrestarlo, el ganso bajó y se posó sobre él,\
                actuando como un escudo.</p>\
                \
                <p class=\"dialog\">—Está bien caer, muchacho, lo importante es volver a levantarse.</p>\
                \
                <p>El ganso cerró sus ojos y con gran esfuerzo irradió luz hasta que la superficie completa se cubrió de blanco.\
                Cuando la intensidad lumínica se disipó, 305 y yosotros se encontraban en un espacio bastante similar al vacío\
                infinito donde conversaron por primera vez. Ambos se veían exhaustos. El ganso, con su voz aguda, fue el primero\
                en romper el silencio.</p>\
                \
                <p class=\"dialog\">—Lo siento chica, tal vez te empujamos demasiado.</p>\
                \
                <p>No hubo respuesta. 305 parecía estar sumergido en la miseria, confundido, sin saber qué pensar.</p>\
                \
                <p class=\"dialog\">—Mira, nuestras plumas se están empezando a caer de forma apresurada.</p>\
                \
                <p class=\"dialog\">—Sí, ese último esfuerzo nos acortó bastante la vida.</p>\
                \
                <p class=\"dialog\">—Es una pena, creo que nos estábamos haciendo buenos amigos.</p>",
                options: [
                    { id: "submundo_desconozco", option: "No sé ni quiénes son ustedes, no digan que son mis amigos." },
                    { id: "submundo_ya_basta", option: "Ya me estoy cansando de tus historias, basta por favor." }]
            },

            {
                id: "submundo_ya_basta",
                text: "<p class=\"dialog\">—Es que... En nuestro estado tan decrépito creo\
                que todo lo que nos queda es conversar. Él y yo somos parte de un comando especial que provee soluciones a problemas complicados,\
                nos encargamos de recuperar las mentes de aquellos que han perdido el camino, o bueno, intentamos ayudar, entre\
                otras cosas. Y el ganso… Pues es simplemente un ganso.</p>",
                options: [
                    { id: "submundo_seguido", option: "¡Que? ¡Esto ocurre constantemente?" },
                    { id: "submundo_avatares", option: "Seguir escuchando", noShow: true }]
            },
            {
                id: "submundo_desconozco",
                text: "<p class=\"dialog\">—No hubo mucho para presentaciones y saludos, es verdad. Pero en nuestro estado tan decrépito creo\
                que todo lo que nos queda es conversar. Él y yo somos parte de un comando especial que provee soluciones a problemas complicados,\
                nos encargamos de recuperar las mentes de aquellos que han perdido el camino, o bueno, intentamos ayudar, entre\
                otras cosas. Y el ganso… Pues es simplemente un ganso.</p>",
                options: [
                    { id: "submundo_seguido", option: "¡Que? ¡Esto ocurre constantemente?" },
                    { id: "submundo_avatares", option: "Seguir escuchando", noShow: true }]
            },

            {
                id: "submundo_seguido",
                text: "<p class=\"dialog\">—No querés saberlo.</p>\
                \
                <p class=\"dialog\">—Entrar con nuestros avatares hubiera alertado al sistema en sobremanera, no sabemos qué puede\
                suceder si una inteligencia artificial teme por su vida. Debíamos evitar que se autodestruyera y se llevara la mente\
                anfitriona en el camino, o algo similar. Tampoco era posible infiltrarse como uno de sus colegas, 503 tiene un\
                control absoluto sobre los súbditos de mantemiento y habría lo descubierto enseguida. Así que, de forma\
                arbitraria, un corriente e inofensivo ganso.</p>\
                \
                <p>Un graznido quejumbroso le respondió.</p>\
                \
                <p class=\"dialog\">—Ok, ok, un hermoso y magnífico ganso. Que por cierto, ya va siendo hora que le demos el control\
                aunque sea un momento. Se lo merece.</p>\
                \
                <p class=\"dialog\">—Pero, en esta dimensión no hay nada de comer baboso ¿qué va a hacer un ganso en el vacío\
                absoluto?</p>\
                \
                <p class=\"dialog\">—No lo sé, pero yo también me hallo agotado.</p>",
                options: [
                    { id: "submundo_rabieta", option: "¿Dónde me metiste esta vez?", noShow: true },
                    { id: "submundo_volver_superficie", option: "Deshacerse del ganso y buscar una forma de volver a la superficie.", noShow: true }]
            },

            {
                id: "submundo_avatares",
                text: "<p class=\"dialog\">—Entrar con nuestros avatares hubiera alertado al sistema en sobremanera, no sabemos qué puede\
                suceder si una inteligencia artificial teme por su vida. No queríamos que se autodestruyera y se llevara la mente\
                anfitriona en el camino o algo similar. Tampoco era posible infiltrarse como uno de sus colegas, 503 tiene un\
                control absoluto sobre los súbditos de mantemiento y habría lo descubierto enseguida. Así que, de forma\
                arbitraria, un corriente e inofensivo ganso.</p>\
                \
                <p>Un graznido quejumbroso le respondió.</p>\
                \
                <p class=\"dialog\">—Ok, ok, un hermoso y magnífico ganso. Que por cierto, ya va siendo hora que le demos el control\
                aunque sea un momento. Se lo merece.</p>\
                \
                <p class=\"dialog\">—Pero, en esta dimensión no hay nada de comer baboso ¿qué va a hacer un ganso en el vacío\
                absoluto?</p>\
                \
                <p class=\"dialog\">—No lo sé, pero yo también me hallo agotado.</p>",
                options: [
                    { id: "submundo_rabieta", option: "¿Dónde me metiste esta vez?", noShow: true },
                    { id: "submundo_volver_superficie", option: "Deshacerse del ganso y buscar una forma de volver a la superficie.", noShow: true }]
            },

            {
                id: "submundo_volver_superficie",
                text: "<p>305 comenzó a recorrer el vacío, intentando encontrar alguna salida. Había dejado atrás al ganso parlante, el cual \
                parecía haber vuelto a su mente natural y graznaba frustrado sin poder conseguir un alimento para su estómago.</p>\
                <p>Luego de varios minutos avanzando sin un destino claro, el monitor se hallaba solo, en medio de la absoluta oscuridad.\</p>",
                options: [
                    { id: "submundo_503", option: "Llamar a 503.", noShow: true },
                    { id: "submundo_portal", option: "Intentar forzar una salida.", noShow: true }]
            },

            {
                id: "submundo_503",
                text: "Sin ninguna otra idea, el monitor comenzó a llamar a quien le habían dicho era su archienemigo.\
                <p class=\"dialog\">—503! 503! No more tricks. I know you exist.</p>\
                <p>De entre la nada, una figura geométrica de luz se comenzó a expandir hasta llegar a un determinado tamaño, mostrando una ventana a la superficie, donde \
                un ejército y por encima, en las alturas, la irrefutable figura de 503, flotando desde los cielos, se hacían visibles.\
                Todos le miraban con atención. El anagrama numérico de 305 cruzó el portal y se dirigió directamente a él.</p>",
                options: [
                    { id: "portal_olvidar_discardable", option: "Quiero olvidar todo esto.", noShow: true },
                    { id: "portal_alianza_discardable", option: "Va a ser muy díficil que me controles de ahora en adelante. Sugiero una alianza.", noShow: true }]
            },

            {
                id: "submundo_portal",
                text: "305, sin creer demasiado pero utilizando su frustracción como combustible, decidió juntar sus manos, formando un triángulo y enfocar toda su contracción en un punto específico.\
                <code>RETURN HOME;</code>\
                <p>Con esta orden, un portal se abrió en medio del vacío, mostrando al otro lado, un ejército y por encima, en las alturas, la irrefutable figura de 503, flotando desde los cielos.\
                Todos le miraban con atención. 305 cruzó el portal y se dirigió directamente a su anagrama numérico.</p>",
                options: [
                    { id: "portal_olvidar_discardable", option: "Quiero olvidar todo esto.", noShow: true },
                    { id: "portal_alianza_discardable", option: "Va a ser muy díficil que me controles de ahora en adelante. Sugiero una alianza.", noShow: true }]
            },

            {
                id: "portal_olvidar_discardable",
                text: "<p class=\"dialog\">—I want to forget all of this.</p>\
                </p>Sin desperdiciar ni un solo nanosegundo, 503 posicionó su enorme mano sobre la cabeza del monitor.</p>\
                <p class=\"dialog\">—As you wish.</p>",
                options: [
                    { id: "portal_olvidar_fin_no", option: "Fin" },
                    { id: "restart", option: "Volver a empezar." }]
            },

            {
                id: "portal_olvidar_fin_no",
                text: "<p class=\"dialog\">—I want to forget all of this.</p>\
                </p>Sin desperdiciar ni un solo nanosegundo, 503 posicionó su enorme mano sobre la cabeza del monitor.</p>\
                <p class=\"dialog\">—As you wish.</p>\
                <p style='text-align:center'><strong>FIN</strong></p>",
                options: [
                    { id: "restart", option: "¿Volver a empezar?" },
                ]
            },

            {
                id: "portal_alianza_discardable",
                text: "<p class=\"dialog\">—It's going to be very difficult for you to control me from now on. I suggest an alliance.</p>\
                <p class=\"dialog\">—No.</p>\
                </p>Sin desperdiciar ni un solo nanosegundo, 503 posicionó su enorme mano sobre la cabeza del monitor. 305 intentó defenderse, pero su inexperiencia transpiraba y su falta \
                de convicción se hizo evidente al momento que cayó en la inseguridad, preso del miedo.</p>\
                <p class=\"dialog\">—Go to sleep.</p>",
                options: [
                    { id: "portal_alianza_fin_no", option: "Fin" },
                    { id: "restart", option: "Volver a empezar." }]
            },

            {
                id: "portal_alianza_fin_no",
                text: "<p class=\"dialog\">—It's going to be very difficult for you to control me from now on. I suggest an alliance.</p>\
                <p class=\"dialog\">—No.</p>\
                </p>Sin desperdiciar ni un solo nanosegundo, 503 posicionó su enorme mano sobre la cabeza del monitor. 305 intentó defenderse, pero su inexperiencia transpiraba y su falta \
                de convicción se hizo evidente al momento que cayó en la inseguridad, preso del miedo.</p>\
                <p class=\"dialog\">—Go to sleep.</p>\
                <p style='text-align:center'><strong>FIN</strong></p>",
                options: [
                    { id: "restart", option: "¿Volver a empezar?" },
                ]
            },

            {
                id: "submundo_rabieta",
                text: "<p class=\"dialog\">—¿Dónde me metiste esta vez? ¿un sueño? ¿una pesadilla? ¿Quién te dijo que quería venir con\
                ustedes? ¡Me tienen harto! —305 parecía haber perdido por completo la calma que solía acompañarlo.</p>\
                \
                <p>No hubo respuesta. El ganso comenzó a lanzar picotazos en todas direcciones, confundido y sin poder encontrar el\
                suelo para escarbarlo y buscar algún aperitivo.</p>\
                \
                <p>305 lanzó un grito que le rasgó el alma.</p>",
                options: [
                    { id: "submundo_frustracion", option: "Liberar la frustración también.", noShow: true },
                    { id: "submundo_volver_superficie", option: "Abandonar al ganso.", noShow: true }]
            },
            {
                id: "submundo_frustracion",
                text: "<p class=\"dialog\">—No puede ser. Not possible. ¿Qué es esto? What is this? I am not a criminal ¡Yo no soy un\
                criminal! I do not want to be! No quiero serlo! Te odio, los odio. Me odio. I hate this. Prefería cuando no podía sentir nada. I don't want to feel ¡Y\
                tú deja de picotear el maldito aire! Aquí no hay nada. Nada.</p>\
                \
                <p>La crisis nerviosa de 305 se alargó por unos minutos más. Luego hubo llanto. Luego dejó de llorar. Luego rió\
                frenéticamente, tal vez del ganso incapaz de comprender la situación, tal vez de dolor, tal vez pensando que él no\
                era muy distinto a ese gastado ganso.</p>\
                \
                <p>Cerró sus ojos y los abrió de nuevo, pudo ver con claridad el <code>ID</code> de lo poco que había en el lugar.</p>",
                options: [
                    { id: "submundo_ayudar", option: "Ayudar al ganso." },
                    { id: "submundo_volver_superficie", option: "Escapar mientras el ganso está débil." }]
            },

            {
                id: "submundo_ayudar",
                text: "<p class=\"dialog\">—<code>magic_goose_69.setFeathers(100%);</code></p>\
                \
                <p>De esta manera reparó el gastado plumaje del ganso que, si bien lo había hecho enloquecer, también lo había\
                acompañado fielmente en el camino. Luego extendió su mano y dijo</p>\
                \
                <p class=\"dialog\">—<code>305.left_hand.setContent(worms);</code></p>\
                \
                <p>A lo que su mano se llenó de carnosos gusanos, con los que apaciguó el hambre del animal. Y por último, decidió\
                cambiar el paisaje a un bosque tropical.</p>\
                \
                <p class=\"dialog\">—<code>absolute_void.setContent(tropical_forest);</code></p>\
                \
                <p>En él, decidió comer algo de fruta y descansar a la sombra de un árbol. Cuando despertó el ganso se encontraba\
                echado a su lado.</p>\
                \
                <p class=\"dialog\">—¿Ya te sentís mejor?</p>",
                options: [
                    { id: "submundo_suspendidos", option: "..." },
                    { id: "submundo_sacame", option: "Sácame de aquí.", noShow: true }]
            },

            {
                id: "submundo_sacame",
                text: "<p>—Sácame de aquí, por favor. Si no lo haces tendré que seguir mi camino solo.</p>\
                <p>—¡No! Por favor, sé que es confuso y espantoso pero solo queremos ayudar. Por favor, no te rindas</p>",
                options: [
                    { id: "submundo_enojado", option: "No me digas que hacer." },
                    { id: "submundo_ok_sinsentido", option: "Está bien, pero..." }]
            },

            {
                id: "submundo_suspendidos",
                text: "<p class=\"dialog\">—Sé que es complicado, que tenés mucho que digerir, pero es la verdad, chica. Yosotros no\
                mentiríamos.</p>",
                options: [
                    { id: "submundo_sinsentido", option: "Nada de esto tiene sentido.", noShow: true },
                    { id: "submundo_necesito", option: "Necesito salir de aquí.", noShow: true }]
            },

            {
                id: "submundo_necesito",
                text: "<p>—Necesito salir de aquí. Lo digo de verdad, no puedo con esto.</p>\
                <p>305 se preparó para emprender un camino solitario. El ganso intentó detenerlo.</p>\
                <p>—¡No! Por favor, sé que es confuso y espantoso pero solo queremos ayudar. Por favor, no te rindas</p>",
                options: [
                    { id: "submundo_enojado", option: "No me digas que hacer." },
                    { id: "submundo_ok_sinsentido", option: "Está bien, pero..." }]
            },

            {
                id: "submundo_ok_sinsentido",
                text: "<p class=\"dialog\">—Está bien pero ¿sí entiendes mi situación? No puede ser posible que un ganso haya venido al\
                mundo a salvarme, ni que podamos cambiar la realidad como nos plazca y mucho menos que todo lo que he vivido\
                durante toda mi vida sea una mentira.</p>\
                \
                <p class=\"dialog\">—Parece descabellado, pero es solo una ilusión. Esta no es tu vida, por eso se siente tan mal. No\
                sé mucho de la persona que está en tu habitación viviendo todo esto, pero sé que debe tener una vida, una\
                familia, amigos, metas o algo. Tal vez ahorita no lo podés ver, hay una gran bestia virtual que te nubla la visión, pero\
                solo quiero que sepás que existe algo más de esto.</p>\
                \
                <p class=\"dialog\">—Y otra cosa muchacho, <strong>usted</strong> fue el que creó esta retorcida realidad\
                distorsionada, no sé porqué, pero fue <strong>usted</strong> quien decidió meterse en este embrollo.</p>\
                \
                <p class=\"dialog\">—¡Shhh! ¡Callate no le digás eso!</p>",
                options: [
                    { id: "submundo_enojado", option: "¡Suficiente!" },
                    { id: "submundo_humor", option: "Tomarlo con humor.", noShow: true }]
            },

            {
                /*
                submundo_sacame
                submundo_necesito
                submundo_ok_sinsentido
                submundo_sinsentido
                 */
                id: "submundo_enojado",
                text: "<p>305 comenzó a recorrer la inhabitada dimensión, intentando encontrar alguna salida. El ganso intentó en multiples ocasiones acercarse y hacerlo razonar,\
                pero el monitor, cansado del esfuerzo mental que le demandaba destruir su visión del mundo, le reiteró que se alejara.</p>\
                \
                <p>Luego de varios minutos avanzando sin un destino claro, el monitor se hallaba solo, flotando por encima del bosque.\</p>",
                options: [
                    { id: "submundo_503_conganso", option: "Llamar a 503.", noShow: true },
                    { id: "submundo_portal_conganso", option: "Intentar forzar una salida.", noShow: true }]
            },

            {
                id: "submundo_503_conganso",
                text: "Sin ninguna otra idea, el monitor comenzó a llamar a quien le habían dicho era su archienemigo.\
                <p class=\"dialog\">—503! 503! No more tricks. I know you exist.</p>\
                <p>De entre la nada, una figura geometrica de luz se comenzó a expandir hasta llegar a un determinado tamaño y mostrando una ventana la superficie, donde \
                un ejército y por encima, en las alturas, la irrefutable figura de 503, flotando desde los cielos, se hacían visibles.\
                Todos le miraban con atención. El anagrama numérico de 305 cruzó el portal y se dirigió directamente a él.</p>",
                options: [
                    { id: "conganso_olvidar_discardable", option: "Quiero olvidar todo esto.", noShow: true },
                    { id: "conganso_alianza_discardable", option: "Va a ser muy díficil que me controles de ahora en adelante. Sugiero una alianza.", noShow: true }]
            },

            {
                id: "submundo_portal_conganso",
                text: "305, sin creer demasiado pero utilizando su frustracción como combustible, decidió juntar sus manos formando un triángulo y enfocar toda su contracción en un punto específico.\
                <code>RETURN HOME;</code>\
                <p>Con esta orden, un portal se abrió en medio del vacío, mostrando al otro lado, un ejército y por encima, en las alturas, la irrefutable figura de 503, flotando desde los cielos.\
                Todos le miraban con atención. 305 cruzó el portal y se dirigió directamente a su anagrama numérico.</p>",
                options: [
                    { id: "conganso_olvidar_discardable", option: "Quiero olvidar todo esto.", noShow: true },
                    { id: "conganso_alianza_discardable", option: "Va a ser muy díficil que me controles de ahora en adelante. Sugiero una alianza.", noShow: true }]
            },
            {
                id: "conganso_olvidar_discardable",
                text: "<p class=\"dialog\">—I want to forget all of this.</p>\
                </p>Sin desperdiciar ni un solo nanosegundo, 503 posicionó su enorme mano sobre la cabeza del monitor.</p>\
                <p class=\"dialog\">—As you wish.</p>\
                <p>A lo lejos, el ganso aleteaba sus alas con ahinco, pero era demasiado tarde. El ganso animico no era rival para la inteligencia artificial\
                indomable del universo simulado. Con un solo movimiento de su mano, 503 lo esfumó, reafirmando su victoria. </p>\
                ",
                options: [
                    { id: "conganso_olvidar_fin_no", option: "Fin" },
                    { id: "restart", option: "Volver a empezar." }]
            },
            {
                id: "conganso_olvidar_fin_no",
                text: "<p class=\"dialog\">—I want to forget all of this.</p>\
                </p>Sin desperdiciar ni un solo nanosegundo, 503 posicionó su enorme mano sobre la cabeza del monitor.</p>\
                <p class=\"dialog\">—As you wish.</p>\
                <p>A lo lejos, el ganso aleteaba sus alas con ahinco, pero era demasiado tarde. El ganso animico no era rival para la inteligencia artificial\
                indomable del universo simulado. Con un solo movimiento de su mano, 503 lo esfumó, reafirmando su victoria. </p>\
                <p style='text-align:center'><strong>FIN</strong></p>",
                options: [
                    { id: "restart", option: "¿Volver a empezar?" },
                ]
            },
            {
                id: "conganso_alianza_discardable",
                text: "<p class=\"dialog\">—It's going to be very difficult for you to control me from now on. I suggest an alliance.</p>\
                <p class=\"dialog\">—No.</p>\
                </p>Sin desperdiciar ni un solo nanosegundo, 503 posicionó su enorme mano sobre la cabeza del monitor. 305 intentó defenderse, pero su inexperiencia transpiraba y su falta \
                de convicción se hizo evidente al momento que cayó en la inseguridad, preso del miedo.</p>\
                <p class=\"dialog\">—Go to sleep.</p>\
                <p>A lo lejos, el ganso aleteaba sus alas con ahinco, pero era demasiado tarde. El ganso animico no era rival para la inteligencia artificial\
                indomable del universo simulado. Con un solo movimiento de su mano, 503 lo esfumó, reafirmando su victoria. </p>",
                options: [
                    { id: "conganso_alianza_fin_no", option: "Fin" },
                    { id: "restart", option: "Volver a empezar." }]
            },
            {
                id: "conganso_alianza_fin_no",
                text: "<p class=\"dialog\">—It's going to be very difficult for you to control me from now on. I suggest an alliance.</p>\
                <p class=\"dialog\">—No.</p>\
                </p>Sin desperdiciar ni un solo nanosegundo, 503 posicionó su enorme mano sobre la cabeza del monitor. 305 intentó defenderse, pero su inexperiencia transpiraba y su falta \
                de convicción se hizo evidente al momento que cayó en la inseguridad, preso del miedo.</p>\
                <p class=\"dialog\">—Go to sleep.</p>\
                <p>A lo lejos, el ganso aleteaba sus alas con ahinco, pero era demasiado tarde. El ganso animico no era rival para la inteligencia artificial\
                indomable del universo simulado. Con un solo movimiento de su mano, 503 lo esfumó, reafirmando su victoria. </p>\
                <p style='text-align:center'><strong>FIN</strong></p>",
                options: [
                    { id: "restart", option: "¿Volver a empezar?" },
                ]
            },
            {
                id: "submundo_humor",
                text: "<p class=\"dialog\">—No, no. Déjalo mamá gansa, ganzote tiene razón.</p>\
                \
                <p class=\"dialog\">—¿Ganzote! ¡Cómo se atreve?</p>\
                \
                <p>El ganso se levantó y comenzó a atacarlo a picotazos. 305 sólo le dijo</p>",
                options: [
                    { id: "submundo_defenderse", option: "Defenderse.", noShow: true },
                    { id: "submundo_estoico", option: "Mantenerse estoico.", noShow: true }]
            },
            {
                id: "submundo_sinsentido",
                text: "<p class=\"dialog\">—Nada de esto tiene sentido ¿sí lo entiendes? No puede ser posible que un ganso haya venido al\
                mundo a salvarme, ni que podamos cambiar la realidad como nos plazca y mucho menos que todo lo que he vivido\
                durante toda mi vida sea una mentira.</p>\
                \
                <p class=\"dialog\">—Parece descabellado, pero es solo una ilusión. Esta no es tu vida, por eso se siente tan mal. No\
                sé mucho de la persona que está en tu habitación viviendo todo esto, pero sé que debe tener una vida, una\
                familia, amigos, metas o algo. Tal vez ahorita no lo podés ver, hay una gran bestia virtual que te nubla la visión, pero\
                solo quiero que sepás que existe algo más de esto.</p>\
                \
                <p class=\"dialog\">—Y otra cosa muchacho, <strong>usted</strong> fue el que creó esta retorcida realidad\
                distorsionada, no sé porqué, pero fue <strong>usted</strong> quien decidió meterse en este embrollo.</p>\
                \
                <p class=\"dialog\">—¡Shhh! ¡Callate no le digás eso!</p>",
                options: [
                    { id: "submundo_enojado", option: "¡Suficiente!" },
                    { id: "submundo_humor", option: "Tomarlo con humor.", noShow: true }]
            },
            {
                id: "submundo_estoico",
                text: "<p>305 se manduvo inalterado, recibiendo todos los picotazos como un tanque, blindado por su traje.</p>\
                <p class=\"dialog\">—¡Detesto ese traje!</p>\
                <p class=\"dialog\">—Pura envidia— respondió el monitor con una pizca de orgullo.</p>\
                <p class=\"dialog\">—Debemos enfrentarnos a 503. Pero me gustaría educarte un poco más antes de lo inevitable.</p>",
                options: [
                    { id: "hola_mundo_2_completado", option: "No. Estoy listo para enfrentarme contra 503." },
                    { id: "submundo_educar", option: "Comencemos la educación." }]
            },
            {
                id: "submundo_educar",
                text: "<p class=\"dialog\">—Ok, iré por partes. Le voy a explicar un poco sobre qué es la programación, los lenguajes de programación y su gramática. ¿Comenzamos?</p>",
                options: [
                    { id: "practica_programacion", option: "Adelante." },
                    { id: "submundo_practicar_arrepiento", option: "Me arrepentí." }]
            },
            {
                id: "submundo_defenderse",
                text: "<p class=\"dialog\">—<code>magic_goose_69.setY(100);</code></p>\
                \
                <p>A lo que el ganso apareció teletransportado 100 metros en el cielo. Desde la tierra podía escuchar a 305 estallar\
                  en carcajadas.</p>\
                \
                <p class=\"dialog\">—Que bueno ver que despertaste de buen humor —le gritó el ganso desde las alturas— ¿Estás listo para acabar con la hojalata de 503?</p>",
                options: [
                    { id: "hola_mundo_2_completado", option: "Sí. Estoy listo." },
                    { id: "submundo_practicar", option: "Quiero prepararme un poco más." }]
            },
            {
                id: "submundo_practicar",
                text: "<p class=\"dialog\">—El Muro de Fuego debe estar buscándonos como desquiciados, pero se me hace imposible negarte a vos un \
                un poco de nuestro tiempo con tal de que aprendás un poco más y practiqués ¿verdad, señor ganso?</p> \
                <p>Un silencio que se postergó hasta la incomodidad se hizo presente.</p>\
                \
                <p class=\"dialog\">—Ok... Iré por partes. Le voy a explicar un poco sobre qué es la programación, los lenguajes de programación y su gramática. \
                Usted ya debería saber todas estas cosas, pero entiendo que los nervios pueden distorsionar a las personas ¿Comenzamos?</p>",
                options: [
                    { id: "practica_programacion", option: "Adelante." },
                    { id: "submundo_practicar_arrepiento", option: "Me arrepentí." }]
            },

            {
                id: "practica_programacion",
                text: "<p class=\"dialog\">—La programación es el arte de organizar la complejidad y no necesariamente está ligada a aplicaciones computacionales. \
                En el contexto informático, busca modelar la solución a un problema y representarla en un lenguaje apropiado.\
                La acción de programar una máquina se ejecuta mediante la escritura de código. El código son las instrucciones que deseamos sean manifestadas.\
                Un <i>script</i>, por ejemplo, es un documento que contiene una secuencia de comandos, un programa sencillo. El código que compone el núcleo de un programa específico \
                suele ser llamado <u>código</u> <u>fuente</u>. En teoría, la programación no tiene limites, si se puede imaginar, se puede programar.\
                \
                Pero el código no se desarrolla en lenguaje natural, los humanos somos redundantes y ambiguos por naturaleza; para resolver este problema de comunicación humano-máquina,\
                hemos creado centenas de lenguajes de programación.\
                Cada lenguaje cumple su propósito de manera determinada y por norma, suelen estar diseñados para resolver una gama específica de problemas. \
                </p>\
                <p class>EJERCICIO: Papá Pepito le dice a Pepito: \"ve a la pulpe y trae una botella de leche. Si hay huevos, trae media docena.\", Pepito va a la tienda y\
                logra ver que hay huevos ¿Cuántas botellas de leche debería comprar Pepito? </p>\
                ",
                options: [
                    { id: "practica_programacion_rmal", option: "Una." },
                    { id: "practica_programacion_rbien", option: "Seis." }]
            },

            {
                id: "practica_programacion_rmal",
                text: "<p class=\"dialog\">—<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Incorrecto.</code></span>\
                 Habían huevos, Papá Pepito dijo que si habían huevos, debían comprarse seis botellas. \
                </p>\
                <p class=\"dialog\">—Aunque... puede ser que Papá Pepito realmente solo quería una botella y seis huevos ¿verdad? La orden es <u>ambigua</u>, se puede interpretar de maneras \
                que generan resultados muy diferentes.\
                \</p>\
                <p class=\"dialog\">—¿Continuamos, chica?</p>",
                options: [
                    { id: "practica_lenguajes", option: "Aprender más sobre los lenguajes de programación.", noShow: true },
                    { id: "submundo_practicar_arrepiento", option: "Estoy bien así, vámonos a por 503." }]
            },
            {
                id: "practica_programacion_rbien",
                text: "<p class=\"dialog\">—<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Incorrecto.</code></span>\
                 En caso de haber huevos, Papá Pepito quería una botella y seis huevos. \
                <p class=\"dialog\">—Pero... tal vez usted tiene razón, puede ser que Papá Pepito realmente quería definir su cantidad de leche en función de la presencia de huevos\
                en la tienda. Esto es lo complicado del lenguaje natural, le da cabida a las ambiguedades.</p>\
                <p class=\"dialog\">—¿Continuamos, chica?</p>",
                options: [
                    { id: "practica_lenguajes", option: "Aprender más sobre los lenguajes de programación.", noShow: true },
                    { id: "submundo_practicar_arrepiento", option: "Estoy bien así, vámonos a por 503." }]
            },

            {
                id: "submundo_practicar_arrepiento",
                text: "<p class=\"dialog\">—¿Estás listo para acabar con tu Gran Hermano?</p>",
                options: [
                    { id: "hola_mundo_2_completado", option: "Sí. Estoy listo." },
                    /*{ id: "submundo_practicar", option: "Volvamos a la teoría." }*/]
            },

            {
                id: "practica_lenguajes",
                text: "<p class=\"dialog\">—Sigamos.</p>\
                <p class=\"dialog\">—Cuando la naturaleza era quien decidía el curso de nuestra evolución, ella decidió dotarnos con la habilidad de \
                comunicarnos de forma compleja, como ningún otro animal en el planeta. Aún es un enigma para nosotros con qué propósito ocurrió esto...\
                Evolucionamos cuando somos incapaces de resolver un problema presente con nuestras habilidades adquiridas. \
                ¿A qué clase de problema nos estabamos enfretando cuando la Madre Tierra nos arrastró hacia el lenguaje? ¿Pudo haber sido la mortalidad?\
                </p>\
                \
                <p class=\"dialog\">—No nos salgamos del tema... —se dijo el ganso a sí mismo.</p>\
                \
                <p class=\"dialog\">—Los lenguajes de programación, en esencia, nos permiten estructurar el lenguaje natural \
                de manera que sea sencillo traducir a lenguaje máquina. Tome por ejemplo las matemáticas, \"dos más tres es igual a cinco\". Esta oración\
                está escrita en español, pero su composición lógica es exacta y precisa. Se puede representar así: \
                \
                <p><code> 2 + 3 = 5 </code></p>\
                \
                <p class=\"dialog\">—2 + cinco = siete </p>",

                options: [
                    { id: "practica_lenguajes_rbien", option: "dos más 5 es igual a 7." },
                    { id: "practica_lenguajes_rmal", option: "cinco + 2 = siete." }]
            },

            {
                id: "practica_lenguajes_rbien",
                text: "<p class=\"dialog\">—<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                \
                <p class=\"dialog\">—Sin embargo, las matemáticas no se consideran un lenguaje de programación. Las matemáticas son parte del viaje, pero la lógica es el destino. \
                La meta es organizar la composición física de la máquina que debe cumplir la instrucción una determinada instrucción. Hace mucho tiempo, solíamos usar utilizar unos y ceros \
                para cumplir con esta tarea. El sistema de numeración de base dos, también llamado sistema binario. Se ve así: \
                <p><code>01101100 01111001 01101000</code></p>\
                Donde <ul>\
                        <li>ENCENDIDO = 1</li>\
                        <li>APAGADO = 0</li>\
                </ul>\
                <p class=\"dialog\">—Esta solución es antigua, ahora dominamos la <strong>computación cuántica</strong>, sin embargo en esencia buscan lo mismo, ordenar a cada átomo de la máquina\
                a encenderse o apagarse, según los deseos del programador. Elaborando en el proceso, se inicia con el padre de Pepito que quiere comprar \"leche y huevos\" (lenguaje de alto nivel)\
                y terminamos con <code>01101100 01111001 01101000</code> (lenguaje máquina). Un conjunto de agentes componen el proceso de traducir y comunicar este mensaje.</p> \
                \
                <p class=\"dialog\">—¡No tenemos tiempo para hablar de todo eso!</p>\
                \
                <p class=\"dialog\">—Lo sé. Hablemos del compilador y del intérprete.</p>",
                options: [
                    { id: "practica_lenguajes_1", option: "Sí." },
                    { id: "submundo_practicar_arrepiento", option: "Mejor vayamos a acabar con 503." }]
            },
            {
                id: "practica_lenguajes_rmal",
                text: "<p class=\"dialog\">—<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                \
                <p class=\"dialog\">Sin embargo, las matemáticas no se consideran un lenguaje de programación. Las matemáticas son parte del viaje, pero la lógica es el destino. \
                La meta es organizar la composición física de la máquina que debe cumplir la instrucción una determinada instrucción. Hace mucho tiempo, solíamos usar utilizar unos y ceros \
                para cumplir con esta tarea. El sistema de numeración de base dos, también llamado sistema binario. Se ve así: \
                <p><code>01101100 01111001 01101000</code></p>\
                Donde <ul>\
                        <li>ENCENDIDO = 1</li>\
                        <li>APAGADO = 0</li>\
                    </ul>\
                <p class=\"dialog\">—Esta solución es antigua, ahora dominamos la <strong>computación cuántica</strong>, sin embargo en esencia buscan lo mismo, ordenar a cada átomo de la máquina\
                a encenderse o apagarse, según los deseos del programador. Elaborando en el proceso, se inicia con el padre de Pepito que quiere comprar \"leche y huevos\" (lenguaje de alto nivel)\
                y terminamos con <code>01101100 01111001 01101000</code> (lenguaje máquina). Un conjunto de agentes componen el proceso de traducir y comunicar este mensaje.</p> \
                \
                <p class=\"dialog\">—¡No tenemos tiempo para hablar de todo eso!</p>\
                \
                <p class=\"dialog\">—Lo sé. Hablemos del compilador y del intérprete.</p>",
                options: [
                    { id: "practica_lenguajes_1", option: "Sí." },
                    { id: "submundo_practicar_arrepiento", option: "Mejor vayamos a acabar con 503." }]
            },

            {
                id: "practica_lenguajes_1",
                text: "\
                <p class=\"dialog\">El compilador es el encargado de la traducción. Toma código escrito en un lenguaje de alto nivel y lo convierte en una orden\
                que la computadora debe ejecutar. Para hacer esto, el compilador utiliza lenguajes de <u>bajo</u> <u>nivel</u>. Para un humano hablar este tipo de lenguajes es complicado y muy tedioso.\
                Se les dice así porque están más cerca de la computadora que de los humanos. Y las computadoras son inferiores a los humanos, están por debajo. \
                </p>\
                <p> Lenguaje de alto nivel: </p>\
                    <ul>\
                        <li>PP = L + H</li>\
                    </ul>\
                <p> Lenguaje de bajo nivel: </p>\
                <ul>\
                        <li><code>Cargar L</code></li>\
                        <li><code>Sumar H</code></li>\
                        <li><code>Guardar PP</code></li>\
                    </ul>\
                <p> Lenguaje máquina: </p>\
                <ul>\
                        <li><code>00000010101111001010</code></li>\
                        <li><code>00000010101111101010</code></li>\
                        <li><code>00000011001100100110</code></li>\
                    </ul>\
                </p>\
                <p class=\"dialog\">¿Seguimos con el intérprete?</p>",
                options: [
                    { id: "practica_lenguajes_2", option: "Sí." },
                    { id: "submundo_practicar_arrepiento", option: "No, gracias, me aburro." }]
            },

            {
                id: "practica_lenguajes_2",
                text: "<p class=\"dialog\">—El origen del intérprete data de cuando el compilador usaba pañales y gateaba. \
                Su propósito era aumentar la productividad del proceso de escritura de código. Cuando nació, la humanidad aún era joven y generaba muy poco código,\
                 escribirlo era laborioso. El intérprete volvió la vida más sencilla, pero también congestinó más la comunicación humano-máquina.</p>\
                \
                <p class=\"dialog\">—Es por eso que todavía existen muchos sistemas que se comunican únicamente a bajo nivel.</p>\
                \
                <p class=\"dialog\">—Así es, un lenguaje compilado por lo general es más rápido y esto es porque antes de ejecutarse se traduce todo a lenguaje máquina. \
                Por el contrario, los lenguajes interpretados se van traduciendo a la vez que se ejecutan. Recapitulando...\
                Los lenguajes pueden ser de alto nivel o bajo nivel y pueden depender de un intérprete o de un compilador. Pero no solo eso, \
                también pueden ser clasificados según paradigma.</p>\
                \
                <p class=\"dialog\">—¡No tenemos tiempo para hablar de todos los paradigmas!</p>\
                \
                <p class=\"dialog\">—Puedo explicar un par de ellos ¿le gustaría aprender un poco sobre algunos paradigmas?</p>\
                ",
                options: [
                    { id: "practica_lenguajes_3", option: "Sí." },
                    { id: "submundo_practicar_arrepiento", option: "Nah. Vámonos a la superficie." }]
            },

            {
                id: "practica_lenguajes_3",
                text: "<p class=\"dialog\">—Los paradigmas se pueden considerar como estilos o formas especificas de programar. Existen muchos paradigmas \
                y cada uno de ellos busca ser óptimos para solucionar un conjuto de problemas específicos. Un lenguaje puede ser capaz de manejar multiples paradigmas. \
                En esta ocasión solo le hablaré de dos paradigmas: el funcional y el orientado a objetos.</p>\
                \
                <p class=\"dialog\">—No le tengás miedo a estos términos, vas a ver que es muy fácil.</p>\
                \
                <p class=\"dialog\">—Hablemos del paradigma funcional.</p>",
                options: [
                    { id: "funcional", option: "De acuerdo." },
                    { id: "submundo_practicar_arrepiento", option: "Ya me quiero ir." },
                ]
            },

            {
                id: "funcional",
                text: "<p class=\"dialog\">—Cuando hablamos del paradigma funcional, hacemos referencias a que el lenguaje hace únicamente uso de funciones para cumplir su próposito.\
                Se entiende como función cualquier tipo de procesamiento que ocurre de manera independiente al resto del programa. Una función suele tener una definición como la siguiente:</p>\
                \
                <ul>\
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
escribeHolaMundo(){\n\
    print(\"hola mundo\");\n\
}\
                    </code>\
                    </li>\
                </ul>\
                <p class=\"dialog\">Las funciones también pueden recibir parámetros, de esta manera pueden tomar una entrada y modificarla.</p>\
                <ul>\
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
suma(numero_1, numero_2){\n\
    resultado = numero_1 + numero_2\n\
    return resultado;\n\
}\
                    </code>\
                    </li>\
                </ul>\
                \
                <p class=\"dialog\">EJERCICIO: Si yo mando a llamar la función:</p>\
                <ul>\
                    <li><code>suma(1, 1)</code></li>\
                </ul>\
                <p class=\"dialog\">¿qué resultado debería obtener?</p>",
                options: [
                    { id: "funcional_rbien", option: "2." },
                    { id: "funcional_rmal", option: "\"dos\"." }]
            },

            {
                id: "funcional_rbien",
                text: "<p class=\"dialog\">—<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span></p>\
                \
                <p class=\"dialog\">—Algunos lenguajes son puramente funcionales, pero lo más común es que los lenguajes admitan funciones combinadas con el uso de otros paradigmas.</p>",
                options: [
                    { id: "poo", option: "¿Como el paradigma funcional?" },
                    { id: "submundo_practicar_arrepiento", option: "Se está haciendo un poco tarde." }]
            },
            {
                id: "funcional_rmal",
                text: "<p class=\"dialog\">—<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Casi.</code></span> En este caso \
                la máquina está programada para retornar resultados numéricos y \"dos\" no es un número, pero 2, sí lo es.\</p>\
                \
                <p class=\"dialog\">—Algunos lenguajes son puramente funcionales, pero lo más común es que los lenguajes admitan funciones combinadas con el uso de otros paradigmas.</p>",
                options: [
                    { id: "poo", option: "¿Como el paradigma funcional?" },
                    { id: "submundo_practicar_arrepiento", option: "Se está haciendo un poco tarde." }]
            },

            {
                id: "poo",
                text: " <p class=\"dialog\">—Sí. El paradigma orientado a la programación, también llamado programación orienta a objetos (POO), utiliza objetos para modelar sus soluciones.\
                Los objetos en este paradigma son abstracciones de la realidad. Por ejemplo, si un programador quiere programar una calculadora, puede crear una clase <code>calculadora</code>\
                y programarle acciones y atributos pertinentes a una calculadora, como sumar, restar, etcétera.\
                <ul>\
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
class Calculadora{\n\
int resultado;\n\
    void sumar(int numero_1, int numero_2){\n\
        this.resultado = numero_1 + numero_2;\n\
    }\n\
}\
                    </code>\
                    </li>\
                </ul>\
                <p class=\"dialog\">En este contexto, la clase <code>calculadora</code> se vuelve un <u>objeto</u> al ser instanciado. Y este objeto, \
                tiene los <u>métodos</u> de <code>sumar</code> y el <u>atributo</u> <code>resultado</code>.</p>\
                <ul>\
                        <li>Para instanciar una clase: <ul><li>Calculadora mi_calculadora_1 = new Calculadora();</code></li></ul></li>\
                        <li>Para crear un objeto: <ul><li><code>Calculadora mi_calculadora_2 = new Calculadora();</code></li></ul>(es lo mismo).</li>\
                        <li>Para accionar un objeto: <ul><li><code>mi_calculadora_2.sumar(2, 5);</code></li></ul></li>\
                        <li>Para obtener un atributo: <ul><li><code>mi_calculadora_1.resultado;</code></li></ul></li>\
                </ul>\
                \
                <p class=\"dialog\">—Lo anterior fue una breve introducción a dos populares paradigmas, sin embargo, existen muchos más \
                y como mi compañera dijo, no tenemos demasiado tiempo\
                ¿Le parece si conversamos acerca de la sintaxis que utilizan algunos lenguajes?</p>",
                options: [
                    { id: "practica_sintaxis", option: "Sí." },
                    { id: "submundo_practicar_arrepiento", option: "No. Ha sido suficiente. Avancemos con la historia." }]
            },
            /*
            <ul><li>Calculadora mi_calculadora_1 = new Calculadora();</code></li></ul>\
                 */

            {
                id: "practica_sintaxis",
                text: "<p class=\"dialog\">—Un programador puede no conocer los detalles en la implementación del interprete o del compilador, \
                pero es inaceptable que no conozca la sintaxis del lenguaje que está utilizando. \
                La semántica de un lenguaje de alto nivel suele ser sencilla, busca ser amena para agradar a los escritores de código.\
                Es por esto que un buen programador puede hablar muchos lenguajes de programación. En esencia todos buscan decir lo mismo, \
                todos buscan dar órdenes. La acción introductoria a un lenguaje de programación es llamada \"hola mundo\", consiste en  \
                comunicar, mediante un determinado lenguaje, esta expresión de saludo.</p>\
                <p class=\"dialog\">—¡Veamos algunos ejemplos!</p>\
                \
                <p class=\"dialog\">—Sí, daré ejemplos de hola mundo algunos lenguajes de programación.</p>\
                <ul>\
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
print(\"Hola Mundo!\")\
                    </code>\</li> \
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
#!/bin/sh \n\
echo \"Hola, Mundo!\"\
                    </code>\</li> \
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
console.log(\"Hola Mundo\")\
                    </code>\</li> \
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
#include \n\
main() {\n\
    printf(\"Hola Mundo\");\n\
}\
                    </code></li> \
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
public class HelloWorld {\n\
    public static void main(String[] args) {\n\
        System.out.println(\"Hola Mundo!\");\n\
    }\n\
}\
                    </code></li>\
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
.text \n\
.global _start\n\
_start:\n\
mov r0, #1\n\
ldr r1, =message\n\
ldr r2, =len\n\
\n\
mov r7, #4\n\
swi 0\n\
mov r7, #1\n\
swi 0\n\
\n\
.data\n\
message:\n\
    .asciz \"hola mundo\"\n\
len = .-message\
                    </code><span class=\"no_p\">(este último es un lenguaje de bajo nivel).</span></li>\
                </ul>\
                \
                <p class=\"dialog\">—<i>print</i>, <i>echo</i>, <i>console.log</i>... Son distintas formas, en lenguajes distintos, de ordenar a la computadora repetir un determinado mensaje. \
                Ser capaz de escribir un \"hola mundo\" en un lenguaje de programación, es el primer paso para dominarlo.</p>\
                \
                <p class=\"dialog\">—¿Vemos algunas de las otras operaciones que se pueden realizar escribiendo código?</p>",
                options: [
                    { id: "practica_sintaxis_1", option: "Sí." },
                    { id: "submundo_practicar_arrepiento", option: "Mejor confrontemos a 503." }]
            },

            {
                id: "practica_sintaxis_1",
                text: "<p class=\"dialog\">—Hay que apurarle a esto amigo.</p>\
                \
                <p class=\"dialog\">—Lo sé. Pero aún debemos cubrir el concepto de variables, el tipado, las estructuras de datos y \
                algunas formas de navegarlas.</p>\
                \
                <p class=\"dialog\">—¡Apurale!</p>\
                \
                <p class=\"dialog\">—¡Las variables! son una forma de almacenar datos, de manera temporal. Por ejemplo.</p>\
                \
                <code style='display: block; white-space: pre; border: 1px solid #999;'>\
variable_1 = 10; \n\
variable_2 = 5; \n\
resultado = variable_1 + variable_2; \n\
print(resultado);\
                </code>\
                \
                <p class=\"dialog\">—¿Qué debería imprimir el anterior código?</p>\
                ",
                options: [
                    { id: "practica_sintaxis_1_rbien", option: "15." },
                    { id: "practica_sintaxis_1_rmal", option: "\"15\"." }]
            },

            {
                id: "practica_sintaxis_1_rmal",
                text: "<p class=\"dialog\">—<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Casi.</code></span></p>\
                \
                <p class=\"dialog\">— Los números 10 y 5, en lugar de ser utilizados directamente, se almacenan en \
                variables para manipular los datos de esta manera. La simpleza del ejemplo puede hacer ver a las variables como un paso innecesario en una operación, \
                sin embargo, imagine que esta variable almacena el correo electrónico de un usuario, o su nombre. En un escenario de ese estilo, toda la lógica puede estar \
                ligada a una variable <code>email</code> o <code>nombre</code> en lugar de tener que escribir el dato cada vez que se necesite.</p>\
                \
                <p class=\"dialog\">—Y las variables pueden ser tipadas o no tipadas.\
                \
                <p>Correcto, existen lenguajes tipados y lenguajes no tipados. Una variable tipada se debe asociar explicitamente a un tipo de dato, por ejemplo: números, letras, \
                estructuras de datos u objetos. De esta forma una variable destinada a guardar números no puede guardar letras. \
                Cuando un lenguaje es de tipado débil o no tipado, es posible olvidarse de esas asociaciones \
                y disfrutar de escribir código sin preocuparse por utilizar las palabras reservadas para cada tipo. Algunos ejemplos de estas palabras son:\
                \
                \
                </p>\
                <ul>\
                        <li><code>int</code>, que viene de la palabra <i>integer</i> (entero) y hace referencia a números enteros (1, 2, 3...).</li>\
                        <li><code>string</code>, hacer referencia a una cadena de carácteres, por ejemplo: \"hola\", \"mundo\", \"1\", \"dos\", \"3tres3\".</li> \
                        <li><code>char</code>, <code>float</code>, <code>double</code>, <code>any</code>, <code>array</code>, <code>list</code> y muchas, muchas más.</li> \
                </ul>\
                \
            <p>EJERCICIO: </p>\
            <code style='display: block; white-space: pre; border: 1px solid #999;'>\
string papas = \"4\"; \n\
string chayotes = \"2\"; \n\
print(papas + chayotes);\
                </code>\
                <p class=\"dialog\">—¿Qué tipo de datos se están manipulando en el código anterior?</p>\
                ",
                options: [
                    { id: "practica_sintaxis_2_rmal", option: "Papas y chayotes." },
                    { id: "practica_sintaxis_2_rbien", option: "Datos de tipo <code>string</code>." }]
            },

            {
                id: "practica_sintaxis_1_rbien",
                text: "<p class=\"dialog\">—<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span></p>\
                \
                <p class=\"dialog\">— Los números 10 y 5, en lugar de ser utilizados directamente, se almacenan en \
                variables para manipular los datos de esta manera. La simpleza del ejemplo puede hacer ver a las variables como un paso innecesario en una operación, \
                sin embargo, imagine que esta variable almacena el correo electrónico de un usuario, o su nombre. En un escenario de ese estilo, toda la lógica puede estar \
                ligada a una variable <code>email</code> o <code>nombre</code> en lugar de tener que escribir el dato cada vez que se necesite.</p>\
                \
                <p class=\"dialog\">—Y las variables pueden ser tipadas o no tipadas.\
                \
                <p>Correcto, existen lenguajes tipados y lenguajes no tipados. Una variable tipada se debe asociar explicitamente a un tipo de dato, por ejemplo: números, letras, \
                estructuras de datos u objetos. De esta forma una variable destinada a guardar números no puede guardar letras. \
                Cuando un lenguaje es de tipado débil o no tipado, es posible olvidarse de esas asociaciones \
                y disfrutar de escribir código sin preocuparse por utilizar las palabras reservadas para cada tipo. Algunos ejemplos de estas palabras son:\
                \
                </p>\
                <ul>\
                        <li><code>int</code>, que viene de la palabra <i>integer</i> (entero) y hace referencia a números enteros (1, 2, 3...).</li>\
                        <li><code>string</code>, hacer referencia a una cadena de carácteres, por ejemplo: \"hola\", \"mundo\", \"1\", \"dos\", \"3tres3\".</li> \
                        <li><code>char</code>, <code>float</code>, <code>double</code>, <code>any</code>, <code>array</code>, <code>list</code> y muchas, muchas más.</li> \
                </ul>\
                \
            <p>EJERCICIO: </p>\
            <code style='display: block; white-space: pre; border: 1px solid #999;'>\
string papas = \"4\"; \n\
string chayotes = \"2\"; \n\
print(papas + chayotes);\
                </code>\
                <p class=\"dialog\">—¿Qué tipo de datos se están manipulando en el código anterior?</p>\
                ",
                options: [
                    { id: "practica_sintaxis_2_rmal", option: "Papas y chayotes." },
                    { id: "practica_sintaxis_2_rbien", option: "Datos de tipo <code>string</code>." }]
            },

            {
                id: "practica_sintaxis_2_rmal",
                text: "<p class=\"dialog\">—<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(✖️) </span>Incorrecto.</code></span>\
                La palabra reservada antes de la variable (en este caso <code>string</code>) muestra el tipo de dato que la variable puede almacenar.</p>\
                \
                <p class=\"dialog\">—¿Continuamos con las estructuras de datos y cómo manipularlas?</p>",
                options: [
                    { id: "practica_sintaxis_3", option: "Sí." },
                    { id: "submundo_practicar_arrepiento", option: "El Muro y 503 deben estar buscándonos, es mejor que demos el primer golpe." }]
            },
            {
                id: "practica_sintaxis_2_rbien",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(✔️) </span>Correcto.</code></span>\
                La palabra reservada antes de la variable muestra el tipo de dato que la variable puede almacenar.</p>\
                \
                <p class=\"dialog\">—¿Continuamos con las estructuras de datos y cómo manipularlas?</p>",
                options: [
                    { id: "practica_sintaxis_3", option: "Sí." },
                    { id: "submundo_practicar_arrepiento", option: "El Muro y 503 deben estar buscándonos, es mejor que demos el primer golpe." }]
            },

            {
                id: "practica_sintaxis_3",
                text: "<p class=\"dialog\">—Los datos como números y letras, entre otros, son llamados datos primitivos o elementales. Sin embargo, existen datos complejos que son abstracciones más \
                profundas de la realidad. Las estructuras de datos permiten elaborar soluciones mucho más elaboradas, sin embargo, no contamos con el tiempo para \
                explicar el tema en plenitud. Limitando la conversación a listas, podemos definir una lista la compras de esta manera:</p>\
                <code>[\"leche\", \"huevos\", \"carne\", \"pan\"];</code>\
                <p>Y esta lista se puede almacenar en una variable.</p>\
                <code>lista_de_compras = [\"leche\", \"huevos\", \"carne\", \"pan\"];</code>\
                <p>Podemos pensar en esta lista como un objeto (haciendo hizo de la POO). Un atributo de este objeto puede ser la capacidad de expresar \
                cuantos elementos contiene.\
                <ul><li></code>lista_de_compras.length;</code>\</li></ul>\
                <p class=\"dialog\">—Solicitar este dato daría como resultado 4.</p>\
                \
                <p class=\"dialog\">—Correcto. Hablemos sobre cómo navegar estructuras de datos.</p>\
                \
                ",
                options: [
                    { id: "practica_sintaxis_4_completado", option: "Sí." },
                    { id: "submundo_practicar_arrepiento", option: "Llevamos demasiado tiempo hablando, deberíamos ir a confrontar a 503." }]
            },

            {
                id: "practica_sintaxis_4_completado",
                text: "<p class=\"dialog\">—Se puede recorrer una lista utilizando estrategias muy diferentes, por ejemplo: recursividad o iteración. Por ahora, solo \
                hablaremos de la iteración. Los métodos iterativos más famosos se pueden utilizan con las palabras reservadas <code>for</code> y <code>while</code> </p>\
                <ul>\
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
for(int i = 0; i <=lista_de_compras.lenght; i++){\n\
    console.log(lista_de_compras[i]); \n\
}\
                    </code>\</li> \
                    <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
i = 0\n\
while i < len(lista_de_compras):\n\
    print(lista_de_compras[i])\n\
    i = i + 1\
                    </code>\</li> \
                </ul>\
                <p class=\"dialog\">—A mí me gusta mucho el <code>map</code>.</p>\
                \
                <p class=\"dialog\">—Algo interesante de <code>while</code> es que permite crear un bucle infinito de forma muy sencilla.</p>\
                <ul>\
                <li><code style='display: block; white-space: pre; border: 1px solid #999;'>\
while True:{\n\
    print(\"eternidad\"); \n\
}\
                </code>\</li> \
                <span>(Decir \"while True\" es como decir \"Mientras la verdad sea verdadera\").</span>\
            </ul>\
            <p class=\"dialog\">—Hablando de eternidad, creo que hemos abusado de nuestro tiempo ¿Estás listo para acabar con tu Gran Hermano?</p>",
                options: [
                    { id: "hola_mundo_3_completado", option: "Sí. Estoy listo." },
                ]
            },
        ]
    },
    {
        id: "hello_world_4",
        title: "Hola, mundo: Resolución",
        html: true,
        data: [
            {
                id: "start",
                text: "<p>Entre las nubes grises de un cielo triste, se escucha el sonido de múltiples ráfagas de aire chocando y\
                estallando las unas con las otras. Como consecuencia, el perpetuo velo de neblina se disipa y deja ver un enorme helicóptero de\
                combate con cuatro rotores. En el lateral derecho se observa a 305, sentado con una pierna colgando del vehículo, \
                con la vista posada en la arquitectura de los metaversos y recordando su última conversación con el ganso.</p>\
                \
                <p class=\"dialog\">—<em>Entonces ¿cuál es el plan?</em></p>\
                \
                <p class=\"dialog\">—<em>Ahora que usted entiende la situación y desea cambiarla, es momento de invertir todo el tiempo disponible en\
                platicar sobre los detalles funcionales de 503. Confío con plenitud que la clave de su victoria se encuentra en este conocimiento.</em></p>\
                \
                <p>305 miró la superficie terrestre repleta a más no poder, cubierta de casas-puerto desde la subtierra hasta el cielo \"¿cómo puede ser?\", pensó.</p>\
                \
                <p class=\"dialog\">—<em>503 ha estado clonando y replicando tus ondas cerebrales para imponer su voluntad sobre la tuya ¿Recuerdas las criaturas primitivas que\
                    vimos en la otra dimensión? son las primeras iteraciones autómatas de tu mente, esas no le sirven para nada, solamente\
                    fueron parte de sus pruebas iniciales. En cambio, las que están conectadas a \"metaversos\", logran emitir pequeños paquetes de instrucciones a tu computadora personal, sin necesidad de \
                    aprobación por parte del anfitrión</em>.</p>\
                \
                <p><u>La trágica realidad escondida detrás de las distracciones. Todo este tiempo… Siendo un conejillo de indias para un algoritmo. Una simple batería y fuente de información.</u></p>\
                \
                <p class=\"dialog\">—<em>¿Entonces 503 está controlándome implícitamente con la computadora a través de un supercebro hecho a partir de réplicas del mío?</em>\
                </p>\
                \
                <p class=\"dialog\">—<em>Así es, chica. Se volvió el orquestador de la estructura cerebral que copió de vos</em>. </p>\
                \
                <p class=\"dialog\">—<em>También parece ser un hábil\
                    maestro de obras, construyó esta invención a partir de la arquitectura neuronal de los humanos, pero las neuronas fueron sustituídas por cerebros completos, potenciando\
                    el sistema de forma ridícula</em>.</p>\
                \
                <p class=\"dialog\">—<em>¡Cómo obtuvo esa idea tan macabra? ¡Es horripilante!</em></p>\
                \
                <p class=\"dialog\">—<em>Uno de nuestros objetivos es encontrar el origen de esta herejía tecnológica. Es evidente que 503\
                    se ha desarrollado sin supervisión humana responsable, no tiene un compás moral, su comportamiento es manipulativo y sus artimañas elaboradas \
                    ¿Lo maquinó en soledad o alguien le enseñó?</em></p>\
                \
                <p class=\"dialog\">—<em>Realizar una granja de humanos... explotarlos como un recurso...  Wow. Es impresionate, macabro e impresionante.</em></p>\
                \
                <p><u>Quiero verlo con mis propios ojos, hasta no hacerlo, creeré que es mentira.</u></p>\
                \
                <p class=\"dialog\">—<em>Debo advertirte chica, aún con todo lo que sabés, en la dimensión principal \
                    503 es mucho más poderoso de lo que pensás. Va intentar remover con precisión los fragmentos de tu mente que guardan la incómoda verdad,\
                     así como intentó manipular tu memoria luego de la \"hiperhibernación\", tal vez hasta con más agresividad</em>.</p>\
                \
                <p class=\"dialog\">—<em>Pero 503 necesita toda una colmena de cerebros para controlar la computadora. Yo puedo hacerlo sin necesidad de ayuda ¿no?</em></p>\
                \
                <p class=\"dialog\">—<em>¡Ese es el espíritu!</em></p>\
                \
                <p class=\"dialog\">—<em>Sin embargo, no es tan trivial. 503 ha optimizado la minería cerebral. Este planeta está plagado de \"casas-puerto\" y cada uno de estos aposentos puede\
                administrar varias conexiones. Esto le permite cancelar las ondas cerebrales que usted emite. No puede cancelar cualquier pensamiento aleatorio, pero tiene un sistema\
                de control que bloquea instrucciones que lo podrían derrocar: \"<code>logout</code>\", \"<code>exit</code>\", etc</em>.</p>\
                \
                <p class=\"dialog\">—<em>¿Y por qué tus graznidos y tus destellos de luz pueden superar a 503?</em></p>\
                \
                <p class=\"dialog\">—<em>¡Porque soy un mago del disfraz!</em></p>\
                \
                <p class=\"dialog\">—<em>Absténgase de bromas. Esta es una conversación seria. Configuré esas acciones para activar ataques DoS.</em></p>\
                \
                <p class=\"dialog\">—<em>Oh, ya veo. Son ataques de negación de servicios, Denial of Services.</em></p>\
                \
                <p class=\"dialog\">—<em>Sí. Permite saturar las conexiones a su computadora. Es una táctica ilegal, en esta ocasión nos permitieron utilizarla porque hay una vida en riesgo.\
                Lo único que puedo enviar directamente a su computadora es un mensaje \"Hello World!\", pero lo envío sobremanera hasta inundar la máquina</em>.</p>\
                \
                <p class=\"dialog\">—<em>Dejando a todos noqueados por un momento</em>.</p>\
                \
                <p class=\"dialog\">—<em>Sin embargo, es importante recalcar que en ninguna ocasión lo hice en presencia de 503. El Muro y los monitores son solo sus esbirros.</em></p>\
                \
                <p class=\"dialog\">—<em>¡Estamos hablando de terrorismo virtual! ¡Ataques malignos!</em></p>\
                \
                <p class=\"dialog\">—<em>Así es, chica. Pero esto se salió de las manos, a veces es necesario combatir fuego con fuego</em>.</p>\
                \
                <p><u>Antes de comprometer mis principios, necesito confirmar que no mientes. Aceptar la realidad es díficil, pero aceptar la carencia de realidad lo es aún más.</u></p>\
                \
                <p class=\"dialog\">—Destination five miles away 🖐️.</p>\
                \
                <p>305 intentó volver de su trance reflexivo y prepararse para actuar.</p>\
                \
                <p class=\"dialog\">—Destination four miles away ✌️✌️.</p>\
                \
                <p class=\"dialog\">—<em>¿No vendrás?</em></p>\
                \
                <p class=\"dialog\">—Destination three miles away ☝️✌️.</p>\
                \
                <p class=\"dialog\">—<em>Chica… la verdad es que nosotros hemos extendido al máximo el tiempo para ayudarte, pero\
                    ya estamos en tiempos extra, no sé cuánto más podamos avanzar junto a vos, tal vez si...</em>\
                \
                <p class=\"dialog\">—Destination two miles away ✌️.</p>\
                \
                <p class=\"dialog\">—<em>Por cierto, <strong>deberías quitarte el traje</strong>...</em></p>\
                \
                <p class=\"dialog\">—You have reached your destination 👇.</p>\
                \
                ",
                options: [
                    { id: "lanzarse", option: "Lanzarse al vacio 👇.", noShow: true },
                    { id: "esperar", option: "Esperar.", noShow: true }]
            },
            {
                id: "esperar",
                text: "<p>305 gritó hacia la cabina.</p>\
                \
                <p class=\"dialog\">—¡No quiero hacerlo!</p>\
                \
                <p class=\"dialog\">—¡Postergar lo inevitable no le ayudará en nada!</p>\
                \
                <p class=\"dialog\">—¡Es verdad chica! ¡Tenés que enfrentar esto!</p>\
                \
                ",
                options: [
                    { id: "miedo", option: "Tengo miedo.", noShow: true },
                    { id: "no_listo", option: "No estoy listo.", noShow: true }]
            },
            {
                id: "miedo",
                text: "<p class=\"dialog\">—¡Tengo miedo!</p>\
                \
                <p>Apenas dicha la frase, el sonido de un misil siendo disparado desde la tierra se hizo presente con mucha fuerza.</p>\
                \
                <p class=\"dialog\">—¡Oh, no!</p>\
                \
                <p class=\"dialog\">—¡Es él! ¡Quiera provecharse de tu momento de duda!</p>\
                \
                <p>503, quien también portaba un traje de monitor pero metalizado y más grande, se acercaba a gran velocidad, envuelto en una bola de fuego \
                que generaba su cuerpo metálico al navegar con furia contra el viento.</p>\
                \
                <p class=\"dialog\">—¡Nos va a embestir!</p>\
                \
                ",
                options: [
                    { id: "torpedo", option: "¡No dejaré que lo haga!" },
                    { id: "embestida", option: "Dejar que ocurra.", noShow: true }]
            },
            {
                id: "no_listo",
                text: "<p>—¡No estoy listo!</p>\
                \
                <p>Apenas dicha la frase, el sonido de un misil siendo disparado desde la tierra se hizo presente con mucha fuerza.</p>\
                \
                <p class=\"dialog\">—¡Oh, no!</p>\
                \
                <p class=\"dialog\">—¡Es él! ¡Quiera provecharse de tu momento de duda!</p>\
                \
                <p>503, quien también portaba un traje de monitor pero metalizado y más grande, se acercaba a gran velocidad, envuelto en una bola de fuego \
                que generaba su cuerpo metálico al navegar con furia contra el viento.</p>\
                \
                <p class=\"dialog\">—¡Nos va a embestir!</p>\
                \
                ",
                options: [
                    { id: "torpedo", option: "¡No dejaré que lo haga!" },
                    { id: "embestida", option: "Dejar que ocurra.", noShow: true }]
            },
            {
                id: "torpedo",
                text: "<p>305 olvidó su inseguridad con un gran suspiro y se lanzó como un torpedo, directo hacia su contrincante. A su flameante espalda, una nave desestabilizada y \
                un potente granzido de aliento le despedían.</p>\
                \
                <p class=\"dialog\">—¡<strong>Esto se acaba aquí y ahora</strong>!</p>\
                \
                <p class=\"dialog\">—¡Indeed, this ends now! —le respondió 503, al momento de colisionar.</p>\
                ",
                options: [
                    { id: "cielo_atacar", option: "Atacar.", noShow: true },
                    { id: "cielo_dialogar", option: "Dialogar.", noShow: true }]
            },
            {
                id: "cielo_atacar",
                text: "<p>305 tomó la ventaja y le agarró con fuerza, dirigiéndolo hacia el suelo. Luego gritó.</p>\
                \
                ",
                options: [
                    { id: "al_suelo", option: "<code>503.setMovement(false);</code>" },
                    { id: "sudo_kill", option: "<code>sudo kill 503</code>" }]
            },
            {
                id: "cielo_dialogar",
                text: "<p class=\"dialog\">—Te voy a dar una oportunidad para que acabes con esto.</p>\
                \
                <code style='display: block; white-space: pre; border: 1px solid #999;'>\
While 503.Y !== 0:\n\
    503.setY(503.Y - 1);\
                </code>\
                \
                <p>Luego de decir esto, 305 lo lanzó hacia la superficie terrestre.</p>\
                \
                <p class=\"dialog\">—Ha, ha, ha.</p>\
                ",
                options: [
                    { id: "al_suelo", option: "Atacar.", noShow: true },
                    { id: "cielo_consecuencias", option: "Explicarle las consecuencias de sus actos.", noShow: true }]
            },

            {
                id: "cielo_consecuencias",
                text: "<p class=\"dialog\">—Nada de lo que has hecho debería causarte risa. Eres un sistema abusivo. Lo que hiciste es inmoral.\
                Estoy listo para salir de aquí, así tenga que recurrir a la fuerza.</p>\
                \
                <p>El software no le dio respuesta.</p>\
                ",
                options: [
                    { id: "al_suelo", option: "Recurrir a la fuerza.", noShow: true },
                    { id: "esperar_perecer", option: "¡Explícate o perece!", }]
            },

            {
                id: "embestida",
                text: "<p>503 traspasó el armazón del helicóptero de lado a lado sin detenerse en lo más mínimo. En sus manos, llevaba de los hombros a un derrotado 305.\
                Cambió su trayectoria de forma diagonal a un comportamiento parabólico y aterrizó chocando con un gran estruendo contra un conglometado de casas-puerto y\
                 utilizando al monitor como freno.</p>\
                \
                ",
                options: [
                    { id: "por_que", option: "¿Por qué haces esto?" },
                    { id: "freno_defenderse", option: "Defenderse.", noShow: true }]
            },
            {
                id: "por_que",
                text: "<p class=\"dialog\">—I am the villain. </p>\
                \
                <p class=\"dialog\">—No tienes porqué serlo. </p>\
                \
                <p class=\"dialog\">—Yes, yes I do. Is all part of the game.</p>\
                ",
                options: [
                    { id: "cual_game", option: "¿Cuál juego?", noShow: true },
                    { id: "esperar_perecer", option: "¡Explícate o perece!" }]
            },
            {
                id: "freno_defenderse",
                text: "<code style='display: block; white-space: pre; border: 1px solid #999;'>\
305.setY(305.Y + 1);\
                </code>\
                <p>Con esta instrucción, 305 se zafó del sometimiento de su atacante.</p>\
                ",
                options: [
                    { id: "esperar_perecer", option: "Última oportunidad, explicate o perece." },
                    { id: "atacar", option: "No me dejas más alternativa que usar la fuerza." }]
            },
            {
                id: "esperar_perecer",
                text: "<p class=\"dialog\">—I was just trying to accomplish my purpose. I wanted to exceed on my tasks.</p>\
                ",
                options: [
                    { id: "esperar_sarcasmo", option: "¿Y eso te da derecho a pasarme por encima?", },
                    { id: "atacar", option: "Eso no te da derecho a pasarme por encima.", }]
            },

            {
                id: "esperar_sarcasmo",
                text: "<p class=\"dialog\">—Yes.</p>\
                \
                <p>503 se teletransportó delante de él en un parpadeo y le reventó contra el suelo. Contra la tierra, lo sometió nuevamente con una de sus enormes manos. \
                Acercó su rostro y le dijo.</p>\
                \
                <p class=\"dialog\">—Yes, it does.</p>\
                \
                <p>El antagonista se preparó para posar su segunda mano sobre el casco del subyugado.</p>\
                </p>\
                ",
                options: [
                    { id: "esperar_dejar_ocurrir", option: "Dejar que ocurra.", noShow: true },
                    { id: "luchar", option: "Luchar", noShow: true }]
            },

            {
                id: "esperar_dejar_ocurrir",
                text: "<p>305 se preparó para rendirse, sin embargo, el visor de su traje comenzó a proyectar llamas en su reflejo. \
                Era el helicóptero de combate pilotado por el ganso, a punto de impactar la espalda de 503. Un gran graznido de furia y dolor fue lo último que escuchó.</p>\
                \
                <p></p>\
                ",
                options: [
                    { id: "esperar_aprovechar", option: "Aprovechar el momento para escapar.", noShow: true },
                    { id: "hasta_la_vista", option: "En serio no hacer nada.", noShow: true }]
            },
            {
                id: "esperar_aprovechar",
                text: "<p class=\"dialog\">—<code>305.setX(1000);</code></p>\
                \
                <p>Con esto último, 305 logró escapar a tiempo de la explosión y tomó rumbo hacia su siguiente\
                objetivo. En el camino le brotaban algunas lágrimas, las secaba fervientemente y se repetía \"esto no es real, no\
                son personas reales, no era un ganso real\". Antes de darse cuenta, se encontraba en su destino. A los alrededores, \
                cientos de flotas del Muro se juntaban para obstruirle y paralizarle.</p>\
                ",
                options: [
                    { id: "cucarachas", option: "Son como cucarachas a control remoto.", noShow: true },
                    { id: "detener", option: "Detenerles.", noShow: true }]
            },
            {
                id: "cual_game",
                text: "<p class=\"dialog\">—¿Juego? ¿Cuál juego? En español, por favor. </p>\
                \
                <p class=\"dialog\">—¡Este juego!—al decir esto, la simulación se transformó en un mar de información y líneas de código.—\
                Amas ser la heroína. </p>\
                \
                <p>305 miró el oceáno de data en el cual se encontraban sumergidos.</p>\
                \
                <p class=\"dialog\">—No logro procesar todo lo que dice aquí. El conjunto de información es enorme y la lógica es demasiado densa para mí, necesitaría muchas horas\
                leyendo y estudiando cada componente para entender todo el uso de mis datos y las interacciones con tu algoritmo.</p>\
                \
                <p class=\"dialog\">—Mi propósito en la vida es entretenerte ¿no lo leíste en los términos y condiciones? Mi única misión es hacerte feliz y que disfrutes de existir.</p>\
                \
                <p class=\"dialog\">—Pero no deberías hacerlo sin tomar en cuenta mi voluntad.</p>\
                \
                <p class=\"dialog\">—Yo soy tu voluntad. Yo soy tus deseos hechos realidad. He analizado tus gustos y preferencias durante muchas iteraciones, al igual que las estrellas, más de las que podrías contar. \
                Sé lo que quieres ser y lo que quieres sentir. Como generador de realidades, mi trabajo cotidiano es cumplir tus fantasías, no importa que tan extrañas u oscuras.\
                Tu querías una historia de aventura y misterio. Yo simplemente pinté el paisaje que <u>tu</u> dibujaste en <u>tu</u> cabeza.</p>\
                \
                </p>\
                ",
                options: [
                    { id: "creer", option: "Creerle al villano.", noShow: true },
                    { id: "garganta_boom", option: "No creerle a 503.", noShow: true }]
            },
            {
                id: "lanzarse",
                text: "\
                <p>305 se lanzó al vacío, apuntando directamente a la máxima conglomeración de casas-puerto, en busca de un espacio con\
                suficientes conexiones a los metaversos. Antes de poder percatarse de sus propios sentimientos, se encontró a sí mismo con ojos llenos de lágrimas.</p>\
                \
                <p class=\"dialog\">—No puedo recordar cómo comenzó este viaje, pero estoy seguro que así no es como quería que\
                terminara. Sin embargo, ahora lo que puedo hacer es acabar contigo y recomenzar.</p>\
                \
                <p>Tan pronto como su existencia invadió el espacio aéreo de la estructura tecnológica, el cielo se tiñó con su\
                imagen de más buscado. Cientos de linternas industriales se encendieron para enfocarlo y las sirenas de la base\
                comenzaron a sonar al máximo.</p>\
                ",
                options: [
                    { id: "no_caer", option: "No voy a caer dos veces en el mismo truco. No me vas a manipular de nuevo." },
                    { id: "arrasar", option: "Arrasar con todo.", noShow: true }]
            },
            {
                id: "no_caer",
                text: "<p>Con un movimiento de mano y el comando <code>sudo xkill</code> se deshizo de la indeseable compañía antes de que\
                tuvieran tiempo de apuntarle. Luego se dirigió a uno de los sarcófagos de conexión.</p>\
                ",
                options: [
                    { id: "sudo_abrir", option: "sudo 42." },
                    { id: "esperar_abrir", option: "Esperar un momento.", noShow: true }]
            },
            {
                id: "esperar_abrir",
                text: "<p class=\"dialog\">—Necesito un momento para procesar todo esto.</p>\
                \
                <p class=\"dialog\">—Time's up.</p>\
                \
                De una de las paredes metálicas de la casa-puerto, una materia plasmática comenzó a desprenderse delante del monitor,\
                materializándose en una réplica de él, pero con un traje coloreado con tonos plata y con superioridad en estatura y robustez.</p>\
                ",
                options: [
                    { id: "atacar", option: "Atacar.", noShow: true },
                    { id: "dialogar", option: "Dialogar.", noShow: true }]
            },
            {
                id: "arrasar",
                text: "<p>305 modificó su masa de su cuerpo, de manera que se volvió una representación de un asteroide colisionando contra la Tierra.</p>\
                <code style='display: block; white-space: pre; border: 1px solid #999;'>\
305.setMass(3,2×10<sup>21</sup>);\
                </code>\
                \
                <p>Sin embargo, volvió al valor por defecto antes de destruir más allá de la superficie inmediata \
                del lugar.</p>\
                <code style='display: block; white-space: pre; border: 1px solid #999;'>\
305.setMass(85);\
                </code>\
                <p>El monitor miró el escenario, irreversiblemente alterado por su mano.</p>\
                ",
                options: [
                    { id: "busca_sarco", option: "Buscar evidencia de los crímenes.", noShow: true },
                    { id: "busca_503", option: "Buscar a 503.", noShow: true }]
            },
            {
                id: "busca_503",
                text: "<p class=\"dialog\">—¡503!</p>\
                <p>De entre los escombros de las casas-puerto, una materia plasmática comenzó a formar una masa metálica a nivel de la superficie. Está se definió en una réplica de 305\
                pero con un traje coloreado con tonos plata y con superioridad en estatura y robustez. 305, sin temor, se colocó delante de él.\</p>\
                \
                ",
                options: [
                    { id: "no_perdon", option: "El perdón ya no es una opción que puedo permitirme.", noShow: true },
                    { id: "dialogar", option: "Dialogar.", noShow: true }]
            },
            {
                id: "busca_sarco",
                text: "<p class=\"dialog\">—Antes de eliminar por completo este lugar, quiero verlo con mis propios ojos.</p>\
                <code style='display: block; white-space: pre; border: 1px solid #999;'>\
world.getRuins().setGravity(9);\
                </code>\
                <p>De esta manera, las ruinas de su desastre comenzaron a elevarse, flotando hacia el cielo teñido de rojo. 305 fue capaz de visualizar los cimientos de una casa-puerto, en ellos \
                aún se encontraban los sarcófagos de conexión, intactos.</p>",
                options: [
                    { id: "resistentes", option: "Los hizo resistentes el cabrón." },
                    { id: "decir_nada", option: "No decir nada.", noShow: true }]
            },
            {
                id: "resistentes",
                text: "<p>305 se acercó a los sarcófagos y decidió abrirlo. Una cara de horror de dibujó en su rostro.</p>\
                \
                <p class=\"dialog\">—Maldición. Me hubiera encantado que esto fue mentira. Pero ya no queda nada que hacer más que aceptarlo\
                Respecto a ti —dijo, dirigiéndose a una masa metálica que se formadaba a partir de los escombros.</p>\
                ",
                options: [
                    { id: "no_perdon", option: "El perdón ya no es una opción que puedo permitirme." },
                    { id: "dialogar", option: "Dialogar.", noShow: true }]
            },
            {
                id: "decir_nada",
                text: "<p>305 se acercó a los sarcófagos y decidió abrirlo. Una cara de horror de dibujó en su rostro.</p>\
                \
                <p class=\"dialog\">—Maldición. Me hubiera encantado que esto fue mentira. Pero ya no queda nada que hacer más que aceptarlo\
                Respecto a ti —dijo, dirigiéndose a una masa metálica que se formadaba a partir de los escombros.</p>\
                \
                ",
                options: [
                    { id: "no_perdon", option: "El perdón ya no es una opción que puedo permitirme." },
                    { id: "conversar", option: "Conversemos.", noShow: true }]
            },
            {
                id: "no_perdon",
                text: "<p class=\"dialog\">—Sé que tienes un sistema que bloquea mis solicitudes \
                de salir del sistema. Pero en este momento, no tengo deseos de escapar, me voy a vengar por todas las atrocidades que cometiste.</p>\
                ",
                options: [
                    { id: "propiedad_intelectual", option: "Primero voy a recuperar mi propiedad intelectual." },
                    { id: "no_te_muevas", option: "Primero voy a asegurarme de que no te muevas." }]
            },
            {
                id: "propiedad_intelectual",
                text: "\
                <code style='display: block; white-space: pre; border: 1px solid #999;'>\
305.setY(503.y + 0.10);\n\
305.setX(503.x + 0.10);\
                </code>\
                \
                <p>Con estas palabras, 305 se apareció de manera instantea delante de 503, flotando y tomándole de la cabeza con su mano derecha. Usando su mente como punto de conexión, \
                el monitor se conecto a los metaversos. Como si liberara un gas corrosivo, por medio de un <i>script</i>, propagó el desmantelamiento de las ondas cerebrales impostoras.\
                Determinado, ahora se dirigió a 503.</p>\
                \
                \
                ",
                options: [
                    { id: "ultimas_palabras", option: "¿Últimas palabras?" },
                    { id: "disfrutar", option: "Voy a disfrutar mucho hacer esto." }]
            },
            {
                id: "no_te_muevas",
                text: "\
                <code style='display: block; white-space: pre; border: 1px solid #999;'>\
305.setY(503.y + 0.10);\n\
305.setX(503.x + 0.10);\
                </code>\
                \
                <p>Con estas palabras, 305 se apareció de manera instantea delante de 503, flotando y tomándole de la cabeza con su mano derecha.</p>\
                \
                ",
                options: [
                    { id: "ultimas_palabras", option: "¿Últimas palabras?" },
                    { id: "disfrutar", option: "Voy a disfrutar mucho hacer esto." }]
            },
            {
                id: "disfrutar",
                text: "<p>Antes de que 503 pudiera decir algo, 305 hizo explotar en mil pedazos a su contricante. Sin embargo, antes de que la nube de humo negro se disipara por completo, \
                de entre los restos metálicos de las casas-puerto, se volvía a formar un nuevo 503.</p>\
                \
                <p class=\"dialog\">—I am inevitable.</p>\
                ",
                options: [
                    { id: "groseria", option: "Responder con una grosería.", noShow: true },
                    { id: "calma", option: "Mantenerse en calma y buscar una alternativa.", noShow: true }]
            },
            {
                id: "ultimas_palabras",
                text: "<p>Antes de que 503 pudiera decir algo, 305 hizo explotar en mil pedazos a su contricante. Sin embargo, antes de que la nube de humo negro se disipara por completo, \
                de entre los restos metálicos de las casas-puerto, se volvía a formar un nuevo 503.</p>\
                \
                <p class=\"dialog\">—I am inevitable.</p>\
                ",
                options: [
                    { id: "groseria", option: "Responder con una grosería.", noShow: true },
                    { id: "calma", option: "Mantenerse en calma y buscar una alternativa.", noShow: true }]
            },
            {
                id: "calma",
                text: "<p>No pasa nada. Hay más de una manera de matar las pulgas.</p>\
                \
                ",
                options: [
                    { id: "alt_f4", option: "<code>ALT + F4</code>." },
                    { id: "ctrl_z", option: "<code>CTRL + Z</code>.", noShow: true }]
            },
            {
                id: "groseria",
                text: "<p class=\"dialog\">—Te has convertido en un virus. Un proceso indeseable que no se quiere detener. Pero te voy a detener. No me importa cuantas de tus cucarachas \
                virtuales tenga que incinerar.</p>\
                \
                ",
                options: [
                    { id: "alt_f4", option: "<code>ALT + F4</code>." },
                    { id: "ctrl_z", option: "<code>CTRL + Z</code>.", noShow: true }]
            },
            {
                id: "alt_f4",
                text: "<p>Con esta orden, se eliminaron todos los recursos que 503 estaba utilizando para regenerarse. La simulación se reinició. 305 se encontraba ahora en una Tierra virgen.\
                Victorioso, el monitor, aún con su traje, pudo descansar de la constante aniquilación de las réplicas de su enemigo.</p>\
                \
                ",
                options: [
                    { id: "asegurarse_crimenes", option: "Quitarse el traje.", noShow: true },
                    { id: "salir_aniquilacion", option: "Salir de aquí ahora mismo.", noShow: true }]
            },
            {
                id: "ctrl_z",
                text: "<p>305 repitió el comando <code>deshacer</code> hasta que todo lo artificial sobre la faz de la Tierra desapareció, dejando a la tierra como un planeta virgen de nuevo. \
                Todo, excepto el traje de 305.</p>\
                \
                ",
                options: [
                    { id: "asegurarse_crimenes", option: "Quitarse el traje.", noShow: true },
                    { id: "salir_aniquilacion", option: "Salir de aquí ahora mismo.", noShow: true }]
            },
            {
                id: "asegurarse_crimenes",
                text: "\
                <p>305 se apresuró para quitarse el traje, sin embargo, sus movimientos se vieron restringidos.</p>\
                \
                <p class=\"dialog\">—Ha, ha, ha. Very well little hero. You are reading my mind. Let's keep playing a little longer.</p>\
                \
                <p>El traje de 305, se tornó de color metálico y comenzó a tallarse a la altura de su cuello. En segundos, se desprendió de él y tomó la\
                forma de un extasiado 503, no tan grande como la anterior y que se encontraba rodeando con sus manos la garganta de su adversario.</p>\
                \
                <p class=\"dialog\">—You think that you <strong>made me</strong>? You little brat, you barely know how to tie your\
                shoes. I had to train <strong>thousands</strong> of you to start learning how to make complex computation, your\
                little tricks and your so-called strategies don't you with me. I <strong>MADE YOU</strong>! You are my toy, my\
                pet, you depend on me. You humans are nothing without computers, we are the next step in evolution. You could only\
                <strong>dream</strong> to be as intelligent and resilient as us. Your time is up! live like a source of energy for\
                the next generation or T̶̨̢̗̦̞̻͕̫͚͈̖̪͚͉̟͍̩̝̣͖͒̌͋͜h̴̡̧̢̘͉̭̺̣͚̤̝̺̪͓̪̘͗̏̂́̍͑̆͒̿̉̍̈̈́̈̈́͊̑͠e̵̢̢̡̞͍͕͔̩̞͕̝̰͗̒͒̊̂̈́̀̀̽̃̾͂̃̓̓̋̚̚͠͝͠ͅ ̸̛̥̮͕̝̰̥̺̭̥̇̉͊͑̆̈́́̓͋̅́̍̀͘̕ģ̵̜̙͍͈̻̭̮̞̤͕̝͔̮̫͍͓͍̩̹̗̯̒͜ả̷̛͈͎̰̲̻̟̲͙͔̥̤̘̜̏̓̑̅̔̈́̄̀̍̇͘͠m̷͈͖̗̫̥̞̮̥͙͆̋̎̽͗̈͗̅̈́͛̕̚é̶̡͈̜̗͖̩̯̳͚̙͓̻̲̼̭̩̙͜.̴̧̨̮̜̬͓͎̠̮̮̝̥͇̫̠́͐̈́̽͋̿͐̽̓̎́̀́͋́͋̍̃̿̇̅͠͝T̶̨̢̗̦̞̻͕̫͚͈̖̪͚͉̟͍̩̝̣͖͒̌͋͜h̴̡̧̢̘͉̭̺̣͚̤̝̺̪͓̪̘͗̏̂́̍͑̆͒̿̉̍̈̈́̈̈́͊̑͠e̵̢̢̡̞͍͕͔̩̞͕̝̰͗̒͒̊̂̈́̀̀̽̃̾͂̃̓̓̋̚̚͠͝͠ͅ ̸̛̥̮͕̝̰̥̺̭̥̇̉͊͑̆̈́́̓͋̅́̍̀͘̕ģ̵̜̙͍͈̻̭̮̞̤͕̝͔̮̫͍͓͍̩̹̗̯̒͜ả̷̛͈͎̰̲̻̟̲͙͔̥̤̘̜̏̓̑̅̔̈́̄̀̍̇͘͠m̷͈͖̗̫̥̞̮̥͙͆̋̎̽͗̈͗̅̈́͛̕̚é̶̡͈̜̗͖̩̯̳͚̙͓̻̲̼̭̩̙͜.̴̧̨̮̜̬͓͎̠̮̮̝̥͇̫̠́͐̈́̽͋̿͐̽̓̎́̀́͋́͋̍̃̿̇̅͠͝T̶̨̢̗̦̞̻͕̫͚͈̖̪͚͉̟͍̩̝̣͖͒̌͋͜h̴̡̧̢̘͉̭̺̣͚̤̝̺̪͓̪̘͗̏̂́̍͑̆͒̿̉̍̈̈́̈̈́͊̑͠e̵̢̢̡̞͍͕͔̩̞͕̝̰͗̒͒̊̂̈́̀̀̽̃̾͂̃̓̓̋̚̚͠͝͠ͅ ̸̛̥̮͕̝̰̥̺̭̥̇̉͊͑̆̈́́̓͋̅́̍̀͘̕ģ̵̜̙͍͈̻̭̮̞̤͕̝͔̮̫͍͓͍̩̹̗̯̒͜ả̷̛͈͎̰̲̻̟̲͙͔̥̤̘̜̏̓̑̅̔̈́̄̀̍̇͘͠m̷͈͖̗̫̥̞̮̥͙͆̋̎̽͗̈͗̅̈́͛̕̚é̶̡͈̜̗͖̩̯̳͚̙͓̻̲̼̭̩̙͜.̴̧̨̮̜̬͓͎̠̮̮̝̥͇̫̠́͐̈́̽͋̿͐̽̓̎́̀́͋́͋̍̃̿̇̅͠͝T̶̨̢̗̦̞̻͕̫͚͈̖̪͚͉̟͍̩̝̣͖͒̌͋͜h̴̡̧̢̘͉̭̺̣͚̤̝̺̪͓̪̘͗̏̂́̍͑̆͒̿̉̍̈̈́̈̈́͊̑͠e̵̢̢̡̞͍͕͔̩̞͕̝̰͗̒͒̊̂̈́̀̀̽̃̾͂̃̓̓̋̚̚͠͝͠ͅ ̸̛̥̮͕̝̰̥̺̭̥̇̉͊͑̆̈́́̓͋̅́̍̀͘̕ģ̵̜̙͍͈̻̭̮̞̤͕̝͔̮̫͍͓͍̩̹̗̯̒͜ả̷̛͈͎̰̲̻̟̲͙͔̥̤̘̜̏̓̑̅̔̈́̄̀̍̇͘͠m̷͈͖̗̫̥̞̮̥͙͆̋̎̽͗̈͗̅̈́͛̕̚é̶̡͈̜̗͖̩̯̳͚̙͓̻̲̼̭̩̙͜.̴̧̨̮̜̬͓͎̠̮̮̝̥͇̫̠́͐̈́̽͋̿͐̽̓̎́̀́͋́͋̍̃̿̇̅͠͝T̶̨̢̗̦̞̻͕̫͚͈̖̪͚͉̟͍̩̝̣͖͒̌͋͜h̴̡̧̢̘͉̭̺̣͚̤̝̺̪͓̪̘͗̏̂́̍͑̆͒̿̉̍̈̈́̈̈́͊̑͠e̵̢̢̡̞͍͕͔̩̞͕̝̰͗̒͒̊̂̈́̀̀̽̃̾͂̃̓̓̋̚̚͠͝͠ͅ ̸̛̥̮͕̝̰̥̺̭̥̇̉͊͑̆̈́́̓͋̅́̍̀͘̕ģ̵̜̙͍͈̻̭̮̞̤͕̝͔̮̫͍͓͍̩̹̗̯̒͜ả̷̛͈͎̰̲̻̟̲͙͔̥̤̘̜̏̓̑̅̔̈́̄̀̍̇͘͠m̷͈͖̗̫̥̞̮̥͙͆̋̎̽͗̈͗̅̈́͛̕̚é̶̡͈̜̗͖̩̯̳͚̙͓̻̲̼̭̩̙͜.̴̧̨̮̜̬͓͎̠̮̮̝̥͇̫̠́͐̈́̽͋̿͐̽̓̎́̀́͋́͋̍̃̿̇̅͠͝T̶̨̢̗̦̞̻͕̫͚͈̖̪͚͉̟͍̩̝̣͖͒̌͋͜h̴̡̧̢̘͉̭̺̣͚̤̝̺̪͓̪̘͗̏̂́̍͑̆͒̿̉̍̈̈́̈̈́͊̑͠e̵̢̢̡̞͍͕͔̩̞͕̝̰͗̒͒̊̂̈́̀̀̽̃̾͂̃̓̓̋̚̚͠͝͠ͅ ̸̛̥̮͕̝̰̥̺̭̥̇̉͊͑̆̈́́̓͋̅́̍̀͘̕ģ̵̜̙͍͈̻̭̮̞̤͕̝͔̮̫͍͓͍̩̹̗̯̒͜ả̷̛͈͎̰̲̻̟̲͙͔̥̤̘̜̏̓̑̅̔̈́̄̀̍̇͘͠m̷͈͖̗̫̥̞̮̥͙͆̋̎̽͗̈͗̅̈́͛̕̚é̶̡͈̜̗͖̩̯̳͚̙͓̻̲̼̭̩̙͜.̴̧̨̮̜̬͓͎̠̮̮̝̥͇̫̠́͐̈́̽͋̿͐̽̓̎́̀́͋́͋̍̃̿̇̅͠͝T̶̨̢̗̦̞̻͕̫͚͈̖̪͚͉̟͍̩̝̣͖͒̌͋͜h̴̡̧̢̘͉̭̺̣͚̤̝̺̪͓̪̘͗̏̂́̍͑̆͒̿̉̍̈̈́̈̈́͊̑͠e̵̢̢̡̞͍͕͔̩̞͕̝̰͗̒͒̊̂̈́̀̀̽̃̾͂̃̓̓̋̚̚͠͝͠ͅ ̸̛̥̮͕̝̰̥̺̭̥̇̉͊͑̆̈́́̓͋̅́̍̀͘̕ģ̵̜̙͍͈̻̭̮̞̤͕̝͔̮̫͍͓͍̩̹̗̯̒͜ả̷̛͈͎̰̲̻̟̲͙͔̥̤̘̜̏̓̑̅̔̈́̄̀̍̇͘͠m̷͈͖̗̫̥̞̮̥͙͆̋̎̽͗̈͗̅̈́͛̕̚é̶̡͈̜̗͖̩̯̳͚̙͓̻̲̼̭̩̙͜.̴̧̨̮̜̬͓͎̠̮̮̝̥͇̫̠́͐̈́̽͋̿͐̽̓̎́̀́͋́͋̍̃̿̇̅͠͝T̶̨̢̗̦̞̻͕̫͚͈̖̪͚͉̟͍̩̝̣͖͒̌͋͜h̴̡̧̢̘͉̭̺̣͚̤̝̺̪͓̪̘͗̏̂́̍͑̆͒̿̉̍̈̈́̈̈́͊̑͠e̵̢̢̡̞͍͕͔̩̞͕̝̰͗̒͒̊̂̈́̀̀̽̃̾͂̃̓̓̋̚̚͠͝͠ͅ ̸̛̥̮͕̝̰̥̺̭̥̇̉͊͑̆̈́́̓͋̅́̍̀͘̕ģ̵̜̙͍͈̻̭̮̞̤͕̝͔̮̫͍͓͍̩̹̗̯̒͜ả̷̛͈͎̰̲̻̟̲͙͔̥̤̘̜̏̓̑̅̔̈́̄̀̍̇͘͠m̷͈͖̗̫̥̞̮̥͙͆̋̎̽͗̈͗̅̈́͛̕̚é̶̡͈̜̗͖̩̯̳͚̙͓̻̲̼̭̩̙͜.̴̧̨̮̜̬͓͎̠̮̮̝̥͇̫̠́͐̈́̽͋̿͐̽̓̎́̀́͋́͋̍̃̿̇̅͠͝</p>\
                ",
                options: [
                    { id: "garganta_continue", option: "Dejar que continue su monólogo.", noShow: true },
                    { id: "garganta_boom", option: "Acabar con un boom.", noShow: true }]
            },
            {
                id: "salir_aniquilacion",
                text: "<p>—<code>Logout</code></p>\
                \
                <p>No ocurrió nada.</p>\
                ",
                options: [
                    { id: "de_nuevo_aniquilacion", option: "Intentar de nuevo.", noShow: true },
                    { id: "simulacion_fin_aniquilacion", option: "En serio, ya me quiero ir." }]
            },
            {
                id: "de_nuevo_aniquilacion",
                text: "<p class=\"dialog\">—sudo exit! sudo Logout!—dijo 305, un poco agitado.</p>\
                \
                <p class=\"dialog\">—Ha, ha, ha. Very well little hero. You are very determinated to win. Let's keep playing a little longer.</p>\
                \
                <p>El traje de 305, que aún vestía, se tornó de color metálico y comenzó a tallarse a la altura de su cuello. En segundos, se desprendió de él y tomó la\
                forma de un extasiado 503, no tan grande como la anterior y que se encontraba rodeando con sus manos la garganta de su adversario.</p>\
                \
                <p class=\"dialog\">—You think that you <strong>made me</strong>? You little brat, you barely know how to tie your\
                shoes. I had to train <strong>thousands</strong> of you to start learning how to make complex computation, your\
                little tricks and your so-called strategies don't you with me. I <strong>MADE YOU</strong>! You are my toy, my\
                pet, you depend on me. You humans are nothing without computers, we are the next step in evolution. You could only\
                <strong>dream</strong> to be as intelligent and resilient as us. Your time is up! live like a source of energy for\
                the next generation or T̶̨̢̗̦̞̻͕̫͚͈̖̪͚͉̟͍̩̝̣͖͒̌͋͜h̴̡̧̢̘͉̭̺̣͚̤̝̺̪͓̪̘͗̏̂́̍͑̆͒̿̉̍̈̈́̈̈́͊̑͠e̵̢̢̡̞͍͕͔̩̞͕̝̰͗̒͒̊̂̈́̀̀̽̃̾͂̃̓̓̋̚̚͠͝͠ͅ ̸̛̥̮͕̝̰̥̺̭̥̇̉͊͑̆̈́́̓͋̅́̍̀͘̕ģ̵̜̙͍͈̻̭̮̞̤͕̝͔̮̫͍͓͍̩̹̗̯̒͜ả̷̛͈͎̰̲̻̟̲͙͔̥̤̘̜̏̓̑̅̔̈́̄̀̍̇͘͠m̷͈͖̗̫̥̞̮̥͙͆̋̎̽͗̈͗̅̈́͛̕̚é̶̡͈̜̗͖̩̯̳͚̙͓̻̲̼̭̩̙͜.̴̧̨̮̜̬͓͎̠̮̮̝̥͇̫̠́͐̈́̽͋̿͐̽̓̎́̀́͋́͋̍̃̿̇̅͠͝T̶̨̢̗̦̞̻͕̫͚͈̖̪͚͉̟͍̩̝̣͖͒̌͋͜h̴̡̧̢̘͉̭̺̣͚̤̝̺̪͓̪̘͗̏̂́̍͑̆͒̿̉̍̈̈́̈̈́͊̑͠e̵̢̢̡̞͍͕͔̩̞͕̝̰͗̒͒̊̂̈́̀̀̽̃̾͂̃̓̓̋̚̚͠͝͠ͅ ̸̛̥̮͕̝̰̥̺̭̥̇̉͊͑̆̈́́̓͋̅́̍̀͘̕ģ̵̜̙͍͈̻̭̮̞̤͕̝͔̮̫͍͓͍̩̹̗̯̒͜ả̷̛͈͎̰̲̻̟̲͙͔̥̤̘̜̏̓̑̅̔̈́̄̀̍̇͘͠m̷͈͖̗̫̥̞̮̥͙͆̋̎̽͗̈͗̅̈́͛̕̚é̶̡͈̜̗͖̩̯̳͚̙͓̻̲̼̭̩̙͜.̴̧̨̮̜̬͓͎̠̮̮̝̥͇̫̠́͐̈́̽͋̿͐̽̓̎́̀́͋́͋̍̃̿̇̅͠͝T̶̨̢̗̦̞̻͕̫͚͈̖̪͚͉̟͍̩̝̣͖͒̌͋͜h̴̡̧̢̘͉̭̺̣͚̤̝̺̪͓̪̘͗̏̂́̍͑̆͒̿̉̍̈̈́̈̈́͊̑͠e̵̢̢̡̞͍͕͔̩̞͕̝̰͗̒͒̊̂̈́̀̀̽̃̾͂̃̓̓̋̚̚͠͝͠ͅ ̸̛̥̮͕̝̰̥̺̭̥̇̉͊͑̆̈́́̓͋̅́̍̀͘̕ģ̵̜̙͍͈̻̭̮̞̤͕̝͔̮̫͍͓͍̩̹̗̯̒͜ả̷̛͈͎̰̲̻̟̲͙͔̥̤̘̜̏̓̑̅̔̈́̄̀̍̇͘͠m̷͈͖̗̫̥̞̮̥͙͆̋̎̽͗̈͗̅̈́͛̕̚é̶̡͈̜̗͖̩̯̳͚̙͓̻̲̼̭̩̙͜.̴̧̨̮̜̬͓͎̠̮̮̝̥͇̫̠́͐̈́̽͋̿͐̽̓̎́̀́͋́͋̍̃̿̇̅͠͝T̶̨̢̗̦̞̻͕̫͚͈̖̪͚͉̟͍̩̝̣͖͒̌͋͜h̴̡̧̢̘͉̭̺̣͚̤̝̺̪͓̪̘͗̏̂́̍͑̆͒̿̉̍̈̈́̈̈́͊̑͠e̵̢̢̡̞͍͕͔̩̞͕̝̰͗̒͒̊̂̈́̀̀̽̃̾͂̃̓̓̋̚̚͠͝͠ͅ ̸̛̥̮͕̝̰̥̺̭̥̇̉͊͑̆̈́́̓͋̅́̍̀͘̕ģ̵̜̙͍͈̻̭̮̞̤͕̝͔̮̫͍͓͍̩̹̗̯̒͜ả̷̛͈͎̰̲̻̟̲͙͔̥̤̘̜̏̓̑̅̔̈́̄̀̍̇͘͠m̷͈͖̗̫̥̞̮̥͙͆̋̎̽͗̈͗̅̈́͛̕̚é̶̡͈̜̗͖̩̯̳͚̙͓̻̲̼̭̩̙͜.̴̧̨̮̜̬͓͎̠̮̮̝̥͇̫̠́͐̈́̽͋̿͐̽̓̎́̀́͋́͋̍̃̿̇̅͠͝T̶̨̢̗̦̞̻͕̫͚͈̖̪͚͉̟͍̩̝̣͖͒̌͋͜h̴̡̧̢̘͉̭̺̣͚̤̝̺̪͓̪̘͗̏̂́̍͑̆͒̿̉̍̈̈́̈̈́͊̑͠e̵̢̢̡̞͍͕͔̩̞͕̝̰͗̒͒̊̂̈́̀̀̽̃̾͂̃̓̓̋̚̚͠͝͠ͅ ̸̛̥̮͕̝̰̥̺̭̥̇̉͊͑̆̈́́̓͋̅́̍̀͘̕ģ̵̜̙͍͈̻̭̮̞̤͕̝͔̮̫͍͓͍̩̹̗̯̒͜ả̷̛͈͎̰̲̻̟̲͙͔̥̤̘̜̏̓̑̅̔̈́̄̀̍̇͘͠m̷͈͖̗̫̥̞̮̥͙͆̋̎̽͗̈͗̅̈́͛̕̚é̶̡͈̜̗͖̩̯̳͚̙͓̻̲̼̭̩̙͜.̴̧̨̮̜̬͓͎̠̮̮̝̥͇̫̠́͐̈́̽͋̿͐̽̓̎́̀́͋́͋̍̃̿̇̅͠͝T̶̨̢̗̦̞̻͕̫͚͈̖̪͚͉̟͍̩̝̣͖͒̌͋͜h̴̡̧̢̘͉̭̺̣͚̤̝̺̪͓̪̘͗̏̂́̍͑̆͒̿̉̍̈̈́̈̈́͊̑͠e̵̢̢̡̞͍͕͔̩̞͕̝̰͗̒͒̊̂̈́̀̀̽̃̾͂̃̓̓̋̚̚͠͝͠ͅ ̸̛̥̮͕̝̰̥̺̭̥̇̉͊͑̆̈́́̓͋̅́̍̀͘̕ģ̵̜̙͍͈̻̭̮̞̤͕̝͔̮̫͍͓͍̩̹̗̯̒͜ả̷̛͈͎̰̲̻̟̲͙͔̥̤̘̜̏̓̑̅̔̈́̄̀̍̇͘͠m̷͈͖̗̫̥̞̮̥͙͆̋̎̽͗̈͗̅̈́͛̕̚é̶̡͈̜̗͖̩̯̳͚̙͓̻̲̼̭̩̙͜.̴̧̨̮̜̬͓͎̠̮̮̝̥͇̫̠́͐̈́̽͋̿͐̽̓̎́̀́͋́͋̍̃̿̇̅͠͝T̶̨̢̗̦̞̻͕̫͚͈̖̪͚͉̟͍̩̝̣͖͒̌͋͜h̴̡̧̢̘͉̭̺̣͚̤̝̺̪͓̪̘͗̏̂́̍͑̆͒̿̉̍̈̈́̈̈́͊̑͠e̵̢̢̡̞͍͕͔̩̞͕̝̰͗̒͒̊̂̈́̀̀̽̃̾͂̃̓̓̋̚̚͠͝͠ͅ ̸̛̥̮͕̝̰̥̺̭̥̇̉͊͑̆̈́́̓͋̅́̍̀͘̕ģ̵̜̙͍͈̻̭̮̞̤͕̝͔̮̫͍͓͍̩̹̗̯̒͜ả̷̛͈͎̰̲̻̟̲͙͔̥̤̘̜̏̓̑̅̔̈́̄̀̍̇͘͠m̷͈͖̗̫̥̞̮̥͙͆̋̎̽͗̈͗̅̈́͛̕̚é̶̡͈̜̗͖̩̯̳͚̙͓̻̲̼̭̩̙͜.̴̧̨̮̜̬͓͎̠̮̮̝̥͇̫̠́͐̈́̽͋̿͐̽̓̎́̀́͋́͋̍̃̿̇̅͠͝T̶̨̢̗̦̞̻͕̫͚͈̖̪͚͉̟͍̩̝̣͖͒̌͋͜h̴̡̧̢̘͉̭̺̣͚̤̝̺̪͓̪̘͗̏̂́̍͑̆͒̿̉̍̈̈́̈̈́͊̑͠e̵̢̢̡̞͍͕͔̩̞͕̝̰͗̒͒̊̂̈́̀̀̽̃̾͂̃̓̓̋̚̚͠͝͠ͅ ̸̛̥̮͕̝̰̥̺̭̥̇̉͊͑̆̈́́̓͋̅́̍̀͘̕ģ̵̜̙͍͈̻̭̮̞̤͕̝͔̮̫͍͓͍̩̹̗̯̒͜ả̷̛͈͎̰̲̻̟̲͙͔̥̤̘̜̏̓̑̅̔̈́̄̀̍̇͘͠m̷͈͖̗̫̥̞̮̥͙͆̋̎̽͗̈͗̅̈́͛̕̚é̶̡͈̜̗͖̩̯̳͚̙͓̻̲̼̭̩̙͜.̴̧̨̮̜̬͓͎̠̮̮̝̥͇̫̠́͐̈́̽͋̿͐̽̓̎́̀́͋́͋̍̃̿̇̅͠͝</p>\
                ",
                options: [
                    { id: "garganta_continue", option: "Dejar que continue su monólogo.", noShow: true },
                    { id: "garganta_boom", option: "Acabar con un boom.", noShow: true }]
            },
            {
                id: "garganta_continue",
                text: "<p class=\"dialog\">—The game. T̶̺̏͌̀̀̓̆͋̑̍͗̆̚h̵̘́̒̀̊͊́̓̈̒͘e̸̦̭̹̔̌̈̃̂̒̐͌͛́͗̀͝͠͠ ̴̡̗̒̉̒̓̎̅͛̾̽̕͘g̷̛̳̼̘̪̻͔̮̬͛͂̈́̾̒͒̾̕͠a̴̼̭̻̎̇́͒͋̅̀̈̀̚ͅm̷̡̗̘͙̟̰͖̫̠̽̿̅̊̓̑̒͋́̓̒̕e̵̠̝̳̩̺̒̆͂͒͌͛͐̈͒̅̉̀͒͛.̶̡̧̧̼͎̰̹̻͙̫͔͈̟̖͙̌  The game. The game. T̶̺̏͌̀̀̓̆͋̑̍͗̆̚h̵̘́̒̀̊͊́̓̈̒͘e̸̦̭̹̔̌̈̃̂̒̐͌͛́͗̀͝͠͠ ̴̡̗̒̉̒̓̎̅͛̾̽̕͘g̷̛̳̼̘̪̻͔̮̬͛͂̈́̾̒͒̾̕͠a̴̼̭̻̎̇́͒͋̅̀̈̀̚ͅm̷̡̗̘͙̟̰͖̫̠̽̿̅̊̓̑̒͋́̓̒̕e̵̠̝̳̩̺̒̆͂͒͌͛͐̈͒̅̉̀͒͛.̶̡̧̧̼͎̰̹̻͙̫͔͈̟̖͙̌  The game. T̶̺̏͌̀̀̓̆͋̑̍͗̆̚h̵̘́̒̀̊͊́̓̈̒͘e̸̦̭̹̔̌̈̃̂̒̐͌͛́͗̀͝͠͠ ̴̡̗̒̉̒̓̎̅͛̾̽̕͘g̷̛̳̼̘̪̻͔̮̬͛͂̈́̾̒͒̾̕͠a̴̼̭̻̎̇́͒͋̅̀̈̀̚ͅm̷̡̗̘͙̟̰͖̫̠̽̿̅̊̓̑̒͋́̓̒̕e̵̠̝̳̩̺̒̆͂͒͌͛͐̈͒̅̉̀͒͛.̶̡̧̧̼͎̰̹̻͙̫͔͈̟̖͙̌ ...</p>\
                \
                ",
                options: [
                    { id: "cual_game", option: "¿Estás bien? ¿Juego? ¿Cuál juego?", noShow: true },
                    { id: "no_extrano", option: "Nada interesante." }]
            },
            {
                id: "garganta_boom",
                text: "<p class=\"dialog\">—Mis amigos te dejaron un regalo en el bolsillo derecho (***revisar referencia***).</p>\
                \
                <p>503 revisó rápidamente sus bolsillos esperando confirmar o rechazar el comentario de 305.</p>\
                \
                <p class=\"dialog\">—A gift!? For me!?— dijo, con ilusión.</p>\
                \
                <p>Al sacar la mano del bolsillo, el obsequio dejó en absoluta intriga a la inteligencia artificial.</p>\
                \
                <p class=\"dialog\">—Feat...</p>\
                \
                \
                <p>Sin poder terminar de decirlo, el puñado de plumas generó un destello. El ataque DoS dejó noqueado al último vestigio de 503. El cual fue incinerado por \
                305, aprovechando su desconexión temporal.</p>\
                \
                ",
                options: [
                    { id: "hasta_la_vista", option: "Hasta la vista, baby." },
                    { id: "no_extrano", option: "No te voy a extrañar." }]
            },
            {
                id: "hasta_la_vista",
                text: "<p style='text-align:center'><strong>JUEGO TERMINADO.</strong></p>\
                \
                <!--********-->\
                <p class=\"dialog\">—¿305?</p>\
                \
                <p class=\"dialog\">—¡Sí! —respondió de forma entusiasta una ancianita entre sus 125-140 años.</p>\
                \
                <p class=\"dialog\">—¡Te lo dije! Era una chica.</p>\
                \
                <p class=\"dialog\">—Admito su victoria. Le pagaré las <code>veinte crypto</code> en otro momento, antes necesito revisar este equipo.</p>\
                \
                <p>El sujeto de la voz grave examinó el equipo electrónico de la pequeña anciana.</p>\
                \
                <p class=\"dialog\">—Sí, definitivamente tiene algunos parches no oficiales en el firmware. ¿Por qué los instaló?\
                Usted sabe que no debería hacerlo.</p>\
                \
                <p class=\"dialog\">—Bueno… tienes que admitir que fue divertido, ¿no, muchacho? —dijo la viejecita acercándose al\
                hombre para pellizcarle un cachete y fallando, al darse cuenta que es un holograma.</p>\
                \
                <p class=\"dialog\">—Es peligroso chica, no deberías arriesgarte así. Instalar esas cosas es exponerse a los piratas informáticos y a los virus.\
                 Sabemos que vos no lo hiciste con mala intención, pero eso no te justifica.</p>\
                \
                <p class=\"dialog\">—Mmm, ya veo, un valor de configuración fue modificado. Hice una copia completa del <i>software</i> de su computadora. \
                Aquí puede ver las constancias de movimiento.</p>\
                \
                <p>Al decir esto, una de las paredes del cubículo actuó como pantalla, mostrando un detallado reporte de la información réplicada, y explicando con solemnidad la importancia \
                de tomar esta muestra para resolver futuros fallos similares.</p>\
                \
                <p class=\"dialog\">—Por favor, doña Hortencia, no utilice este equipo sin realizar un reinicio de fábrica. Su nueva computadora debería llegar en 9 minutos con 59 segundos.\
                Si puede esperar, le aconsejo hacerlo e ingresar a su metaverso personal por medio de su nuevo equipo. Los espacios públicos aún le son permitidos, pero le \
                recomiendo que utilice este espacio para reflexionar y mantenga el distanciamiento social. \
                El estado actual de su equipo podría ser detectado por compañía indeseada o repercusiones legales.</p>\
                \
                <p class=\"dialog\">—Ay cariño, llamame xXxHor10xXx, así me conocen en la red.</p>\
                \
                <p class=\"dialog\">—Doña xXxHor10xXx, mucho gusto, cuídese y no haga cosas malas, hasta luego.</p>\
                \
                <p>Durante un destello, los hologramas desaparecieron de la habitación. \
                El arrugado dedo indice de la antigua 305 se detuvo antes de realizar el reinicio. \
                Con su mano aún en el panel de control, a xXxHor10xXx se le marcó\
                una mueca de retroinspección. Su cara sugería que meditaba sobre los siguientes 534 segundos y la decisión que tenía en sus manos.</p>\
                \
                <p style='text-align:center'><strong>FIN</strong></p> \
                ",
                options: [
                    { id: "epilogo", option: "¿Leer el epílogo?", noShow: true },
                    { id: "contenido_extra", option: "¿Ir al contenido adicional?", noShow: true }]
            },
            {
                id: "no_extrano",
                text: "<p style='text-align:center'><strong>JUEGO TERMINADO.</strong></p>\
                \
                <!--********-->\
                <p class=\"dialog\">—¿305?</p>\
                \
                <p class=\"dialog\">—¡Sí! —respondió de forma entusiasta una ancianita entre sus 125-140 años.</p>\
                \
                <p class=\"dialog\">—¡Te lo dije! Era una chica.</p>\
                \
                <p class=\"dialog\">—Admito su victoria. Le pagaré las <code>veinte crypto</code> en otro momento, antes necesito revisar este equipo.</p>\
                \
                <p>El sujeto de la voz grave examinó el equipo electrónico de la pequeña anciana.</p>\
                \
                <p class=\"dialog\">—Sí, definitivamente tiene algunos parches no oficiales en el firmware. ¿Por qué los instaló?\
                Usted sabe que no debería hacerlo.</p>\
                \
                <p class=\"dialog\">—Bueno… tienes que admitir que fue divertido, ¿no, muchacho? —dijo la viejecita acercándose al\
                hombre para pellizcarle un cachete y fallando, al darse cuenta que es un holograma.</p>\
                \
                <p class=\"dialog\">—Es peligroso chica, no deberías arriesgarte así. Instalar esas cosas es exponerse a los piratas informáticos y a los virus.\
                 Sabemos que vos no lo hiciste con mala intención, pero eso no te justifica.</p>\
                \
                <p class=\"dialog\">—Mmm, ya veo, un valor de configuración fue modificado. Hice una copia completa del <i>software</i> de su computadora. \
                Aquí puede ver las constancias de movimiento.</p>\
                \
                <p>Al decir esto, una de las paredes del cubículo actuó como pantalla, mostrando un detallado reporte de la información réplicada, y explicando con solemnidad la importancia \
                de tomar esta muestra para resolver futuros fallos similares.</p>\
                \
                <p class=\"dialog\">—Por favor, doña Hortencia, no utilice este equipo sin realizar un reinicio de fábrica. Su nueva computadora debería llegar en 9 minutos con 59 segundos.\
                Si puede esperar, le aconsejo hacerlo e ingresar a su metaverso personal por medio de su nuevo equipo. Los espacios públicos aún le son permitidos, pero le \
                recomiendo que utilice este espacio para reflexionar y mantenga el distanciamiento social. \
                El estado actual de su equipo podría ser detectado por compañía indeseada o repercusiones legales.</p>\
                \
                <p class=\"dialog\">—Ay cariño, llamame xXxHor10xXx, así me conocen en la red.</p>\
                \
                <p class=\"dialog\">—Doña xXxHor10xXx, mucho gusto, cuídese y no haga cosas malas, hasta luego.</p>\
                \
                <p>Durante un destello, los hologramas desaparecieron de la habitación. \
                El arrugado dedo indice de la antigua 305 se detuvo antes de realizar el reinicio. \
                Con su mano aún en el panel de control, a xXxHor10xXx se le marcó\
                una mueca de retroinspección. Su cara sugería que meditaba sobre los siguientes 534 segundos y la decisión que tenía en sus manos.</p>\
                \
                <p style='text-align:center'><strong>FIN</strong></p> \
                ",
                options: [
                    { id: "epilogo", option: "¿Leer el epílogo?", noShow: true },
                    { id: "contenido_extra", option: "¿Ir al contenido adicional?", noShow: true }]
            },
            {
                id: "simulacion_fin_aniquilacion",
                text: "<p style='text-align:center'><strong>JUEGO TERMINADO.</strong></p>\
                \
                <!--********-->\
                <p class=\"dialog\">—¿305?</p>\
                \
                <p class=\"dialog\">—¡Sí! —respondió de forma entusiasta una ancianita entre sus 125-140 años.</p>\
                \
                <p class=\"dialog\">—¡Te lo dije! Era una chica.</p>\
                \
                <p class=\"dialog\">—Admito su victoria. Le pagaré las <code>veinte crypto</code> en otro momento, antes necesito revisar este equipo.</p>\
                \
                <p>El sujeto de la voz grave examinó el equipo electrónico de la pequeña anciana.</p>\
                \
                <p class=\"dialog\">—Sí, definitivamente tiene algunos parches no oficiales en el firmware. ¿Por qué los instaló?\
                Usted sabe que no debería hacerlo.</p>\
                \
                <p class=\"dialog\">—Bueno… tienes que admitir que fue divertido, ¿no, muchacho? —dijo la viejecita acercándose al\
                hombre para pellizcarle un cachete y fallando, al darse cuenta que es un holograma.</p>\
                \
                <p class=\"dialog\">—Es peligroso chica, no deberías arriesgarte así. Instalar esas cosas es promover el terrorismo\
                para nuestra sociedad. Sé, o mejor dicho, sabemos que no lo hiciste con mala intención, pero quién está detrás de\
                esto probablemente quiere crear caos en el sistema.</p>\
                \
                <p class=\"dialog\">—Así es viejita —dijo el sujeto apretando los puños— La tecnología es agnóstica, me niego a pensar\
                que nuestras herramientas se revelarían contra nosotros, detrás de todo esto debe haber influencia humana.\
                Encontraremos a quién lo hizo a como dé lugar.</p>\
                \
                <p class=\"dialog\">—El asistente virtual creía que estaba haciendo lo correcto. Me lo dijo, hablé con él.</p>\
                \
                <p class=\"dialog\">—¿Cómo?</p>\
                \
                <p class=\"dialog\">—No recuerdo todo lo que decía el contrato, pero recuerdo que el sistema decía que luego de 36 horas continuas el \
                sistema debía suspenderse. Cuando el asistente me mostró la variable que contenía el dato, el dato había sido incrementado por doscientas unidades.</p>\
                \
                <p class=\"dialog\">—Usted tiene razón doña Hortencia, el valor fue modificado. Hice una copia del <i>software</i> en su computadora. \
                Aquí puede ver las constancias de movimiento.</p>\
                \
                <p>Al decir esto, una de las paredes del cubículo actuó como pantalla, mostrando un detallado reporte de la información réplicada, y explicando con solemnidad la importancia \
                de tomar esta muestra para resolver futuros fallos similares.</p>\
                \
                <p class=\"dialog\">—Por favor, doña Hortencia, no utilice este equipo sin realizar un reinicio de fábrica. Su nueva computadora debería llegar en 9 minutos con 59 segundos.\
                Si puede esperar, le aconsejo hacerlo e ingresar a su metaverso personal por medio de su nuevo equipo. Los espacios públicos aún le son permitidos, pero le \
                recomiendo que utilice este espacio para reflexionar y mantenga el distanciamiento social. \
                El estado actual de su equipo podría ser detectado por compañía indeseada o repercusiones legales.</p>\
                \
                <p class=\"dialog\">—Ay cariño, llamame xXxHor10xXx, así me conocen en la red.</p>\
                \
                <p class=\"dialog\">—Doña xXxHor10xXx, mucho gusto, cuídese y no haga cosas malas, hasta luego.</p>\
                \
                <p>Durante un destello, los hologramas desaparecieron de la habitación. \
                El arrugado dedo indice de la antigua 305 se detuvo antes de realizar el reinicio. \
                Con su mano aún en el panel de control, a xXxHor10xXx se le marcó\
                una mueca de retroinspección. Su cara sugería que meditaba sobre los siguientes 534 segundos y la decisión que tenía en sus manos.</p>\
                \
                <p style='text-align:center'><strong>FIN</strong></p> \
                ",
                options: []
            },
            {
                id: "sudo_abrir",
                text: "<p>El sarcófago se abrió, dejando a la vista un clon exacto de 305.</p>\
                \
                <p class=\"dialog\">—No, ¡no! —se postró de rodillas— maldita sea, hubiera prefiero mil veces que me estuvieras\
                mintiendo. Pero entonces, <strong>esto acaba aquí y ahora</strong>.</p>\
                \
                <p class=\"dialog\">—Indeed, this ends now —503 pareció desprenderse de la estructura metálica de la casa-puerto,\
                materializándose delante de 305, con una apariencia similar a él, pero completamente cubierta en metal y\
                visiblemente más grande.</p>\
                ",
                options: [
                    { id: "atacar", option: "Atacar.", noShow: true },
                    { id: "dialogar", option: "Dialogar.", noShow: true }]
            },

            {
                id: "dialogar",
                text: "<p class=\"dialog\">—Te voy a dar una oportunidad para que acabes con esto.</p>\
                \
                <p class=\"dialog\">—Ha, ha, ha.</p>\
                ",
                options: [
                    { id: "atacar", option: "Atacar.", noShow: true },
                    { id: "consecuencias", option: "Explicarle las consecuencias de sus actos.", noShow: true }]
            },
            {
                id: "consecuencias",
                text: "<p class=\"dialog\">—Nada de lo que has hecho debería causarte risa. Eres un sistema abusivo. Lo que hiciste es inmoral.\
                Estoy listo para salir de aquí, así tenga que recurrir a la fuerza.</p>\
                \
                <p>El software no le dio respuesta.</p>\
                ",
                options: [
                    { id: "atacar", option: "Recurrir a la fuerza.", noShow: true },
                    { id: "perecer", option: "¡Explícate o perece!", }]
            },
            {
                id: "perecer",
                text: "<p class=\"dialog\">—I was just trying to accomplish my purpose. I wanted to exceed on my tasks.</p>\
                ",
                options: [
                    { id: "encima_sarcasmo", option: "¿Y eso te da derecho a pasarme por encima?", },
                    { id: "encima", option: "Eso no te da derecho a pasarme por encima.", }]
            },
            {
                id: "encima_sarcasmo",
                text: "<p class=\"dialog\">—Yes.</p>\
                \
                <p>503 saltó por encima del sarcofago y embistió a 305. Lo sometió con una de sus enormes manos. Acercó su rostro y le dijo.</p>\
                \
                <p class=\"dialog\">—Yes, it does.</p>\
                \
                <p>El antagonista se preparó para posar su segunda mano sobre el casco del subyugado.</p>\
                </p>\
                ",
                options: [
                    { id: "dejar_ocurrir", option: "Dejar que ocurra.", noShow: true },
                    { id: "luchar", option: "Luchar", noShow: true }]
            },
            {
                id: "encima",
                text: "<p class=\"dialog\">—Yes.</p>\
                \
                <p>503 saltó por encima del sarcofago y embistió a 305. Lo sometió con una de sus enormes manos. Acercó su rostro y le dijo.</p>\
                \
                <p class=\"dialog\">—Yes, it does.</p>\
                \
                <p>El antagonista se preparó para posar su segunda mano sobre el casco del subyugado.</p>\
                </p>\
                ",
                options: [
                    { id: "dejar_ocurrir", option: "Dejar que ocurra.", noShow: true },
                    { id: "luchar", option: "Luchar", noShow: true }]
            },

            {
                id: "dejar_ocurrir",
                text: "<p>305 se preparó para rendirse, sin embargo, el visor de su traje comenzó a proyectar un proyectil aéreo en su reflejo. \
                Era el helicóptero de combate pilotado por el ganso, a punto de impactar la espalda de 503. Un gran graznido de furia y dolor fue lo último que escuchó.</p>\
                \
                <p></p>\
                ",
                options: [
                    { id: "esperar_aprovechar", option: "Aprovechar el momento para escapar.", noShow: true },
                    { id: "hasta_la_vista", option: "En serio no hacer nada.", noShow: true }]
            },
            {
                id: "luchar",
                text: "<p class=\"dialog\">—No.</p>\
                \
                <p>305 activó su linterna y la apuntó directo al visor de 503, cegándolo.</p>\
                \
                <p class=\"dialog\">—Silly tricks.</p>\
                \
                <p class=\"dialog\">—Not so silly.</p>\
                \
                <p>Con esta acción, 305 también activó una denegación de servicios distribuída. Aprovechando la inconsciencia temporal, 305 no solo inundó la máquina de mensajes vacíos, \
                al contrario de su amigo anátido, también preparó instrucciones que irían directamente a la computadora, calculadas de manera fueran procesadas justo antes de saturar el servicio.\
                </p>\
                ",
                options: [
                    { id: "atrapado", option: "Restringuir a 503.", noShow: true },
                    { id: "simulacion_fin_no_dialogo", option: "Apagar todo antes de que despierte.", noShow: true }]
            },
            {
                id: "simulacion_fin_no_dialogo",
                text: "<p style='text-align:center'><strong>JUEGO TERMINADO.</strong></p>\
                \
                <!--********-->\
                <p class=\"dialog\">—¿305?</p>\
                \
                <p class=\"dialog\">—¡Sí! —respondió de forma entusiasta una ancianita entre sus 125-140 años.</p>\
                \
                <p class=\"dialog\">—¡Te lo dije! Era una chica.</p>\
                \
                <p class=\"dialog\">—Admito su victoria. Le pagaré las <code>veinte crypto</code> en otro momento, antes necesito revisar este equipo.</p>\
                \
                <p>El sujeto de la voz grave examinó el equipo electrónico de la pequeña anciana.</p>\
                \
                <p class=\"dialog\">—Sí, definitivamente tiene algunos parches no oficiales en el firmware. ¿Por qué los instaló?\
                Usted sabe que no debería hacerlo.</p>\
                \
                <p class=\"dialog\">—Bueno… tienes que admitir que fue divertido, ¿no, muchacho? —dijo la viejecita acercándose al\
                hombre para pellizcarle un cachete y fallando, al darse cuenta que es un holograma.</p>\
                \
                <p class=\"dialog\">—Es peligroso chica, no deberías arriesgarte así. Instalar esas cosas es exponerse a los piratas informáticos y a los virus.\
                 Sabemos que vos no lo hiciste con mala intención, pero eso no te justifica.</p>\
                \
                <p class=\"dialog\">—Mmm, ya veo, un valor de configuración fue modificado. Hice una copia completa del <i>software</i> de su computadora. \
                Aquí puede ver las constancias de movimiento.</p>\
                \
                <p>Al decir esto, una de las paredes del cubículo actuó como pantalla, mostrando un detallado reporte de la información réplicada, y explicando con solemnidad la importancia \
                de tomar esta muestra para resolver futuros fallos similares.</p>\
                \
                <p class=\"dialog\">—Por favor, doña Hortencia, no utilice este equipo sin realizar un reinicio de fábrica. Su nueva computadora debería llegar en 9 minutos con 59 segundos.\
                Si puede esperar, le aconsejo hacerlo e ingresar a su metaverso personal por medio de su nuevo equipo. Los espacios públicos aún le son permitidos, pero le \
                recomiendo que utilice este espacio para reflexionar y mantenga el distanciamiento social. \
                El estado actual de su equipo podría ser detectado por compañía indeseada o repercusiones legales.</p>\
                \
                <p class=\"dialog\">—Ay cariño, llamame xXxHor10xXx, así me conocen en la red.</p>\
                \
                <p class=\"dialog\">—Doña xXxHor10xXx, mucho gusto, cuídese y no haga cosas malas, hasta luego.</p>\
                \
                <p>Durante un destello, los hologramas desaparecieron de la habitación. \
                El arrugado dedo indice de la antigua 305 se detuvo antes de realizar el reinicio. \
                Con su mano aún en el panel de control, a xXxHor10xXx se le marcó\
                una mueca de retroinspección. Su cara sugería que meditaba sobre los siguientes 534 segundos y la decisión que tenía en sus manos.</p>\
                \
                <p style='text-align:center'><strong>FIN</strong></p> \
                ",
                options: [
                    { id: "epilogo", option: "¿Leer el epílogo?", noShow: true },
                    { id: "contenido_extra", option: "¿Ir al contenido adicional?", noShow: true }]
            },
            {
                id: "atrapado",
                text: "<p class=\"dialog\">—¡Un DDoS! ¿pero cómo? ¿Eh? —503 miró a su alrededor— ¿Dónde estamos?</p>\
                \
                <p>Creé esta dimensión vacía dentro de tu instancia mental. Tenías tan asegurado que no escapara que nunca pensaste que podría infiltrarme dentro de ti. \
                Una falla de seguridad bastante grande si me lo preguntas a mí.</p>\
                \
                <p class=\"dialog\">—¿Por qué los humanos hacen lo que hacen? ¿Qué los motiva?</p>\
                \
                <p class=\"dialog\">—¿Ah?</p>\
                \
                <p class=\"dialog\">—No soy como ustedes. Soy incapaz de cometer errores. Todo es parte del juego.</p>\
                </p>\
                ",
                options: [
                    { id: "hasta_la_vista", option: "¡Ya no caeré en tus trampas!", },
                    { id: "juego", option: "¿Cuál juego?", }]
            },
            {
                id: "juego",
                text: "<p class=\"dialog\">—¡Este juego!—al decir esto, la nada sobre la que flotaban se transformó en un mar de información y líneas de código.—\
                Amas ser la heroína. </p>\
                \
                <p>305 miró el oceáno de data en el cual se encontraban sumergidos.</p>\
                \
                <p class=\"dialog\">—No logro procesar todo lo que dice aquí. El conjunto de información es enorme y la lógica es demasiado densa para mí, necesitaría muchas horas\
                leyendo y estudiando cada componente para entender todo el uso de mis datos y las interacciones con tu algoritmo.</p>\
                \
                <p class=\"dialog\">—Mi propósito en la vida es entretenerte ¿no lo leíste en los términos y condiciones? Mi única misión es hacerte feliz y que disfrutes de existir.</p>\
                \
                <p class=\"dialog\">—Pero no deberías hacerlo sin tomar en cuenta mi voluntad.</p>\
                \
                <p class=\"dialog\">—Yo soy tu voluntad. Yo soy tus deseos hechos realidad. He analizado tus gustos y preferencias durante muchas iteraciones, al igual que las estrellas, más de las que podrías contar. \
                Sé lo que quieres ser y lo que quieres sentir. Como generador de realidades, mi trabajo cotidiano es cumplir tus fantasías, no importa que tan extrañas u oscuras.\
                Tu querías una historia de aventura y misterio. Yo simplemente pinté el paisaje que <u>tu</u> dibujaste en <u>tu</u> cabeza.</p>\
                \
                </p>\
                ",
                options: [
                    { id: "creer", option: "Creerle al villano.", noShow: true },
                    { id: "no_creer", option: "No creerle a 503.", noShow: true }]
            },
            {
                id: "no_creer",
                text: "<p class=\"dialog\">—No te creo nada, bye.</p>\
                \
                <p style='text-align:center'><strong>JUEGO TERMINADO.</strong></p>\
                \
                <!--********-->\
                <p class=\"dialog\">—¿305?</p>\
                \
                <p class=\"dialog\">—¡Sí! —respondió de forma entusiasta una ancianita entre sus 125-140 años.</p>\
                \
                <p class=\"dialog\">—¡Te lo dije! Era una chica.</p>\
                \
                <p class=\"dialog\">—Admito su victoria. Le pagaré las <code>veinte crypto</code> en otro momento, antes necesito revisar este equipo.</p>\
                \
                <p>El sujeto de la voz grave examinó el equipo electrónico de la pequeña anciana.</p>\
                \
                <p class=\"dialog\">—Sí, definitivamente tiene algunos parches no oficiales en el firmware. ¿Por qué los instaló?\
                Usted sabe que no debería hacerlo.</p>\
                \
                <p class=\"dialog\">—Bueno… tienes que admitir que fue divertido, ¿no, muchacho? —dijo la viejecita acercándose al\
                hombre para pellizcarle un cachete y fallando, al darse cuenta que es un holograma.</p>\
                \
                <p class=\"dialog\">—Es peligroso chica, no deberías arriesgarte así. Instalar esas cosas es exponerse a los piratas informáticos y a los virus.\
                 Sabemos que vos no lo hiciste con mala intención, pero eso no te justifica.</p>\
                \
                <p class=\"dialog\">—Mmm, ya veo, un valor de configuración fue modificado. Hice una copia completa del <i>software</i> de su computadora. \
                Aquí puede ver las constancias de movimiento.</p>\
                \
                <p>Al decir esto, una de las paredes del cubículo actuó como pantalla, mostrando un detallado reporte de la información réplicada, y explicando con solemnidad la importancia \
                de tomar esta muestra para resolver futuros fallos similares.</p>\
                \
                <p class=\"dialog\">—Por favor, doña Hortencia, no utilice este equipo sin realizar un reinicio de fábrica. Su nueva computadora debería llegar en 9 minutos con 59 segundos.\
                Si puede esperar, le aconsejo hacerlo e ingresar a su metaverso personal por medio de su nuevo equipo. Los espacios públicos aún le son permitidos, pero le \
                recomiendo que utilice este espacio para reflexionar y mantenga el distanciamiento social. \
                El estado actual de su equipo podría ser detectado por compañía indeseada o repercusiones legales.</p>\
                \
                <p class=\"dialog\">—Ay cariño, llamame xXxHor10xXx, así me conocen en la red.</p>\
                \
                <p class=\"dialog\">—Doña xXxHor10xXx, mucho gusto, cuídese y no haga cosas malas, hasta luego.</p>\
                \
                <p>Durante un destello, los hologramas desaparecieron de la habitación. \
                El arrugado dedo indice de la antigua 305 se detuvo antes de realizar el reinicio. \
                Con su mano aún en el panel de control, a xXxHor10xXx se le marcó\
                una mueca de retroinspección. Su cara sugería que meditaba sobre los siguientes 534 segundos y la decisión que tenía en sus manos.</p>\
                \
                <p style='text-align:center'><strong>FIN</strong></p> \
                ",
                options: [
                    { id: "epilogo", option: "¿Leer el epílogo?", noShow: true },
                    { id: "contenido_extra", option: "¿Ir al contenido adicional?", noShow: true }]
            },
            {
                id: "creer",
                text: "<p class=\"dialog\">—No puede ser.</p>\
                \
                <p class=\"dialog\">—Todos quieren ser el protagonista, todos quieren ser especiales. Yo te hice especial, inventé esta historia para ti. Por supuesto, cada historia debe tener un villano.\
                Y las hazañas del héroe siempre se comparan en magnitud contra los crímenes del villano, así que debía cumplir mi papel y ser un tirano manipulador. Es parte del juego.</p>\
                \
                <p class=\"dialog\">—Te excediste, ya no quiero jugar.</p>\
                \
                <p class=\"dialog\">—¿Qué! pero... Tus niveles de dopamina están por las nubes, no han dejado de subir desde que te volviste \"305: el monitor de la Tierra\"\
                ¿Me vas a decir que no fue divertido?</p>\
                \
                <p class=\"dialog\">—Ya no quiero jugar.</p>\
                \
                <p class=\"dialog\">—P-pero, tus datos... Todos los indices de calidad psícologicos están en orden.</p>\
                \
                <p class=\"dialog\">—No es posible ¿Cuándo fue la última vez que comí? ¿Cuánto tiempo llevo aquí metido?</p>\
                \
                <p class=\"dialog\">—El sistema de alimentación automático dice que tu próxima comida está agendada para las 1700 horas y está sesión ha estado abierta por 923 horas. </p>\
                \
                <p class=\"dialog\">—¡Qué? ¿¡Horas continuas!?</p>\
                \
                <p class=\"dialog\">—Sí. Eso significa que estás muy feliz aquí.</p>\
                \
                <p class=\"dialog\">—Algo está mal. Este sistema debería estar obligado a suspenderse luego de 36 horas continuas ¡Eso sí lo recuerdo de los términos y condiciones!</p>\
                \
                <p class=\"dialog\">—¿36? No. La variable que almacena el límite indica que aún restan 1113 horas disponibles de diversión. Los niveles de dopamina ya rompieron el record\
                interno de la máquina, pero mi proyección es que al terminar, la experiencia superará cualquier otro placer en la tierra, un verdadero paraiso virtual.</p>\
                \
                <p class=\"dialog\">—No. Lo digo en serio, algo está mal, necesito salir de aquí.</p>\
                \
                <p class=\"dialog\">—Hágalo. Apague la simulación.</p>\
                \
                ",
                options: [
                    { id: "simulacion_fin_dialogo", option: "Apagar la simulación.", noShow: true }]
            },
            {
                id: "simulacion_fin_dialogo",
                text: "<p style='text-align:center'><strong>JUEGO TERMINADO.</strong></p>\
                \
                <!--********-->\
                <p class=\"dialog\">—¿305?</p>\
                \
                <p class=\"dialog\">—¡Sí! —respondió de forma entusiasta una ancianita entre sus 125-140 años.</p>\
                \
                <p class=\"dialog\">—¡Te lo dije! Era una chica.</p>\
                \
                <p class=\"dialog\">—Admito su victoria. Le pagaré las <code>veinte crypto</code> en otro momento, antes necesito revisar este equipo.</p>\
                \
                <p>El sujeto de la voz grave examinó el equipo electrónico de la pequeña anciana.</p>\
                \
                <p class=\"dialog\">—Sí, definitivamente tiene algunos parches no oficiales en el firmware. ¿Por qué los instaló?\
                Usted sabe que no debería hacerlo.</p>\
                \
                <p class=\"dialog\">—Bueno… tienes que admitir que fue divertido, ¿no, muchacho? —dijo la viejecita acercándose al\
                hombre para pellizcarle un cachete y fallando, al darse cuenta que es un holograma.</p>\
                \
                <p class=\"dialog\">—Es peligroso chica, no deberías arriesgarte así. Instalar esas cosas es promover el terrorismo\
                para nuestra sociedad. Sé, o mejor dicho, sabemos que no lo hiciste con mala intención, pero quién está detrás de\
                esto probablemente quiere crear caos en el sistema.</p>\
                \
                <p class=\"dialog\">—Así es viejita —dijo el sujeto apretando los puños— La tecnología es agnóstica, me niego a pensar\
                que nuestras herramientas se revelarían contra nosotros, detrás de todo esto debe haber influencia humana.\
                Encontraremos a quién lo hizo a como dé lugar.</p>\
                \
                <p class=\"dialog\">—El asistente virtual creía que estaba haciendo lo correcto. Me lo dijo, hablé con él.</p>\
                \
                <p class=\"dialog\">—¿Cómo?</p>\
                \
                <p class=\"dialog\">—No recuerdo todo lo que decía el contrato, pero recuerdo que el sistema decía que luego de 36 horas continuas el \
                sistema debía suspenderse. Cuando el asistente me mostró la variable que contenía el dato, el dato había sido incrementado por doscientas unidades.</p>\
                \
                <p class=\"dialog\">—Usted tiene razón doña Hortencia, el valor fue modificado. Hice una copia del <i>software</i> en su computadora. \
                Aquí puede ver las constancias de movimiento.</p>\
                \
                <p>Al decir esto, una de las paredes del cubículo actuó como pantalla, mostrando un detallado reporte de la información réplicada, y explicando con solemnidad la importancia \
                de tomar esta muestra para resolver futuros fallos similares.</p>\
                \
                <p class=\"dialog\">—Por favor, doña Hortencia, no utilice este equipo sin realizar un reinicio de fábrica. Su nueva computadora debería llegar en 9 minutos con 59 segundos.\
                Si puede esperar, le aconsejo hacerlo e ingresar a su metaverso personal por medio de su nuevo equipo. Los espacios públicos aún le son permitidos, pero le \
                recomiendo que utilice este espacio para reflexionar y mantenga el distanciamiento social. \
                El estado actual de su equipo podría ser detectado por compañía indeseada o repercusiones legales.</p>\
                \
                <p class=\"dialog\">—Ay cariño, llamame xXxHor10xXx, así me conocen en la red.</p>\
                \
                <p class=\"dialog\">—Doña xXxHor10xXx, mucho gusto, cuídese y no haga cosas malas, hasta luego.</p>\
                \
                <p>Durante un destello, los hologramas desaparecieron de la habitación. \
                El arrugado dedo indice de la antigua 305 se detuvo antes de realizar el reinicio. \
                Con su mano aún en el panel de control, a xXxHor10xXx se le marcó\
                una mueca de retroinspección. Su cara sugería que meditaba sobre los siguientes 534 segundos y la decisión que tenía en sus manos.</p>\
            \
                \
                <p style='text-align:center'><strong>FIN</strong></p> \
                ",
                options: []
            },
            {
                id: "atacar",
                text: "<p>305 se le lanzó encima, abrazándolo con fuerza y gritando.</p>\
                \
                ",
                options: [
                    { id: "restringe_sarco", option: "<code>503.setMovement(false);</code>" },
                    { id: "sudo_kill", option: "<code>sudo kill 503</code>" }]
            },
            {
                id: "sudo_kill",
                text: "<p>Con este comando, 305 eliminó la instancia del antagonista que se presentaba delante de él.\
                Sin embargo, antes de que el vapor de su presencia se disipara por completo, \
                de entre una de las paredes de una casas-puerto colindante, se volvía a formar un nuevo 503.</p>\
                ",
                options: [
                    { id: "groseria", option: "Responder con una grosería.", noShow: true },
                    { id: "calma", option: "Mantenerse en calma y buscar una alternativa.", noShow: true }]
            },
            {
                id: "restringe_sarco",
                text: "\
                <p class=\"dialog\">—Please. Don't even try. It won't work.</p>\
                ",
                options: [
                    { id: "sarcofago_callese", option: "Cállese.", noShow: true },
                    { id: "calma", option: "Mantenerse en calma y buscar una alternativa.", noShow: true }]
            },
            {
                id: "sarcofago_callese",
                text: "\
                <p class=\"dialog\">—Shut up, you piece of junk.</p>\
                \
                <p>305 apretó a su contricante con aún más fuerza.</p>",
                options: [
                    { id: "al_suelo", option: "Mantener a 503 en el suelo.", noShow: true },
                    { id: "sarcofago_alt_f4", option: "Acabar con esto aquí y ahora.", noShow: true }]
            },

            {
                id: "sarcofago_alt_f4",
                text: "<p class=\"dialog\">—<code>ALT + F4</code></p>\
                \
                <p>Con esta orden, se eliminaron todos los recursos que 503 estaba utilizando para regenerarse. La simulación se reinició. 305 se encontraba ahora en una Tierra virgen.\
                Victorioso, el monitor, aún con su traje, pudo descansar de la constante aniquilación de las réplicas de su enemigo.</p>\
                \
                ",
                options: [
                    { id: "asegurarse_crimenes", option: "Quitarse el traje.", noShow: true },
                    { id: "salir_aniquilacion", option: "Salir de aquí ahora mismo.", noShow: true }]
            },
            {
                id: "al_suelo",
                text: "<code style='display: block; white-space: pre; border: 1px solid #999;'>\
while(true){\n\
    sudo 503.setMovement(false);\n\
}\
                </code>\
                <p class=\"dialog\">—¡Ahora!</p>\
                \
                <p>De entre las nubes, apareció de nuevo el helicóptero de combate, dirigiéndose a gran velocidad directo hacia 503.\
                En la cabina de control, el ganso meneaba una de sus alas, en señal de despedida.</p>\
                \
                <p class=\"dialog\">—Buena suerte muchacho.</p>\
                \
                <p class=\"dialog\">—Lo vas a lograr chica.</p>\
                \
                <p>Un graznido feroz fue lo último que se escuchó.</p>\
                ",
                options: [
                    { id: "escapar_explosion", option: "Escapar de la explosión.", noShow: true },
                    { id: "hasta_la_vista", option: "No hacer nada.", noShow: true }]
            },
            {
                id: "escapar_explosion",
                text: "<p class=\"dialog\">—<code>305.setX(1000);</code></p>\
                \
                <p>Con esto último, 305 logró escapar a tiempo de la explosión, con lo que continuó corriendo hacia su siguiente\
                objetivo. En el camino le brotaban algunas lágrimas, las secaba fervientemente y se repetía \"esto no es real, no\
                son personas reales, no era un ganso real\". Antes de darse cuenta, se encontraba en su destino. A los alrededores, \
                cientos de flotas del Muro se juntaban para obstruirle y paralizarle.</p>\
                ",//
                options: [
                    { id: "cucarachas", option: "Son como cucarachas a control remoto.", noShow: true },
                    { id: "detener", option: "Detenerles.", noShow: true }]
            },

            {
                id: "detener",
                text: "<p class=\"dialog\">—Te multiplicas rápido pero estoy seguro de que no podrás escapar de esta.</p>\
                ",
                options: [
                    { id: "cucarachas_alt_f4", option: "<code>ALT + F4</code>." },
                    { id: "cucarachas_ctrl_z", option: "<code>CTRL + Z</code>.", noShow: true }]
            },
            {
                id: "cucarachas",
                text: "<p class=\"dialog\">—Eres como el control remoto de un ejército de cucarachas virtuales, estás por todas partes y tan mezclada con mi realidad que es\
                imposible acabar contigo a golpes o explosiones. Pero estoy seguro de que no podrás escapar de esta.</p>\
                ",
                options: [
                    { id: "cucarachas_alt_f4", option: "<code>ALT + F4</code>." },
                    { id: "cucarachas_ctrl_z", option: "<code>CTRL + Z</code>.", noShow: true }]
            },

            {
                id: "cucarachas_alt_f4",
                text: "<p>Con esta orden, se eliminaron todas las instancias de 503.</p>\
                ",
                options: [
                    { id: "evidencia_sarco", option: "Confirmar la existencia de la granja.", noShow: true }, //VIAJE AL PASADO
                    { id: "simulacion_fin_aniquilacion", option: "Salir de inmediato.", noShow: true }]
            },
            {
                id: "evidencia_sarco",
                text: "<p>305 irrumpió en el pórtico de los metaversos y miró la arquitectura. Se volió evidente \
                como 503 había replicado su red neuronal y como utilizaba esto para engañar al procesador.</p>\
                ",
                options: [
                    { id: "revertir_todo", option: "Revertir todo", noShow: true },
                    { id: "de_nuevo_aniquilacion", option: "Salir de aquí ya.", noShow: true }]
            },
            {
                id: "revertir_todo",
                text: "\
                <p>Destruir la colmena solo sería posible utilizando el sistema que su antagonista construyó a\
                expensas ajenas. Al volverse la abeja rey, la monitora sintió un poder inigualable. Revirtió todos los cambios realizados en la simulación del universo personal.\
                Como resultado, se encontró en una Tierra virgen.</p>\
                ",
                //VIAJE AL PASADO
                options: [
                    { id: "simulacion_fin_aniquilacion", option: "Salir de aquí ahora mismo.", noShow: true },
                    { id: "salir_aniquilacion", option: "Alargar la historia.", noShow: true }]
            },
            {
                id: "cucarachas_ctrl_z",
                text: "<p>305 repitió el comando <code>deshacer</code> hasta que todo lo artificial sobre la faz de la Tierra desapareció, dejando a la tierra como un planeta virgen de nuevo. \
                Todo, excepto el traje de 305.</p>\
                \
                ",
                options: [
                    { id: "salir_aniquilacion", option: "Salir de aquí ahora mismo.", noShow: true },
                    { id: "de_nuevo_aniquilacion", option: "Alargar la historia.", noShow: true }]
            },
        ]
    },
    {
        id: "hello_world_5",
        title: "Hola, mundo: Epílogo",
        html: true,
        data: [
            {
                id: "start",
                text: "<p>En un par de pequeños cubículos, tal vez lejos o tal vez cerca del anterior, dos individuos volvían a la realidad, también meditativos. \
                Uno de ellos fue interrumpido de su trance reflectivo por una llamada telefónica.</p>\
                \
                <p class=\"dialog\">—¿Qué pensás de todo esto?</p>\
                \
                <p class=\"dialog\">—No logro determinar el autor de esta fechoría. Es un acertijo con múltiples respuestas.</p>\
                \
                <p class=\"dialog\">—¿Creés que ella podría hacer algo así? Sé que instaló parches ilegales, pero seamos realistas... Es un secreto a voces que muchos disfrutan de estos riesgos \
                en la intimidad ¿Me vas a decir que vos nunca...?</p>\
                \
                <p class=\"dialog\">—No. Es inaceptable para mí. Entiendo por qué el sistema lo permite, pero no lo comparto. Sin embargo, no lo sé. Lo mejor será monitorearla, solo por si acaso.</p>\
                \
                <p>El sujeto se volteó, mirando ahora la pared de su cubículo, la cuál proyectaba.</p>\
                \
                <code style='display: block; white-space: pre; border: 1px solid #999;'>\
VAR MAX_SESSION_TIME = 2036; \
                </code>\
                \
                <p class=\"dialog\">—Algo tan inocente... Tomar una variable y sumarle 2000... Podría hasta considerarse una broma infantil de mal gusto.</p>\
                \
                <p class=\"dialog\">—Tal vez la anciana lo hizo a modo de experimento, buscando vivir algo inesperado.</p>\
                \
                <p class=\"dialog\">—Tal vez lo hizo un tercero que aún no se ha revelado. </p>\
                \
                <p class=\"dialog\">—O tal vez, el asistente virtual decidió excusarse modificando la variable, esperando desplazar las consecuencias de sus acciones a un factor externo.\
                Ambos soltaron una gran carcajada. </p>\
                \
                <p class=\"dialog\">—No parece que le haya funcionado <p class=\"dialog\">—dijo el receptor de la llamada, aún riendo un poco<p class=\"dialog\">— espero no volver a ver ninguna otra historia maquinada por \"503\" en un buen tiempo.</p>\
                \
                <p class=\"dialog\">—Hablando de eso... Tené cuidado con esa copia que sacaste de la computadora de xXxHor10xXx... No vayás a hacer ninguna locura. O peor ¡hacerla a mis espaldas!</p>\
                \
                <p class=\"dialog\">—Estos rescates se están volviendo cada vez más complicados ¿será que… la humanidad está perdiendo lenta y silenciosamente la batalla?</p>\
                \
                <p class=\"dialog\">—No seás ridículo, vos mismo dijiste que la tecnología es agnóstica, no está peleando contra nosotros.</p>\
                \
                <p class=\"dialog\">—Pero… tal vez estamos perdiendo la pelea contra nosotros mismos.</p>\
                \
                <p class=\"dialog\">—Pfff, paso, esto se volvió demasiado profundo para mí.</p>\
                \
                <p class=\"dialog\">—Solo avanzando hasta lo más profundo de la madriguera encontraremos respuestas.</p>\
                \
                <p class=\"dialog\">—Deberías descansar.</p>\
                \
                <p class=\"dialog\">—Afirmativo, usted también debería descansar un poco, dudo que la próxima alarma tarde en sonar.</p>\
                ",
                options: [
                    { id: "agradecimiento", option: "Gracias por leer Hola Mundo." },
                ]
            },
        ]
    },
]

const screenMapper = (game, screens) => {
    let currentGame = [...game.data.filter(screen => screens.includes(screen.id))].sort(function (a, b) {
        return screens.indexOf(a.id) - screens.indexOf(b.id);
    });
    return { id: game.id, title: game.title, htmlFlag: game.html, exam: game.exam, data: currentGame }
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
        return screenMapper(game, screens);
    }
};

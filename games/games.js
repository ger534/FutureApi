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
                text: "<p>Hasta este momento, ni Dios ni los alienígenas se habían vuelto visibles en la inmensidad del universo, pero esto\
                parecía haber cambiado en un santiamén. Fue imperativo desplegar la aeronave más rápida. No tenía mucho armamento\
                ni espacio. Espacio único para un tripulante, el piloto 305. La curiosidad lo lanzó tan rápido al volante que no\
                se cuestionó lo irracional de su misión. Si luego de tantos años de avances tecnológicos, un objeto volador no\
                identificado había sido capaz de penetrar, no solo el sistema solar, sino la atmósfera de la Tierra y además, sin\
                ser detectado hasta el momento de tocar la integridad de los metaversos, definitivamente un piloto de\
                mantenimiento no lo iba a neutralizar con un par de cañones de plasma.</p>\
                <p>El GPS dicta: <i>Turn right.</i> &#129034;</p>",
                options: [
                    { id: "izquierda", option: "🚀 Girar a la izquierda &#129032;.", noShow: true },
                    { id: "derecha", option: "🚀 Girar a la derecha &#129034;.", noShow: true },
                ]
            },
            {
                id: "izquierda",
                text: "<p>305, sin prestar mucha atención a las instrucciones y tal vez aún aturdido por la noticia, decide no tomar en consideración la ruta sugerida por\
                el Sistema de Posicionamiento Global y en cambio, se dirige en dirección contraria al sitio del incidente. Siguiendo este rumbo, 305 tiene la oportunidad de \
                visualizar desde las alturas, las grandes aglomeraciones de casas-puerto, que se propagan  por toda la árida superficie terrestre.\
                </p> \
                <p>El GPS dicta: <i>Please, turn to your right.</i> &#129034;</p>",
                options: [
                    { id: "derecha", option: "🚀 Girar a la derecha &#129034;.", noShow: true },
                    { id: "mantener", option: "🚀 Mantener rumbo &#129033;.", noShow: true },
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
                <p>El GPS dicta: <span style=\"background-color:red\"><strong>TURN TO YOUR RIGHT.</strong> &#129034;</span></p>",
                options: [
                    { id: "derecha", option: "🚀 Girar a la derecha &#129034;.", noShow: true },
                    { id: "explosion_nave_tierra", option: "No." },
                ]
            },
            {
                id: "explosion_nave_tierra",
                text: "<p>De imprevisto, la máquina que tripulaba 305 se quedó inmóvil y luego comenzó a descender, cada vez más rápido, en dirección a la Tierra.\
                El monitor, que hasta el momento había tomado decisiones poco sabías, activó el mecánismo de eyección y salió disparado de la nave. Lo que segundos antes era\
                su medio de transporte, quedó desintegrado por el sistema de defensa de las casas-puerto. Gracias a su traje de seguridad, 305 no sufrió ningún daño.\
                </p>",
                options: [
                    { id: "a", option: "a." },
                    { id: "b", option: "b." },
                ]
            },
            {
                id: "derecha",
                text: "<p>Siguiendo las indicaciones del Sistema de Posicionamiento Global, 305 toma la ruta más pronta al sitio del incidente. La región por la cual sobrevuela\
                la aeronave es una de las pocas zonas en el planeta que no está saturada por casas-puerto. El monitor inclina su cabeza por el parabrisas del vehículo y logra ver \
                la circuitería que conecta la red mundial de información. Ahora el cableado se encuentra al descubierto, pero mucho tiempo atrás, solía estar en el fondo del océano, \
                cuando aún había agua en él.</p> \
                <p>El GPS dicta: <i>Lower your altitude.</i> &#x1F80B;</p>",
                options: [
                    { id: "descender", option: "Descender al fondo del vacío océano &#x1F80B;.", noShow: true },
                    { id: "ascender", option: "Ascender hacia la atmósfera 	&#129033;.", noShow: true },
                ]
            },
            {
                id: "descender",
                text: "<p>Descendiendo 8.000 mil metros, de entre la maraña de enormes cables industriales, se hizo visible el repetidor cuyo sistema de monitoreo había disparado la \
                alarma extraterrestre.</p> \
                <p>El GPS dicta: <i>You have reach your destination.</i> 📌📍🎯⚓⛩️🔖❕⚠️◀️🔼🔽▶️⬅️⬆️⬇️➡️✔️✖️</p>",
                options: [
                    { id: "llegada", option: "Aterrizar 📌📍🎯⚓⛩️🔖❕⚠️◀️🔼🔽▶️⬅️⬆️⬇️➡️✔️✖️."/*, noShow: true*/ },
                    { id: "b", option: "b." },
                ]
            },
            {
                id: "ascender",
                text: "<p>En un acto contrario al indicado, 305 decidió aumentar la latitud de su posición, acercándose la atmósfera. \
                Al superar las grises y artificiales nubes que cubren el cielo de día y de noche; el monitor fue encandilado por el exceso de luz que emitían los edificios espaciales.\
                El ecosistema atmosférico de la Tierra está plagado de hogares burocráticos, donde las industrias de cada tecnología vital para la humanidad habitan y organizan sus actividades.\
                 </p> \
                <p>El GPS dicta: <i>Please, lower your altitude.</i> &#x1F80B;</p>",
                options: [
                    { id: "ascender_2", option: "Seguir ascendiendo &#129033;." },
                    { id: "b", option: "b." },
                ]
            },
            {
                id: "ascender_2",
                text: "<p>Describir el uso de la luna.</p> \
                <p>El GPS dicta: <span style=\"background-color:red\"><strong>LOWER YOUR ALTITUDE.</strong> &#x1F80B;</span></p>",
                options: [
                    { id: "explosion_nave_luna", option: "No." },
                    { id: "b", option: "b." },
                ]
            },
            {
                id: "explosion_nave_luna",
                text: "<p>De imprevisto, la máquina que tripulaba 305 se quedó inmóvil y luego comenzó a descender, cada vez más rápido, en dirección a la Tierra.\
                El monitor, que hasta el momento había tomado decisiones poco sabías, activó el mecánismo de eyección y salió disparado de la nave. Lo que segundos antes era\
                su medio de transporte, quedó desintegrado por el sistema de defensa de las casas-puerto. Gracias a su traje de seguridad, 305 no sufrió ningún daño.\
                </p>",
                options: [
                    { id: "a", option: "a." },
                    { id: "b", option: "b." },
                ]
            },
            {
                id: "llegada",
                text: "<p>Descendiendo 8.000 mil metros, de entre la maraña de enormes cables industriales, se hizo visible el repetidor cuyo sistema de monitoreo había disparado la \
                alarma extraterrestre.</p> \
                <p>El GPS dicta: <i>Lower your altitude.</i> &#129034;</p>",
                options: [
                    { id: "a", option: "a." },
                    { id: "b", option: "b." },
                ]
            }
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
                <span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Actividad física Reagendada</code></span>.\
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
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(&#128473;) </span>Incorrecto.</code></span>\
                <p>—Un triángulo...</p>",
                options: [
                    { id: "suma_no_discardable", option: "Un triángulo puede ser el techo de una casa." },
                    { id: "suma_yes_discardable", option: "Un triángulo no puede contener más de un ángulo obtuso." }
                ]
            },
            {
                id: "triangulo_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—Un triángulo...</p>",
                options: [
                    { id: "suma_no_discardable", option: "Un triángulo puede ser el techo de una casa." },
                    { id: "suma_yes_discardable", option: "Un triángulo no puede contener más de un ángulo obtuso." }
                ]
            },
            {
                id: "suma_no_discardable",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(&#128473;) </span>Incorrecto.</code></span>\
                <p>—2+2...</p>",
                options: [
                    { id: "triangulo_no_suma_no", option: "3.", noShow: true },
                    { id: "lenguaje_yes", option: "4." }
                ]
            },
            {
                id: "suma_yes_discardable",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—2+2...</p>",
                options: [
                    { id: "triangulo_yes_suma_no", option: "3.", noShow: true },
                    { id: "lenguaje_yes", option: "4." }
                ]
            },
            {
                id: "triangulo_no_suma_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(&#128473;) </span>Incorrecto.</code></span>\
                <p>—<span class=\"info-action-box\"><code class=\"info-action\"><span style=\"font-size: 16px;\">(&#11148;) </span>No siempre tienes derecho a equivocarte.</code></span> 2+2...</p>",
                options: [
                    { id: "lenguaje_yes", option: "4." }
                ]
            },
            {
                id: "triangulo_yes_suma_no",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—<span class=\"info-action-box\"><code class=\"info-action\"><span style=\"font-size: 16px;\">(&#11148;) </span>No siempre tienes derecho a equivocarte.</code></span> 2+2...</p>",
                options: [
                    { id: "lenguaje_yes", option: "4." }
                ]
            },
            {
                id: "lenguaje_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—El lenguaje natural...</p>",
                options: [
                    { id: "humano_no", option: "El lenguaje natural es de la naturaleza." },
                    { id: "humano_yes", option: "El lenguaje natural es solo uno. Todas las voces se unifican en él." }
                ]
            },
            {
                id: "humano_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(&#128473;) </span>Incorrecto.</code></span>\
                <p>—El ser humano...</p>",
                options: [
                    { id: "humanidad_no", option: "Todos somos humanos." },
                    { id: "humanidad_yes", option: "El ser humano controla su propia evolución. Puede ser tan fuerte, e inteligente como lo desee." }
                ]
            },
            {
                id: "humano_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—El ser humano...</p>",
                options: [
                    { id: "humanidad_no", option: "Todos somos humanos." },
                    { id: "humanidad_yes", option: "El ser humano controla su propia evolución. Puede ser tan fuerte, e inteligente como lo desee." }
                ]
            },
            {
                id: "humanidad_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(&#128473;) </span>Incorrecto.</code></span>\
                <p>—La humanidad...</p>",
                options: [
                    { id: "sustento_yes", option: "La humanidad se expande, conquistando otros planetas y aumentando las posibilidades de supervivencia." },
                    { id: "sustento_no", option: "La humanidad está hecha de humanos." }]
            },
            {
                id: "humanidad_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—La humanidad...</p>",
                options: [
                    { id: "sustento_yes", option: "La humanidad se expande, conquistando otros planetas y aumentando las posibilidades de supervivencia." },
                    { id: "sustento_no", option: "La humanidad está hecha de humanos." }]
            },
            {
                id: "sustento_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(&#128473;) </span>Incorrecto.</code></span>\
                <p>—El sustento...</p>",
                options: [
                    {
                        id: "mandibula_yes", option: "El sustento llega a mí, no es necesario que vaya a buscarlo, solo debo seguir aportando a \
                    la sociedad con mi existencia para recibirlo." },
                    { id: "mandibula_no", option: "El sustento es comida.", }]
            },
            {
                id: "sustento_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—El sustento...</p>",
                options: [
                    {
                        id: "mandibula_yes", option: "El sustento llega a mí, no es necesario que vaya a buscarlo, solo debo seguir aportando a \
                    la sociedad con mi existencia para recibirlo." },
                    { id: "mandibula_no", option: "El sustento es comida.", }]
            },
            {
                id: "mandibula_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(&#128473;) </span>Incorrecto.</code></span>\
                <p>—La mandíbula...</p>",
                options: [
                    { id: "cubiculo_yes", option: "La mandíbula de un tiburón blanco puede albergar cerca de 3 mil dientes distribuidos en 5 hileras." },
                    { id: "cubiculo_no", option: "La mandíbula está en la boca." }]
            },
            {
                id: "mandibula_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—La mandíbula...</p>",
                options: [
                    { id: "cubiculo_yes", option: "La mandíbula de un tiburón blanco puede albergar cerca de 3 mil dientes distribuidos en 5 hileras." },
                    { id: "cubiculo_no", option: "La mandíbula está en la boca." }]
            },
            {
                id: "cubiculo_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(&#128473;) </span>Incorrecto.</code></span>\
                <p>—El cubículo...</p>",
                options: [
                    { id: "mundo_yes", option: "El cubículo me protege." },
                    { id: "mundo_no", option: "Un cubículo es un cuadra\'o." }
                ]
            },
            {
                id: "cubiculo_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—El cubículo...</p>",
                options: [
                    { id: "mundo_yes", option: "El cubículo me protege." },
                    { id: "mundo_no", option: "Un cubículo es un cuadra\'o." }
                ]
            },
            {
                id: "mundo_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(&#128473;) </span>Incorrecto.</code></span>\
                <p>—El mundo...</p>",
                options: [
                    { id: "paz_yes", option: "El mundo es mío, puedo crear en él lo que sea. Siempre y cuando lo haga en el espacio designado para mí." },
                    { id: "paz_yes1", option: "El mundo es mi hogar." }
                ]
            },
            {
                id: "mundo_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—El mundo...</p>",
                options: [
                    { id: "paz_yes", option: "El mundo es mío, puedo crear en él lo que sea. Siempre y cuando lo haga en el espacio designado para mí." },
                    { id: "paz_yes1", option: "El mundo es mi hogar." }
                ]
            },
            {
                id: "paz_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—La paz...</p>",
                options: [
                    { id: "mitocondrias_yes", option: "La paz reina, el conflicto es innecesario." },
                    { id: "mitocondrias_no", option: "La paz nunca existirá." }
                ]
            },
            {
                id: "paz_yes1",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—La paz...</p>",
                options: [
                    { id: "mitocondrias_yes", option: "La paz reina, el conflicto es innecesario." },
                    { id: "mitocondrias_no", option: "La paz nunca existirá." }
                ]
            },
            {
                id: "mitocondrias_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(&#128473;) </span>Incorrecto.</code></span>\
                <p>—Las mitocondrias...</p>",
                options: [
                    { id: "muerte_yes", option: "Las mitocondrias de una célula eucariota se encuentran en el citoplasma." },
                    { id: "muerte_no", option: "Las mitocondrias... Algo de biología." }]
            },
            {
                id: "mitocondrias_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—Las mitocondrias...</p>",
                options: [
                    { id: "muerte_yes", option: "Las mitocondrias de una célula eucariota se encuentran en el citoplasma." },
                    { id: "muerte_no", option: "Las mitocondrias... Algo de biología." }]
            },
            {
                id: "muerte_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(&#128473;) </span>Incorrecto.</code></span>\
                <p>—La muerte...</p>",
                options: [
                    { id: "mentira", option: "La muerte es opcional." },
                    { id: "mentira1", option: "La muerte es opcional.", }]
            },
            {
                id: "muerte_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—La muerte...</p>",
                options: [
                    { id: "mentira", option: "La muerte es opcional." },
                    { id: "mentira1", option: "La muerte es opcional.", }]
            },
            {
                id: "mentira",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—La mentira...</p>",
                options: [
                    { id: "pobreza", option: "La mentira no puede existir cuando la lógica es el camino." },
                    { id: "pobreza1", option: "La mentira nos protege del dolor." }
                ]
            },
            {
                id: "mentira1",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—La mentira...</p>",
                options: [
                    { id: "pobreza", option: "La mentira no puede existir cuando la lógica es el camino." },
                    { id: "pobreza1", option: "La mentira nos protege del dolor." }
                ]
            },
            {
                id: "pobreza",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—La pobreza...</p>",
                options: [
                    { id: "gobierno_yes", option: "La pobreza no existe, en el sistema todos somos ricos." },
                    { id: "gobierno_no", option: "Es que es pobre es porque quiere." }]
            },
            {
                id: "pobreza1",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—La pobreza...</p>",
                options: [
                    { id: "gobierno_yes", option: "La pobreza no existe, en el sistema todos somos ricos." },
                    { id: "gobierno_no", option: "Es que es pobre es porque quiere." }]
            },
            {
                id: "gobierno_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(&#128473;) </span>Incorrecto.</code></span>\
                <p>—El gobierno...</p>",
                options: [
                    { id: "completado", option: "El gobierno no existe. Esto es Tecno<sub style=\"font-size:60%\">TOPIA</sub>.", }]
            },
            {
                id: "gobierno_yes",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—El gobierno...</p>",
                options: [
                    { id: "completado", option: "El gobierno no existe. Esto es Tecno<sub style=\"font-size:60%\">TOPIA</sub>.", }]
            },
            {
                id: "completado",
                text: "<p>—De acuerdo, <span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Análisis psicológico y social completado</code></span>.</p>",
                options: []
            },
            //HOLA MUNDO
            {
                id: "start_hola_mundo",
                text: "<h1 class=\"chapter-title\" style=\"text-align:center\">Hola mundo</h1>\
                \
                <p>Se pueden colonizar otros planetas y ceder el control a las máquinas, pero en la Tierra siempre habrá alguien que\
                  deba mantener el orden, de manera para que la arquitectura de los metaversos no colapse. Por avanzada\
                  que esté la tecnología, sigue necesitando de un factor humano. Los equipos de mantenimiento que se encargan de\
                  esta labor están distribuidos como clústers de pequeños grupos de personas alrededor del globo. Estos equipos forman\
                  una red que protege a otra red. A pesar de esto, no existe mucha comunicación entre estos\
                  nodos de soporte. A no ser que aparezca un problema tan grande que más de un equipo de reparación sea necesario,\
                  no hay ningún tipo de conversación entre los encargados de mantenimiento, continuando su rutina de no convivir.\
                  Así sería generalmente, a no ser que suceda lo insólito. Como que se levante una alerta roja tipo 5. Algo tan\
                  extraño, que el primero en ser notificado tuvo que revisar múltiples veces el significado de la alarma, a pesar de\
                  estar grabado en su memoria. Es irrefutable.</p>\
                  \
                <p class=\"dialog\">—Red alarm, level 5, alien attack.</p>\
                \
                <p>Hasta este momento, ni Dios ni los alienígenas se habían vuelto visibles en la inmensidad del universo, pero esto\
                  parecía haber cambiado en un santiamén. Fue imperativo saltar a la aeronave más rápida. No tenía mucho armamento\
                  ni espacio. Espacio único para un tripulante, el piloto 305. La curiosidad lo lanzó tan rápido al volante que no\
                  se cuestionó lo irracional de su misión. Si luego de tantos años de avances tecnológicos, un objeto volador no\
                  identificado había sido capaz de penetrar, no solo el sistema solar, sino la atmósfera de la Tierra y además, sin\
                  ser detectado hasta el momento de tocar la integridad del metaverso, definitivamente un piloto de\
                  mantenimiento no lo iba a neutralizar con un par de cañones de plasma.</p>\
                  \
                <p>Al llegar al lugar, a 305 no le pareció extraño que no hubiera ni un rastro de nada en la superficie terrestre.\
                  La mayoría del planeta estaba desolado, descartando las casas-puertos de conexión al metaverso o las\
                  localidades de los Rastreros. Pero la alarma disparada, roja y de nivel 5, indicaba que por fuerza algo debió\
                  invadir algún sector de infraestructura del internet con esteroides que son los meta-universos.</p>\
                  \
                <p>La vida de los ingenieros del metaverso no es muy distinta a la de las máquinas. Consiste en seguir\
                  protocolos, cumplir con las rutinas de mantenimiento, hacer exámenes al sistema… Durante décadas el gremio fue\
                  optimizando su trabajo y perdiendo su humanidad. Tampoco es tan necesaria para cumplir su labor. La mayoría de\
                  entornos que un encargado de mantenimiento habita son controlados, predecibles. El honor de la tarea no está en el\
                  riesgo o la complejidad, sino en mantener el orden, en ser los mediadores de la falsa naturaleza impuesta para\
                  cumplir las fantasías de los habitantes virtuales.</p>\
                  \
                <p>Tal vez por esto, antes de que 305 se diera cuenta, se encontraba caminando la superficie terrestre, a la\
                  intemperie. Por primera vez (y probablemente siendo pionero en esto), se enfrentaba a una situación que no estaba\
                  controlada. En el peor de los casos, La Armada Intergaláctica lanzaría un ataque desde la Luna, sin importar\
                  cuánta infraestructura tuviera que destruir. 305 sabía que la única forma de evitar que la situación escalara era\
                  suprimir la señal inicial antes de que pasaran <code>3.6 millones de milisegundos</code>, como lo estipula el\
                  protocolo.</p>\
                  \
                <p>Sus colegas le llamaban. Respondió la radio y les dijo</p>",
                options: [
                    { id: "a", option: "<div class=\"dialog\">—Nothing to report. I will turn off the alarm and then I will check the area. Over and out.</div>", }
                ]
            },
            {
                id: "a",
                text: "<p>Ok testing. Ok testing. Ok testing. Ok testing. Ok testing. Ok testing. Ok testing. \
                Ok testing. Ok testing. Ok testing. Ok testing. Ok testing. Ok testing. Ok testing. Ok testing. </p>",
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

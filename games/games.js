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
                    { id: "triangulo_no_suma_no", option: "3." },
                    { id: "lenguaje_yes", option: "4." }
                ]
            },
            {
                id: "suma_yes_discardable",
                text: "<span class=\"good-action-box\"><code class=\"good-action\"><span style=\"font-size: 16px;\">(&#10004;) </span>Correcto.</code></span>\
                <p>—2+2...</p>",
                options: [
                    { id: "triangulo_yes_suma_no", option: "3." },
                    { id: "lenguaje_yes", option: "4." }
                ]
            },
            {
                id: "triangulo_no_suma_no",
                text: "<p>—<span class=\"info-action-box\"><code class=\"info-action\"><span style=\"font-size: 16px;\">(&#11148;) </span>No siempre tienes derecho a equivocarte.</code></span> 2+2...</p>",
                options: [
                    { id: "lenguaje_yes", option: "4." }
                ]
            },
            {
                id: "triangulo_yes_suma_no",
                text: "<p>—<span class=\"info-action-box\"><code class=\"info-action\"><span style=\"font-size: 16px;\">(&#11148;) </span>No siempre tienes derecho a equivocarte.</code></span> 2+2...</p>",
                options: [
                    { id: "lenguaje_yes", option: "4." }
                ]
            },
            /*{
                id: "lenguaje_no",
                text: "<span class=\"bad-action-box\"><code class=\"bad-action\"><span style=\"font-size: 16px;\">(&#128473;) </span>Incorrecto.</code></span>\
                <p>—El lenguaje natural...</p>",
                options: [
                    { id: "humano_no", option: "El lenguaje natural es de la naturaleza." },
                    { id: "humano_yes", option: "El lenguaje natural es solo uno. Todas las voces se unifican en él." }
                ]
            },*/
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
                text: "<p>HOLA MUNDO</p>",
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

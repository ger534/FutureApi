const games = [
    {
        id: "employee",
        data: [
            {
                id: "start",
                html: "<p id=\"\">Empresa A concluye el contrato con tu Empleador B.</p>",
                no_contrato_b_contrato_a_1: "<p>&gt; Empleador B te despide.</p>",
                contrato_b_1: "<p>&gt; Empleador B te asigna otro contrato.</p>",
                html_options: "<p>&gt; Empleador B te despide.\
                                <a href=\"#no_contrato_b_contrato_a_1\">NEXT</a></p>\
                                <p>&gt; Empleador B te asigna otro contrato.\
                                <a href=\"#contrato_b_1\">NEXT</a></p>\</p><br/>"
            },
            {
                id: "no_contrato_b_contrato_a_1",
                html: "<p id=\"no_contrato_b_contrato_a_1\">¿Empresa A te contrata?.</p>",
                contrato_a: "<p>&gt; Sí.</p>",
                no_contrato: "<p>&gt; No.</p>",
                html_options: "<p>&gt; Sí.\
                                <a href=\"#contrato_a\">NEXT</a></p>\
                                <p>&gt; No.\
                                <a href=\"#no_contrato\">NEXT</a></p><br/>"
            },
            {
                id: "contrato_a",
                html: "<p id=\"contrato_a\">Empleado mejor empleado. Felicidades.<br/><a href=\"/game\">>REINICIAR</a></p><br/>",
                html_options: ""
            },
            {
                id: "contrato_b",
                html: "<p id=\"contrato_b\">Empleado. Nada cambió.<br/><a href=\"/game\">>REINICIAR</a></p><br/>",
                html_options: ""
            },
            {
                id: "no_contrato",
                html: "<p id=\"no_contrato\">Empleado desempleado. Mala suerte.<br/><a href=\"/game\">>REINICIAR</a></p><br/>",
                html_options: ""
            },
            {
                id: "contrato_b_1",
                html: "<p id=\"contrato_b_1\">¿Empresa A te contrata?.</p>",
                contrato_a_or_contrato_b: "<p>&gt; Sí.</p>",
                contrato_b: "<p>&gt; No.</p>",
                html_options: "<p>&gt; Sí.<a href=\"#contrato_a_or_contrato_b\">NEXT</a></p> \
                                <p>&gt; No.<a href=\"#contrato_b\">NEXT</a></p><br/>"
            }, {
                id: "contrato_a_or_contrato_b",
                html: "<p id=\"contrato_a_or_contrato_b\">¿Empresa A o Empleador B?.</p>",
                contrato_a: "<p>&gt; Empresa A.</p>",
                contrato_b: "<p>&gt; Empleador B.</p>",
                html_options: "<p>&gt; Empresa A.\
                                <a href=\"#contrato_a\">NEXT</a></p>\
                                <p>&gt; Empleador B.\
                                <a href=\"#contrato_b\">NEXT</a></p><br/>"
            }
        ]
    }
]

const screenMapper = (game, screens) => {
    let screensFiltered = [...game.data.filter(screen => screens.includes(screen.id))].sort(function (a, b) {
        return screens.indexOf(a.id) - screens.indexOf(b.id);
    });
    let currentGame = []
    for(let i = 0; i < screensFiltered.length; i++){
        if(i !== screensFiltered.length-1){
            currentGame.push({id: screensFiltered[i].id, html: screensFiltered[i].html + screensFiltered[i][screens[i+1]]})
        }else{
            currentGame.push({id: screensFiltered[i].id, html: screensFiltered[i].html + screensFiltered[i].html_options})
        }
    }
    return { id: game.id, data: currentGame }
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

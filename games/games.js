const games = [
    {
        id: "employee",
        data: [
            {
                id: "start",
                html: "<p>Empresa A concluye el contrato con tu Empleador B.</p>\
                        <p>&gt; Empleador B te despide.\
                            <a href=\"#no_contrato_b_contrato_a_1\">NEXT</a></p>\
                        <p>&gt; Empleador B te asigna otro contrato.\
                            <a href=\"#contrato_b_1\">NEXT</a></p>\</p><br/>"
            },
            {
                id: "no_contrato_b_contrato_a_1",
                html: "<p>¿Empresa A te contrata?.</p>\
                        <p>&gt; Sí.\
                        <a href=\"#contrato_a\">NEXT</a></p>\
                        <p>&gt; No.\
                        <a href=\"#no_contrato\">NEXT</a></p><br/>"
            },
            {
                id: "contrato_a",
                html: "<p>Empleado mejor empleado. Felicidades.<br/><a href=\"/game\">>REINICIAR</a></p><br/>"
            },
            {
                id: "contrato_b",
                html: "<p>Empleado. Nada cambió.<br/><a href=\"/game\">>REINICIAR</a></p><br/>"
            },
            {
                id: "no_contrato",
                html: "<p>Empleado desempleado. Mala suerte.<br/><a href=\"/game\">>REINICIAR</a></p><br/>"
            },
            {
                id: "contrato_b_1",
                html: "<p>¿Empresa A te contrata?.</p>\
                        <p>&gt; Sí.<a href=\"#contrato_a_or_contrato_b\">NEXT</a></p> \
                        <p>&gt; No.<a href=\"#contrato_b\">NEXT</a></p><br/>"
            },{
                    id: "contrato_a_or_contrato_b",
                    html: "<div><p>¿Empresa A o Empleador B?.</p>\
                            <p>&gt; Empresa A.\
                            <a href=\"#contrato_a\">NEXT</a></p>\
                            <p>&gt; Empleador B.\
                            <a href=\"#contrato_b\">NEXT</a></p><br/></div>"
                }
        ]
    },
    {
        name: "503",
    },
    {
        name: "803",
        moral: "",
        suspensionOfJudgment: {
            keywords: "Curiosidad, Reluctancia.",
        }
    }
]

module.exports = {
    getGame: function (id) {
        for(const game of games){
            if(game.id === id){
                return game;
            }
        }
        return null;
    }
};

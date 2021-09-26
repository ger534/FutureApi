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
    }
]

const screenMapper = (game, screens) => {
    let currentGame = [...game.data.filter(screen => screens.includes(screen.id))].sort(function (a, b) {
        return screens.indexOf(a.id) - screens.indexOf(b.id);
    });
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

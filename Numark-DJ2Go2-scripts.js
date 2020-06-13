/**
 * Numark DJ2GO2 Touch Mapping JS file
 * Tested on Mixxx v2.2.3 on macOS Catalina
 * Original mapping files downloaded from: https://www.mixxx.org/forums/viewtopic.php?f=7&t=13376
 */

var buildWheelTurn = function (chNumber) {
    return function (channel, control, value, status, group) {
        var newValue = (value < 64) ? value : value - 128;
        engine.setValue('[Channel' + chNumber + ']', 'jog', newValue); // Pitch bend
    }
};

var NumarkDJ2Go2 = {
    wheelTurn1: buildWheelTurn(1),
    wheelTurn2: buildWheelTurn(2),

    deckRate: function (channel, control, value, status, group) {
        engine.setValue(group, 'rate', script.midiPitch(0, value, 0xE0));
    },

    init: function (id, debugging) {},

    shutdown: function () {},
};

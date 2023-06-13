"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFontColor = exports.Terciary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var MyLabel_1 = require("../../components/MyLabel");
var meta = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select'
        },
        color: {
            control: 'select'
        },
        fontColor: {
            control: 'color'
        }
    }
};
exports.default = meta;
exports.Basic = {
    args: {
        size: 'normal',
        label: 'Example label',
        color: 'primary',
    }
};
exports.AllCaps = {
    args: {
        size: 'h1',
        label: 'Prueba All Caps',
        color: 'tertiary',
        allCaps: true
    }
};
exports.Secondary = {
    args: {
        size: 'h2',
        label: 'Prueba Secondary',
        color: 'secondary'
    }
};
exports.Terciary = {
    args: {
        size: 'h3',
        label: 'Prueba Terciary',
        color: 'tertiary'
    }
};
exports.CustomFontColor = {
    args: {
        size: 'h2',
        label: 'Prueba Font',
        fontColor: '#999'
    }
};

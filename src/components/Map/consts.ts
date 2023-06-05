import {TOptions} from "../../types";

export const baseMaps:TOptions = [{
    value: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    label: 'Базовая'
},{
    value: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png',
    label: 'Темная'
}, {
        value: 'https://tile.opentopomap.org/{z}/{x}/{y}.png',
        label: 'Природа'
    }
];
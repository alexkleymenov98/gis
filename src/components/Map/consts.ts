import {TOptions} from "../../types";

export const baseMaps:TOptions = [{
    value: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    label: 'Базовая'
},{
    value: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
    label: 'Темная'
},
    {
        value: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        label: 'Природа'
    }
];
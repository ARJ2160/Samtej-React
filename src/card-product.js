import card_cutter from "./assets/products/motorized_card_cutter.webp"
import die_punch_card_cutter from "./assets/products/die_punch_card_cutter.webp"
import { v4 as uuidv4 } from 'uuid';

const card_products = [
    {
        "id": uuidv4(),
        "img": card_cutter,
        "card_title": "Single DIE - PUNCH Cutter",
        "card_body": "Motorized Card Cutter",
        "dimensions" : "300 x 550 x 290 mm",
        "cut_size" : "86 x 54 x 1.2 mm thick",
        "power": "375W, 230V AC",
        "capacity": "900 Cards per hour."
    },
    {
        "id": uuidv4(),
        "img": die_punch_card_cutter,
        "card_title": "2 DIE - PUNCH Cutter",
        "card_body": "Motorized Card Cutter",
        "dimensions" : "360 x 550 x 290 mm",
        "cut_size" : "86 x 54 x 1.2 mm thick",
        "power": "375 W, 230V AC",
        "capacity": "1800 Cards per hour."
    }
]

export default card_products
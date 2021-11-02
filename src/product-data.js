import single_tray_handpump from "./assets/carousel/single_tray_handpump.webp"
import double_tray_handpump from "./assets/carousel/double_tray_handpump.webp"
// import die_punch_cutter from "./assets/carousel/die_punch_cutter.webp"
import card_cutter from "./assets/carousel/motorized_card_cutter.webp"
import heat_press_1 from "./assets/carousel/heat-press-1.webp"
import heat_press_2 from "./assets/carousel/heat-press-2.webp"
import heat_press_3 from "./assets/carousel/heat-press-3.webp"

const products = [
    {
        "id": "1",
        "type": "hydraulic-system",
        "img": single_tray_handpump,
        "card_body": "Single Tray Air & Water Cooled Hydraulic System.",
        "power": "1.2 KW 230 V AC Single Phase.",
        "media": "ABS, PVC, Teslin, PET-G",
        "plate_size": "110 x 297 mm",
        "capacity": "200 — 250 Cards 30 Minutes cycle time"
    },
    {
        "id": "2",
        "type": "hydraulic-system",
        "img": double_tray_handpump,
        "card_body": "Double Tray Water cooled Automatic 3 Stage Hydraulic system",
        "power": "4.2 KW 230 V AC Single Phase",
        "media": "Media : ABS, PVC, Teslin, PET-G",
        "plate_size": "210 x 297 mm",
        "capacity": "200 Cards 30 Minutes cycle time"
    },
    {
        "id": "3",
        "type": "heat-press",
        "img": heat_press_1,
        "card_body": "Single Tray Water cooled Hand Pump Hydraulic System.",
        "power": "5.5 KW 230 V AC Single / Three Phase",
        "plate_size": "330 x 480 mm",
        "capacity": "200 — 250 Cards 30 Minutes cycle time"
    },
    {
        "id": "4",
        "type": "heat-press",
        "img": heat_press_2,
        "card_body": "Double Tray Water cooled Fully Automatic Hydraulic System.",
        "power": "9.7 KW 230 V AC Three Phase",
        "plate_size": "330 x 480 mm",
        "capacity": "400—500 Cards 30 Minutes cycle time"
    },
    {
        "id": "5",
        "type": "heat-press",
        "img": heat_press_3,
        "card_body": "Three Tray Water cooled Fully Automatic Hydraulic System",
        "power": "9.7 KW 230 V AC Three Phase",
        "plate_size": "330 x 480 mm",
        "capacity": "400—500 Cards 30 Minutes cycle time"
    },
    {
        "id": "6",
        "type": "card-cutter",
        "img": card_cutter,
        "card_body": "Motorised Single Card Cutter",
        "cut_size" : "86 x 54 x 1.2 mm",
        "power": "375 W, 230V AC Single Phase",
        "capacity": "900 Cards per hour."
    }
]

export default products;
import t_shirt_machine from "./assets/products/t-shirt-machine.webp"
import { v4 as uuidv4 } from 'uuid';

const shirt_prints = [
    {
        "id": uuidv4(),
        "img": t_shirt_machine,
        "card_title": "Automatic Pneumatic (Flatbed) Heat Press Machine.",
        "dimensions" : "370mm x 1250 x 1500 mm",
        "power": " 3 KW 230V AC Single Phase",
        "plate_size": "Standard Size - 330 x 1050 mm",
        "batch_time": "40 to 70 seconds"
    }
]

export default shirt_prints
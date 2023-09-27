
export default function Chips({ value }) {
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.chips');
        var instances = M.Chips.init(
            elems,
            {
                placeholder: '+ catégorie',
                secondaryPlaceholder: "+ sous-catégories",
                autocompleteOptions: {
                    data: [
                        "stockage",
                        "hdd",
                        "ssd",
                        "nvme",
                        "ram",
                        "ddr4",
                        "ddr5",
                        "alimentation",
                        "bronze",
                        "gold",
                        "platinium",
                        "titanium",
                        "écran",
                        "15 pouces",
                        "17 pouces",
                        "24 pouces",
                        "32 pouces",
                        "ips",
                        "va",
                        "tn",
                        "accessoire",
                        "pâte thermique",
                        "carte graphique",
                        "geforce rtx",
                        "radeon rx",
                        "carte mère",
                        "processeur",
                        "celeron",
                        "i3",
                        "i5",
                        "i7",
                        "i9",
                        "ryzen 3",
                        "ryzen 5",
                        "ryzen 7",
                        "ryzen 9",
                        "système de refroidissement",
                        "ventirad",
                        "watercooling",
                        "console",
                        "ps3",
                        "ps4",
                        "ps5",
                        "switch",
                        "xbox one",
                        "xbox one x|s",
                        "téléphone",
                        "tablette",
                        "android",
                        "ios",
                        "pc portable",
                        "pc fixe",
                        "pc",
                        "clavier",
                        "azerty",
                        "qwerty",
                        "rgb",
                        "connectique",
                        "usb",
                        "usb type-c",
                        "micro-usb",
                    ]
                },
                limit: 3,
                minLength: 2,
            }
        );

    });

    return (
        <div className="chips chips-placeholder chips-autocomplete">
            {value}
            <i class="close material-icons">close</i>
        </div>
    )
}
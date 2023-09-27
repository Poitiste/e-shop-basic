export default function Shop({ category = "bestSeller" }) {
    return (
        <>
            <h1>{category}</h1>

            {
                /*TODO : insérer éléments

                |catégorie principale > catégorie secondaire|<ListOfProducts/>|<Navigation/>
                |[catégorie secondaire si caté principale]  |                 |
                |nom: [...]                                 |                 |
                |prix : [0] et [500]                        |                 |
                |<DetailsProduct/>                          |                 |


                <DetailsOfProducts/> : 
                utiliser la classe pour définir les caractéristiques de bases puis l'étendre pour les détails liés aux enfants
                Base : [couleur ▼]
                tailles : xxx mm/cm []
                          xxx mm/cm []
                          xxx mm/cm []
                          xxx mm/cm []
                PC :
                    [ Processeur ]
                    Marque Processeur : [marque processeur ▼]
                    Puissance processeur : [min] [max]
                    
                    [ RAM ] 
                    quantité : [min] [max] Go
                    fréquence : [fréquence] MHz
                    
                    [ Stockage ]
                    plusieurs disques durs : [sélectionner ▼] // oui ou non ou indiférrent
                    quantité : [min] [max] Go
                    type : [type ▼] // HDD ou SSD SATA ou NVME/M2
                    ---------------
                    vitesse d'écriture : [min] Mo/S
                    vitesse de lecture : xxx Mo/S
                
                    [ Alimentation ]
                    Puissance : [min] [max] Watts
                    Gamme : [gammes ▼] // bronze gold platinium titanium
                    RGB : [sélectionner ▼] // oui ou non ou indifférent

                    [ Ventilateurs ]
                    taille : [taille ▼]
                    RGB : [sélectionner ▼] // oui ou non ou indiférrent

                    [ Carte mère ]
                    Marque : [sélectionner ▼] // liste ou indiférrent
                    Format : [sélectionner ▼] // ATX-E(xtend) ou ATX ou micro-ATX ou mini-ITX
                    Wifi : [sélectionner ▼] //oui ou non indifférent
                    Socket : [sélectionner ▼] //oui ou non indifférent
                    Connectique : 
                        USB 3.0 ou plus [sélectionner ▼] //oui ou non ou indifférent
                        USB Type-C : [sélectionner ▼] // oui ou non ou indifférent
                        Jack séparée : [sélectionner ▼] //oui ou non indifférent
                    RAM :
                        Nombre d'emplacement : [sélectionner ▼]
                        Protée des fréquences : [min ▼] [max ▼]
                    Disque dur :
                        NVME/M2 disponibles : [min] [max]
                        Branchables : [min] [max]

                    [ Carte graphique ]
                    Marque : [sélectionner ▼] //liste (et qte) ou indifférent
                    Chipset graphique : [sélectionner ▼] //AMD RADEON 


                <ListOfProducts/> :
                interroger la base de données pour tous les articles correspondants aux paramètres de la page, ie
                par défaut : tous les articles de la catégorie en paramètre de la page avaec qte > 0 & promotion puis meilleures ventes
                avec les filtres : tous les articles de la catégorie en paramètre + formulaire sur le côté
                */

            }
        </>
    );
}
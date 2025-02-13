document.addEventListener("DOMContentLoaded", function () {
    const armors = [
        {
            id: "neutralArmor",
            name: "Neutral Armor",
            img1: "imgs/Neutral.jpeg",
            materials: [
                {id: "7321", name: "Crystal Fragment", quantity: "100", source: "ein_dun02" },
                {id: "7069",name: "Destroyed armor", quantity: "50", source: "ayo_dun02" },
                {id: "7210", name: "Armor Piece of Dullahan", quantity: "50", source: "nif_fild01" },
                {id: "985", name: "Elunium", quantity: "100", source: "beach_dun2" },
                {id: "34505", name: "Natural Wasabi", quantity: "3", source: "ayo_dun02" }
            ]
        },
        {
            id: "waterArmor",
            name: "Water Armor",
            img1: "imgs/Water.jpeg",
            materials: [
                {id: "7321", name: "Crystal Fragment", quantity: "100", source: "ein_dun02" },
                {id: "7069",name: "Destroyed armor", quantity: "50", source: "ayo_dun02" },
                {id: "7210", name: "Armor Piece of Dullahan", quantity: "50", source: "nif_fild01" },
                {id: "985", name: "Elunium", quantity: "100", source: "beach_dun2" },
                {id: "34503", name: "Drowned Wasabi", quantity: "3", source: "River" }
            ]
        },
        {
            id: "earthArmor",
            name: "Earth Armor",
            img1: "imgs/Earth.jpeg",
            materials: [
                {id: "7321", name: "Crystal Fragment", quantity: "100", source: "ein_dun02" },
                {id: "7069",name: "Destroyed armor", quantity: "50", source: "ayo_dun02" },
                {id: "7210", name: "Armor Piece of Dullahan", quantity: "50", source: "nif_fild01" },
                {id: "985", name: "Elunium", quantity: "100", source: "beach_dun2" },
                {id: "34510", name: "Fissure Wasabi", quantity: "3", source: "Mine" }
            ]
        },
        {
            id: "fireArmor",
            name: "Fire Armor",
            img1: "imgs/Fire.jpeg",
            materials: [
                {id: "7321", name: "Crystal Fragment", quantity: "100", source: "ein_dun02" },
                {id: "7069",name: "Destroyed armor", quantity: "50", source: "ayo_dun02" },
                {id: "7210", name: "Armor Piece of Dullahan", quantity: "50", source: "nif_fild01" },
                {id: "985", name: "Elunium", quantity: "100", source: "beach_dun2" },
                {id: "34502", name: "Burned Wasabi", quantity: "3", source: "Mine" }
            ]
        },
        {
            id: "windArmor",
            name: "Wind Armor",
            img1: "imgs/Wind.jpeg",
            materials: [
                {id: "7321", name: "Crystal Fragment", quantity: "100", source: "ein_dun02" },
                {id: "7069",name: "Destroyed armor", quantity: "50", source: "ayo_dun02" },
                {id: "7210", name: "Armor Piece of Dullahan", quantity: "50", source: "nif_fild01" },
                {id: "985", name: "Elunium", quantity: "100", source: "beach_dun2" },
                {id: "34507", name: "Tornado Wasabi", quantity: "3", source: "Mine" }
            ]
        },
        {
            id: "poisonArmor",
            name: "Poison Armor",
            img1: "imgs/Poison.jpeg",
            materials: [
                {id: "7321", name: "Crystal Fragment", quantity: "100", source: "ein_dun02" },
                {id: "7069",name: "Destroyed armor", quantity: "50", source: "ayo_dun02" },
                {id: "7210", name: "Armor Piece of Dullahan", quantity: "50", source: "nif_fild01" },
                {id: "985", name: "Elunium", quantity: "100", source: "beach_dun2" },
                {id: "34508", name: "Toxic Wasabi", quantity: "3", source: "Mine" }
            ]
        },
        {
            id: "shadowArmor",
            name: "Shadow Armor",
            img1: "imgs/Shadow.jpeg",
            materials: [
                {id: "7321", name: "Crystal Fragment", quantity: "100", source: "ein_dun02" },
                {id: "7069",name: "Destroyed armor", quantity: "50", source: "ayo_dun02" },
                {id: "7210", name: "Armor Piece of Dullahan", quantity: "50", source: "nif_fild01" },
                {id: "985", name: "Elunium", quantity: "100", source: "beach_dun2" },
                {id: "34506", name: "Cursed Wasabi", quantity: "3", source: "Mine" }
            ]
        },
        {
            id: "ghostArmor",
            name: "Ghost Armor",
            img1: "imgs/Ghost1.jpeg",
            img2: "imgs/Ghost2.jpeg",
            materials: [
                {id: "7321", name: "Crystal Fragment", quantity: "100", source: "ein_dun02" },
                {id: "7069",name: "Destroyed armor", quantity: "50", source: "ayo_dun02" },
                {id: "7210", name: "Armor Piece of Dullahan", quantity: "50", source: "nif_fild01" },
                {id: "985", name: "Elunium", quantity: "100", source: "beach_dun2" },
                {id: "34504", name: "Harrowing Wasabi", quantity: "3", source: "Mine" }
            ]
        },
        {
            id: "undeadArmor",
            name: "Undead Armor",
            img1: "imgs/Undead1.jpeg",
            img2: "imgs/Undead2.jpeg",
            materials: [
                {id: "7321", name: "Crystal Fragment", quantity: "100", source: "ein_dun02" },
                {id: "7069",name: "Destroyed armor", quantity: "50", source: "ayo_dun02" },
                {id: "7210", name: "Armor Piece of Dullahan", quantity: "50", source: "nif_fild01" },
                {id: "985", name: "Elunium", quantity: "100", source: "beach_dun2" },
                {id: "34509", name: "Rotten Wasabi", quantity: "3", source: "Mine" }
            ]
        },
        {
            id: "neutralValis",
            name: "Neutral Manteau",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "2517", name: "Valis Manteau", quantity: "1", source: "ein_dun02" },
                {id: "6020",name: "Fur", quantity: "50", source: "ayo_dun02" },
                {id: "7107", name: "Antelope Skin", quantity: "50", source: "nif_fild01" },
                {id: "7123", name: "Dragon Skin", quantity: "100", source: "beach_dun2" },
                {id: "34503", name: "Natural Wasabi", quantity: "2", source: "ayo_dun02" }
            ]
        },
        {
            id: "waterValis",
            name: "Water Manteau",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "2517", name: "Valis Manteau", quantity: "1", source: "ein_dun02" },
                {id: "6020",name: "Fur", quantity: "50", source: "ayo_dun02" },
                {id: "7107", name: "Antelope Skin", quantity: "50", source: "nif_fild01" },
                {id: "7123", name: "Dragon Skin", quantity: "100", source: "beach_dun2" },
                {id: "34503", name: "Drowned Wasabi", quantity: "2", source: "beach_dun2" }
            ]
        },
        {
            id: "earthValis",
            name: "Earth Manteau",
            img1: "imgs/Undead1.jpeg",
            img2: "imgs/Undead2.jpeg",
            materials: [
                {id: "2517", name: "Valis Manteau", quantity: "1", source: "ein_dun02" },
                {id: "6020",name: "Fur", quantity: "50", source: "ayo_dun02" },
                {id: "7107", name: "Antelope Skin", quantity: "50", source: "nif_fild01" },
                {id: "7123", name: "Dragon Skin", quantity: "100", source: "beach_dun2" },
                {id: "34503", name: "Drowned Wasabi", quantity: "2", source: "beach_dun2" }
            ]
        },
        {
            id: "fireValis",
            name: "Fire Manteau",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "2517", name: "Valis Manteau", quantity: "1", source: "ein_dun02" },
                {id: "6020",name: "Fur", quantity: "50", source: "ayo_dun02" },
                {id: "7107", name: "Antelope Skin", quantity: "50", source: "nif_fild01" },
                {id: "7123", name: "Dragon Skin", quantity: "100", source: "beach_dun2" },
                {id: "34503", name: "Drowned Wasabi", quantity: "2", source: "beach_dun2" }
            ]
        },
        {
            id: "windValis",
            name: "Wind Manteau",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "2517", name: "Valis Manteau", quantity: "1", source: "ein_dun02" },
                {id: "6020",name: "Fur", quantity: "50", source: "ayo_dun02" },
                {id: "7107", name: "Antelope Skin", quantity: "50", source: "nif_fild01" },
                {id: "7123", name: "Dragon Skin", quantity: "100", source: "beach_dun2" },
                {id: "34503", name: "Drowned Wasabi", quantity: "2", source: "beach_dun2" }
            ]
        },
        {
            id: "poisonValis",
            name: "Poison Manteau",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "2517", name: "Valis Manteau", quantity: "1", source: "ein_dun02" },
                {id: "6020",name: "Fur", quantity: "50", source: "ayo_dun02" },
                {id: "7107", name: "Antelope Skin", quantity: "50", source: "nif_fild01" },
                {id: "7123", name: "Dragon Skin", quantity: "100", source: "beach_dun2" },
                {id: "34503", name: "Drowned Wasabi", quantity: "2", source: "beach_dun2" }
            ]
        },
        {
            id: "shadowValis",
            name: "Shadow Manteau",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "2517", name: "Valis Manteau", quantity: "1", source: "ein_dun02" },
                {id: "6020",name: "Fur", quantity: "50", source: "ayo_dun02" },
                {id: "7107", name: "Antelope Skin", quantity: "50", source: "nif_fild01" },
                {id: "7123", name: "Dragon Skin", quantity: "100", source: "beach_dun2" },
                {id: "34503", name: "Drowned Wasabi", quantity: "2", source: "beach_dun2" }
            ]
        },
        {
            id: "ghostValis",
            name: "Ghost Manteau",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "2517", name: "Valis Manteau", quantity: "1", source: "ein_dun02" },
                {id: "6020",name: "Fur", quantity: "50", source: "ayo_dun02" },
                {id: "7107", name: "Antelope Skin", quantity: "50", source: "nif_fild01" },
                {id: "7123", name: "Dragon Skin", quantity: "100", source: "beach_dun2" },
                {id: "34503", name: "Drowned Wasabi", quantity: "2", source: "beach_dun2" }
            ]
        },
        {
            id: "undeadValis",
            name: "Undead Manteau",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "2517", name: "Valis Manteau", quantity: "1", source: "ein_dun02" },
                {id: "6020",name: "Fur", quantity: "50", source: "ayo_dun02" },
                {id: "7107", name: "Antelope Skin", quantity: "50", source: "nif_fild01" },
                {id: "7123", name: "Dragon Skin", quantity: "100", source: "beach_dun2" },
                {id: "34503", name: "Drowned Wasabi", quantity: "2", source: "beach_dun2" }
            ]
        },
        {
            id: "neutralBoots",
            name: "Neutral Boots",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "2405", name: "Boots", quantity: "1", source: "ein_dun02" },
                {id: "998",name: "Iron", quantity: "50", source: "ayo_dun02" },
                {id: "7190", name: "Solid Husk", quantity: "30", source: "nif_fild01" },
                {id: "34503", name: "Natural Wasabi", quantity: "2", source: "beach_dun2" }
            ]
        },
        {
            id: "waterBoots",
            name: "Water Boots",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "2405", name: "Boots", quantity: "1", source: "ein_dun02" },
                {id: "998",name: "Iron", quantity: "50", source: "ayo_dun02" },
                {id: "7190", name: "Solid Husk", quantity: "30", source: "nif_fild01" },
                {id: "34503", name: "Natural Wasabi", quantity: "2", source: "beach_dun2" }
            ]
        },
        {
            id: "earthBoots",
            name: "Earth Boots",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "2405", name: "Boots", quantity: "1", source: "ein_dun02" },
                {id: "998",name: "Iron", quantity: "50", source: "ayo_dun02" },
                {id: "7190", name: "Solid Husk", quantity: "30", source: "nif_fild01" },
                {id: "34503", name: "Natural Wasabi", quantity: "2", source: "beach_dun2" }
            ]
        },
        {
            id: "fireBoots",
            name: "Fire Boots",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "2405", name: "Boots", quantity: "1", source: "ein_dun02" },
                {id: "998",name: "Iron", quantity: "50", source: "ayo_dun02" },
                {id: "7190", name: "Solid Husk", quantity: "30", source: "nif_fild01" },
                {id: "34503", name: "Natural Wasabi", quantity: "2", source: "beach_dun2" }
            ]
        },
        {
            id: "windBoots",
            name: "Wind Boots",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "2405", name: "Boots", quantity: "1", source: "ein_dun02" },
                {id: "998",name: "Iron", quantity: "50", source: "ayo_dun02" },
                {id: "7190", name: "Solid Husk", quantity: "30", source: "nif_fild01" },
                {id: "34503", name: "Natural Wasabi", quantity: "2", source: "beach_dun2" }
            ]
        },
        {
            id: "poisonBoots",
            name: "Poison Boots",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "2405", name: "Boots", quantity: "1", source: "ein_dun02" },
                {id: "998",name: "Iron", quantity: "50", source: "ayo_dun02" },
                {id: "7190", name: "Solid Husk", quantity: "30", source: "nif_fild01" },
                {id: "34503", name: "Natural Wasabi", quantity: "2", source: "beach_dun2" }
            ]
        },
        {
            id: "shadowBoots",
            name: "Shadow Boots",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "2405", name: "Boots", quantity: "1", source: "ein_dun02" },
                {id: "998",name: "Iron", quantity: "50", source: "ayo_dun02" },
                {id: "7190", name: "Solid Husk", quantity: "30", source: "nif_fild01" },
                {id: "34503", name: "Natural Wasabi", quantity: "2", source: "beach_dun2" }
            ]
        },
        {
            id: "ghostBoots",
            name: "Ghost Boots",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "2405", name: "Boots", quantity: "1", source: "ein_dun02" },
                {id: "998",name: "Iron", quantity: "50", source: "ayo_dun02" },
                {id: "7190", name: "Solid Husk", quantity: "30", source: "nif_fild01" },
                {id: "34503", name: "Natural Wasabi", quantity: "2", source: "beach_dun2" }
            ]
        },
        {
            id: "undeadBoots",
            name: "Undead Boots",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "2405", name: "Boots", quantity: "1", source: "ein_dun02" },
                {id: "998",name: "Iron", quantity: "50", source: "ayo_dun02" },
                {id: "7190", name: "Solid Husk", quantity: "30", source: "nif_fild01" },
                {id: "34503", name: "Natural Wasabi", quantity: "2", source: "beach_dun2" }
            ]
        },
        {
            id: "neutralShield",
            name: "Elemental Shield",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "7105", name: "Piece of Shield", quantity: "5", source: "ein_dun02" }
            ]
        },
        {
            id: "neutralShield2",
            name: "Weapon Block Shield",
            img1: "imgs/.jpeg",
            img2: "imgs/.jpeg",
            materials: [
                {id: "7105", name: "Piece of Shield", quantity: "5", source: "ein_dun02" }

            ]
        },
        

    ];

    let modalsHTML = "";

    armors.forEach(armor => {
        let imagesHTML = "";

        if (armor.img2) {
            // Si hay dos imágenes, mostrarlas en dos columnas
            imagesHTML = `
            <div class="row">
                <div class="col-md-6">
                    <img src="${armor.img1}" alt="${armor.name} 1" class="img-fluid mb-3" style="max-width: 100%;">
                </div>
                <div class="col-md-6">
                    <img src="${armor.img2}" alt="${armor.name} 2" class="img-fluid mb-3" style="max-width: 100%;">
                </div>
            </div>`;
        } else {
            // Si solo hay una imagen, centrarla
            imagesHTML = `
            <div class="text-center">
                <img src="${armor.img1}" alt="${armor.name}" class="img-fluid mb-3" style="max-width: 100%;">
            </div>`;
        }

        modalsHTML += `
        <div class="modal fade" id="${armor.id}Modal" tabindex="-1" aria-labelledby="${armor.id}Label" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="${armor.id}Label">${armor.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ${imagesHTML}
                        <p class="text-center">Materiales necesarios para construir la ${armor.name}:</p>
                        <table class="table table-striped">
                            <thead class="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Material</th>
                                    <th>Cantidad</th>
                                    <th>Fuente</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${armor.materials.map(mat => `
                                <tr>
                                    <td>${mat.id}</td>
                                    <td>${mat.name}</td>
                                    <td>${mat.quantity}</td>
                                    <td>${mat.source}</td>
                                </tr>`).join('')}
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>`;
    });

    document.getElementById("modalsContainer").innerHTML = modalsHTML;
});
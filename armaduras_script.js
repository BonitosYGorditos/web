document.addEventListener("DOMContentLoaded", function () {
    const armors = [
        {
            id: "neutralArmor",
            name: "Neutral Armor",
            img1: "imgs/Neutral.jpeg",
            materials: [
                { name: "Iron", quantity: "10", source: "Mine" },
                { name: "Leather", quantity: "5", source: "Beasts" },
                { name: "Neutral Gem", quantity: "3", source: "Dungeon" },
                { name: "Wood Plank", quantity: "8", source: "Forest" },
                { name: "Magic Thread", quantity: "2", source: "Crafting" }
            ]
        },
        {
            id: "waterArmor",
            name: "Water Armor",
            img1: "imgs/Water.jpeg",
            materials: [
                { name: "Water Crystal", quantity: "4", source: "Lake" },
                { name: "Blue Fabric", quantity: "7", source: "Tailor" },
                { name: "Magic Thread", quantity: "3", source: "Crafting" },
                { name: "Shell Fragment", quantity: "6", source: "Beach" },
                { name: "Aquatic Stone", quantity: "5", source: "River" }
            ]
        },
        {
            id: "earthArmor",
            name: "Earth Armor",
            img1: "imgs/Earth.jpeg",
            materials: [
                { name: "Stone", quantity: "12", source: "Mountains" },
                { name: "Mud", quantity: "6", source: "Swamp" },
                { name: "Earth Essence", quantity: "3", source: "Alchemy" },
                { name: "Wood Plank", quantity: "9", source: "Forest" },
                { name: "Metal Ore", quantity: "4", source: "Mine" }
            ]
        },
        {
            id: "fireArmor",
            name: "Fire Armor",
            img1: "imgs/Fire.jpeg",
            materials: [
                { name: "Stone", quantity: "12", source: "Mountains" },
                { name: "Mud", quantity: "6", source: "Swamp" },
                { name: "Earth Essence", quantity: "3", source: "Alchemy" },
                { name: "Wood Plank", quantity: "9", source: "Forest" },
                { name: "Metal Ore", quantity: "4", source: "Mine" }
            ]
        },
        {
            id: "windArmor",
            name: "Wind Armor",
            img1: "imgs/Wind.jpeg",
            materials: [
                { name: "Stone", quantity: "12", source: "Mountains" },
                { name: "Mud", quantity: "6", source: "Swamp" },
                { name: "Earth Essence", quantity: "3", source: "Alchemy" },
                { name: "Wood Plank", quantity: "9", source: "Forest" },
                { name: "Metal Ore", quantity: "4", source: "Mine" }
            ]
        },
        {
            id: "poisonArmor",
            name: "Poison Armor",
            img1: "imgs/Poison.jpeg",
            materials: [
                { name: "Stone", quantity: "12", source: "Mountains" },
                { name: "Mud", quantity: "6", source: "Swamp" },
                { name: "Earth Essence", quantity: "3", source: "Alchemy" },
                { name: "Wood Plank", quantity: "9", source: "Forest" },
                { name: "Metal Ore", quantity: "4", source: "Mine" }
            ]
        },
        {
            id: "shadowArmor",
            name: "Shadow Armor",
            img1: "imgs/Shadow.jpeg",
            materials: [
                { name: "Stone", quantity: "12", source: "Mountains" },
                { name: "Mud", quantity: "6", source: "Swamp" },
                { name: "Earth Essence", quantity: "3", source: "Alchemy" },
                { name: "Wood Plank", quantity: "9", source: "Forest" },
                { name: "Metal Ore", quantity: "4", source: "Mine" }
            ]
        },
        {
            id: "ghostArmor",
            name: "Ghost Armor",
            img1: "imgs/Ghost1.jpeg",
            img2: "imgs/Ghost2.jpeg",
            materials: [
                { name: "Stone", quantity: "12", source: "Mountains" },
                { name: "Mud", quantity: "6", source: "Swamp" },
                { name: "Earth Essence", quantity: "3", source: "Alchemy" },
                { name: "Wood Plank", quantity: "9", source: "Forest" },
                { name: "Metal Ore", quantity: "4", source: "Mine" }
            ]
        },
        {
            id: "undeadArmor",
            name: "Undead Armor",
            img1: "imgs/Undead1.jpeg",
            img2: "imgs/Undead2.jpeg",
            materials: [
                { name: "Stone", quantity: "12", source: "Mountains" },
                { name: "Mud", quantity: "6", source: "Swamp" },
                { name: "Earth Essence", quantity: "3", source: "Alchemy" },
                { name: "Wood Plank", quantity: "9", source: "Forest" },
                { name: "Metal Ore", quantity: "4", source: "Mine" }
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
                                    <th>Material</th>
                                    <th>Cantidad</th>
                                    <th>Fuente</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${armor.materials.map(mat => `
                                <tr>
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
// Reducciones
const elementalTable = {
    Neutral: { Neutral: 0, Water: 0, Earth: 0, Fire: 0, Wind: 0, Poison: 0, Holy: 0, Shadow: 0, Ghost: 75, Undead: 0 },
    Water: { Neutral: 0, Water: 75, Earth: 0, Fire: 50, Wind: -75, Poison: 0, Holy: 0, Shadow: 0, Ghost: 0, Undead: 0 },
    Earth: { Neutral: 0, Water: 0, Earth: 0, Fire: -50, Wind: 50, Poison: -25, Holy: 0, Shadow: 0, Ghost: 0, Undead: 0 },
    Fire: { Neutral: 0, Water: -50, Earth: 50, Fire: 75, Wind: 0, Poison: -25, Holy: 0, Shadow: 0, Ghost: 0, Undead: 0 },
    Wind: { Neutral: 0, Water: 50, Earth: -50, Fire: 0, Wind: 75, Poison: -25, Holy: 0, Shadow: 0, Ghost: 0, Undead: 0 },
    Poison: { Neutral: 0, Water: 0, Earth: 0, Fire: 0, Wind: 0, Poison: 100, Holy: 0, Shadow: 50, Ghost: 0, Undead: 50 },
    Holy: { Neutral: 0, Water: 25, Earth: 25, Fire: 25, Wind: 25, Poison: 25, Holy: 100, Shadow: -25, Ghost: 25, Undead: 0 },
    Shadow: { Neutral: 0, Water: 0, Earth: 0, Fire: 0, Wind: 0, Poison: 50, Holy: -25, Shadow: 100, Ghost: 25, Undead: 100 },
    Ghost: { Neutral: 75, Water: 0, Earth: 0, Fire: 0, Wind: 0, Poison: 0, Holy: 0, Shadow: 0, Ghost: -25, Undead: 0 },
    Undead: { Neutral: 0, Water: 0, Earth: 0, Fire: -25, Wind: 0, Poison: 125, Holy: -50, Shadow: 125, Ghost: 0, Undead: 100 },
};

function updateTable() {
    const selectedElement = document.getElementById('selected-element').value;
    const reductions = elementalTable[selectedElement];

    for (const [element, value] of Object.entries(reductions)) {
        const cell = document.getElementById(`reduction-${element.toLowerCase()}`);
        if (cell) {
            cell.textContent = `${value}%`;
        }
    }
}

// Initialize the table with default values
window.onload = updateTable;

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('elemental-form');
    const result = document.getElementById('result');
    const neutralResistanceOutput = document.getElementById('neutral-resistance');
    const waterResistanceOutput = document.getElementById('water-resistance');
    const earthResistanceOutput = document.getElementById('earth-resistance');
    const fireResistanceOutput = document.getElementById('fire-resistance');
    const windResistanceOutput = document.getElementById('wind-resistance');
    const poisonResistanceOutput = document.getElementById('poison-resistance');
    const holyResistanceOutput = document.getElementById('holy-resistance');
    const shadowhResistanceOutput = document.getElementById('shadow-resistance');
    const ghostResistanceOutput = document.getElementById('ghost-resistance');
    const undeadResistanceOutput = document.getElementById('undead-resistance');

    form.addEventListener('change', calculateResistance);

    function calculateResistance() {
        const elements = ["Fire", "Water", "Earth", "Neutral", "Holy", "Shadow", "Ghost", "Undead", "Wind", "Poison"];
        const results = {
            Fire: 0,
            Water: 0,
            Earth: 0,
            Neutral: 0,
            Holy: 0,
            Shadow: 0,
            Ghost: 0,
            Undead: 0,
            Wind: 0,
            Poison: 0,
        };

        let allElementalHelmSelected = false;
        let allElementalShieldSelected = false;
        let twoHandedWeaponSelected = false;

        // Gather resistances
        document.querySelectorAll("select").forEach(select => {
            const value = parseInt(select.value);
            const resistance = select.options[select.selectedIndex].dataset.resistance;

            if (resistance === "All") {
                if (select.id === "headgear-1") {
                    allElementalHelmSelected = true;
                }
                if (select.id === "shield") {
                    allElementalShieldSelected = true;
                }
            }

            if (select.id === "shield" && select.options[select.selectedIndex].dataset.type === "TwoHanded") {
                twoHandedWeaponSelected = true;
            }

            if (resistance === "All") {
                elements.forEach(element => {
                    results[element] += value;
                });
            } else if (resistance) {
                results[resistance] += value;
            }
        });

        // Apply exception: reduce All-Elemental Helm resistance if All-Elemental Shield is selected
        if (allElementalHelmSelected && allElementalShieldSelected) {
            elements.forEach(element => {
                results[element] -= 10; // Reduce the helm's contribution by 10%
            });
        }

        // Add 10% resistance to all elements if a two-handed weapon is selected
        if (twoHandedWeaponSelected) {
            elements.forEach(element => {
                results[element] += 10;
            });
        }

        // Display results
        elements.forEach(element => {
            document.getElementById(`${element.toLowerCase()}-resistance`).textContent = results[element];
        });
    }
});

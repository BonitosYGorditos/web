document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('quest-modal');
    const modalBody = document.getElementById('table-container');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const openModalButtons = document.querySelectorAll('.open-modal-btn');

    // Datos simulados de las quests
    const questData = {
        Quest1: [
            { ID: 999, Name: 'Steel', Cantidad: 70, Mapa1: 'jupe_core', Mapa2: '', Mapa3: '' },
            { ID: 984, Name: 'Oridecon', Cantidad: 70, Mapa1: 'jupe_core', Mapa2: '', Mapa3: '' },
            { ID: 985, Name: 'Elunium', Cantidad: 70, Mapa1: 'jupe_core', Mapa2: '', Mapa3: '' },
            { ID: 7024, Name: 'Bloody Edge', Cantidad: 5, Mapa1: 'gefenia02', Mapa2: 'ein_fild01', Mapa3: 'mosk_dun02' },
            { ID: 7315, Name: 'Dark Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 34506, Name: 'Cursed Wasabi', Cantidad: 5, Mapa1: 'nif_fild01', Mapa2: 'kh_dun02', Mapa3: 'yuno_fild05' }
        ],
        Quest2: [
            { ID: 999, Name: 'Steel', Cantidad: 70, Mapa1: 'jupe_core', Mapa2: '', Mapa3: '' },
            { ID: 984, Name: 'Oridecon', Cantidad: 70, Mapa1: 'jupe_core', Mapa2: '', Mapa3: '' },
            { ID: 985, Name: 'Elunium', Cantidad: 70, Mapa1: 'jupe_core', Mapa2: '', Mapa3: '' },
            { ID: 7024, Name: 'Bloody Edge', Cantidad: 5, Mapa1: 'gefenia02', Mapa2: 'ein_fild01', Mapa3: 'mosk_dun02' },
            { ID: 7315, Name: 'Dark Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 34506, Name: 'Cursed Wasabi', Cantidad: 5, Mapa1: 'nif_fild01', Mapa2: 'kh_dun02', Mapa3: 'yuno_fild05' }
        ]
    };

    // Abrir modal
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const questId = button.getAttribute('data-quest-id');
            openModal(questId);
        });
    });

    // Cerrar modal
    closeModalBtn.addEventListener('click', closeModal);

    // Función para abrir el modal y mostrar la tabla
    function openModal(questId) {
        modal.style.display = 'flex';
        if (questData[questId]) {
            renderTable(questData[questId]);
        } else {
            modalBody.innerHTML = '<p>No data available for this quest.</p>';
        }
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = 'none';
        modalBody.innerHTML = '';
    }

    // Función para renderizar la tabla
    function renderTable(items) {
        if (!items.length) {
            modalBody.innerHTML = '<p>No data available.</p>';
            return;
        }

        let table = `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Map 1</th>
                        <th>Map 2</th>
                        <th>Map 3</th>
                    </tr>
                </thead>
                <tbody>
        `;

        items.forEach(item => {
            table += `
                <tr>
                    <td>${item.ID}</td>
                    <td>${item.Name}</td>
                    <td>${item.Cantidad}</td>
                    <td>${item.Mapa1}</td>
                    <td>${item.Mapa2}</td>
                    <td>${item.Mapa3}</td>
                </tr>
            `;
        });

        table += `
                </tbody>
            </table>
        `;

        modalBody.innerHTML = table;
    }
});
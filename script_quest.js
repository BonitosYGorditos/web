document.addEventListener('DOMContentLoaded', () => {
    const questData = {
        DirectoryItems: [
            { ID: 999, Name: 'Steel' }, { ID: 984, Name: 'Oridecon' }, { ID: 985, Name: 'Elunium' }, { ID: 998, Name: 'Iron' }, { ID: 7022, Name: 'Old Hit' }, { ID: 7024, Name: 'Bloody Edge' }, { ID: 7023, Name: 'Blade Lost in Darkness' },
            { ID: 995, Name: 'Mystic Frozen' }, { ID: 996, Name: 'Rough Wind' }, { ID: 1001, Name: 'Star Dust' }, { ID: 994, Name: 'Flame Heart' }, { ID: 7315, Name: 'Dark Crystal Fragment' }, { ID: 7047, Name: 'Alices Apron' },
            { ID: 7321, Name: 'Crystal Fragment' }, { ID: 7263, Name: 'Cats eye' }, { ID: 7439, Name: 'Fragment of Despair' }, { ID: 1059, Name: 'Fabric' }, { ID: 7069, Name: 'Destroyed armor' }, { ID: 7210, Name: 'Armor Piece of Dullahan' },
            { ID: 2517, Name: 'Valis Manteau' }, { ID: 7107, Name: 'Antelope Skin' }, { ID: 6020, Name: 'Fur' }, { ID: 7123, Name: 'Dragon Skin' }, { ID: 2405, Name: 'Boots' }, { ID: 7190, Name: 'Solid Husk' },
            { ID: 34503, Name: 'Drowned Wasabi' }, { ID: 34505, Name: 'Natural Wasabi' }, { ID: 34507, Name: 'Tornado Wasabi' }, { ID: 34510, Name: 'Fissure Wasabi' }, { ID: 34502, Name: 'Burned Wasabi' }, { ID: 34506, Name: 'Cursed Wasabi' }, { ID: 30508, Name: 'Toxic Wasabi' }, { ID: 34504, Name: 'Harrowing Wasabi' }, { ID: 34509, Name: 'Rotten Wasabi' }, { ID: 34511, Name: 'Heavenly Wasabi' },


        ],
        // Daggers
        PoleD: [
            { ID: 995, Name: 'Mystic Frozen', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 999, Name: 'Steel', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 984, Name: 'Oridecon', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7022, Name: 'Old Hit', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34503, Name: 'Drowned Wasabi', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        TornadoD: [
            { ID: 996, Name: 'Rough Wind', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 999, Name: 'Steel', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 984, Name: 'Oridecon', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7024, Name: 'Bloody Edge', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34507, Name: 'Tornado Wasabi', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        OverlandD: [
            { ID: 996, Name: 'Star Dust', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 999, Name: 'Steel', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 984, Name: 'Oridecon', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7023, Name: 'Blad Lost in Darkness', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34510, Name: 'Fissure Wasabi', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        WarmD: [
            { ID: 994, Name: 'Flame Heart', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 999, Name: 'Steel', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 984, Name: 'Oridecon', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7022, Name: 'Old Hit', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34502, Name: 'Burned Wasabi', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        ShadowD: [
            { ID: 7315, Name: 'Dark Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 999, Name: 'Steel', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 984, Name: 'Oridecon', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7024, Name: 'Bloody Edge', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34506, Name: 'Cursed Wasabi', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        GhostlyD: [
            { ID: 7047, Name: 'Alices Apron', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 999, Name: 'Steel', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 984, Name: 'Oridecon', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7023, Name: 'Blad Lost in Darkness', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34504, Name: 'Harrowing Wasabi', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        DeityD: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 999, Name: 'Steel', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 984, Name: 'Oridecon', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7022, Name: 'Old Hit', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34511, Name: 'Heavenly Wasabi', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        OriginalD: [
            { ID: 7263, Name: 'Cats Eye', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 999, Name: 'Steel', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 984, Name: 'Oridecon', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7024, Name: 'Bloody Edge', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34505, Name: 'Neutral Wasabi', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        ZombieD: [
            { ID: 7439, Name: 'Fragment of Despair', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 999, Name: 'Steel', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 984, Name: 'Oridecon', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7023, Name: 'Blad Lost in Darkness', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34509, Name: 'Rotten Wasabi', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        AlkaloidD: [
            { ID: 1059, Name: 'Fabric', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 999, Name: 'Steel', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 984, Name: 'Oridecon', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 70, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7022, Name: 'Old Hit', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 30508, Name: 'Toxic Wasabi', Cantidad: 5, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        // Armors
        WaterA: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7069, Name: 'Destroyed armor', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7210, Name: 'Armor Piece of Dullahan', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34503, Name: 'Drowned Wasabi', Cantidad: 3, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        WindA: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7069, Name: 'Destroyed armor', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7210, Name: 'Armor Piece of Dullahan', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34507, Name: 'Tornado Wasabi', Cantidad: 3, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        EarthA: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7069, Name: 'Destroyed armor', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7210, Name: 'Armor Piece of Dullahan', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34510, Name: 'Fissure Wasabi', Cantidad: 3, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        FireA: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7069, Name: 'Destroyed armor', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7210, Name: 'Armor Piece of Dullahan', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34502, Name: 'Burned Wasabi', Cantidad: 3, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        ShadowA: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7069, Name: 'Destroyed armor', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7210, Name: 'Armor Piece of Dullahan', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34506, Name: 'Cursed Wasabi', Cantidad: 3, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        GhostA: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7069, Name: 'Destroyed armor', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7210, Name: 'Armor Piece of Dullahan', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34504, Name: 'Harrowing Wasabi', Cantidad: 3, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        NeutralA: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7069, Name: 'Destroyed armor', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7210, Name: 'Armor Piece of Dullahan', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34511, Name: 'Heavenly Wasabi', Cantidad: 3, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        UndeadA: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7069, Name: 'Destroyed armor', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7210, Name: 'Armor Piece of Dullahan', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34505, Name: 'Neutral Wasabi', Cantidad: 3, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        VenomA: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7069, Name: 'Destroyed armor', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7210, Name: 'Armor Piece of Dullahan', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34509, Name: 'Rotten Wasabi', Cantidad: 3, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        // Garmets
        WaterG: [
            { ID: 2517, Name: 'Valis Manteau', Cantidad: 1, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7107, Name: 'Antelope Skin', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 6020, Name: 'Fur', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7123, Name: 'Dragon Skin', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34503, Name: 'Drowned Wasabi', Cantidad: 2, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        WindG: [
            { ID: 2517, Name: 'Valis Manteau', Cantidad: 1, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7107, Name: 'Antelope Skin', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 6020, Name: 'Fur', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7123, Name: 'Dragon Skin', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34507, Name: 'Tornado Wasabi', Cantidad: 2, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        EarthG: [
            { ID: 2517, Name: 'Valis Manteau', Cantidad: 1, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7107, Name: 'Antelope Skin', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 6020, Name: 'Fur', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7123, Name: 'Dragon Skin', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34510, Name: 'Fissure Wasabi', Cantidad: 2, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        FireG: [
            { ID: 2517, Name: 'Valis Manteau', Cantidad: 1, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7107, Name: 'Antelope Skin', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 6020, Name: 'Fur', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7123, Name: 'Dragon Skin', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34502, Name: 'Burned Wasabi', Cantidad: 2, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        ShadowG: [
            { ID: 2517, Name: 'Valis Manteau', Cantidad: 1, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7107, Name: 'Antelope Skin', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 6020, Name: 'Fur', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7123, Name: 'Dragon Skin', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34506, Name: 'Cursed Wasabi', Cantidad: 2, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        GhostG: [
            { ID: 2517, Name: 'Valis Manteau', Cantidad: 1, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7107, Name: 'Antelope Skin', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 6020, Name: 'Fur', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7123, Name: 'Dragon Skin', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34504, Name: 'Harrowing Wasabi', Cantidad: 2, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        NeutralG: [
            { ID: 2517, Name: 'Valis Manteau', Cantidad: 1, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7107, Name: 'Antelope Skin', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 6020, Name: 'Fur', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7123, Name: 'Dragon Skin', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34511, Name: 'Heavenly Wasabi', Cantidad: 2, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        UndeadG: [
            { ID: 2517, Name: 'Valis Manteau', Cantidad: 1, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7107, Name: 'Antelope Skin', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 6020, Name: 'Fur', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7123, Name: 'Dragon Skin', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34505, Name: 'Neutral Wasabi', Cantidad: 2, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        VenomG: [
            { ID: 2517, Name: 'Valis Manteau', Cantidad: 1, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7107, Name: 'Antelope Skin', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 6020, Name: 'Fur', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7123, Name: 'Dragon Skin', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34509, Name: 'Rotten Wasabi', Cantidad: 2, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        // Boots

        WaterA: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7069, Name: 'Destroyed armor', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7210, Name: 'Armor Piece of Dullahan', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34503, Name: 'Drowned Wasabi', Cantidad: 3, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        WindA: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7069, Name: 'Destroyed armor', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7210, Name: 'Armor Piece of Dullahan', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34507, Name: 'Tornado Wasabi', Cantidad: 3, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        EarthA: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7069, Name: 'Destroyed armor', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7210, Name: 'Armor Piece of Dullahan', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34510, Name: 'Fissure Wasabi', Cantidad: 3, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        FireA: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7069, Name: 'Destroyed armor', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7210, Name: 'Armor Piece of Dullahan', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34502, Name: 'Burned Wasabi', Cantidad: 3, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        ShadowA: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7069, Name: 'Destroyed armor', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7210, Name: 'Armor Piece of Dullahan', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34506, Name: 'Cursed Wasabi', Cantidad: 3, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        GhostA: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7069, Name: 'Destroyed armor', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7210, Name: 'Armor Piece of Dullahan', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34504, Name: 'Harrowing Wasabi', Cantidad: 3, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        NeutralA: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7069, Name: 'Destroyed armor', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7210, Name: 'Armor Piece of Dullahan', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34511, Name: 'Heavenly Wasabi', Cantidad: 3, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        UndeadA: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7069, Name: 'Destroyed armor', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7210, Name: 'Armor Piece of Dullahan', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34505, Name: 'Neutral Wasabi', Cantidad: 3, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        VenomA: [
            { ID: 7321, Name: 'Crystal Fragment', Cantidad: 100, Mapa1: 'Map X', Mapa2: 'Map Y', Mapa3: 'Map Z' },
            { ID: 7069, Name: 'Destroyed armor', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 7210, Name: 'Armor Piece of Dullahan', Cantidad: 50, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 985, Name: 'Elunium', Cantidad: 100, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' },
            { ID: 34509, Name: 'Rotten Wasabi', Cantidad: 3, Mapa1: 'Map A', Mapa2: 'Map B', Mapa3: 'Map C' }
        ],
        // Boots
    };


    const modal = document.getElementById('quest-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const showItemsBtn = document.getElementById('show-items-btn');
    const itemsTableBody = document.getElementById('items-table').querySelector('tbody');
    const multiplyItemsBtn = document.getElementById('multiply-items-btn');

    let currentItems = []; // To store the current items displayed

    // Open modal and populate table
    showItemsBtn.addEventListener('click', () => {
        const selectedQuests = Array.from(document.querySelectorAll('#quest-form input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value);
        const items = [];

        selectedQuests.forEach(quest => {
            if (questData[quest]) {
                items.push(...questData[quest]);
            }
        });

        if (items.length > 0) {
            currentItems = mergeItems(items); // Store the merged items
            renderTable(currentItems);
            modal.style.display = 'flex';
        } else {
            alert('No quests selected or no items to show.');
        }
    });

    // Close modal
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        itemsTableBody.innerHTML = '';
    });

    // Multiply items by 2
    multiplyItemsBtn.addEventListener('click', () => {
        const multipliedItems = currentItems.map(item => ({
            ...item,
            Cantidad: item.Cantidad * 2
        }));
        renderTable(multipliedItems);
    });

    // Merge items by ID and sum quantities
    function mergeItems(items) {
        const merged = {};

        items.forEach(item => {
            if (!merged[item.ID]) {
                merged[item.ID] = { ...item };
            } else {
                merged[item.ID].Cantidad += item.Cantidad;
            }
        });

        return Object.values(merged);
    }

    // Render the items table
    function renderTable(items) {
        itemsTableBody.innerHTML = ''; // Clear existing rows

        items.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.ID}</td>
                <td>${item.Name}</td>
                <td>${item.Cantidad}</td>
                <td>${item.Mapa1}</td>
                <td>${item.Mapa2}</td>
                <td>${item.Mapa3}</td>
            `;
            itemsTableBody.appendChild(row);
        });
    }
});

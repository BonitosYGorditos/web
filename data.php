<?php
if (isset($_GET['option'])) {
    $option = $_GET['option'];
    $items = [];

    // Genera datos según la opción seleccionada
    switch ($option) {
        case '1':
            $items = [
                ['ID' => 995, 'Name' => 'Mystic Frozen', 'Cantidad' => '100', 'Mapa1' => 'ice_dun03', 'Mapa2' => '', 'Mapa3' => ''],
                ['ID' => 34503, 'Name' => 'Wasabi abuita', 'Cantidad' => '5', 'Mapa1' => 'beach_dun2', 'Mapa2' => 'iz_dun01', 'Mapa3' => 'ice_dun02']
                
            ];
            break;
        case '2':
            $items = [
                ['ID' => 996, 'Name' => 'Rough Wind', 'Cantidad' => '100', 'Mapa1' => 'gl_step', 'Mapa2' => '', 'Mapa3' => ''],
                ['ID' => 34507, 'Name' => 'Wasabi Viento', 'Cantidad' => '5', 'Mapa1' => 'um_dun01', 'Mapa2' => 'dew_fild01', 'Mapa3' => 'bif_fild01']
            ];
            break;
        case '3':
            $items = [
                ['ID' => 1001, 'Name' => 'Star Dust', 'Cantidad' => '100', 'Mapa1' => 've_fild03', 'Mapa2' => '', 'Mapa3' => ''],
                ['ID' => 34503, 'Name' => 'Wasabi Tierra', 'Cantidad' => '5', 'Mapa1' => 'gef_fild05', 'Mapa2' => 'ma_fild01', 'Mapa3' => 'ein_dun01']
            ];
            break;
        case '4':
            $items = [
                ['ID' => 994, 'Name' => 'Flame Heart', 'Cantidad' => '100', 'Mapa1' => 'thor_v03', 'Mapa2' => '', 'Mapa3' => ''],
                ['ID' => 34503, 'Name' => 'Wasabi Fuego', 'Cantidad' => '5', 'Mapa1' => 've_fild02', 'Mapa2' => 'mag_dun02', 'Mapa3' => 'ra_fild03']
            ];
            break;
            
        case '5':
            $items = [
                ['ID' => 7315, 'Name' => 'Dark Crystal Fragment', 'Cantidad' => '100', 'Mapa1' => 'ein_dun02', 'Mapa2' => '', 'Mapa3' => ''],
                ['ID' => 34503, 'Name' => 'Wasabi Shadow', 'Cantidad' => '5', 'Mapa1' => 'nif_fild01', 'Mapa2' => 'kh_dun02', 'Mapa3' => 'yuno_fild05']
            ];
            break;
            
        case '6':
            $items = [
                ['ID' => 7047, 'Name' => 'Alices Apron', 'Cantidad' => '100', 'Mapa1' => 'tha_t03', 'Mapa2' => '', 'Mapa3' => ''],
                ['ID' => 34503, 'Name' => 'Wasabi Ghost', 'Cantidad' => '5', 'Mapa1' => 'gon_dun03', 'Mapa2' => 'bra_fild01', 'Mapa3' => 'man_fild03']
            ];
            break;
            
        case '7':
            $items = [
                ['ID' => 7321, 'Name' => 'Crystal Fragment', 'Cantidad' => '100', 'Mapa1' => 'ein_dun02', 'Mapa2' => '', 'Mapa3' => ''],
                ['ID' => 34503, 'Name' => 'Wasabi Holy', 'Cantidad' => '5', 'Mapa1' => 'spl_fild03', 'Mapa2' => 'odin_tem02', 'Mapa3' => 'ra_san04']
            ];
            break;
            
        case '8':
            $items = [
                ['ID' => 7263, 'Name' => 'Cats eye', 'Cantidad' => '100', 'Mapa1' => 'lou_dun03', 'Mapa2' => '', 'Mapa3' => ''],
                ['ID' => 34503, 'Name' => 'Wasabi Neutro', 'Cantidad' => '5', 'Mapa1' => 'tur_dun03', 'Mapa2' => 'ayo_dun02', 'Mapa3' => 'hu_fild05']
            ];
            break;
            
        case '9':
            $items = [
                ['ID' => 7439, 'Name' => 'Fragment of Despair', 'Cantidad' => '1001', 'Mapa1' => 'tha_t02', 'Mapa2' => '', 'Mapa3' => ''],
                ['ID' => 34503, 'Name' => 'Wasabi Undead', 'Cantidad' => '5', 'Mapa1' => 'lhz_fild03', 'Mapa2' => 'abbey01', 'Mapa3' => 'pay_dun02']
            ];
            break;
            
        case '10':
            $items = [
                ['ID' => 1059, 'Name' => 'Fabric', 'Cantidad' => '100', 'Mapa1' => 'gl_chyard', 'Mapa2' => '', 'Mapa3' => ''],
                ['ID' => 34503, 'Name' => 'Wasabi Poison', 'Cantidad' => '5', 'Mapa1' => 'ma_dun01', 'Mapa2' => 'prt_prison', 'Mapa3' => 'pay_fild05']
            ];
            break;
        default:
            $items = [];
    }

    // Devuelve los datos en formato JSON
    header('Content-Type: application/json');
    echo json_encode($items);
}
?>
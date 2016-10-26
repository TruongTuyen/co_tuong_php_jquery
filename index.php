<style>
    .wrapper{
        width: 500px;
        height: 500px;
        margin: auto;
    }
    
    .wrapper table{
        margin: auto;
    }
    
    .wrapper{
        position: relative;
    }
    
    .chess_broad{
        margin-top: 20px;
        width: 100%;
        background: url('chinese_chess.png') no-repeat;
        background-size: cover;
    }
</style>

<?php

$tot_den = array(
    'gia_tri' => 1,
    'mau'     => 'den'
);
$tot_trang = array(
    'gia_tri' => 1,
    'mau'     => 'trang'
);

$si_den = array(
    'gia_tri' => 2,
    'mau'     => 'den'
);

$si_trang = array(
    'gia_tri' => 2,
    'mau'     => 'trang',
);

$tinh_den = array(
    'gia_tri' => 3,
    'mau'     => 'den',
);

$tinh_trang = array(
    'gia_tri' => 3,
    'mau'     => 'trang',
);

$ma_den = array(
    'gia_tri'  => 3,
    'mau'      => 'den' 
);

$ma_trang = array(
    'gia_tri'  => 4,
    'mau'      => 'trang' 
);

$ma_trang = array(
    'gia_tri'  => 4,
    'mau'      => 'trang' 
);

$phao_trang = array(
    'gia_tri'  => 5,
    'mau'      => 'trang' 
);

$phao_den = array(
    'gia_tri'  => 5,
    'mau'      => 'den' 
);

$xe_trang = array(
    'gia_tri'  => 6,
    'mau'      => 'trang' 
);

$xe_den = array(
    'gia_tri'  => 6,
    'mau'      => 'den' 
);

$tuong_trang = array(
    'gia_tri'  => 7,
    'mau'      => 'trang' 
);

$tuong_den = array(
    'gia_tri'  => 7,
    'mau'      => 'den' 
);

$trong = array(
    'gia_tri'   => 0,
    'mau'       => ''
);

$ban_co = array(
    $xe_trang, $ma_trang, $tinh_trang, $si_trang, $tuong_trang, $si_trang, $tinh_trang, $ma_trang, $xe_trang,
    $trong, $trong, $trong, $trong, $trong, $trong, $trong, $trong, $trong, 
    $trong, $phao_trang, $trong, $trong, $trong, $trong, $trong, $phao_trang, $trong,
    $tot_trang, $trong, $tot_trang, $trong, $tot_trang, $trong, $tot_trang, $trong, $tot_trang,
    $trong, $trong, $trong, $trong, $trong, $trong, $trong, $trong, $trong, 
    /** =============================================================== **/ 
    
    $trong, $trong, $trong, $trong, $trong, $trong, $trong, $trong, $trong, 
    $tot_den, $trong, $tot_den, $trong, $tot_den, $trong, $tot_den, $trong, $tot_den,
    $trong, $phao_den, $trong, $trong, $trong, $trong, $trong, $phao_den, $trong,
    $trong, $trong, $trong, $trong, $trong, $trong, $trong, $trong, $trong, 
    $xe_den, $ma_den, $tinh_den, $si_den, $tuong_den, $si_den, $tinh_den, $ma_den, $xe_den,
    
    
);

$ban_co_html = '<table class="chess_broad">';
    $ban_co_html .= '<tr>';
    $dem = 1;
    foreach( $ban_co as $value ){
        $ban_co_html .= "<td style='height:40px;width:40px;'>";
        if( $value['gia_tri'] != 0 ){
            $ban_co_html .= $value['gia_tri'];
        }
        $ban_co_html .= '</td>';
        
        if( $dem % 9 == 0 ){
            $ban_co_html .= '</tr><tr>';
        }
        $dem++;
    }
    
    $ban_co_html .= '</tr>';
$ban_co_html .="</table>";


echo "<div class=\"wrapper\">";
echo $ban_co_html;
echo "</div>";


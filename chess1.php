<style type="text/css">
    .main-wrapper{
        position: relative;
        margin: auto;
        width: 380px;
        height:424px;
    }
    
    .bg_banco{
        width: 340px;
        height: 384px;
        position: absolute;
        top: 20px;
        left: 20px;
        background: url('chinese_chess.png') no-repeat;
        background-size: cover;
        z-index: -5;
    }
    .ban_co{
        z-index: 100;
        border:  none;
    }
    
    .wrap_banco{
        padding: 10px;
        background: url('chinese_chess.png') no-repeat;
    }
    .o_co{
        /** padding: 10px 15px; **/
        text-align:center;
        /** border: 1px solid #000; **/
        border: none;
        border-radius: 100%;
        width: 40px;
        height: 40px;
        font-size: 0;
    }
    .o_co_hop_le.to{
        background-color: #f39c12!important;
        
    }
    
    .o_co_hop_le{
        background-color: #d35400!important;
        visibility: visible!important;
        cursor: pointer;
        border-radius: 0!important;
    }
    
    .o_co_selected,.current_selected{
        cursor:pointer; 
        background-color: #3498db!important;
        border-color: #3498db; 
        
    }
    .color_1{
        color: #fff;
        background-color: #000;
    }
    .color_2{
        color: #fff;
        background-color: red;
    }
    
    .color_0{
        visibility:hidden;
        border: none;
    }
    
    .quan_co_1_1{
        background: url( 'img/tot-den.png' ) no-repeat center center;
        background-size: cover;
        
    }
    
    .quan_co_5_1{
        background: url( 'img/phao-den.png' ) no-repeat center center;
        background-size: cover;
    }
    
    .quan_co_6_1{
        background: url( 'img/xe-den.png' ) no-repeat center center;
        background-size: cover;
    } 
    
    .quan_co_4_1{
        background: url( 'img/ma-den.png' ) no-repeat center center;
        background-size: cover;
    } 
    
    .quan_co_3_1 {
        background: url( 'img/tinh-den.png' ) no-repeat center center;
        background-size: cover;
    }
    
    .quan_co_2_1 {
        background: url( 'img/si-den.png' ) no-repeat center center;
        background-size: cover;
    }
    
    .quan_co_7_1 {
        background: url( 'img/tuong-den.png' ) no-repeat center center;
        background-size: cover;
    }
    
    .quan_co_1_2 {
        background: url( 'img/tot-do.png' ) no-repeat center center;
        background-size: cover;
    }
    
    .quan_co_5_2 {
        background: url( 'img/phao-do.png' ) no-repeat center center;
        background-size: cover;
    }
    
    .quan_co_6_2{
        background: url( 'img/xe-do.png' ) no-repeat center center;
        background-size: cover;
    }
    
    .quan_co_4_2 {
        background: url( 'img/ma_do.png' ) no-repeat center center;
        background-size: cover;
    }
    
    .quan_co_3_2 {
        background: url( 'img/tinh-do.png' ) no-repeat center center;
        background-size: cover;
    }
    
    .quan_co_2_2 {
        background: url( 'img/si_do.png' ) no-repeat center center;
        background-size: cover;
    }
    
    .quan_co_7_2 {
        background: url( 'img/tuong-do.png' ) no-repeat center center;
        background-size: cover;
    }
    
    .tinh_nuoc_di{
        margin-top: 30px;
        text-align: center;
    }
    .tinh_nuoc_di a{
        text-align: center;
        padding: 7px; 
        background-color: #2980b9;
        color: #fff;
        display: inline-block;
        cursor: pointer;
    }
    
</style>
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="main.js"></script>
<?php
global $luot_di, $x_luot_di, $may;//Mau sac quan co cua computer

$quan_co = array( 
      6, 4, 3, 2, 7, 2, 3, 4, 6,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 5, 0, 0, 0, 0, 0, 5, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 5, 0, 0, 0, 0, 0, 5, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      6, 4, 3, 2, 7, 2, 3, 4, 6
);

$mau_sac = array(
      1, 1, 1, 1, 1, 1, 1, 1, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 0, 0, 0, 0, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      2, 0, 2, 0, 2, 0, 2, 0, 2,
      0, 2, 0, 0, 0, 0, 0, 2, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      2, 2, 2, 2, 2, 2, 2, 2, 2
);

echo "<div class='main-wrapper'>";
echo "<div class='bg_banco'></div>";
echo "<table class=\"ban_co\" data-luot_di=\"nguoi\" border=''>";

echo "<tbody>";
echo "<tr>";
$count =  1;

$ranh_gioi = "black";
foreach( $quan_co as $key=>$value ){
    $class = 'quan_co_' . $value . '_' . $mau_sac[$key];
    if( $key > 44 ){
        $ranh_gioi = "red";
    }
    
    echo "<td class=\"o_co {$class} color_{$mau_sac[$key]}\" data-ranhgioi=\"{$ranh_gioi}\" data-position=\"{$key}\" data-value=\"{$value}\" data-color=\"{$mau_sac[$key]}\"><span class=\"quan_co\">{$value}</span></td>";
    if( $count % 9 == 0 ){
        echo "</tr><tr>";
    }
    $count++;
}

echo "</tr>";
echo "</tbody>";

echo "</table>";
echo "<div class='tinh_nuoc_di enable'>
        <a>Tính nước đi</a>
        
        <div class='bang_ket_qua'>
            
        </div>
     </div>";
echo "</div>";


function KT_Cac_Nuoc_Co_The_Di( $quan_co, $mau_sac, $vi_tri_hien_tai ){
    $vi_tri_hop_le = array();
    
    
}

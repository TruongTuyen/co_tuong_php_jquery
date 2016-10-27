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
        padding: 10px 15px;
        border: 1px solid #000;
        border-radius: 100%;
    
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
echo "<table class=\"ban_co\" border=''>";

echo "<tbody>";
echo "<tr>";
$count =  1;

$ranh_gioi = "black";
foreach( $quan_co as $key=>$value ){
    if( $key > 44 ){
        $ranh_gioi = "red";
    }
    
    echo "<td class=\"o_co color_{$mau_sac[$key]}\" data-ranhgioi=\"{$ranh_gioi}\" data-position=\"{$key}\" data-value=\"{$value}\" data-color=\"{$mau_sac[$key]}\"><span class=\"quan_co\">{$value}</span></td>";
    if( $count % 9 == 0 ){
        echo "</tr><tr>";
    }
    $count++;
}

echo "</tr>";
echo "</tbody>";

echo "</table>";
echo "</div>";


function KT_Cac_Nuoc_Co_The_Di( $quan_co, $mau_sac, $vi_tri_hien_tai ){
    $vi_tri_hop_le = array();
    
    
}

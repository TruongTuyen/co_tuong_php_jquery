(function($){
    $(document).ready(function(){
        o_co_selected();
        //var luot_choi = 'may';
        function is_game_over(){
            var quan_tuong = $('.o_co[data-value="7"]');
            if( quan_tuong.length = 2 ){
                return false;
            }else{
                return true;
            }
        }
        
        /**
        function minimax( luot_choi, do_sau ){
            var tra_ve;
            
            console.log( 'Xet do sau: ' + do_sau );
            if( do_sau == 0 || is_game_over() ){
                console.log( 'best at depth 0' );
                tra_ve = { "best" : luong_gia(), "ban_dau" : "", "dich_toi" : "" };
                return tra_ve;
            }else{
                if( luot_choi == 'may' ){
                    console.log( 'luot may choi' );
                    //luot_choi = 'nguoi';
                    var best = -1.7976931348623157E+10308; //lay max
                    
                    var cac_nuoc_co_the_di_cua_may_tinh = tat_ca_cac_nuoc_co_the_di('may');
                    $.each(cac_nuoc_co_the_di_cua_may_tinh, function( k, v ){
                        
                        var vi_tri_bat_dau = v.vi_tri_bat_dau;
                        var vi_tri_toi     = v.vi_tri_toi;
                        if( vi_tri_bat_dau >= 0 && vi_tri_bat_dau <= 89 && vi_tri_toi >= 0 && vi_tri_toi <= 89 ){
                            
                            var dichuyen = di_chuyen( vi_tri_bat_dau, vi_tri_toi );
                            console.log( '-- di chuyen tu: ' +vi_tri_bat_dau+ '  --> ' + vi_tri_toi );
                            
                            
                            
                            var kq = minimax( 'nguoi', do_sau - 1 );
                            if( kq.best > best ){
                                best = kq.best;
                                tra_ve = { "best" : best, "ban_dau" : vi_tri_bat_dau,  "dich_toi" : vi_tri_toi };
                            }
                            di_chuyen( vi_tri_toi, vi_tri_bat_dau );
                            console.log( '-- di chuyen nguoc lai tu: ' + vi_tri_toi + ' --> ' + vi_tri_bat_dau );
                            if( dichuyen != true && dichuyen.position ){
                                console.log( 'khoi phuc o: ' + dichuyen.position );
                                khoi_phuc_quan_co_bi_an( dichuyen );
                            }
                        }
                    });
                    console.log( 'tra ve max' );
                    return tra_ve;
                    
                }else{
                    //luot_choi = 'may';
                    console.log( 'luot nguoi choi' );
                    var best = 1.7976931348623157E+10308; //lay min
                    var cac_nuoc_co_the_di_cua_nguoi_choi = tat_ca_cac_nuoc_co_the_di('nguoi');
                    $.each(cac_nuoc_co_the_di_cua_nguoi_choi, function( k, v ){
                        
                        var vi_tri_bat_dau = v.vi_tri_bat_dau;
                        var vi_tri_toi     = v.vi_tri_toi;
                        
                        if( vi_tri_bat_dau >= 0 && vi_tri_bat_dau <= 89 && vi_tri_toi >= 0 && vi_tri_toi <= 89 ){
                            
                            var dichuyen = di_chuyen( vi_tri_bat_dau, vi_tri_toi );
                            console.log( '-- di chuyen tu: ' +vi_tri_bat_dau+ '  --> ' + vi_tri_toi );
                            var kq = minimax( 'may', do_sau - 1 );
                            
                            if( kq.best < best ){
                                best = kq.best;
                                tra_ve = { "best" : best, "ban_dau" : vi_tri_bat_dau,  "dich_toi" : vi_tri_toi };
                            }
                            di_chuyen( vi_tri_toi , vi_tri_bat_dau );
                            console.log( '-- di chuyen nguoc lai tu: ' + vi_tri_toi + ' --> ' + vi_tri_bat_dau );
                            if( dichuyen != true && dichuyen.position ){
                                console.log( 'khoi phuc o: ' + dichuyen.position );
                                khoi_phuc_quan_co_bi_an( dichuyen );
                            }
                        }
                    });
                    console.log( 'tra ve min' );
                    return tra_ve;
                    
                }
                
            }
        } **/
        
        function minimax( luot_choi, do_sau ){
            var tra_ve;
            
            console.log( 'Xet do sau: ' + do_sau );
            if( do_sau == 0 || is_game_over() ){
                console.log( 'best at depth 0' );
                tra_ve = { "best" : luong_gia(), "ban_dau" : "", "dich_toi" : "" };
                return tra_ve;
            }else{
                if( luot_choi == 'may' ){
                    console.log( 'luot may choi' );
                    //luot_choi = 'nguoi';
                    var best = -1.7976931348623157E+10308; //lay max
                    
                    var cac_nuoc_co_the_di_cua_may_tinh = tat_ca_cac_nuoc_co_the_di('may');
                    $.each(cac_nuoc_co_the_di_cua_may_tinh, function( k, v ){
                        
                        var vi_tri_bat_dau = v.vi_tri_bat_dau;
                        var vi_tri_toi     = v.vi_tri_toi;
                        if( vi_tri_bat_dau >= 0 && vi_tri_bat_dau <= 89 && vi_tri_toi >= 0 && vi_tri_toi <= 89 ){
                            
                            var dichuyen = di_chuyen( vi_tri_bat_dau, vi_tri_toi );
                            console.log( '-- di chuyen tu: ' +vi_tri_bat_dau+ '  --> ' + vi_tri_toi );
                            
                            
                            
                            var kq = minimax( 'nguoi', do_sau - 1 );
                            if( kq.best > best ){
                                best = kq.best;
                                tra_ve = { "best" : best, "ban_dau" : vi_tri_bat_dau,  "dich_toi" : vi_tri_toi };
                            }
                            di_chuyen( vi_tri_toi, vi_tri_bat_dau );
                            console.log( '-- di chuyen nguoc lai tu: ' + vi_tri_toi + ' --> ' + vi_tri_bat_dau );
                            if( dichuyen != true && dichuyen.position ){
                                console.log( 'khoi phuc o: ' + dichuyen.position );
                                khoi_phuc_quan_co_bi_an( dichuyen );
                            }
                        }
                    });
                    console.log( 'tra ve max' );
                    return tra_ve;
                    
                }else{
                    //luot_choi = 'may';
                    console.log( 'luot nguoi choi' );
                    var best = 1.7976931348623157E+10308; //lay min
                    var cac_nuoc_co_the_di_cua_nguoi_choi = tat_ca_cac_nuoc_co_the_di('nguoi');
                    $.each(cac_nuoc_co_the_di_cua_nguoi_choi, function( k, v ){
                        
                        var vi_tri_bat_dau = v.vi_tri_bat_dau;
                        var vi_tri_toi     = v.vi_tri_toi;
                        
                        if( vi_tri_bat_dau >= 0 && vi_tri_bat_dau <= 89 && vi_tri_toi >= 0 && vi_tri_toi <= 89 ){
                            
                            var dichuyen = di_chuyen( vi_tri_bat_dau, vi_tri_toi );
                            console.log( '-- di chuyen tu: ' +vi_tri_bat_dau+ '  --> ' + vi_tri_toi );
                            var kq = minimax( 'may', do_sau - 1 );
                            
                            if( kq.best < best ){
                                best = kq.best;
                                tra_ve = { "best" : best, "ban_dau" : vi_tri_bat_dau,  "dich_toi" : vi_tri_toi };
                            }
                            di_chuyen( vi_tri_toi , vi_tri_bat_dau );
                            console.log( '-- di chuyen nguoc lai tu: ' + vi_tri_toi + ' --> ' + vi_tri_bat_dau );
                            if( dichuyen != true && dichuyen.position ){
                                console.log( 'khoi phuc o: ' + dichuyen.position );
                                khoi_phuc_quan_co_bi_an( dichuyen );
                            }
                        }
                    });
                    console.log( 'tra ve min' );
                    return tra_ve;
                    
                }
                
            }
        }
        
        
        function khoi_phuc_quan_co_bi_an( quan_co ){
            
            var khoi_phuc = $('[data-position='+quan_co.position+']');
            if( khoi_phuc.length > 0 ){
                console.log( 'tim thay o khoi phuc' );
            }else{
                console.log( 'khong tim thay o khoi phuc' );
            }
            $('.o_co').removeClass('o_co_hop_le');
            //khôi phục giá trị cũ
            khoi_phuc.attr( 'data-value', quan_co.value );
            khoi_phuc.attr( 'data-color', quan_co.color );
            khoi_phuc.attr( 'class', quan_co.classes );
            khoi_phuc.removeClass('current_selected');
            khoi_phuc.find('.quan_co').text( quan_co.value  );
            
            console.log( 'khoi phuc o: '+ quan_co.position +' trước khi bị ăn  value: '+ quan_co.value +'+ color: '+quan_co.color+'+ classes: '+ quan_co.classes);
        }
        
        function tat_ca_cac_nuoc_co_the_di( ben ){ //Tra ve tat ca danh sach cac nuoc co the di cua cac con co cua 1 ben may hoac nguoi choi
            var tat_ca_cac_nuoc = [];
            if( ben == 'may' ){//ben may đi 
                for( j=0; j<=89; j++ ){
                    var nuoc_di;
                    var quan_co = parseInt( $('[data-position='+j+']').attr( 'data-value' ) );
                    var mau_sac = parseInt( $('[data-position='+j+']').attr( 'data-color' ) );
                    
                    if( quan_co != 0 && mau_sac == 1 ){//quan mau den
                        var nuoc_di_hop_le = kt_nuoc_di_cho_may_tinh( quan_co, j );
                        $.each( nuoc_di_hop_le, function( k, v ) {
                            nuoc_di = { "vi_tri_bat_dau" : j, "vi_tri_toi" : v, "quan_co" : quan_co  };
                            tat_ca_cac_nuoc.push( nuoc_di );
                        });
                    } 
                    
                     
                }
            }else if( ben == 'nguoi' ){ //bên ng đi
                for( j=0; j<=89; j++ ){
                    var nuoc_di;
                    var quan_co = parseInt( $('[data-position='+j+']').attr( 'data-value' ) );
                    var mau_sac = parseInt( $('[data-position='+j+']').attr( 'data-color' ) );
                    
                    if( quan_co != 0 && mau_sac == 2 ){//quan mau den
                        var nuoc_di_hop_le = kt_nuoc_di_hop_le( quan_co, j );
                        $.each( nuoc_di_hop_le, function( k, v ) {
                            nuoc_di = { "vi_tri_bat_dau" : j, "vi_tri_toi" : v, "quan_co" : quan_co  };
                            tat_ca_cac_nuoc.push( nuoc_di );
                        });
                    }  
                }
            }
            return tat_ca_cac_nuoc;
        }
        
        function o_co_selected(){
            $('td.o_co').on('click', function(){
                var luot_di = $('.ban_co').attr( 'data-luot_di' );
                
                var that = $(this);
                var color = parseInt( that.attr( 'data-color' ) );
                var value = parseInt( that.attr( 'data-value' ) ); 
                
                if( luot_di == 'nguoi' ){ //Luot nguoi choi
                    
                    if( is_game_over() ){
                        alert( 'Kết thúc game!' );
                    }
                    
                    if( color == 2 && value != 0 ){
                        $('.o_co').removeClass('current_selected');
                        $('.o_co').removeClass('o_co_hop_le');
                        that.addClass('current_selected');
                        
                        var quan_co = parseInt( that.attr('data-value') );
                        var vi_tri  = parseInt( that.attr('data-position') );
                        var ds_nuoc_di = kt_nuoc_di_hop_le( quan_co, vi_tri );
                        
                        $.each(ds_nuoc_di, function(i, v){
                            var node = $('[data-position="'+v+'"]');
                            node.addClass( 'o_co_hop_le' );
                        });
                        
                    }else if( that.hasClass( 'o_co_hop_le' ) ){
                        var vi_tri_ban_dau = $('.current_selected').attr('data-position');
                        var vi_tri_dich    = that.attr('data-position');
                        
                        di_chuyen( vi_tri_ban_dau, vi_tri_dich );
                        $('.ban_co').attr( 'data-luot_di', 'may' );
                        
                        setTimeout(function(){
                            var best = minimax( 'may', 2 );
                            console.log( best );
                            console.log( 'xu ly di chuyen: di tu: '+  best.ban_dau+'-->' + best.dich_toi );
                            $('.ban_co').attr( 'data-luot_di', 'nguoi' );
                            di_chuyen( best.ban_dau, best.dich_toi );
                            if( is_game_over() ){
                                alert( 'Kết thúc game!' );
                            }
                        },500);
                        
                       
                    }   
                }
                /** else if( luot_di == 'may' ){ //Luot may choi
                    if( color == 1 && value != 0 ){
                        $('.o_co').removeClass('current_selected');
                        $('.o_co').removeClass('o_co_hop_le');
                        that.addClass('current_selected');
                        
                        var quan_co = parseInt( that.attr('data-value') );
                        var vi_tri  = parseInt( that.attr('data-position') );
                        var ds_nuoc_di = kt_nuoc_di_cho_may_tinh( quan_co, vi_tri );
                        
                        $.each(ds_nuoc_di, function(i, v){
                            var node = $('[data-position="'+v+'"]');
                            node.addClass( 'o_co_hop_le' );
                        });
                    }else if( that.hasClass( 'o_co_hop_le' ) ){
                        var vi_tri_ban_dau = $('.current_selected').attr('data-position');
                        var vi_tri_dich    = that.attr('data-position');
                        
                        di_chuyen( vi_tri_ban_dau, vi_tri_dich );
                        $('.ban_co').attr( 'data-luot_di', 'nguoi' );
                        
                    }  
                }**/
                
            }); 
        }
        
        function click_o_co(){
            $('.o_co').on('click', function(){
               var that = $(this);
               if( $(that).hasClass( 'o_co_hop_le' ) ){
                   var vi_tri_dich = parseInt( $(that).attr("data-position") );
                   var vi_tri_ban_dau = parseInt( $('.current_selected').attr('data-position') );
                   
                   di_chuyen( vi_tri_ban_dau, vi_tri_dich );//di chuyen quan co toi vi tri moi
               } 
            });
        }
        
        function di_chuyen( vi_tri_ban_dau, vi_tri_dich ){//di chuyen toi dich
            var vi_tri_ban_dau_value = parseInt( $('[data-position="'+vi_tri_ban_dau+'"]').attr('data-value') );
            var vi_tri_ban_dau_color = parseInt( $('[data-position="'+vi_tri_ban_dau+'"]').attr('data-color') );
            
            var quan_tai_dich_toi = parseInt( $('[data-position="'+vi_tri_dich+'"]').attr('data-value') );
            var mau_quan_tai_dich_toi = parseInt( $('[data-position="'+vi_tri_dich+'"]').attr('data-color') );
            var classes_css_quan_bi_an = $('[data-position="'+vi_tri_dich+'"]').attr('class');
            
            var ban_dau  = $('[data-position="'+vi_tri_ban_dau+'"]');
            var dich_toi = $('[data-position="'+vi_tri_dich+'"]');
            var vi_tri_ban_dau_classes = ban_dau.attr('class');
            
                   
            if( $('[data-position="'+vi_tri_dich+'"]').length > 0 ){
                $('.o_co').removeClass('o_co_hop_le');
                //Gan gia tri cho vi tri moi
                dich_toi.attr( 'data-value', vi_tri_ban_dau_value );
                dich_toi.attr( 'data-color', vi_tri_ban_dau_color );
                dich_toi.attr( 'class', vi_tri_ban_dau_classes );
                dich_toi.removeClass('current_selected');
                dich_toi.find('.quan_co').text( vi_tri_ban_dau_value );
                
                //Loai bo vi tri cu
                ban_dau.removeClass( 'current_selected' );
                ban_dau.attr( 'class', 'o_co color_0' );
                ban_dau.attr( 'data-value', 0 );
                ban_dau.attr( 'data-color', 0 );
                ban_dau.find( '.quan_co' ).text('');
                
            }
            
            if( quan_tai_dich_toi != 0 ){ //quan tai vi tri toi bi an bởi quan ở vị trí ban đầu
                
                var quan_bi_an = { "value": quan_tai_dich_toi, "color" : mau_quan_tai_dich_toi, "classes" : classes_css_quan_bi_an, "position" : vi_tri_dich };
                if( quan_tai_dich_toi == 7 && mau_quan_tai_dich_toi == 2 ){
                    //Quan do thua
                    $('.ban_co').addClass('nguoi_thua');
                }
                
                if( quan_tai_dich_toi == 7 && mau_quan_tai_dich_toi == 1 ){
                    //Quan den thua
                    $('.ban_co').addClass('may_thua');
                }
                return quan_bi_an;
            }
            return true;
        }
        
        
        function kt_nuoc_di_hop_le( quan_co, vi_tri_hien_tai ){
            var vi_tri_co_the_di = [];
            switch(quan_co) {
                case 6 : //Xet cac nuoc co the di cho quan xe
                    //Xet cac nuoc di ben trai
                    var xet_nuoc_ben_trai = vi_tri_hien_tai - 1;
                    while( parseInt(xet_nuoc_ben_trai/9) == parseInt(vi_tri_hien_tai/9) ){
                        if( xet_nuoc_ben_trai < 0 || xet_nuoc_ben_trai > 89 ){ break; }
                        //Neu nuoc nay co quan co cua ben minh => bi can
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+xet_nuoc_ben_trai+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+xet_nuoc_ben_trai+'"]').attr('data-color') ); //quan ta hay quan dich
                        if( quan_co_tai_vi_tri_toi == 2 && gia_tri_vitri_toi != 0 ){
                            break;
                        }
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( xet_nuoc_ben_trai );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 2 ){
                                vi_tri_co_the_di.push( xet_nuoc_ben_trai );
                                break;
                            }
                        }
                        xet_nuoc_ben_trai--;
                    }
                    //Xet cac nuoc di ben phai
                    var xet_nuoc_ben_phai = vi_tri_hien_tai + 1;
                    while( parseInt(xet_nuoc_ben_phai/9) == parseInt(vi_tri_hien_tai/9) ){
                        if( xet_nuoc_ben_phai < 0 || xet_nuoc_ben_phai > 89 ){ break; }
                        //Neu nuoc nay co quan co cua ben minh => bi can
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+xet_nuoc_ben_phai+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+xet_nuoc_ben_phai+'"]').attr('data-color') ); //quan ta hay quan dich
                        if( quan_co_tai_vi_tri_toi == 2 && gia_tri_vitri_toi != 0 ){
                            break;
                        }
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( xet_nuoc_ben_phai );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 2 ){
                                vi_tri_co_the_di.push( xet_nuoc_ben_phai );
                                break;
                            }
                        }
                        xet_nuoc_ben_phai++;
                        
                    }
                    //xet cac nuoc di len tren
                    var xet_nuoc_len_tren = vi_tri_hien_tai - 9;
                    var boi_so = 1;
                    while( parseInt(xet_nuoc_len_tren/9) == parseInt(vi_tri_hien_tai/9) - boi_so ){
                        //Neu nuoc nay co quan co cua ben minh => bi can
                        if( xet_nuoc_len_tren < 0 || xet_nuoc_len_tren > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+xet_nuoc_len_tren+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+xet_nuoc_len_tren+'"]').attr('data-color') ); //quan ta hay quan dich
                        if( quan_co_tai_vi_tri_toi == 2 && gia_tri_vitri_toi != 0 ){
                            break;
                        }
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( xet_nuoc_len_tren );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 2 ){
                                vi_tri_co_the_di.push( xet_nuoc_len_tren );
                                break;
                            }
                        }
                        xet_nuoc_len_tren = xet_nuoc_len_tren - 9;
                        boi_so++;
                    }
                    //xet cac nuoc di xuong duoi
                    var xet_nuoc_xuong_duoi = vi_tri_hien_tai + 9;
                    var boi_so = 1;
                    while( parseInt(xet_nuoc_xuong_duoi/9) == parseInt(vi_tri_hien_tai/9) + boi_so ){
                        //Neu nuoc nay co quan co cua ben minh => bi can
                        if( xet_nuoc_xuong_duoi < 0 || xet_nuoc_xuong_duoi > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+xet_nuoc_xuong_duoi+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+xet_nuoc_xuong_duoi+'"]').attr('data-color') ); //quan ta hay quan dich
                        if( quan_co_tai_vi_tri_toi == 2 && gia_tri_vitri_toi != 0 ){
                            break;
                        }
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( xet_nuoc_xuong_duoi );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 2 ){
                                vi_tri_co_the_di.push( xet_nuoc_xuong_duoi );
                                break;
                            }
                        }
                        xet_nuoc_xuong_duoi = xet_nuoc_xuong_duoi + 9;
                        boi_so++;
                    }
                    break;
                    
                case 4 : //Xet cac nuoc di hop le cho quan ma
                    //Huong 1: sang trai 2 -> len tren 1
                    var huong_len_1 = vi_tri_hien_tai - 2;
                    var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 1)+'"]').attr('data-value') );
                    if( parseInt(huong_len_1/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                        if( huong_len_1 < 0 || huong_len_1 > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_1 - 9)+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_1 - 9)+'"]').attr('data-color') ); //quan ta hay quan dich
                        
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( huong_len_1 - 9 );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 2 ){
                                vi_tri_co_the_di.push( huong_len_1 - 9 );
                            }
                        }
                    }
                    //Huong 2: sang trai 2 -> xuong duoi 1
                    var huong_xuong_1 = vi_tri_hien_tai - 2;
                    var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 1)+'"]').attr('data-value') );
                    if( parseInt(huong_xuong_1/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                        if( huong_xuong_1 < 0 || huong_xuong_1 > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_1 + 9)+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_1 + 9)+'"]').attr('data-color') ); //quan ta hay quan dich
                        
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( huong_xuong_1 + 9 );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 2 ){
                                vi_tri_co_the_di.push( huong_xuong_1 + 9 );
                            }
                        }
                    }
                    
                    //Huong 3: sang phai 2 -> xuong duoi 1
                    var huong_xuong_2 = vi_tri_hien_tai + 2;
                    var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 1)+'"]').attr('data-value') );
                    if( parseInt(huong_xuong_2/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                        if( huong_xuong_2 < 0 || huong_xuong_2 > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_2 + 9)+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_2 + 9)+'"]').attr('data-color') ); //quan ta hay quan dich
                        
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( huong_xuong_2 + 9 );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 2 ){
                                vi_tri_co_the_di.push( huong_xuong_2 + 9 );
                            }
                        }
                    }
                    //Huong 4: sang phai 2 -> len tren 1
                    var huong_len_2 = vi_tri_hien_tai + 2;
                    var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 1)+'"]').attr('data-value') );
                    if( parseInt(huong_len_2/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                        if( huong_len_2 < 0 || huong_len_2 > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_2 - 9)+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_2 - 9)+'"]').attr('data-color') ); //quan ta hay quan dich
                        
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( huong_len_2 - 9 );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 2 ){
                                vi_tri_co_the_di.push( huong_len_2 - 9 );
                            }
                        }
                    }
                    
                    //Huong 5: len tren 2 -> sang trai 1
                    var huong_len_3 = vi_tri_hien_tai - 18;
                    var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 9)+'"]').attr('data-value') );
                    if( parseInt(huong_len_3/9) == (parseInt(vi_tri_hien_tai/9) - 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                        if( huong_len_3 < 0 || huong_len_3 > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_3 - 1)+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_3 - 1)+'"]').attr('data-color') ); //quan ta hay quan dich
                        
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( huong_len_3 - 1 );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 2 ){
                                vi_tri_co_the_di.push( huong_len_3 - 1 );
                            }
                        }
                    }
                    
                    //Huong 6: len tren 2 -> sang phai 1
                    var huong_len_4 = vi_tri_hien_tai - 18;
                    var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 9)+'"]').attr('data-value') );
                    if( parseInt(huong_len_4/9) == (parseInt(vi_tri_hien_tai/9) - 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                        if( huong_len_4 < 0 || huong_len_4 > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_4 + 1)+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_4 + 1)+'"]').attr('data-color') ); //quan ta hay quan dich
                        
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( huong_len_4 + 1 );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 2 ){
                                vi_tri_co_the_di.push( huong_len_4 + 1 );
                            }
                        }
                    }
                    
                    //Huong 7: xuong duoi 2 -> sang trai 1
                    var huong_xuong_3 = vi_tri_hien_tai + 18;
                    var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 9)+'"]').attr('data-value') );
                    if( parseInt(huong_xuong_3/9) == (parseInt(vi_tri_hien_tai/9) + 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                        if( huong_xuong_3 < 0 || huong_xuong_3 > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_3 - 1)+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_3 - 1)+'"]').attr('data-color') ); //quan ta hay quan dich
                        
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( huong_xuong_3 - 1 );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 2 ){
                                vi_tri_co_the_di.push( huong_xuong_3 - 1 );
                            }
                        }
                    }
                    
                    //Huong 8: xuong duoi 2 -> sang phai 1
                    var huong_xuong_4 = vi_tri_hien_tai + 18;
                    var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 9)+'"]').attr('data-value') );
                    if( parseInt(huong_xuong_4/9) == (parseInt(vi_tri_hien_tai/9) + 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                        if( huong_xuong_4 < 0 || huong_xuong_4 > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_4 + 1)+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_4 + 1)+'"]').attr('data-color') ); //quan ta hay quan dich
                        
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( huong_xuong_4 + 1 );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 2 ){
                                vi_tri_co_the_di.push( huong_xuong_4 + 1 );
                            }
                        }
                    }
                    break;
                case 3 : //xet cac nuoc di cho quan tinh
                    //cac vi tri hop le cho tinh do: 47, 51, 63, 67, 71, 83, 87
                    var quan_co_55 = parseInt( $('[data-position="55"]').attr('data-value') );
                    var quan_co_57 = parseInt( $('[data-position="57"]').attr('data-value') );
                    var quan_co_59 = parseInt( $('[data-position="59"]').attr('data-value') );
                    var quan_co_61 = parseInt( $('[data-position="61"]').attr('data-value') );
                    var quan_co_73 = parseInt( $('[data-position="73"]').attr('data-value') );
                    var quan_co_75 = parseInt( $('[data-position="75"]').attr('data-value') );
                    var quan_co_77 = parseInt( $('[data-position="77"]').attr('data-value') );
                    var quan_co_79 = parseInt( $('[data-position="79"]').attr('data-value') );
                    
                    switch( vi_tri_hien_tai ){
                        case 47 :
                            var quan_co_63 = parseInt( $('[data-position="63"]').attr('data-value') );
                            var quan_co_67 = parseInt( $('[data-position="67"]').attr('data-value') );
                            if( quan_co_55 == 0 ){
                                if( quan_co_63 == 0 ){
                                    vi_tri_co_the_di.push(63);
                                }else{
                                    var mau_quan_co_63 = parseInt( $('[data-position="63"]').attr('data-color') );
                                    if( mau_quan_co_63 != 2 ){
                                        vi_tri_co_the_di.push(63);
                                    }
                                }
                            }
                            
                            if( quan_co_57 == 0 ){
                                if( quan_co_67 == 0 ){
                                    vi_tri_co_the_di.push(67);
                                }else{
                                    var mau_quan_co_67 = parseInt( $('[data-position="67"]').attr('data-color') );
                                    if( mau_quan_co_67 != 2 ){
                                        vi_tri_co_the_di.push(67);
                                    }
                                }
                            }
                            
                            break;
                        case 51 :
                            var quan_co_71 = parseInt( $('[data-position="71"]').attr('data-value') );
                            var quan_co_67 = parseInt( $('[data-position="67"]').attr('data-value') );
                            if( quan_co_59 == 0 ){
                                if( quan_co_67 == 0 ){
                                    vi_tri_co_the_di.push(67);
                                }else{
                                    var mau_quan_co_67 = parseInt( $('[data-position="67"]').attr('data-color') );
                                    if( mau_quan_co_67 != 2 ){
                                        vi_tri_co_the_di.push(63);
                                    }
                                }
                            }
                            
                            if( quan_co_61 == 0 ){
                                if( quan_co_71 == 0 ){
                                    vi_tri_co_the_di.push(71);
                                }else{
                                    var mau_quan_co_71 = parseInt( $('[data-position="71"]').attr('data-color') );
                                    if( mau_quan_co_71 != 2 ){
                                        vi_tri_co_the_di.push(71);
                                    }
                                }
                            }
                            break;
                        case 63 :
                            var quan_co_47 = parseInt( $('[data-position="47"]').attr('data-value') );
                            var quan_co_83 = parseInt( $('[data-position="83"]').attr('data-value') );
                            if( quan_co_55 == 0 ){
                                if( quan_co_47 == 0 ){
                                    vi_tri_co_the_di.push(47);
                                }else{
                                    var mau_quan_co_47 = parseInt( $('[data-position="47"]').attr('data-color') );
                                    if( mau_quan_co_47 != 2 ){
                                        vi_tri_co_the_di.push(47);
                                    }
                                }
                            }
                            
                            if( quan_co_73 == 0 ){
                                if( quan_co_83 == 0 ){
                                    vi_tri_co_the_di.push(83);
                                }else{
                                    var mau_quan_co_83 = parseInt( $('[data-position="83"]').attr('data-color') );
                                    if( mau_quan_co_83 != 2 ){
                                        vi_tri_co_the_di.push(83);
                                    }
                                }
                            }
                            break;
                        case 67 :
                            var quan_co_47 = parseInt( $('[data-position="47"]').attr('data-value') );
                            var quan_co_51 = parseInt( $('[data-position="51"]').attr('data-value') );
                            var quan_co_83 = parseInt( $('[data-position="83"]').attr('data-value') );
                            var quan_co_87 = parseInt( $('[data-position="87"]').attr('data-value') );
                            
                            if( quan_co_57 == 0 ){
                                if( quan_co_47 == 0 ){
                                    vi_tri_co_the_di.push(47);
                                }else{
                                    var mau_quan_co_47 = parseInt( $('[data-position="47"]').attr('data-color') );
                                    if( mau_quan_co_47 != 2 ){
                                        vi_tri_co_the_di.push(47);
                                    }
                                }
                            }
                            
                            if( quan_co_59 == 0 ){
                                if( quan_co_51 == 0 ){
                                    vi_tri_co_the_di.push(51);
                                }else{
                                    var mau_quan_co_51 = parseInt( $('[data-position="51"]').attr('data-color') );
                                    if( mau_quan_co_51 != 2 ){
                                        vi_tri_co_the_di.push(51);
                                    }
                                }
                            }
                            if( quan_co_75 == 0 ){
                                if( quan_co_83 == 0 ){
                                    vi_tri_co_the_di.push(83);
                                }else{
                                    var mau_quan_co_83 = parseInt( $('[data-position="83"]').attr('data-color') );
                                    if( mau_quan_co_83 != 2 ){
                                        vi_tri_co_the_di.push(83);
                                    }
                                }
                            }
                            if( quan_co_77 == 0 ){
                                if( quan_co_87 == 0 ){
                                    vi_tri_co_the_di.push(87);
                                }else{
                                    var mau_quan_co_87 = parseInt( $('[data-position="87"]').attr('data-color') );
                                    if( mau_quan_co_87 != 2 ){
                                        vi_tri_co_the_di.push(87);
                                    }
                                }
                            }
                            break;
                        case 71 :
                            var quan_co_51 = parseInt( $('[data-position="51"]').attr('data-value') );
                            var quan_co_87 = parseInt( $('[data-position="87"]').attr('data-value') );
                            if( quan_co_61 == 0 ){
                                if( quan_co_51 == 0 ){
                                    vi_tri_co_the_di.push(51);
                                }else{
                                    var mau_quan_co_51 = parseInt( $('[data-position="51"]').attr('data-color') );
                                    if( mau_quan_co_51 != 2 ){
                                        vi_tri_co_the_di.push(51);
                                    }
                                }
                            }
                            
                            if( quan_co_79 == 0 ){
                                if( quan_co_87 == 0 ){
                                    vi_tri_co_the_di.push(87);
                                }else{
                                    var mau_quan_co_87 = parseInt( $('[data-position="87"]').attr('data-color') );
                                    if( mau_quan_co_87 != 2 ){
                                        vi_tri_co_the_di.push(87);
                                    }
                                }
                            }
                            break;
                        case 83 :
                            var quan_co_63 = parseInt( $('[data-position="63"]').attr('data-value') );
                            var quan_co_67 = parseInt( $('[data-position="67"]').attr('data-value') );
                            if( quan_co_73 == 0 ){
                                if( quan_co_63 == 0 ){
                                    vi_tri_co_the_di.push(63);
                                }else{
                                    var mau_quan_co_63 = parseInt( $('[data-position="63"]').attr('data-color') );
                                    if( mau_quan_co_63 != 2 ){
                                        vi_tri_co_the_di.push(63);
                                    }
                                }
                            }
                            
                            if( quan_co_75 == 0 ){
                                if( quan_co_67 == 0 ){
                                    vi_tri_co_the_di.push(67);
                                }else{
                                    var mau_quan_co_67 = parseInt( $('[data-position="67"]').attr('data-color') );
                                    if( mau_quan_co_67 != 2 ){
                                        vi_tri_co_the_di.push(67);
                                    }
                                }
                            }
                            break;
                        case 87 :
                            var quan_co_67 = parseInt( $('[data-position="67"]').attr('data-value') );
                            var quan_co_71 = parseInt( $('[data-position="71"]').attr('data-value') );
                            if( quan_co_77 == 0 ){
                                if( quan_co_67 == 0 ){
                                    vi_tri_co_the_di.push(67);
                                }else{
                                    var mau_quan_co_67 = parseInt( $('[data-position="67"]').attr('data-color') );
                                    if( mau_quan_co_67 != 2 ){
                                        vi_tri_co_the_di.push(67);
                                    }
                                }
                            }
                            
                            if( quan_co_79 == 0 ){
                                if( quan_co_71 == 0 ){
                                    vi_tri_co_the_di.push(71);
                                }else{
                                    var mau_quan_co_71 = parseInt( $('[data-position="71"]').attr('data-color') );
                                    if( mau_quan_co_71 != 2 ){
                                        vi_tri_co_the_di.push(71);
                                    }
                                }
                            }
                            break;
                    }
                    break;
                case 2 :
                    var quan_co_76 = parseInt( $('[data-position="76"]').attr('data-value') );
                    var mau_quan_co_76 = parseInt( $('[data-position="76"]').attr('data-color') );
                    switch( vi_tri_hien_tai ){
                        
                        case 66 :
                            if( quan_co_76 == 0 ){ //Khong co quan co nao nam o 76
                                vi_tri_co_the_di.push(76);
                            }else{ // ton tai quan co tai o 76
                                if( mau_quan_co_76 != 2 ){
                                    vi_tri_co_the_di.push(76);
                                }
                            }
                            break;
                        case 68 :
                            if( quan_co_76 == 0 ){ //Khong co quan co nao nam o 76
                                vi_tri_co_the_di.push(76);
                            }else{ // ton tai quan co tai o 76
                                if( mau_quan_co_76 != 2 ){
                                    vi_tri_co_the_di.push(76);
                                }
                            }
                            break;
                        case 76 :
                            var quan_co_66 = parseInt( $('[data-position="66"]').attr('data-value') );
                            var quan_co_68 = parseInt( $('[data-position="68"]').attr('data-value') ); 
                            var quan_co_84 = parseInt( $('[data-position="84"]').attr('data-value') );
                            var quan_co_86 = parseInt( $('[data-position="86"]').attr('data-value') );
                            
                            if( quan_co_66 == 0 ){
                                vi_tri_co_the_di.push(66);
                            }else{
                                var mau_quan_co_66 = parseInt( $('[data-position="66"]').attr('data-color') );
                                if( mau_quan_co_66 != 2 ){
                                    vi_tri_co_the_di.push(66);
                                }
                            }
                            
                            if( quan_co_68 == 0 ){
                                vi_tri_co_the_di.push(68);
                            }else{
                                var mau_quan_co_68 = parseInt( $('[data-position="68"]').attr('data-color') );
                                if( mau_quan_co_68 != 2 ){
                                    vi_tri_co_the_di.push(68);
                                }
                            }
                            
                            if( quan_co_86 == 0 ){
                                vi_tri_co_the_di.push(86);
                            }else{
                                var mau_quan_co_86 = parseInt( $('[data-position="86"]').attr('data-color') );
                                if( mau_quan_co_86 != 2 ){
                                    vi_tri_co_the_di.push(86);
                                }
                            }
                            
                            if( quan_co_84 == 0 ){
                                vi_tri_co_the_di.push(84);
                            }else{
                                var mau_quan_co_84 = parseInt( $('[data-position="84"]').attr('data-color') );
                                if( mau_quan_co_84 != 2 ){
                                    vi_tri_co_the_di.push(84);
                                }
                            }
                            
                            break;
                        case 84 :
                            if( quan_co_76 == 0 ){ //Khong co quan co nao nam o 76
                                vi_tri_co_the_di.push(76);
                            }else{ // ton tai quan co tai o 76
                                if( mau_quan_co_76 != 2 ){
                                    vi_tri_co_the_di.push(76);
                                }
                            }
                            break;
                        case 86 :
                            if( quan_co_76 == 0 ){ //Khong co quan co nao nam o 76
                                vi_tri_co_the_di.push(76);
                            }else{ // ton tai quan co tai o 76
                                if( mau_quan_co_76 != 2 ){
                                    vi_tri_co_the_di.push(76);
                                }
                            }
                            break;
                    }
                    
                    break;
                    
                case 7 : //xet cac nuoc co the di cho quan tuong
                    //cac o hop le: 66, 67, 68, 75, 76, 77, 84, 85, 86
                    //sang trai 1 nuoc
                    var sang_trai_1_nuoc = vi_tri_hien_tai - 1;
                    if( (parseInt(sang_trai_1_nuoc/9) == parseInt(vi_tri_hien_tai/9)) && ( sang_trai_1_nuoc == 66 || sang_trai_1_nuoc == 67 || sang_trai_1_nuoc == 68 || sang_trai_1_nuoc == 75 || sang_trai_1_nuoc == 76 || sang_trai_1_nuoc == 77|| sang_trai_1_nuoc == 84 || sang_trai_1_nuoc == 85 || sang_trai_1_nuoc == 86 ) ){
                        var quan_can = parseInt( $('[data-position="'+sang_trai_1_nuoc+'"]').attr('data-value') );
                        var mau_quan_can = parseInt( $('[data-position="'+sang_trai_1_nuoc+'"]').attr('data-color') );
                        
                        if( quan_can == 0 ){ //khong co quan can
                            vi_tri_co_the_di.push(sang_trai_1_nuoc);
                        }else{
                            if( mau_quan_can != 2 ){//quan can khong phai quan minh => co the an
                                vi_tri_co_the_di.push(sang_trai_1_nuoc);
                            }
                        }
                        
                    }
                    
                    //sang phai 1 nuoc
                    var sang_phai_1_nuoc = vi_tri_hien_tai + 1;
                    if( (parseInt(sang_phai_1_nuoc/9) == parseInt(vi_tri_hien_tai/9)) && ( sang_phai_1_nuoc == 66 || sang_phai_1_nuoc == 67 || sang_phai_1_nuoc == 68 || sang_phai_1_nuoc == 75 || sang_phai_1_nuoc == 76 || sang_phai_1_nuoc == 77|| sang_phai_1_nuoc == 84 || sang_phai_1_nuoc == 85 || sang_phai_1_nuoc == 86 ) ){
                        var quan_can = parseInt( $('[data-position="'+sang_phai_1_nuoc+'"]').attr('data-value') );
                        var mau_quan_can = parseInt( $('[data-position="'+sang_phai_1_nuoc+'"]').attr('data-color') );
                        
                        if( quan_can == 0 ){ //khong co quan can
                            vi_tri_co_the_di.push(sang_phai_1_nuoc);
                        }else{
                            if( mau_quan_can != 2 ){//quan can khong phai quan minh => co the an
                                vi_tri_co_the_di.push(sang_phai_1_nuoc);
                            }
                        }
                        
                    }
                    //len tren 1 nuoc
                    var len_tren_1_nuoc = vi_tri_hien_tai - 9;
                    if( (parseInt(len_tren_1_nuoc/9) == (parseInt(vi_tri_hien_tai/9) - 1) ) && ( len_tren_1_nuoc == 66 || len_tren_1_nuoc == 67 || len_tren_1_nuoc == 68 || len_tren_1_nuoc == 75 || len_tren_1_nuoc == 76 || len_tren_1_nuoc == 77|| len_tren_1_nuoc == 84 || len_tren_1_nuoc == 85 || len_tren_1_nuoc == 86 ) ){
                        var quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').attr('data-value') );
                        var mau_quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').attr('data-color') );
                        
                        if( quan_can == 0 ){ //khong co quan can
                            vi_tri_co_the_di.push(len_tren_1_nuoc);
                        }else{
                            if( mau_quan_can != 2 ){//quan can khong phai quan minh => co the an
                                vi_tri_co_the_di.push(len_tren_1_nuoc);
                            }
                        }
                        
                    }
                    //xuong duoi 1 nuoc
                    var xuong_duoi_1_nuoc = vi_tri_hien_tai + 9;
                    if( (parseInt(xuong_duoi_1_nuoc/9) == (parseInt(vi_tri_hien_tai/9) + 1) ) && ( xuong_duoi_1_nuoc == 66 || xuong_duoi_1_nuoc == 67 || xuong_duoi_1_nuoc == 68 || xuong_duoi_1_nuoc == 75 || xuong_duoi_1_nuoc == 76 || xuong_duoi_1_nuoc == 77|| xuong_duoi_1_nuoc == 84 || xuong_duoi_1_nuoc == 85 || xuong_duoi_1_nuoc == 86 ) ){
                        var quan_can = parseInt( $('[data-position="'+xuong_duoi_1_nuoc+'"]').attr('data-value') );
                        var mau_quan_can = parseInt( $('[data-position="'+xuong_duoi_1_nuoc+'"]').attr('data-color') );
                        
                        if( quan_can == 0 ){ //khong co quan can
                            vi_tri_co_the_di.push(xuong_duoi_1_nuoc);
                        }else{
                            if( mau_quan_can != 2 ){//quan can khong phai quan minh => co the an
                                vi_tri_co_the_di.push(xuong_duoi_1_nuoc);
                            }
                        }
                        
                        
                    }
                    
                    break;
                case 5 : //Xet cac nuoc co the di cho quan phao
                    //Xet cac nuoc di ben trai
                    console.log( 'xet phao do' );
                    var xet_nuoc_ben_trai = vi_tri_hien_tai - 1;
                    while( (parseInt(xet_nuoc_ben_trai/9) == parseInt(vi_tri_hien_tai/9)) ){
                        var quan_co_nuoc_ben_trai = parseInt( $('[data-position="'+xet_nuoc_ben_trai+'"]').attr('data-value') );
                        if( quan_co_nuoc_ben_trai == 0 ){ //vi tri dang xet la o trong
                            vi_tri_co_the_di.push( xet_nuoc_ben_trai );
                        }else{ //vi tri dang xet co quan co khac, vai tro nong phao
                            var ben_trai_quan_can = xet_nuoc_ben_trai -1;
                            while( (parseInt(ben_trai_quan_can/9) == parseInt(vi_tri_hien_tai/9)) ){
                                var quan_co_trai_quan_can = parseInt( $('[data-position="'+ben_trai_quan_can+'"]').attr('data-value') );
                                if( quan_co_trai_quan_can == 0 ){
                                    ben_trai_quan_can--;
                                    continue;
                                }else{
                                    var mau_quan_co_trai_quan_can = parseInt( $('[data-position="'+ben_trai_quan_can+'"]').attr('data-color') );
                                    if( mau_quan_co_trai_quan_can != 2 ){
                                        console.log('con co o: '+ ben_trai_quan_can+ ' co the an dc');
                                        vi_tri_co_the_di.push( ben_trai_quan_can );
                                        break;
                                    }
                                }
                            }
                            break;
                        }
                        xet_nuoc_ben_trai--;
                    }
                    //xet nuoc ben phai
                    var xet_nuoc_ben_phai = vi_tri_hien_tai + 1;
                    while( (parseInt(xet_nuoc_ben_phai/9) == parseInt(vi_tri_hien_tai/9)) ){
                        var quan_co_nuoc_ben_phai = parseInt( $('[data-position="'+xet_nuoc_ben_phai+'"]').attr('data-value') );
                        if( quan_co_nuoc_ben_phai == 0 ){ //vi tri dang xet la o trong
                            vi_tri_co_the_di.push( xet_nuoc_ben_phai );
                        }else{ //vi tri dang xet co quan co khac, vai tro nong phao
                            var ben_phai_quan_can = xet_nuoc_ben_phai +1;
                            while( (parseInt(ben_phai_quan_can/9) == parseInt(vi_tri_hien_tai/9)) ){
                                var quan_co_trai_quan_can = parseInt( $('[data-position="'+ben_phai_quan_can+'"]').attr('data-value') );
                                if( quan_co_trai_quan_can == 0 ){
                                    ben_phai_quan_can++;
                                    continue;
                                }else{
                                    var mau_quan_co_trai_quan_can = parseInt( $('[data-position="'+ben_phai_quan_can+'"]').attr('data-color') );
                                    if( mau_quan_co_trai_quan_can != 2 ){
                                        vi_tri_co_the_di.push( ben_phai_quan_can );
                                        break;
                                    }
                                }
                            }
                            break;
                        }
                        xet_nuoc_ben_phai++;
                    }
                    //xet nuoc len tren
                    var xet_nuoc_len_tren = vi_tri_hien_tai - 9;
                    var boi_so = 1;
                    while( (parseInt(xet_nuoc_len_tren/9) == (parseInt(vi_tri_hien_tai/9) - boi_so) ) ){
                        var quan_co_nuoc_ben_tren = parseInt( $('[data-position="'+xet_nuoc_len_tren+'"]').attr('data-value') );
                        if( quan_co_nuoc_ben_tren == 0 ){ //vi tri dang xet la o trong
                            vi_tri_co_the_di.push( xet_nuoc_len_tren );
                        }else{ //vi tri dang xet co quan co khac, vai tro nong phao
                            var ben_tren_quan_can = xet_nuoc_len_tren -9;
                            var boi_so_2 = 1;
                            while( (parseInt(ben_tren_quan_can/9) == (parseInt(xet_nuoc_len_tren/9) -boi_so_2 ) ) ){
                                if( ben_duoi_quan_can > 90 || ben_duoi_quan_can <= 0 ){ break; }
                                var quan_tren_quan_can = parseInt( $('[data-position="'+ben_tren_quan_can+'"]').attr('data-value') );
                                if( quan_tren_quan_can == 0 ){
                                    ben_tren_quan_can = ben_tren_quan_can - 9;
                                    boi_so_2++;
                                    continue;
                                }else{
                                    var mau_quan_tren_quan_can = parseInt( $('[data-position="'+ben_tren_quan_can+'"]').attr('data-color') );
                                    if( mau_quan_tren_quan_can != 2 ){
                                        vi_tri_co_the_di.push( ben_tren_quan_can );
                                        break;
                                    }
                                }
                                ben_tren_quan_can = ben_tren_quan_can - 9;
                                boi_so_2++;
                            }
                            break;
                        }
                        xet_nuoc_len_tren = xet_nuoc_len_tren - 9;
                        boi_so++;
                    }
                    //xet nuoc xuong duoi
                    var xet_nuoc_xuong_duoi = vi_tri_hien_tai + 9;
                    var boi_so = 1;
                    while( (parseInt(xet_nuoc_xuong_duoi/9) == (parseInt(vi_tri_hien_tai/9) + boi_so) ) ){
                        var quan_co_nuoc_ben_duoi = parseInt( $('[data-position="'+xet_nuoc_xuong_duoi+'"]').attr('data-value') );
                        if( quan_co_nuoc_ben_duoi == 0 ){ //vi tri dang xet la o trong
                            vi_tri_co_the_di.push( xet_nuoc_xuong_duoi );
                        }else{ //vi tri dang xet co quan co khac, vai tro nong phao
                            var ben_duoi_quan_can = xet_nuoc_xuong_duoi +9;
                            var boi_so_2 = 1;
                            while( (parseInt(ben_duoi_quan_can/9) == (parseInt(xet_nuoc_xuong_duoi/9) + boi_so_2 ) ) ){
                                if( ben_duoi_quan_can > 90 || ben_duoi_quan_can <= 0 ){ break; }
                                var quan_tren_quan_can = parseInt( $('[data-position="'+ben_duoi_quan_can+'"]').attr('data-value') );
                                if( quan_tren_quan_can == 0 ){
                                    ben_duoi_quan_can = ben_duoi_quan_can + 9;
                                    boi_so_2++;
                                    continue;
                                }else{
                                    var mau_quan_tren_quan_can = parseInt( $('[data-position="'+ben_duoi_quan_can+'"]').attr('data-color') );
                                    if( mau_quan_tren_quan_can != 2 ){
                                        vi_tri_co_the_di.push( ben_duoi_quan_can );
                                        break;
                                    }
                                }
                                ben_duoi_quan_can = ben_duoi_quan_can + 9;
                                boi_so_2++;
                            }
                            break;
                        }
                        xet_nuoc_xuong_duoi = xet_nuoc_xuong_duoi + 9;
                        boi_so++;
                    }
                    break;
                case 1 : //xet cac nuoc co the di cho quan tot
                    var ranhgioi = $('[data-position="'+vi_tri_hien_tai+'"]').data('ranhgioi');
                    if( vi_tri_hien_tai >= 45 && ranhgioi == 'red' ){ //tot do chua sang song => chi len 1 nuoc
                        var len_tren_1_nuoc = vi_tri_hien_tai - 9;
                        if( (parseInt(len_tren_1_nuoc/9) == (parseInt(vi_tri_hien_tai/9) - 1) ) ){
                            var quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').attr('data-value') );
                            var mau_quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').attr('data-color') );
                            
                            if( quan_can == 0 ){ //khong co quan can
                                vi_tri_co_the_di.push(len_tren_1_nuoc);
                            }else{
                                if( mau_quan_can != 2 ){//quan can khong phai quan minh => co the an
                                    vi_tri_co_the_di.push(len_tren_1_nuoc);
                                }
                            }
                        }
                        
                    }
                    
                    if( vi_tri_hien_tai < 45 && ranhgioi == 'black' ){ //tot sang song, co the di len 1, sang trai 1, sang phai 1
                        var sang_trai_1_nuoc = vi_tri_hien_tai - 1;
                        if( parseInt(sang_trai_1_nuoc/9) == parseInt(vi_tri_hien_tai/9) ) {
                            var quan_can = parseInt( $('[data-position="'+sang_trai_1_nuoc+'"]').attr('data-value') );
                            var mau_quan_can = parseInt( $('[data-position="'+sang_trai_1_nuoc+'"]').attr('data-color') );
                            
                            if( quan_can == 0 ){ //khong co quan can
                                vi_tri_co_the_di.push(sang_trai_1_nuoc);
                            }else{
                                if( mau_quan_can != 2 ){//quan can khong phai quan minh => co the an
                                    vi_tri_co_the_di.push(sang_trai_1_nuoc);
                                }
                            }
                            
                        }
                        
                        //sang phai 1 nuoc
                        var sang_phai_1_nuoc = vi_tri_hien_tai + 1;
                        if( parseInt(sang_phai_1_nuoc/9) == parseInt(vi_tri_hien_tai/9) ){
                            var quan_can = parseInt( $('[data-position="'+sang_phai_1_nuoc+'"]').attr('data-value') );
                            var mau_quan_can = parseInt( $('[data-position="'+sang_phai_1_nuoc+'"]').attr('data-color') );
                            
                            if( quan_can == 0 ){ //khong co quan can
                                vi_tri_co_the_di.push(sang_phai_1_nuoc);
                            }else{
                                if( mau_quan_can != 2 ){//quan can khong phai quan minh => co the an
                                    vi_tri_co_the_di.push(sang_phai_1_nuoc);
                                }
                            }
                            
                        }
                        //len tren 1 nuoc
                        var len_tren_1_nuoc = vi_tri_hien_tai - 9;
                        if( parseInt(len_tren_1_nuoc/9) == (parseInt(vi_tri_hien_tai/9) - 1) ){
                            var quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').attr('data-value') );
                            var mau_quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').attr('data-color') );
                            
                            if( quan_can == 0 ){ //khong co quan can
                                vi_tri_co_the_di.push(len_tren_1_nuoc);
                            }else{
                                if( mau_quan_can != 2 ){//quan can khong phai quan minh => co the an
                                    vi_tri_co_the_di.push(len_tren_1_nuoc);
                                }
                            }
                            
                        }
                    }
                    break;
                
            }
            
            return vi_tri_co_the_di;
        }
        
        //KT Nuoc di cho may tinh
        function kt_nuoc_di_cho_may_tinh( quan_co, vi_tri_hien_tai ){
            var vi_tri_co_the_di = [];
            switch(quan_co) {
                case 6 : //Xet cac nuoc co the di cho quan xe
                    //Xet cac nuoc di ben trai
                    var xet_nuoc_ben_trai = vi_tri_hien_tai - 1;
                    while( parseInt(xet_nuoc_ben_trai/9) == parseInt(vi_tri_hien_tai/9) ){
                        if( xet_nuoc_ben_trai < 0 || xet_nuoc_ben_trai > 89 ){ break; }
                        //Neu nuoc nay co quan co cua ben minh => bi can
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+xet_nuoc_ben_trai+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+xet_nuoc_ben_trai+'"]').attr('data-color') ); //quan ta hay quan dich
                        if( quan_co_tai_vi_tri_toi == 1 && gia_tri_vitri_toi != 0 ){
                            break;
                        }
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( xet_nuoc_ben_trai );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 1 ){
                                vi_tri_co_the_di.push( xet_nuoc_ben_trai );
                                break;
                            }
                        }
                        xet_nuoc_ben_trai--;
                    }
                    //Xet cac nuoc di ben phai
                    var xet_nuoc_ben_phai = vi_tri_hien_tai + 1;
                    while( parseInt(xet_nuoc_ben_phai/9) == parseInt(vi_tri_hien_tai/9) ){
                        if( xet_nuoc_ben_phai < 0 || xet_nuoc_ben_phai > 89 ){ break; }
                        //Neu nuoc nay co quan co cua ben minh => bi can
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+xet_nuoc_ben_phai+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+xet_nuoc_ben_phai+'"]').attr('data-color') ); //quan ta hay quan dich
                        if( quan_co_tai_vi_tri_toi == 1 && gia_tri_vitri_toi != 0 ){
                            break;
                        }
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( xet_nuoc_ben_phai );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 1 ){
                                vi_tri_co_the_di.push( xet_nuoc_ben_phai );
                                break;
                            }
                        }
                        xet_nuoc_ben_phai++;
                        
                    }
                    //xet cac nuoc di len tren
                    var xet_nuoc_len_tren = vi_tri_hien_tai - 9;
                    var boi_so = 1;
                    while( parseInt(xet_nuoc_len_tren/9) == parseInt(vi_tri_hien_tai/9) - boi_so ){
                        //Neu nuoc nay co quan co cua ben minh => bi can
                        if( xet_nuoc_len_tren < 0 || xet_nuoc_len_tren > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+xet_nuoc_len_tren+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+xet_nuoc_len_tren+'"]').attr('data-color') ); //quan ta hay quan dich
                        if( quan_co_tai_vi_tri_toi == 1 && gia_tri_vitri_toi != 0 ){
                            break;
                        }
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( xet_nuoc_len_tren );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 1 ){
                                vi_tri_co_the_di.push( xet_nuoc_len_tren );
                                break;
                            }
                        }
                        xet_nuoc_len_tren = xet_nuoc_len_tren - 9;
                        boi_so++;
                    }
                    //xet cac nuoc di xuong duoi
                    var xet_nuoc_xuong_duoi = vi_tri_hien_tai + 9;
                    var boi_so = 1;
                    while( parseInt(xet_nuoc_xuong_duoi/9) == parseInt(vi_tri_hien_tai/9) + boi_so ){
                        //Neu nuoc nay co quan co cua ben minh => bi can
                        if( xet_nuoc_xuong_duoi < 0 || xet_nuoc_xuong_duoi > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+xet_nuoc_xuong_duoi+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+xet_nuoc_xuong_duoi+'"]').attr('data-color') ); //quan ta hay quan dich
                        if( quan_co_tai_vi_tri_toi == 1 && gia_tri_vitri_toi != 0 ){
                            break;
                        }
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( xet_nuoc_xuong_duoi );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 1 ){
                                vi_tri_co_the_di.push( xet_nuoc_xuong_duoi );
                                break;
                            }
                        }
                        xet_nuoc_xuong_duoi = xet_nuoc_xuong_duoi + 9;
                        boi_so++;
                    }
                    break;
                    
                case 4 : //Xet cac nuoc di hop le cho quan ma
                    //Huong 1: sang trai 2 -> len tren 1
                    var huong_len_1 = vi_tri_hien_tai - 2;
                    var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 1)+'"]').attr('data-value') );
                    if( parseInt(huong_len_1/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                        if( huong_len_1 < 0 || huong_len_1 > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_1 - 9)+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_1 - 9)+'"]').attr('data-color') ); //quan ta hay quan dich
                        
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( huong_len_1 - 9 );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 1 ){
                                vi_tri_co_the_di.push( huong_len_1 - 9 );
                            }
                        }
                    }
                    //Huong 2: sang trai 2 -> xuong duoi 1
                    var huong_xuong_1 = vi_tri_hien_tai - 2;
                    var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 1)+'"]').attr('data-value') );
                    if( parseInt(huong_xuong_1/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                        if( huong_xuong_1 < 0 || huong_xuong_1 > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_1 + 9)+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_1 + 9)+'"]').attr('data-color') ); //quan ta hay quan dich
                        
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( huong_xuong_1 + 9 );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 1 ){
                                vi_tri_co_the_di.push( huong_xuong_1 + 9 );
                            }
                        }
                    }
                    
                    //Huong 3: sang phai 2 -> xuong duoi 1
                    var huong_xuong_2 = vi_tri_hien_tai + 2;
                    var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 1)+'"]').attr('data-value') );
                    if( parseInt(huong_xuong_2/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                        if( huong_xuong_2 < 0 || huong_xuong_2 > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_2 + 9)+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_2 + 9)+'"]').attr('data-color') ); //quan ta hay quan dich
                        
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( huong_xuong_2 + 9 );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 1 ){
                                vi_tri_co_the_di.push( huong_xuong_2 + 9 );
                            }
                        }
                    }
                    //Huong 4: sang phai 2 -> len tren 1
                    var huong_len_2 = vi_tri_hien_tai + 2;
                    var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 1)+'"]').attr('data-value') );
                    if( parseInt(huong_len_2/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                        if( huong_len_2 < 0 || huong_len_2 > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_2 - 9)+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_2 - 9)+'"]').attr('data-color') ); //quan ta hay quan dich
                        
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( huong_len_2 - 9 );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 1 ){
                                vi_tri_co_the_di.push( huong_len_2 - 9 );
                            }
                        }
                    }
                    
                    //Huong 5: len tren 2 -> sang trai 1
                    var huong_len_3 = vi_tri_hien_tai - 18;
                    var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 9)+'"]').attr('data-value') );
                    if( parseInt(huong_len_3/9) == (parseInt(vi_tri_hien_tai/9) - 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                        if( huong_len_3 < 0 || huong_len_3 > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_3 - 1)+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_3 - 1)+'"]').attr('data-color') ); //quan ta hay quan dich
                        
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( huong_len_3 - 1 );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 1 ){
                                vi_tri_co_the_di.push( huong_len_3 - 1 );
                            }
                        }
                    }
                    
                    //Huong 6: len tren 2 -> sang phai 1
                    var huong_len_4 = vi_tri_hien_tai - 18;
                    var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 9)+'"]').attr('data-value') );
                    if( parseInt(huong_len_4/9) == (parseInt(vi_tri_hien_tai/9) - 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                        if( huong_len_4 < 0 || huong_len_4 > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_4 + 1)+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_4 + 1)+'"]').attr('data-color') ); //quan ta hay quan dich
                        
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( huong_len_4 + 1 );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 1 ){
                                vi_tri_co_the_di.push( huong_len_4 + 1 );
                            }
                        }
                    }
                    
                    //Huong 7: xuong duoi 2 -> sang trai 1
                    var huong_xuong_3 = vi_tri_hien_tai + 18;
                    var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 9)+'"]').attr('data-value') );
                    if( parseInt(huong_xuong_3/9) == (parseInt(vi_tri_hien_tai/9) + 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                        if( huong_xuong_3 < 0 || huong_xuong_3 > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_3 - 1)+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_3 - 1)+'"]').attr('data-color') ); //quan ta hay quan dich
                        
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( huong_xuong_3 - 1 );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 1 ){
                                vi_tri_co_the_di.push( huong_xuong_3 - 1 );
                            }
                        }
                    }
                    
                    //Huong 8: xuong duoi 2 -> sang phai 1
                    var huong_xuong_4 = vi_tri_hien_tai + 18;
                    var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 9)+'"]').attr('data-value') );
                    if( parseInt(huong_xuong_4/9) == (parseInt(vi_tri_hien_tai/9) + 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                        if( huong_xuong_4 < 0 || huong_xuong_4 > 89 ){ break; }
                        var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_4 + 1)+'"]').attr('data-value') ); //o trong hay khong
                        var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_4 + 1)+'"]').attr('data-color') ); //quan ta hay quan dich
                        
                        if( gia_tri_vitri_toi == 0 ){
                            vi_tri_co_the_di.push( huong_xuong_4 + 1 );
                        }else{
                            if( quan_co_tai_vi_tri_toi != 1 ){
                                vi_tri_co_the_di.push( huong_xuong_4 + 1 );
                            }
                        }
                    }
                    break;
                case 3 : //xet cac nuoc di cho quan tinh
                    //cac vi tri hop le cho tinh do: 2, 6, 18, 22, 26, 38, 42
                    //Cac quan can
                    var quan_co_10 = parseInt( $('[data-position="10"]').attr('data-value') );
                    var quan_co_12 = parseInt( $('[data-position="12"]').attr('data-value') );
                    var quan_co_14 = parseInt( $('[data-position="14"]').attr('data-value') );
                    var quan_co_16 = parseInt( $('[data-position="16"]').attr('data-value') );
                    var quan_co_28 = parseInt( $('[data-position="28"]').attr('data-value') );
                    var quan_co_30 = parseInt( $('[data-position="30"]').attr('data-value') );
                    var quan_co_32 = parseInt( $('[data-position="32"]').attr('data-value') );
                    var quan_co_34 = parseInt( $('[data-position="34"]').attr('data-value') );
                    
                    switch( vi_tri_hien_tai ){
                        case 2 :
                            var quan_co_18 = parseInt( $('[data-position="18"]').attr('data-value') );
                            var quan_co_22 = parseInt( $('[data-position="22"]').attr('data-value') );
                            if( quan_co_10 == 0 ){
                                if( quan_co_18 == 0 ){
                                    vi_tri_co_the_di.push(18);
                                }else{
                                    var mau_quan_co_18 = parseInt( $('[data-position="18"]').attr('data-color') );
                                    if( mau_quan_co_18 != 1 ){
                                        vi_tri_co_the_di.push(18);
                                    }
                                }
                            }
                            
                            if( quan_co_12 == 0 ){
                                if( quan_co_22 == 0 ){
                                    vi_tri_co_the_di.push(22);
                                }else{
                                    var mau_quan_co_22 = parseInt( $('[data-position="22"]').attr('data-color') );
                                    if( mau_quan_co_22 != 1 ){
                                        vi_tri_co_the_di.push(22);
                                    }
                                }
                            }
                            
                            break;
                        case 6 :
                            var quan_co_22 = parseInt( $('[data-position="22"]').attr('data-value') );
                            var quan_co_26 = parseInt( $('[data-position="26"]').attr('data-value') );
                            if( quan_co_14 == 0 ){
                                if( quan_co_22 == 0 ){
                                    vi_tri_co_the_di.push(22);
                                }else{
                                    var mau_quan_co_22 = parseInt( $('[data-position="22"]').attr('data-color') );
                                    if( mau_quan_co_22 != 1 ){
                                        vi_tri_co_the_di.push(22);
                                    }
                                }
                            }
                            
                            if( quan_co_16 == 0 ){
                                if( quan_co_26 == 0 ){
                                    vi_tri_co_the_di.push(26);
                                }else{
                                    var mau_quan_co_26 = parseInt( $('[data-position="26"]').attr('data-color') );
                                    if( mau_quan_co_26 != 1 ){
                                        vi_tri_co_the_di.push(26);
                                    }
                                }
                            }
                            break;
                        case 18 :
                            var quan_co_2 = parseInt( $('[data-position="2"]').attr('data-value') );
                            var quan_co_38 = parseInt( $('[data-position="38"]').attr('data-value') );
                            if( quan_co_10 == 0 ){
                                if( quan_co_2 == 0 ){
                                    vi_tri_co_the_di.push(2);
                                }else{
                                    var mau_quan_co_2 = parseInt( $('[data-position="2"]').attr('data-color') );
                                    if( mau_quan_co_2 != 1 ){
                                        vi_tri_co_the_di.push(2);
                                    }
                                }
                            }
                            
                            if( quan_co_28 == 0 ){
                                if( quan_co_38 == 0 ){
                                    vi_tri_co_the_di.push(38);
                                }else{
                                    var mau_quan_co_38 = parseInt( $('[data-position="38"]').attr('data-color') );
                                    if( mau_quan_co_38 != 1 ){
                                        vi_tri_co_the_di.push(38);
                                    }
                                }
                            }
                            break;
                        case 22 :
                            var quan_co_2 = parseInt( $('[data-position="2"]').attr('data-value') );
                            var quan_co_6 = parseInt( $('[data-position="6"]').attr('data-value') );
                            var quan_co_38 = parseInt( $('[data-position="38"]').attr('data-value') );
                            var quan_co_42 = parseInt( $('[data-position="42"]').attr('data-value') );
                            
                            if( quan_co_12 == 0 ){
                                if( quan_co_2 == 0 ){
                                    vi_tri_co_the_di.push(2);
                                }else{
                                    var mau_quan_co_2 = parseInt( $('[data-position="2"]').attr('data-color') );
                                    if( mau_quan_co_2 != 1 ){
                                        vi_tri_co_the_di.push(2);
                                    }
                                }
                            }
                            
                            if( quan_co_14 == 0 ){
                                if( quan_co_6 == 0 ){
                                    vi_tri_co_the_di.push(6);
                                }else{
                                    var mau_quan_co_6 = parseInt( $('[data-position="6"]').attr('data-color') );
                                    if( mau_quan_co_6 != 1 ){
                                        vi_tri_co_the_di.push(6);
                                    }
                                }
                            }
                            if( quan_co_30 == 0 ){
                                if( quan_co_38 == 0 ){
                                    vi_tri_co_the_di.push(38);
                                }else{
                                    var mau_quan_co_38 = parseInt( $('[data-position="38"]').attr('data-color') );
                                    if( mau_quan_co_38 != 1 ){
                                        vi_tri_co_the_di.push(38);
                                    }
                                }
                            }
                            if( quan_co_32 == 0 ){
                                if( quan_co_42 == 0 ){
                                    vi_tri_co_the_di.push(42);
                                }else{
                                    var mau_quan_co_42 = parseInt( $('[data-position="42"]').attr('data-color') );
                                    if( mau_quan_co_42 != 1 ){
                                        vi_tri_co_the_di.push(42);
                                    }
                                }
                            }
                            break;
                        case 26 :
                            var quan_co_6 = parseInt( $('[data-position="6"]').attr('data-value') );
                            var quan_co_42 = parseInt( $('[data-position="42"]').attr('data-value') );
                            if( quan_co_16 == 0 ){
                                if( quan_co_6 == 0 ){
                                    vi_tri_co_the_di.push(6);
                                }else{
                                    var mau_quan_co_6 = parseInt( $('[data-position="6"]').attr('data-color') );
                                    if( mau_quan_co_6 != 1 ){
                                        vi_tri_co_the_di.push(6);
                                    }
                                }
                            }
                            
                            if( quan_co_34 == 0 ){
                                if( quan_co_42 == 0 ){
                                    vi_tri_co_the_di.push(42);
                                }else{
                                    var mau_quan_co_42 = parseInt( $('[data-position="42"]').attr('data-color') );
                                    if( mau_quan_co_42 != 1 ){
                                        vi_tri_co_the_di.push(42);
                                    }
                                }
                            }
                            break;
                        case 38 :
                            var quan_co_18 = parseInt( $('[data-position="18"]').attr('data-value') );
                            var quan_co_22 = parseInt( $('[data-position="22"]').attr('data-value') );
                            if( quan_co_28 == 0 ){
                                if( quan_co_18 == 0 ){
                                    vi_tri_co_the_di.push(18);
                                }else{
                                    var mau_quan_co_18 = parseInt( $('[data-position="18"]').attr('data-color') );
                                    if( mau_quan_co_18 != 1 ){
                                        vi_tri_co_the_di.push(18);
                                    }
                                }
                            }
                            
                            if( quan_co_30 == 0 ){
                                if( quan_co_22 == 0 ){
                                    vi_tri_co_the_di.push(22);
                                }else{
                                    var mau_quan_co_22 = parseInt( $('[data-position="22"]').attr('data-color') );
                                    if( mau_quan_co_22 != 1 ){
                                        vi_tri_co_the_di.push(22);
                                    }
                                }
                            }
                            break;
                        case 42 :
                            var quan_co_22 = parseInt( $('[data-position="22"]').attr('data-value') );
                            var quan_co_26 = parseInt( $('[data-position="26"]').attr('data-value') );
                            if( quan_co_32 == 0 ){
                                if( quan_co_22 == 0 ){
                                    vi_tri_co_the_di.push(22);
                                }else{
                                    var mau_quan_co_22 = parseInt( $('[data-position="22"]').attr('data-color') );
                                    if( mau_quan_co_22 != 1 ){
                                        vi_tri_co_the_di.push(22);
                                    }
                                }
                            }
                            
                            if( quan_co_34 == 0 ){
                                if( quan_co_26 == 0 ){
                                    vi_tri_co_the_di.push(26);
                                }else{
                                    var mau_quan_co_26 = parseInt( $('[data-position="26"]').attr('data-color') );
                                    if( mau_quan_co_26 != 1 ){
                                        vi_tri_co_the_di.push(26);
                                    }
                                }
                            }
                            break;
                    }
                    break;
                case 2 :
                    var quan_co_13 = parseInt( $('[data-position="13"]').attr('data-value') );
                    var mau_quan_co_13 = parseInt( $('[data-position="13"]').attr('data-color') );
                    switch( vi_tri_hien_tai ){
                        
                        case 3 :
                            if( quan_co_13 == 0 ){ //Khong co quan co nao nam o 13
                                vi_tri_co_the_di.push(13);
                            }else{ // ton tai quan co tai o 13
                                if( mau_quan_co_13 != 1 ){
                                    vi_tri_co_the_di.push(13);
                                }
                            }
                            break;
                        case 5 :
                            if( quan_co_13 == 0 ){ //Khong co quan co nao nam o 13
                                vi_tri_co_the_di.push(13);
                            }else{ // ton tai quan co tai o 13
                                if( mau_quan_co_13 != 1 ){
                                    vi_tri_co_the_di.push(13);
                                }
                            }
                            break;
                        case 13 :
                            var quan_co_3 = parseInt( $('[data-position="3"]').attr('data-value') );
                            var quan_co_5 = parseInt( $('[data-position="5"]').attr('data-value') ); 
                            var quan_co_21 = parseInt( $('[data-position="21"]').attr('data-value') );
                            var quan_co_23 = parseInt( $('[data-position="23"]').attr('data-value') );
                            
                            if( quan_co_3 == 0 ){
                                vi_tri_co_the_di.push(3);
                            }else{
                                var mau_quan_co_3 = parseInt( $('[data-position="3"]').attr('data-color') );
                                if( mau_quan_co_3 != 1 ){
                                    vi_tri_co_the_di.push(3);
                                }
                            }
                            
                            if( quan_co_5 == 0 ){
                                vi_tri_co_the_di.push(5);
                            }else{
                                var mau_quan_co_5 = parseInt( $('[data-position="5"]').attr('data-color') );
                                if( mau_quan_co_5 != 1 ){
                                    vi_tri_co_the_di.push(5);
                                }
                            }
                            
                            if( quan_co_21 == 0 ){
                                vi_tri_co_the_di.push(21);
                            }else{
                                var mau_quan_co_21 = parseInt( $('[data-position="21"]').attr('data-color') );
                                if( mau_quan_co_21 != 1 ){
                                    vi_tri_co_the_di.push(21);
                                }
                            }
                            
                            if( quan_co_23 == 0 ){
                                vi_tri_co_the_di.push(23);
                            }else{
                                var mau_quan_co_23 = parseInt( $('[data-position="23"]').attr('data-color') );
                                if( mau_quan_co_23 != 1 ){
                                    vi_tri_co_the_di.push(23);
                                }
                            }
                            
                            break;
                        case 21 :
                            if( quan_co_13 == 0 ){ //Khong co quan co nao nam o 13
                                vi_tri_co_the_di.push(13);
                            }else{ // ton tai quan co tai o 13
                                if( mau_quan_co_13 != 1 ){
                                    vi_tri_co_the_di.push(13);
                                }
                            }
                            break;
                        case 23 :
                            if( quan_co_13 == 0 ){ //Khong co quan co nao nam o 13
                                vi_tri_co_the_di.push(13);
                            }else{ // ton tai quan co tai o 13
                                if( mau_quan_co_13 != 1 ){
                                    vi_tri_co_the_di.push(13);
                                }
                            }
                            break;
                    }
                    
                    break;
                    
                case 7 : //xet cac nuoc co the di cho quan tuong
                    //cac o hop le: 3, 4, 5, 12, 13, 14, 21, 22, 23
                    //sang trai 1 nuoc
                    var sang_trai_1_nuoc = vi_tri_hien_tai - 1;
                    if( (parseInt(sang_trai_1_nuoc/9) == parseInt(vi_tri_hien_tai/9)) && ( sang_trai_1_nuoc == 3 || sang_trai_1_nuoc == 4 || sang_trai_1_nuoc == 5 || sang_trai_1_nuoc == 12 || sang_trai_1_nuoc == 13 || sang_trai_1_nuoc == 14|| sang_trai_1_nuoc == 21 || sang_trai_1_nuoc == 22 || sang_trai_1_nuoc == 23 ) ){
                        var quan_can = parseInt( $('[data-position="'+sang_trai_1_nuoc+'"]').attr('data-value') );
                        var mau_quan_can = parseInt( $('[data-position="'+sang_trai_1_nuoc+'"]').attr('data-color') );
                        
                        if( quan_can == 0 ){ //khong co quan can
                            vi_tri_co_the_di.push(sang_trai_1_nuoc);
                        }else{
                            if( mau_quan_can != 1 ){//quan can khong phai quan minh => co the an
                                vi_tri_co_the_di.push(sang_trai_1_nuoc);
                            }
                        }
                        
                    }
                    
                    //sang phai 1 nuoc
                    var sang_phai_1_nuoc = vi_tri_hien_tai + 1;
                    if( (parseInt(sang_phai_1_nuoc/9) == parseInt(vi_tri_hien_tai/9)) && ( sang_phai_1_nuoc == 3 || sang_phai_1_nuoc == 4 || sang_phai_1_nuoc == 5 || sang_phai_1_nuoc == 12 || sang_phai_1_nuoc == 13 || sang_phai_1_nuoc == 14|| sang_phai_1_nuoc == 21 || sang_phai_1_nuoc == 22 || sang_phai_1_nuoc == 23 ) ){
                        var quan_can = parseInt( $('[data-position="'+sang_phai_1_nuoc+'"]').attr('data-value') );
                        var mau_quan_can = parseInt( $('[data-position="'+sang_phai_1_nuoc+'"]').attr('data-color') );
                        
                        if( quan_can == 0 ){ //khong co quan can
                            vi_tri_co_the_di.push(sang_phai_1_nuoc);
                        }else{
                            if( mau_quan_can != 1 ){//quan can khong phai quan minh => co the an
                                vi_tri_co_the_di.push(sang_phai_1_nuoc);
                            }
                        }
                        
                    }
                    //len tren 1 nuoc
                    var len_tren_1_nuoc = vi_tri_hien_tai - 9;
                    if( (parseInt(len_tren_1_nuoc/9) == (parseInt(vi_tri_hien_tai/9) - 1) ) && ( len_tren_1_nuoc == 3 || len_tren_1_nuoc == 4 || len_tren_1_nuoc == 5 || len_tren_1_nuoc == 12 || len_tren_1_nuoc == 13 || len_tren_1_nuoc == 14|| len_tren_1_nuoc == 21 || len_tren_1_nuoc == 22 || len_tren_1_nuoc == 23 ) ){
                        var quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').attr('data-value') );
                        var mau_quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').attr('data-color') );
                        
                        if( quan_can == 0 ){ //khong co quan can
                            vi_tri_co_the_di.push(len_tren_1_nuoc);
                        }else{
                            if( mau_quan_can != 1 ){//quan can khong phai quan minh => co the an
                                vi_tri_co_the_di.push(len_tren_1_nuoc);
                            }
                        }
                        
                    }
                    //xuong duoi 1 nuoc
                    var xuong_duoi_1_nuoc = vi_tri_hien_tai + 9;
                    if( (parseInt(xuong_duoi_1_nuoc/9) == (parseInt(vi_tri_hien_tai/9) + 1) ) && ( xuong_duoi_1_nuoc == 3 || xuong_duoi_1_nuoc == 4 || xuong_duoi_1_nuoc == 5 || xuong_duoi_1_nuoc == 12 || xuong_duoi_1_nuoc == 13 || xuong_duoi_1_nuoc == 14|| xuong_duoi_1_nuoc == 21 || xuong_duoi_1_nuoc == 22 || xuong_duoi_1_nuoc == 23 ) ){
                        var quan_can = parseInt( $('[data-position="'+xuong_duoi_1_nuoc+'"]').attr('data-value') );
                        var mau_quan_can = parseInt( $('[data-position="'+xuong_duoi_1_nuoc+'"]').attr('data-color') );
                        
                        if( quan_can == 0 ){ //khong co quan can
                            vi_tri_co_the_di.push(xuong_duoi_1_nuoc);
                        }else{
                            if( mau_quan_can != 1 ){//quan can khong phai quan minh => co the an
                                vi_tri_co_the_di.push(xuong_duoi_1_nuoc);
                            }
                        }
                        
                        
                    }
                    
                    break;
                case 5 : //Xet cac nuoc co the di cho quan phao
                    //Xet cac nuoc di ben trai
                    var xet_nuoc_ben_trai = vi_tri_hien_tai - 1;
                    while( (parseInt(xet_nuoc_ben_trai/9) == parseInt(vi_tri_hien_tai/9)) ){
                        var quan_co_nuoc_ben_trai = parseInt( $('[data-position="'+xet_nuoc_ben_trai+'"]').attr('data-value') );
                        if( quan_co_nuoc_ben_trai == 0 ){ //vi tri dang xet la o trong
                            vi_tri_co_the_di.push( xet_nuoc_ben_trai );
                        }else{ //vi tri dang xet co quan co khac, vai tro nong phao
                            var ben_trai_quan_can = xet_nuoc_ben_trai -1;
                            while( (parseInt(ben_trai_quan_can/9) == parseInt(vi_tri_hien_tai/9)) ){
                                var quan_co_trai_quan_can = parseInt( $('[data-position="'+ben_trai_quan_can+'"]').attr('data-value') );
                                if( quan_co_trai_quan_can == 0 ){
                                    ben_trai_quan_can--;
                                    continue;
                                }else{
                                    var mau_quan_co_trai_quan_can = parseInt( $('[data-position="'+ben_trai_quan_can+'"]').attr('data-color') );
                                    if( mau_quan_co_trai_quan_can != 1 ){
                                        vi_tri_co_the_di.push( ben_trai_quan_can );
                                        break;
                                    }
                                }
                            }
                            break;
                        }
                        xet_nuoc_ben_trai--;
                    }
                    //xet nuoc ben phai
                    var xet_nuoc_ben_phai = vi_tri_hien_tai + 1;
                    while( (parseInt(xet_nuoc_ben_phai/9) == parseInt(vi_tri_hien_tai/9)) ){
                        var quan_co_nuoc_ben_phai = parseInt( $('[data-position="'+xet_nuoc_ben_phai+'"]').attr('data-value') );
                        if( quan_co_nuoc_ben_phai == 0 ){ //vi tri dang xet la o trong
                            vi_tri_co_the_di.push( xet_nuoc_ben_phai );
                        }else{ //vi tri dang xet co quan co khac, vai tro nong phao
                            var ben_phai_quan_can = xet_nuoc_ben_phai +1;
                            while( (parseInt(ben_phai_quan_can/9) == parseInt(vi_tri_hien_tai/9)) ){
                                var quan_co_trai_quan_can = parseInt( $('[data-position="'+ben_phai_quan_can+'"]').attr('data-value') );
                                if( quan_co_trai_quan_can == 0 ){
                                    ben_phai_quan_can++;
                                    continue;
                                }else{
                                    var mau_quan_co_trai_quan_can = parseInt( $('[data-position="'+ben_phai_quan_can+'"]').attr('data-color') );
                                    if( mau_quan_co_trai_quan_can != 1 ){
                                        vi_tri_co_the_di.push( ben_phai_quan_can );
                                        break;
                                    }
                                }
                            }
                            break;
                        }
                        xet_nuoc_ben_phai++;
                    }
                    //xet nuoc len tren
                    var xet_nuoc_len_tren = vi_tri_hien_tai - 9;
                    var boi_so = 1;
                    while( (parseInt(xet_nuoc_len_tren/9) == (parseInt(vi_tri_hien_tai/9) - boi_so) ) ){
                        var quan_co_nuoc_ben_tren = parseInt( $('[data-position="'+xet_nuoc_len_tren+'"]').attr('data-value') );
                        if( quan_co_nuoc_ben_tren == 0 ){ //vi tri dang xet la o trong
                            vi_tri_co_the_di.push( xet_nuoc_len_tren );
                        }else{ //vi tri dang xet co quan co khac, vai tro nong phao
                            var ben_tren_quan_can = xet_nuoc_len_tren -9;
                            var boi_so_2 = 1;
                            while( (parseInt(ben_tren_quan_can/9) == (parseInt(xet_nuoc_len_tren/9) -boi_so_2 ) ) ){
                                if( ben_duoi_quan_can > 90 || ben_duoi_quan_can <= 0 ){ break; }
                                var quan_tren_quan_can = parseInt( $('[data-position="'+ben_tren_quan_can+'"]').attr('data-value') );
                                if( quan_tren_quan_can == 0 ){
                                    ben_tren_quan_can = ben_tren_quan_can - 9;
                                    boi_so_2++;
                                    continue;
                                }else{
                                    var mau_quan_tren_quan_can = parseInt( $('[data-position="'+ben_tren_quan_can+'"]').attr('data-color') );
                                    if( mau_quan_tren_quan_can != 1 ){
                                        vi_tri_co_the_di.push( ben_tren_quan_can );
                                        break;
                                    }
                                }
                                ben_tren_quan_can = ben_tren_quan_can - 9;
                                boi_so_2++;
                            }
                            break;
                        }
                        xet_nuoc_len_tren = xet_nuoc_len_tren - 9;
                        boi_so++;
                    }
                    //xet nuoc xuong duoi
                    var xet_nuoc_xuong_duoi = vi_tri_hien_tai + 9;
                    var boi_so = 1;
                    while( (parseInt(xet_nuoc_xuong_duoi/9) == (parseInt(vi_tri_hien_tai/9) + boi_so) ) ){
                        var quan_co_nuoc_ben_duoi = parseInt( $('[data-position="'+xet_nuoc_xuong_duoi+'"]').attr('data-value') );
                        if( quan_co_nuoc_ben_duoi == 0 ){ //vi tri dang xet la o trong
                            vi_tri_co_the_di.push( xet_nuoc_xuong_duoi );
                        }else{ //vi tri dang xet co quan co khac, vai tro nong phao
                            var ben_duoi_quan_can = xet_nuoc_xuong_duoi +9;
                            var boi_so_2 = 1;
                            while( (parseInt(ben_duoi_quan_can/9) == (parseInt(xet_nuoc_xuong_duoi/9) + boi_so_2 ) ) ){
                                if( ben_duoi_quan_can > 90 || ben_duoi_quan_can <= 0 ){ break; }
                                var quan_tren_quan_can = parseInt( $('[data-position="'+ben_duoi_quan_can+'"]').attr('data-value') );
                                if( quan_tren_quan_can == 0 ){
                                    ben_duoi_quan_can = ben_duoi_quan_can + 9;
                                    boi_so_2++;
                                    continue;
                                }else{
                                    var mau_quan_tren_quan_can = parseInt( $('[data-position="'+ben_duoi_quan_can+'"]').attr('data-color') );
                                    if( mau_quan_tren_quan_can != 1 ){
                                        vi_tri_co_the_di.push( ben_duoi_quan_can );
                                        break;
                                    }
                                }
                                ben_duoi_quan_can = ben_duoi_quan_can + 9;
                                boi_so_2++;
                            }
                            break;
                        }
                        xet_nuoc_xuong_duoi = xet_nuoc_xuong_duoi + 9;
                        boi_so++;
                    }
                    break;
                case 1 : //xet cac nuoc co the di cho quan tot
                    var ranhgioi = $('[data-position="'+vi_tri_hien_tai+'"]').data('ranhgioi');
                    if( vi_tri_hien_tai <= 44 && ranhgioi == 'black' ){ //tot den chua sang song => chi len 1 nuoc
                        var len_tren_1_nuoc = vi_tri_hien_tai + 9;
                        if( (parseInt(len_tren_1_nuoc/9) == (parseInt(vi_tri_hien_tai/9) + 1) ) ){
                            var quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').attr('data-value') );
                            var mau_quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').attr('data-color') );
                            
                            if( quan_can == 0 ){ //khong co quan can
                                vi_tri_co_the_di.push(len_tren_1_nuoc);
                            }else{
                                if( mau_quan_can != 1 ){//quan can khong phai quan minh => co the an
                                    vi_tri_co_the_di.push(len_tren_1_nuoc);
                                }
                            }
                        }
                        
                    }
                    
                    if( vi_tri_hien_tai > 44 && ranhgioi == 'red' ){ //tot sang song, co the di len 1, sang trai 1, sang phai 1
                        var sang_trai_1_nuoc = vi_tri_hien_tai - 1;
                        if( parseInt(sang_trai_1_nuoc/9) == parseInt(vi_tri_hien_tai/9) ) {
                            var quan_can = parseInt( $('[data-position="'+sang_trai_1_nuoc+'"]').attr('data-value') );
                            var mau_quan_can = parseInt( $('[data-position="'+sang_trai_1_nuoc+'"]').attr('data-color') );
                            
                            if( quan_can == 0 ){ //khong co quan can
                                vi_tri_co_the_di.push(sang_trai_1_nuoc);
                            }else{
                                if( mau_quan_can != 1 ){//quan can khong phai quan minh => co the an
                                    vi_tri_co_the_di.push(sang_trai_1_nuoc);
                                }
                            }
                            
                        }
                        
                        //sang phai 1 nuoc
                        var sang_phai_1_nuoc = vi_tri_hien_tai + 1;
                        if( parseInt(sang_phai_1_nuoc/9) == parseInt(vi_tri_hien_tai/9) ){
                            var quan_can = parseInt( $('[data-position="'+sang_phai_1_nuoc+'"]').attr('data-value') );
                            var mau_quan_can = parseInt( $('[data-position="'+sang_phai_1_nuoc+'"]').attr('data-color') );
                            
                            if( quan_can == 0 ){ //khong co quan can
                                vi_tri_co_the_di.push(sang_phai_1_nuoc);
                            }else{
                                if( mau_quan_can != 1 ){//quan can khong phai quan minh => co the an
                                    vi_tri_co_the_di.push(sang_phai_1_nuoc);
                                }
                            }
                            
                        }
                        //len tren 1 nuoc
                        var len_tren_1_nuoc = vi_tri_hien_tai + 9;
                        if( parseInt(len_tren_1_nuoc/9) == (parseInt(vi_tri_hien_tai/9) + 1) ){
                            var quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').attr('data-value') );
                            var mau_quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').attr('data-color') );
                            
                            if( quan_can == 0 ){ //khong co quan can
                                vi_tri_co_the_di.push(len_tren_1_nuoc);
                            }else{
                                if( mau_quan_can != 1 ){//quan can khong phai quan minh => co the an
                                    vi_tri_co_the_di.push(len_tren_1_nuoc);
                                }
                            }
                            
                        }
                    }
                    break;
                
            }
            
            return vi_tri_co_the_di;
        }
        
        
        function luong_gia(){
            var i;
            var danh_gia = 0;
            for( i=0; i<90; i++ ){
                var quan_co = parseInt( $('[data-position="'+i+'"]').attr('data-value') );
                var mau_quan_co = parseInt( $('[data-position="'+i+'"]').attr('data-color') );
                var khu_vuc =  $('[data-position="'+i+'"]').attr('data-ranhgioi');
                if( quan_co == 7 ){
                    if( mau_quan_co == 1 ){
                        danh_gia = danh_gia - 1000;
                    }else if( mau_quan_co == 2 ){
                        danh_gia = danh_gia + 1000;
                    }
                    continue;
                }else if( quan_co == 6 ){
                    if( mau_quan_co == 1 ){
                        danh_gia = danh_gia - 90;
                    }else if( mau_quan_co == 2 ){
                        danh_gia = danh_gia + 90;
                    }
                    continue;
                }else  if( quan_co == 5 ){
                    if( mau_quan_co == 1 ){
                        danh_gia = danh_gia - 45;
                    }else if( mau_quan_co == 2 ){
                        danh_gia = danh_gia + 45;
                    }
                    continue;
                }else if( quan_co == 4 ){
                    if( mau_quan_co == 1 ){
                        danh_gia = danh_gia - 40;
                    }else if( mau_quan_co == 2 ){
                        danh_gia = danh_gia + 40;
                    }
                    continue;
                }else if( quan_co == 3 ){
                    if( mau_quan_co == 1 ){
                        danh_gia = danh_gia - 20;
                    }else if( mau_quan_co == 2 ){
                        danh_gia = danh_gia + 20;
                    }
                    continue;
                }else if( quan_co == 2 ){
                    if( mau_quan_co == 1 ){
                        danh_gia = danh_gia - 20;
                    }else if( mau_quan_co == 2 ){
                        danh_gia = danh_gia + 20;
                    }
                    continue;
                }else if( quan_co == 1 ){
                    
                    if( mau_quan_co == 1 ){ //tot den
                        if( khu_vuc == "red" ){ //tot den sang song
                            danh_gia = danh_gia - 20;
                        }else{
                            danh_gia = danh_gia - 10;
                        }
                    }
                    if( mau_quan_co == 2 ){ //tot do
                        if( khu_vuc == "black" ){
                            danh_gia = danh_gia + 20;
                            //console.log('tot sang song');
                        }else{
                            danh_gia = danh_gia + 10;
                            //console.log('tot chua sang song');
                        }
                        
                    }
                    continue;
                }
            }
            return danh_gia;
        }
        /**
        function minimax( do_sau, luot_choi ){
            if( do_sau == 0 ){
                return luong_gia();
            }
            var children = [];
            var i;
            if( luot_choi == 'may' ){ //Tim max
                var best = -1.7976931348623157E+10308;
                //sinh nuoc di cho tat ca cac nuoc cua may, luu vao children
                for( i=0; i<=89; i++ ){
                    var quan_co = parseInt( $('[data-position='+i+']').attr( 'data-value' ) );
                    var mau_sac = parseInt( $('[data-position='+i+']').attr( 'data-color' ) );
                    
                    if( quan_co != 0 && mau_sac == 1 ){//quan mau den
                        var ds_nuoc_di = kt_nuoc_di_cho_may_tinh( quan_co, i );
                        $.each( ds_nuoc_di, function(k,v){
                            //di thu nuoc v
                            var win = di_chuyen( i, v); // nuoc (*)
                            if( win ){
                                
                                //return luong_gia();
                               
                            }
                            var score = luong_gia();
                            //Tinh luong gia
                            //var score = minimax( do_sau - 1, 'nguoi' );
                            if( score > best  ){
                                best = score;
                            }
                            //di_chuyen(v, i);//phuc hoi nuoc (*)
                        } );
                    }
                }
                
                return best;
            }else if( luot_choi == 'nguoi' ){ //Tim min
                var best = 1.7976931348623157E+10308;
                for( i=0; i<=89; i++ ){
                    var quan_co = parseInt( $('[data-position='+i+']').attr( 'data-value' ) );
                    var mau_sac = parseInt( $('[data-position='+i+']').attr( 'data-color' ) );
                    
                    if( quan_co != 0 && mau_sac == 2 ){//quan mau den
                        var ds_nuoc_di = kt_nuoc_di_hop_le( quan_co, i );
                        $.each( ds_nuoc_di, function(){
                           //var score = minimax( do_sau - 1, 'may' );
                           //di_chuyen( i, v );
                           var score = luong_gia();
                           //di_chuyen( v, i );
                           
                           if( score < best ){
                                best = score;
                           }
                           return  best;
                            
                        });
                    }
                }
                
            }
        }
        **/
        
        
        
        /**
        function minimax2( do_sau ){
            var result = { "score" : "", "best_move" : ""};
            var luot_choi = $('.ban_co').attr( 'data-luot_di' );
            
            if( do_sau == 0 || is_game_over() ){
                result.score = luong_gia();
                result.best_move = "";
                return result;
            }else{
                if( luot_choi == 'may' ){
                    var best = -1.7976931348623157E+10308;
                    var best_move = "";
                    for( i=0; i<=89; i++ ){
                        var quan_co = parseInt( $('[data-position='+i+']').attr( 'data-value' ) );
                        var mau_sac = parseInt( $('[data-position='+i+']').attr( 'data-color' ) );
                        
                        if( quan_co != 0 && mau_sac == 1 ){//quan mau den
                            var ds_nuoc_di = kt_nuoc_di_cho_may_tinh( quan_co, i );
                            $.each( ds_nuoc_di, function(k,v){
                                var new_position = di_chuyen(i, v);
                                new_position = new_position.dich_toi;
                                var kq = minimax2( do_sau - 1 );
                                
                                if( kq.score > best ){
                                    best = kq.score;
                                    best_move = kq.best_move;
                                }
                                di_chuyen(v, i);
                            } );
                        }
                    }
                    result.score = best;
                    result.best_move = best_move;
                    $('.ban_co').attr( 'data-luot_di', 'nguoi' );
                    return result;
                }else{
                    var best = 1.7976931348623157E+10308;
                    var best_move = "";
                    for( i=0; i<=89; i++ ){
                        var quan_co = parseInt( $('[data-position='+i+']').attr( 'data-value' ) );
                        var mau_sac = parseInt( $('[data-position='+i+']').attr( 'data-color' ) );
                        
                        if( quan_co != 0 && mau_sac == 2 ){//quan mau den
                            var ds_nuoc_di = kt_nuoc_di_hop_le( quan_co, i );
                            $.each( ds_nuoc_di, function(k,v){
                                var new_position = di_chuyen(i, v);
                                new_position = new_position.dich_toi;
                                var kq = minimax2( do_sau - 1 );
                                
                                if( kq.score < best ){
                                    best = kq.score;
                                    best_move = kq.best_move;
                                }
                                di_chuyen(v, i);
                            } );
                        }
                    }
                    result.score = best;
                    result.best_move = best_move;
                    $('.ban_co').attr( 'data-luot_di', 'may' );
                    return result;
                }
            }
        }
        function minimax_old( do_sau ){
                console.log( 'tai do sau: ' + do_sau );
                if( do_sau == 0 ){
                    return luong_gia();
                }else{
                    if( luot_choi == 'may' ){
                        console.log( 'luot may choi' );
                        luot_choi = 'nguoi';
                        var best = -1.7976931348623157E+10308; //lay max
                        
                        for( i=0; i<=89; i++ ){
                            var quan_co = parseInt( $('[data-position='+i+']').attr( 'data-value' ) );
                            var mau_sac = parseInt( $('[data-position='+i+']').attr( 'data-color' ) );
                            
                            if( quan_co != 0 && mau_sac == 1 ){//quan mau den
                                var ds_nuoc_di = kt_nuoc_di_cho_may_tinh( quan_co, i );
                                $.each( ds_nuoc_di, function(k,v){
                                    console.log( 'v='+v+' -- i='+ i);
                                    console.log( 'tinh nuoc may tinh di k='+k);
                                    if( i >= 0 && i <= 89 ){
                                        var dichuyen = di_chuyen(i, v);
                                        if( dichuyen.position ){
                                            console.log( '-- o '+i+' an đc o: ' + v );
                                        }
                                        console.log( '-- di chuyen tu: ' + i + ' --> ' + v );
                                    }
                                    
                                    var kq = minimax( do_sau - 1 );
                                    if( kq > best ){
                                        best = kq;
                                    }
                                    if( i >= 0 && i <= 89 ){
                                        di_chuyen(v, i);
                                        console.log( '-- di chuyen nguoc lai tu: ' + v + ' --> ' + i );
                                        if( dichuyen != true && dichuyen.position ){
                                            console.log( 'khoi phuc o: ' + dichuyen.position );
                                            khoi_phuc_quan_co_bi_an( dichuyen );
                                        }
                                        
                                        
                                    }
                                    
                                    
                                } );
                            }
                        }
                        
                        return best;
                        //var best = 10000000000;
                        //var a = minimax( do_sau - 1 );
                    }else{
                        luot_choi = 'may';
                        console.log( 'luot nguoi choi' );
                        var best = 1.7976931348623157E+10308; //lay min
                       
                        for( j=0; j<=89; j++ ){
                            var quan_co = parseInt( $('[data-position='+j+']').attr( 'data-value' ) );
                            var mau_sac = parseInt( $('[data-position='+j+']').attr( 'data-color' ) );
                            
                            if( quan_co != 0 && mau_sac == 2 ){//quan mau den
                                var ds_nuoc_di = kt_nuoc_di_hop_le( quan_co, j );
                                $.each( ds_nuoc_di, function(k,v){
                                    console.log( 'tinh nuoc nguoi di k='+k);
                                    if( j>= 0 && j <= 89 ){
                                        var dichuyen = di_chuyen(j, v);
                                        if( dichuyen.position ){
                                            console.log( '-- o '+i+' an đc o: ' + v );
                                        }
                                        console.log( '-- di chuyen tu: ' + j + ' --> ' + v );
                                    }
                                    
                                    var kq = minimax( do_sau - 1 );
                                    if( kq < best ){
                                        best = kq;
                                    }
                                    if( j>= 0 && j <= 89 ){
                                        di_chuyen(v, j);
                                        console.log( '-- di chuyen nguoc lai tu: ' + v + ' --> ' + j );
                                        if( dichuyen != true && dichuyen.position ){
                                            console.log( 'khoi phuc o: ' + dichuyen.position );
                                            khoi_phuc_quan_co_bi_an( dichuyen );
                                        }
                                        
                                    }
                                    
                                } );
                            }
                        }
                        
                        return best;
                        
                    }
                    
                }
            }
        **/
    });
    
    
    
})(jQuery);
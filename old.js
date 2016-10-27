(function($){
    $(document).ready(function(){
        o_co_selected();
        //kt_nuoc_di_hop_le( 6, 48);
        kt_nuoc_di_hop_le( 6,48);
    });
    
    function o_co_selected(){
        $('.o_co[data-color="2"][data-value!="0"]').click(function(){
            var that = $(this);
            if( $(that).hasClass('current_selected') ){
                $(that).removeClass('current_selected');
            }else{
                $('.o_co[data-color="2"][data-value!="0"]').removeClass('current_selected');
                $(that).addClass('current_selected');
                nuoc_di_hop_le();
            }
            
        });
    }
    
    function nuoc_di_hop_le(){
        var vi_tri_hien_tai = $('.current_selected').data('position');
        var quan_co = $('.current_selected').data('value');
        console.log( 'vi tri hien tai: ' + vi_tri_hien_tai );
        //sinh_nuoc_di( 6, 84);
    }
    
    function kt_nuoc_di_hop_le( quan_co, vi_tri_hien_tai ){
        var vi_tri_co_the_di = [];
        switch(quan_co) {
            case 6 : //Xet cac nuoc co the di cho quan xe
                //Xet cac nuoc di ben trai
                var xet_nuoc_ben_trai = vi_tri_hien_tai - 1;
                while( parseInt(xet_nuoc_ben_trai/9) == parseInt(vi_tri_hien_tai/9) ){
                    //Neu nuoc nay co quan co cua ben minh => bi can
                    var mau_cua_o = $('[data-position="'+xet_nuoc_ben_trai+'"]').data('color');
                    if( mau_cua_o == "2" || mau_cua_o == 2 ){ 
                        break;
                    }
                    
                    //O nay la trong => them vao mang vi tri
                    vi_tri_co_the_di.push(xet_nuoc_ben_trai);
                    xet_nuoc_ben_trai--;
                    
                }
                //Xet cac nuoc di ben phai
                var xet_nuoc_ben_phai = vi_tri_hien_tai + 1;
                while( parseInt(xet_nuoc_ben_phai/9) == parseInt(xet_nuoc_ben_phai/9) ){
                    //Neu nuoc nay co quan co cua ben minh => bi can
                    var mau_cua_o = $('[data-position="'+xet_nuoc_ben_phai+'"]').data('color');
                    if( mau_cua_o == "2" || mau_cua_o == 2 ){ 
                        break;
                    }
                    
                    //O nay la trong => them vao mang vi tri
                    vi_tri_co_the_di.push(xet_nuoc_ben_phai);
                    xet_nuoc_ben_phai++;
                    
                }
                //xet cac nuoc di len tren
                var xet_nuoc_len_tren = vi_tri_hien_tai - 9;
                var boi_so = 1;
                while( parseInt(xet_nuoc_len_tren/9) == parseInt(vi_tri_hien_tai/9) - boi_so ){
                    //Neu nuoc nay co quan co cua ben minh => bi can
                    var mau_cua_o = $('[data-position="'+xet_nuoc_len_tren+'"]').data('color');
                    if( mau_cua_o == "2" || mau_cua_o == 2 ){ 
                        console.log('break');
                        break;
                    }
                    //O nay la trong => them vao mang vi tri
                    vi_tri_co_the_di.push(xet_nuoc_len_tren);
                    
                    xet_nuoc_len_tren = xet_nuoc_len_tren - 9;
                    boi_so++;
                }
                //xet cac nuoc di xuong duoi
                var xet_nuoc_xuong_duoi = vi_tri_hien_tai + 9;
                var boi_so = 1;
                while( parseInt(xet_nuoc_xuong_duoi/9) == parseInt(vi_tri_hien_tai/9) + boi_so ){
                    //Neu nuoc nay co quan co cua ben minh => bi can
                    var mau_cua_o = $('[data-position="'+xet_nuoc_xuong_duoi+'"]').data('color');
                    if( mau_cua_o == "2" || mau_cua_o == 2 ){ 
                        console.log('break');
                        break;
                    }
                    //O nay la trong => them vao mang vi tri
                    vi_tri_co_the_di.push(xet_nuoc_xuong_duoi);
                    
                    
                    xet_nuoc_xuong_duoi = xet_nuoc_xuong_duoi + 9;
                    boi_so++;
                }
                break;
                
            case 4 : //Xet cac nuoc di hop le cho quan ma
                //Huong 1: sang trai 2 -> len tren 1
                var huong_len_1 = vi_tri_hien_tai - 2;
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 1)+'"]').data('value') );
                if( parseInt(huong_len_1/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_1 - 9)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_1 - 9)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 1)+'"]').data('value') );
                if( parseInt(huong_xuong_1/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_1 + 9)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_1 + 9)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 1)+'"]').data('value') );
                if( parseInt(huong_xuong_2/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_2 + 9)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_2 + 9)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 1)+'"]').data('value') );
                if( parseInt(huong_len_2/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_2 - 9)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_2 - 9)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 9)+'"]').data('value') );
                if( parseInt(huong_len_3/9) == (parseInt(vi_tri_hien_tai/9) - 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_3 - 1)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_3 - 1)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 9)+'"]').data('value') );
                if( parseInt(huong_len_4/9) == (parseInt(vi_tri_hien_tai/9) - 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_4 + 1)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_4 + 1)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 9)+'"]').data('value') );
                if( parseInt(huong_xuong_3/9) == (parseInt(vi_tri_hien_tai/9) + 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_3 - 1)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_3 - 1)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 9)+'"]').data('value') );
                if( parseInt(huong_xuong_4/9) == (parseInt(vi_tri_hien_tai/9) + 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_4 + 1)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_4 + 1)+'"]').data('color') ); //quan ta hay quan dich
                    
                    if( gia_tri_vitri_toi == 0 ){
                        vi_tri_co_the_di.push( huong_xuong_4 + 1 );
                    }else{
                        if( quan_co_tai_vi_tri_toi != 2 ){
                            vi_tri_co_the_di.push( huong_xuong_4 + 1 );
                        }
                    }
                }
                break;
        }
        console.log( vi_tri_co_the_di );
        
    }
})(jQuery);


//===============> new 1 ======================//
(function($){
    $(document).ready(function(){
        o_co_selected();
        //kt_nuoc_di_hop_le( 6, 48);
        kt_nuoc_di_hop_le( 7,85 );
    });
    
    function o_co_selected(){
        $('.o_co[data-color="2"][data-value!="0"]').click(function(){
            var that = $(this);
            if( $(that).hasClass('current_selected') ){
                $(that).removeClass('current_selected');
            }else{
                $('.o_co[data-color="2"][data-value!="0"]').removeClass('current_selected');
                $(that).addClass('current_selected');
                nuoc_di_hop_le();
            }
            
        });
    }
    
    function nuoc_di_hop_le(){
        var vi_tri_hien_tai = $('.current_selected').data('position');
        var quan_co = $('.current_selected').data('value');
        console.log( 'vi tri hien tai: ' + vi_tri_hien_tai );
        //sinh_nuoc_di( 6, 84);
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
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+xet_nuoc_ben_trai+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+xet_nuoc_ben_trai+'"]').data('color') ); //quan ta hay quan dich
                    
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
                while( parseInt(xet_nuoc_ben_phai/9) == parseInt(xet_nuoc_ben_phai/9) ){
                    if( xet_nuoc_ben_phai < 0 || xet_nuoc_ben_phai > 89 ){ break; }
                    //Neu nuoc nay co quan co cua ben minh => bi can
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+xet_nuoc_ben_phai+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+xet_nuoc_ben_phai+'"]').data('color') ); //quan ta hay quan dich
                    
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
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+xet_nuoc_len_tren+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+xet_nuoc_len_tren+'"]').data('color') ); //quan ta hay quan dich
                    
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
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+xet_nuoc_xuong_duoi+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+xet_nuoc_xuong_duoi+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 1)+'"]').data('value') );
                if( parseInt(huong_len_1/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    if( huong_len_1 < 0 || huong_len_1 > 89 ){ break; }
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_1 - 9)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_1 - 9)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 1)+'"]').data('value') );
                if( parseInt(huong_xuong_1/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    if( huong_xuong_1 < 0 || huong_xuong_1 > 89 ){ break; }
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_1 + 9)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_1 + 9)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 1)+'"]').data('value') );
                if( parseInt(huong_xuong_2/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    if( huong_xuong_2 < 0 || huong_xuong_2 > 89 ){ break; }
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_2 + 9)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_2 + 9)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 1)+'"]').data('value') );
                if( parseInt(huong_len_2/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    if( huong_len_2 < 0 || huong_len_2 > 89 ){ break; }
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_2 - 9)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_2 - 9)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 9)+'"]').data('value') );
                if( parseInt(huong_len_3/9) == (parseInt(vi_tri_hien_tai/9) - 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    if( huong_len_3 < 0 || huong_len_3 > 89 ){ break; }
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_3 - 1)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_3 - 1)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 9)+'"]').data('value') );
                if( parseInt(huong_len_4/9) == (parseInt(vi_tri_hien_tai/9) - 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    if( huong_len_4 < 0 || huong_len_4 > 89 ){ break; }
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_4 + 1)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_4 + 1)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 9)+'"]').data('value') );
                if( parseInt(huong_xuong_3/9) == (parseInt(vi_tri_hien_tai/9) + 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    if( huong_xuong_3 < 0 || huong_xuong_3 > 89 ){ break; }
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_3 - 1)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_3 - 1)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 9)+'"]').data('value') );
                if( parseInt(huong_xuong_4/9) == (parseInt(vi_tri_hien_tai/9) + 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    if( huong_xuong_4 < 0 || huong_xuong_4 > 89 ){ break; }
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_4 + 1)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_4 + 1)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_co_55 = parseInt( $('[data-position="55"]').data('value') );
                var quan_co_57 = parseInt( $('[data-position="57"]').data('value') );
                var quan_co_59 = parseInt( $('[data-position="59"]').data('value') );
                var quan_co_61 = parseInt( $('[data-position="61"]').data('value') );
                var quan_co_73 = parseInt( $('[data-position="73"]').data('value') );
                var quan_co_75 = parseInt( $('[data-position="75"]').data('value') );
                var quan_co_77 = parseInt( $('[data-position="77"]').data('value') );
                var quan_co_79 = parseInt( $('[data-position="79"]').data('value') );
                
                switch( vi_tri_hien_tai ){
                    case 47 :
                        var quan_co_63 = parseInt( $('[data-position="63"]').data('value') );
                        var quan_co_67 = parseInt( $('[data-position="67"]').data('value') );
                        if( quan_co_55 == 0 ){
                            if( quan_co_63 == 0 ){
                                vi_tri_co_the_di.push(63);
                            }else{
                                var mau_quan_co_63 = parseInt( $('[data-position="63"]').data('color') );
                                if( mau_quan_co_63 != 2 ){
                                    vi_tri_co_the_di.push(63);
                                }
                            }
                        }
                        
                        if( quan_co_57 == 0 ){
                            if( quan_co_67 == 0 ){
                                vi_tri_co_the_di.push(67);
                            }else{
                                var mau_quan_co_67 = parseInt( $('[data-position="67"]').data('color') );
                                if( mau_quan_co_67 != 2 ){
                                    vi_tri_co_the_di.push(67);
                                }
                            }
                        }
                        
                        break;
                    case 51 :
                        var quan_co_71 = parseInt( $('[data-position="71"]').data('value') );
                        var quan_co_67 = parseInt( $('[data-position="67"]').data('value') );
                        if( quan_co_59 == 0 ){
                            if( quan_co_67 == 0 ){
                                vi_tri_co_the_di.push(67);
                            }else{
                                var mau_quan_co_67 = parseInt( $('[data-position="67"]').data('color') );
                                if( mau_quan_co_67 != 2 ){
                                    vi_tri_co_the_di.push(63);
                                }
                            }
                        }
                        
                        if( quan_co_61 == 0 ){
                            if( quan_co_71 == 0 ){
                                vi_tri_co_the_di.push(71);
                            }else{
                                var mau_quan_co_71 = parseInt( $('[data-position="71"]').data('color') );
                                if( mau_quan_co_71 != 2 ){
                                    vi_tri_co_the_di.push(71);
                                }
                            }
                        }
                        break;
                    case 63 :
                        var quan_co_47 = parseInt( $('[data-position="47"]').data('value') );
                        var quan_co_83 = parseInt( $('[data-position="83"]').data('value') );
                        if( quan_co_55 == 0 ){
                            if( quan_co_47 == 0 ){
                                vi_tri_co_the_di.push(47);
                            }else{
                                var mau_quan_co_47 = parseInt( $('[data-position="47"]').data('color') );
                                if( mau_quan_co_47 != 2 ){
                                    vi_tri_co_the_di.push(47);
                                }
                            }
                        }
                        
                        if( quan_co_73 == 0 ){
                            if( quan_co_83 == 0 ){
                                vi_tri_co_the_di.push(83);
                            }else{
                                var mau_quan_co_83 = parseInt( $('[data-position="83"]').data('color') );
                                if( mau_quan_co_83 != 2 ){
                                    vi_tri_co_the_di.push(83);
                                }
                            }
                        }
                        break;
                    case 67 :
                        var quan_co_47 = parseInt( $('[data-position="47"]').data('value') );
                        var quan_co_51 = parseInt( $('[data-position="51"]').data('value') );
                        var quan_co_83 = parseInt( $('[data-position="83"]').data('value') );
                        var quan_co_87 = parseInt( $('[data-position="87"]').data('value') );
                        
                        if( quan_co_57 == 0 ){
                            if( quan_co_47 == 0 ){
                                vi_tri_co_the_di.push(47);
                            }else{
                                var mau_quan_co_47 = parseInt( $('[data-position="47"]').data('color') );
                                if( mau_quan_co_47 != 2 ){
                                    vi_tri_co_the_di.push(47);
                                }
                            }
                        }
                        
                        if( quan_co_59 == 0 ){
                            if( quan_co_51 == 0 ){
                                vi_tri_co_the_di.push(51);
                            }else{
                                var mau_quan_co_51 = parseInt( $('[data-position="51"]').data('color') );
                                if( mau_quan_co_51 != 2 ){
                                    vi_tri_co_the_di.push(51);
                                }
                            }
                        }
                        if( quan_co_75 == 0 ){
                            if( quan_co_83 == 0 ){
                                vi_tri_co_the_di.push(83);
                            }else{
                                var mau_quan_co_83 = parseInt( $('[data-position="83"]').data('color') );
                                if( mau_quan_co_83 != 2 ){
                                    vi_tri_co_the_di.push(83);
                                }
                            }
                        }
                        if( quan_co_77 == 0 ){
                            if( quan_co_87 == 0 ){
                                vi_tri_co_the_di.push(87);
                            }else{
                                var mau_quan_co_87 = parseInt( $('[data-position="87"]').data('color') );
                                if( mau_quan_co_87 != 2 ){
                                    vi_tri_co_the_di.push(87);
                                }
                            }
                        }
                        break;
                    case 71 :
                        var quan_co_51 = parseInt( $('[data-position="51"]').data('value') );
                        var quan_co_87 = parseInt( $('[data-position="87"]').data('value') );
                        if( quan_co_61 == 0 ){
                            if( quan_co_51 == 0 ){
                                vi_tri_co_the_di.push(51);
                            }else{
                                var mau_quan_co_51 = parseInt( $('[data-position="51"]').data('color') );
                                if( mau_quan_co_51 != 2 ){
                                    vi_tri_co_the_di.push(51);
                                }
                            }
                        }
                        
                        if( quan_co_79 == 0 ){
                            if( quan_co_87 == 0 ){
                                vi_tri_co_the_di.push(87);
                            }else{
                                var mau_quan_co_87 = parseInt( $('[data-position="87"]').data('color') );
                                if( mau_quan_co_87 != 2 ){
                                    vi_tri_co_the_di.push(87);
                                }
                            }
                        }
                        break;
                    case 83 :
                        var quan_co_63 = parseInt( $('[data-position="63"]').data('value') );
                        var quan_co_67 = parseInt( $('[data-position="67"]').data('value') );
                        if( quan_co_73 == 0 ){
                            if( quan_co_63 == 0 ){
                                vi_tri_co_the_di.push(63);
                            }else{
                                var mau_quan_co_63 = parseInt( $('[data-position="63"]').data('color') );
                                if( mau_quan_co_63 != 2 ){
                                    vi_tri_co_the_di.push(63);
                                }
                            }
                        }
                        
                        if( quan_co_75 == 0 ){
                            if( quan_co_67 == 0 ){
                                vi_tri_co_the_di.push(67);
                            }else{
                                var mau_quan_co_67 = parseInt( $('[data-position="67"]').data('color') );
                                if( mau_quan_co_67 != 2 ){
                                    vi_tri_co_the_di.push(67);
                                }
                            }
                        }
                        break;
                    case 87 :
                        var quan_co_67 = parseInt( $('[data-position="67"]').data('value') );
                        var quan_co_71 = parseInt( $('[data-position="71"]').data('value') );
                        if( quan_co_77 == 0 ){
                            if( quan_co_67 == 0 ){
                                vi_tri_co_the_di.push(67);
                            }else{
                                var mau_quan_co_67 = parseInt( $('[data-position="67"]').data('color') );
                                if( mau_quan_co_67 != 2 ){
                                    vi_tri_co_the_di.push(67);
                                }
                            }
                        }
                        
                        if( quan_co_79 == 0 ){
                            if( quan_co_71 == 0 ){
                                vi_tri_co_the_di.push(71);
                            }else{
                                var mau_quan_co_71 = parseInt( $('[data-position="71"]').data('color') );
                                if( mau_quan_co_71 != 2 ){
                                    vi_tri_co_the_di.push(71);
                                }
                            }
                        }
                        break;
                }
                break;
            case 2 :
                var quan_co_76 = parseInt( $('[data-position="76"]').data('value') );
                var mau_quan_co_76 = parseInt( $('[data-position="76"]').data('color') );
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
                        var quan_co_66 = parseInt( $('[data-position="66"]').data('value') );
                        var quan_co_68 = parseInt( $('[data-position="68"]').data('value') ); 
                        var quan_co_84 = parseInt( $('[data-position="84"]').data('value') );
                        var quan_co_86 = parseInt( $('[data-position="86"]').data('value') );
                        
                        if( quan_co_66 == 0 ){
                            vi_tri_co_the_di.push(66);
                        }else{
                            var mau_quan_co_66 = parseInt( $('[data-position="66"]').data('color') );
                            if( mau_quan_co_66 != 2 ){
                                vi_tri_co_the_di.push(66);
                            }
                        }
                        
                        if( quan_co_68 == 0 ){
                            vi_tri_co_the_di.push(68);
                        }else{
                            var mau_quan_co_68 = parseInt( $('[data-position="68"]').data('color') );
                            if( mau_quan_co_68 != 2 ){
                                vi_tri_co_the_di.push(68);
                            }
                        }
                        
                        if( quan_co_86 == 0 ){
                            vi_tri_co_the_di.push(86);
                        }else{
                            var mau_quan_co_86 = parseInt( $('[data-position="86"]').data('color') );
                            if( mau_quan_co_86 != 2 ){
                                vi_tri_co_the_di.push(86);
                            }
                        }
                        
                        if( quan_co_84 == 0 ){
                            vi_tri_co_the_di.push(84);
                        }else{
                            var mau_quan_co_84 = parseInt( $('[data-position="84"]').data('color') );
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
                    var quan_can = parseInt( $('[data-position="'+sang_trai_1_nuoc+'"]').data('value') );
                    var mau_quan_can = parseInt( $('[data-position="'+sang_trai_1_nuoc+'"]').data('color') );
                    
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
                    var quan_can = parseInt( $('[data-position="'+sang_phai_1_nuoc+'"]').data('value') );
                    var mau_quan_can = parseInt( $('[data-position="'+sang_phai_1_nuoc+'"]').data('color') );
                    
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
                    var quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').data('value') );
                    var mau_quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').data('color') );
                    
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
                    var quan_can = parseInt( $('[data-position="'+xuong_duoi_1_nuoc+'"]').data('value') );
                    var mau_quan_can = parseInt( $('[data-position="'+xuong_duoi_1_nuoc+'"]').data('color') );
                    
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
                
                break;
            case 1 : //xet cac nuoc co the di cho quan tot
                
                break;
            
        }
        console.log( vi_tri_co_the_di );
        
    }
})(jQuery);

//======================= NEW 2 ==============================//
(function($){
    $(document).ready(function(){
        o_co_selected();
        //kt_nuoc_di_hop_le( 6, 48);
        kt_nuoc_di_hop_le( 1, 28);
    });
    
    function o_co_selected(){
        $('.o_co[data-color="2"][data-value!="0"]').click(function(){
            var that = $(this);
            if( $(that).hasClass('current_selected') ){
                $(that).removeClass('current_selected');
            }else{
                $('.o_co[data-color="2"][data-value!="0"]').removeClass('current_selected');
                $(that).addClass('current_selected');
                nuoc_di_hop_le();
            }
            
        });
    }
    
    function nuoc_di_hop_le(){
        var vi_tri_hien_tai = $('.current_selected').data('position');
        var quan_co = $('.current_selected').data('value');
        console.log( 'vi tri hien tai: ' + vi_tri_hien_tai );
        //sinh_nuoc_di( 6, 84);
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
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+xet_nuoc_ben_trai+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+xet_nuoc_ben_trai+'"]').data('color') ); //quan ta hay quan dich
                    
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
                while( parseInt(xet_nuoc_ben_phai/9) == parseInt(xet_nuoc_ben_phai/9) ){
                    if( xet_nuoc_ben_phai < 0 || xet_nuoc_ben_phai > 89 ){ break; }
                    //Neu nuoc nay co quan co cua ben minh => bi can
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+xet_nuoc_ben_phai+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+xet_nuoc_ben_phai+'"]').data('color') ); //quan ta hay quan dich
                    
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
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+xet_nuoc_len_tren+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+xet_nuoc_len_tren+'"]').data('color') ); //quan ta hay quan dich
                    
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
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+xet_nuoc_xuong_duoi+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+xet_nuoc_xuong_duoi+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 1)+'"]').data('value') );
                if( parseInt(huong_len_1/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    if( huong_len_1 < 0 || huong_len_1 > 89 ){ break; }
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_1 - 9)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_1 - 9)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 1)+'"]').data('value') );
                if( parseInt(huong_xuong_1/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    if( huong_xuong_1 < 0 || huong_xuong_1 > 89 ){ break; }
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_1 + 9)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_1 + 9)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 1)+'"]').data('value') );
                if( parseInt(huong_xuong_2/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    if( huong_xuong_2 < 0 || huong_xuong_2 > 89 ){ break; }
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_2 + 9)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_2 + 9)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 1)+'"]').data('value') );
                if( parseInt(huong_len_2/9) == parseInt(vi_tri_hien_tai/9) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    if( huong_len_2 < 0 || huong_len_2 > 89 ){ break; }
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_2 - 9)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_2 - 9)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 9)+'"]').data('value') );
                if( parseInt(huong_len_3/9) == (parseInt(vi_tri_hien_tai/9) - 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    if( huong_len_3 < 0 || huong_len_3 > 89 ){ break; }
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_3 - 1)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_3 - 1)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai - 9)+'"]').data('value') );
                if( parseInt(huong_len_4/9) == (parseInt(vi_tri_hien_tai/9) - 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    if( huong_len_4 < 0 || huong_len_4 > 89 ){ break; }
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_len_4 + 1)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_len_4 + 1)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 9)+'"]').data('value') );
                if( parseInt(huong_xuong_3/9) == (parseInt(vi_tri_hien_tai/9) + 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    if( huong_xuong_3 < 0 || huong_xuong_3 > 89 ){ break; }
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_3 - 1)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_3 - 1)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_can  = parseInt( $('[data-position="'+(vi_tri_hien_tai + 9)+'"]').data('value') );
                if( parseInt(huong_xuong_4/9) == (parseInt(vi_tri_hien_tai/9) + 2) && quan_can == 0 ){ //Khong co quan can tren duong sang trai 2 nuoc-> ma k bi can
                    if( huong_xuong_4 < 0 || huong_xuong_4 > 89 ){ break; }
                    var gia_tri_vitri_toi = parseInt( $('[data-position="'+(huong_xuong_4 + 1)+'"]').data('value') ); //o trong hay khong
                    var quan_co_tai_vi_tri_toi = parseInt( $('[data-position="'+(huong_xuong_4 + 1)+'"]').data('color') ); //quan ta hay quan dich
                    
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
                var quan_co_55 = parseInt( $('[data-position="55"]').data('value') );
                var quan_co_57 = parseInt( $('[data-position="57"]').data('value') );
                var quan_co_59 = parseInt( $('[data-position="59"]').data('value') );
                var quan_co_61 = parseInt( $('[data-position="61"]').data('value') );
                var quan_co_73 = parseInt( $('[data-position="73"]').data('value') );
                var quan_co_75 = parseInt( $('[data-position="75"]').data('value') );
                var quan_co_77 = parseInt( $('[data-position="77"]').data('value') );
                var quan_co_79 = parseInt( $('[data-position="79"]').data('value') );
                
                switch( vi_tri_hien_tai ){
                    case 47 :
                        var quan_co_63 = parseInt( $('[data-position="63"]').data('value') );
                        var quan_co_67 = parseInt( $('[data-position="67"]').data('value') );
                        if( quan_co_55 == 0 ){
                            if( quan_co_63 == 0 ){
                                vi_tri_co_the_di.push(63);
                            }else{
                                var mau_quan_co_63 = parseInt( $('[data-position="63"]').data('color') );
                                if( mau_quan_co_63 != 2 ){
                                    vi_tri_co_the_di.push(63);
                                }
                            }
                        }
                        
                        if( quan_co_57 == 0 ){
                            if( quan_co_67 == 0 ){
                                vi_tri_co_the_di.push(67);
                            }else{
                                var mau_quan_co_67 = parseInt( $('[data-position="67"]').data('color') );
                                if( mau_quan_co_67 != 2 ){
                                    vi_tri_co_the_di.push(67);
                                }
                            }
                        }
                        
                        break;
                    case 51 :
                        var quan_co_71 = parseInt( $('[data-position="71"]').data('value') );
                        var quan_co_67 = parseInt( $('[data-position="67"]').data('value') );
                        if( quan_co_59 == 0 ){
                            if( quan_co_67 == 0 ){
                                vi_tri_co_the_di.push(67);
                            }else{
                                var mau_quan_co_67 = parseInt( $('[data-position="67"]').data('color') );
                                if( mau_quan_co_67 != 2 ){
                                    vi_tri_co_the_di.push(63);
                                }
                            }
                        }
                        
                        if( quan_co_61 == 0 ){
                            if( quan_co_71 == 0 ){
                                vi_tri_co_the_di.push(71);
                            }else{
                                var mau_quan_co_71 = parseInt( $('[data-position="71"]').data('color') );
                                if( mau_quan_co_71 != 2 ){
                                    vi_tri_co_the_di.push(71);
                                }
                            }
                        }
                        break;
                    case 63 :
                        var quan_co_47 = parseInt( $('[data-position="47"]').data('value') );
                        var quan_co_83 = parseInt( $('[data-position="83"]').data('value') );
                        if( quan_co_55 == 0 ){
                            if( quan_co_47 == 0 ){
                                vi_tri_co_the_di.push(47);
                            }else{
                                var mau_quan_co_47 = parseInt( $('[data-position="47"]').data('color') );
                                if( mau_quan_co_47 != 2 ){
                                    vi_tri_co_the_di.push(47);
                                }
                            }
                        }
                        
                        if( quan_co_73 == 0 ){
                            if( quan_co_83 == 0 ){
                                vi_tri_co_the_di.push(83);
                            }else{
                                var mau_quan_co_83 = parseInt( $('[data-position="83"]').data('color') );
                                if( mau_quan_co_83 != 2 ){
                                    vi_tri_co_the_di.push(83);
                                }
                            }
                        }
                        break;
                    case 67 :
                        var quan_co_47 = parseInt( $('[data-position="47"]').data('value') );
                        var quan_co_51 = parseInt( $('[data-position="51"]').data('value') );
                        var quan_co_83 = parseInt( $('[data-position="83"]').data('value') );
                        var quan_co_87 = parseInt( $('[data-position="87"]').data('value') );
                        
                        if( quan_co_57 == 0 ){
                            if( quan_co_47 == 0 ){
                                vi_tri_co_the_di.push(47);
                            }else{
                                var mau_quan_co_47 = parseInt( $('[data-position="47"]').data('color') );
                                if( mau_quan_co_47 != 2 ){
                                    vi_tri_co_the_di.push(47);
                                }
                            }
                        }
                        
                        if( quan_co_59 == 0 ){
                            if( quan_co_51 == 0 ){
                                vi_tri_co_the_di.push(51);
                            }else{
                                var mau_quan_co_51 = parseInt( $('[data-position="51"]').data('color') );
                                if( mau_quan_co_51 != 2 ){
                                    vi_tri_co_the_di.push(51);
                                }
                            }
                        }
                        if( quan_co_75 == 0 ){
                            if( quan_co_83 == 0 ){
                                vi_tri_co_the_di.push(83);
                            }else{
                                var mau_quan_co_83 = parseInt( $('[data-position="83"]').data('color') );
                                if( mau_quan_co_83 != 2 ){
                                    vi_tri_co_the_di.push(83);
                                }
                            }
                        }
                        if( quan_co_77 == 0 ){
                            if( quan_co_87 == 0 ){
                                vi_tri_co_the_di.push(87);
                            }else{
                                var mau_quan_co_87 = parseInt( $('[data-position="87"]').data('color') );
                                if( mau_quan_co_87 != 2 ){
                                    vi_tri_co_the_di.push(87);
                                }
                            }
                        }
                        break;
                    case 71 :
                        var quan_co_51 = parseInt( $('[data-position="51"]').data('value') );
                        var quan_co_87 = parseInt( $('[data-position="87"]').data('value') );
                        if( quan_co_61 == 0 ){
                            if( quan_co_51 == 0 ){
                                vi_tri_co_the_di.push(51);
                            }else{
                                var mau_quan_co_51 = parseInt( $('[data-position="51"]').data('color') );
                                if( mau_quan_co_51 != 2 ){
                                    vi_tri_co_the_di.push(51);
                                }
                            }
                        }
                        
                        if( quan_co_79 == 0 ){
                            if( quan_co_87 == 0 ){
                                vi_tri_co_the_di.push(87);
                            }else{
                                var mau_quan_co_87 = parseInt( $('[data-position="87"]').data('color') );
                                if( mau_quan_co_87 != 2 ){
                                    vi_tri_co_the_di.push(87);
                                }
                            }
                        }
                        break;
                    case 83 :
                        var quan_co_63 = parseInt( $('[data-position="63"]').data('value') );
                        var quan_co_67 = parseInt( $('[data-position="67"]').data('value') );
                        if( quan_co_73 == 0 ){
                            if( quan_co_63 == 0 ){
                                vi_tri_co_the_di.push(63);
                            }else{
                                var mau_quan_co_63 = parseInt( $('[data-position="63"]').data('color') );
                                if( mau_quan_co_63 != 2 ){
                                    vi_tri_co_the_di.push(63);
                                }
                            }
                        }
                        
                        if( quan_co_75 == 0 ){
                            if( quan_co_67 == 0 ){
                                vi_tri_co_the_di.push(67);
                            }else{
                                var mau_quan_co_67 = parseInt( $('[data-position="67"]').data('color') );
                                if( mau_quan_co_67 != 2 ){
                                    vi_tri_co_the_di.push(67);
                                }
                            }
                        }
                        break;
                    case 87 :
                        var quan_co_67 = parseInt( $('[data-position="67"]').data('value') );
                        var quan_co_71 = parseInt( $('[data-position="71"]').data('value') );
                        if( quan_co_77 == 0 ){
                            if( quan_co_67 == 0 ){
                                vi_tri_co_the_di.push(67);
                            }else{
                                var mau_quan_co_67 = parseInt( $('[data-position="67"]').data('color') );
                                if( mau_quan_co_67 != 2 ){
                                    vi_tri_co_the_di.push(67);
                                }
                            }
                        }
                        
                        if( quan_co_79 == 0 ){
                            if( quan_co_71 == 0 ){
                                vi_tri_co_the_di.push(71);
                            }else{
                                var mau_quan_co_71 = parseInt( $('[data-position="71"]').data('color') );
                                if( mau_quan_co_71 != 2 ){
                                    vi_tri_co_the_di.push(71);
                                }
                            }
                        }
                        break;
                }
                break;
            case 2 :
                var quan_co_76 = parseInt( $('[data-position="76"]').data('value') );
                var mau_quan_co_76 = parseInt( $('[data-position="76"]').data('color') );
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
                        var quan_co_66 = parseInt( $('[data-position="66"]').data('value') );
                        var quan_co_68 = parseInt( $('[data-position="68"]').data('value') ); 
                        var quan_co_84 = parseInt( $('[data-position="84"]').data('value') );
                        var quan_co_86 = parseInt( $('[data-position="86"]').data('value') );
                        
                        if( quan_co_66 == 0 ){
                            vi_tri_co_the_di.push(66);
                        }else{
                            var mau_quan_co_66 = parseInt( $('[data-position="66"]').data('color') );
                            if( mau_quan_co_66 != 2 ){
                                vi_tri_co_the_di.push(66);
                            }
                        }
                        
                        if( quan_co_68 == 0 ){
                            vi_tri_co_the_di.push(68);
                        }else{
                            var mau_quan_co_68 = parseInt( $('[data-position="68"]').data('color') );
                            if( mau_quan_co_68 != 2 ){
                                vi_tri_co_the_di.push(68);
                            }
                        }
                        
                        if( quan_co_86 == 0 ){
                            vi_tri_co_the_di.push(86);
                        }else{
                            var mau_quan_co_86 = parseInt( $('[data-position="86"]').data('color') );
                            if( mau_quan_co_86 != 2 ){
                                vi_tri_co_the_di.push(86);
                            }
                        }
                        
                        if( quan_co_84 == 0 ){
                            vi_tri_co_the_di.push(84);
                        }else{
                            var mau_quan_co_84 = parseInt( $('[data-position="84"]').data('color') );
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
                    var quan_can = parseInt( $('[data-position="'+sang_trai_1_nuoc+'"]').data('value') );
                    var mau_quan_can = parseInt( $('[data-position="'+sang_trai_1_nuoc+'"]').data('color') );
                    
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
                    var quan_can = parseInt( $('[data-position="'+sang_phai_1_nuoc+'"]').data('value') );
                    var mau_quan_can = parseInt( $('[data-position="'+sang_phai_1_nuoc+'"]').data('color') );
                    
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
                    var quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').data('value') );
                    var mau_quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').data('color') );
                    
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
                    var quan_can = parseInt( $('[data-position="'+xuong_duoi_1_nuoc+'"]').data('value') );
                    var mau_quan_can = parseInt( $('[data-position="'+xuong_duoi_1_nuoc+'"]').data('color') );
                    
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
                
                break;
            case 1 : //xet cac nuoc co the di cho quan tot
                var ranhgioi = $('[data-position="'+vi_tri_hien_tai+'"]').data('ranhgioi');
                if( vi_tri_hien_tai >= 45 && ranhgioi == 'red' ){ //tot do chua sang song => chi len 1 nuoc
                    var len_tren_1_nuoc = vi_tri_hien_tai - 9;
                    if( (parseInt(len_tren_1_nuoc/9) == (parseInt(vi_tri_hien_tai/9) - 1) ) ){
                        var quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').data('value') );
                        var mau_quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').data('color') );
                        
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
                        var quan_can = parseInt( $('[data-position="'+sang_trai_1_nuoc+'"]').data('value') );
                        var mau_quan_can = parseInt( $('[data-position="'+sang_trai_1_nuoc+'"]').data('color') );
                        
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
                        var quan_can = parseInt( $('[data-position="'+sang_phai_1_nuoc+'"]').data('value') );
                        var mau_quan_can = parseInt( $('[data-position="'+sang_phai_1_nuoc+'"]').data('color') );
                        
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
                        var quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').data('value') );
                        var mau_quan_can = parseInt( $('[data-position="'+len_tren_1_nuoc+'"]').data('color') );
                        
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
        console.log( vi_tri_co_the_di );
        
    }
})(jQuery);
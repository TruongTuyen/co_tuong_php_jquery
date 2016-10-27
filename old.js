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
/* 
    Created on : 30.May.2016, 11:31:34
    Author     : Ömer Faruk KESMEZ @ofke
*/

$( document ).ready(function() {
    var sayi = $('.__same').size();
    
    $( ".__same" ).click(function( event ) {
        var $__id  = $(".__same").attr('id');
        var $__rel = $(this).attr('rel');
        var indis  = $(this).index();
//        alert(indis);
//        exit;
        if($__rel== 0){
//          $(this).attr('rel',"1");
          if(indis==2){
            $(".__secret" ).css('display','none');
            $("#__me").css('display','block');
            $(".__same").attr('rel',"0");
            $(".__me").attr('rel',"1");
            $(".__same img").attr('src',"ok_alt_.png");
            $(".__me img").attr('src',"ok_ust.png");
          }
          if(indis==4){
            $(".__secret" ).css('display','none');
            $("#__referans").css('display','block');
            $(".__same").attr('rel',"0");
            $(".__referans").attr('rel',"1");
            $(".__same img").attr('src',"ok_alt_.png");
            $(".__referans img").attr('src',"ok_ust.png");
          }
          if(indis==6){
//            alert(indis);
            $(".__secret" ).css('display','none');
            $("#__yetenek").css('display','block');
            $(".__same").attr('rel',"0");
            $(".__yetenek").attr('rel',"1");
            $(".__same img").attr('src',"ok_alt_.png");
            $(".__yetenek img").attr('src',"ok_ust.png");
          }
          
          if(indis==8){
//            alert(indis);
            $(".__secret" ).css('display','none');
            $("#__iletisim").css('display','block');
            $(".__same").attr('rel',"0");
            $(".__iletisim").attr('rel',"1");
            $(".__same img").attr('src',"ok_alt_.png");
            $(".__iletisim img").attr('src',"ok_ust.png");
          }
        }
        else{
//          $(this).attr('rel',"0");
          if(indis==2){
            $("#__me").css('display','none');
            $(".__me").attr('rel',"0");
            $(".__me img").attr('src',"ok_alt_.png");
          }
          if(indis==4){
            $("#__referans").css('display','none');
            $(".__referans").attr('rel',"0");
            $(".__referans img").attr('src',"ok_alt_.png");
          }
          if(indis==6){
            $("#__yetenek").css('display','none');
            $(".__yetenek").attr('rel',"0");
            $(".__yetenek img").attr('src',"ok_alt_.png");
          }
           if(indis==8){
            $("#__iletisim").css('display','none');
            $(".__iletisim").attr('rel',"0");
            $(".__iletisim img").attr('src',"ok_alt_.png");
          }
        }
        event.preventDefault();
    });
});
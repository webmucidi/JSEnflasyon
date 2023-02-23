function hesapla(){


    let alisFiyati,satisFiyati,oransalSonuc,parasalSonuc;

    alisFiyati=document.getElementById("txtAlis").value;
    satisFiyati=document.getElementById("txtSatis").value;
    parasalSonuc=satisFiyati-alisFiyati;
    
    if(document.getElementById("listeHesapTuru").selectedIndex==0){
        
        document.getElementById("sonuc").innerHTML="Kar/zararınız: "+parasalSonuc;
    }
    else if(document.getElementById("listeHesapTuru").selectedIndex==1){
        oransalSonuc=(parasalSonuc*100)/alisFiyati;
        document.getElementById("sonuc").innerHTML="Kar/zarar oranınız:"+oransalSonuc;
    }


}
//Girenler
let tarih,mevcutAy,mevcutGun;
tarih=new Date();
mevcutAy=tarih.getMonth()+1;
mevcutGun=tarih.getDate();

let bayramAy,bayramGun;

//Çıkanlar
let ayFarki,gunFarki;
let kalanGun;

//Nesneler
let listeSecim=document.getElementById("listeBayramlar");

//Diziler
let bayramlar=["Ramazan Bayramı","Kurban Bayramı","Cumhuriyet Bayramı","Çocuk Bayramı","Gençlik Bayramı","Zafer Bayramı","Geçmiş Bayram"];

//Döngü değişkenleri
let i;

function doldur(){
    for(i=0;i<bayramlar.length;i++){
        let secenek=document.createElement("option");
        listeSecim.options.add(secenek);
        secenek.text=bayramlar[i];
    }
}

function hesapla(){

    if(listeSecim.selectedIndex==0){
        bayramAy=4;
        bayramGun=21;

        if(bayramAy<mevcutAy){
            alert("EE şimdi nolcek?")
        }
        else{
            ayFarki=bayramAy-mevcutAy;
            gunFarki=bayramGun-mevcutGun;
            kalanGun=ayFarki*30+gunFarki;
        }
        


        
    }
    else if(listeSecim.selectedIndex==1){
        bayramAy=6;
        bayramGun=29;

        ayFarki=bayramAy-mevcutAy;
        gunFarki=bayramGun-mevcutGun;
        kalanGun=ayFarki*30+gunFarki;
        
    }
    else if(listeSecim.selectedIndex==2){
        bayramAy=10;
        bayramGun=29;

        ayFarki=bayramAy-mevcutAy;
        gunFarki=bayramGun-mevcutGun;
        kalanGun=ayFarki*30+gunFarki;
        
    }
    else if(listeSecim.selectedIndex==3){
        bayramAy=4;
        bayramGun=23;

        ayFarki=bayramAy-mevcutAy;
        gunFarki=bayramGun-mevcutGun;
        kalanGun=ayFarki*30+gunFarki;
        
    }
    else if(listeSecim.selectedIndex==4){
        bayramAy=5;
        bayramGun=19;

        ayFarki=bayramAy-mevcutAy;
        gunFarki=bayramGun-mevcutGun;
        kalanGun=ayFarki*30+gunFarki;
        
    }
    else if(listeSecim.selectedIndex==5){
        bayramAy=8;
        bayramGun=30;

        ayFarki=bayramAy-mevcutAy;
        gunFarki=bayramGun-mevcutGun;
        kalanGun=ayFarki*30+gunFarki;
        
    }
    else{
        bayramAy=1;
        bayramGun=1;
        if(bayramAy<mevcutAy){
        ayFarki=12-(mevcutAy-bayramAy);
        gunFarki=bayramGun-mevcutGun;
        }
        else{
        ayFarki=bayramAy-mevcutAy;
        gunFarki=bayramGun-mevcutGun;
        
        }
        kalanGun=ayFarki*30+gunFarki;
    }

    document.getElementById("baslikSonuc").innerHTML=listeSecim[listeSecim.selectedIndex].text+" na "+kalanGun+" gün kalmıştır.";
}
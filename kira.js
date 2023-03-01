//Tarih değişkenleri
let tarih,yil,ay;

//Ay ve yıl fark değişkenleri
let ayFarki,yilFarki;

//Kira değişkenleri
let mevcutKira,yeniKira;

//Liste nesneleri değişkenleri
let listeYil,listeAy;

//Dizi değişkenleri
let aylar=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];

//HTML nesne değişkenleri
listeAy=document.getElementById("listeAy");
listeYil=document.getElementById("listeYil");

//Seçilen yıl ve ay değişkenleri
let secilenAy,secilenYil;

//Mevcut tarih üzerinden yıl ve ayı bulma
tarih=new Date();
yil=tarih.getFullYear();
ay=tarih.getMonth();

//Ay ve yıl listelerini doldurma
function doldur(){

    for(yil;yil>1999;yil--){
        let secenek=document.createElement("option");
        document.getElementById("listeYil").options.add(secenek);
        secenek.text=yil;
        secenek.value=yil;
    }

    for(let i=0;i<aylar.length;i++){
        
        let secenek=document.createElement("option");
        document.getElementById("listeAy").options.add(secenek);
        secenek.text=aylar[i];
        secenek.value=i;
    }

}

//İstenilen sonuçları hesaplama
function hesapla(){

    //PROBLEM 1: Kiracılıkta geçen yıl üzerinden zamlı kira miktarını bulma
    yil=tarih.getFullYear();
    secilenYil=listeYil[listeYil.selectedIndex].value;
    mevcutKira=document.getElementById("txtKira").value;
    yilFarki=yil-secilenYil;
    

if(yilFarki==0){

    document.getElementById("sonuc1").innerHTML="Mevcut kiranız: "+mevcutKira;   
    document.getElementById("sonuc2").innerHTML="Kira yenilemeniz bir yılı doldurduktan sonra yapılacaktır!";   
}
else{
    if(yilFarki>5){
        yeniKira=mevcutKira*1.50;
    }
    else if(yilFarki<=5){
        yeniKira=mevcutKira*1.25;
          
    }

    document.getElementById("sonuc1").innerHTML="Yeni kiranız: "+yeniKira;

    //PROBLEM 2: Ay farkı üzerinden kira yenilemesine ne kadar kaldığını bulma
    ay=tarih.getMonth();
    secilenAy=listeAy[listeAy.selectedIndex].value;


    if(secilenAy>ay){
        ayFarki=secilenAy-ay;
        document.getElementById("sonuc2").innerHTML="Kira yenilemenize "+ayFarki+" ay kalmıştır.";

    }
    else if(secilenAy<ay){
        ayFarki=12-(ay-secilenAy);
        document.getElementById("sonuc2").innerHTML="Kira yenilemenize "+ayFarki+" ay kalmıştır.";

    }
    else if(secilenAy==ay){
        document.getElementById("sonuc2").innerHTML="Kira yenilemeniz BU AY gerçekleşecektir!";

    }

}
}
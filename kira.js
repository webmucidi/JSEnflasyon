//Tarih değişkenleri
let tarih,yil,ay;

//Ay ve yıl fark değişkenleri
let ayFarki,yilFarki;

//Kira değişkenleri
let mevcutKira,yeniKira;

//Liste nesneleri değişkenleri
let listeYil,listeAy;

//Dizi değişkenleri
let aylar;

aylar=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];

listeAy=document.getElementById("listeAy");
listeYil=document.getElementById("listeYil");



tarih=new Date();
yil=tarih.getFullYear();
ay=tarih.getMonth();

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

function hesapla(){
    //Kiracılıkta geçen yıl üzerinden zamlı kira miktarını bulma
    yil=tarih.getFullYear();
    mevcutKira=document.getElementById("txtKira").value;
    yilFarki=yil-listeYil[listeYil.selectedIndex].value;
    

    if(yilFarki==0 && secilenAy<=ay){

    }

    if(yilFarki>5){
        yeniKira=mevcutKira*1.50;
    }
    else if(yilFarki<=5){
        if(yilFarki==0){
            yeniKira=mevcutKira;
            document.getElementById("sonuc1").innerHTML="Kira yenilemeniz bir yılı doldurduktan sonra yapılacaktır!";
        }
        else{
            yeniKira=mevcutKira*1.25;
        }
        
    }


    document.getElementById("sonuc1").innerHTML="Yeni kiranız: "+yeniKira;

    //Ay farkı üzerinden kira yenilemesine ne kadar kaldığını bulma
    ay=tarih.getMonth();
    let secilenAy=listeAy[listeAy.selectedIndex].value;



    if(secilenAy>ay){
        ayFarki=secilenAy-ay;
    }
    else if(ay>secilenAy){
        ayFarki=(ay-secilenAy)+12;
    }
    else{
        document.getElementById("sonuc2").innerHTML="Kira yenilemeniz BU AY gerçekleşecektir!";
    }

    document.getElementById("sonuc2").innerHTML="Kira yenilemenize "+ayFarki+" ay kalmıştır.";


}
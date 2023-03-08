//Diziler
let girilenSayilar=[];


//Girenler
let girilenSayi;

//Çıkanlar
let tutanSayisi;

//Sayfa kullanılan nesneler
const sayiKutusu=document.getElementById("txtSayi");
const sonucListesi=document.getElementById("sonucListesi");
const sayilarListesi=document.getElementById("sayilarListesi");

function ekle(){
    /*HATA KAYNAĞI! Önemli: parseInt fonksiyonu ile inputtan alınan veri tam sayıya çevrilmezse
    daha sonra karşılaştırma yapılan random sayılar floor edilmiş tam sayılar olduğu için
    kontrol sırasında tip uyuşmazlığı yüzünden eşleşme sağlayamıyor.
    */
    girilenSayi=parseInt(sayiKutusu.value);
    

    if(girilenSayilar.length>5){
        alert("6 dan fazla sayı giremezsiniz!");
        return;
    }

    if(isNaN(girilenSayi)||girilenSayi<1 || girilenSayi>49){
        alert("1-49 arası bir SAYI girmelisiniz!");
        return;
    }

    if(girilenSayilar.includes(girilenSayi)){
        alert("Bu sayı daha önce girilmiş!");
        return;
    }


    girilenSayilar.push(girilenSayi);
    let yeniSayi=document.createElement("li");
    yeniSayi.textContent=girilenSayi;
    sayilarListesi.appendChild(yeniSayi);
}

function oyna(){

    if(girilenSayilar.length!=6){
        alert("6 numarayı tamalamadan oynayamazsınız!");
        return;
    }

    let sansliSayilar=[];
    while(sansliSayilar.length<6){
        let rastgeleSayi=Math.floor(Math.random()*49)+1;
        if(!sansliSayilar.includes(rastgeleSayi)){
            sansliSayilar.push(rastgeleSayi);
        }
    }
    

    let tutanSayilar=[];
    tutanSayisi=0;

    for(let i=0;i<girilenSayilar.length;i++){

        
        if(sansliSayilar.includes(girilenSayilar[i])){
            
            tutanSayisi++;
            tutanSayilar.push(girilenSayilar[i]);
        }
    }

    console.log(sansliSayilar);
    console.log(girilenSayilar);
    console.log(tutanSayisi,tutanSayilar);
    
}


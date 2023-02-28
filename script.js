function yilDoldur(){
    let tarih,yil,ay;
    tarih=new Date();
    
    yil=tarih.getFullYear();
    ay=tarih.getMonth();
    console.log(ay);
    

    for(yil;yil>1999;yil--){
        console.log(yil);
        let secenek=document.createElement("option");
        document.getElementById("slctOncekiDonem").options.add(secenek);
        secenek.text=yil;
        secenek.value=yil;
    }
}




function enflasyonHesapla(){
    let sepetTutari,oncekiDonem,simdikiDonem,enflasyonOrani,sonuc,yeniTutar;
    let listeOnceki,listeSimdiki;
    listeOnceki=document.getElementById("slctOncekiDonem");
    listeSimdiki=document.getElementById("slctSimdikiDonem");
    sepetTutari=document.getElementById("txtSepet").value;
    oncekiDonem=listeOnceki.options[listeOnceki.selectedIndex].value;
    simdikiDonem=listeSimdiki.options[0].value;
    if(oncekiDonem==2020){
        enflasyonOrani=3.5;
    }
    else if(oncekiDonem==2021){
        enflasyonOrani=2.5;
    }
    else if(oncekiDonem==2022){
        enflasyonOrani=1.5;
    }
    else{
        alert("Yıl seçimi alınamadı!");
    }
    //console.log(sepetTutari,oncekiDonem,simdikiDonem,enflasyonOrani);
    sonuc=(sepetTutari*enflasyonOrani)-sepetTutari;
    yeniTutar=sepetTutari*enflasyonOrani;
    document.getElementById("mesaj").innerHTML="Enflasyon verilerine göre sepet şu kadar zamlanmıştır: "+sonuc+"<br>"+"Sepet için şu anda ödemeniz gereken tutar: "+yeniTutar;

}

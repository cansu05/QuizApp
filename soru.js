function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
return cevap === this.dogruCevap
}

const sorular = [
    new Soru("1-Hangisi .net paket yönetim uygulamasıdır?",{a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget"}, "c"),
    new Soru("2-Hangisi javascript paket yönetim uygulamasıdır?",{a: "Node.js", b: "Typescript", c: "Npm"}, "c"),
    new Soru("3-Hangisi .net paket yönetim uygulamasıdır?",{a: "Node.js", b: "Typescript", c: "Npm"}, "c"),
    new Soru("4-Hangisi javascript paket yönetim uygulamasıdır?",{a: "Node.js", b: "Typescript", c: "Npm"}, "c"),
];



const t = parseFloat(document.getElementById('temp').textContent);
const s = parseFloat(document.getElementById('speed').textContent);
let chill = 35.74 + (0.6215*t) - (35.75*Math.pow(s,0.16)) + (0.4275*t*Math.pow(s,0.16));
console.log(chill);
chill = Math.round(chill);
console.log(chill);

if(t<=50 && s>3){
    document.getElementById("chill").textContent="Wind Chill: "+chill+"\xB0F";
} else{
    document.getElementById("chill").textContent="No Wind Chill Today";
}
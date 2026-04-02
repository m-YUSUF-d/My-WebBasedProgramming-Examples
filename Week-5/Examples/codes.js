document.write("Welcome to JavaScript programming! <br /> <br />");


var a = 10;
var b = 20;
// karşılaştırma operatörü
document.write("(a == b) ifadesi sonucu: ");
document.write(a == b);
document.write("<br />");
//küçük operatörü
document.write("(a < b) ifadesi sonucu: ");
document.write(a < b);
document.write("<br />");
//büyük operatörü
document.write("(a > b) ifadesi sonucu: ");
document.write(a > b);
document.write("<br />");
// eşit değil operatörü
document.write("(a != b) ifadesi sonucu: ");
document.write(a != b);
document.write("<br />");
//büyük eşit operatörü
document.write("(a >= b) ifadesi sonucu: ");
document.write(a >= b);
document.write("<br />");
//küçük eşit operatörü
document.write("(a <= b) ifadesi sonucu: ");
document.write(a <= b);
document.write("<br />  <br />");


var a = 5;
var b = 2;
// && (VE) operatörü
document.write("(a>3 &&  b>3) ifadesinin sonucu: ");
sonuc = (a > 3 && b > 3);
document.write(sonuc + "<br />");
// || (VEYA) operatörü
document.write("(a>3 || b>3) ifadesinin sonucu: ");
sonuc = (a > 3 || b > 3);
document.write(sonuc + "<br />");
// ! (DEĞİL) operatörü
document.write("!(a>3 &&  b>3) ifadesinin sonucu: ");
sonuc = (!(a > 3 && b > 3));
document.write(sonuc + "<br /><br />");


let plaka = 34;
if (plaka == 17) {
    document.write("<b>Çanakkale</b>");
} else if (plaka == 34) {
    document.write("<b>İstanbul</b>");
} else if (plaka == 35) {
    document.write("<b>İzmir</b>");
} else {
    document.write("<b>Bilinmeyen plaka!</b><br /><br />");
}
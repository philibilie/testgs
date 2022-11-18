
function testGS()
{

    const url = "https://script.google.com/macros/s/AKfycbxKO-Uqcf_a8tYX2IZJv-Vo_44zAp0deaPx418QDKX0Gab7WuWw2z1pm2L9FH1HX0iv/exec";


    fetch(url)
    .then(d => d.json())
    .then(d => {
        document.getElementById("app").textContent = d[0].status;
    });
}

document.getElementById("btn").addEventListener("click", testGS);
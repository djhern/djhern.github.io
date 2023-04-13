function showDiv(id) {

    document.getElementById(id).style.display = "block";

    const divs = ["Div1", "Div2", "Div3", "Div4"];

    const index = divs.indexOf(id);

    divs.splice(index, 1);

    for (let i = 0; i < divs.length; i++) {

        document.getElementById(divs[i]).style.display = 'none';
    }
}

function openTab(url) {
    window.open(url, "_blank");
}

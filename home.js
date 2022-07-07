function s_porc(a, b) {
    return a * (1 - b * 0.01)
}

function ruler(pcompra, pvenda, nitem){
    var txcompra = s_porc(pcompra, 1.5)
    let paid_value = nitem * (pcompra + txcompra)
    var pvenda = s_porc(pvenda, 4.5)
    let gross_profit = nitem * pvenda
    let net_profit = gross_profit - paid_value
    let imposto = ((nitem * pcompra) * 0.015) + ((nitem * pvenda) * 0.045)
    return [paid_value.toFixed(2), gross_profit.toFixed(2), net_profit.toFixed(2), imposto.toFixed(2)]
}

function calcule(){
    var pcompra = document.getElementById("pcompra").value;
    var pvenda = document.getElementById("pvenda").value;
    var nitem = document.getElementById("nitem").value;
    var ls_results = ruler(pcompra, pvenda, nitem)
    document.getElementById("paid_value").value = ls_results[0];
    document.getElementById("gross_profit").value = ls_results[1];
    document.getElementById("net_profit").value = ls_results[2];
    document.getElementById("imposto").value = ls_results[3];
    console.log("chegou")
}
let result = [];
let num = 0;
let negativeNum = 0;

function popResult(){
    let z = result.length;

    for (let x = 0; x < z; x++){
        result.pop();
    }

    num = 0;
}

function enable(){
    document.getElementById("result").textContent = "";
    document.getElementById("result").style.color = "rgb(134, 214, 114)";
}

function addNum(value){
    if (document.getElementById("result").textContent == "" || Number.isFinite(document.getElementById("result").textContent) 
        || document.getElementById("result").textContent == "+" 
        || document.getElementById("result").textContent == "-" 
        || document.getElementById("result").textContent == "*"
        || document.getElementById("result").textContent == "/"){
        if (negativeNum == 0){
            enable();
        };
    }

    document.getElementById("result").textContent += value;
    negativeNum = 0;
}

function addOp(value){
    if (Number.isFinite(Number(document.getElementById("result").textContent))){
        result[num] = document.getElementById("result").textContent;
        num++;

        enable();
        document.getElementById("result").textContent += value;

        result[num] = document.getElementById("result").textContent;
        num++;

        negativeNum = 0;
    }
    else{
        if ((value == '-' && document.getElementById("result").textContent == "*") || (value == '-' && result[num - 1] == "/")){

            enable();
            document.getElementById("result").textContent += value;

            negativeNum = 1;
        }
        else{
            enable();
            document.getElementById("result").textContent += value;

            result[num - 1] = document.getElementById("result").textContent;
        
            negativeNum = 0;
        }
    }
}

function addC(){
    document.getElementById("result").textContent = "";
}

function addEnter(){
    if (Number.isFinite(Number(document.getElementById("result").textContent))){
        result[num] = document.getElementById("result").textContent;
        num++;
    }

    let resultado = 0
    let x = 0;
    while (x < result.length){
        if (result[x + 1] != null){
            if (result[x] == "+"){
                resultado += Number(result[x + 1]);
                x++;
            }
            else{
                if (result[x] == "-"){
                    resultado = resultado - Number(result[x + 1]);
                    x++;
                }
                else{
                    if (result[x] == '*'){
                        resultado = resultado * Number(result[x + 1]);
                        x++;
                    }
                    else{
                        if (result[x] == "/"){
                            resultado = resultado / Number(result[x + 1]);
                            x++
                        }
                        else{
                            resultado += Number(result[x]);
                        }
                    }
                }
            }
        }

        x++;
    }

    /*
    while (x < result.length){
        if (result[x + 1] != null){
            if (result[x] == '*'){
                resultado += (Number(result[x - 1]) * Number(result[x + 1]));
                result[x - 1] = "1";
            }
            else{
                if (result[x] == "/"){
                    resultado += (Number(result[x - 1]) / Number(result[x + 1]));
                    result[x - 1] = "1";
                }
            }
        }
        x++;
    }

    x = 0;
    while (x < result.length){
        if (result[x + 1] != null){
            if (result[x] == "+"){
                resultado += Number(result[x + 1]);
                x++;
            }
            else{
                if (result[x] == "-"){
                    resultado = resultado - Number(result[x + 1]);
                    x++;
                }
            }
        }

        x++;
    }*/

    if (result[1] == null) {resultado = result[0];}

    document.getElementById("result").textContent = resultado;

    popResult();
}

function addDel(){
    document.getElementById("result").textContent.slice(0, -1);
}
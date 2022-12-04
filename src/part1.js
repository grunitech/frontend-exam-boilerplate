function palin(str){

    if (str.length == 0) {

        return true
    }
    else if (str.charAT(0) == str.charAT(str.length - 1)){

        return palin(str)
    }
    else{

        return false;
    }
}


console.log(palin('aba'))


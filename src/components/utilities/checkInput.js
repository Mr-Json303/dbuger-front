function checkInput(e, vecTovalidate){
    console.log('el objeto e llega \n', e);
    
    console.log(e.target.length);

    return true
}

function displayErrorMsg(obj){

}

export {
    checkInput,
    displayErrorMsg
}
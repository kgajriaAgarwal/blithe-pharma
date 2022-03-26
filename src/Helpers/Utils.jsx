

export const removeSpaceFromStr = (str) => {
    return str.replace(/\s/g,'')
}

export const calc_sp = (mrp, discount) =>{
    return mrp-(mrp * (discount/100))
}


export const removeSpaceFromStr = (str) => {
    return str.replace(/\s/g,'')
}

export const calc_sp = (mrp, discount) =>{
    return mrp-(mrp * (discount/100))
}

export const setLocalStorage = (key, value) => {
    value = JSON.stringify(value);
    // const encodedData = encryptedData(value);
    localStorage.setItem(key, value);
  };
  
  // used to get localstorage item
  export const getLocalStorage = (key) => {
    if (key) {
      let data = localStorage.getItem(key);
      if (data) {
        // data = JSON.parse(decryptedData(data));
        data = JSON.parse(data);
        return data;
      }
    }
    return null;
  };
  
  // used to remove localstorage item
  export const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
  };
  
  // used to clear localstorage
  export const clearLocalStorage = () => {
    localStorage.clear();
  };

  export const getTotalProducts = (products, productsType) => {
    const uniqueIds = [];
    if(products.length){
      const unique = products.filter(element => {
        const isDuplicate = uniqueIds.includes(element.id);

        if (!isDuplicate) {
            uniqueIds.push(element.id);
            return true;
        }
    });     
     if (productsType === "cart"){
      const fltData = unique.filter(item => item.qty > 0)
      return fltData.length
     }else{
       return unique.length
     }    
    }
    else{
      return 0
    }
  }
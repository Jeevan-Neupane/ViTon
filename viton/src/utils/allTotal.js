const allTotal = (perproductarray) => {

    const allTotalPrice = perproductarray.reduce((sum, cv) => {
        return sum + cv;

    }, 0)


    return allTotalPrice;
}


export default allTotal;
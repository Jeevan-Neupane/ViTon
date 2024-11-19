const DisountedPriceFn = (originalPrice, discountPrice) => {
    const discountPercentage = Math.floor(discountPrice);
    const OriginalPrice = originalPrice;
    const discountedPrice = Math.floor(
        OriginalPrice - (discountPercentage / 100) * OriginalPrice
    );

    return discountedPrice;

}


export default DisountedPriceFn;
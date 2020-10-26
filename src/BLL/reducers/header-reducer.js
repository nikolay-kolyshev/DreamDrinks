const initialState = {
    basket: {
        countPurchase: 0,
        totalCost: {
            currency: "₽",
            count: 0
        }
    }
}

const headerReducer = (state = initialState, action) => {

    switch (action) {
        default:
            return state

    }

}

export default headerReducer
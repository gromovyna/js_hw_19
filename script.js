const HAMBURGER = {
    big: {
        price: 10,
        calories: 40,
    },

    small: {
        price: 5,
        calories: 20,
    },

    filling: {
        cheese: {
            price: 1,
            calories: 20
        },
        salat: {
            price: 2,
            calories: 5,
        },
        potato: {
            price: 1.5,
            calories: 10
        }
    },
    additions: {
        seasoning: {
            price: 1.5,
            calories: 0,
        },
        mayonnaise: {
            price: 2,
            calories: 5
        }
    }
}

let price,addFillingPrice, addAdditionPrice, calories, addFillingCalories, addAdditonCalories = null


class Hamburger {
    constructor(type) {
        this.type = type
    }

    addFilling(...filling) {
        addFillingPrice = 0;
        addFillingCalories = 0;
        for(let key in HAMBURGER.filling) {
            filling.forEach((item) => {
                if(item === key){
                    addFillingPrice += HAMBURGER.filling[key].price
                    addFillingCalories += HAMBURGER.filling[key].calories
                } 
            })
        }
    }

    addAdditions(...additions){
        addAdditionPrice = 0;
        addAdditonCalories = 0;
        for(let key in HAMBURGER.additions) {
            additions.forEach((item) => {
                if(item === key){
                    addAdditionPrice += HAMBURGER.additions[key].price
                    addAdditonCalories += HAMBURGER.additions[key].calories
                }  
            })
        }
    }

    renderPrice() {
        price = 0;
        if(this.type === 'big') {
            price += HAMBURGER.big.price
        } else {
            price += HAMBURGER.small.price
        }
        return price + addFillingPrice + addAdditionPrice
    }

    renderCalories() {
        calories = 0;
        if(this.type === 'big') {
            calories += HAMBURGER.big.calories
        } else {
            calories += HAMBURGER.small.calories
        }
        return calories + addFillingCalories + addAdditonCalories;
    }

}


const orders = [
    {
        burger: 'big',
        fillings: ['potato' , 'salat' , 'salat'],
        additions: ''
    },
    {
        burger: 'small',
        fillings: ['potato' , 'potato' , 'potato'],
        additions: 'seasoning'
    },
    {
        burger: 'big',
        fillings: ['potato' , 'potato' , 'potato', 'potato' , 'potato' , 'potato'],
        additions: ['mayonnaise', 'seasoning' ]
    },
    {
        burger: 'big',
        fillings: ['salat',  'potato'],
        additions: ''
    },
    
   
]



let finishOrder = [];
orders.map((order, index) => {
    let newOrder = new Hamburger(order.burger);
    newOrder.addFilling(...order.fillings)
    newOrder.addAdditions(...order.additions)
    finishOrder.push(`
        <div class="order">
            <h3> Замовлення  ${index + 1 }</h3>
            <div>
                <p>Ціна: ${newOrder.renderPrice()}$ </p>
                <p>Калорії: ${newOrder.renderCalories()} </p>
            </div>
        </div>
    `)

    return finishOrder;
})

document.write(`<div class="orders">${finishOrder.join("")}</div>`);

function count(){
    let count = 0;
    return{
        increment: function(){
            count++;
            return count
        },
        decrement: function(){
            count--;
            return count
        },
        getCounter: function(){
            return count
        }
    }
}

const countFunctions = count();
const countDisplay = document.getElementById('count')
const increase = document.getElementById('increase1')
const decrease = document.getElementById('decrease2')


function updateDisplay(){
    countDisplay.textContent = countFunctions.getCounter();

}


increase.addEventListener('click', () => {
    countFunctions.increment();
    updateDisplay();
})

decrease.addEventListener('click', () => {
    countFunctions.decrement();
    updateDisplay();
})

updateDisplay();
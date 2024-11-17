setTimeout(() =>{
    console.log('this will log in 2 minutes')
}, 2000);

function greet(){
    console.log('hello from greet function')
}

setTimeout(greet,2000)


setTimeout(() => {
    console.log('data fetching')

}, 3000)

console.log('data fetching')

setTimeout(() => {
    console.log('datas')
},4000)


const sampleData = [
    {id:1, name: 'item 1', description: 'Description for item 1'},
    {id:2, name: 'item 2', description: 'Description for item 2'},
    {id:3, name: 'item 3', description: 'Description for item 3'},
]

async function fetchData(){
    console.log('Fetching data......')

    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (sampleData)
            console.log('data successfully fetched', sampleData)
        }, 4000)


    })
}


fetchData();

//fetchData();>

async function  displayData() {
    const dataList = document.getElementById('data-list')
    try {
        const data = await fetchData()
        const listItems = data.map(item => `<li>${item.name}:
        ${item.description}</li>`).join('');
        dataList.innerHTML = listItems;
    } catch (error) {
        console.log(error)
    }
}

displayData()
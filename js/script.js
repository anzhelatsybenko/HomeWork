"use strict"
//----------Home Work - myBlend----------

/*var arr = [1,2,3,4,5,6,7,8,9];

function myBlend(arr) {
    arr.sort(() => {
        return Math.random()-0.5
    });
}
myBlend (arr);
console.log("Affter my sort: " + arr);*/

//----------Home Work - BigBoss----------
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                 {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey (nameCompany) {
    let arr = [];

    //With static data
    //arr = company.clients.concat(company.clients[0].partners, company.clients[0].partners[1].partners);

    //With dynamic data
    arr = arr.concat (company, company.clients);
    for (let i in company.clients) {
        for (let j in company.clients[i]) {
            if (Array.isArray(company.clients[i][j])) {
                arr = arr.concat(company.clients[i][j]);
                let temp = company.clients[i][j];
                for (let k in temp) {
                    for (let q in temp[k]) {
                        if (Array.isArray(temp[k][q])) {
                            arr = arr.concat(temp[k][q]);
                        }
                    }
                }
            }
        }
    }
    console.log(nameCompany);
    for (let i = 0; i <= arr.length; i++)
    {
        if (arr[i].name == nameCompany)  console.log(arr[i]);
        else continue;

    }
}

findValueByKey("Клієнт 1.2.3");
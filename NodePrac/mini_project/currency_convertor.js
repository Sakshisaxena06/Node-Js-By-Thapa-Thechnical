import https from "https";
import chalk from "chalk";
import  readline  from "readline";
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const apikey= '100513348e6483f2901b95de';
const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;

const currencyConvertor=(amount,rate)=>{
    return (amount * rate).toFixed(2);
};

https.get(url,(res)=>{
    let data =""
    res.on("data",(chunk)=>{
        data += chunk;
    
    });
    res.on("end",()=>{
        const rates = JSON.parse(data).conversion_rates;
        rl.question("Enter the amount in USD :", (amount) =>{
            rl.question('Enter the target currency (e.g., INR , EUR , NPR :',(target)=>{
                const rate = rates[target.toUpperCase()];
                if(rate){
                    console.log(`${amount} USD is approximately ${currencyConvertor(amount,rate)} ${target}`);
                    
                }else{
                    console.log(`Invalid currency code `);
                    
                }
                rl.close();
            } )
        })
        
    })
})
A function to find out if an ETH address started with 0x and have sufficient characters.


usage 
> const {isEther} = require("IsEther")

parameter passed must be of type string
> const address = "0x0000000000000000000000000000000"
>isEther(address) //return false
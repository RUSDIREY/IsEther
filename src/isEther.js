module.exports = {
    isEther(address) {
        if (address.length === 42 && address.slice(0,2) === "0x") {
            return true
        } 
        return false
    }
}
module.exports = {
    randomChar: (num) => {
        const string = 'abcdefghijklmnopqrstuvwxyz123456789'
        let str = ''
        let i = 0

        while(i < num) {
            str += string.charAt(Math.floor(Math.random() * string.length))
            i++
        }
        return str
    }
}
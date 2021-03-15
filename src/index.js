module.exports = function check(str, bracketsConfig) {
    let result = [];
    for(let i = 0; i < str.length; i++) {
        let foundArray = bracketsConfig.find((bracket) => {return bracket[0] === str[i] || bracket[1] === str[i]});
        if(str[i] === foundArray[1]) {
            if(foundArray[0] === result[result.length-1]) {
                result.length = result.length-1;
            } else {
                result.push(str[i]);
            }
        } else {
            result.push(str[i]);
        }
    }
    return result.length === 0;
}

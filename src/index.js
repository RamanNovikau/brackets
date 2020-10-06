module.exports = function check(str, bracketsConfig) {
    var seq = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (str.charAt(i) === bracketsConfig[j][0]) {
                if (str.charAt(i) === bracketsConfig[j][1]) {
                    bracketsConfig[j][0] = bracketsConfig[j][0] + "o";
                    seq.push(str.charAt(i) + "o");
                } else {
                    seq.push(str.charAt(i));
                }
            } else {
                if (str.charAt(i) === bracketsConfig[j][1]) {
                    if (seq[seq.length - 1] === bracketsConfig[j][0]) {
                        if (bracketsConfig[j][0].length > 1) {
                            bracketsConfig[j][0] = bracketsConfig[j][1];
                        }
                        seq.splice(-1, 1);
                    } else {
                        return false;
                    }
                }
            }
        }
    }
    if(seq.length>0){
      return false;
    }
    return true;
}
function solution(s, t) {
    let count = 0;
    // if(/\d/.test(s) == false && /\d/.test(t) == false) return 0;
    for(var i = 0; i < s.length; i++){
        if(isNaN(parseInt(s[i])) == false){
            var newStr = s.substring(0,i) +  s.substring(i+1,s.length)
            console.log("+++++++++++" + s)
            if(newStr.localeCompare(t) == -1){
                count ++
            }
        }
    }
    for(var i = 0; i < t.length; i++){
            if(isNaN(parseInt(t[i])) == false){
                var newStr = t.substring(0,i) +  t.substring(i+1,t.length)
                console.log("+++++++++++" + t)
                if(s.localeCompare(newStr) == -1){
                    count ++
                }
            }
        }
    return count;
}

telRuleCheck2 = function (string) {  
    var pattern = /^1[34578]\d{9}$/;  
    if (pattern.test(string)) {  
        return true;  
    }  
    console.log('check mobile phone ' + string + ' failed.');  
    return false;  
}; 
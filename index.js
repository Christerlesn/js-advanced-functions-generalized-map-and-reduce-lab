function map(src, funcOper) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(funcOper(src[i])) // Unique work
    }
    return r
  }

  function reduce(origArr, funcOper, startPt){
      let total;
      let i;

      if (!!startPt){
        total = startPt
        i = 0
      }else{
          total = origArr[0];
          i = 1
      }
    for( ; i < origArr.length; i++) {
        total = funcOper(origArr[i], total);
    };
    return total;
  }
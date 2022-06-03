function solution(lottos, win_nums) {
    let rank = [6,6,5,4,3,2,1,];
    let minNum = lottos.filter(v => win_nums.includes(v)).length
    let zeroNum = lottos.filter(v => !v).length
    
    return [rank[minNum + zeroNum], rank[minNum]]
}


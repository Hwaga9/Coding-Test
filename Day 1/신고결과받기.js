function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    //set으로 중복제거 
    let reportsCounts = new Map();
    for (const bad of reports){
        reportsCounts.set(bad[1],reportsCounts.get(bad[1])+1||1)
    }
    reportsCounts.forEach((value,key)=> console.log(key, value))
    //report당한 사람들을 count 

    let good = new Map();
    for(const report of reports){
        if(reportsCounts.get(report[1])>=k){
          //신고한 횟수가 넘을 경우 
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    console.log(123)
    //map은 새로운 배열을 반환
    good.forEach((value,key)=> console.log(key, value)) 
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}
  
solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2)


/*

각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
    신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
    한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다. => 중복 제거(set으로 처리)


k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
    유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.

이용자의 ID가 담긴 문자열 배열 id_list, 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report, 정지 기준이 되는 신고 횟수 k가 매개변수로 주어질 때, 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하도록 solution 함수를 완성해주세요.




*/
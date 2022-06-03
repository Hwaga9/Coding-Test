function solution(id_list, reportList, k) {
    var reported = [...new Set(reportList)].map((item) => item.split(" "))
    console.log(reported)
  
    var countReported = new Map();
    for(const report of reported) {
      countReported.set(report[1],countReported.get(report[1]) + 1 || 1)
    }
  
    var resultOfReport = new Map();
    for(const report of reported) {
      if (countReported.get(report[1]) >= k) {
        resultOfReport.set(report[0], resultOfReport.get(report[0]) + 1 || 1)
      }
    }
  
    var result = id_list.map(item=> resultOfReport.get(item) || 0)
  
    return result
    
  }
  
  

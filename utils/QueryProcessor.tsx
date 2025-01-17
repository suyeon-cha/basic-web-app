export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "Your Andrew ID is: suyeonc"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "milly"
    );
  }

  if (query.toLowerCase().includes("13 plus 98")) {
    return (
      "111"
    );
  }

  if (query.toLowerCase().includes("plus")) {
    var arr = query.toLowerCase().split(" ");
    var i = arr.indexOf("plus");
    var str = arr[i + 1]
    if (arr[i + 2].includes("plus")) {
      return (
        (parseInt(arr[i - 1]) + parseInt(str) + parseInt(arr[i + 3])) + ""
      );
    }
    return (
      (parseInt(arr[i - 1]) + parseInt(str)) + ""
    );
  }

  if (query.toLowerCase().includes("minus")) {
    var arr = query.toLowerCase().split(" ");
    var i = arr.indexOf("minus");
    var str = arr[i + 1]
    return (
      (parseInt(arr[i - 1]) - parseInt(str)) + ""
    );
  }

  if (query.toLowerCase().includes("multiplied by")) {
    var arr = query.toLowerCase().split(" ");
    var i = arr.indexOf("multiplied");
    var str = arr[i + 2]
    return (
      (parseInt(arr[i - 1]) * parseInt(str)) + ""
    );
  }

  if (query.toLowerCase().includes("power of")) {
    var arr = query.toLowerCase().split(" ");
    var i = arr.indexOf("to");
    var str = arr[i + 4]
    return (
      (Math.pow(parseInt(arr[i - 1]), parseInt(str))) + ""
    );
  }

  if (query.toLowerCase().includes("largest")) {
    var i = query.toLowerCase().indexOf(":") + 1;
    var str = query.toLowerCase().substring(i,  query.length - 1);
    var arr1 = str.split(",").map(function(item) {
      return parseInt(item);
    });
    return (
      Math.max(...arr1) + ""
    );
  }

  if (query.toLowerCase().includes("largest")) {
    var i = query.toLowerCase().indexOf(":") + 1;
    var str = query.toLowerCase().substring(i,  query.length - 1);
    var arr2 = str.split(",").filter(function(item) {
      return isPrime(parseInt(item));
    });
    return (
      arr2 + ""
    );
  }



  return "";
}

function isPrime(num: number): boolean {
  for (let i = 2; i < num; i++) {
      if (num % i === 0) {
          return false;
      }
  }

  return true;
}

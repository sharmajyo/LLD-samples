// https://leetcode.com/problems/validate-ip-address/

var validIPAddress = function (IP) {
  const subsIpV4 = IP.split('.');
  const subsIpV6 = IP.split(':');
  let result;
  if (subsIpV4.length == 4 && subsIpV6.length == 1) {
    for (let i = 0; i < subsIpV4.length; i++) {
      let element = subsIpV4[i];
      if (!element || (element.length > 1 && element.indexOf(0) === 0)) {
        result = "Neither";
        break;
      }
      const ipInt = Number(element);
      if (!/^[0-9]*$/.test(element) || ipInt < 0 || ipInt > 255) {
        result = "Neither";
        break;
      }

    };
    result = result || "IPv4";

  } else if (subsIpV6.length == 8 && subsIpV4.length == 1) {

    for (let i = 0; i < subsIpV6.length; i++) {
      let element = subsIpV6[i];
      if (element.length < 1 || element.length > 4) {
        result = "Neither";
        break;
      }
      if (!/^[0-9A-Fa-f]*$/g.test(element)) {
        result = "Neither";
        break;
      }
    };
    result = result || "IPv6";
  } else {
    result = "Neither";
  }

  return result;
};

console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"));
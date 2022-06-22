export const truncateAddress = (address) => {
  if (!address) return "No Account";
  const match = address.match(
    /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export const toHex = (num) => {
  const val = Number(num);
  return "0x" + val.toString(16);
};

export function onlyNumbers(text) {
  // var regex = /[+-]?\d+(\.\d+)?/g;
  // let text =str.match(regex).map(function (v) {
  //   return parseFloat(v);
  // });
  // Set to HTML
  console.log(text);
  // var inputResult = document.getElementById("buyAmount");
  // inputResult.value = Math.abs(text);
  return Math.abs(text);
}

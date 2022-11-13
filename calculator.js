let result;
const results = () => {
  /* есть 3 метода, которые позволяют преобразовать переменную в число:Метод Number(), Метод parseInt(), Метод parseFloat()*/
  let num1 = parseInt(document.getElementById('number1').value);
  let num2 = parseInt(document.getElementById('number2').value);
  /*в условной инструкции swich достаем инфомацию о нажатой кнопке математического действия*/
  switch (but) {
    case 'plus':
      result = num1 + num2;
      break;
    case 'minus':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
  }
  /*использование тернарного оператора, чтоб вывести предупреждение при делении на ноль*/
  num2 === 0
    ? (document.getElementById('res').innerHTML = 'Деление на ноль невозможно!')
    : (document.getElementById('res').innerHTML = result);
};
function del() {
  const del1 = (document.getElementById('number1').value = '');
  const del2 = (document.getElementById('number2').value = '');
  const del3 = (document.getElementById('res').innerHTML = '');
  return del1, del2, del3;
}

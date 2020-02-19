
    var digit = {
        n : prompt("Введите число от 0 до 999"),
        units: 0,
        tens: 0,
        hundreds: 0,
    };
    if (digit.n >= 0 && digit.n <= 999) {
        digit.hundreds = Math.floor(digit.n / 100 % 10);
        digit.tens = Math.floor(digit.n / 10 % 10);
        digit.units = Math.floor(digit.n % 10);
    } else {
        alert("Вы ввели число за диапазоном 0 - 999");
    }

     alert("Объект полученный из числа " + digit.n + "\n" + digit.units + " -Единицы\n" + digit.tens + " -Десятки\n" + digit.hundreds + " -Сотни");
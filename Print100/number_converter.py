number_words = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
}

def number_to_words(number):
    if number in number_words:
        return number_words[number]
    
    if number < 100:
        tens = number // 10 * 10
        units = number % 10
        return number_words[tens] + " " + number_words[units]
    
    if number < 1000:
        hundreds = number // 100
        remainder = number % 100
        if remainder == 0:
            return number_words[hundreds] + " hundred"
        else:
            return number_words[hundreds] + " hundred and " + number_to_words(remainder)
    
    if number < 1000000:
        thousands = number // 1000
        remainder = number % 1000
        if remainder == 0:
            return number_to_words(thousands) + " thousand"
        else:
            return number_to_words(thousands) + " thousand " + number_to_words(remainder)
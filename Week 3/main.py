import random

with open("some_digits.txt", "r") as f:
    pi = f.read()

current_pi = "3."

for digit in pi[2:]:
    while True:
        rnd = str(random.randint(0,9))
        if rnd == digit:
            current_pi += rnd
            break
    print(current_pi)

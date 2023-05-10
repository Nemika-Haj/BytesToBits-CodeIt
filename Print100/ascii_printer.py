from string import ascii_lowercase
import os

def get_letters():
    letters = {}
    
    for letter in ascii_lowercase:
        with open(f"./letters/{letter}.txt", "r", encoding="utf-8") as f:
            parts = f.readlines()
            letters[letter] = {
                "upper": parts[0],
                "lower": parts[1]               
            }

            

    return letters

def aprint(text: str):
    text = text.lower()
    letters = get_letters()

    print(" ".join([letters[letter]["upper"].replace("\n", "") if letter != " " else " " for letter in text]))
    print(" ".join([letters[letter]["lower"].replace("\n", "") if letter != " " else " " for letter in text]))
    print("\n")
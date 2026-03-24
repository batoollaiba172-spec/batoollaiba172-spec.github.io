# import random
import random

play_again = "yes"
  
while play_again.upper() == "YES":

    number = random.randint(1,10)
    guess = 0
    tries = 0

    while guess != number:
        guess = int(input(" enter guess number: "))
        tries = tries + 1

        if guess > number:
            print("too high please try again")
        elif guess == number:
            print("congragulation for correct guessing no:-", tries, "tries")
        else:
            print("too low try again")

    # again play ask the user
    play_again = input("play again(yes/no):")

print("Thanks for playing:")

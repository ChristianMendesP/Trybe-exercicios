# meu_numero = int(input("Digite um numero: "))
# while meu_numero < 42:
#     novo = int(input("Digite um numero: "))
#     meu_numero += novo

# print(meu_numero)

# import random

# random_number = random.randint(1, 10)
# print(random_number)
# guess = ""

# while guess != random_number:  # enquanto não adivinhar o número
#     guess = int(input("Qual o seu palpite? "))

# print("O número sorteado era: ", guess)


# import sys


# if __name__ == "__main__":
#     for argument in sys.argv:
#         print("Received -> ", argument)


# print("O resultado é", 42)  # saída: O resultado é 42
# print("Os resultados são", 6, 23, 42, sep='= ')

# print("Em duas ")
# print("linhas.")

# print("Na mesma", end=" ")
# print("linha.")

# import sys


# err = "Arquivo não encontrado"
# print(f"Erro aconteceu: {err}", file=sys.stderr)

# print(f"{1} / {2} = {0.5:.^11}")

# a, b = "cd"
# print(a)  # saída: c
# print(b)  # saída: d

# head, *tail = (
#     1,
#     2,
#     3,
# )
# print(head)  # saída: 1
# print(tail)  # saída: [2, 3]

# # escrita
# file = open("arquivo.txt", mode="w")
# LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
# file.writelines(LINES)
# file.close()

# # leitura
# file = open("arquivo.txt", mode="r")
# for line in file:
#     print(
#         line
#     )  # não esqueça que a quebra de linha também é um caractere da linha
# file.close()  # não podemos esquecer de fechar o arquivo

while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except ValueError:
        print("Oops!  That was no valid number.  Try again...")

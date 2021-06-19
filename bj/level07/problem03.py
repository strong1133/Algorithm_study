# 2021-06-18 벡준_단계:07 == 10809번 / 알파벳 찾기

def solve(a):
    alphabet = list(range(97, 123))
    for x in alphabet:
        print(a.find(chr(x)), end=" ")


a = input()
solve(a)

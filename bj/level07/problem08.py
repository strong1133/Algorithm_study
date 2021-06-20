# 2021-06-20 벡준_단계:07 == 2908번 / 상수

def solve(a, b):
    a = int(a[::-1])
    b = int(b[::-1])

    print(a) if a > b else print(b)


a, b = input().split()

solve(a, b)

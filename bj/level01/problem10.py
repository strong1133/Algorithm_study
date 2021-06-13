# 2021-06-13 벡준_단계:10 == 10430번 / 나머지


def sum(A, B, C):
    print((A+B) % C)
    print(((A % C) + (B % C)) % C)
    print((A*B) % C)
    print(((A % C) * (B % C)) % C)

    return ""


A, B, C = list(map(int, input().split()))

sum(A, B, C)

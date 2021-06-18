# 2021-06-18 벡준_단계:06 == 11654번 / 아스키 코드

def solve(a):
    if a is int:
        return hex(a)
    else:
        return ord(a)


a = input()

print(solve(a))

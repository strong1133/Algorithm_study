# 2021-07-04 벡준_단계:08 == 1712번 / 손익분기점

def solve(a, b, c):
    if b >= c:
        return -1
    else:
        return int(a/(c-b)+1)


a, b, c = map(int, input().split())

print(solve(a, b, c))

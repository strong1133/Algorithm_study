# 2021-07-04 벡준_단계:08 == 1712번 / 손익분기점

def solve(a, b, c):
    if b >= c:
        return -1
    else:
        return int(a/(c-b)+1)


a, b, c = map(int, input().split())

print(solve(a, b, c))

#  a + b * n = c * n
#  a + bn = cn
#  a = cn - bn
#  a= (c-b)n
#  n = a / c-b  => 이 경우 0이므로 +1 해줘야 수익이 시작했다 볼수 있음.

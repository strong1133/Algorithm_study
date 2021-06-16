# 2021-06-16 벡준_단계:03 == 11022번 / A+B - 8

import sys
Read = sys.stdin.readline


def Tool(v):
    for i in range(1, v+1):
        a, b = list(map(int, Read().split()))
        print('Case #'+str(i)+':', a, '+', b, '=', a+b)


v = int(Read())

Tool(v)

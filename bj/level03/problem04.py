# 2021-06-16 벡준_단계:03 == 15552번 / 빠른 A+B

import sys
Read = sys.stdin.readline


def Tool(v):
    for i in range(v):
        a, b = list(map(int, Read().split()))
        print(a+b)


v = int(Read())

Tool(v)

# 2021-06-16 벡준_단계:03 == 2439번 / 별 찍기 - 2


def Tool(v):
    for i in range(1, v+1):
        print(" "*(v-i)+"*"*i)


v = int(input())

Tool(v)

# 2021-06-16 벡준_단계:03 == 10871번 / X보다 작은 수


def Tool(a, b):
    arr = list(map(int, input().split()))
    for i in arr:
        if i < b:
            print(i, end=" ")


a, b = list(map(int, input().split()))

Tool(a, b)

# 2021-06-16 벡준_단계:03 == 2739번 / 구구단

def Tool(a):
    for i in range(1, 10):
        # print(str(a) + " * " + str(i) + " = " + str(a*i))
        print(a, '*', i, '=', a*i)


a = int(input())

Tool(a)

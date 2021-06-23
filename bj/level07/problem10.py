# 2021-06-21 벡준_단계:07 == 2941번 / 크로아티아 알파벳

def solve(a):
    dial = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
    ret = 0

    for i in dial:
        a = a.replace(i, 'a')
    ret = len(a)
    print(ret)


solve(a=input())

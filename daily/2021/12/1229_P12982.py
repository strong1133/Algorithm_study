# 2021-12-29 예산

def solution(d,b):
    res=0
    d= sorted(d, reverse=False) 
    for i in d:
        b-=i
        if b>=0:
            res+=1
    return res


d = [2,2,3,3]
b = 10
print(solution(d,b))
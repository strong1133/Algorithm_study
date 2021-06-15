# 2021-06-15 벡준_단계:02 == 9498번 / 시험 성적

def Tool(a):
    if 100 >= a >= 90:
        return "A"
    elif a >= 80:
        return"B"
    elif a >= 70:
        return"C"
    elif a >= 60:
        return"D"
    else:
        return"F"


a = int(input())

print(Tool(a))

# 2021-06-18 벡준_단계:07 == 1152번 / 단어의 갯수

def solve(words):
    if words == "":
        return print(0)
    ans = words.split(" ")
    print(len(ans))


words = input().rstrip().lstrip()
solve(words)

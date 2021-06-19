# 2021-06-18 벡준_단계:07 == 1157번 / 단어 공부

def solve(words):
    arr_cnt = []
    unique = list(set(words))
    for i in unique:
        arr_cnt.append(words.count(i))
    if arr_cnt.count(max(arr_cnt)) > 1:
        print("?")

    else:
        print(unique[arr_cnt.index(max(arr_cnt))])

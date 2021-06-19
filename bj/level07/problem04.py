# 2021-06-18 벡준_단계:07 == 2675번 / 문자열 반복

def solve(x):

    for _ in range(x):
        ans = ""
        num, text = list(map(str, input().split()))
        for s in str(text):
            ans += s*int(num)
        print(ans)


x = int(input())
solve(x)

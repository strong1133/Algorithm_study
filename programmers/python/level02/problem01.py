# 2021-06-28 프로그래머스 level02 - 영어 끝말 잇기 -> 파이썬 풀이

def solve(n, words):
    for i in range(1, len(words)):
        if words[i][0] != words[i-1][-1] or words[i] in words[:i]:
            return [(i % n)+1, (i//n)+1]
    else:
        return [0, 0]


words = ["tank", "kick", "know", "wheel",
         "land", "dream", "mother", "robot", "tank"]
n = 3
print(solve(n, words))


# 번호 = (i%n)+1,
# 차례 = (i//n)+1

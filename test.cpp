#include <stdio.h>

int main()
{
    int a[2][2] = {{11, 22}, {33, 44}};
    int i;
    int *p;

    p = a[0];
    for (i = 0; i < 2; i++)
    {
        printf("%d", *(p + i));
    }

    printf("`n");
    p = a[1];

    for (i = 0; i < 2; i++)
    {
        printf("%d", *(p + i));
    }
}

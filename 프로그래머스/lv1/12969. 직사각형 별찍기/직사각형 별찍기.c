#include <stdio.h>

int main(void) {
    int a;
    int b;
    int i, j;
    scanf("%d %d", &a, &b);
    
    for(i = 0; i < b; i++){ // 세로의 길이(b)만큼 반복
        for(j = 0; j < a; j++){ // 가로의 길이(a)만큼 별 찍기
            printf("*");
        }
        printf("\n"); // 한줄이 끝나면 개행
    }
    
    return 0;
}

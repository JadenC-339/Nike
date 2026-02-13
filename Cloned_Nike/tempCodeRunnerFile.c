#include<stdio.h>
#include<stdlib.h>
#include<stdbool.h>

int main()
{
    int n,i, pass, tmp, a[n];
    printf("Enter the number of elements of the array:");
    scanf("%d",&n);
    printf("Enter %d elements", n);
    for(i=0; i<n; i++)
    {
        scanf("%d",&a[i]);
    }

    bool exchange=true;
    for(i=0; i<n-1 && exchange; pass++)
    {
        exchange=false;
        for(i=0; i<n-pass; i++)
        {
            if(a[i]>a[i+1])
            {
                tmp = a[i];
                a[i] = a[i+1];
                a[i+1] = tmp;
                exchange = true;
            }

        }

        for(int j=0; j<n; j++)
        {
            printf("%d", a[j]);
        }

    }

    return 0;
}
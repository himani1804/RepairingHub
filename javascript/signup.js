#include<iostream>
difine max_size //maximum size  array
int main()
{
	int arr[max_size];
	int i,max,min,size;
		
	printf("enter side of the array");
	for(i=0;i<size;i++)
	{
		scanf("%d",& arr[i]);
	}
		
		max = arr[0];
		min=arr[0];
		
		for(i=1; i<size; i++)
	{
	if(arr[i]>max)
	{
		max=arr[i];
		if(arr[i]<min)
		{
			min=arr[i];
		}
	}
	printf("maximum element=%d\n",max);
	printf("minimum element=%d",min)
	return 0;
			
		}
	
	
}
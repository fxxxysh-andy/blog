#include <windows.h>
#include <unistd.h>
//#include <iostream>
#include <stdio.h>
#include <x86intrin.h>
//using namespace std;
/*
int main(void)
{
	__rdtsc();
	return 0;
}*/
int main() 
{ 
	freopen("out.txt","w",stdout);
    HANDLE curhandle = GetCurrentThread();//获取当前线程句柄 
    DWORD_PTR dwThreadAffinityMask = 2; 
    if(!SetThreadAffinityMask(curhandle, dwThreadAffinityMask)) 
    { 
        return 0; 
    }

    int busytime = 1000000;
    int idletime = 1000; 
    //DWORD starttime = 0; 
    //获取当前cpu的周期数  
    unsigned __int64 starttime; 
    unsigned __int64 endtime; 
    starttime = __rdtsc(); 
    printf("%lld\n",__rdtsc()-starttime);
    //cout<<_rdtsc()-starttime<<endl;
    //cout<<_rdtsc()-starttime<<endl;
    int time=0;
    Getfreq();
    while(time<5000000)
    {
    	printf("%lld\n",_rdtsc()-starttime);
		time++;
	} 
	fclose(stdout);
    //Sleep(idletime);  
    return 0; 
} 

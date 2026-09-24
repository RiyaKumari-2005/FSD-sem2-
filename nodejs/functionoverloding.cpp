//create a class number contaning an intrger value .overloading the following unary poperation 
//++(pre-increment), --(pre-decrement), +(positive), -(negative), !
#include<iostream>
using namespace std;

class Number {
private:
    int value;
public:
    Number(int v) : value(v) {}
    
    // Pre-increment
    Number& operator++() {
        ++value;
        return *this;
    }
    
    // Pre-decrement
    Number& operator--() {
        --value;
        return *this;
    }
    
    // Positive
    Number operator+() {
        return Number(+value);
    }
    
    // Negative
    Number operator-() {
        return Number(-value);
    }
    
    // Logical NOT
    bool operator!() {
        return !value;
    }
    
    void display() {
        cout << value << endl;
    }
};

int main() {
    Number num(5);
    
    cout << "Original value: ";
    num.display();
    
    ++num;
    cout << "After pre-increment: ";
    num.display();
    
    --num;
    cout << "After pre-decrement: ";
    num.display();
    
    Number posNum = +num;
    cout << "Positive value: ";
    posNum.display();
    
    Number negNum = -num;
    cout << "Negative value: ";
    negNum.display();
    
    cout << "Logical NOT of original value: " << !num << endl;
    
    return 0;
}

//2.	Create a class Time containing hours, minutes, and seconds. Overload the unary ++ operator to increase the time by one second. Properly handle:
//•	60 seconds → 1 minute 
//•	60 minutes → 1 hour 
//•	24 hours → 0 hours

#include <iostream>
using namespace std;
class Time {
private:
    int hours, minutes, seconds;
public:
    Time(int h, int m, int s) : hours(h), minutes(m), seconds(s) {}
    
    Time& operator++() {
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
                if (hours == 24) {
                    hours = 0;
                }
            }
        }
        return *this;
    }
    
    void display() {
        cout << hours << ":" << minutes << ":" << seconds << endl;
    }
};

int main() {
    Time t(23, 59, 59);
    cout << "Original time: ";
    t.display();
    
    ++t;
    cout << "After incrementing by one second: ";
    t.display();
    
    return 0;
}

//3.	Create a class Student containing the student's name and total marks. Overload the > operator using a friend function to compare the marks of two students.


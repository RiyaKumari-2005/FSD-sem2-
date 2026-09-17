1.	Develop a C++ program to demonstrate the use of classes and objects by implementing a student record management system. Define a class Student containing data members for roll number, name (character array), and marks. Write member functions to initialize the data and display the student details. Instantiate an object of the class in the main() function and display the stored record.
#include <iostream>
#include <cstring>
using namespace std;

class Student {
private:
    int rollNumber;
    char name[100];
    float marks;

public:
    void initialize(int roll, const char* n, float m) {
        rollNumber = roll;
        strcpy(name, n);
        marks = m;
    }

    void display() {
        cout << "Roll Number: " << rollNumber << endl;
        cout << "Name: " << name << endl;
        cout << "Marks: " << marks << endl;
    }
};

int main() {
    Student s1;
    s1.initialize(1, "Alice", 85.5);
    s1.display();
    return 0;
}
Q 2.	Develop a C++ program that implements three separate functions using Call by Value, Call by Reference, and Call by Address. Each function should increment the value of a given integer by 10. Compare the output and explain which parameter passing techniques modify the original variable and why.
#include <iostream>
using namespace std;

// Call by Value
void incrementByValue(int x) {
    x += 10;
    cout << "Inside incrementByValue: " << x << endl;
}

// Call by Reference
void incrementByReference(int& x) {
    x += 10;
    cout << "Inside incrementByReference: " << x << endl;
}

// Call by Address
void incrementByAddress(int* x) {
    *x += 10;
    cout << "Inside incrementByAddress: " << *x << endl;
}

int main() {
    int a = 5;
    cout << "Original value of a: " << a << endl;

    incrementByValue(a);
    cout << "After call by value: " << a << endl;

    incrementByReference(a);
    cout << "After call by reference: " << a << endl;

    incrementByAddress(&a);
    cout << "After call by address: " << a << endl;

    return 0;
}
//Write a C++ program to store the marks of students in a vector. Use a range-based for loop with the auto keyword to calculate and display the highest, lowest, and average marks using oop concepts. The program should define a class Student with appropriate data members and member functions to manage the student records.

```cpp
#include <iostream>
#include <vector>
#include <limits>
using namespace std;

class Student {
private:
    vector<float> marks{25, 30, 45, 50, 60, 70, 80, 90};
    int highestMark;
    int lowestMark;
    int averageMark;
    public:
    void calculateMarks() {
        highestMark = numeric_limits<int>::min();
        lowestMark = numeric_limits<int>::max();
        float sum = 0;

        for (const auto& mark : marks) {
            if (mark > highestMark) {
                highestMark = mark;
            }
            if (mark < lowestMark) {
                lowestMark = mark;
            }
            sum += mark;
        }
        averageMark = sum / marks.size();
    }
int getHighestMark() {
        return highestMark;
    }

    int getLowestMark() {
        return lowestMark;
    }

    float getAverageMark() {
        return averageMark;
    }
};
int main() {
    Student student;
    student.calculateMarks();

    cout << "Highest Mark: " << student.getHighestMark() << endl;
    cout << "Lowest Mark: " << student.getLowestMark() << endl;
    cout << "Average Mark: " << student.getAverageMark() << endl;

    return 0;
}


class xyz;
class abc
{
    private:
        int a;
        public:
        void setData(int x)
        {
            a = x;
        }
        void displayData()
        {
            cout << "Value of a: " << a << endl;
        }
friend void maxvalue(abc, xyz);
};
class xyz
{
    private:
        int b;
    public:
        void setData(int y)
        {
            b = y;
        }
        void displayData()
        {
            cout << "Value of b: " << b << endl;
        }
        friend void maxvalue(abc, xyz);
    };
void maxvalue(abc obj1, xyz obj2)
{
    if (obj1.a > obj2.b)
    {
        return obj1.a;
    }
    else
    {
        return obj2.b;
    }
int main()
{
    abc obj1;
    xyz obj2;
    obj1.setData(10);
    obj2.setData(20);
    cout << "Maximum value: " << maxvalue(obj1, obj2) << endl;
    return 0;
}
// Copy constructor in C++
class MyClass {
private:
    int value;
public:
    MyClass(int x) : value(x) {}
    // Copy constructor
    MyClass(const MyClass& other) : value(other.value) {}
    void display() {
        cout << "Value: " << value << endl;
    }
};

class Book{
    string title;
    int id;
    float price;
    public:
Book(string t, int i, float p){
    title = t;
    id = i;
    price = p;
}
Book(const Book &b){
    title = b.title;
    id = b.id;
    price = b.price;
}
};
int main() {
    MyClass obj1(10);
    MyClass obj2 = obj1; // Calls copy constructor
    obj2.display();

    Book book1("C++ Programming", 101, 29.99);
    Book book2 = book1; // Calls copy constructor
    return 0;
}
//write a c++ program to implement a Bank Account  Management system using data hiding , constructor,destrutor,and member function
#include <iostream>
#include <string>
using namespace std;

class BankAccount
{
private:
    int accountNumber;
    string accountHolderName;
    double balance;

public:
    // Constructor
    BankAccount(int accNo, string name, double initialBalance)
    {
        accountNumber = accNo;
        accountHolderName = name;

        if (initialBalance >= 0)
            balance = initialBalance;
        else
            balance = 0;

        cout << "Bank account created successfully!" << endl;
    }

    // Deposit function
    void deposit(double amount)
    {
        if (amount <= 0)
        {
            cout << "Invalid deposit amount! Amount must be positive." << endl;
        }
        else
        {
            balance += amount;
            cout << amount << " deposited successfully." << endl;
        }
    }

    // Withdraw function
    void withdraw(double amount)
    {
        if (amount <= 0)
        {
            cout << "Invalid withdrawal amount! Amount must be positive." << endl;
        }
        else if (amount > balance)
        {
            cout << "Insufficient balance! Withdrawal cannot be completed." << endl;
        }
        else
        {
            balance -= amount;
            cout << amount << " withdrawn successfully." << endl;
        }
    }

    // Display account details
    void displayDetails()
    {
        cout << "\n----- Account Details -----" << endl;
        cout << "Account Number: " << accountNumber << endl;
        cout << "Account Holder Name: " << accountHolderName << endl;
        cout << "Balance: " << balance << endl;
    }

    // Destructor
    ~BankAccount()
    {
        cout << "\nBank account object for "
             << accountHolderName
             << " is destroyed." << endl;
    }
};

int main()
{
    BankAccount account1(101, "Riya Kumari", 5000);

    account1.displayDetails();

    cout << "\n--- Transactions ---" << endl;

    account1.deposit(2000);
    account1.withdraw(1500);
    account1.withdraw(10000);
    account1.deposit(-500);
    account1.withdraw(-100);

    account1.displayDetails();

    return 0;
}

// Create an array of 4 Book objects, initialized using the parameterized constructor (values can be hardcoded or taken as input), and declare a pointer Book *ptr pointing to the start of the array. Using pointer arithmetic (not array indexing like books[i]), traverse the array to print each book's details, and call applyDiscount() on each book with a 15% discount, storing the results in a second array of Book objects of the same size. Then, using a separate pointer Book *p, traverse the discounted array and print the updated title and price of each book.

#include <iostream>
#include <string>
using namespace std;

class Book {
    string title;
    double price;

public:

    Book(string t, double p) {
        title = t;
        price = p;
    }

    // Display book details
    void display() {
        cout << "Title: " << title << endl;
        cout << "Price: Rs. " << price << endl;
    }

    // Apply discount and return a new Book object
    Book applyDiscount(double discount) {
        double discountedPrice = price - (price * discount / 100);
        return Book(title, discountedPrice);
    }

    // Functions to print updated title and price
    void displayUpdated() {
        cout << "Updated Title: " << title << endl;
        cout << "Updated Price: Rs. " << price << endl;
    }
};

int main() {
    // 1. Create an array of 4 Book objects
    Book books[4] = {
        Book("C++ Programming", 500),
        Book("Data Structures", 600),
        Book("Operating Systems", 700),
        Book("Computer Networks", 800)
    };

    // 2. Pointer pointing to the start of the array
    Book *ptr = books;

    // Second array to store discounted books
    Book discountedBooks[4] = {
        Book("", 0),
        Book("", 0),
        Book("", 0),
        Book("", 0)
    };

    cout << "----- Original Book Details -----" << endl;

    // 3. Traverse using pointer arithmetic
    for (int i = 0; i < 4; i++) {
        cout << "\nBook " << i + 1 << ":" << endl;

        (ptr + i)->display();

        // Apply 15% discount and store result
        discountedBooks[i] = (ptr + i)->applyDiscount(15);
    }

    // 4. Separate pointer for discounted array
    Book *p = discountedBooks;

    cout << "\n----- Discounted Book Details -----" << endl;

    // 5. Traverse discounted array using pointer arithmetic
    for (int i = 0; i < 4; i++) {
        cout << "\nBook " << i + 1 << ":" << endl;

        (p + i)->displayUpdated();
    }

    return 0;
}
/**
 * @file example.cpp
 * @brief This is a brief description of what this file contains.
 * hiiii varshaaaa
 * This file serves as an example for Doxygen documentation.
 */

//Hello world

#include <iostream>
//this is himabindu editing.
/**
 * @brief A simple function to add two integers.
 * 
 * This function takes two integers as input and returns their sum.
 * 
 * @param a The first integer.
 * @param b The second integer.
 * @return The sum of the two integers.
 */
int add(int a, int b) {
    return a + b;
}

/**
 * @brief A class representing a rectangle.
 * 
 * This class represents a rectangle with width and height.
 */
class Rectangle {
public:
    /**
     * @brief Construct a new Rectangle object.
     * 
     * @param width The width of the rectangle.
     * @param height The height of the rectangle.
     */
    Rectangle(int width, int height) : width_(width), height_(height) {}

    /**
     * @brief Get the area of the rectangle.
     * 
     * @return The area of the rectangle.
     */
    int getArea() const {
        return width_ * height_;
    }

private:
    int width_; /**< The width of the rectangle. */
    int height_; /**< The height of the rectangle. */
};

int main() {
    int result = add(3, 4);
    std::cout << "3 + 4 = " << result << std::endl;

    Rectangle rect(5, 6);
    std::cout << "Area of rectangle: " << rect.getArea() << std::endl;

    return 0;
}

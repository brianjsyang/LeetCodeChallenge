/**
 * Implement the class SubrectangleQueries which receives a rows x cols rectangle as a matrix of integers in the constructor and supports two methods:
 * 
 * 1. updateSubrectangle(int row1, int col1, int row2, int col2, int newValue)
 *      Updates all values with newValue in the subrectangle whose upper left coordinate is (row1,col1) and bottom right coordinate is (row2,col2).
 * 
 * 
 * 2. getValue(int row, int col)
 *      Returns the current value of the coordinate (row,col) from the rectangle.
 * 
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function(rectangle) {
    this.r = rectangle;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2 
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
    for(; row1 <= row2; row1++){
        for(let c = col1; c <= col2; c++){
            this.r[row1][c] = newValue;
        }
    }
};

/** 
 * @param {number} row 
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function(row, col) {
    return this.r[row][col];
};

/** 
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */
function Group() {
    this.data = [];
}

// Define the prototype with groupByFields method
Group.prototype = {
    // Method to add an element to the array
    add: function(element) {
        this.data.push(element);
    },

    // Method to group elements by specified field
    groupByFields: function(field) {
        return this.data.reduce((accumulator, currentValue) => {
            // Get the value of the specified field
            const key = currentValue[field];
            
            // Ensure the accumulator has a key for this field value
            if (!accumulator[key]) {
                accumulator[key] = [];
            }
            
            // Push the current value to the appropriate group
            accumulator[key].push(currentValue);
            
            return accumulator;
        }, {});
    }
};

// Example usage:
var groupInstance = new Group();

// Adding elements (objects with various properties)
groupInstance.add({ name: 'Alice', age: 30 });
groupInstance.add({ name: 'Bob', age: 25 });
groupInstance.add({ name: 'Charlie', age: 30 });
groupInstance.add({ name: 'David', age: 25 });

console.log("Original Array:");
console.log(groupInstance.data);

// Grouping elements by the 'age' field
var groupedByAge = groupInstance.groupByFields('age');

console.log("\nGrouped by Age:");
console.log(groupedByAge);

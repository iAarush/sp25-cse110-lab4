1. The bug is that the inputs are not converted into integers to add. Rather, they are kept as strings (default for input) and simply concatenated. 

2. I would fix it by typecasting both to integers and then returning the result of integer addition.
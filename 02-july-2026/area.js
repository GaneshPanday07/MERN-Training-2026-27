//area of circle
//area of rectangle .
//area of triangle.

let circle = (r)=> {
    let pi = 3.14;
    let area = pi*r*r;
    return area;
}

let rectangle = (l, b)=> {
    let areaofrectangle = l*b;
    return areaofrectangle;
}

let triangle = (b, h)=> {
    let areaoftriangle = .5*b*h;
    return areaoftriangle;
}

module.export = {
    circle,
    rectangle,
    triangle
}
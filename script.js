var matrix = 
[[5, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 0, 0, 4, 1, 0, 0 ],
[1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[4, 1, 0, 4, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0],
[0, 1, 1, 0, 4, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
[1, 1, 0, 1, 5, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 5, 0, 0, 0, 0, 4, 0, 0, 1, 0, 0, 2, 0, 0, 1, 0, 0, 1, 0, 0],
[1, 4, 0, 1, 1, 0, 0, 0, 0, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0],
[1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0],
[1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 3, 1, 4, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
[1, 0, 1, 1, 0, 0, 3, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
[1, 1, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 1, 0, 4, 3, 0, 0, 0, 0, 0, 0, 1, 0, 5, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
[1, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
[0, 1, 0, 0, 0, 5, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 3, 0, 0, 1, 0, 0],
[0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
[1, 1, 0, 1, 4, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 2, 1, 0, 1, 0, 0, 1, 0, 0],
[1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 3, 0, 0, 1, 0, 0],
[1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 5, 1, 0, 1, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
[1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 2, 0, 0, 2, 1, 0, 0, 0, 0, 1, 0, 0],
[1, 5, 1, 0, 0, 0, 3, 0, 0, 1, 0, 1, 2, 0, 0, 2, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
[1, 0, 1, 0, 0, 0, 3, 0, 0, 1, 0, 1, 2, 4, 0, 2, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0],
[1, 0, 1, 1, 0, 0, 1, 0, 1, 2, 0, 0, 2, 0, 0, 0, 0, 1, 1, 0, 1, 0, 3, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
[1, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 3, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0],
[1, 0, 4, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 3, 0, 0, 1, 0, 0],
[0, 1, 1, 5, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
[1, 1, 0, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 2, 0, 0, 1, 0, 0, 1, 0, 0],
[1, 0, 0, 1, 1, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 4, 0, 3, 0, 0, 1, 0, 0],
[1, 1, 1, 0, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0],
[1, 0, 1, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 2, 0, 4, 0, 0, 0, 0, 0, 1, 0, 0],
[1, 0, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
[1, 0, 1, 1, 0, 0, 3, 1, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[1, 1, 1, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
[1, 1, 0, 1, 2, 0, 0, 0, 3, 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1, 0, 4, 0, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],

];
//random matrix
// var m = 50
// var n = 50
// var matrix = []
// var side = 10
// 

// for (var y = 0; y < m; y++) {
//     matrix[y] = []
//     for (var x = 0; x < n; x++) {




//         function getRandomInt(max) {
//             return Math.floor(Math.random() * Math.floor(max));
//         }
        

//         matrix[y].push(getRandomInt(5))



//     }

// }
// console.log(matrix)





var side = 25;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var vorsordArr=[]
var monsterArr=[]

function setup() {
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');




for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
        if (matrix[y][x] == 1) {
            var gr = (new Grass(x, y));
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var xt = (new Xotaker(x, y))
            xotakerArr.push(xt)
        }
        else if (matrix[y][x] == 3) {
            var gsh = (new Gishatich(x, y))
            gishatichArr.push(gsh);

        }
        else if (matrix[y][x] == 4) {
            var vrd = new Vorsord(x, y);
            vorsordArr.push(vrd);

        }
        else if (matrix[y][x] == 5) {
            var monstrik=new Monster(x, y)
            monsterArr.push(monstrik);
        }
       
    }
}

}



function draw() {
    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill('red');
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 4) {
                fill('black');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("greenyellow");
                rect(x * side, y * side, side, side);
            }

        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].move()
         xotakerArr[i].eat()
        
         xotakerArr[i].mult()
         xotakerArr[i].die()
    }

    for (var i in gishatichArr) {
        gishatichArr[i].move()
        gishatichArr[i].eat()
        
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }
    for (var i in vorsordArr) {
        vorsordArr[i].move()
        vorsordArr[i].eat()
        
        vorsordArr[i].mult()
        vorsordArr[i].die()
    }
    for (var i in monsterArr) {
        monsterArr[i].move();
        monsterArr[i].eat();
        monsterArr[i].mult();
        if (monsterArr[i].energy <= 5) {
            monsterArr[i].die();
        }
    }
    
    
   
}

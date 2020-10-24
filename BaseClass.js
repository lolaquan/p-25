class BaseClass
{
    constructor(x, y, width, height, r){
var options={
'restitution': 0.3,
'friction': 0.5,
'desity': 1.2

}

this.body = Bodies.circle(this.x, this.y, this.r/2, this.width, this.height, options);
this.x = x;
this.y = y;
this.r = r; 
this.width = width;
this.height = height;
this.image = loadImage("base.png");
World.add(world, this.body);

}

display()
{
    var pos =this.body.position;
    push()
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height, this.r, this.r);
    pop();

}
}
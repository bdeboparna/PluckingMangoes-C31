class Mango{
  constructor (x,y,r) {
   
  var options={
  isStatic:true,
  restitution:0,
  friction:1,
  

 }
this.x=x;
this.y=y;
this.r=r
this.image=loadImage("mango.png")
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body)

  }
  display() {

    var paperpos=this.body.position;
    
    push()
    translate(paperpos.x,paperpos.y)
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop()
    
    }
}
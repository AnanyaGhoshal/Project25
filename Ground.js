class Ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
						
			}

		this.body=Bodies.rectangle(x, y, w, h , options);

		this.x=x;
        this.y=y;
        this.w=w
        this.h=h
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos = this.body.position;		

			//push();
			//translate(groundPos.x, groundPos.y);
			rectMode(CENTER);
			//strokeWeight(4);
			fill(128,128,128);
			rect(pos.x,pos.y,this.w, this.h);
			//pop();
			
	}

}
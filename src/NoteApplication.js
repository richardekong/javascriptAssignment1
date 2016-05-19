



 
function note(author)
{
	
	this.author=author;
	this.noteList=[];

this.create=function(note_content)
{
	this.noteList.push(note_content);
};
this.listNote=function()
{
	
	
	var note_id=0;
	for (note_id; note_id<this.noteList.length;note_id++)
	{
	 console.log(note_id+" "+this.noteList[note_id]+"\n"+"By Author: " + this.author+"\n\n");
	}
};
this.get=function(note_id)
{
	return this.noteList[note_id];
	
};
this.search=function(search_text)
{
	
	var buffer=[];
	var note_id=0;
	for (note_id=0;note_id<this.noteList.length;note_id++)
	{
		if (this.noteList[note_id].includes(search_text))
		{
			
			buffer.push(this.get(note_id));
			break;
		}
	}
	
			return "Showing results for search "+ search_text+"\n\n"+"Note_Id: "+(note_id)+"\n"+buffer+"\n"+"By Author "+ this.author+"\n\n";
		
};
this.delete=function(note_id)
{
	    var bin=[];
	    bin.push(this.get(note_id));
		this.noteList.splice(note_id,1);
		console.log(bin.toString()+" has been deleted"+"\n"+"\n"+"Note List Remains...");
};
this.edit=function(note_id, new_content)
{
	
		this.noteList[note_id]=new_content;	
}
}

/**var myNote=new note("Richard Ekong");
myNote.create("I love what I do");
myNote.create("Commercial Law");
myNote.create("World at war")
myNote.create("Sleepy Harrows");
myNote.create("The Andelian");
myNote.create("The Boot-camp")
myNote.listNote();
//myNote.delete(1);
console.log("After deleting "+myNote.noteList[1]+"\n\n");
myNote.listNote();
console.log(myNote.search("An"));
myNote.delete(3);

myNote.listNote();**/
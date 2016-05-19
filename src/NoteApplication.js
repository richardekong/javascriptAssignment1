



 
function note(author)
{
	
	this.author=author;
	this.noteList=[];

this.createNote=function(note_content)
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
		}
	}
			return "Showing results for search "+ search_text+"\n\n"+"Note_Id: "+note_id+"\n"+buffer.toString()+"\n"+"By Author "+ this.author;
		//	console.log(buffer);
};
this.delete=function(note_id)
{
	
		this.noteList.splice(note_id,1);
};
this.edit=function(note_id, new_content)
{
	
		this.noteList[note_id]=new_content;	
}
}

var myNote=new note("Richard Ekong");
myNote.createNote("I love what I do");
myNote.createNote("Commercial Law");
myNote.createNote("World at war")
myNote.createNote("Sleepy Harrows")
myNote.listNote();
//myNote.delete(1);
console.log("After deleting "+myNote.noteList[1]+"\n\n");
myNote.listNote();
console.log(myNote.search("Sleepy"));





 
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
	
	
	var note_id=0;
	for (note_id=0;note_id<this.noteList.length;note_id++)
	{
		if (this.noteList[note_id]===search_text)
		{
			console.log("Showing results for search"+search_text);
			console.log("Note ID:"+" "+note_id);
			console.log("By Author"+" "+this.author);
		}
	}
};
this.delete=function(note_id)
{
	
		this.noteList.splice(note_id,1,noteList[note_id]);
};
this.edit=function(note_id, new_content)
{
	
	note_id=0;
	for (note_id=0;note_id<this.noteList.length;note_id++)
	{
		this.noteList[note_id]=new_content;

	}
}
}
//var testNote=new Note("Richard");
var myNote=new note("Richard");
myNote.createNote("I love what I do");
myNote.createNote("Commercial Law");
myNote.listNote();
myNote.delete(1);

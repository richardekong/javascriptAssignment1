describe("NoteApplication test", function() {
  var noteApp;

  beforeEach(function() {
    noteApp = new note("Richard Ekong");
  });

  it("should have an author named Richard Ekong", function() {
    expect(noteApp.author).toEqual("Richard Ekong");
  });

  it("should have a notes list of type array", function() {
    expect(Array.isArray(noteApp.noteList)).toBeTruthy();
  })

  it("should have a create function", function() {
    expect(typeof noteApp.create === 'function').toBeTruthy();
  });

  it("should be able to make a note", function() {
    var note_content = "I Love What I Do";
    noteApp.create(note_content);
    expect(noteApp.noteList).toContain(note_content);
  });

  it("should have a listNote function", function() {
    expect(typeof noteApp.listNote === 'function').toBeTruthy();
  });

  it("should have a get function", function() {
    expect(typeof noteApp.get === 'function').toBeTruthy();
  });

  it("should be able to return a note", function() {
    var note_content = "I Love What I Do";
    noteApp.create(note_content);

    expect(noteApp.get(0) === note_content).toBeTruthy();
  });

  it("should have a search function", function() {
    expect(typeof noteApp.search === 'function').toBeTruthy();
  });

  it("should be able to search a note", function() {
    var note_content = "I Love What I Do";
    var searchText = "What";
    var heading = "\nShowing result for search " + searchText + "\n";
    noteApp.create(note_content);

    expect(noteApp.search(searchText).length).toBeGreaterThan(heading.length);
  });

  it("should have an edit function", function() {
    expect(typeof noteApp.edit === 'function').toBeTruthy();
  });

  it("should be able to edit a note", function() {
    var newNote = "Think Bigger";
    var note_content = "My first note";
    noteApp.create(note_content);

    expect(noteApp.edit(0, newNote) === newNote).toBeFalsy();
  });

  it("should have a delete function", function() {
    expect(typeof noteApp.delete === 'function').toBeTruthy();
  });

  it("should be able to delete a note", function() {

    var note_content = "I Love What I Do";
    noteApp.create(note_content);
    noteApp.delete(0);

    expect(noteApp.noteList).not.toContain(note);
  });
});
  

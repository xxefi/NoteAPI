using MyNotes.Dtos;

namespace MyNotes.Contracts;

public record GetNotesResponse(List<NoteDto> notes);


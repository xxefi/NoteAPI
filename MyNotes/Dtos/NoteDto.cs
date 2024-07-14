namespace MyNotes.Dtos;

public record NoteDto(Guid Id, string Title, string Description, DateTime CreatedAt);
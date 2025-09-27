var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Enable serving static files from wwwroot folder
app.UseStaticFiles();

// Redirect root URL to index.html
app.MapGet("/", () => Results.Redirect("/index.html"));

app.Run();

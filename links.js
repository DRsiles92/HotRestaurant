app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "main.html"));
  });
  
  app.get("reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });
  
  app.get("waitlist", function(req, res) {
    res.sendFile(path.join(__dirname, "waitlist.html"));
  });
  
  app.get("/api/reservedtables", function(req, res) {
    return res.json(characters);
  });
  
  app.get("/api/waitlist", function(req, res) {
    return res.json(characters);
  });
  
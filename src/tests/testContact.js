// quick test script to POST a contact message to the running server
(async () => {
  try {
    const res = await fetch("http://127.0.0.1:4000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName: "Test User", email: "test@example.com", phone: "03001234567", message: "Hello from test script" }),
    });
    const data = await res.json();
    console.log("Status:", res.status);
    console.log("Response:", data);
  } catch (err) {
    console.error("Test failed:", err);
  }
})();
